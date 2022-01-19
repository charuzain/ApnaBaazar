/* eslint-disable camelcase */
let format = require("pg-format");
const order = require("../routes/order");

module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT id,email, password FROM users WHERE email = $1`,
      values: [email],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
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
  const addUser = (user) => {
    console.log(user);
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

  const getOrderById = (user_id, order_id) => {
    const query = {
      text: `SELECT * from orders WHERE user_id = $1 AND order_id = $2`,
      values: [user_id, order_id],
    };
    console.log(query);
    return db
      .query(query)
      .then((result) => {
        return result;
      })
      .catch((err) => err);
  };

  const addCartToDB = (user_id, cart) => {
    let cartItems = [];
    for (let item of cart.items) {
      cartItems.push([item.quantity, item.product_id, user_id]);
    }
    let query1 = format(
      "INSERT INTO carts (quantity,product_id,user_id) VALUES %L",
      cartItems
    );

    db.query(query1)
      .then(() => {
        console.log("user_id", user_id);
        addOrderToDB(user_id, cart);
      })
      .catch((err) => err);
  };
  const addOrderToDB = (user_id, cart) => {
    const query2 = {
      text: `INSERT INTO orders (order_total,user_id) VALUES ($1,$2) RETURNING *`,
      values: [cart.total, user_id],
    };
    console.log(query2);
    db.query(query2)
      .then((data) => {
        console.log(data.rows[0].id);
        addLineItemsToDB(data.rows[0].id, cart);
      })
      .catch((err) => {
        console.log("query error:", err.stack);
      });
  };
  const addLineItemsToDB = (order_id, cart) => {
    let lineItems = [];
    for (let item of cart.items) {
      lineItems.push([item.quantity, item.product_id, order_id]);
    }
    let query3 = format(
      "INSERT INTO line_items (quantity, product_id , order_id) VALUES %L RETURNING *",
      lineItems
    );

    console.log(query3);
    return db
      .query(query3)
      .then((result) => {
        console.log(result.rows[0]);
        return result.rows[0];
      })
      .catch((err) => {
        console.log("query error:", err.stack);
      });
  };
  return {
    getUsers,
    getUserByEmail,
    getAllProducts,
    getSingleProduct,
    addUser,
    getUserCart,
    getCartById,
    addProductToCart,
    updateCart,
    removeProductFromCart,
    getOrderById,
    addCartToDB,
  };
};
