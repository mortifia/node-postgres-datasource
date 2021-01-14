const { DataSource } = require("apollo-datasource");
const { InMemoryLRUCache } = require("apollo-server-caching");
const pg = require('pg');

class PgDataSource extends DataSource {
    constructor(pgConnection = null) {
        super();

        this.context;
        this.cache;
        this.pg = pg;
        this.db = new pg.Pool(pgConnection);

    }
    initialize(config) {
        this.context = config.context;
        this.cache = new InMemoryLRUCache();
    }
}

module.exports = { PgDataSource };