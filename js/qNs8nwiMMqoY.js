"use strict";var RDStation=function(){var t={windowLoaded:!1};return window.addEventListener("load",(function(){t.windowLoaded=!0})),t}(),RDCookieControl=function(){var t={analytics:{eventName:"rd_cookie_consent_allow_analytics",track:!0},functional:{eventName:"rd_cookie_consent_allow_functional",track:!0},configuration:null};return document.addEventListener(t.analytics.eventName,(function(){t.analytics.track=!0})),document.addEventListener(t.functional.eventName,(function(){t.functional.track=!0})),t}();!function(){var t=function(){!function(t,e,n,o,a){var i=function(){RdstationPopup.init(e,n,t)},r=function(){return null!==document.querySelector("#landing-page-attributes")};if(!r()||r()&&null!==document.querySelector("body > .bricks--container")){var c=function(t,e){var n=document.createElement("script");return n.setAttribute("type","text/javascript"),n.setAttribute("src",function(t,e){return t+"/js/rdstation-popups/"+e+"/rdstation-popup.min.js?v=1"}(t,e)),function(t){t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,i())}:t.onload=i}(n),n}("https://d335luupugsy2.cloudfront.net","bricks");document.body.appendChild(c)}}("UA-168603313-1","f0f362bddcfe831bd71ea4175de46c43","173342");var t=document.createElement("script"),e=function(){RdIntegration.integrateAll("f0f362bddcfe831bd71ea4175de46c43"),console.log("FormIntegration; ver.1.3.3","initialized")};t.setAttribute("type","text/javascript"),t.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/integration/stable/rd-js-integration.min.js?v=1"),t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},document.body.appendChild(t)},e=function(){return"complete"===document.readyState};!function(t){function n(){TrafficSourceCookie.init("__trf.src",".multysat.com.br"),console.log("TrafficSourceCookie","initialized");try{!window.opener||-1==window.name.indexOf("TAGMANAGER_VERIFY")&&-1==window.location.href.indexOf("tagmanager_verify")||window.opener.postMessage(JSON.stringify({task:"checkTagManager",tagManagerChecked:!0}),"https://app.rdstation.com.br")}catch(t){console.error(t)}}function o(){i.onload=n,i.onreadystatechange=function(){"complete"===this.readyState&&n()},document.body.appendChild(i)}if(!window.hasOwnProperty("RDStationTrackingCodeChecker")||!window.RDStationTrackingCodeChecker){if(window.RDStationTrackingCodeChecker=!0,-1!=navigator.userAgent.toLowerCase().indexOf("safari"))var a=setInterval((function(){e()&&(clearInterval(a),t())}),500);else e()?t():window.addEventListener("load",t);var i=document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/traffic-source-cookie/stable/traffic-source-cookie.min.js"),RDCookieControl.analytics.track?o():document.addEventListener(RDCookieControl.analytics.eventName,o)}}((function(){var e=document.createElement("iframe");e.onload=function(){RDStation.windowLoaded=!0,t()},e.setAttribute("style","width: 1px; height: 1px; position: absolute; top: -100px;"),e.setAttribute("id","rd_tmgr"),document.body.appendChild(e)}))}();