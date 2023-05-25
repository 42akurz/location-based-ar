window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);

  document.getElementById("button-1").addEventListener("click", () => {
    const div = document.querySelector(".instructions");
    if (div.style.visibility === "visible" && div.innerText === "Button 1 got clicked") {
      div.style.visibility = "hidden";
    } else {
      div.innerText = "Button 1 got clicked";
      div.style.visibility = "visible";
    }
  });
  document.getElementById("button-2").addEventListener("click", () => {
    const div = document.querySelector(".instructions");
    if (div.style.visibility === "visible" && div.innerText === "Button 2 got clicked") {
      div.style.visibility = "hidden";
    } else {
      div.innerText = "Button 2 got clicked";
      div.style.visibility = "visible";
    }
  });
  document.getElementById("button-3").addEventListener("click", () => {
    const div = document.querySelector(".instructions");
    if (div.style.visibility === "visible" && div.innerText === "Button 3 got clicked") {
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
        lat: "49.202426",
        lng: "9.242782",
      },
      color: "red",
      scale: "5 5 5",
      position: "0 0 0",
    },
    {
      text: "GreenBox was clicked",
      location: {
        lat: "49.202424",
        lng: "9.242737",
      },
      color: "green",
      scale: "5 5 5",
      position: "0 5 0",
    },
    {
      text: "YellowBox was clicked",
      location: {
        lat: "49.202412",
        lng: "9.242690",
      },
      color: "yellow",
      scale: "5 5 5",
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
