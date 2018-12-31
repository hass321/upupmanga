
import React from 'react';
import Cards from '../global/cards';

import { NavLink } from 'react-router-dom'

class MangaCategories extends React.Component{

    render(){
        return(
            <div className="container-fluid mangas-category-container">
                <div className="container card-main-container">
                    {this.renderHeader()}
                    <div className="row">
                        {this.renderFilter()}
                    </div>
                    <div className="row">
                        {this.renderHeroCard()}
                        {this.renderCards()}
                    </div>
                </div>
            </div>
        );
    }

    renderCards(){

        let elems = [];

        //cards
        for(let i=0 ; i<6 ; i++ ){
            elems.push(
                <div key = {i} className="col s12 m6 xl4">
                    <Cards/>
                </div>
            );
        }

        return(
            <div className="col s12 l8">
                <div className="row">
                    {elems}
                </div>
            </div>
        );
    }

    renderHeroCard(){
        return(
            <div className="col s12 l4">
                <div className="row">
                    <div className="col s12">

                        <div className="card hero-card">
                            
                            <div className="card-image">
                                <div className="card-background"></div>
                                <div className="card-hidden-content">
                                    <a href="#!">&nbsp;</a>
                                    <span className="card-views">24 views</span>
                                    <span className="card-post-date">3 weeks ago</span>
                                    <span className="card-author"><a href="#!">by : author name</a></span>
                                </div>
                            </div>
                        
                            <div className="card-content">
                                <a href="#!">
                                    <p className="card-hero-title">demo title</p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderFilter(){
        return(
            <div className="col s12">
                <form>
                    <div className="input-field col s12">
                        <select multiple id="cateogry-select">
                            <option>Any</option>
                            <optgroup label="Basic Genres">
                                <option>Comedy</option>
                                <option>Drama</option>
                                <option>School Life</option>
                                <option>Shounen</option>
                                <option >Romance</option>   
                            </optgroup>
                            <optgroup label="More Genres">
                                <option>Genre 1</option>
                                <option>Genre 2</option>
                                <option>Genre 3</option>
                            </optgroup>
                        </select>
                        <label htmlFor="cateogry-select">Displaying Mangas Based On Categories</label>
                    </div>
                </form>
            </div>
        )
    }

    renderHeader(){
        let data = (
            <div className="row">
                <div className="col s12">
                    <h3>mangas categories <NavLink to="/image list" className="badge-button">view more </NavLink> </h3>
                    <div className="divider"></div>
                </div>
            </div>
        );
        return data;
    }
}

export default MangaCategories;