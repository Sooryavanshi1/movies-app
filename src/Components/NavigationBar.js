import React, {Component} from "react";
import { Link } from "react-router-dom";
export default class NavigationBar extends Component{
    render(){
        return(
            <div style={{display:'flex',padding:'0.5'}}>
                <Link to="/" style={{textDecoration:'none'}}><h1 style={{marginTop:'1rem',marginLeft:'1rem'}}>Movies App</h1></Link>
                <Link to="/Favourites" style={{textDecoration:'none'}}><h1 style={{marginLeft:'1rem',margintop:'1rem'}}>favourites</h1></Link>
            </div>
        )
    }
}