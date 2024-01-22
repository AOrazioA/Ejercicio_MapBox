//public token in mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYW9yYXppb2EiLCJhIjoiY2xya3d3YjZvMGVtbTJrcDlsdGI2czBzNCJ9.Uzx6TT9vrrJE3qI5bWQHlA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-70.6768446930248,-33.433592714834674],
    zoom: 9
}); 


/*mapboxgl.accessToken = 'pk.eyJ1IjoiYW9yYXppb2EiLCJhIjoiY2xya3d3YjZvMGVtbTJrcDlsdGI2czBzNCJ9.Uzx6TT9vrrJE3qI5bWQHlA';
const map = new mapboxgl.Map({
container: 'map', // container id
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [-74.5, 40], // starting position
zoom: 9 // starting zoom
});
*/

document
.getElementById('listing-group')
.addEventListener('change', function(e)
{
var handler = e.target.id;
if(e.target.checked){
	map[handler].enable();
} else {
	map[handler].disable();
}
});


map.on('mousemove', (e) => {
    document.getElementById('info').innerHTML =
    // `e.point` is the x, y coordinates of the `mousemove` event
    // relative to the top-left corner of the map.
    JSON.stringify(e.point) +
    '<br />' +
    // `e.lngLat` is the longitude, latitude geographical position of the event.
    JSON.stringify(e.lngLat.wrap());
});


map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
);



    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');
     
    for (const input of inputs) {
    input.onclick = (layer) => {
    const layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}