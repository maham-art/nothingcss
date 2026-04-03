
import {useState} from "react";


import Header from "./components/header/Header";
import NewsList from "./components/NewsList";
import { newsData } from "./utilis/data";
import "./components/style.css";
export default function App(){
    const  [news , setNews] = useState(newsData)
    const getKeywords = (event)=>{
        let keywords =(event.target.value);
        let filteredNews = newsData.filter(item => {
            return item.title.indexOf(keywords)>-1;
    })
    setNews(filteredNews)
}
    return(
        <>
        <Header getKeywords ={getKeywords} />
        <NewsList news ={news} />
        </>
    );
    }