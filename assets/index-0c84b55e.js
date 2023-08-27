(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();function A(i,s,n){var r=6371.00877,t=5,e=30,l=60,m=126,y=38,a=43,u=136,h=Math.PI/180,I=180/Math.PI,M=r/t,v=e*h,P=l*h,g=m*h,D=y*h,f=Math.tan(Math.PI*.25+P*.5)/Math.tan(Math.PI*.25+v*.5);f=Math.log(Math.cos(v)/Math.cos(P))/Math.log(f);var o=Math.tan(Math.PI*.25+v*.5);o=Math.pow(o,f)*Math.cos(v)/f;var b=Math.tan(Math.PI*.25+D*.5);b=M*o/Math.pow(b,f);var d={};if(i=="toXY"){d.lat=s,d.lng=n;var p=Math.tan(Math.PI*.25+s*h*.5);p=M*o/Math.pow(p,f);var c=n*h-g;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI),c*=f,d.x=Math.floor(p*Math.sin(c)+a+.5),d.y=Math.floor(b-p*Math.cos(c)+u+.5)}else{d.x=s,d.y=n;var _=s-a,V=b-n+u;p=Math.sqrt(_*_+V*V);var T=Math.pow(M*o/p,1/f);T=2*Math.atan(T)-Math.PI*.5,Math.abs(_)<=0?c=0:Math.abs(V)<=0?c=Math.PI*.5:c=Math.atan2(_,V);var L=c/f+g;d.lat=T*I,d.lng=L*I}return d}const O=async(i,s,n,r)=>{const t="http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?",e="serviceKey=1sJ7p5qep1Esv0VsbmdnxcIfXV4QwvnULJol7JPT%2FVfLl5i1bns2e%2B5RguVPd8lC%2BUZ2VDyHyVolEYXk6WoFiA%3D%3D&dataType=json&base_date="+i+"&base_time="+s+"&nx="+n+"&ny="+r,l=t+e;try{return(await fetch(l)).json()}catch(m){return console.error(m),"fail"}};function X(i){const s=i.coords.latitude,n=i.coords.longitude,r=A("toXY",s,n),t=r.x,e=r.y;let l=new Date;const m=("0"+l.getHours()).slice(-2),y=("0"+l.getMinutes()).slice(-2),a=Number(m+y);let u="";210<=a&&a<510?u="0200":510<=a&&a<810?u="0500":810<=a&&a<1110?u="0800":1110<=a&&a<1410?u="1100":1410<=a&&a<1710?u="1400":1710<=a&&a<2010?u="1700":2010<=a&&a<2310?u="2000":(2310<=a||(l=new Date(new Date().setDate(new Date().getDate()-1))),u="2300");const h=l.getFullYear(),I=("0"+(l.getMonth()+1)).slice(-2),M=("0"+l.getDate()).slice(-2),v=`${h}${I}${M}`,P=`${u}`;document.querySelector("#standardTime").innerText=`${h}년 ${I}월 ${M}일 ${P.slice(0,2)}시 기준`,O(v,P,t,e).then(g=>{if(g!=="fail"){const D=document.querySelector("#weather span:first-child"),f=document.querySelector("#weather span:nth-child(2)"),o=g.response.body.items.item[0].fcstValue,b=g.response.body.items.item[7].fcstValue,d=g.response.body.items.item[8].fcstValue;let p="";b>=50||[1,2,3,4].includes(d)?p="☂️":p="🌈",D.innerText=`${o}℃`,f.innerText=p;const c=document.querySelector("#image");o>=28?c.src="img/여름1.png":o>=23&&o<28?c.src="img/여름2.png":o>=20&&o<23?c.src="img/봄1.png":o>=17&&o<20?c.src="img/봄2.png":o>=12&&o<17?c.src="img/가을1.png":o>=9&&o<12?c.src="img/가을2.png":o>=5&&o<9?c.src="img/겨울1.png":o<5&&(c.src="img/겨울2.png")}if(g==="fail")return alert("날씨 정보를 가져오지 못했습니다.")})}function q(){alert("위치 확인 권한을 허용해 주세요.")}navigator.geolocation.getCurrentPosition(X,q);const Y=async()=>{const n="https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json?"+"consumer_key=ba34dc5fa9b44d508fdb&consumer_secret=cb5934392922407e8811";try{return(await fetch(n)).json()}catch(r){return console.error(r),"fail"}},k=async(i,s,n)=>{const r="https://sgisapi.kostat.go.kr/OpenAPI3/transformation/transcoord.json?",t="src=4326&dst=5181&posX="+n+"&posY="+s+"&accessToken="+i,e=r+t;try{return(await fetch(e)).json()}catch(l){return console.error(l),"fail"}},E=async(i,s)=>{const n="http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList?",r="tmX="+i+"&tmY="+s+"&returnType=json&serviceKey=1sJ7p5qep1Esv0VsbmdnxcIfXV4QwvnULJol7JPT/VfLl5i1bns2e+5RguVPd8lC+UZ2VDyHyVolEYXk6WoFiA==",t=n+r;try{return(await fetch(t)).json()}catch(e){return console.error(e),"fail"}},S=async i=>{const s="http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?",n="stationName="+i+"&dataTerm=DAILY&returnType=json&serviceKey=1sJ7p5qep1Esv0VsbmdnxcIfXV4QwvnULJol7JPT%2FVfLl5i1bns2e%2B5RguVPd8lC%2BUZ2VDyHyVolEYXk6WoFiA%3D%3D&ver=1.0",r=s+n;try{return(await fetch(r)).json()}catch(t){return console.error(t),"fail"}};function w(i){S(i).then(s=>{if(s!=="fail"){const n=document.querySelector("#weather span:last-child"),r=s.response.body.items[0].pm10Grade,t=s.response.body.items[0].pm25Grade;let e="";r>2||t>2?e="😷":e="😊",n.innerText=e}if(s==="fail")return alert("미세먼지 정보를 가져오지 못했습니다.")})}function x(i){const s=i.coords.latitude,n=i.coords.longitude;Y().then(r=>{if(r!=="fail"){const t=r.result.accessToken;k(t,s,n).then(e=>{if(e!=="fail"){const l=e.result.posX,m=e.result.posY;E(l,m).then(y=>{if(y!=="fail"){const a=y.response.body.items[0].stationName;w(a)}if(y==="fail")return w("종로구"),alert("가까운 미세먼지 측정소 조회에 실패했습니다. 종로구 기준으로 미세먼지가 표시됩니다.")})}if(e==="fail")return w("종로구"),alert("TM 좌표 변환 api 호출에 실패했습니다. 종로구 기준으로 미세먼지가 표시됩니다.")})}if(r==="fail")return w("종로구"),alert("TM 좌표 변환 api용 액세스 토큰 발급에 실패했습니다. 종로구 기준으로 미세먼지가 표시됩니다.")})}function $(){alert("위치 확인 권한을 허용해 주세요.")}navigator.geolocation.getCurrentPosition(x,$);document.querySelector("#app").innerHTML=`
  <div class="main">
    <span id="standardTime"></span>
    <h1>날씨별 추천 옷차림</h1>
    <div id="weather">
      <span id="temp"></span>
      <span class="icon"></span>
      <span class="icon"></span>
    </div>
    <img id="image" src="" />
  </div>
`;