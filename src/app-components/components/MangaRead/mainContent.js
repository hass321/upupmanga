
import React from 'react';

class MainContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            carouselImages : [""]
        }
    }

    render(){
        return(
            <div className="container-fluid manga-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col l8 s12">
                            <div className="row">
                                <div className="col s12">
                                    {this.renderCarousel()}              
                                </div>
                            </div>
                        </div>
                        <div className="col l4 s12 manga-side-container">
                            <div className="row">
                                <div className="col s12">
                                    {/**use data-image-source for setting images */}
                                    <div id="manga-img"></div>
                                </div>
                                <div className="col s12">
                                    <h5>demo name of manga</h5>
                                    <h6>author name</h6>
                                    <div className="divider"></div>
                                </div>
                                <div className="col s12">
                                    <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ratione reiciendis, accusantium quo quaerat vitae iste incidunt ex voluptatibus tempora ad enim nisi numquam harum non quod corrupti aperiam cumque!
                                    </p>
                                    <div className="divider"></div>
                                </div>
                                <div className="col s12">
                                    <div className="col s6 no-padding-col">
                                        <span id="manga-views">23 views</span>
                                    </div>
                                    <div className="col s6 no-padding-col">
                                        <span id="manga-post-date">december 28 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    renderCarousel(){

        let temp = [];

        for(let i=0 ; i<this.state.carouselImages.length ; i++){
            temp.push(
                <a href="#!" key={i} className="carousel-item">
                    <div className="carousel-img-container" data-image-source={this.state.carouselImages[i]}></div>
                </a>
            )
        }

        return(
            <div className="carousel carousel-slider">
                {temp}
            </div>
        )
    }

    componentDidMount(){
        
        let imageElems = document.getElementsByClassName('carousel-img-container');

        Array.prototype.forEach.call(imageElems,elem => {
            elem.setAttribute('style',`background-image:url('${elem.getAttribute('data-image-source')}')`);
        });

    }

}

export default MainContent;