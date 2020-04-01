import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import {NavBar} from './Navbar';
import '../css/landing.css';

class Landing extends React.Component{

    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

    render(){
        return(
            <div>
                <div class="page-header">
                    <div class="page-header-image">
                        <NavBar />
                        <div class="container">
                            <div class="row-item"></div>
                            <div class="row-item">Feel the Rush of Sharing </div>
                            <div class="row-item"></div>
                            <div class="row-item" style={{fontSize:"30px"}}>Share and View over Millions of thoughts and Videos</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Landing;