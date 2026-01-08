const db = require('../config/database');

export async function getOneUsername(username){

    const [rows] = await db.execute("SELECT * FROM user_account WHERE username= ?",
        [username]);

        return rows[0];
}

