
import React from 'react';
import Cards from './cards';

class Upupgirl extends React.Component{
    
    render(){
        return this.modal();
    }

    modal(){
        return(
            <div id="upup-modal" className="modal">
                <div className="modal-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col l8">
                                <h3>popular mangas</h3>
                                <div className="divider"></div>
                            </div>
                            <div className="col l4">
                                <form>
                                    <div className="input-field col s12">
                                        <select id="upup-modal-cateogry-select">
                                            <option defaultValue>Today</option>
                                            <option>All Time</option>
                                            <option>Past Week</option>
                                            <option>Past Month</option>
                                            <option>Past Year</option>
                                        </select>
                                        <label htmlFor="upup-modal-cateogry-select">Filter Popular Mangas</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row card-main-container">
                            {this.getCards()}
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect btn-flat">close</a>
                </div>
            </div>
        )
    }

    getCards(){
        
        let elems = [];

        for(let i=0 ;i<10 ; i++){
            elems.push(
                <div key= {i} className="col m6 l4 xl4">
                    <Cards />
                </div>
            )
        }

        return elems;

    }

}

export default Upupgirl;