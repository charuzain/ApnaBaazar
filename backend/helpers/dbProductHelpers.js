module.exports = (db) => {
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

  return { getAllProducts, getSingleProduct };
};
