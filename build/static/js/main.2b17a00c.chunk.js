(this.webpackJsonponeshotsquad=this.webpackJsonponeshotsquad||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"date":"2021-10-03T14:00:00Z","players":"Moro, Seiryuu, Warlord + 1","description":"2nd level. Warnings: Gore, blood, bodyparts insects"},{"date":"2021-10-04T17:00:00Z","players":"Asmordeus, Picaroon, T-Jay + 1","description":"2nd level. Warnings: Gore, bodybarts, harm to children (already dead)"},{"date":"2021-10-08T20:00:00Z","players":"Neeko, Picaroon, T-Jay, Warlord","description":"2nd level \\b Warnings: Gore, bodyparts, madness."},{"date":"2021-10-13T17:00:00Z","players":"Asmordeus, Picaroon, T-Jay","description":"5th level \\b Warnings: Freezing, madness, gore, bodyparts"},{"date":"2021-10-15T17:00:00Z","players":"Moromuro, Picaroon, T-Jay + 1","description":"5th level. Warnings: Death, Madness, Gore, Body parts, World Change."},{"date":"2021-10-15T20:30:00Z","players":"Neeko, Warlord, Lucas + 1","description":"2nd level. WARNINGS: Gore, body parts, insects."},{"date":"2021-10-18T18:45:00Z","players":"Adi, Picaroon, T-Jay + 1","description":"~Story to be revealed~"},{"date":"2021-10-25T18:45:00Z","players":"Adi, Picaroon, T-Jay + 1","description":"~Story to be revealed~"},{"date":"2021-10-26T16:00:00Z","players":"Syameal, Moromuro + 2","description":"~Story to be revealed~"},{"date":"2021-10-29T17:00:00Z","players":"Asmordeus, Moromuro, Picaroon + 1","description":"~10th level adventure, only experienced players~"},{"date":"2021-10-29T21:30:00Z","players":"Neeko, T-Jay, Warlord + 1","description":"~Story to be revealed~"},{"date":"2021-10-31T14:30:00Z","players":"Moromuro, Seiruyy + 2","description":"~Story to be revealed~"},{"date":"2021-10-31T18:00:00Z","players":"T-Jay, Warlord + 2","description":"~Story to be revealed~"}]')},,,,,,,,function(e,t,r){"use strict";(function(e){var s=r(3),a=r(4),i=r(5),n=r(7),o=r(6),c=r(1),d=r.n(c),l=r(12),j=(r(19),r(11)),m=r(2),b=r(0),h=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).state={time:{hours:0,minutes:0,seconds:0,milliseconds:0},startTime:0,timer:null,duration:0},a.startTimer=a.start.bind(Object(i.a)(a)),a.nextGame=[],a}return Object(a.a)(r,[{key:"msToTime",value:function(e){var t=parseInt(e%1e3),r=Math.floor(e/1e3%60),s=Math.floor(e/6e4%60),a=Math.floor(e/36e5);return{hours:a=a.toString().padStart(2,"0"),minutes:s=s.toString().padStart(2,"0"),seconds:r=r.toString().padStart(2,"0"),milliseconds:t=t.toString().padStart(3,"0")}}},{key:"start",value:function(){var e=this;if(0===this.nextGame.length)for(var t=0,r=!1;!r&&t!==m.length;){var s=m[t];new Date(s.date).getTime()-Date.now()>0&&(this.nextGame=m[t],r=!0),t++}this.state.timer||(this.state.startTime=Date.now(),this.state.duration=new Date(this.nextGame.date).getTime()-Date.now(),this.timer=window.setInterval((function(){return e.run()}),1e3))}},{key:"run",value:function(){var e=this,t=Date.now()-this.state.startTime,r=this.state.duration-t;r<0&&(r=0),this.setState((function(){return{time:e.msToTime(r)}})),0===r&&(window.clearTimeout(this.timer),this.timer=null)}},{key:"renderGameTable",value:function(){return Object(b.jsx)(j.a,{})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[this.startTimer(),Object(b.jsxs)("div",{className:"description-header card",children:[Object(b.jsx)("h1",{id:"header-headline-1",children:" GMT ONESHOT SQUAD"}),Object(b.jsxs)("p",{id:"header-text-1",children:["Adventures in the World of Bal'Morel,",Object(b.jsx)("br",{}),"brought to you by DM Zaeryss."]}),Object(b.jsxs)("p",{id:"header-text-2",children:["With possible issues regarding the site,",Object(b.jsx)("br",{})," contact Moro on discord."]})]}),Object(b.jsxs)("div",{className:"timer card",children:[Object(b.jsxs)("div",{className:"bigTimerCard",children:[Object(b.jsx)("div",{className:"bigTimerLabelDiv",children:Object(b.jsx)("p",{id:"bigTimerLabel",children:"Next Game in"})}),Object(b.jsx)("p",{className:"bigTimer",children:Object(b.jsxs)("strong",{children:[this.state.time.hours," : ",this.state.time.minutes," : ",this.state.time.seconds]})})]}),Object(b.jsxs)("div",{className:"timerInfo",children:[Object(b.jsx)("p",{className:"timerText1",children:Object(b.jsx)("strong",{children:new Date(this.nextGame.date).toLocaleString("en-gb",{dateStyle:"medium",timeStyle:"long"})})}),Object(b.jsxs)("span",{className:"infoText",children:["Your timezone: ",Intl.DateTimeFormat().resolvedOptions().timeZone]}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{className:"timerText2",children:new Date(this.nextGame.date).toUTCString()}),Object(b.jsx)("span",{className:"infoText",children:"UTC time"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Players"}),Object(b.jsx)("p",{children:this.nextGame.players}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Info"}),Object(b.jsx)("p",{children:this.nextGame.description})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"gameList",children:[Object(b.jsx)("div",{className:"middleBreak",children:Object(b.jsx)("h2",{id:"comingGames",children:"Upcoming games"})}),this.renderGameTable()]}),Object(b.jsx)("div",{style:{height:"100px"}})]})}}]),r}(d.a.Component);t.a=Object(l.hot)(e)(h)}).call(this,r(18)(e))},function(e,t,r){"use strict";var s=r(3),a=r(4),i=r(7),n=r(6),o=r(1),c=r.n(o),d=(r(20),r(2)),l=r(0),j=function(e){Object(i.a)(r,e);var t=Object(n.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"renderInfo",value:function(){var e=[];return d.forEach((function(t,r){new Date(t.date).getTime()-Date.now()>0&&(r===d.length-1?e.push(Object(l.jsxs)("div",{className:"gameCard",children:[Object(l.jsx)("h1",{className:"userTime",children:new Date(t.date).toLocaleString("en-gb",{dateStyle:"medium",timeStyle:"medium"})}),Object(l.jsx)("p",{children:new Date(t.date).toUTCString()}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.players}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.description})]},r)):e.push(Object(l.jsxs)("div",{className:"gameCard middleRow",children:[Object(l.jsx)("h1",{className:"userTime",children:new Date(t.date).toLocaleString("en-gb",{dateStyle:"medium",timeStyle:"medium"})}),Object(l.jsx)("p",{children:new Date(t.date).toUTCString()}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.players}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:t.description})]},r)))})),e}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"gameTable",children:this.renderInfo()})}}]),r}(c.a.Component);t.a=j},,function(e,t,r){"use strict";r.r(t);r(1);var s=r(9),a=r.n(s),i=r(10),n=r(0);a.a.render(Object(n.jsx)(i.a,{}),document.getElementById("root"))},,,,,,function(e,t,r){},function(e,t,r){}],[[13,1,2]]]);
//# sourceMappingURL=main.2b17a00c.chunk.js.map