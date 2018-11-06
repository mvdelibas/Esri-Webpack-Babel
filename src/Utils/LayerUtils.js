import TileLayer from "esri/layers/TileLayer";
import MapImageLayer from "esri/layers/MapImageLayer";

export class LayerUtils {
    constructor() {
    }

    metodMapImageLayer() {
        const mapImageLayer = new MapImageLayer({
            url: // ...
        });

        return mapImageLayer;
    }
    metodTileLayer() {
        const tileLayer = new TileLayer({
            url: // ...
        });

        return tileLayer;
    }
}

