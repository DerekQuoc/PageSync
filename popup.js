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
      //document.getElementById('linkLocation').textContent.select()
      //document.execCommand("copy")

      //copy
      const el = document.createElement('textarea');
      el.value = response.farewell;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

    });
  })
  }
  
  const travel = () => {
    //get the link put into the text box
    let link = document.getElementById('submitForm').value
    //split it into url and height e.g link = ['google.com', 600 ]
    link = link.split(' ')
    //currently just goes to link
    chrome.runtime.sendMessage({greeting: 'execute', source: link[0], scroll: link[1]})
    // chrome.tabs.query({active: true, currentWindow: true} , function(tabs) {
    // chrome.tabs.sendMessage(tabs[0].id, {greeting: 'execute', source: link[0], scroll: link[1]})
    // })
  }