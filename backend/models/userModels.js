import db from '../config/database.js';

export async function getOneUsername(username){

    const [result] = await db.execute("SELECT * FROM user_account WHERE username= ?",
        [username]
        );
        return result[0];
}

export async function insertUserAccount(fullname,username,hashed_password,gender,date_of_birth){
    
    const [result] = await db.execute("INSERT INTO user_account (fullname, username, password, gender, date_of_birth) VALUES (?,?,?,?,?)",
    [fullname,username,hashed_password,gender,date_of_birth]
    );
    // use this to show the id that is created
    console.log(result.insertId);

    return result;
}
export async function deleteUserAccount(user_id){
    const [result] = await db.execute("DELETE FROM user_account WHERE user_id = ?",
        [user_id]
    );
    return result;
}
export async function updateUserAccount(fullname,username,hashed_password,gender,date_of_birth,user_id){
    const [result] = await db.execute("UPDATE user_account SET fullname = ?, username = ?, password = ?, gender = ?, date_of_birth = ?  WHERE user_id = ?",
        [fullname,username,hashed_password,gender,date_of_birth, user_id]
    );
    // shows 1 if success, 0 if no user with that user_id so no affected row
    console.log(result.affectedRows);
    return result;
}
