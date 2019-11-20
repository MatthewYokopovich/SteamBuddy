import React, { Component } from "react";
import NewsItem from "./NewsItem";

const gameStyle = {
    borderStyle: "solid",
    borderWidth: 1,
}

class Game extends Component{
    render(){
        return(
          <div style={gameStyle}>
              <p>{this.props.appname}</p>
              {
               this.props.newsitems.map(n=>(
                   <NewsItem title={n.title} key={n.gid} url={n.url}/>
               ))
              }
          </div>  
        )
    }
}

export default Game;