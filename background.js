chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl: chrome.extension.getURL("app.js"),
    };
  },
  {
    urls: ["https://play.hbomax.com/js/app.js"],
  },
  ["blocking"]
);
