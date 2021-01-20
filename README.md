# pg-Data-Source

for apollo-server, combine [node-postgres](https://github.com/brianc/node-postgres) with logical of [SQLDataSource](https://github.com/cvburgess/SQLDataSource)


## Getting Started

### Installation

To install: `npm i pg-datasource`

### Usage

```js
// pgDB.js

const { PgDataSource } = require('pg-datasource')

class PgDB extends PgDataSource {
  async helloWorld() {
    return await this.db.query('SELECT NOW() as now')
  }
}

module.exports = PgDB;
```

And use it in your Apollo server configuration:

```js
// index.js

const PgDB = require("./PgDB");
const db = new PgDB(pgConnection);
// you can pass a Postgres.js instance or other db instance instead of a configuration object

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache,
  context,
  dataSources: () => ({ db })
});
```
