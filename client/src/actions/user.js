import axios from 'axios';

export const addUser =  async (userdata) => {
    const response = await axios.post('http://localhost/api/users', {
        userdata:userdata
    })
    if(response.status === 200){
        console.log(response.data.users);
        return response.data.users;
    } else {
        console.log("I'm sorry your operation is failed")
    }
}

export const editUser =  async (userdata) => {
    const response = await axios.post('http://localhost/api/users/edit', {
        userdata:userdata
    })
    if(response.status === 200){
        console.log(response.data.users);
        return response.data.users;
    } else {
        console.log("I'm sorry your operation is failed")
    }
}

export const getUser =  async () => {
    const response = await axios.get('http://localhost/api/users/')
    if(response.status === 200){
        console.log(response.data.users);
        return response.data.users;
    } else {
        console.log("I'm sorry your operation is failed")
    }
}