import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const[filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterExpenses = props.items.filter( (expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No Expenses Found</p>;

    if(filterExpenses.length > 0){
        expensesContent = filterExpenses.map((expense) => {
            return(
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )
        })
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;