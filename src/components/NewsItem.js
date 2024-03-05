import React, { Component } from 'react'

export class NewsItem extends Component {

 
    render() {
      
     



       let {title , description, imageUrl, newsUrl,time,author}= this.props;
        return (
      <div className='my-3 col-sm-6 mb-3 mb-sm-0' >

        <div className="card " style={{width: "18rem"}}>
        <span className="border border-5 bg-danger">
        <img  src={imageUrl? imageUrl: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/breaking-news-template-6-1698627651-1700536290.jpg"} className="card-img-top" alt="..." />

        </span>
        <div className="card-body fixed-height-card">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By:{author}<br/>On : {new Date(time).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More....</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
