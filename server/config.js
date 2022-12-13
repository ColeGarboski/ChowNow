const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "root",
      password: "Slatty!1337", //Remove Password before committing
      database: "chownow",
    },
    listPerPage: 10,
  };
  module.exports = config;