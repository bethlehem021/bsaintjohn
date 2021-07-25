const originalColor = "#f0bd97";
const darkModeColor = "black";

function bstjohnDarkMode() {
  var bodyElement = document.getElementById("officialBackground")
  var figcaption = document.getElementById("subheader")
  if (bodyElement.style.background == darkModeColor) {
    bodyElement.style.background = originalColor;
  } else {
    bodyElement.style.background = darkModeColor;
    bodyElement.style.color = "white";
    figcaption.style.color = "white";
  }
}
