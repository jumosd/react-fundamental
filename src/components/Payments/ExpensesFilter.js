import React, { useRef } from 'react';

import './ExpensesFilter.css';



const ExpensesFilter = (props) => {

  const rangeValue = useRef()
  const radioValue = useRef()

  const radioCheckHandler = (e) => {
    props.setCategory(e.target.value)
  }

  const rangeValueCheckbutton = () => {
    props.onChangePrice(rangeValue.current.value)
  }

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const inputColorCheckHandler = (e) => {
    props.setColor(e.target.value)
    console.log('자식', e.target.value)
    console.log('자식', typeof e.target.value)
  }

  return (

    <>
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
          </select>
        </div>
      </div>

      <div>
        <div>

          <input type='radio' onChange={radioCheckHandler} name='category' value='애플' />애플
          <input type='radio' onChange={radioCheckHandler} name='category' value='삼성' />삼성
        </div>

        <input type='color' onChange={inputColorCheckHandler} />
      </div>


      <div>
        <label>가격을 설정해주세요  </label>
        <input type="range" ref={rangeValue} id="a" name="price" min="0" max="1000" step="1" />
        <button onClick={rangeValueCheckbutton}> 버튼 </button>
      </div>
    </>
  );
};

export default ExpensesFilter;