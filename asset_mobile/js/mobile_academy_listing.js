// slider range js

function getVals() {
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    let tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  let displayElement = parent.getElementsByClassName("rangeValues-1")[0];
  let displayElement2 = parent.getElementsByClassName("rangeValues-2")[0];
  displayElement.innerHTML = "₹" + slide1;
  displayElement2.innerHTML = "₹" + slide2;
}

window.onload = function () {
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName(
    "mob_filter_range_slider"
  );
  for (let x = 0; x < sliderSections.length; x++) {
    let sliders = sliderSections[x].getElementsByTagName("input");
    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};

// slider range js ends

// academy listing filter click

function filterClick() {
  var width = document.getElementById("filter_div").style.width;
  if (width === "0px" || width == "") {
    document.getElementById("filter_div").style.width = "100%";
    document.getElementById("filter_div").style.opacity = "1";
  } else {
    document.getElementById("filter_div").style.width = "0px";
    document.getElementById("filter_div").style.opacity = "0";
  }
}

// academy listing filter click ends
