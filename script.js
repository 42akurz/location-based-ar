window.onload = () => {
  // const button = document.querySelector('button[data-action="change"]');
  // button.innerText = '﹖';

  let places = staticLoadPlaces();
  renderPlaces(places);

  document.getElementById("test-button").addEventListener("click", () => {
    const div = document.querySelector(".instructions");
    div.innerText = "Button got clicked";
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

    // model.addEventListener("click", function () {
    //   const div = document.querySelector(".instructions");
    //   div.innerText = place.text;
    // });

    scene.appendChild(model);
  });
}
