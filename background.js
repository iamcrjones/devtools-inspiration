chrome.devtools.panels.onPanelOpened.addListener(function (panel) {
  if (panel.title === "DevTools") {
    chrome.tabs.executeScript({
      code: 'DevToolsAPI.showPanel("console")',
    });
  }
});
