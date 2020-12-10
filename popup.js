document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('button_submit')
  button.addEventListener('click', generate)
  let goButton = document.getElementById('go_button')
  goButton.addEventListener('click', travel)
});

  // send a message to content.js for the url and height
  const generate = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      document.getElementById('linkLocation').innerHTML = response.farewell;
    });
  })
  }
  
  const travel = () => {
    //get the link put into the text box
    let link = document.getElementById('submitForm').value
    //split it into url and height e.g link = ['google.com', 600 ]
    link = link.split(' ')

    //currently just goes to link
    chrome.tabs.create({url: link[0]})
    
    //need to find way to store that height given here and pass it to content.js
    }