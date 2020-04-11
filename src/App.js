import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : []
    }
  }
 
  componentDidMount(){
    fetch('http://newsapi.org/v2/everything?q=apple&from=2020-04-10&to=2020-04-10&sortBy=popularity&apiKey=b7b56979d49748f5a8640f3866019476')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      articles:myJson.articles
    })
  });
  }
  
  render() {
    return (
      <div className="App">
        <input type="text" className="input" placeholder="Search..." />
        
        {this.state.articles.map((item,index)=>{
          return (
            <html>
              <body>
              
              
              <h1>{item.title}</h1><br></br>
              <img src={item.urlToImage} style={{width:'300px'}}/><br></br>
              {item.description}
              <a href={item.url}>Read more</a>
              <hr></hr>
              </body>
            </html>
            
          )
        })}
        
        
      </div>
    );

  }
 
}

export default App;
