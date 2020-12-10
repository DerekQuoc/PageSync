let source = null;
let scrollAmount = null;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // sent from another content script, intended for saving source
    if(request.greeting === 'execute') {
        source = request.source;
        scrollAmount = Number(request.scroll);
        chrome.tabs.create({url: source})
    }
    if(request.greeting === 'getSource') {
        sendResponse({ scrollAmount });
        scrollAmount = null;
        return true;
    }
});