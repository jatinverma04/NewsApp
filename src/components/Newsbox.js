import React, { useState, useEffect } from 'react'
import Newsitems from './Newsitems';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const Newsbox = (props)=> {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults,setResults] = useState();
 
  
const newsUpdate = async () =>{
  props.setProgress(10);

  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=735a6e71d42d48aeabfcbc3484ba64ef&pagesize=6&page=${page}`;
  // setPage(page+1);
  let data = await fetch(url);
  props.setProgress(50);
  let parseData = await data.json();
  props.setProgress(70);
  setResults(parseData.totalResults);
  setArticles(parseData.articles)
  props.setProgress(100);
}
  

  useEffect (()=>{
   newsUpdate();
  },[])

  
  const fetchMoreData = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=735a6e71d42d48aeabfcbc3484ba64ef&pagesize=6&page=${page}`;
   
   
    let data = await fetch(url);
    let parseData = await data.json();
    

    setArticles(articles.concat(parseData.articles))
    setResults(parseData.totalResults);
    setPage(page + 1);

  }
    return (
      <div>
      

        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !==totalResults} loader={<Spinner/>}>
        <div className="row">
          {articles.map((element)=>{
            return (<div className="col-md-4" key={element.url}>
            <Newsitems title={element.title?element.title:""} description={element.description?element.description:""}  imageUrl = {element.urlToImage} newsUrl={element.url} mode={props.mode}/>
            </div>
          )})}
        </div>
            </InfiniteScroll>
      
      {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.pageNo === 1} className="btn btn-primary" onClick={this.handlePrev}>Previous</button>
        <button className="btn btn-primary" onClick={this.handleNext}>Next</button>
      </div> */}
      </div>
    )
  
}

Newsbox.defaultProps = {
  country: 'in',
  catagory: 'general'
}

export default Newsbox
