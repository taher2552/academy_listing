
// sscroll to top js

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// scroll to top js ends

// progress js

const mobile_academy_progressDone = document.querySelectorAll(
  ".mobile_academy_progress_done"
);

mobile_academy_progressDone.forEach((mobile_academy_progress) => {
  mobile_academy_progress.style.width =
    mobile_academy_progress.getAttribute("data-done") + "%";
});

// progress js ends

// caraousel js on home page

// document.addEventListener("DOMContentLoaded", function () {
//   var currentIndex = 0;
//   var items = document.querySelectorAll(".carousel-item");
//   var dots = document.querySelectorAll(".dot");
//   var touchStartX = 0;
//   var touchEndX = 0;

//   function showItem(index) {
//     items.forEach(function (item) {
//       item.style.display = "none";
//     });
//     dots.forEach(function (dot) {
//       dot.classList.remove("active");
//     });
//     items[index].style.display = "block";
//     dots[index].classList.add("active");
//   }

//   function nextItem() {
//     currentIndex = (currentIndex + 1) % items.length;
//     showItem(currentIndex);
//   }

//   function prevItem() {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//     showItem(currentIndex);
//   }

//   function handleTouchStart(event) {
//     touchStartX = event.touches[0].clientX;
//   }

//   function handleTouchMove(event) {
//     touchEndX = event.touches[0].clientX;
//   }

//   function handleTouchEnd() {
//     var deltaX = touchEndX - touchStartX;
//     if (deltaX > 50) {
//       prevItem();
//     } else if (deltaX < -50) {
//       nextItem();
//     }
//   }

//   dots.forEach(function (dot, index) {
//     dot.addEventListener("click", function () {
//       currentIndex = index;
//       showItem(currentIndex);
//     });
//   });

//   document.addEventListener("touchstart", handleTouchStart, false);
//   document.addEventListener("touchmove", handleTouchMove, false);
//   document.addEventListener("touchend", handleTouchEnd, false);

//   setInterval(nextItem, 5000);
// });

// caraousel js home page ends

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


//tabs click js

window.onload = function () {
  profileTabClick();
  profilePhotoClick();
  photoTabPhotoClick();
};

function profileTabClick() {
  var fee = document.querySelector("#fee-tab");
  var profile = document.querySelector(".mob_academy_box_wrapper");
  var training = document.querySelector("#training-tab");
  var photo = document.querySelector("#photo-tab");

  fee.style.opacity = "0";
  profile.style.opacity = "1";
  training.style.opacity = "0";
  photo.style.opacity = "0";

  setTimeout(function () {
    fee.style.display = "none";
    profile.style.display = "block";
    training.style.display = "none";
    photo.style.display = "none";
  }, 500);
}

function feeTabClick() {
  var profile = document.querySelector(".mob_academy_box_wrapper");
  var fee = document.querySelector("#fee-tab");
  var training = document.querySelector("#training-tab");
  var photo = document.querySelector("#photo-tab");

  profile.style.opacity = "0";
  training.style.opacity = "0";
  fee.style.opacity = "1";
  photo.style.opacity = "10";

  setTimeout(function () {
    profile.style.display = "none";
    training.style.display = "none";
    photo.style.display = "none";
    fee.style.display = "block";
  }, 500);
}

function trainingTabClick() {
  var training = document.querySelector("#training-tab");
  var profile = document.querySelector(".mob_academy_box_wrapper");
  var fee = document.querySelector("#fee-tab");
  var photo = document.querySelector("#photo-tab");

  training.style.opacity = "1";
  profile.style.opacity = "0";
  fee.style.opacity = "0";
  photo.style.opacity = "0";

  setTimeout(function () {
    training.style.display = "block";
    profile.style.display = "none";
    fee.style.display = "none";
    photo.style.display = "none";
  }, 500);
}

function photoTabClick() {
  var training = document.querySelector("#training-tab");
  var profile = document.querySelector(".mob_academy_box_wrapper");
  var fee = document.querySelector("#fee-tab");
  var photo = document.querySelector("#photo-tab");

  training.style.opacity = "0";
  profile.style.opacity = "0";
  fee.style.opacity = "0";
  photo.style.opacity = "1";

  setTimeout(function () {
    training.style.display = "none";
    profile.style.display = "none";
    fee.style.display = "none";
    photo.style.display = "block";
  }, 500);
}

