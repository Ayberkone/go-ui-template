(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={game:{gameFew:{url:"https://catalog.api.gamedistribution.com/api/v1.0/rss/All/?collection=exclusive&categories=All&type=all&format=json&page=1&amount={amount}",amount:5},gameLot:{url:"https://catalog.api.gamedistribution.com/api/v1.0/rss/All/?collection=exclusive&categories=All&type=all&format=json&page=1&amount={amount}",amount:30}}}},228:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),makeStyles=__webpack_require__(854);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Hook_useGameCollection=function useGameCollection(collection){var _React$useState2=_slicedToArray(react_default.a.useState([]),2),gameList=_React$useState2[0],setGameList=_React$useState2[1];return react_default.a.useEffect((function(){!function fetchData(){var result,data;regeneratorRuntime.async((function fetchData$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(collection){_context.next=4;break}setGameList([]),_context.next=9;break;case 4:return _context.next=6,regeneratorRuntime.awrap(collection.getItems());case 6:result=_context.sent,void 0!==(data=result.data)&&data.length&&(result.data.forEach((function(game){var parts=game.url.split("/");game.id=parts[parts.length-2]})),setGameList(result.data));case 9:case"end":return _context.stop()}}))}()}),[collection]),gameList};function useCard_slicedToArray(arr,i){return function useCard_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useCard_iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useCard_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var context={url:null,header:null},Hook_useCard=function useCard(item){var _React$useState2=useCard_slicedToArray(react_default.a.useState(context),2),gameContext=_React$useState2[0],setGameContext=_React$useState2[1];return react_default.a.useEffect((function(){null!=item&&function updateData(){var dataContext={url:item.assetList[0].name,header:item.title,categoryList:item.categoryList,description:item.description,game_url:item.url};setGameContext(dataContext)}()}),[item]),gameContext},axios=__webpack_require__(371),axios_default=__webpack_require__.n(axios),querystring_es3=__webpack_require__(221),querystring_es3_default=__webpack_require__.n(querystring_es3);function GameCollectionRSS_slicedToArray(arr,i){return function GameCollectionRSS_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function GameCollectionRSS_iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function GameCollectionRSS_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var DEFAULT_AMOUNT=5,DEFAULT_PAGE=1,Context_GameCollectionRSS=function(){function GameCollectionRSS(url,config){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,GameCollectionRSS);var _url$split2=GameCollectionRSS_slicedToArray(url.split("?"),2),basicUrl=_url$split2[0],query=_url$split2[1];(query=querystring_es3_default.a.parse(query)).amount=query.amount||DEFAULT_AMOUNT,query.page=query.page||DEFAULT_PAGE,this.basicUrl=basicUrl,this.query=query,this.config=config}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(GameCollectionRSS,[{key:"getItems",value:function getItems(){var url=this.basicUrl+"?"+querystring_es3_default.a.stringify(this.query);return axios_default.a.get(url)}}]),GameCollectionRSS}(),string_format=__webpack_require__(372),string_format_default=__webpack_require__.n(string_format);function useGameCollectionRSS_slicedToArray(arr,i){return function useGameCollectionRSS_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useGameCollectionRSS_iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useGameCollectionRSS_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Hook_useGameCollectionRSS=function useGameCollectionRSS(config){var _useState2=useGameCollectionRSS_slicedToArray(Object(react.useState)(null),2),rss=_useState2[0],setRSS=_useState2[1];return Object(react.useEffect)((function(){var appliedConfig={company:config.company||"All",collection:config.collection||"all",category:config.category||"all",type:config.type||"all",amount:config.amount||"100",mobile:config.mobile||"all",rewarded:config.rewarded||"all",title:config.title||config.category},url=config.url||"/proxy/rss/api/v1.0/rss/{company}/?collection={collection}&categories={category}&type={type}&mobile={mobile}&rewarded={rewarded}&format=json&amount={amount}";url=string_format_default()(url,appliedConfig),appliedConfig.url=appliedConfig.url,setRSS(new Context_GameCollectionRSS(url,appliedConfig))}),[config]),rss};function TightCard_slicedToArray(arr,i){return function TightCard_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function TightCard_iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function TightCard_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var useStyles=Object(makeStyles.a)((function(theme){return{item:{color:"white",font:"'Roboto', 'Helvetica', 'Arial', sans-serif",display:"flex",flexDirection:"column",position:"relative","& > img":{width:"100%",height:"100%",objectFit:"cover"},"& a":{transition:"transform .3s, z-index .3s",height:"100%",display:"flex",zIndex:1,textDecoration:"none",maxHeight:"200px",overflow:"hidden","&:hover":{transition:"transform .3s",msTransform:"scale(1.4)",transform:"scale(1.4)",zIndex:9,filter:"drop-shadow(-0.5em 0 0.5em crimson) drop-shadow(0.5em 0 0.5em crimson)","& p":{transition:"font-size 0.3s",fontSize:"1.2em"},"& p:first-child":{fontSize:"0.8em",visibility:"visible"}}}},header:{position:"absolute",width:"100%",bottom:"0",left:"0",backgroundImage:"linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%)","& p":{color:"white",margin:"10px",transition:"font-size 0.3s"},"& p:first-child":{visibility:"hidden",textShadow:"0 0 5px black"},"& p:not(:first-child)":{textShadow:"2px 2px 0px black"}},image:{maxWidth:"100%"}}})),TightCard_TightCard=function TightCard(props){var classes=useStyles(),item=classes.item,image=classes.image,header=classes.header,data=props.data,card=Hook_useCard(data),_useState2=TightCard_slicedToArray(Object(react.useState)(null),2),url=_useState2[0],setUrl=_useState2[1],_useState4=TightCard_slicedToArray(Object(react.useState)(null),2),title=_useState4[0],setTitle=_useState4[1],categoryList=card.categoryList;return Object(react.useEffect)((function(){var url=card.url,header=card.header;setUrl(url),setTitle(header)}),[card]),react_default.a.createElement("div",{className:item},react_default.a.createElement("a",{href:card.game_url,target:"_blank"},react_default.a.createElement("img",{className:image,src:url}),react_default.a.createElement("div",{className:header},react_default.a.createElement("p",null,categoryList&&categoryList[0].name,categoryList&&categoryList.length>1&&" / "+categoryList[1].name),react_default.a.createElement("p",null,title))))};TightCard_TightCard.__docgenInfo={description:"",methods:[],displayName:"TightCard"};var Card_TightCard=TightCard_TightCard;function WideCard_slicedToArray(arr,i){return function WideCard_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function WideCard_iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function WideCard_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Card\\TightCard.js"]={name:"TightCard",docgenInfo:TightCard_TightCard.__docgenInfo,path:"src\\Card\\TightCard.js"});var WideCard_useStyles=Object(makeStyles.a)((function(theme){return{item:{color:"white",font:"'Roboto', 'Helvetica', 'Arial', sans-serif",display:"flex",flexDirection:"column",position:"relative","& > img":{width:"100%",height:"100%"},"& p":{color:"white",margin:"10px",fontSize:"1.5em"},"& a":{height:"100%",display:"block",zIndex:1,textDecoration:"none","&:hover":{zIndex:9,"& img:first-child":{filter:"drop-shadow(-0.5em 0 0.5em crimson) drop-shadow(0.5em 0 0.5em crimson)"},"& p:first-child":{transition:"font-size 0.3s",fontSize:"2em",color:"wheat"},"& p:nth-child(2)":{transition:"padding .3s",visibility:"visible",padding:"0.8em 0.6em",margin:0}}}},header:{position:"relative",width:"100%",backgroundImage:"linear-gradient(transparent 0%, rgba(0,0,0,0.8) 100%)","& p":{transition:"font-size 0.3s"},"& p:first-child":{textShadow:"2px 2px 0px black"},"& p:nth-child(2)":{visibility:"hidden",textShadow:"0 0 5px black"}},image:{height:"200px",width:"100%"},description:{position:"relative",width:"100%","& pre":{whiteSpace:"pre-line",fontSize:"1.3em",color:"wheat"}}}})),WideCard_WideCard=function WideCard(props){var classes=WideCard_useStyles(),item=classes.item,image=classes.image,header=classes.header,description=classes.description,data=props.data,card=Hook_useCard(data),_useState2=WideCard_slicedToArray(Object(react.useState)(null),2),url=_useState2[0],setUrl=_useState2[1],_useState4=WideCard_slicedToArray(Object(react.useState)(null),2),title=_useState4[0],setTitle=_useState4[1],categoryList=card.categoryList,card_description=card.description;return Object(react.useEffect)((function(){var url=card.url,header=card.header;card.card_description;setUrl(url),setTitle(header)}),[card]),react_default.a.createElement("div",{className:item},react_default.a.createElement("a",{href:card.game_url,target:"_blank"},react_default.a.createElement("img",{className:image,src:url}),react_default.a.createElement("div",{className:header},react_default.a.createElement("p",null,title),react_default.a.createElement("p",null,categoryList&&categoryList[0].name,categoryList&&categoryList.length>1&&" / "+categoryList[1].name)),react_default.a.createElement("div",{className:description},react_default.a.createElement("pre",null,card_description))))};WideCard_WideCard.__docgenInfo={description:"",methods:[],displayName:"WideCard"};var Card_WideCard=WideCard_WideCard;function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Card\\WideCard.js"]={name:"WideCard",docgenInfo:WideCard_WideCard.__docgenInfo,path:"src\\Card\\WideCard.js"});var WideList_useStyles=Object(makeStyles.a)((function(theme){var _box;return{box:(_box={display:"grid",gridGap:"20px",gridTemplateColumns:"repeat(5, minmax(100px, 1fr))"},_defineProperty(_box,theme.breakpoints.up("xs"),{gridTemplateColumns:"repeat(2, minmax(100px, 1fr))"}),_defineProperty(_box,theme.breakpoints.up("sm"),{gridTemplateColumns:"repeat(2, minmax(100px, 1fr))"}),_defineProperty(_box,theme.breakpoints.up("md"),{gridTemplateColumns:"repeat(3, minmax(100px, 1fr))"}),_defineProperty(_box,theme.breakpoints.up("lg"),{display:"grid",gridGap:"20px",gridTemplateColumns:"repeat(5, minmax(100px, 1fr))"}),_box)}})),WideList_WideList=function WideList(props){var box=WideList_useStyles().box,collection=props.collection,list=Hook_useGameCollection(collection);return react_default.a.createElement("div",{className:box},list.map((function(item,index){return react_default.a.createElement(Card_WideCard,{data:item,key:index})})))};WideList_WideList.__docgenInfo={description:"",methods:[],displayName:"WideList"};var CardList_WideList=WideList_WideList;function TightList_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\CardList\\WideList.js"]={name:"WideList",docgenInfo:WideList_WideList.__docgenInfo,path:"src\\CardList\\WideList.js"});var TightList_useStyles=Object(makeStyles.a)((function(theme){var _box;return{box:(_box={display:"grid",gridGap:"20px",gridTemplateColumns:"repeat(6, minmax(100px, 1fr))"},TightList_defineProperty(_box,theme.breakpoints.up("xs"),{gridTemplateColumns:"repeat(2, minmax(100px, 1fr))"}),TightList_defineProperty(_box,theme.breakpoints.up("sm"),{gridTemplateColumns:"repeat(2, minmax(100px, 1fr))"}),TightList_defineProperty(_box,theme.breakpoints.up("md"),{gridTemplateColumns:"repeat(3, minmax(100px, 1fr))"}),TightList_defineProperty(_box,theme.breakpoints.up("lg"),{display:"grid",gridGap:"20px",gridTemplateColumns:"repeat(6, minmax(100px, 1fr))"}),_box)}})),TightList_TightList=function TightList(props){var box=TightList_useStyles().box,collection=props.collection,list=Hook_useGameCollection(collection);return react_default.a.createElement("div",{className:box},list.map((function(item,index){return react_default.a.createElement(Card_TightCard,{data:item,key:index})})))};TightList_TightList.__docgenInfo={description:"",methods:[],displayName:"TightList"};var CardList_TightList=TightList_TightList;function Home_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\CardList\\TightList.js"]={name:"TightList",docgenInfo:TightList_TightList.__docgenInfo,path:"src\\CardList\\TightList.js"});var Home_useStyles=Object(makeStyles.a)((function(theme){var _mainContainer;return{root:{background:"#270000",width:"100%",minHeight:"100vh"},mainContainer:(_mainContainer={padding:"5em"},Home_defineProperty(_mainContainer,theme.breakpoints.up("xs"),{padding:"2em"}),Home_defineProperty(_mainContainer,theme.breakpoints.up("sm"),{padding:"2em"}),Home_defineProperty(_mainContainer,theme.breakpoints.up("md"),{padding:"3em"}),Home_defineProperty(_mainContainer,theme.breakpoints.up("lg"),{padding:"4em"}),_mainContainer)}}));function Home(props){var classes=Home_useStyles(),root=classes.root,mainContainer=classes.mainContainer,data=props.data,view=props.view,game=data.game,collectionFew=Hook_useGameCollectionRSS(game.gameFew),collectionLot=Hook_useGameCollectionRSS(game.gameLot);return react_default.a.createElement("div",{className:root},react_default.a.createElement("div",{className:mainContainer},"tight"===view?react_default.a.createElement(CardList_TightList,{collection:collectionLot,view:view}):null,"wide"===view?react_default.a.createElement(CardList_WideList,{collection:collectionFew,view:view}):null))}Home.__docgenInfo={description:"",methods:[],displayName:"Home"};var Home_Home=Home;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Home\\Home.js"]={name:"Home",docgenInfo:Home.__docgenInfo,path:"src\\Home\\Home.js"}),__webpack_require__.d(__webpack_exports__,"a",(function(){return Home_Home}))},380:function(module,exports,__webpack_require__){__webpack_require__(381),__webpack_require__(493),module.exports=__webpack_require__(494)},402:function(module,exports){},494:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(370);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__.INITIAL_VIEWPORTS,defaultViewport:"someDefault"}});var req=__webpack_require__(660);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(269)(module))},660:function(module,exports,__webpack_require__){var map={"./index.stories.js":661};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=660},661:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_src_Home_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(228),_data__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(682),__webpack_require__(227));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Views",module).add("wide-view",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Home_index__WEBPACK_IMPORTED_MODULE_2__.a,{data:_data__WEBPACK_IMPORTED_MODULE_4__.a,view:"wide"})})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Views",module).add("tight-view",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Home_index__WEBPACK_IMPORTED_MODULE_2__.a,{data:_data__WEBPACK_IMPORTED_MODULE_4__.a,view:"tight"})}))}.call(this,__webpack_require__(269)(module))}},[[380,1,2]]]);
//# sourceMappingURL=main.61f1e803eb215c652cee.bundle.js.map