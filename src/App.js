
import React from 'react';
import Nav from './app-components/components/global/nav';
import Header from './app-components/components/global/header';
import Footer from './app-components/components/global/footer';
import M from 'materialize-css';
import $ from 'jquery';
import UpupGirl from './app-components/components/global/upupgirl';
import Girl from './app-components/components/global/girl';
import BackTop from './app-components/components/global/backTop';
import SearchModal from './app-components/components/global/searchModal';
import RegisterForm from './app-components/components/signup/form';

// RegistrationForm 
import AppRouter from './AppRouter/AppRouter';


class App extends React.Component{
    render(){
        return(
            <AppRouter />
        );
    }
    
    componentDidMount(){

        //JQuery Initialization

        let select = document.querySelectorAll('.select'),
        sidenav = document.querySelectorAll('.sidenav'),
        dropdown = document.querySelectorAll('.dropdown-trigger'),
        collapsible = document.querySelectorAll('.collapsible'),
        datepicker = document.querySelectorAll('.datepicker'),
        modal = document.querySelectorAll('.modal'),
        tabs = document.querySelectorAll('.tabs'),
        slider = document.querySelectorAll('.carousel');
    

        M.FormSelect.init(select);
        M.Sidenav.init(sidenav);
        M.Dropdown.init(dropdown,{coverTrigger : false});
        M.Collapsible.init(collapsible);
        M.Datepicker.init(datepicker);
        M.Modal.init(modal);
        M.Tabs.init(tabs);
        M.Carousel.init(slider,{fullWidth:true,indicators:true});

        $('#back-top').each(function(){
            $(this).click(function(){ 
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false; 
            });
        });


    }
    
}

export default App;