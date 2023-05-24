window.onload = () => {
  // const button = document.querySelector('button[data-action="change"]');
  // button.innerText = '﹖';

  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      text: "RedBox was clicked",
      location: {
        lat: "49.2126165925665",
        lng: "9.243124311009371",
      },
      color: "red",
      scale: "20 20 20",
      position: "0 30 0",
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement("a-box");
    model.setAttribute(
      "gps-new-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("color", place.color);
    model.setAttribute("scale", place.scale);
    model.setAttribute("position", place.position);
    model.setAttribute("clicker", true);

    // model.addEventListener("click", function () {
    //   const div = document.querySelector(".instructions");
    //   div.innerText = place.text;
    // });

    scene.appendChild(model);
  });
}

import "https://aframe.io/releases/1.3.0/aframe.min.js";
import "https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-threex-location-only.js";
import "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js";

AFRAME.registerComponent("clicker", {
  init: function () {
    this.el.addEventListener("click", (e) => {
      alert("Box clicked!");
      const div = document.querySelector(".instructions");
      div.innerText = "Box clicked!";
    });
  },
});
