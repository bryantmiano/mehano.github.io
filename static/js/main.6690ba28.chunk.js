(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(33)},27:function(e,n,t){},28:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(13),c=t.n(a),i=(t(27),t(14)),u=t(15),l=t(21),m=t(16),p=t(20),d=t(1);t(28);var f,h=function(e){var n=e.pokemon;return r.a.createElement("div",{className:"pokemon-card"},r.a.createElement("h3",null,n.name),r.a.createElement("img",{className:"thumb",alt:"pokemon img",src:n.sprites.front_shiny}),r.a.createElement("dl",null,r.a.createElement("dt",null,"Height"),r.a.createElement("dd",null,n.height),r.a.createElement("dt",null,"Weight"),r.a.createElement("dd",null,n.weight),r.a.createElement("dt",null,"Base Experience"),r.a.createElement("dd",null,n.base_experience)))},s=t(7),k=t(3),O=t(19),E="app/pokemon/FETCH_POKEMON",b="app/pokemon/FETCH_POKEMON_SUCCESS",j="app/pokemon/FETCH_POKEMON_FAILURE",v="app/pokemon/REPLACE_POKEMON";var g=function(e,n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,o=arguments.length>1?arguments[1]:void 0;return n.hasOwnProperty(o.type)?n[o.type](t,o):t}}({loading:!1,error:null,pokemon:[]},(f={},Object(k.a)(f,E,function(e){return Object(d.a)({},e,{loading:!0})}),Object(k.a)(f,b,function(e,n){return Object(d.a)({},e,{loading:!1,pokemon:[].concat(Object(O.a)(e.pokemon),[Object(d.a)({},n)])})}),Object(k.a)(f,j,function(e,n){return Object(d.a)({},e,{loading:!1,error:n})}),Object(k.a)(f,v,function(e,n){var t=Object(d.a)({},e,{loading:!1});return t.pokemon[n.index]=n.pokemon,t}),f)),w=function(e){return{type:E,id:e}},y=function(e){return Object(d.a)({type:b},e)},P=function(e){return{type:j,error:e}},C=function(e,n){return{type:v,pokemon:e,index:n}},M=function(e){var n=e.id,t=e.index;return function(e){return e(w(n)),fetch("https://pokeapi.co/api/v2/pokemon/".concat(n,"/")).then(function(e){return e.json()},function(e){return P(e)}).then(function(n){e(t?C(n,t):y(n))}).catch(function(e){return P(e)})}},_=g,x=function(e){return Math.floor(Math.random()*Math.floor(e))},N=function(e){function n(){var e,t;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=Object(l.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).fetchRandomPokemon=function(){var e=x(50);t.props.fetchPokemon({id:e,index:3})},t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPokemon({id:7}),this.props.fetchPokemon({id:4}),this.props.fetchPokemon({id:1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Pokemon Viewer"),this.props.pokemon.map(function(e){return r.a.createElement(h,{key:e.id,pokemon:e})}),r.a.createElement("button",{onClick:this.fetchRandomPokemon},"Random Pokemon"))}}]),n}(o.Component),R=Object(s.b)(function(e){return Object(d.a)({},e.pokemon)},function(e){return{fetchPokemon:function(n){return e(M(n))}}})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=t(2),H=t(18),K=Object(F.c)({pokemon:_}),A=Object(F.d)(K,Object(F.a)(H.a));c.a.render(r.a.createElement(s.a,{store:A},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.6690ba28.chunk.js.map