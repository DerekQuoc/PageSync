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

chrome.runtime.sendMessage({greeting: 'getSource'}, function(response) {
  console.log('asdkjlasd')
  if(response.scrollAmount !== null)
  {
    window.scrollTo(0, response.scrollAmount)
  }
})
