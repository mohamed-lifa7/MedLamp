let toggleBtn = document.getElementById('toggle');
let toggleBtnSpan = document.getElementById('span');
let light = document.getElementById('light');

toggleBtn.onclick = function display() {
    if (toggleBtnSpan.style.marginLeft == '24px') {
        toggleBtnSpan.style.background = 'var(--main-color)';
        toggleBtnSpan.style.marginLeft = '0';
        light.style.opacity = 1;
    } else {
        toggleBtnSpan.style.marginLeft = '24px';
        toggleBtnSpan.style.background = 'var(--black)';
        light.style.opacity = 0;
    }
}
function transform(x) {
    x.classList.toggle("change");
}
function displayLinks() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    // Add an event listener to the window object
  //  window.addEventListener("click", function (event) {
        // Check if the clicked element is inside the myLinks element
    //    if (!event.target.matches("#myLinks *")) {
            // If not, hide the myLinks element
      //      x.style.display = "none";
        //}
    //});
}
