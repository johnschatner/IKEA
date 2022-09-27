var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = null;
      panel.style.opacity = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 30 + "px";
      panel.style.paddingBottom = 30 + "px";
      panel.style.opacity = 1;
    }
  });
}
