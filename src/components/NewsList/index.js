import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItem';

const NewsList = () => {


  useEffect(() => {
    getNewList()
  }, [])
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getNewList = async () => {
    setIsLoading(true)
    const response = await fetch("https://newsapi.org/v2/everything?q=p2e&from=2023-07-01&sortBy=publishedAt&apiKey=25d645ab415943ff9c19d8881502d8d5")
    const data = await response.json()
    setList(data.articles)
    setIsLoading(false)

  }


  return (
    <div>
      {!isLoading && list.map(news => <NewsItem {...news} />)}
      {isLoading && <p>로딩중입니다</p>}
    </div>
  );
};


export default NewsList;
