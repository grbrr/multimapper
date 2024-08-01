function loadGoogleMapsApi() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGoogleMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

function initGoogleMap() {
    new google.maps.Map(document.getElementById('googleMap'), {
        center: { lat: 51.107883, lng: 17.038538 },
        zoom: 16
    });
}

function initLeafletMap() {
    const mapyMap = L.map('mapyMap').setView([51.107883, 17.038538], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapyMap);
}

loadGoogleMapsApi();
initLeafletMap();