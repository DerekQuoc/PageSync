chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.txt == "Hello") {
      generateURL(message.selectedImage, sender, sendResponse);
    }
    });
    function generateURL(message, sender, sendResponse) {
    let scrolledAmount = document.getElementsByTagName("body")[0].scrollTop;
  
    let messageURL = {
    txt: "UPDATE URL",
    url: 'hello'
    }
  
    function selectAndReplace(message, sender, sendResponse) {
    let imgs = document.querySelectorAll('img');
    console.log(imgs)
    switch (message) {
    
    case "image1":
    for (imgElt of imgs) {
    let file = 'images/1.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    case "image2":
    for (imgElt of imgs) {
    let file = 'images/2.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    case "image3":
    for (imgElt of imgs) {
    let file = 'images/3.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    case "image4":
    for (imgElt of imgs) {
    let file = 'images/4.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    case "image5":
    for (imgElt of imgs) {
    let file = 'images/5.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    case "image6":
    for (imgElt of imgs) {
    let file = 'images/6.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    case "image7":
    for (imgElt of imgs) {
    let file = 'images/7.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    
    case "image8":
    for (imgElt of imgs) {
    let file = 'images/8.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    case "image9":
    for (imgElt of imgs) {
    let file = 'images/9.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    case "image10":
    for (imgElt of imgs) {
    let file = 'images/10.gif';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
    }
    break;
    }
    }