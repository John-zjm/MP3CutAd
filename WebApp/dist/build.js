!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}([function(e,t,i){"use strict";var n=i(10),o=i(31);window.Vue=n,new n({el:"body",components:{app:o}})},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(e,t,i){function n(e,t){for(var i=0;i<e.length;i++){var n=e[i],o=f[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(c(n.parts[r],t))}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(c(n.parts[r],t));f[n.id]={id:n.id,refs:1,parts:s}}}}function o(e){for(var t=[],i={},n=0;n<e.length;n++){var o=e[n],r=o[0],s=o[1],a=o[2],l=o[3],c={css:s,media:a,sourceMap:l};i[r]?i[r].parts.push(c):t.push(i[r]={id:r,parts:[c]})}return t}function r(e,t){var i=g(),n=x[x.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var i,n,o;if(t.singleton){var r=m++;i=b||(b=a(t)),n=d.bind(null,i,r,!1),o=d.bind(null,i,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=l(t),n=p.bind(null,i),o=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(t),n=u.bind(null,i),o=function(){s(i)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function d(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t){var i=t.css,n=t.media;t.sourceMap;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function p(e,t){var i=t.css,n=(t.media,t.sourceMap);n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([i],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var f={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=v(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=o(e);return n(i,t),function(e){for(var r=[],s=0;s<i.length;s++){var a=i[s],l=f[a.id];l.refs--,r.push(l)}if(e){var c=o(e);n(c,t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete f[l.id]}}}};var y=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){"use strict";var i=t;i.delimeter=navigator.platform.match(/win/i)?"\\":"/",i.resolveFileName=function(e){var t=e.split(/[\/\\]/g),n=t.pop(),o=t.join(i.delimeter),r=n.indexOf("."),s=n,a="";return-1!==r&&(s=n.substring(0,r),a=n.substring(r)),{fullname:e,filename:n,directory:o,basename:s,extname:a}},i.extend=function(e,t){for(var i=Object.keys(t),n=i.length;n--;)e[i[n]]=t[i[n]];return e},i.floor=function(e){return~~e},i.rand=function(e,t){return void 0===t&&(t=e,e=0),i.floor(Math.random()*(t-e))+e},i.padding=function(e,t){var i=arguments.length<=2||void 0===arguments[2]?" ":arguments[2];for(e=""+e;e.length<t;)e=i+e;return e},i.qsa=function(e){var t=arguments.length<=1||void 0===arguments[1]?document:arguments[1];return[].slice.call(t.querySelectorAll(e),0)},i.hsv2rgb=function(e,t,n){var o,r,s;if(0==t)o=r=s=n;else{e/=60;var a=i.floor(e),l=e-a,c=n*(1-t),d=n*(1-t*l),u=n*(1-t*(1-l));switch(a){case 0:o=n,r=u,s=c;break;case 1:o=d,r=n,s=c;break;case 2:o=c,r=n,s=u;break;case 3:o=c,r=d,s=n;break;case 4:o=u,r=c,s=n;break;case 5:o=n,r=c,s=d}}return o=i.floor(255*o),r=i.floor(255*r),s=i.floor(255*s),[o,r,s]},i.rgb2hex=function(e,t,n){return"#"+i.padding(e.toString(16),2,"0")+i.padding(t.toString(16),2,"0")+i.padding(n.toString(16),2,"0")},i.formatDuration=function(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];if(isNaN(e))return"--:--";var n=e%1e3;e=i.floor(e/1e3);var o=e%60;e=i.floor(e/60);var r=e%60;e=i.floor(e/60);var s=e,a="";return s>0&&(a+=s+":"),(!t||r>0)&&(a+=(a?i.padding(r,2,"0"):r)+":"),a+=a?i.padding(o,2,"0"):o,t&&(a+=":"+i.padding(n,3,"0")),a},i.timestamp=function(){return(new Date).getTime()}},,,,,,function(e,t,i){i(24),e.exports=i(14),("function"==typeof e.exports?e.exports.options:e.exports).template=i(29)},function(e,t){e.exports=Vue},function(e,t,i){"use strict";var n=i(3);e.exports={data:function(){return{selectedFiles:[],typeCount:0,selectedFile:null,selectedAd:null,loading:!1,timeUsed:0,timeLeft:-1}},methods:{addFile:function(e){if(!this.selectedFiles.some(function(t){return t.fullname===e})){var t={length:NaN,ads:[]};n.extend(t,n.resolveFileName(e)),t.length=n.rand(123456),this.selectedFiles.push(t)}},openFile:function(){var e=this;bound.openFile("添加文件","音频文件(*.mp3)|*.mp3",function(t,i){i=JSON.parse(i),i.forEach(e.addFile)})},openDirectory:function(){var e=this;bound.openDirectory("*.mp3",function(t,i){i=JSON.parse(i),i.forEach(e.addFile)})},removeFile:function(e){return this.selectedFiles.$remove(e),!1},selectAd:function(e,t){this.selectedFile=e,this.selectedAd=t},detectAd:function(){var e=this;this.selectAd(null,null),this.loading=!0,this.timeUsed=0,this.timeLeft=-1,bound.detectAD(JSON.stringify(this.selectedFiles.map(function(e){return e.fullname})),function(t,i){e.loading=!1,i=JSON.parse(i);var n=[];i.forEach(function(t,i){var o=e.selectedFiles[i];o.length=t.length;var r=t.ads;r.forEach(function(e,t){var i=e.type;-1===n.indexOf(i)&&n.push(i),e.ignored=!1}),o.ads=r}),e.typeCount=n.length},function(t,i){e.timeUsed=t,e.timeLeft=i,e.loadingProgress=t/(t+i)})},cut:function(){var e=this;this.timeUsed=0,this.timeLeft=-1,bound.selectDirectory(function(t,i){i=JSON.parse(i),i&&(e.loading=!0,bound.cut(JSON.stringify(e.selectedFiles),i,function(t,n){alert(JSON.stringify(["cut",t,n,i],null,"  ")),e.loading=!1},function(t,i){e.timeUsed=t,e.timeLeft=i}))})},showDevTools:function(){bound.showDevTools()}},computed:{loadingProgress:function(){return this.timeLeft<0?0:this.timeUsed/(this.timeUsed+this.timeLeft)},timeToGo:function(){return this.timeLeft<0||this.timeLeft>1e4?"尚不明朗":n.formatDuration(1e3*this.timeLeft,!1)}},components:{FileList:i(33),ControlPanel:i(32),ProgressBar:i(9)}}},function(e,t,i){"use strict";var n=i(3);e.exports={props:["ad","file"],data:function(){return{playing:!1,playTime:0}},computed:{disable:function(){return!(this.ad&&this.file)},rangeStart:function(){return this.ad?n.formatDuration(this.ad.start,!1):"--:--"},rangeEnd:function(){return this.ad?n.formatDuration(this.ad.end,!1):"--:--"},played:function(){if(!this.ad)return"--:--";if(!this.playing)return"0:00";var e=this.playTime-this.ad.start;return n.formatDuration(e,!1)},duration:function(){if(!this.ad)return"--:--";var e=this.ad.end-this.ad.start;return n.formatDuration(e,!1)},tagButtonText:function(){return this.ad&&this.ad.ignored?"确是广告":"并非广告"},playProgress:function(){return this.ad&&this.file&&this.playing?this.playTime<=0?0:(this.playTime-this.ad.start)/(this.ad.end-this.ad.start):0}},created:function(){this.$watch("ad",function(){this.stop()})},methods:{stop:function(){clearInterval(this.playTimeer),this.playing=!1,this.playTime=0,bound.stop()},play:function(){var e=this;this.playing=!0;var t=100,i=n.timestamp();this.playTime=this.ad.start,this.playTimeer=setInterval(function(){e.playTime=e.ad.start+n.timestamp()-i},t),bound.play(this.file.fullname,this.ad.start,this.ad.end,function(){clearInterval(e.playTimeer),e.playing=!1,e.playTime=0})},togglePlay:function(){this.playing?this.stop():this.play()},tagAd:function(){this.ad.ignored=!this.ad.ignored}},components:{ProgressBar:i(9)}}},function(e,t,i){"use strict";var n=i(34);e.exports={props:["files","type-count","selected-ad"],data:function(){return{expand:!0}},computed:{expandButtonText:function(){return this.expand?"-":"+"}},methods:{adMouseover:function(e){this.$broadcast("ad-active",e)},adMouseout:function(e){this.$broadcast("ad-deactive",e)}},components:{TrackViewer:n}}},function(e,t){"use strict";e.exports={props:["progress"],computed:{percent:function i(){var i=100*+this.progress;return i>100&&(i=100),0>i&&(i=0),i+"%"}}}},function(e,t,i){"use strict";var n=i(10),o=i(3);n.filter("musicTime",function(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];return o.formatDuration(e,t)}),n.filter("segmentStyle",function(e,t,i){var n={top:0,bottom:0};if(n.left=e.start/t.length*100+"%",n.right=100*(1-e.end/t.length)+"%",i>0){var r=e.type/i*350+10,s=o.hsv2rgb(r,.8,.9),a=s[0],l=s[1],c=s[2],d=o.rgb2hex(a,l,c);n.backgroundColor=d}return n}),e.exports={props:["file","type-count","selected-ad"],data:function(){return{activeType:null}},methods:{removeFile:function(e){this.$dispatch("remove",this.file)},mouseover:function(e){this.$dispatch("ad-mouseover",e)},mouseout:function(e){this.$dispatch("ad-mouseout",e)},select:function(e){this.$dispatch("select-ad",this.file,e),this.selectedAd=e}},events:{"ad-active":function(e){this.activeType=e.type},"ad-deactive":function(e){this.activeType=null}}}},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".pure-button{color:#fff;border-radius:4px;text-shadow:0 1px 1px rgba(0,0,0,.2)}.pure-button-success{background:#1cb841}.pure-button-error{background:#ca3c3c}.pure-button-warning{background:#df7514}.pure-button-secondary{background:#42b8dd}.h-box,.v-box{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.v-box{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}*{box-sizing:border-box}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.spinner{-webkit-animation:spin 2s infinite ease-in-out;animation:spin 2s infinite ease-in-out}body{font:100% Helvetica,Microsoft YaHei,sans-serif;color:#333;background-color:#fff}#wrap{position:absolute;width:100%;height:100%;min-height:320px}#header{width:100%;z-index:500;box-shadow:0 0 10px #000}#body{width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}#sidebar{width:120px;padding:10px 4px 0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}#sidebar button{width:100%;margin-bottom:10px}#main{min-width:360px;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:hidden;overflow-y:auto}#loading{position:absolute;width:100%;height:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:hsla(0,0%,100%,.8);z-index:999}#loading i{font-size:120px}#loading div{font-size:24px}#loading .progress{width:80%}#loading .progress .time{text-align:center;font-size:14px}",""])},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".control-panel[_v-1140326b]{position:relative;height:45px}.mask[_v-1140326b]{position:absolute;width:100%;height:100%;top:0;left:0;background:hsla(0,0%,100%,.8)}.player[_v-1140326b]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.player .range[_v-1140326b]{margin-left:8px;font-size:14px;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.player .control[_v-1140326b]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-right:4px}.player .control .time[_v-1140326b]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:8px}.player .control i[_v-1140326b]{font-size:30px;margin:0 4px;cursor:pointer}.player .control i[_v-1140326b]:hover{color:#000}.player .progress[_v-1140326b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin:0 10px}.ad-control[_v-1140326b]{padding-right:4px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}",""])},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".file-list ul[_v-487615b4]{list-style:none;margin:0;padding:0}.file-list ul>li.item[_v-487615b4]{position:relative;margin-bottom:4px;background-color:#eee}.file-list ul>li.item>header[_v-487615b4]{position:absolute;left:0;top:0}",""])},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".progress-bar[_v-c2251d28]{width:100%;height:16px}.progress-bar .slot[_v-c2251d28]{position:relative;width:100%;height:100%;background-color:#fff;box-shadow:inset -2px -2px 2px #333,inset 2px 2px 2px #333}.progress-bar .slot .current[_v-c2251d28]{position:absolute;left:0;top:0;height:100%;background-color:rgba(0,88,255,.5);-webkit-transition:width .2s;transition:width .2s}",""])},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,".track-viewer[_v-724d354d]{height:36px}.track-viewer .time[_v-724d354d]{position:absolute;right:0;bottom:0;padding:2px 4px;background-color:hsla(0,0%,100%,.6);font-size:12px;z-index:10}.track-viewer>.remove[_v-724d354d]{position:absolute;right:2px;top:2px;opacity:.6;cursor:pointer;z-index:30}.track-viewer>.remove[_v-724d354d]:hover{opacity:1}.track-viewer .track[_v-724d354d]{position:relative;width:100%;height:100%}.track-viewer .track>.segment[_v-724d354d]{position:absolute;height:100%;z-index:20;opacity:.6;cursor:pointer}.track-viewer .track>.segment.active[_v-724d354d],.track-viewer .track>.segment.selected[_v-724d354d]{opacity:1}.track-viewer .track>.segment.selected[_v-724d354d],.track-viewer .track>.segment[_v-724d354d]:hover{box-shadow:inset -2px -2px 2px #669bff,inset 2px 2px 2px #669bff}.track-viewer .track>.segment.ignored[_v-724d354d]:not(:hover){opacity:.2}",""])},function(e,t,i){var n=i(16);"string"==typeof n&&(n=[[e.id,n,""]]);i(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,i){var n=i(17);"string"==typeof n&&(n=[[e.id,n,""]]);i(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,i){var n=i(18);"string"==typeof n&&(n=[[e.id,n,""]]);i(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,i){var n=i(19);"string"==typeof n&&(n=[[e.id,n,""]]);i(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,i){var n=i(20);"string"==typeof n&&(n=[[e.id,n,""]]);i(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t){e.exports='<div id=wrap class=v-box><div id=header><control-panel :ad=selectedAd :file=selectedFile></control-panel></div><div id=body class=h-box><div id=sidebar class=v-box><button class="pure-button pure-button-primary" @click=openFile><i class="fa fa-file-o"></i> <span>添加文件</span></button> <button class="pure-button pure-button-primary" @click=openDirectory><i class="fa fa-folder-open-o"></i> <span>添加目录</span></button> <button class="pure-button pure-button-secondary" :disabled="selectedFiles.length === 0" @click=detectAd><i class="fa fa-search"></i> <span>算！</span></button> <button class="pure-button pure-button-secondary" :disabled="selectedFiles.length === 0" @click=cut><i class="fa fa-scissors"></i> <span>干！</span></button> <button class="pure-button pure-button-warning" @click=showDevTools><i class="fa fa-cog"></i> <span>DevTools</span></button></div><div id=main class=v-box><file-list :files=selectedFiles :selected-ad.sync=selectedAd @remove=removeFile @select-ad=selectAd :type-count=typeCount></file-list></div></div></div><div id=loading v-show=loading class=v-box><i class="fa fa-spinner spinner"></i><div>玩命计算中</div><div class=progress><progress-bar :progress=loadingProgress></progress-bar><div class=time>预计剩余时间：{{timeToGo}}</div></div></div>'},function(e,t){e.exports='<div class="control-panel h-box" _v-1140326b=""><div class="player h-box" _v-1140326b=""><div class="range v-box" _v-1140326b=""><span class=time _v-1140326b="">{{rangeStart}}</span> <span class=time _v-1140326b="">{{rangeEnd}}</span></div><div class=progress _v-1140326b=""><progress-bar :progress=playProgress _v-1140326b=""></progress-bar></div><div class="control h-box" _v-1140326b=""><span class="time h-box" _v-1140326b="">{{played}} / {{duration}}</span> <i class="play fa fa-play" :class="[(playing ? \'fa-stop\' : \'fa-play\')]" @click=togglePlay _v-1140326b=""></i></div></div><div class="ad-control h-box" _v-1140326b=""><button class="pure-button pure-button-warning" v-show=ad @click=tagAd _v-1140326b="">{{tagButtonText}}</button></div><div class=mask v-show=disable _v-1140326b=""></div></div>'},function(e,t){e.exports='<div class=file-list _v-487615b4=""><div class=control _v-487615b4=""></div><ul class=list v-show=expand _v-487615b4=""><li v-for="file in files" class="item v-box" _v-487615b4=""><header class=h-box _v-487615b4=""><span _v-487615b4="">{{file.filename}}</span></header><track-viewer :file=file :type-count=typeCount :selected-ad=selectedAd @ad-mouseover=adMouseover @ad-mouseout=adMouseout _v-487615b4=""></track-viewer></li></ul></div>'},function(e,t){e.exports='<div class=progress-bar _v-c2251d28=""><div class=slot _v-c2251d28=""><div class=current :style="{ width: percent }" _v-c2251d28=""></div></div></div>'},function(e,t){e.exports='<div class=track-viewer _v-724d354d=""><div class=track v-el:track="" _v-724d354d=""><div class=segment v-if="file.ads.length > 0" v-for="ad in file.ads" :class="{ active: ad.type === activeType, ignored: ad.ignored, selected: ad === selectedAd }" :style="ad | segmentStyle file typeCount" @mouseover=mouseover(ad) @mouseout=mouseout(ad) @click=select(ad) _v-724d354d=""></div></div><span class=time _v-724d354d="">{{file.length | musicTime true}}</span> <i class="remove fa fa-times" @click=removeFile _v-724d354d=""></i></div>'},function(e,t,i){i(21),e.exports=i(11),("function"==typeof e.exports?e.exports.options:e.exports).template=i(26)},function(e,t,i){i(22),e.exports=i(12),("function"==typeof e.exports?e.exports.options:e.exports).template=i(27)},function(e,t,i){i(23),e.exports=i(13),("function"==typeof e.exports?e.exports.options:e.exports).template=i(28)},function(e,t,i){i(25),e.exports=i(15),("function"==typeof e.exports?e.exports.options:e.exports).template=i(30)}]);