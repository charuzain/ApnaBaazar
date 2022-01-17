module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: 'SELECT * FROM users',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT id,email, password FROM users WHERE email = $1`,
      values: [email]
    }
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err)
  }
  const getAllProducts = () => {
    const query = `SELECT * FROM products`;
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getSingleProduct = (id) => {
    const query = {
      text: `SELECT * FROM products WHERE id = $1`,
      values: [id],
    };
    return db
      .query(query)
      .then((result) => {
        if (!result.rows[0]) {
          return `Product with id ${id} not found `;
        } else {
          return result.rows[0];
        }
      })
      .catch((err) => err);
  };
  const addUser = ( user ) => {
    console.log( user )
    const query = {
      text: `INSERT INTO
      users(first_name,last_name,email,password,phone,shipping_address)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      values: [
        `${user.first_name}`,
        `${user.last_name}`,
        `${user.email}`,
        `${user.password}`,
        `${user.phone}`,
        `${user.shippin_address}`,
      ],
    };
    return db
      .query(query)
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => {
        return err;
      });
  };
  return { getUsers, getUserByEmail, getAllProducts,getSingleProduct,addUser };



 
};