window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);

  document.getElementById("button-1").addEventListener("click", () => {
    const div = document.querySelector(".instructions");
    if (div.style.visibility === "visible") {
      div.style.visibility = "hidden";
    } else {
      div.innerText = "Button 1 got clicked";
      div.style.visibility = "visible";
    }
  });
  document.getElementById("button-2").addEventListener("click", () => {
    const div = document.querySelector(".instructions");
    if (div.style.visibility === "visible") {
      div.style.visibility = "hidden";
    } else {
      div.innerText = "Button 2 got clicked";
      div.style.visibility = "visible";
    }
  });
  document.getElementById("button-3").addEventListener("click", () => {
    const div = document.querySelector(".instructions");
    if (div.style.visibility === "visible") {
      div.style.visibility = "hidden";
    } else {
      div.innerText = "Button 3 got clicked";
      div.style.visibility = "visible";
    }
  });
  document.getElementById("test-box").addEventListener("click", () => {
    const div = document.querySelector(".instructions");
    div.innerText = "Yellow box got clicked";
  });
};

function staticLoadPlaces() {
  return [
    {
      text: "RedBox was clicked",
      location: {
        lat: "49.2036165925665",
        lng: "9.244124311009371",
      },
      color: "red",
      scale: "20 20 20",
      position: "0 10 0",
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

    scene.appendChild(model);
  });
}
