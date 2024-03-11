import axios from "axios"

export const addIncome = async(data)=>{
    try {
        const res = await axios.post('http://localhost:5000/api/products',data)
        return res.data;
    } catch (error) {
        console.log("error while adding income");
        return error.message;
    }
}

export const Expenses = async(data)=>{
    try {
        const res = await axios.post('http://localhost:5000/api/products/expense',data)
        return res.data;
    } catch (error) {
        console.log("error while adding income");
        return error.message;
    }
}

export const getexpense = async()=>{
    try {
        const res = await axios.get('http://localhost:5000/api/products/expense')
        return res.data;
    } catch (error) {
        console.log("error while adding income");
        return error.message;
    }
}
export const getIncome = async()=>{
    try {
        const res = await axios.get('http://localhost:5000/api/products')
        return res.data;
    } catch (error) {
        console.log("error while adding income");
        return error.message;
    }
}
export const delIncome = async(id)=>{
    try {
        const res = await axios.delete(`http://localhost:5000/api/products/${id}`)
        return res.data;
    } catch (error) {
        console.log("error while adding income");
        return error.message;
    }
}