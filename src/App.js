import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : []
    }
  }
 
  componentDidMount(){
    fetch('http://newsapi.org/v2/everything?q=india&from=2020-04-10&to=2020-04-10&sortBy=popularity&apiKey=b7b56979d49748f5a8640f3866019476')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles:myJson.articles
    })
  });
  }

  search(key) 
  {
    console.log(key);
    if(key!="") {
    fetch('http://newsapi.org/v2/everything?q='+key+'&from=2020-04-10&to=2020-04-10&sortBy=popularity&apiKey=b7b56979d49748f5a8640f3866019476')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles:myJson.articles
    })
  
  });
  }
  }
  
  render() {
    return (
      
      <div className="App">
        <h1>TOP NEWS</h1>
        <h5>Powered by NewsApi</h5>
        
          <div class="search"><div>
            <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={(event) =>this.search(event.target.value)}></input>
          </div>
          
        </div>
        {/* <input type="text" onChange={(event) =>this.search(event.target.value)} className="search" placeholder="Search..." class="search" /> */}
        
        
        {this.state.articles.map((item,index)=>{
          return (
            <div>

              <div class="box-shadow">
              <img src={item.urlToImage}  style={{width:'100%'}}></img>
              <div class="container">
                <h4>{item.title}</h4><br></br>
              <p>{item.description}
              <a href={item.url}>Read more</a></p>
              </div>
              </div>
          
              
              {/* <h1>{item.title}</h1><br></br>
              <img src={item.urlToImage} style={{width:'300px'}}/><br></br>
              {item.description}
              <a href={item.url}>Read more</a>
              <hr></hr> */}
              <br></br>
            </div>
            
          )
        })}
        
        
      </div>
    );

  }
 
}

export default App;
