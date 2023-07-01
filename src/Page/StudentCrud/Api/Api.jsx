import axios from "axios"

//get all user
export const getAllUser=async()=>{
    try{
        return await axios.get(`https://restfullapinodejs1.onrender.com/api/allstudent`)
    } catch(error){
        console.log('Error while calling getUsers API', error.message);
    }
}

//add user data

export const addUser=async(data)=>{
    try {
        return await axios.post(`https://restfullapinodejs1.onrender.com/api/student`, data)
    } catch(error){
        console.log('Error while calling getUsers API', error.message);
    }
}

//get edit user data

export const getEditUser=async data=>{
    try {
        return await axios.get(`https://restfullapinodejs1.onrender.com/api/edit/${data}`)
    } catch (error){
        console.log('Error while calling getUsers API', error.massage);
    }
}

//update user post data

export const  UpdateUserData=async(id,data)=>{
    try{
        return await axios.post(`https://restfullapinodejs1.onrender.com/api/update/${id}`, data)
    } catch (error){
        console.log('Error while calling getUsers API', error.massage);
    }
}

//delete user data

export const deleteUser= async id=>{
    try {
        return await axios.delete(`https://restfullapinodejs1.onrender.com/api/delete/${id}`)
    } catch (error){
        console.log('Error while calling getUsers API', error.massage);
    }
}