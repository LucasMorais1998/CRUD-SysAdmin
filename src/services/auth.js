const bcrypt = require('bcrypt');

export const createPasswordHash = async (password) => {
  return bcrypt.hash(password, 8);
}