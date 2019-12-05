import React, { Component } from "react";
import NewsItem from "./NewsItem";

const gameStyle = {
    borderStyle: "solid",
    borderWidth: 1,
    color: "inherit"
}

class Game extends Component{
    render(){
        return(
          <div>
              <h3>{this.props.appname}</h3>
              <div style={gameStyle}>
              {
               this.props.newsitems.map(n=>(
                   <NewsItem title={n.title} key={n.gid} url={n.url}/>
               ))
              }</div>
          </div>  
        )
    }
}

export default Game;