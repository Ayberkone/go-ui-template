import React from "react";
import { storiesOf } from "@storybook/react";
import { Home } from "../src/Home/index";
import '@storybook/addon-viewport/register';
import data from './data';


storiesOf("Views", module).add("wide-view", () => (<Home data={data} view='wide' />));
storiesOf("Views", module).add("tight-view", () => (<Home data={data} view='tight' />));

