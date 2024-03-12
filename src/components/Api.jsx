import axios from "axios"

export const addIncome = async(data)=>{
    try {
        const res = await axios.post('https://backend-expense-tracker-79np.onrender.com/api/products',data)
        return res.data;
    } catch (error) {
        console.log("error while adding income"+error.message);
        return error.message;
    }
}

export const Expenses = async(data)=>{
    try {
        const res = await axios.post('https://backend-expense-tracker-79np.onrender.com/api/products/expense',data)
        return res.data;
    } catch (error) {
        console.log("error while adding expense"+error.message);
        return error.message;
    }
}

export const getexpense = async()=>{
    try {
        const res = await axios.get('https://backend-expense-tracker-79np.onrender.com/api/products/expense')
        return res.data;
    } catch (error) {
        console.log("error while getting  expenses"+error.message);
        return error.message;
    }
}
export const getIncome = async()=>{
    try {
        const res = await axios.get('https://backend-expense-tracker-79np.onrender.com/api/products')
        return res.data;
    } catch (error) {
        console.log("error while getting income",error.message);
        return error.message;
    }
}
export const delIncome = async(id)=>{
    try {
        const res = await axios.delete(`https://backend-expense-tracker-79np.onrender.com/api/products/${id}`)
        return res.data;
    } catch (error) {
        console.log("error while deleting income" +error.message);
        return error.message;
    }
}
export const delExpense = async(id)=>{
    
    try {
        const res = await axios.delete(`https://backend-expense-tracker-79np.onrender.com/api/products/expense/${id}`)
        return res.data;
    } catch (error) {
        console.log("error while deleting expense" +error.message);
        return error.message;
    }
}