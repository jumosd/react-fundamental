import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);


  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length === 0) {
      setEnteredValue('')
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    //값이 빈스트링일경우 배경이 빨간색으로 해야함
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    } else {
      setIsValid(true)
    }

    props.onAddGoal(enteredValue);
  };
  console.log(isValid)


  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>목표</label>
        <input type="text" onChange={goalInputChangeHandler} style={{ backgroundColor: isValid ? 'white' : 'salmon', borderColor: 'red' }} />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
