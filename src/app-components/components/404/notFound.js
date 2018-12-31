
import React from 'react';

class NotFound extends React.Component{
    render(){
        return(
            <div className="full-page-container">
                <div className="content">
                    <h3>oops! the page you are looking for is not found</h3>
                    <a href="#!" className="btn-large btn-secondary waves-effect">go back to homepage</a>
                </div>
            </div>
        )
    }
}

export default NotFound;