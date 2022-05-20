import React, { Component } from "react";
import NewsItem from "./newsitems";

class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            nextPage: false,
            page:1,
        }
    }

    endpoint_url = process.env.REACT_APP_NEWSDATA_API_ENDPOINT;
    api_key = process.env.REACT_APP_NEWSDATA_IO_API;
    
    async updateNews() {
        var url = "";
        if(this.props.category){
            url = `${this.endpoint_url}?apikey=${this.api_key}&category=${this.props.category}&language=${this.props.language}&country=${this.props.country}&page=${this.state.page}`;
        }
        else{
            url = `${this.endpoint_url}?apikey=${this.api_key}&language=${this.props.language}&country=${this.props.country}&page=${this.state.page}`;
        }
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles : parsedData.results,
            nextPage : parsedData?.nextPage? false: true,
        })

    }

    async componentDidMount(){
        this.updateNews();
    }

    handlePrevClick = async () =>{
        this.setState({
            page: this.state.page - 1
        }, this.updateNews);
        
    }

    handleNextClick = async () =>{
        this.setState({
            page: this.state.page + 1
        }, this.updateNews);
    }

    render(){
        return (
            <div className="container my-5">
                <div className="row mx-0">
                    {this.state.articles.map((article,index)=>{
                        return <NewsItem key={index} article={article} />
                    })}
                </div>
                {this.state.articles.length!==0 ? <div className="my-5 mx-0 row justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary btn-sm" onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button disabled={this.state.nextPage} type="button" className="btn btn-secondary btn-sm" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>:<div/>}
            </div>
        )
    }
}

export default News;