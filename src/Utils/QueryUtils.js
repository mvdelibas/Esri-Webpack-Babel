  import Query from "esri/tasks/support/Query";

  export class QueryUtils {
      constructor() {}

      methodQuery(returnGeometry, outFields, where) {
        const query = new Query();

        query.returnGeometry = returnGeometry;
        query.outFields = [outFields];
        query.where = where; 

        return query;
      }

  }