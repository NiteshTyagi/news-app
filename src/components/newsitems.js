import React , {Component} from "react";
import { Link } from "react-router-dom";
class NewsItem extends Component{
    // constructor(props){
    //     super(props);
    // }

    
    render(){
        const imageUrl = this.props.article?.image_url? this.props.article.image_url: process.env.REACT_APP_DEFAULT_IMAGEURL;

        const {title, description, link, pubDate, category, country, source_id}  = this.props.article;

        return (
            <div className="col-lg-4 col-md-2 col-12 my-3">
                <div className="card">
                    <div className="card-header text-muted">
                        {new Date(pubDate).toDateString()}
                        {category.map((element,index)=>{
                            return <Link key={index}  to={`/${element}`} className="badge badge-dark ml-2 p-1">{element}</Link>

                        })}
                        
                        {country.map((element,index)=>{
                            return <span key={index} className="badge badge-danger ml-2 p-1">{element}</span>

                        })}

                        <span className="badge badge-info ml-2 p-1">SOURCE : {source_id}</span>

                    </div>
                    <img className="card-img-top" src={imageUrl} alt="News"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description?.length< 100? description: `${description?.slice(0,100)}...`}</p>
                        <a  rel="noreferrer" href={link} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;