const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `Select * from Restaurant inner join r_location on restaurant.R_ID = R_location.R_ID inner join menu on r_location.rl_id = menu.rl_id inner join fooditem on menu.f_id = fooditem.f_id `
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}