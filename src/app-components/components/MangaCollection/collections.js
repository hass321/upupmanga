import React from 'react';
import FontAwesomeIcons from '../global/fontAwesomeIcons';
import NewsLetter from '../global/newsLetter';

class Collections extends React.Component{


    render(){
        return(
            <div className="container mangas-text-collection-container">
                <div className="row">
                    <div className="col s12 l7">
                        <div className="row">
                            <div className="col s12">
                                <ul className="collection with-header">

                                    <li className="collection-header"><h4>a</h4></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>

                                    <li className="collection-header"><h4>b</h4></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>

                                    <li className="collection-header"><h4>c</h4></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>
                                    <li className="collection-item"><a href="#!">chapter name</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 l5 mangas-social-container">
                        <div className="row">
                            <div className="col s12">
                                <h4>social media</h4>
                                <div className="divider"></div>    
                            </div>
                            <div className="col s12" id="social-btn-container">
                                <a href="#!" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses = "fab fa-facebook-f" />
                                </a>
                                <a href="#!" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses = "fab fa-twitter" />
                                </a>
                                <a href="#!" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses = "fab fa-linkedin-in" />
                                </a>
                                <a href="#!" className="btn-floating social-btn btn-large">
                                    <FontAwesomeIcons iconClasses = "fas fa-rss" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h4>categories</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12">
                                <a href="#!" className="btn-badges">comedy</a>
                                <a href="#!" className="btn-badges">drama</a>
                                <a href="#!" className="btn-badges">romance</a>
                                <a href="#!" className="btn-badges">martial arts</a>
                                <a href="#!" className="btn-badges">drama</a>
                                <a href="#!" className="btn-badges">romance</a>
                                <a href="#!" className="btn-badges">comedy</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h4>newsletter</h4>
                                <div className="divider"></div>
                            </div>
                            <div className="col s12">
                                <NewsLetter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Collections;