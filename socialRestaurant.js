let markers = [];
let nextPageToken = null;
async function initMap() {
	const { Map } = await google.maps.importLibrary("maps");
	map = new Map(document.getElementById("map"), {
		center: { lat: latitude, lng: longitude },
		zoom: 11.56,
	});

	service = new google.maps.places.PlacesService(map);
	const request = {
		location: new google.maps.LatLng(latitude, longitude),
		radius: 2000,
		type: 'restaurant'
	};

	function fetchPlaces() {
		if (nextPageToken) {
			request.pageToken = nextPageToken;
		}

		service.nearbySearch(request, (results, status, pagination) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				for (const result of results) {
					createMarker(result);
				}
				if (pagination.hasNextPage) {
					nextPageToken = pagination.nextPageToken;
					fetchPlaces();
				}
			}
		});
	}
	fetchPlaces();

	function createMarker(place) {
		const marker = new google.maps.Marker({
			position: place.geometry.location,
			map: map,
			title: place.name,
			icon: {
				url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
				scaledSize: new google.maps.Size(40, 40),
			},
		});
		markers.push(marker);
	}
}