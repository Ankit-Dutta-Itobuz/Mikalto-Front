let res;

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

async function getData() {
  res = await fetch(`http://localhost:8000`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      alert(err);
    });
  if (!res.error) {
    console.log(res);
  } else {
    console(res.error.message);
  }
  document.getElementById(
    "landingBg"
  ).style.backgroundImage = `url(${res.landingSec.image})`;
  document.getElementById("landingSubText").innerHTML =
    res.landingSec.landingText;
  document.getElementById("priceDataStandard").innerHTML =
    res.carouselSec.carousel1.text;
  document.getElementById(
    "imgStandard"
  ).style.backgroundImage = `url(${res.carouselSec.carousel1.image})`;
  document.getElementById("priceDataConference").innerHTML =
    res.carouselSec.carousel2.text;
  document.getElementById(
    "imgConference"
  ).style.backgroundImage = `url(${res.carouselSec.carousel2.image})`;
  document.getElementById("priceDataPremium").innerHTML =
    res.carouselSec.carousel3.text;
  document.getElementById(
    "imgPremium"
  ).style.backgroundImage = `url(${res.carouselSec.carousel3.image})`;
}
getData();
function formHandle(event) {
  event.preventDefault();
  let formData = {
    checkInDate: document.getElementById("checkIn").value,
    checkOutDate: document.getElementById("checkOut").value,
    adultNum: document.getElementById("adult").value,
    childrenNum: document.getElementById("children").value,
  };
  console.log(formData);
}
