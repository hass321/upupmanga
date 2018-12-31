import React from 'react';
import Cards from '../global/cards';

import { NavLink } from 'react-router-dom'


class LatestMangas extends React.Component{
    render(){
        return(
            <div className="latest-mangas-container">
                <div className="container card-main-container">
                    
                    <div className="row">
                        <div className="col s12">
                            <h3>latest mangas <NavLink to="/image list" className="badge-button">view more</NavLink> </h3>
                            <div className="divider"></div>
                        </div>
                    </div>

                    <div className="row">
                        {this.renderCard()}                        
                    </div>

                </div>
            </div>
        )
    }

    renderCard(){
        
        let elem = [];

        for(let i=0 ; i<8 ; i++){
            elem.push(
                <div key = {i} className="col s12 m6 l4 xl3">
                    <Cards/>
                </div>
            );
        }
        

        return elem;
    }

}

export default LatestMangas;