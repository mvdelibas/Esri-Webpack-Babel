import MapView from 'esri/views/MapView';

import { MapUtil } from "./MapUtils";

import { QueryTaskUtils } from "../Utils/QueryTaskUtils";

export class MapViewUtil extends MapUtil {
    constructor() {
        super();
    }
    metodMapView() { 
        const map = super.methodMap();
        new MapView({
            container: 'appDiv',
            map: map,
            center: [15, 45],
            zoom: 4,
            ui: {
                components: []
            }
        });
    }

    metodSorgu() {
        const sorgu = new QueryTaskUtils().methodQueryTask(true, "*", "1=1")
        return sorgu;
    }
}