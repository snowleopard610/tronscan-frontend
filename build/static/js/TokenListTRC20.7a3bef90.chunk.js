(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1448:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},1450:function(e,t,a){"use strict";a.d(t,"a",function(){return E});var n=a(1455),r=a.n(n),o=a(2),l=a.n(o),s=a(30),c=a(5),i=a(15),d=a(14),u=a(21),p=a(19),m=a(20),g=a(0),f=a.n(g),h=a(16);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).loadDatas=Object(c.a)(l.a.mark(function e(){var t,n,r,o,s=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<s.length&&void 0!==s[0]?s[0]:1,n=1<s.length&&void 0!==s[1]?s[1]:40,r=a.state.filter,e.next=5,h.b.getTokens(v({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=v({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(v({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange&&a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props,t=e.tableData,n=(e.filterDropdownVisible,a.state.searchText),r=new RegExp(n,"gi");a.setState({filterDropdownVisible:!1,filtered:!!n,data:t.map(function(e){return e.name.match(r)?v({},e,{name:f.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(n,")|(?=").concat(n,")"),"i")).map(function(e,t){return e.toLowerCase()===n.toLowerCase()?f.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a={},n=[],r=!0,o=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var i=s.value;if(i.sorter&&!i.filterDropdown){var d={sorter:t(i.key)};n.push(v({},i,{},d))}else if(!i.sorter&&i.filterDropdown){var u=v({},a);n.push(v({},i,{},u))}else if(i.sorter&&i.filterDropdown){var p=v({sorter:t(i.key)},a);n.push(v({},i,{},p))}else n.push(i)}}catch(e){o=!0,l=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw l}}return n},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:v({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,l=e.bordered,s=e.pagination,c=void 0===s||s,i=e.scroll,d=e.Footer,u=e.locale,p=e.addr,m=e.transfers,g=e.nopadding,h=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),b=c?v({total:t},this.state.pagination):c;return f.a.createElement("div",null," ",p?f.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")+(g?" transfer-mp-0":"")},f.a.createElement(r.a,{bordered:l,columns:h,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,footer:d,pagination:b,loading:a,onChange:this.handleTableChange})," "):f.a.createElement("div",{className:"card table_pos"},f.a.createElement(r.a,{bordered:l,columns:h,footer:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:b,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(g.Component)},3473:function(e,t,a){"use strict";a.r(t);var n=a(1382),r=a.n(n),o=a(267),l=a.n(o),s=a(39),c=a.n(s),i=a(2),d=a.n(i),u=a(5),p=a(15),m=a(14),g=a(21),f=a(19),h=a(20),b=a(0),v=a.n(b),E=a(29),y=a(385),w=a(10),_=(a(52),a(3)),x=a(23),k=a(389),A=(a(88),a(1450)),O=a(4),C=a(18),j=a(53),S=a(93),D=a(64),M=a(8),N=a.n(M),P=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(g.a)(this,Object(f.a)(t).call(this,e))).loadPage=Object(u.a)(d.a.mark(function e(){var t,a,r,o,l,s,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0<c.length&&void 0!==c[0]?c[0]:1,a=1<c.length&&void 0!==c[1]?c[1]:20,r=n.state.filter,n.props.intl,n.setState({loading:!0}),r.name)return e.next=8,N.a.get(O.f+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a+"&name="+r.name);e.next=12;break;case 8:o=e.sent,l=o.data.trc20_tokens.length,e.next=16;break;case 12:return e.next=14,N.a.get(O.f+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a);case 14:o=e.sent,l=o.data.total;case 16:return(s=o.data.trc20_tokens).map(function(e,n){e.index=n+1+(t-1)*a}),n.setState({loading:!1,tokens:s,total:l,page:t}),n.addIEOClass(),e.abrupt("return",l);case 21:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=c()(Object(k.a)(n.props.location,"search"));0<e.length?n.setState({filter:{name:"%25".concat(e,"%25")}}):n.setState({filter:{}})},n.addIEOClass=function(){var e=n.state.page,t=document.querySelector(".ant-table-tbody").firstElementChild;1==e?t.classList.add("trc20-star-ad"):t.classList.remove("trc20-star-ad"),document.querySelector(".trc20-star-ad")&&document.querySelector(".trc20-star-ad").addEventListener("click",function(){window.open("http://www.tronace.com")})},n.onChange=function(e,t){n.loadPage(e,t)},n.customizedColumn=function(){var e=n.props.intl,t=n.state.contractAddress,o=a(1448);return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,a){return v.a.createElement("span",null,a.contract_address==t?v.a.createElement("div",null,v.a.createElement("span",{className:"starbeat"},v.a.createElement("i",{className:"fas fa-star"})," "),v.a.createElement("span",{className:"star-tip"})):v.a.createElement("span",null,e-1))}},{title:l()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t){return v.a.createElement("div",{className:"table-imgtext"},t.icon_url?v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.icon_url,onError:function(e){e.target.onerror=null,e.target.src=o}})):v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:o})),v.a.createElement("div",null,v.a.createElement("h5",null,v.a.createElement(x.g,{name:t.name,namePlus:t.name+" ("+t.symbol+")",address:t.contract_address})),v.a.createElement("p",null,t.token_desc)))}},{title:e.formatMessage({id:"market_capitalization"}),align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t){return v.a.createElement("div",null,t.price&&t.total_supply_with_decimals?v.a.createElement("div",null,v.a.createElement(w.c,{value:t.total_supply_with_decimals*t.price,maximumFractionDigits:1})," ","TRX"):v.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"pice_per_onetrx"}),dataIndex:"pice_per_onetrx",key:"pice_per_onetrx",align:"center",className:"ant_table",render:function(e,t){return r()(e),v.a.createElement("div",null,t.price?v.a.createElement("div",null,v.a.createElement(w.c,{value:t.price,maximumFractionDigits:1})," ","TRX"):v.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"total_tokens"}),dataIndex:"total_supply_with_decimals",key:"total_supply",render:function(e,t){return null===e&&(e=0),v.a.createElement("div",null,v.a.createElement(w.c,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals),maximumFractionDigits:1}))},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"contract_address"}),dataIndex:"contract_address",key:"contract_address",render:function(e,t){return v.a.createElement(x.a,{address:t.contract_address,isContract:!0})},align:"center",className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,filter:{},page:1,contractAddress:"TB2SqC48afC9FX36bPQQHatoKo5m79JXKL"};var o=c()(Object(k.a)(e.location,"search"));return 0<o.length&&(n.state.filter.name="%25".concat(o,"%25")),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),setTimeout(function(){e.addIEOClass()},1e3)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=(t.alert,t.loading),r=t.total,o=t.contractAddress,l=this.props,s=(l.match,l.intl),c=this.customizedColumn(),i=s.formatMessage({id:"part_total"})+" "+r+" "+s.formatMessage({id:"part_pass"});return v.a.createElement("main",{className:"container header-overlap token_black trc20-ad-bg"},n&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(S.b,null)),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-12 table_pos"},r?v.a.createElement("div",{className:"table_pos_info d-none d-md-block d-flex",style:{left:"auto"}},i," \xa0\xa0",v.a.createElement(D.a,{to:"/exchange/trc20"},Object(_.b)("Trade_on_Poloni DEX"),">")):"",v.a.createElement("a",{className:"apply-trc20",href:"https://goo.gl/forms/PiyLiDeaXv3uesSE3",target:"_blank",style:{color:"#C23631"}},v.a.createElement("button",{className:"btn btn-danger"},Object(_.c)("application_entry"))),v.a.createElement(A.a,{bordered:!0,loading:n,column:c,data:a,total:r,contractAddress:o,onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(b.Component),L={loadTokens:y.b,login:C.v,reloadWallet:j.c};t.default=Object(E.connect)(function(e){return{account:e.app.account,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},L)(Object(w.h)(P))}}]);