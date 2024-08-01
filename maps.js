// Initialize Google Maps
function initGoogleMap() {
    const googleMap = new google.maps.Map(document.getElementById('googleMap'), {
        center: { lat: 51.107883, lng: 17.038538 }, // Coordinates for Wrocław
        zoom: 15
    });
}

// Load Google Maps script
function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGoogleMap`;
    script.async = true;
    document.head.appendChild(script);
}

// Initialize Mapy.cz
function initMapyMap() {
    const API_KEY = MAPYCZ_API_KEY;
    const map = L.map('mapyMap').setView([51.107883, 17.038538], 15); // Coordinates for Wrocław

    const tileLayers = {
        'Basic': L.tileLayer(`https://api.mapy.cz/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}`, {
            minZoom: 0,
            maxZoom: 19,
            attribution: '<a href="https://api.mapy.cz/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
        }),
        'Outdoor': L.tileLayer(`https://api.mapy.cz/v1/maptiles/outdoor/256/{z}/{x}/{y}?apikey=${API_KEY}`, {
            minZoom: 0,
            maxZoom: 19,
            attribution: '<a href="https://api.mapy.cz/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
        }),
        'Winter': L.tileLayer(`https://api.mapy.cz/v1/maptiles/winter/256/{z}/{x}/{y}?apikey=${API_KEY}`, {
            minZoom: 0,
            maxZoom: 19,
            attribution: '<a href="https://api.mapy.cz/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
        }),
        'Aerial': L.tileLayer(`https://api.mapy.cz/v1/maptiles/aerial/256/{z}/{x}/{y}?apikey=${API_KEY}`, {
            minZoom: 0,
            maxZoom: 19,
            attribution: '<a href="https://api.mapy.cz/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
        }),
    };

    tileLayers['Outdoor'].addTo(map);
    L.control.layers(tileLayers).addTo(map);

    const LogoControl = L.Control.extend({
        options: {
            position: 'bottomleft',
        },
        onAdd: function (map) {
            const container = L.DomUtil.create('div');
            const link = L.DomUtil.create('a', '', container);
            link.setAttribute('href', 'http://mapy.cz/');
            link.setAttribute('target', '_blank');
            link.innerHTML = '<img src="https://api.mapy.cz/img/api/logo.svg" />';
            L.DomEvent.disableClickPropagation(link);
            return container;
        },
    });

    new LogoControl().addTo(map);
}

// Load Mapy.cz script
function loadMapyScript() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.2/dist/leaflet.js';
    script.onload = initMapyMap;
    document.head.appendChild(script);
}

// Initialize both maps
function initMaps() {
    loadGoogleMapsScript();
    loadMapyScript();
}

// Call initMaps when the window loads
window.onload = initMaps;