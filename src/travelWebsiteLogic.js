import mapboxgl from "mapbox-gl";

const mapboxAccessToken =
  "pk.eyJ1IjoiZGhydXZ2di0wNCIsImEiOiJjbHp4eHhlODEwdHBqMmlzZ3ZvZHYxa3BhIn0.sGikVHF9zf_yV4zsGZVu1Q";
mapboxgl.accessToken = mapboxAccessToken;

const weatherApiKey = "e1d3ab5bb0c4e56da12b73fc016424a0"; // Your Weather API Key

const cities = {
  Paris: {
    coords: [2.3522, 48.8566],
    bestTime: "June to August",
    images: ["paris1.jpg", "paris2.jpg"],
  },
  London: {
    coords: [-0.1278, 51.5074],
    bestTime: "March to May",
    images: ["london1.jpg", "london2.jpg"],
  },
  Mumbai: {
    coords: [72.8777, 19.076],
    bestTime: "October to February",
    images: ["mumbai1.jpeg", "mumbai2.jpeg"],
  },
  Delhi: {
    coords: [77.1025, 28.7041],
    bestTime: "October to March",
    images: ["delhi1.jpg", "delhi2.jpg"],
  },
};

// Initialize the Map
export const initializeMap = () => {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [0, 0],
    zoom: 2,
  });

  return map;
};

// Fly to City and Update Details
export const updateCityDetails = (map, cityName) => {
  const city = cities[cityName];

  // Update Map View
  map.flyTo({
    center: city.coords,
    zoom: 10,
    essential: true,
  });

  // Clear existing markers before adding a new one
  if (map.markers) {
    map.markers.forEach((marker) => marker.remove());
  }
  map.markers = []; // Initialize markers array if not already done

  // Add Marker
  const marker = new mapboxgl.Marker()
    .setLngLat(city.coords)
    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${cityName}</h3>`))
    .addTo(map);

  map.markers.push(marker); // Store the marker in the map instance

  // Update Weather and Best Time
  document.getElementById("city-name").textContent = cityName;
  document.getElementById("visit-time").textContent = city.bestTime;

  // Fetch Weather Info
  getWeather(cityName);

  // Update Slideshow
  updateSlideshow(city.images);

  // Scroll to Details Section
  document
    .getElementById("details-section")
    .scrollIntoView({ behavior: "smooth" });
};

// Fetch Weather Information
export const getWeather = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    let temp = json.main.temp;
    let tempInCelsius = temp - 273.15;
    document.getElementById(
      "weather-info"
    ).textContent = `Temperature: ${tempInCelsius.toFixed(2)}°C`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Update Slideshow
export const updateSlideshow = (images) => {
  const slideshow = document.getElementById("slideshow");
  slideshow.innerHTML = ""; // Clear existing images

  if (!images || images.length === 0) {
    const noImagesMessage = document.createElement("p");
    noImagesMessage.textContent = "No images available for this city.";
    slideshow.appendChild(noImagesMessage);
    return; // Exit if there are no images
  }

  images.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = `./images/${image}`;
    if (index === 0) imgElement.classList.add("active"); // Add 'active' class only for the first image
    slideshow.appendChild(imgElement);
  });

  let currentIndex = 0;
  setInterval(() => {
    const imgs = slideshow.querySelectorAll("img");
    if (imgs.length > 0) {
      imgs[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % imgs.length;
      imgs[currentIndex].classList.add("active");
    }
  }, 3000); // Change slide every 3 seconds
};

// Attach Click Listeners
export const attachCityListeners = (map) => {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const cityName = card.getAttribute("data-city");
      updateCityDetails(map, cityName);
    });
  });
};
