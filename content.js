chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      //url
    let link = window.location.href
    //distance scrolled
    let scrollAmount = document.documentElement.scrollTop
    //link to send back e.g 'google.com 600'
    let generatedLink = link + ' ' + scrollAmount;
    if (request.greeting == "hello"){
      sendResponse({farewell: generatedLink});
      return true;
    }
  }
);
//attempting to find a way to make the page move on load to the height given


// setTimeout(window.scrollTo(0, 500), 1000)
//chrome.storage.local.get('Height')
//.then(data => {
//    height = data.Height;
//    setTimeout(window.scrollTo(0, height), 1000)
//})