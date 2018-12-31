
import React from 'react';
import Nav from './components/global/nav';
import Header from './components/global/header';
import Footer from './components/global/footer';
import Form from './components/login/form';
import M from 'materialize-css';
import $ from 'jquery';
import UpupGirl from './components/global/upupgirl';
import Girl from './components/global/girl';
import BackTop from './components/global/backTop';
import SearchModal from './components/global/searchModal';
import ForgetPasswordModal from './components/login/forgetPasswordModal';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Nav activeLink="login"/>
                <Header text="login to your account"/>
                <ForgetPasswordModal />
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
        modal = document.querySelectorAll('.modal'),
        tabs = document.querySelectorAll('.tabs');
    

        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Dropdown.init(dropdown,{coverTrigger : false});
        M.Collapsible.init(collapsible);
        M.Datepicker.init(datepicker);
        M.Modal.init(modal);
        M.Tabs.init(tabs);

        $('#back-top').each(function(){
            $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false; 
            });
        });


    }
    
}

export default App;
