// // Note: This example requires that you consent to location sharing when
// // prompted by your browser. If you see the error "The Geolocation service
// // failed.", it means you probably did not give permission for the browser to
// // locate you.
// let map: google.maps.Map, infoWindow: google.maps.InfoWindow;

// function initMap(): void {
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 6,
//   });
//   infoWindow = new google.maps.InfoWindow();

//   const locationButton = document.createElement("button");

//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");

//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position: GeolocationPosition) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter()!);
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter()!);
//     }
//   });
// }

// function handleLocationError(
//   browserHasGeolocation: boolean,
//   infoWindow: google.maps.InfoWindow,
//   pos: google.maps.LatLng
// ) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;

// declare global {
//   interface Window {
//       latitude: string;
//       longitude: string;
//   }
// }
// document.addEventListener("DOMContentLoaded", () => {
//   const userLat = window.latitude;
//   const userLog = window.longitude;

// });
// let map: google.maps.Map;
// async function initMap(): Promise<void> {
//   const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//   map = new Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: window.latitude, lng: window.longitude },
//     zoom: 8,
//   });
// }

// initMap();
// TypeScript File: script.ts


// declare global {
//   interface Window {
//       latitude?: number;
//       longitude?: number;
//   }
// }

// let map: google.maps.Map;

// async function initMap(): Promise<void> {
//   const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//   map = new Map(document.getElementById("map") as HTMLElement, {
//       center: { lat: window.latitude || 0, lng: window.longitude || 0 },
//       zoom: 8,
//   });
// }




// TypeScript File: script.ts
// declare global {
//   interface Window {
//       latitude?: number;
//       longitude?: number;
//   }
// }

// let map: google.maps.Map;
// let markers: google.maps.Marker[] = [];

// async function initMap(): Promise<void> {
//   const { Map, places } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

//   map = new Map(document.getElementById("map") as HTMLElement, {
//       center: { lat: window.latitude || 0, lng: window.longitude || 0 },
//       zoom: 15,
//   });

//   const service = new places.PlacesService(map);

//   const request = {
//       location: new google.maps.LatLng(window.latitude, window.longitude),
//       radius: 40000, // Search radius in meters (adjust as needed)
//       type: "restaurant",
//   };

//   service.nearbySearch(request, (results, status) => {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//           // Loop through each nearby restaurant and add a marker
//           results.forEach(place => {
//               const marker = new google.maps.Marker({
//                   position: place.geometry.location,
//                   map: map,
//                   title: place.name,
//               });

//               markers.push(marker);
//           });
//       }
//   });
// }
