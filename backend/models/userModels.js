const db = require('../config/database');

const testConnection = async () => {
  try {
    await db.query('SELECT 1');
    console.log('✅ CONNECTION SUCCESSFUL');
    return true;
  } catch (err) {
    console.error('❌ CONNECTION UNSUCCESSFUL:', err.message);
    return false;
  }
};

testConnection();

console.log('USER:', process.env.USER);
console.log('PASS:', process.env.PASS);
console.log('DB:', process.env.DB);

