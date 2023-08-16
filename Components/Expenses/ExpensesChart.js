import React from "react";
import Chart from "../CHART/Chart";
const ExpenseChart=(props)=>{
    const chartDatapoints=[
        {label:'JAN',value:0},
        {label:'FEB',value:0},
        {label:'MARCH',value:0},
        {label:'APRIL',value:0},
        {label:'MAY',value:0},
        {label:'JUNE',value:0},
        {label:'JULY',value:0},
        {label:'AUG',value:0},
        {label:'SEP',value:0},
        {label:'OCT',value:0},
        {label:'NOV',value:0},
        {label:'DEC',value:0}
        
       
    ];

    for(const expense of props.Expenses)
    {
        const expenseMonth=expense.date.getMonth();
        chartDatapoints[expenseMonth].value+=expense.amount;
    }

    return (
       
            <Chart dataPoints={chartDatapoints}/>
        
    )
}
export default ExpenseChart;