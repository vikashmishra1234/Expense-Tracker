import React, { useContext } from 'react'
import '../style/style.css'
import { Chart as Chartjs,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ContextProvider from '../context/ContextProvider';
import { dateFormate } from '../TodayExpense';

Chartjs.register(
    CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
ArcElement,
)


const Chart = () => {
    const {Incomes,Expensess} = useContext(ContextProvider);
    const data = {
        labels:Incomes.map((inc)=>{
            const {createdAt}= inc;
           let tarik= dateFormate(createdAt)
            return tarik;
        }),
        datasets:[
            {
                label:'Incomes',
                data:[
                    ...Incomes.map((inc)=>{
                        const {amount}= inc;
                        return amount
                    })
                ],
                backgroundColor:'green',
                tension:.2
            },
            {
                label:'Expenses',
                data:[
                    ...Expensess.map((exp)=>{
                        const {amount}= exp;
                        return amount
                    })
                ],
                backgroundColor:'red',
                tension:.2
            },
        ]


    }
  return (
    <div className='chart' >
      <Line     data={data}/>
    </div>
  )
}


export default Chart
