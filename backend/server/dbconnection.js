const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'dharshini',
  password: 'carat@123',
  database: 'restrauntfinder'
});
connection.connect();

async function dbstore(params)
{
  let promise = new Promise((res,rej) => {connection.query(`select city_name,hotel_name,hotel_address,cuisine,menu.item_dtls from hotel_information join city_hotel_mapping on hotel_information.hotel_id = city_hotel_mapping.hotel_id join menu_catalogue menu on menu.menu_id = hotel_information.menu_id where city_name = "${params}"`, function (error, results, fields) {
    if (error) throw error;
    res(results)
  });
})
return await promise
}

async function dbcreate(params)
{
  let creation = new Promise((res,rej) => {connection.query(`insert into city_hotel_mapping (city_name) values("${params['location']}")`,function (error, results, fields) {
    if (error) throw error;
  
    connection.query(`insert into hotel_information(hotel_name,hotel_address,menu_id,cuisine,hotel_id) values("${params['hotel_name']}","${params['address']}",${params['dish']},"${params['Cuisine']}",${results.insertId})`, function (error, results, fields) {
      if (error) throw error;
      res(200)
    });
  });
})
return await creation;
}

async function getMenuDetails()
{
  let promise = new Promise((res,rej) => {connection.query(`select menu_id,item_dtls from menu_catalogue`, function (error, results, fields) {
    if (error) throw error;
    res(results);
  });
  })
return await promise
}

module.exports = {dbstore,dbcreate,getMenuDetails}