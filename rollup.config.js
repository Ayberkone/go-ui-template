import { readdirSync } from "fs";
import path from "path";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".json",".png"];
const CODES = [
  "THIS_IS_UNDEFINED",
  "MISSING_GLOBAL_NAME",
  "CIRCULAR_DEPENDENCY"
];

const getChunks = URI =>
  readdirSync(path.resolve(URI))
    .filter(x => x.includes(".js"))
    .reduce(
      (a, c) => ({ ...a, [c.replace(".js", "")]: `src/${c}` }),
      {}
    );

const discardWarning = warning => {
  if (CODES.includes(warning.code)) {
    return;
  }
  console.error(warning);
};

const env = process.env.NODE_ENV;

const commonPlugins = () => [
  external({
    includeDependencies: true
  }),
  babel({
    babelrc: false,
    presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
    extensions: EXTENSIONS,
    exclude: "node_modules/**",
    plugins: [["@babel/plugin-transform-runtime"]],
    runtimeHelpers: true
  }),
  commonjs({
    include: /node_modules/
  }),
  postcss({
    plugins: [
      postcssModules({
        getJSON (id, exportTokens) {
          cssExportMap[id] = exportTokens;
        }
      })
    ],
    getExportNamed: false,
    getExport (id) {
      return cssExportMap[id];
    },
    extract: 'dist/styles.css',
  }),
  replace({ "process.env.NODE_ENV": JSON.stringify(env) }),
  resolve({
    extensions: EXTENSIONS,
    preferBuiltins: true,
    dedupe: ["react", "react-dom"]
  }),
  copy({
    targets: [
      { src: `src/assets/images/**`, dest: `dist/assets/images/` }
    ]
  })
];

export default [
  {
    onwarn: discardWarning,
    input: `src/index.js`,
    output: {
      esModule: false,
      file: pkg.unpkg,
      format: "umd",
      name: pkg.name.replace("-", "").toUpperCase(),
      exports: "named",
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    },
    plugins: [...commonPlugins(), env === "production" && terser()]
  },
  {
    onwarn: discardWarning,
    input: getChunks(`src`),
    output: [
      {
        dir: `dist/esm`,
        format: "esm",
        exports: "named",
        sourcemap: true
      },
      {
        dir: `dist/cjs`,
        format: "cjs",
        exports: "named",
        sourcemap: true
      }
    ],
    plugins: commonPlugins(),
    external: ["react", "react-dom"]
  }
];
