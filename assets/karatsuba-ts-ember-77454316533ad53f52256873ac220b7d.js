"use strict"
define("karatsuba-ts-ember/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/app",["exports","@ember/application","ember-resolver","ember-load-initializers","karatsuba-ts-ember/config/environment"],(function(e,t,n,r,l){function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class s extends t.default{constructor(){super(...arguments),a(this,"modulePrefix",l.default.modulePrefix),a(this,"podModulePrefix",l.default.podModulePrefix),a(this,"Resolver",n.default)}}e.default=s,(0,r.default)(s,l.default.modulePrefix)})),define("karatsuba-ts-ember/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/components/bce-button",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,n.createTemplateFactory)({id:"RKd4Dlpa",block:'[[[11,"button"],[16,1,[28,[37,0],[[30,1],[30,2],"Button"],null]],[24,0,"step__button"],[24,4,"button"],[4,[38,1],["click",[30,3]],null],[12],[1,"⇣"],[13]],["@level","@letter","@calculate"],false,["concat","on"]]',moduleName:"karatsuba-ts-ember/components/bce-button.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,r.default)())
e.default=a})),define("karatsuba-ts-ember/components/bce",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,n.createTemplateFactory)({id:"w2ayV+Ie",block:'[[[10,0],[15,1,[28,[37,0],["step",[30,1]],null]],[15,0,[28,[37,0],["step step",[30,1]," karat ",[30,2]],null]],[12],[1,"\\n  "],[10,0],[14,0,"step__label"],[12],[1,[30,1]],[13],[1,"\\n  "],[1,[28,[35,1],[[30,3],0],null]],[10,"br"],[12],[13],[1,"\\n  x\\n  "],[1,[28,[35,1],[[30,3],1],null]],[1,"\\n  "],[10,"hr"],[12],[13],[1,"\\n  "],[1,[30,4]],[1,"\\n  "],[41,[30,5],[[[8,[39,3],null,[["@level","@letter","@calculate"],[[30,6],[30,1],[28,[37,4],[[30,7],null,[30,3],[28,[37,1],[[30,6],1],null],[28,[37,0],[[30,6],[30,1],"Button"],null]],null]]],null]],[]],null],[1,"\\n"],[13]],["@letter","@classColor","@step","@stepResult","@isDouble","@bcelevel","@calculate"],false,["concat","get","if","bce-button","fn"]]',moduleName:"karatsuba-ts-ember/components/bce.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,r.default)())
e.default=a})),define("karatsuba-ts-ember/components/calculator",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,n.createTemplateFactory)({id:"1KBFjc1C",block:'[[[10,0],[14,1,"calculator"],[14,0,"calculator"],[12],[1,"\\n  "],[10,2],[14,0,"description"],[12],[1,"Karatsuba method to multiply 2,531 x 1,467 requires\\n    "],[10,1],[14,0,"red"],[12],[1,"9 single-digit multiplications."],[13],[13],[1,"\\n  "],[10,"h2"],[14,0,"inputs__heading"],[12],[1,"Karatsuba Calculator:"],[13],[1,"\\n  "],[10,0],[14,0,"inputs"],[12],[1,"\\n    "],[10,0],[14,0,"input-container"],[12],[1,"\\n      "],[10,"label"],[14,"for","num01"],[12],[1,"enter a multi-digit number"],[13],[1,"\\n      "],[8,[39,0],[[24,1,"num01"],[24,"placeholder","Ex: 89123"],[24,"required","true"]],[["@type","@value"],["text",[30,1]]],null],[1,"\\n      "],[10,1],[14,0,"input__span"],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,1],[14,0,"operator blue"],[12],[1,"x"],[13],[1,"\\n    "],[10,0],[14,0,"input-container"],[12],[1,"\\n      "],[10,"label"],[14,"for","num02"],[12],[1,"enter a multi-digit number"],[13],[1,"\\n      "],[8,[39,0],[[24,1,"num02"],[24,"placeholder","Ex: 54765"],[24,"required","true"]],[["@type","@value"],["text",[30,2]]],null],[1,"\\n      "],[10,1],[14,0,"input__span"],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[11,"button"],[24,1,"calculate"],[24,0,"calc-button"],[24,4,"button"],[4,[38,1],["click",[30,3]],null],[12],[1,"Calculate"],[13],[1,"\\n  "],[13],[1,"\\n"],[13]],["@num01","@num02","@calculate"],false,["input","on"]]',moduleName:"karatsuba-ts-ember/components/calculator.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,r.default)())
e.default=a})),define("karatsuba-ts-ember/components/figure",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,n.createTemplateFactory)({id:"dL6WpVCv",block:'[[[10,0],[14,1,"stepA"],[14,0,"step stepA karat"],[12],[1,"\\n  "],[10,0],[14,0,"step__label"],[12],[1,"A"],[13],[1,"\\n  "],[10,0],[14,0,"stepA__grid"],[12],[1,"\\n    "],[10,0],[12],[1,[28,[35,0],[[30,1,["b"]],0],null]],[13],[1,"\\n    "],[10,0],[12],[1,[28,[35,0],[[30,1,["c"]],0],null]],[13],[1,"\\n    "],[10,0],[12],[1,[28,[35,0],[[30,1,["b"]],1],null]],[13],[1,"\\n    "],[10,0],[12],[1,[28,[35,0],[[30,1,["c"]],1],null]],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"],[8,[39,1],null,[["@bcelevel","@step","@letter","@classColor","@stepResult","@calculate","@isDouble"],[[30,2],[30,1,["b"]],"B",[28,[37,2],[[28,[37,0],[[30,1,["b"]],0],null],[28,[37,0],[[30,1,["b"]],1],null]],null],[28,[37,3],[[28,[37,0],[[30,1,["b"]],0],null],[28,[37,0],[[30,1,["b"]],1],null]],null],[30,3],[28,[37,4],[[28,[37,0],[[30,1,["b"]],0],null],[28,[37,0],[[30,1,["b"]],1],null]],null]]],null],[1,"\\n"],[8,[39,1],null,[["@bcelevel","@step","@letter","@classColor","@stepResult","@calculate","@isDouble"],[[30,2],[30,1,["c"]],"C",[28,[37,2],[[28,[37,0],[[30,1,["c"]],0],null],[28,[37,0],[[30,1,["c"]],1],null]],null],[28,[37,3],[[28,[37,0],[[30,1,["c"]],0],null],[28,[37,0],[[30,1,["c"]],1],null]],null],[30,3],[28,[37,4],[[28,[37,0],[[30,1,["c"]],0],null],[28,[37,0],[[30,1,["c"]],1],null]],null]]],null],[1,"\\n"],[10,0],[14,1,"stepD"],[14,0,"step stepD blue"],[12],[1,"\\n  "],[10,0],[14,0,"step__label"],[12],[1,"D"],[13],[1,"\\n  "],[1,[28,[35,0],[[30,1,["b"]],0],null]],[1,"\\n  +\\n  "],[1,[28,[35,0],[[30,1,["c"]],0],null]],[1,"\\n  =\\n  "],[1,[28,[35,0],[[30,1,["e"]],0],null]],[1,"\\n  "],[10,"br"],[12],[13],[1,"\\n  "],[1,[28,[35,0],[[30,1,["b"]],1],null]],[1,"\\n  +\\n  "],[1,[28,[35,0],[[30,1,["c"]],1],null]],[1,"\\n  =\\n  "],[1,[28,[35,0],[[30,1,["e"]],1],null]],[1,"\\n"],[13],[1,"\\n"],[8,[39,1],null,[["@bcelevel","@step","@letter","@classColor","@stepResult","@calculate","@isDouble"],[[30,2],[30,1,["e"]],"E",[28,[37,2],[[28,[37,0],[[30,1,["e"]],0],null],[28,[37,0],[[30,1,["e"]],1],null]],null],[28,[37,3],[[28,[37,0],[[30,1,["e"]],0],null],[28,[37,0],[[30,1,["e"]],1],null]],null],[30,3],[28,[37,4],[[28,[37,0],[[30,1,["e"]],0],null],[28,[37,0],[[30,1,["e"]],1],null]],null]]],null],[1,"\\n"],[10,0],[14,1,"stepF"],[14,0,"step stepF blue"],[12],[1,"\\n  "],[10,0],[14,0,"step__label"],[12],[1,"F"],[13],[1,"\\n  "],[1,[28,[35,3],[[28,[37,0],[[30,1,["e"]],0],null],[28,[37,0],[[30,1,["e"]],1],null]],null]],[10,"br"],[12],[13],[1,"\\n  -\\n  "],[1,[28,[35,3],[[28,[37,0],[[30,1,["c"]],0],null],[28,[37,0],[[30,1,["c"]],1],null]],null]],[10,"br"],[12],[13],[1,"\\n  -\\n  "],[1,[28,[35,3],[[28,[37,0],[[30,1,["b"]],0],null],[28,[37,0],[[30,1,["b"]],1],null]],null]],[1,"\\n  "],[10,"hr"],[12],[13],[1,"\\n  "],[1,[30,4]],[1,"\\n"],[13],[1,"\\n"],[8,[39,5],null,[["@stepsR","@divider","@resultF"],[[28,[37,6],[[28,[37,3],[[28,[37,0],[[30,1,["b"]],0],null],[28,[37,0],[[30,1,["b"]],1],null]],null],[28,[37,3],[[28,[37,0],[[30,1,["c"]],0],null],[28,[37,0],[[30,1,["c"]],1],null]],null],[28,[37,3],[[28,[37,0],[[30,1,["e"]],0],null],[28,[37,0],[[30,1,["e"]],1],null]],null]],null],[30,5],[30,4]]],null]],["@steps","@level","@calculate","@resultF","@divider"],false,["get","bce","getClassColor","multiply","isDouble","result","array"]]',moduleName:"karatsuba-ts-ember/components/figure.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,r.default)())
e.default=a})),define("karatsuba-ts-ember/components/instructions",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,n.createTemplateFactory)({id:"EiMA8J+P",block:'[[[10,0],[14,1,"rowExample"],[14,0,"steps__rowEx"],[12],[1,"\\n  "],[10,3],[14,0,"jump-to"],[14,6,"#calculator"],[12],[10,1],[12],[1,"jump"],[13],[10,"br"],[12],[13],[10,1],[12],[1,"to"],[13],[10,"br"],[12],[13],[10,1],[12],[1,"calculator"],[13],[10,"br"],[12],[13],[10,1],[12],[1,"⇣"],[13],[13],[1,"\\n  "],[10,0],[14,0,"description"],[12],[1,"\\n    "],[10,"h1"],[12],[1,"How to Multiply Big Numbers Fast"],[13],[1,"\\n    "],[10,"h2"],[12],[1,"Traditional Way to Multiply 25 x 63"],[13],[1,"\\n    "],[10,2],[12],[1,"\\n      Requires\\n      "],[10,1],[14,0,"red"],[12],[10,"b"],[12],[1,"four"],[13],[1," single-digit multiplications"],[13],[1,"\\n      and some\\n      "],[10,1],[14,0,"blue"],[12],[1,"additions.\\n      "],[13],[1,"\\n    "],[13],[13],[1,"\\n  "],[10,0],[14,0,"content"],[12],[1,"\\n    "],[10,0],[14,0,"red"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"A"],[13],[1,"\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n        "],[10,1],[14,0,"gray"],[12],[1,"2"],[13],[1,"5"],[10,"br"],[12],[13],[1,"x\\n        "],[10,1],[14,0,"gray"],[12],[1,"6"],[13],[1,"3\\n        "],[10,"hr"],[12],[13],[1,"\\n        15\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue"],[12],[1,"\\n      +\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"red"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"B"],[13],[1,"\\n\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n        2"],[10,1],[14,0,"gray"],[12],[1,"5"],[13],[10,"br"],[12],[13],[1,"x\\n        "],[10,1],[14,0,"gray"],[12],[1,"6"],[13],[1,"3\\n        "],[10,"hr"],[12],[13],[1,"\\n        60\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue"],[12],[1,"\\n      +\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"red"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"C"],[13],[1,"\\n\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n        "],[10,1],[14,0,"gray"],[12],[1,"2"],[13],[1,"5"],[10,"br"],[12],[13],[1,"x 6"],[10,1],[14,0,"gray"],[12],[1,"3"],[13],[1,"\\n        "],[10,"hr"],[12],[13],[1,"\\n        300\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue"],[12],[1,"\\n      +\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"red"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"D"],[13],[1,"\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n        2"],[10,1],[14,0,"gray"],[12],[1,"5"],[13],[10,"br"],[12],[13],[1,"x 6"],[10,1],[14,0,"gray"],[12],[1,"3"],[13],[1,"\\n        "],[10,"hr"],[12],[13],[1,"\\n        1200\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue equals"],[12],[1,"\\n      = 1575\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"description"],[12],[1,"\\n\\n    "],[10,"h2"],[12],[1,"Karatsuba Method to Multiply 25 x 63"],[13],[1,"\\n    "],[10,2],[12],[1,"Requires\\n      "],[10,1],[14,0,"red"],[12],[10,"b"],[12],[1,"three"],[13],[1," single-digit multiplications"],[13],[1,"\\n      plus some\\n      "],[10,1],[14,0,"blue"],[12],[1,"additions and subtractions.\\n      "],[13],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,0],[14,0,"step_instructions"],[12],[1,"\\n    "],[10,0],[14,1,"stepA"],[14,0,"step stepA karat"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"A"],[13],[1,"\\n      "],[10,0],[14,0,"step__instruction"],[12],[1,"Break numbers up."],[13],[1,"\\n      "],[10,0],[14,0,"stepA__example"],[12],[1,"\\n        "],[10,0],[14,0,"stepA__input"],[12],[1,"\\n          "],[10,0],[12],[1,"25"],[13],[1,"\\n          "],[10,0],[12],[1,"x 63"],[13],[13],[1,"\\n        "],[10,0],[14,0,"stepA__grid"],[12],[1,"\\n          "],[10,0],[12],[1,"2"],[13],[1,"\\n          "],[10,0],[12],[1,"5"],[13],[1,"\\n          "],[10,0],[12],[1,"6"],[13],[1,"\\n          "],[10,0],[12],[1,"3"],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,1,"l0steps.b"],[14,0,"step steps.b karat red"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"B"],[13],[1,"\\n\\n      "],[10,0],[14,0,"step__instruction"],[12],[1,"Multiply the tens."],[13],[1,"\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n        2"],[10,"br"],[12],[13],[1,"\\n        x 6\\n        "],[10,"hr"],[12],[13],[1,"\\n        12\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,1,"l0steps.c"],[14,0,"step steps.c karat red"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"C"],[13],[1,"\\n      "],[10,0],[14,0,"step__instruction"],[12],[1,"\\n        Multiply the ones.\\n      "],[13],[1,"\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n        5"],[10,"br"],[12],[13],[1,"\\n        x 3\\n        "],[10,"hr"],[12],[13],[1,"\\n        15\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,1,"stepD"],[14,0,"step stepD blue"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"D"],[13],[1,"\\n      "],[10,0],[14,0,"step__instruction"],[12],[1,"\\n\\n        Add the digits.\\n      "],[13],[1,"\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n\\n        2 + 5 = 7\\n        "],[10,"br"],[12],[13],[1,"\\n        6 + 3 = 9\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,1,"l0steps.e"],[14,0,"step steps.e karat red"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"E"],[13],[1,"\\n      "],[10,0],[14,0,"step__instruction"],[12],[1,"\\n        Multiply the sums.\\n      "],[13],[1,"\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n\\n        7"],[10,"br"],[12],[13],[1,"\\n        x 9\\n        "],[10,"hr"],[12],[13],[1,"\\n        63\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,1,"stepF"],[14,0,"step stepF blue"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"F"],[13],[1,"\\n      "],[10,0],[14,0,"step__instruction"],[12],[1,"\\n        Subtract B and C from E"],[13],[1,"\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n\\n        63"],[10,"br"],[12],[13],[1,"\\n        - 15"],[10,"br"],[12],[13],[1,"\\n        - 12\\n        "],[10,"hr"],[12],[13],[1,"\\n        36\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,1,"stepG"],[14,0,"step stepG blue"],[12],[1,"\\n      "],[10,0],[14,0,"step__label"],[12],[1,"G"],[13],[1,"\\n      "],[10,0],[14,0,"step__instruction"],[12],[1,"\\n        Assemble the numbers."],[13],[1,"\\n      "],[10,0],[14,0,"equation"],[12],[1,"\\n\\n        12"],[10,1],[14,0,"zeros"],[12],[1,"00"],[13],[10,"br"],[12],[13],[1,"\\n        + 36"],[10,1],[14,0,"zeros"],[12],[1,"0"],[13],[10,"br"],[12],[13],[1,"\\n        + 15\\n        "],[10,"hr"],[12],[13],[1,"\\n        "],[10,1],[12],[1,"1575"],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"description"],[12],[1,"\\n    "],[10,2],[12],[1,"As numbers increase in size, the Karatsuba method can be used repeatedly,\\n      breaking large numbers into small pieces to save an increasing number of\\n      single-digit multiplications."],[13],[1,"\\n    "],[10,2],[12],[1,"Traditional way to multiply 2,531 x 1,467 requires\\n      "],[10,1],[14,0,"red"],[12],[1,"16 single-digit multiplications."],[13],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"content"],[12],[1,"\\n    "],[10,0],[14,0,"equation"],[12],[1,"\\n      "],[10,1],[14,0,"red"],[12],[1,"2"],[13],[1,"531"],[10,"br"],[12],[13],[1,"\\n      "],[10,1],[14,0,"red slants"],[12],[1,"|\\\\\\\\\\\\"],[13],[10,"br"],[12],[13],[1,"\\n      x\\n      "],[10,1],[14,0,"red"],[12],[1,"1467"],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue"],[12],[1,"\\n      +\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"equation"],[12],[1,"\\n      2"],[10,1],[14,0,"red"],[12],[1,"5"],[13],[1,"31"],[10,"br"],[12],[13],[1,"\\n      "],[10,1],[14,0,"red slants"],[12],[1,"/|\\\\\\\\"],[13],[10,"br"],[12],[13],[1,"\\n      x\\n      "],[10,1],[14,0,"red"],[12],[1,"1467"],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue"],[12],[1,"\\n      +\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"equation"],[12],[1,"\\n      25"],[10,1],[14,0,"red"],[12],[1,"3"],[13],[1,"1"],[10,"br"],[12],[13],[1,"\\n      "],[10,1],[14,0,"red slants"],[12],[1,"//|\\\\"],[13],[10,"br"],[12],[13],[1,"\\n      x\\n      "],[10,1],[14,0,"red"],[12],[1,"1467"],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue"],[12],[1,"\\n      +\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"equation"],[12],[1,"\\n      253"],[10,1],[14,0,"red"],[12],[1,"1"],[13],[10,"br"],[12],[13],[1,"\\n      "],[10,1],[14,0,"red slants"],[12],[1,"///|"],[13],[10,"br"],[12],[13],[1,"\\n      x\\n      "],[10,1],[14,0,"red"],[12],[1,"1467"],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue equals"],[12],[1,"\\n      =\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"operator blue equals"],[12],[1,"\\n      3712977\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13]],[],false,[]]',moduleName:"karatsuba-ts-ember/components/instructions.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,r.default)())
e.default=a})),define("karatsuba-ts-ember/components/karatsuba",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/object","@glimmer/tracking","karatsuba-ts-ember/helpers/base"],(function(e,t,n,r,l,a,s){var u,i,o,c,b
function p(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t,n,r,l){var a={}
return Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),a),l&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(l):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const f=(0,n.createTemplateFactory)({id:"BEnKy7SI",block:'[[[10,"main"],[15,"data-ember-version",[29,[[30,0,["emberVersion"]]]]],[12],[1,"\\n  "],[8,[39,0],null,null,null],[1,"\\n  "],[8,[39,1],null,[["@calculate","@num01","@num02"],[[30,0,["calculate"]],[30,0,["num01"]],[30,0,["num02"]]]],null],[1,"\\n  "],[10,0],[14,1,"steps"],[14,0,"steps inactive"],[12],[1,"\\n"],[42,[28,[37,3],[[28,[37,3],[[30,0,["figures"]]],null]],null],null,[[[1,"      "],[10,0],[15,0,[28,[37,4],["steps__row steps__row",[30,1,["level"]]],null]],[12],[1,"\\n        "],[8,[39,5],null,[["@numsInput","@stepSavings"],[[28,[37,6],[[30,0,["num01"]],[30,0,["num02"]]],null],[30,2]]],null],[1,"\\n        "],[8,[39,7],null,[["@level","@steps","@divider","@resultF","@levelAmount","@calculate","@stepSavings"],[[30,1,["level"]],[30,1,["steps"]],[30,1,["divider"]],[28,[37,8],[[28,[37,9],[[28,[37,10],[[30,1,["steps","b"]],0],null],[28,[37,10],[[30,1,["steps","b"]],1],null]],null],[28,[37,9],[[28,[37,10],[[30,1,["steps","c"]],0],null],[28,[37,10],[[30,1,["steps","c"]],1],null]],null],[28,[37,9],[[28,[37,10],[[30,1,["steps","e"]],0],null],[28,[37,10],[[30,1,["steps","e"]],1],null]],null]],null],[30,0,["figures","length"]],[30,0,["calculate"]],[30,1,["stepSavings"]]]],null],[1,"\\n      "],[13],[1,"\\n"]],[1]],null],[1,"  "],[13],[1,"\\n"],[13]],["figure","@stepSavings"],false,["instructions","calculator","each","-track-array","concat","step-savings","array","figure","resultF","multiply","get"]]',moduleName:"karatsuba-ts-ember/components/karatsuba.hbs",isStrictMode:!1})
let g=(b=class e extends r.default{constructor(){super(...arguments),p(this,"num01",i,this),p(this,"num02",o,this),p(this,"figures",c,this),d(this,"splitter",((e,t)=>[parseInt(e.substring(0,e.length-t)),parseInt(e.substring(e.length-t))])),d(this,"createDivider",(e=>{const t=Math.min(e[0].toString().length,e[1].toString().length)
return Math.floor(t/2)}))}calculate(t,n,r,l){const a=n||[this.num01,this.num02]
e.bce.length=0,e.singles.length=0,t&&t.preventDefault,"0"!==r&&r||(document.getElementById("rowExample").classList.add("inactive"),document.getElementById("calculator").classList.add("active"),document.getElementById("steps").classList.remove("inactive")),l&&this.setActiveButtons(r,l),this.karatsuba(a)
const s=r?`l${parseInt(r.slice(-1))+1}`:"l0"
this.createFigure(s,a)}createFigure(t,n){const r=parseInt(t.slice(-1)),l=e.bce[2]?e.bce[2]:e.singles[2],a=e.bce[0]?e.bce[0]:e.singles[0],s=e.bce[1]?e.bce[1]:e.singles[1],u=n[0].toString().length*n[1].toString().length,i={level:t,steps:{b:a,c:s,e:l},divider:this.createDivider(n),stepSavings:[e.singles.length,u],numsInput:n}
this.figures.length>r&&this.figures.removeAt(r,this.figures.length-r),this.figures.pushObject(i)}setActiveButtons(e,t){const n=document.getElementById(t)
document.getElementsByClassName(`steps__rowl${e.slice(-1)}`)[0].querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),n.classList.add("active"),n.parentElement.classList.add("active")}karatsuba(t){if((0,s.isSingle)(t[0],t[1]))return e.singles.push([t[0],t[1]]),t[0]*t[1]
const n=this.createDivider(t),[r,l]=this.splitter(t[0].toString(),n),[a,u]=this.splitter(t[1].toString(),n)
e.bce.push([r,a],[l,u],[l+r,u+a])
const i=this.karatsuba([r,a]),o=this.karatsuba([l,u])
return i*10**(2*n)+(this.karatsuba([l+r,u+a])-i-o)*10**n+o}},d(b,"bce",[]),d(b,"singles",[]),d(b,"stepMax",0xccccccccfcb37),i=m((u=b).prototype,"num01",[a.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2531}}),o=m(u.prototype,"num02",[a.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1467}}),c=m(u.prototype,"figures",[a.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{level:"l0",steps:{b:[25,14],c:[31,67],e:[56,81]},divider:2,stepSavings:[9,16],numsInput:[2531,1467]}]}}),m(u.prototype,"calculate",[l.action],Object.getOwnPropertyDescriptor(u.prototype,"calculate"),u.prototype),u)
e.default=g,(0,t.setComponentTemplate)(f,g)})),define("karatsuba-ts-ember/components/result",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,n.createTemplateFactory)({id:"Aw/6/OH1",block:'[[[10,0],[14,1,"stepG"],[14,0,"step stepG blue"],[12],[1,"\\n  "],[10,0],[14,0,"step__label"],[12],[1,"G"],[13],[1,"\\n  "],[1,[28,[35,0],[[30,1],0],null]],[10,1],[14,0,"zeros"],[12],[1,[28,[35,1],[[30,2],2],null]],[13],[10,"br"],[12],[13],[1,"\\n  +\\n  "],[1,[30,3]],[10,1],[14,0,"zeros"],[12],[1,[28,[35,1],[[30,2]],null]],[13],[10,"br"],[12],[13],[1,"\\n  +\\n  "],[1,[28,[35,0],[[30,1],1],null]],[1,"\\n  "],[10,"hr"],[12],[13],[1,"\\n\\n  "],[10,1],[14,1,"result"],[12],[1,[28,[35,2],[[30,1],[30,2]],null]],[13],[1,"\\n  "],[10,"br"],[12],[13],[1,"\\n"],[13]],["@stepsR","@divider","@resultF"],false,["get","trailingZeros","resultPrint"]]',moduleName:"karatsuba-ts-ember/components/result.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,r.default)())
e.default=a})),define("karatsuba-ts-ember/components/step-savings",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,n.createTemplateFactory)({id:"DqNtRSw7",block:'[[[10,0],[14,0,"steps__savings"],[12],[1,"\\n  "],[10,1],[14,0,"red"],[12],[1,"Single digit multiplications"],[13],[1,"\\n  for\\n  "],[1,[28,[35,0],[[30,1],0],null]],[1,"\\n  x\\n  "],[1,[28,[35,0],[[30,1],1],null]],[1,":"],[10,"br"],[12],[13],[1,"Karatsuba:\\n  "],[1,[28,[35,0],[[30,2],0],null]],[1,"\\n  | Standard:\\n  "],[1,[28,[35,0],[[30,2],1],null]],[1,"\\n"],[13]],["@numsInput","@stepSavings"],false,["get"]]',moduleName:"karatsuba-ts-ember/components/step-savings.hbs",isStrictMode:!1})
var a=(0,t.setComponentTemplate)(l,(0,r.default)())
e.default=a})),define("karatsuba-ts-ember/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/helpers/app-version",["exports","@ember/component/helper","karatsuba-ts-ember/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n,r){function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const l=n.default.APP.version
let a=t.versionOnly||t.hideSha,s=t.shaOnly||t.hideVersion,u=null
return a&&(t.showExtended&&(u=l.match(r.versionExtendedRegExp)),u||(u=l.match(r.versionRegExp))),s&&(u=l.match(r.shaRegExp)),u?u[0]:l}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=l,e.default=void 0
var a=(0,t.helper)(l)
e.default=a})),define("karatsuba-ts-ember/helpers/base",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.trailingZeros=e.splitter=e.isSingle=e.getDigit=void 0
e.isSingle=(e,t)=>e<10||t<10
e.trailingZeros=e=>{let t=""
for(let n=e;n--;)t+="0"
return t}
e.splitter=(e,t)=>[parseInt(e.substring(0,e.length-t)),parseInt(e.substring(e.length-t))]
e.getDigit=(e,t)=>+(e+"").slice(t)})),define("karatsuba-ts-ember/helpers/ensure-safe-component",["exports","@embroider/util"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.EnsureSafeComponentHelper}})})),define("karatsuba-ts-ember/helpers/getClassColor",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.helper)((function(e){let[t,n]=e
return t<10||n<10?"red":"gray"}))
e.default=n})),define("karatsuba-ts-ember/helpers/isDouble",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.helper)((function(e){let[t,n]=e
return!(t<10||n<10)}))
e.default=n})),define("karatsuba-ts-ember/helpers/multiply",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.helper)((function(e){let[t,n]=e
return t*n>0xccccccccfcb37?"Congrats! You broke this too!":t*n}))
e.default=n})),define("karatsuba-ts-ember/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("karatsuba-ts-ember/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("karatsuba-ts-ember/helpers/resultF",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.helper)((function(e){let t=Array.from(e)
return t[2]-t[1]-t[0]}))
e.default=n})),define("karatsuba-ts-ember/helpers/resultPrint",["exports","@ember/component/helper","karatsuba-ts-ember/helpers/base"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.helper)((function(e){let[t,r]=e
const l=t[0]*10**(2*r)+(t[2]-t[1]-t[0])*10**r+t[1]
if(l>9998999999999997e5)return"Congrats! You broke it."
let a=l.toString()
if(l>0xccccccccfcb37){const e=a.substring(0,14),l=a.length-14,s=t[0].toString()+(0,n.trailingZeros)(2*r),u=t[1].toString(),i=(t[2]-t[1]-t[0]).toString()+(0,n.trailingZeros)(r),o=u.substring(u.length-l,u.length),c=i.substring(i.length-l,i.length),b=s.substring(s.length-l,s.length),p=(parseInt(o)+parseInt(c)+parseInt(b)).toString()
a=e+p.substring(p.length-l,p.length)}return a}))
e.default=r})),define("karatsuba-ts-ember/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("karatsuba-ts-ember/helpers/trailingZeros",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.helper)((function(e){let[t,n]=e,r=""
for(let l=n?t*n:t;l--;)r+="0"
return r}))
e.default=n})),define("karatsuba-ts-ember/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","karatsuba-ts-ember/config/environment"],(function(e,t,n){let r,l
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,l=n.default.APP.version)
var a={name:"App Version",initialize:(0,t.default)(r,l)}
e.default=a})),define("karatsuba-ts-ember/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=n})),define("karatsuba-ts-ember/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:n.default}
e.default=r})),define("karatsuba-ts-ember/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize(){}}
e.default=t})),define("karatsuba-ts-ember/models/karatsuba",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0})}))
define("karatsuba-ts-ember/router",["exports","@ember/routing/router","karatsuba-ts-ember/config/environment"],(function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class l extends t.default{constructor(){super(...arguments),r(this,"location",n.default.locationType),r(this,"rootURL",n.default.routerRootURL)}}e.default=l,l.map((function(){}))})),define("karatsuba-ts-ember/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/services/-ensure-registered",["exports","@embroider/util/services/ensure-registered"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("karatsuba-ts-ember/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"O3dNfKmh",block:'[[[1,[28,[35,0],["KaratsubaTsEmber"],null]],[1,"\\n"],[8,[39,1],null,null,null],[1,"\\n"],[46,[28,[37,3],null,null],null,null,null]],[],false,["page-title","karatsuba","component","-outlet"]]',moduleName:"karatsuba-ts-ember/templates/application.hbs",isStrictMode:!1})
e.default=n})),define("karatsuba-ts-ember/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("karatsuba-ts-ember/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("karatsuba-ts-ember/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("karatsuba-ts-ember/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("karatsuba-ts-ember/config/environment",[],(function(){try{var e="karatsuba-ts-ember/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("karatsuba-ts-ember/app").default.create({name:"karatsuba-ts-ember",version:"0.0.0+97867bad"})
