import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023');

	const [priceFilter, setPriceFilter] = useState(0)
	const [category, setCategory] = useState("전체")
	const [color, setColor] = useState('')

	const onChangePrice = (selectdPrice) => {
		setPriceFilter(selectdPrice);
	}


	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	//가격범위로 필터설정하기 
	const filteredRangePrice = props.items.filter((item) => {
		if (item.amount <= priceFilter) {
			return item
		}
	})

	const filteredCategory = props.items.filter((item) => {
		return item.category === category
	})
	//filter 는 조건에맞는 배열을 새로운배열을 만듬
	const filteredExpensese = props.items.filter((expenses) => {
		return expenses.date.getFullYear().toString() === filteredYear
	})

	let expensesContent = <p>값이 없습니다.</p>;

	console.log('부모', color)
	console.log('부모', typeof color)

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
				onChangePrice={onChangePrice}
				priceFilter={priceFilter}
				setPriceFilter={setPriceFilter}
				setCategory={setCategory}
				setColor={setColor}
			/>
			{filteredCategory.length > 0 ?
				filteredCategory.map((item) =>
					<ExpenseItem
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>) : expensesContent}






			{filteredRangePrice.length > 0 ? filteredRangePrice.map((item) =>
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
