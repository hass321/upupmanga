
import React from 'react';
import Card from './card';

class MangasCard extends React.Component{
    
    render(){
        return(
           <div className="container mangas-image-container card-main-container">
            <div className="row">
                {this.renderCards()}    
            </div>
           </div>
        )
    }

    renderCards(){
        let temp =[] ;
        for(let i=0; i<10 ; i++){
            temp.push(
                <div key = {i} className="col s12 l4">
                    <Card />
                </div>
            )
        }
        return temp;
    }
    
}

export default MangasCard;