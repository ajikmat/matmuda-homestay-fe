<template>
    <div id="map" class="h-full w-full rounded-lg">{{ map }}</div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
    data() {
        return {
            map: null,
            marker: null,
        };
    },
    methods: {
        initializeMap() {
            const mapElement = document.getElementById('map');
            if (!mapElement) {
                console.error('Map element not found!');
                return;
            }

            const loader = new Loader({
                apiKey: 'AIzaSyCPGgQyjemckISS1zx0CgHuhFXo-GY0cCw',
                version: 'weekly',
                libraries: ['marker'],
            });

            loader
                .load()
                .then(async () => {
                    this.map = await new google.maps.Map(mapElement, {
                        center: { lat: 5.323467789044505, lng: 103.09215669598144 },
                        zoom: 15,
                    });

                    this.addMarker({ lat: 5.323467789044505, lng: 103.09215669598144 });
                })
                .catch((error) => {
                    console.error('Error loading Google Maps API:', error);
                });
        },
        addMarker(position) {
            if (!this.map) {
                console.error('Map is not initialized yet!');
                return;
            }

            this.marker = new google.maps.Marker({
                position,
                map: this.map,
            });
        },
    },
    mounted() {
        this.initializeMap();
    },
};
</script>
