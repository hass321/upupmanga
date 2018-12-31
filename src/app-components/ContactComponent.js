
import React from 'react';
import Nav from './components/global/nav';
import Header from './components/global/header';
import Form from './components/contact/form';
import Footer from './components/global/footer';
import M from 'materialize-css';
import $ from 'jquery';
import UpupGirl from './components/global/upupgirl';
import Girl from './components/global/girl';
import BackTop from './components/global/backTop';
import SearchModal from './components/global/searchModal';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Nav activeLink="contact"/>
                <Header text="get in touch with us"/>
                <Form />
                <Footer />
                <UpupGirl />
                <Girl />
                <BackTop />
                <SearchModal />
            </div>
        );
    }
    
    componentDidMount(){

        //JQuery Initialization

        let select = document.querySelectorAll('select'),
        sidenav = document.querySelectorAll('.sidenav'),
        dropdown = document.querySelectorAll('.dropdown-trigger'),
        collapsible = document.querySelectorAll('.collapsible'),
        datepicker = document.querySelectorAll('.datepicker'),
        modal = document.querySelectorAll('.modal');
    

        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Dropdown.init(dropdown,{coverTrigger : false});
        M.Collapsible.init(collapsible);
        M.Datepicker.init(datepicker);
        M.Modal.init(modal);
        
        $('#back-top').each(function(){
            $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false; 
            });
        });


    }
    
}

export default App;
