module.exports = (db) => {
  const getuserByEmail = (email) => {
    const query = {
      text: `SELECT  email, password FROM users WHERE email = $1`,
      values: [email]
    }
    return db
    .query(query)
    .then((result) =>result.rows[0])
     .catch((err) => err)
  }




  // const ifEmailExist = (email) => {
  //   const query = {
  //     text : `SELECT email FROM users 
  //             WHERE email = $1`,
  //     values : [email]
  //   }
  //   return db
  //   .query(query)
  //   .then((result) => {
  //     if (!result.rows.length === 0) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   })
  //   .catch((err) => err);  
  // }

  // const validPassword = (email, password) => {
  //   const query = {
  //     text: `SELECT password FROM users
  //             WHERE email = $1`,
  //     values: [email]
  //   }
  //   return db
  //   .query(query)
  //   .then((res) => {

  //     if(res.rows[0].password === password) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })
  //   .catch((err) => err);
  // }

  return { getuserByEmail};
}