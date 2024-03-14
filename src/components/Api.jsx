import axios from "axios"
import React, { useContext } from "react"
import ContextProvider from "./context/ContextProvider"


let config = {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    }
  }

export const addIncome = async(data)=>{
    try {
        console.log(config)
        const res = await axios.post('http://localhost:5000/api/products',data,config);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log("error while adding income"+error.message);
        return error.message;
    }
}

export const Expenses = async(data)=>{
    try {
        const res = await axios.post('http://localhost:5000/api/products/expense',data,config)
        return res.data;
    } catch (error) {
        console.log("error while adding expense"+error.message);
        return error.message;
    }
}

export const getexpense = async()=>{
    try {
        const res = await axios.get(`http://localhost:5000/api/products/expense/${localStorage.getItem("userId")}`,{
            headers: {
                Authorization: `bearer ${localStorage.getItem("token")}`,
              }
        })
        return res.data;
    } catch (error) {
        console.log("error while getting  expenses"+error.message);
        return error.message;
    }
}
export const getIncome = async()=>{
    try {
        const res = await axios.get(`http://localhost:5000/api/products/${localStorage.getItem("userId")}`,{
            headers: {
                Authorization: `bearer ${localStorage.getItem("token")}`,
              }
        })
      

           return res.data;
       
    } catch (error) {
        console.log("error while getting income",error.message);
        return error.message;
    }
}
export const delIncome = async(id)=>{
    try {
        const res = await axios.delete(`http://localhost:5000/api/products/${id}`,config)
        return res.data;
    } catch (error) {
        console.log("error while deleting income" +error.message);
        return error.message;
    }
}
export const delExpense = async(id)=>{
    
    try {
        const res = await axios.delete(`http://localhost:5000/api/products/expense/${id}`,config)
        return res.data;
    } catch (error) {
        console.log("error while deleting expense" +error.message);
        return error.message;
    }
}
export const signUp = async(data)=>{
    
    try {
        const res = await axios.post(`http://localhost:5000/api/signup`,data,config);
       
        return res.data;
    } catch (error) {
        console.log("error while deleting expense" +error.message);
        return error.message;
    }
}
export const userLogin = async(data)=>{
    
    try {
        const res = await axios.post(`http://localhost:5000/api/login`,data,config);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log("error while deleting expense" +error.message);
        return error.message;
    }
}

// hrttps://backend-expense-tracker-79np.onrender.com