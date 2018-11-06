import Map from 'esri/Map';
import TileLayer from "esri/layers/TileLayer";

import { LayerUtils } from "./LayerUtils";

export class MapUtil extends LayerUtils {
    constructor () {
        super();
    } 

    methodMap() {
       const tileLayer = super.metodTileLayer();
       const mapImageLayer = super.metodMapImageLayer();

       const map = new Map({
           layers: [tileLayer, mapImageLayer]
       });

       return map;
    }
    

} 