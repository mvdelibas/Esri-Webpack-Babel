import QueryTask from "esri/tasks/QueryTask";

import { QueryUtils } from "./QueryUtils";

export class QueryTaskUtils {
    constructor() { }

    methodQueryTask(returnGeometry, outFields, where) {
        const query = new QueryUtils().methodQuery(returnGeometry, outFields, where);

        const queryTask = new QueryTask({
            url: // ...
        });
        queryTask.execute(query).then(reults => {
            this.metodResult(reults);
        }).catch(err => {
            this.metodFailed(err);
        });
    }

    metodResult(results) {
        const features = results.features.map(res => {
            console.log(res.attributes)
            console.log(res.geometry.type)
            if (res.geometry.type === "point") {
                console.log(res.geometry.x)
                console.log(res.geometry.y)
            }

        })

    }
    metodFailed(err) {
        console.log(err);
    }

}