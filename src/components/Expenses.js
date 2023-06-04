import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props){
    const ExpenseArr = props.expenses;
    return (
        <div className = 'expenses'>
            {ExpenseArr.map(expense => (
                    <ExpenseItem 
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                    />
            )
            )}
            {/* <ExpenseItem
            title = {props.expenses[0].title}
            amount = {props.expenses[0].amount}
            date = {props.expenses[0].date}
            />
            <ExpenseItem
            title = {props.expenses[1].title}
            amount = {props.expenses[1].amount}
            date = {props.expenses[1].date}
            />
            <ExpenseItem
            title = {props.expenses[2].title}
            amount = {props.expenses[2].amount}
            date = {props.expenses[2].date}
            /> */}
        </div>
    );
}