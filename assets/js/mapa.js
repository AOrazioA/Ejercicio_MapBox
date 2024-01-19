//public token in mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYW9yYXppb2EiLCJhIjoiY2xya3d3YjZvMGVtbTJrcDlsdGI2czBzNCJ9.Uzx6TT9vrrJE3qI5bWQHlA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-74.082412,4.639386],
    zoom: 9
});