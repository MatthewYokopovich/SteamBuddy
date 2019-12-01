import React, { Component } from "react";
import Icon from '@material-ui/core/Icon';

class SteamIcon extends Component{

    render(){
        return(
            <Icon style={{fontSize: 50}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" />
            </Icon>
        )
    }
}

export default SteamIcon;