//tabs click js ends

//message button click academy page

var modal2 = document.querySelector(".message-modal");
var triggers2 = document.querySelectorAll(".trigger-msg");
var closeButton2 = document.querySelector(".close-button-2");

function toggleModal2() {
  modal2.classList.toggle("show-modal");

  if (modal2.classList.contains("show-modal")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function windowOnClick2(event) {
  if (event.target === modal2) {
    toggleModal2();
  }
}

for (var i = 0, len = triggers2.length; i < len; i++) {
  triggers2[i].addEventListener("click", toggleModal2);
}
closeButton2.addEventListener("click", toggleModal2);

window.addEventListener("click", windowOnClick2);

//message button click academy page ends

//message button click academy page

var modal3 = document.querySelector(".review-modal");
var triggers3 = document.querySelectorAll(".trigger-review");
var closeButton3 = document.querySelector(".close-button-3");

function toggleModal3() {
  modal3.classList.toggle("show-modal");

  if (modal3.classList.contains("show-modal")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function windowOnClick3(event) {
  if (event.target === modal3) {
    toggleModal3();
  }
}

for (var i = 0, len = triggers3.length; i < len; i++) {
  triggers3[i].addEventListener("click", toggleModal3);
}
closeButton3.addEventListener("click", toggleModal3);

window.addEventListener("click", windowOnClick3);

//review academy page ends

// academy banner slider js

document.addEventListener("DOMContentLoaded", function () {
  const imageSlider = document.querySelector(".image_slider");
  const leftArrow = document.querySelector(".left_arrow");
  const rightArrow = document.querySelector(".right_arrow");
  let currentImageIndex = 0;

  function showImage(index) {
    const images = imageSlider.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    images[index].style.display = "block";
  }

  leftArrow.addEventListener("click", function () {
    currentImageIndex =
      (currentImageIndex - 1 + imageSlider.children.length) %
      imageSlider.children.length;
    showImage(currentImageIndex);
  });

  rightArrow.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % imageSlider.children.length;
    showImage(currentImageIndex);
  });

  // Show the initial image
  showImage(currentImageIndex);
});

// academy banner slider js ends

//profile images tab js

function profilePhotoClick() {
  var photo = document.querySelector("#profile_photo_div");
  var video = document.querySelector("#profile_video_div");
  var training = document.querySelector("#profile_training_div");
  var tournament = document.querySelector("#profile_tournament_div");

  video.style.opacity = "0";
  tournament.style.opacity = "0";
  training.style.opacity = "0";
  photo.style.opacity = "1";

  setTimeout(function () {
    video.style.display = "none";
    tournament.style.display = "none";
    training.style.display = "none";
    photo.style.display = "block";
  }, 500);
}

function profileVideoClick() {
  var photo = document.querySelector("#profile_photo_div");
  var video = document.querySelector("#profile_video_div");
  var training = document.querySelector("#profile_training_div");
  var tournament = document.querySelector("#profile_tournament_div");

  video.style.opacity = "1";
  tournament.style.opacity = "0";
  training.style.opacity = "0";
  photo.style.opacity = "0";

  setTimeout(function () {
    video.style.display = "block";
    tournament.style.display = "none";
    training.style.display = "none";
    photo.style.display = "none";
  }, 500);
}

function profileTrainingClick() {
  var photo = document.querySelector("#profile_photo_div");
  var video = document.querySelector("#profile_video_div");
  var training = document.querySelector("#profile_training_div");
  var tournament = document.querySelector("#profile_tournament_div");

  video.style.opacity = "0";
  tournament.style.opacity = "0";
  training.style.opacity = "1";
  photo.style.opacity = "0";

  setTimeout(function () {
    video.style.display = "none";
    tournament.style.display = "none";
    training.style.display = "block";
    photo.style.display = "none";
  }, 500);
}

function profileTournamentClick() {
  var photo = document.querySelector("#profile_photo_div");
  var video = document.querySelector("#profile_video_div");
  var training = document.querySelector("#profile_training_div");
  var tournament = document.querySelector("#profile_tournament_div");

  video.style.opacity = "0";
  tournament.style.opacity = "1";
  training.style.opacity = "0";
  photo.style.opacity = "1";

  setTimeout(function () {
    video.style.display = "none";
    tournament.style.display = "block";
    training.style.display = "none";
    photo.style.display = "none";
  }, 500);
}
//profile images tab js ends

// photos tab images tab click js

function photoTabPhotoClick() {
  var photo = document.querySelector("#photo_photo_div");
  var video = document.querySelector("#photo_video_div");
  var training = document.querySelector("#photo_training_div");
  var tournament = document.querySelector("#photo_tournament_div");

  video.style.opacity = "0";
  tournament.style.opacity = "0";
  training.style.opacity = "0";
  photo.style.opacity = "1";

  setTimeout(function () {
    video.style.display = "none";
    tournament.style.display = "none";
    training.style.display = "none";
    photo.style.display = "block";
  }, 500);
}

function photoTabVideoClick() {
  var photo = document.querySelector("#photo_photo_div");
  var video = document.querySelector("#photo_video_div");
  var training = document.querySelector("#photo_training_div");
  var tournament = document.querySelector("#photo_tournament_div");

  video.style.opacity = "1";
  tournament.style.opacity = "0";
  training.style.opacity = "0";
  photo.style.opacity = "0";

  setTimeout(function () {
    video.style.display = "block";
    tournament.style.display = "none";
    training.style.display = "none";
    photo.style.display = "none";
  }, 500);
}

function photoTabTrainingClick() {
  var photo = document.querySelector("#photo_photo_div");
  var video = document.querySelector("#photo_video_div");
  var training = document.querySelector("#photo_training_div");
  var tournament = document.querySelector("#photo_tournament_div");

  video.style.opacity = "0";
  tournament.style.opacity = "0";
  training.style.opacity = "1";
  photo.style.opacity = "0";

  setTimeout(function () {
    video.style.display = "none";
    tournament.style.display = "none";
    training.style.display = "block";
    photo.style.display = "none";
  }, 500);
}

function photoTabTournamentClick() {
  var photo = document.querySelector("#photo_photo_div");
  var video = document.querySelector("#photo_video_div");
  var training = document.querySelector("#photo_training_div");
  var tournament = document.querySelector("#photo_tournament_div");

  video.style.opacity = "0";
  tournament.style.opacity = "1";
  training.style.opacity = "0";
  photo.style.opacity = "1";

  setTimeout(function () {
    video.style.display = "none";
    tournament.style.display = "block";
    training.style.display = "none";
    photo.style.display = "none";
  }, 500);
}

// photos tab images tab click js ends



// hamberger click js

function Nav() {
  var body = document.querySelector("body");
  body.classList.toggle("menu-open");

  var width = document.getElementById("mySidenav").style.width;
  if (width === "0px" || width == "") {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "0px";
  }
}

// hamberger click js ends

//select your city click js

function selectCity() {
  const selectCity = document.querySelector(".menu_content");
  const cityPage = document.querySelector(".city_page");

  // Get the computed style of selectCity
  const selectCityDisplay = window
    .getComputedStyle(selectCity)
    .getPropertyValue("display");

  if (selectCityDisplay === "block") {
    selectCity.style.display = "none";
    cityPage.style.display = "block";
  } else {
    selectCity.style.display = "block";
    cityPage.style.display = "none";
  }
}

//select your city click js ends

//search side box js

function searchIconClick() {
  var body = document.querySelector("body");
  document.querySelector(".search_side_input").value='';
  document.querySelector(".popular_search_section").style.display="block";
  document.querySelector(".search_result_section").style.display="none";


  body.classList.toggle("menu-open");

  var width = document.getElementById("search-sidebox").style.width;
  if (width === "0px" || width == "") {
    document.getElementById("search-sidebox").style.width = "100%";
  } else {
    document.getElementById("search-sidebox").style.width = "0px";
  }
}

//search side box js ends

///search input type start js

function handleInput() {
  // Get the value from the input field
  const input = document.querySelector(".search_side_input");
  const popularSearch = document.querySelector(".popular_search_section");
  const searchResults = document.querySelector(".search_result_section");
  const inputValue = input.value.trim();

  if (inputValue !== "") {
    // Trigger an alert message when something is typed
    popularSearch.style.display = "none";
    searchResults.style.display = "block"
  }else{
    popularSearch.style.display = "block";
    searchResults.style.display = "none";
  }
}

///search input type start js ends


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



// Custom Modal JS Start

var modal = document.querySelector(".social-modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");

  if (modal.classList.contains("show-modal")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Custom Modal JS End
