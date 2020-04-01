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
                        <div class="container" />
                    </div>
                </div>
            </div>
        )
    }

}

export default Landing;