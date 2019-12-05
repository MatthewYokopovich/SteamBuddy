import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import API from "../utils/API";
class SearchBox extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      state={
          results: [],
      }

    handleSubmit(e) {
        e.preventDefault();
        API.getSearchResults(this.input.value).then(resp =>{
            this.setState({
                results: resp.data
            });
        })
      }

    render(){
        return (
            <Grid container justify={"center"}>
            <form onSubmit={this.handleSubmit} style={{width: "100%"}}>
            <label>
                Search:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
            </form>
            <ul>
                {this.state.results.length ?(
                    <div> 
                        {this.state.results.map(s=>{
                            return(
                               <li key={s.appid}>
                                   <a href={"/search/"+s.appid} >{s.name}</a>
                               </li> 
                            )
                        })}
                    </div>
                ) : (
                    <div> 
                        <p>No results found...</p>
                    </div>
                )}
            </ul>
            </Grid>
        )
    }
}

export default SearchBox;