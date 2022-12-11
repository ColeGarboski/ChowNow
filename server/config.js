const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "root",
      password: "", //Remove Password before committing
      database: "chownow",
    },
    listPerPage: 10,
  };
  module.exports = config;