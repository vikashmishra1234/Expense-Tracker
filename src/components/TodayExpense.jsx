import { elements } from "chart.js";
import moment from "moment";
export const Today = (Data) => {
  let amount = 0;
  try {
    Data.forEach((data) => {
      var d = new Date(data.createdAt);
      let tarik =
        d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      let date = new Date();
      let today =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      if (tarik === today) {
        amount = amount + data.amount;
      }
    });
    return amount;
  } catch (error) {
    return error.message + "calculating date";
  }
};

export const calculateBalance = (data1,data2)=>{
  let totalIncome=0;
  let totalExpense=0;
  console.log(data2)

    data1.length!=0&&data1.forEach((element) => {
    totalIncome= element.amount+totalIncome;
    });

   data2.length!=0&&data2.forEach(element => {
    totalExpense = element.amount + totalExpense;
   });

   let currentBalance = totalIncome-totalExpense;
   if(currentBalance<=0){
    currentBalance=0;
    return currentBalance;
   }
  return currentBalance;
}

export const dateFormate = (date) => {
  var d = new Date(date);
  let Tarik = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

  return Tarik;
};
