import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'
// import Carousel from './Carousel';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        page:1,
        category: 'general',
        pageSize: 12
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, 
        category: PropTypes.string,
      }

    capitalizefirstletter=(string)=>{
        return string[0].toUpperCase() + string.slice(1);
      }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
            // news: [],
        };
        document.title=`${this.capitalizefirstletter(this.props.category)}-NewsAllTime`;
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false})
    }
    async componentDidMount(){ 
        this.updateNews();
    }
    fetchMoreData = async () => {  
        this.setState({page: this.state.page + 1});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({
            articles:this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };
    render() { 
        const { news } = this.state;
        return (
            
            <div className="container ">
                <h2 className='text-center my-7' style={{margin:'35px 0px' ,color:"white"}}>NEWSALLTIME - TOP HEADLINES ON {(this.props.category).toUpperCase()}</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !==this.state.totalResults}
                    loader={<Spinner/>}
                >

                    
                        <div className="row">
                        { this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                
                                    <NewsItem
                                        title={element.title}
                                        description={element.description ? (element.description.length > 80 ? element.description.slice(0, 80) + '...' : element.description) : ""}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author ? element.author : "Anonymous"}
                                        time={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                        </div>
                </InfiniteScroll > 
            </div>
        )
    }
}

export default News