import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	//filter 는 조건에맞는 배열을 새로운배열을 만듬
	const filteredExpensese = props.items.filter((expenses) => {
		return expenses.date.getFullYear().toString() === filteredYear
	})

	let expensesContent = <p>값이 없습니다.</p>;

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{filteredExpensese.length > 0 ? filteredExpensese.map((item) =>
				<ExpenseItem
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			) : expensesContent}
		</Card>
	);
};

export default Expenses;
