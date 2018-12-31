import React from 'react';
import Cards from '../global/cards';
import SocialHandle from '../global/socialHandle';

class RecentMangas extends React.Component{
    render(){
        return(
            <div className="container-fluid recent-uploaded-mangas">
                <div className="container card-main-container">
                    <div className="row">
                        <div className="col s12 l7">
                            {this.renderHeader()}
                            {this.renderCards()}
                        </div>
                        <div className="col s12 l5">
                            <SocialHandle />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderCards(){

        //no of card....
        let elem =[] ;

        for(let i=0 ; i<4 ; i++){
            elem.push(
                <div key={i} className="col s12 m6">
                    <Cards />
                </div>
            )
        }

        return(
            <div className="row">
                {elem}
            </div>

        )
    }

    renderHeader(){
        return(
            <div className="row">
                <div className="col s12">
                    <h3>recent mangas <a href="#!" className="badge-button">view more </a>  </h3>
                    <div className="divider"></div>
                </div>
            </div>
        )
    }

}

export default RecentMangas;