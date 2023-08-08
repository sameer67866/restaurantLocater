let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude},
    zoom: 11.56,
  });
}

 initMap();




// let map;
// let markers = [];
// let restaurantData = []; // Store restaurant data here

// async function initMap() {
//   const { Map, places } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: latitude, lng: longitude },
//     zoom: 11.56,
//   });

//   const service = new places.PlacesService(map);

//   const request = {
//     location: new google.maps.LatLng(latitude, longitude),
//     radius: 10000, // Search radius in meters (adjust as needed)
//     type: "restaurant",
//   };

//   service.nearbySearch(request, (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       // Loop through each nearby restaurant and add a marker with infowindow
//       results.forEach(place => {
//         // Filter restaurants based on types (e.g., "restaurant" type)
//         if (place.types.includes("restaurant")) {
//           // Customize the marker icon to increase its size
//           const marker = new google.maps.Marker({
//             position: place.geometry.location,
//             map: map,
//             title: place.name,
//             icon: {
//               url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Customize the icon URL
//               scaledSize: new google.maps.Size(40, 40), // Increase the marker size
//             },
//           });

//           markers.push(marker);

//           // Store restaurant data
//           const restaurantInfo = {
//             name: place.name,
//             address: place.vicinity,
//             rating: place.rating,
//             // Add other relevant information
//           };

//           restaurantData.push(restaurantInfo);

//           // Create and attach an infowindow to the marker
//           const infowindow = new google.maps.InfoWindow({
//             content: `
//               <div>
//                 <h3>${restaurantInfo.name}</h3>
//                 <p>Address: ${restaurantInfo.address}</p>
//                 <p>Rating: ${restaurantInfo.rating}</p>
//                 <!-- Add more information here -->
//               </div>
//             `,
//           });

//           marker.addListener("click", () => {
//             infowindow.open(map, marker);
//           });
//         }
//       });
//     }
//   });
// }



//initMap();
//  console.log(restaurantData)
//  console.log(markers)




// let map;
// let markers = [];
// let restaurantData = []; // Store restaurant data here

// async function initMap() {
//   // Check if the Google Maps API has been imported and initialized
//   const { Map, places, LatLng } = await google.maps.importLibrary("maps");

//   // Get the user's current location (latitude and longitude)
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//       async position => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         // Create a new LatLng object
//         const centerLatLng = new LatLng(latitude, longitude);

//         map = new Map(document.getElementById("map"), {
//           center: centerLatLng,
//           zoom: 11.56,
//         });

//         const service = new places.PlacesService(map);

//         const request = {
//           location: centerLatLng,
//           radius: 10000000000,
//           type: "restaurant",
//         };

//         service.nearbySearch(request, (results, status) => {
//           if (status === google.maps.places.PlacesServiceStatus.OK) {
//             results.forEach(place => {
//               if (place.types.includes("restaurant")) {
//                 const marker = new google.maps.Marker({
//                   position: place.geometry.location,
//                   map: map,
//                   title: place.name,
//                 //   icon: {
//                 //     url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                 //     scaledSize: new google.maps.Size(40, 40),
//                 //   },
//                  });

//                 markers.push(marker);

//                 const restaurantInfo = {
//                   name: place.name,
//                   address: place.vicinity,
//                   rating: place.rating,
//                   // Add other relevant information
//                 };

//                 restaurantData.push(restaurantInfo);

//                 const infowindow = new google.maps.InfoWindow({
//                   content: `
//                     <div>
//                       <h3>${restaurantInfo.name}</h3>
//                       <p>Address: ${restaurantInfo.address}</p>
//                       <p>Rating: ${restaurantInfo.rating}</p>
//                       <!-- Add more information here -->
//                     </div>
//                   `,
//                 });

//                 marker.addListener("click", () => {
//                   infowindow.open(map, marker);
//                 });
//               }
//             });
//           }
//         });
//       },
//       error => {
//         console.error("Error getting user's location:", error);
//       }
//     );
//   } else {
//     console.error("Geolocation is not available.");
//   }
// }

// // Call the initMap function once the Google Maps API is loaded
// google.maps.onload = initMap();
