import React, { useContext } from 'react'
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
    const {Incomes,Expenses} = useContext(ContextProvider);
    const data = {
        labels:Incomes.map((inc)=>{
            const {createdAt}= inc;
            return createdAt;
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
                    ...Expenses.map((exp)=>{
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
    <div>
      <Line data={data}/>
    </div>
  )
}


export default Chart
