import { useState, useEffect } from 'react';
import Card from './UI/Card/Card';
import useCount from '../hooks/useCount';


const BackwardCounter = () => {
  const counter = useCount(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
