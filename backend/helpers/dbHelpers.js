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
    const query = `SELECT products.* , categories.name as category FROM products JOIN categories 
    ON products.category_id = categories.id`;
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
  const addUser = (user) => {
    console.log(user)
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

  const getUserCart = (user_id) => {
    const query = {
      text: `SELECT * FROM carts WHERE user_id = $1`,
      values: [user_id],
    };
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => err);
  };

  const getCartById = (user_id, product_id) => {
    const query = {
      text: `SELECT * FROM carts WHERE user_id = $1 AND product_id = $2`,
      values: [user_id, product_id],
    };
    return db
      .query(query)
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => err);
  };

  const addProductToCart = (userId, productId, quantity) => {
    const query = {
      text: `INSERT INTO carts (user_id, product_id, quantity)
VALUES ($1 , $2 , $3) RETURNING *;`,
      values: [userId, productId, quantity],
    };
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => err);
  };

  const updateCart = (user_id, product_id, quantity) => {
    const query = {
      text: `UPDATE carts SET quantity = $3 WHERE user_id = $1 AND product_id = $2 RETURNING *;`,
      values: [user_id, product_id, quantity],
    };
    return db
      .query(query)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => err);
  };

  const removeProductFromCart = (user_Id, product_Id) => {
    const query = {
      text: `DELETE FROM carts WHERE user_id = $1 AND product_id = $2`,
      values: [user_Id, product_Id],
    };
    return db
      .query(query)
      .then((result) => {
        return result;
      })
      .catch((err) => err);
  };

  return { getUsers, getUserByEmail, getAllProducts, getSingleProduct, addUser, getUserCart, getCartById, addProductToCart, updateCart, removeProductFromCart };




};