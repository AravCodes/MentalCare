const API_KEY = "80c90ae56b224cdc8bb3c8d68d223fc3"; 
import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

export const useFetchNews = () => {
    const {news,setNews} = useContext(Context);

    const fetchNews = async () => {
        try {
            const url = `https://newsapi.org/v2/everything?q=Recent studies on Parkinson's disease&sortBy=relevancy&apiKey=${API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const topArticles = data.articles.slice(0,4);
            setNews(topArticles);
            console.log(topArticles);
            return news;
        } catch (error) {
            console.error('There was a problem with the fetch operation: ', error);
        }
    }

    return fetchNews;
}
