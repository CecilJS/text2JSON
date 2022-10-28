chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("*/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});

/**
Publishing the extension: https://developer.chrome.com/docs/webstore/publish/
Understanding permissions: https://developer.chrome.com/docs/extensions/mv3/declare_permissions/

*/
