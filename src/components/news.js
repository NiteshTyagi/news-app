import React, { useEffect, useState } from "react";
import NewsItem from "./newsitems";

const News = (props) =>{

    const [articles, setArticles] = useState([]);
    const [nextPage, setNextPage] = useState(false);
    const [page, setPage] = useState(1);
    
    const endpoint_url = process.env.REACT_APP_NEWSDATA_API_ENDPOINT;
    const api_key = process.env.REACT_APP_NEWSDATA_IO_API;

    
    const updateNews = async () =>{
        var url = "";

        if(props.category){
            url = `${endpoint_url}?apikey=${api_key}&category=${props.category}&language=${props.language}&country=${props.country}&page=${page}`;
        }
        else{
            url = `${endpoint_url}?apikey=${api_key}&language=${props.language}&country=${props.country}&page=${page}`;
        }
        url = (props.query ??'') !== '' ? `${url}&q=${props.query}`:url;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.results);
        setNextPage(parsedData?.nextPage? false: true);

    }
    
    useEffect(()=>{
        updateNews();
        // eslint-disable-next-line
    },[props.query,page]);

    const handlePrevClick = () =>{
        setPage(page -1);
    }

    const handleNextClick = () =>{
        setPage(page + 1);
    }

    
    return (
        <div className="container my-5">
            <div className="row mx-0">
                {articles.map((article,index)=>{
                    return <NewsItem key={index} article={article} />
                })}
            </div>
            {articles.length!==0 ? <div className="my-5 mx-0 row justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-secondary btn-sm" onClick={handlePrevClick} >&larr; Previous</button>
                <button disabled={nextPage} type="button" className="btn btn-secondary btn-sm" onClick={handleNextClick} >Next &rarr;</button>
            </div>:<div/>}
        </div>
    )
    
}

export default News;