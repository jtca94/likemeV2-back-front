import pkg from "pg";

const {Pool} = pkg;

const pool = new Pool({
  allowExitOnIdle: true,
});
// export pool for use in other modules and check connection to database in index.js
export {pool};

