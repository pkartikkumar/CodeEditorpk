

const htmlEditor = CodeMirror(document.querySelector(".code-editor .editor .html-code"), {
  lineNumbers: true,
  
  tabSize: 4,
  mode: "xml",
  autoCloseBrackets: true
});
const cssEditor = CodeMirror(document.querySelector(".code-editor .editor .css-code"), {
  lineNumbers: true,

  tabSize: 4,
  mode: "css",
  autoCloseBrackets: true

});
const jsEditor = CodeMirror(document.querySelector(".code-editor .editor .js-code"), {
  lineNumbers: true,
  
  tabSize: 4,
  mode: "javascript",
  autoCloseBrackets: true
});
          
document.querySelector("#run-button").addEventListener("click", function() {
  let htmlCode = htmlEditor.getValue();
  let cssCode = "<style>" + cssEditor.getValue() + "</style>";
  let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
  let previewWindow = document.querySelector("#show-code").contentWindow.document;
  previewWindow.open();
  previewWindow.write(htmlCode + cssCode + jsCode);
  previewWindow.close();
});


//  full screen mode
const fullscreenBtn = document.getElementById('fullscreen-btn');
const outputSection = document.getElementById('show-code');

fullscreenBtn.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    outputSection.requestFullscreen();
  }
});


// share
const shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", function() {
  const htmlCode = htmlEditor.getValue();
  const cssCode = cssEditor.getValue();
  const jsCode = jsEditor.getValue();

  const sharedUrl = `https://example.com/?html=${encodeURIComponent(htmlCode)}&css=${encodeURIComponent(cssCode)}&js=${encodeURIComponent(jsCode)}`;
  window.prompt("Copy this URL to share:", sharedUrl);
});
















// preview the code in all resolution
const desktopBtn = document.getElementById("desktop-btn");
const tabletBtn = document.getElementById("tablet-btn");
const mobileBtn = document.getElementById("mobile-btn");
const outputFrame = document.getElementById("show-code");

desktopBtn.addEventListener("click", function() {
  outputFrame.style.width = "100%";
  outputFrame.style.height = "100%";
});

tabletBtn.addEventListener("click", function() {
  outputFrame.style.width = "768px";
  outputFrame.style.height = "1024px";
});

mobileBtn.addEventListener("click", function() {
  outputFrame.style.width = "375px";
  outputFrame.style.height = "667px";
});










//                 theme selector









//                           copy and clear
const copyButtons = document.querySelectorAll('#copy');
const clearButtons = document.querySelectorAll('#clear');

copyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const code = button.parentNode.parentNode.querySelector('.CodeMirror-code');
    const codeText = code.innerText;
    navigator.clipboard.writeText(codeText);
    alert('Code copied to clipboard!');
  });
});

clearButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const editor = button.parentNode.parentNode.parentNode.querySelector('.CodeMirror').CodeMirror;
    editor.setValue('');
  });
});




// Get the clear buttons for each code editor
const clearHtmlBtn = document.getElementById('clear-html');
const clearCssBtn = document.getElementById('clear-css');
const clearJsBtn = document.getElementById('clear-js');

// Add click event listener to each clear button
clearHtmlBtn.addEventListener('click', function() {
  // Get the HTML code editor
  const htmlCodeEditor = document.querySelector('.html-code .CodeMirror').CodeMirror;

  // Set the value of the HTML code editor to an empty string
  htmlCodeEditor.setValue('');
});

clearCssBtn.addEventListener('click', function() {
  // Get the CSS code editor
  const cssCodeEditor = document.querySelector('.css-code .CodeMirror').CodeMirror;

  // Set the value of the CSS code editor to an empty string
  cssCodeEditor.setValue('');
});

clearJsBtn.addEventListener('click', function() {
  // Get the JS code editor
  const jsCodeEditor = document.querySelector('.js-code .CodeMirror').CodeMirror;

  // Set the value of the JS code editor to an empty string
  jsCodeEditor.setValue('');
});















//            changing color of p

const code = document.querySelectorAll('.code');

function changeColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  for (let i = 0; i < code.length; i++) {
    code[i].style.backgroundColor = randomColor;
  }
}

function changeFontFamily() {
  const fonts = ['Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Calibri'];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  for (let i = 0; i < code.length; i++) {
    code[i].style.fontFamily = randomFont;
  }
}

document.getElementById('change-color-btn').addEventListener('click', function() {
  changeColor();
  changeFontFamily();
});



