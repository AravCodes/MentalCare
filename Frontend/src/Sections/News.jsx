import React from 'react'
import { useState, useEffect,useContext } from 'react';
import { useFetchNews } from '../config/newsapi.js';
import { Context } from '../context/Context.jsx';
import NewsDropdown from '../Components/NewsDropdown.jsx';


const News = () => {

  const fetchNews = useFetchNews();

  const {newsLoading,recentStudiesClicked, news, setNews} = useContext(Context);

  useEffect(() => {
    if(recentStudiesClicked && newsLoading){
      setNews(fetchNews())
      console.log(fetchNews);
    }
  }, [recentStudiesClicked]);
  return (
      <div className = "absolute right-1 mt-[90px] md:flex md:justify-end w-[60%] transition-all duration-300 bg-white shadow-md rounded-md">
        <div >
          {news && news.length>0 ? news.map((article,index)=>(
            <div key={index}>
              <NewsDropdown title = {article.title} description = {article.description}/>
            </div>
          )) : null}

        </div>
          
          
          

      </div>
  );
}

export default News