import MapView from 'esri/views/MapView';

import { MapUtil } from "./MapUtils";

export class MapViewUtil extends MapUtil {
    metodMapView() {
        new MapView({
            container: 'appDiv',
            map: this.map,
            center: [15, 45],
            zoom: 4,
            ui: {
                components: []
            }
        });
    }
}