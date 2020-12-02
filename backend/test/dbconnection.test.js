const dbdetails = require('../server/dbconnection')
const mysql = require('mysql');

describe('fetch restraunts', () => {
  it('fetch details fom db when params are valid', async () => {
    const result = dbdetails.dbstore('chennai');
    expect(result).not.toBe([])
  });
  it('do not fetch details fom db when params are not valid', async () => {
    dbdetails.dbstore('kolkata').then((invalidresult)=>{expect(invalidresult).toBe([])});
  });
});

describe('insert details', () => {
  it('insertion when params are vaild', async () => {
    params = 
  { 
    hotel_name: 'Punjabhi wala',
    location: 'Bangalore',
    Cuisine: 'North Indian',
    dish: '13',
    address: 'Phoenix Mall'
  }
  
    dbdetails.dbcreate(params).then((create_res)=>{expect(create_res).toBe(200);});
    
  });
  it('do not insert when params are not valid', async () => {
    params = {}
    
    expect(dbdetails.dbcreate(params)).rejects.toThrow();
  });
});
describe('fetch menu details', () => {
  it('fetch menu details from db', async () => {
    dbdetails.getMenuDetails().then((menu_details)=>{expect(menu_details).not.toBe([])});
    
  });
});

// describe('fetch restraunts', () => {
//   it('fetch details fom db when params are valid', async () => {
//     const result = dbdetails.dbstore('chennai');
//     expect(result).not.toBe({})
//   });
//   it('fetch details fom db when params are not valid', async () => {
//     const invalidresult = dbdetails.dbstore('kolkata');
//     expect(invalidresult).toBe(undefined)
//   });
// });