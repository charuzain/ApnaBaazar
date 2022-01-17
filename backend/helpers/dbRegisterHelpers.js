module.exports = (db) => {
  const addUser = (user) => {
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
  return { addUser };
};
