const createUserData = async(userData)=>{
    const users = [];
    const currentData = await JSON.parse(localStorage.getItem("users"));
    if(currentData !== null){
        if(currentData.constructor === Array){
            currentData.forEach((item)=>users.push(item));
            users.push(userData);
        } else{
            users.push(currentData);
            users.push(userData);
        }
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
    }
    return users;
};

const readUserData = async()=>{
    const allUsers = await JSON.parse(localStorage.getItem("users"));
    return allUsers;
}

const updateUserData = async(userData, id)=>{
    const users = [];
    const currentData = JSON.parse(localStorage.getItem("users"));
    const updatedData = currentData.map(item=>item.id=== id? userData : item)
    localStorage.setItem("users", JSON.stringify(updatedData));
    return users;
};

const deleteUserData = async(users, id)=>{
    const newValue = users.filter(item=>item.id !== id)
    localStorage.setItem("users", JSON.stringify(newValue));
    return newValue;
}

export {createUserData, readUserData, updateUserData, deleteUserData};