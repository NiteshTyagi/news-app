import React from "react";
import { Link } from "react-router-dom";
import { HashHistory } from "history";


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            queryValue : ""
        }
    }

    handleOnchange = (event) =>{
        this.setState({
            queryValue  : event.target.value
        })
    }

    handleOnClick = () =>{
        this.props.setQuery(this.state.queryValue);
    }

    render(){
        const categories = this.props.categories;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a rel="noreferrer" className="navbar-brand brand-logo" target="_blank"  href="https://www.newsdata.io"><img className="web-icon" src="https://newsdata.io/images/global/newsdata-icon.png" alt="newsdata icon"/> NEWSDATA <span></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1>{this.props.query}</h1>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categories.map((value,index)=>{
                                    return  <div key={value}>
                                                <Link className="dropdown-item" to={`/${value}`}>{value}</Link>
                                                <div className="dropdown-divider"></div>
                                            </div>
                                })}
                            </div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.handleOnchange} aria-label="Search"/>
                        <button className="btn btn-outline-light my-2 my-sm-0" onClick={this.handleOnClick}>Search</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;