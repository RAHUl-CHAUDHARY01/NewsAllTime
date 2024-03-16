import React, { Component } from 'react'

export class NewsItem extends Component {

 
    render() {
      
     



       let {title , description, imageUrl, newsUrl,time,author,source}= this.props;
        return (
      <div className='my-3 col-sm-6 mb-3 mb-sm-0' >

        <div className="card " style={{
        borderRadius: "20px",
        border: "0.5px solid #0369a1",
        minWidth: "20rem",
        maxWidth: "20rem",
        minHeight: "33rem",
      }}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}</span>
        <span  style={{borderRadius: "20px"}}>
        <img  src={imageUrl? imageUrl: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/breaking-news-template-6-1698627651-1700536290.jpg"} style={{ height: "10rem" }} className="card-img-top " alt="..." />

        </span>
        <div className="card-body fixed-height-card">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By:{author}<br/>On : {new Date(time).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More....</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
