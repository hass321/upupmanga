import React from 'react';
import MaterialIcon from '../materialicon';

class SideNav extends React.Component{
    render(){
        return(
            <ul className="sidenav" id="mobile-demo">
                {this.listItems()}
            </ul>
        )
    }

    listItems(){
        let temp = [] , i;

        for(i=0 ;i<this.props.text.length ; i++){
            
            if(i !== 1){
                if(this.props.active === this.props.text[i]){
                    temp.push(
                        <li key={i}>
                            <a href="#!" className="active">
                                {this.props.text[i]}
                            </a>
                        </li>
                    )
                }
                else{
                    temp.push(
                        <li key={i}>
                            <a href="#!">
                                {this.props.text[i]}
                            </a>
                        </li>
                    )
                }
            }
            else{
                temp.push(
                    <li key={i}>
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header">
                                    {this.props.text[i]}
                                    <MaterialIcon iconName="arrow_drop_down"/>
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li><a href="#!">text list</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#!">image list</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                );
            }

            

        }

        /*last one i.e. search link*/
        temp.push(
            <li key={5}>
                <a href="#search-modal" className="modal-trigger">search</a>
            </li>
        );

        return temp;
    }
}

export default SideNav;