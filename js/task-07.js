const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.oninput = function() {
  text.style.fontSize = fontSizeControl.value + "px";
};