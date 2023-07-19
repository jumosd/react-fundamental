import React, { useState } from 'react';
import { styled } from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

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
      <FormControl >
        <FormContollabel >목표</FormContollabel>
        <FormControlInput type="text" onChange={goalInputChangeHandler} isValid={isValid} />
        <Button type="submit">목표 추가하기</Button>
      </FormControl>
    </form>
  );
};

export default CourseInput;

const FormControl = styled.div`
    margin: 0.5rem 0;
`
const FormContollabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`

const FormControlInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;

 ${props => !props.isValid && `
  background-color: salmon;
  border-color: red;
 `}
`