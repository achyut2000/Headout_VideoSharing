import React from 'react';
import '../css/carousal.css';

export class Carousal extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="carousel-wrapper">
                <div class="carousel-header">
                    <span>EXPLORE</span>
                </div>
                 <div class="item">
                    <video class="videoInsert" controls>
                        <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                    </video>
                 </div>
                <div class="item active">
                <video class="videoInsert" controls>
                        <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="item">
                <video class="videoInsert" controls>
                        <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }

}