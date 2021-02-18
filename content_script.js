// From EME Logger extension

// console.log("ASD");

// script_urls = [
//   "https://cdn.rawgit.com/ricmoo/aes-js/master/index.js",
//   "https://cdn.rawgit.com/Caligatio/jsSHA/master/dist/sha.js",
// ];

// urls = ["msl_client.js"];

// for (var i = 0; i < script_urls.length; i++) {
//   var script = document.createElement("script");
//   script.src = script_urls[i];
//   document.documentElement.appendChild(script);
// }

// for (var i = 0; i < urls.length; i++) {
//   var mainScriptUrl = chrome.extension.getURL(urls[i]);

//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", mainScriptUrl, true);

//   xhr.onload = function (e) {
//     var xhr = e.target;
//     var mainScript = document.createElement("script");
//     mainScript.type = "application/javascript";
//     mainScript["connect-src"] = "unsafe-inline";
//     if (xhr.status == 200) {
//       mainScript.text = xhr.responseText;
//       document.documentElement.appendChild(mainScript);
//     }
//   };

//   xhr.send();
// }
