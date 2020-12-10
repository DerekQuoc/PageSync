document.addEventListener('DOMContentLoaded', function () { 
    var submitButton = document.getElementById("button_submit");
    submitButton.addEventListener('click', sendData);
  
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.txt == "UPDATE URL") {
      selectAndReplace(message.generatedURL, sender, sendResponse);
    }
    });
    
    });
  
  
    function selectAndReplace(url) {
      let generatedLinkLocation = document.getElementById('generatedLink')
      generatedLinkLocation.innerTEXT = url;
    }
  
    function sendData() {
      let params = {
      active: true,
      currentWindow: true
     }
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs) {
  
      let currentURL = tabs[0].url
    // var selected = document.getElementById("select_image");
    // var selectedImage = selected.options[selected.selectedIndex].value;
    let message = {
    txt: "Hello",
    url: currentURL
    }
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
    console.log("Success");
    });
    }
    }