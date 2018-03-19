"use strict";
(function() {
  var styles = [
    'green-white',
    'grey-white',
    'indigo-white',
    'red-white',
    'white-blue',
    'white-grey',
    'white-indigo',
    'white-red',
    'yellow-black'
  ];
  var themeIndex = Math.floor(Math.random() * 9);
  addCss('css/themes/' + styles[themeIndex] + '.css');
  function addCss(fileName) {
    console.log(fileName);

    var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;
  
    head.appendChild(link);
  }
})();