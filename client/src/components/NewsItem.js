import React, { Component } from "react";

class NewsItem extends Component{

    convertFromHTML(html){
        html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
html = html.replace(/<\/div>/ig, '\n');
html = html.replace(/<\/li>/ig, '\n');
html = html.replace(/<li>/ig, '  *  ');
html = html.replace(/<\/ul>/ig, '\n');
html = html.replace(/<\/p>/ig, '\n');
html = html.replace(/<br\s*[\/]?>/gi, "\n");
html = html.replace(/<[^>]+>/ig, '');
return html;
    }

    render(){
        return (
            <div>
             <a href={this.props.url}><h4>   {this.props.title}</h4></a>
             {this.props.contents ? (
                 <p> {this.convertFromHTML(this.props.contents)} </p>
             ): (
                <p></p>
             )}
            </div>
        )
    }
}
export default NewsItem;