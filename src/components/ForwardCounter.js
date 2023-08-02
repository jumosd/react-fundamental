import { useState, useEffect } from 'react';
import Card from './UI/Card/Card';
import useCount from '../hooks/useCount';


const ForwardCounter = () => {
  const counter = useCount(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
