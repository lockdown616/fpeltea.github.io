(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/snek.86f9383f.png"},30:function(e,t,n){e.exports=n.p+"static/media/tic.322ab8f0.png"},32:function(e,t,n){e.exports=n(49)},37:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),c=n(5),l=n(4),i=n(6),o=n(0),s=n.n(o),u=n(17),p=n.n(u),h=(n(37),n(15)),f=n(11),m=n(25),d=n(20),g=(n(42),n(43),"MOVE"),b="DISPLAY",y="GAMEID",v="PLAYERID",k="START",O="STOP",x="TURN",E="SHAPE",T="RESET",j={spaces:[null,null,null,null,null,null,null,null,null],playerShape:"X",currentTurn:"X",gameOngoing:!1,gameID:null,playerID:null,display:"Online Tic-Tac-Toe"};function w(e,t){return{type:g,space:e,shape:t}}function S(e){return{type:y,gameID:e}}function C(e){return{type:v,playerID:e}}function R(e){return{type:b,message:e}}function I(){return{type:k}}function D(){return{type:O}}function N(e){return{type:E,shape:e}}function M(e){return{type:x,shape:e}}function A(){return{type:T}}var Y=Object(d.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var n=e.spaces.slice();if(n[t.space]=t.shape,"X"===e.currentTurn)return Object(f.a)({},e,{spaces:n,currentTurn:"O"});if("O"==e.currentTurn)return Object(f.a)({},e,{spaces:n,currentTurn:"X"});break;case b:return Object(f.a)({},e,{display:t.message});case y:return Object(f.a)({},e,{gameID:t.gameID});case v:return Object(f.a)({},e,{playerID:t.playerID});case k:return Object(f.a)({},e,{gameOngoing:!0});case O:return Object(f.a)({},e,{gameOngoing:!1});case x:return Object(f.a)({},e,{currentTurn:t.shape});case E:return Object(f.a)({},e,{playerShape:t.shape});case T:return Object(f.a)({},e,j);default:return e}}),G=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){if(this.props.currentTurn===this.props.playerShape&&null===this.props.spaces[e]&&!0===this.props.gameOngoing){this.props.makeMove(e,this.props.playerShape);var t={requestType:"move",space:e,playerShape:this.props.playerShape,gameID:this.props.gameID,playerID:this.props.playerID};P.send(JSON.stringify(t))}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"board"},s.a.createElement(H,{value:this.props.spaces[0],onClick:function(){return e.handleClick(0)}}),s.a.createElement(H,{value:this.props.spaces[1],onClick:function(){return e.handleClick(1)}}),s.a.createElement(H,{value:this.props.spaces[2],onClick:function(){return e.handleClick(2)}}),s.a.createElement(H,{value:this.props.spaces[3],onClick:function(){return e.handleClick(3)}}),s.a.createElement(H,{value:this.props.spaces[4],onClick:function(){return e.handleClick(4)}}),s.a.createElement(H,{value:this.props.spaces[5],onClick:function(){return e.handleClick(5)}}),s.a.createElement(H,{value:this.props.spaces[6],onClick:function(){return e.handleClick(6)}}),s.a.createElement(H,{value:this.props.spaces[7],onClick:function(){return e.handleClick(7)}}),s.a.createElement(H,{value:this.props.spaces[8],onClick:function(){return e.handleClick(8)}}))}}]),t}(s.a.Component),H=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"space",onClick:function(){return e.props.onClick()}},this.props.value)}}]),t}(s.a.Component),L=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"renderTurn",value:function(){return this.props.currentTurn==this.props.playerShape&&!0===this.props.gameOngoing?s.a.createElement("span",{id:"statusTurn"},"Your turn!"):!0===this.props.gameOngoing?s.a.createElement("span",{id:"statusTurn"},"Your opponent's turn!"):void 0}},{key:"renderShape",value:function(){return!0===this.props.gameOngoing?s.a.createElement("span",{id:"statusShape"},"You are ",this.props.playerShape,"!"):s.a.createElement("div",{className:"status"},s.a.createElement("span",{id:"statusTitle"},this.props.display))}},{key:"render",value:function(){return s.a.createElement("div",{className:"status"},this.renderShape(),this.renderTurn())}}]),t}(s.a.Component),W=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:!1===this.props.gameOngoing?"findGameButton":"findGameButtonInactive",onClick:function(){return function(){if(void 0!==P&&P.readyState<3)return;P=new WebSocket("wss://tic.lockdown6.net:3000"),Y.dispatch(R("Connecting...")),P.heartbeat=function(){var e=this;void 0!=this.pingTimeout&&clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(function(){e.close()},6e3)},P.onopen=function(e){P.heartbeat();P.send(JSON.stringify({requestType:"findGame"})),Y.dispatch(R("Finding game..."))},P.onmessage=function(e){var t=JSON.parse(e.data);switch(P.heartbeat(),t.messageType){case"newGameInfo":Y.dispatch(A()),Y.dispatch(R("Waiting for an opponent...")),Y.dispatch(S(t.gameID)),Y.dispatch(C(t.playerID)),Y.dispatch(N(t.playerShape)),Y.dispatch(M(t.currentTurn));break;case"foundGameInfo":Y.dispatch(A()),Y.dispatch(R("Found a game!")),Y.dispatch(S(t.gameID)),Y.dispatch(C(t.playerID)),Y.dispatch(N(t.playerShape)),Y.dispatch(M(t.currentTurn)),Y.dispatch(I());break;case"foundPlayer":Y.dispatch(R("Found an opponent!")),Y.dispatch(I());break;case"moveNotify":Y.dispatch(w(t.space,t.shape)),t.endResult===Y.getState().playerShape?(P.close(),Y.dispatch(R("You win!")),Y.dispatch(D())):"X"!==t.endResult&&"O"!==t.endResult||t.endResult==Y.getState().playerShape?"DRAW"===t.endResult&&(P.close(),Y.dispatch(R("Draw!")),Y.dispatch(D())):(P.close(),Y.dispatch(R("You lose!")),Y.dispatch(D()));break;case"moveConfirm":t.endResult===Y.getState().playerShape?(P.close(),Y.dispatch(R("You win!")),Y.dispatch(D())):"X"!==t.endResult&&"O"!==t.endResult||t.endResult==Y.getState().playerShape?"DRAW"===t.endResult&&(P.close(),Y.dispatch(R("Draw!")),Y.dispatch(D())):(P.close(),Y.dispatch(R("You lose!")),Y.dispatch(D()));break;case"ping":P.send(JSON.stringify({requestType:"pong"}));break;case"opponentDropped":P.close(),Y.dispatch(D()),"You win!"==Y.getState().display&&"You lose!"==Y.getState().display&&"Draw!"==Y.getState().display||Y.dispatch(R("Opponent has disconnected."))}},P.onclose=function(){Y.dispatch(D())}}()}}," FIND GAME")}}]),t}(s.a.Component),B=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){this.props.makeMove(e,this.props.playerShape)}},{key:"render",value:function(){return s.a.createElement("div",{className:"game"},s.a.createElement(L,{currentTurn:this.props.currentTurn,playerShape:this.props.playerShape,gameOngoing:this.props.gameOngoing,display:this.props.display}),s.a.createElement(G,{spaces:this.props.spaces,makeMove:this.props.makeMove,playerShape:this.props.playerShape,gameID:this.props.gameID,playerID:this.props.playerID,gameOngoing:this.props.gameOngoing,currentTurn:this.props.currentTurn}),s.a.createElement(W,{gameOngoing:this.props.gameOngoing}))}}]),t}(s.a.Component);var P,F=Object(m.b)(function(e){return{spaces:e.spaces,playerShape:e.playerShape,currentTurn:e.currentTurn,gameOngoing:e.gameOngoing,display:e.display,gameID:e.gameID,playerID:e.playerID}},function(e){return{makeMove:function(t,n){e(w(t,n))}}})(B),J=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(m.a,{store:Y},s.a.createElement(F,null))}},{key:"componentWillUnmount",value:function(){Y.dispatch(A()),void 0!==P&&P.readyState<3&&P.close()}},{key:"componentDidMount",value:function(){Y.dispatch(A())}}]),t}(s.a.Component);p.a.render(s.a.createElement(J,null),document.getElementById("root"));var X,U,q,V,z=J,K=n(21),Q=n.n(K),Z=280,$=280,_="main",ee=0,te=0,ne=0,ae=!1,re=[],ce=[],le=[],ie=0,oe={x:5,y:5},se="none",ue="none",pe=!1,he=[],fe=0,me=[],de=[],ge=window.setInterval(De,300);function be(e){switch(e.key){case"ArrowLeft":!0===ae&&"left"!=se&&"right"!=se&&(ue="left");break;case"ArrowRight":!0===ae&&"right"!=se&&"left"!=se&&(ue="right");break;case"ArrowUp":!0===ae&&"up"!=se&&"down"!=se&&(ue="up"),!1===ae&&0!=ee&&(ee--,ye[_].render());break;case"ArrowDown":!0===ae&&"down"!=se&&"up"!=se&&(ue="down"),!1===ae&&ee<Object.keys(ye[_]).length-2&&(ee++,ye[_].render());break;case"Enter":ye[_][ee]();break;case"Backspace":"name"==_&&(le.pop(),Te())}/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length&&"name"===_&&le.length<11&&(le.push(e.key),Te())}clearInterval(ge);var ye={main:{0:function(){_="mode",ee=0,ve()},1:function(){_="scores",ee=0,je()},2:function(){_="credits",ee=0,Se()},render:function(){xe()}},mode:{0:function(){_="none",ne=0,ke()},1:function(){_="none",ne=1,ke()},render:function(){ve()}},end:{0:function(){_="name",ee=0,Te()},1:function(){_="main",ee=0,xe()},render:function(){Ee()}},name:{0:function(){le.length>0&&(_="scores",ee=0,function(){var e;0===ne?e="https://snake-scores.herokuapp.com/scores":1===ne&&(e="https://snake-scores.herokuapp.com/hard-scores");le.length>0&&(Q.a.ajax({method:"POST",url:e,data:{name:le.join(""),score:te},xhrFields:{withCredentials:!1},cache:!1,success:console.log("Score successfully submitted")}),xe(),_="main")}())},1:function(){_="end",ee=0,Ee()},render:function(){Te()}},scores:{0:function(){_="hardScores",ee=0,re.sort(Oe),V.clearRect(0,0,240,315),V.fillStyle="black",V.font="35px courier new",V.fillText("HIGH SCORES",5,30),V.fillText("HARD MODE",25,60),V.font="20px courier new",V.fillText("Loading...",60,135),Q.a.ajax({method:"GET",url:"https://snake-scores.herokuapp.com/hard-scores",success:function(e){return console.log(e),e.slice(0,7)}}).done(function(e){if("hardScores"==_){V.clearRect(0,60,240,120),ce=e;for(var t=0;t<ce.length;t++)V.fillText(1+t+". "+ce[t].name,5,85+25*t),V.fillText(ce[t].score,230-13*ce[t].score.length,85+25*t)}}).fail(function(e){console.log(e),"scores"==_&&(V.clearRect(0,50,240,120),V.font="18px courier new",V.fillText("Could not get scores,",5,75),V.fillText("please try again later",5,100))}),Ce()},1:function(){_="main",ee=0,xe()},render:function(){we()}},hardScores:{0:function(){_="scores",ee=0,je()},1:function(){_="main",ee=0,xe()},render:function(){Ce()}},credits:{0:function(){_="main",ee=0,xe()},render:function(){Se()}}};function ve(){switch(V.clearRect(0,0,240,315),V.font="35px courier new",V.fillText("SELECT MODE",5,30),V.font="30px courier new",V.fillStyle="black",V.fillText("Normal",60,100),V.fillText("Hard",60,140),V.font="25px courier new",ee){case 0:V.font="30px courier new",V.fillText(">",40,100),V.font="20px courier new",V.fillText("Snake behaves",40,180),V.fillText("as normal",60,200);break;case 1:V.font="30px courier new",V.fillText(">",40,140),V.font="20px courier new",V.fillText("Snake reverses",35,180),V.fillText("when you earn",40,200),V.fillText("a point",75,220)}}function ke(){$=Z,q.clearRect(0,0,16,21),clearInterval(ge),ae=!0,V.font="300px serif",V.fillStyle="darkgray",V.clearRect(0,0,240,315),se="none",ue="none",te=0,oe={x:5,y:5},he=[],fe=0,de.splice(0),me=[],function(){for(var e=0;e<16;e++){me.push([]);for(var t=0;t<21;t++)me[e].push(0)}console.log(me)}(),me[oe.x][oe.y]=1,de.push(Ie()),De(),ge=setInterval(De,$)}function Oe(e,t){return parseInt(e.score)<parseInt(t.score)?1:parseInt(e.score)>parseInt(t.score)?-1:0}function xe(){switch(V.clearRect(0,0,240,315),V.font="40px courier new",V.fillStyle="black",V.fillText("EXTREME",35,70),V.fillText("SNAKE",60,100),V.font="25px courier new",V.fillStyle="black",V.fillText("Start game",45,140),V.fillText("High scores",45,170),V.fillText("Credits",45,200),ee){case 0:V.fillText(">",25,140);break;case 1:V.fillText(">",25,170);break;case 2:V.fillText(">",25,200)}}function Ee(){switch(V.clearRect(0,0,240,315),V.fillStyle="darkgray",V.fillRect(0,40,240,120),V.fillStyle="white",V.font="43px courier new",V.fillText("GAME OVER",0,80),V.font="26px courier new",V.fillText("Your score:",30,105),V.font="50px courier new",V.fillText(te,100,150),V.font="25px courier new",V.fillStyle="black",V.fillText("Submit score",25,200),V.fillText("Return to menu",25,230),ee){case 0:V.fillText(">",5,200);break;case 1:V.fillText(">",5,230)}}function Te(){switch(V.clearRect(0,0,240,315),V.fillStyle="darkgray",V.fillRect(0,40,240,100),V.fillStyle="#eee",V.fillRect(0,70,240,60),V.fillStyle="white",V.font="24px courier new",V.fillText("Enter your name:",5,60),V.font="36px courier new",V.fillStyle="black",V.fillText(le.join(""),110-11*(le.length-1),115),V.font="25px courier new",V.fillStyle="black",V.fillText("Submit",75,200),V.fillText("Cancel",75,230),ee){case 0:V.fillText(">",55,200);break;case 1:V.fillText(">",55,230)}}function je(){re.sort(Oe),V.clearRect(0,0,240,315),V.fillStyle="black",V.font="35px courier new",V.fillText("HIGH SCORES",5,30),V.fillText("NORMAL MODE",5,60),V.font="20px courier new",V.fillText("Loading...",60,75),Ne().done(function(e){if("scores"==_){V.clearRect(0,60,240,120),re=e;for(var t=0;t<re.length;t++)V.fillText(1+t+". "+re[t].name,5,85+25*t),V.fillText(re[t].score,230-13*re[t].score.length,85+25*t)}}).fail(function(e){console.log(e),"scores"==_&&(V.clearRect(0,50,240,120),V.font="18px courier new",V.fillText("Could not get scores,",5,75),V.fillText("please try again later",5,100))}),we()}function we(){V.clearRect(0,265,240,315),V.font="20px courier new",0===ee&&V.fillText(">",10,285),1===ee&&V.fillText(">",10,305),V.fillText("Hard mode list",35,285),V.fillText("Return to menu",35,305)}function Se(){V.clearRect(0,0,240,315),V.font="35px courier new",V.fillText("CREDITS",40,30),V.font="20px courier new",V.fillText("Created by",45,100),V.fillText("Florin Peltea",35,125),V.fillText(">",10,305),V.fillText("Return to menu",35,305)}function Ce(){V.clearRect(0,265,240,315),V.font="20px courier new",0===ee&&V.fillText(">",10,285),1===ee&&V.fillText(">",10,305),V.fillText("Normal mode list",35,285),V.fillText("Return to menu",35,305)}function Re(e,t){for(var n=0;n<e.length;n++)if(e[n][0]==t[0]&&e[n][1]==t[1])return n;return-1}function Ie(){for(var e=[],t=[],n=[],a=0;a<me.length;a++)void 0!=me[a].find(function(e){return 0==e})&&t.push(a);for(var r=Math.floor(Math.random()*(t.length-0))+0,c=0;c<me[t[r]].length;c++)0===me[t[r]][c]&&n.push(c);console.log(n);var l=Math.floor(Math.random()*(n.length-0))+0;return e.push(t[r]),e.push(n[l]),me[t[r]][n[l]]=1,e}function De(){if(!0===ae&&(0===ne&&fe>0&&(0===ie&&(me[he[0][0]][he[0][1]]=0,he.splice(0,1)),he.push([oe.x,oe.y]),ie>0&&(ie--,Z-3*he.length>=160&&($=Z-3*he.length,clearInterval(ge),ge=setInterval(De,$)))),1===ne&&fe>0))if(0===ie)me[he[0][0]][he[0][1]]=0,he.splice(0,1),he.push([oe.x,oe.y]);else{if(pe){if(he.push([oe.x,oe.y]),1===he.length)switch(se){case"up":ue="down",se="down";break;case"down":ue="up",se="up";break;case"left":ue="right",se="right";break;case"right":ue="left",se="left"}else if(he.length>1){var e=he[0][0]-he[1][0],t=he[0][1]-he[1][1];e>0?(ue="right",se="right"):e<0?(ue="left",se="left"):t>0?(ue="down",se="down"):t<0&&(ue="up",se="up")}oe.x=he[0][0],oe.y=he[0][1],he.splice(0,1),he.reverse()}pe||(he.push([oe.x,oe.y]),ie>0&&ie--,Z-3*he.length>=160&&($=Z-3*he.length,clearInterval(ge),ge=setInterval(De,$)))}if(!pe)switch(ue){case"up":se=ue,oe.y--;break;case"down":se=ue,oe.y++;break;case"left":se=ue,oe.x--;break;case"right":se=ue,oe.x++}if(pe=!1,q.clearRect(0,0,16,21),oe.x<0||oe.x>15||oe.y<0||oe.y>20||-1!=Re(he,[oe.x,oe.y]))return clearInterval(ge),ae=!1,ye[_="end"].render(),"Game Over";me[oe.x][oe.y]=1,-1!==Re(de,[oe.x,oe.y])&&(de.splice(Re(de,[oe.x,oe.y]),1),te++,fe++,ie++,1===ne&&(pe=!0),de.push(Ie()));for(var n=0;n<he.length;n++)q.globalAlpha=.5+.5/(he.length-n+1),q.fillRect(he[n][0],he[n][1],1,1);q.globalAlpha=1;for(var a=0;a<de.length;a++)q.fillStyle="orange",q.fillRect(de[a][0],de[a][1],1,1),q.fillStyle="black";q.fillRect(oe.x,oe.y,1,1),V.font=(te<=9?300:te>9&&te<100?250:150)+"px serif",V.clearRect(0,0,240,320),V.fillText(te,te<=9?45:te>9&&te<100?0:5,te<=9?250:te>9&&te<100?230:200)}function Ne(){return Q.a.ajax({method:"GET",url:"https://snake-scores.herokuapp.com/scores",success:function(e){return console.log(e),e.slice(0,7)}})}var Me=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"gameContainer"},s.a.createElement("canvas",{id:"scoreCanvas",width:"240",height:"315"}),s.a.createElement("canvas",{id:"gameCanvas",width:"240",height:"315"},"Your browser does not support HTML5 Canvas or JavaScript, or those features are disabled."))}},{key:"componentDidMount",value:function(){_="main",ee=0,te=0,ae=!1,re=[],ce=[],le=[],ie=0,oe={x:5,y:5},se="none",he=[],fe=0,me=[],de=[],X=document.getElementById("gameCanvas"),U=document.getElementById("scoreCanvas"),q=X.getContext("2d"),V=U.getContext("2d"),Ne(),document.addEventListener("keydown",be),xe(),q.scale(15,15)}},{key:"componentWillUnmount",value:function(){_="main",ee=0,te=0,ae=!1,re=[],ce=[],le=[],ie=0,oe={x:5,y:5},se="none",he=[],fe=0,me=[],de=[],clearInterval(ge),V.clearRect(0,0,240,315),q.clearRect(0,0,240,315),document.removeEventListener("keydown",be)}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=n(14),Ye=n(13),Ge=n(29),He=n.n(Ge),Le=n(30),We=n.n(Le),Be=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{class:"nav-content"},s.a.createElement("a",{id:"title"},"Florin Peltea"),s.a.createElement(Ae.c,{exact:!0,to:"/",className:"nav-item",activeClassName:"nav-item-active"},"Home"),s.a.createElement(Ae.c,{to:"/projects",className:"nav-item",activeClassName:"nav-item-active"},"Projects"),s.a.createElement(Ae.c,{to:"/contact",className:"nav-item",activeClassName:"nav-item-active"},"Contact")))}}]),t}(s.a.Component),Pe=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"frame"},s.a.createElement("div",{className:"view-frame"},s.a.createElement(Ye.a,{exact:!0,path:"/",component:Fe}),s.a.createElement(Ye.a,{exact:!0,path:"/projects",component:Je}),s.a.createElement(Ye.a,{path:"/projects/snake",component:Ue}),s.a.createElement(Ye.a,{path:"/projects/tic",component:qe}),s.a.createElement(Ye.a,{path:"/contact",component:Xe})))}}]),t}(s.a.Component),Fe=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"about"},"Welcome to my website.",s.a.createElement("br",null),s.a.createElement("p",null),"You can view my projects on my ",s.a.createElement(Ae.b,{to:"/projects"},"projects page")," as well as on my ",s.a.createElement("a",{href:"https://github.com/fpeltea"},"GitHub profile"),".")}}]),t}(s.a.Component),Je=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"projects"},s.a.createElement("div",{className:"project-list"},s.a.createElement(Ae.b,{to:"/projects/snake",className:"no-decoration-link"},s.a.createElement("div",{className:"project-item"},s.a.createElement("img",{id:"snakeImage",src:He.a}),s.a.createElement("div",{className:"project-desc"},s.a.createElement("div",null,"Snake game with high scores ",s.a.createElement("br",null)," (requires keyboard to play)")))),s.a.createElement(Ae.b,{to:"/projects/tic",className:"no-decoration-link"},s.a.createElement("div",{className:"project-item"},s.a.createElement("img",{id:"ticImage",src:We.a}),s.a.createElement("div",{className:"project-desc"},s.a.createElement("div",null,"Online multiplayer tic-tac-toe game"))))))}}]),t}(s.a.Component),Xe=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"contact"},"You can contact me via e-mail at:",s.a.createElement("br",null),"pelteaflorinalexandru@gmail.com")}}]),t}(s.a.Component),Ue=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"snake-page"},s.a.createElement(Me,null),s.a.createElement("div",null,"Use the arrow keys and the enter key to navigate the menu. ",s.a.createElement("br",null),"Use the arrow keys in-game to change direction. ",s.a.createElement("br",null),"A keyboard is required to play (sorry, mobile users) ",s.a.createElement("br",null),s.a.createElement("p",null),"The high score server is currently not functional.",s.a.createElement("br",null),s.a.createElement("p",null),"This game was made in JavaScript using the HTML5 canvas element. jQuery is used to fetch and send high scores.",s.a.createElement("br",null),"The backend for the high score system is a Node.js app with a MongoDB database.",s.a.createElement("br",null)))}}]),t}(s.a.Component),qe=function(e){function t(e){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"tic-page"},s.a.createElement(z,null),s.a.createElement("div",{className:"tic-description"},'Click "Find Game" to search for an opponent.',s.a.createElement("br",null),"You can play against yourself to test the game by opening this page in two browser tabs at once.",s.a.createElement("br",null),s.a.createElement("p",null),"The client for this game was made as a React component using Redux to store the state.",s.a.createElement("br",null),"The server is a Node.js app with a Redis database that stores game states, hosted on AWS EC2."))}}]),t}(s.a.Component);p.a.render(s.a.createElement(Ae.a,null,s.a.createElement(Be,null),s.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.19a5c673.chunk.js.map