chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
      id: 'copyTableAsJSON',
      title: "Copy table as JSON",
      contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if ('copyTableAsJSON' === info.menuItemId) {

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {
              message: "messageCopyTableAsJSON"
          }, function(response) {})
      });
  }
});

/**
Publishing the extension: https://developer.chrome.com/docs/webstore/publish/
Understanding permissions: https://developer.chrome.com/docs/extensions/mv3/declare_permissions/

*/
