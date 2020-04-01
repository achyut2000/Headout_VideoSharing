import React from 'react';
import '../css/carousal.css';

export class Carousal extends React.Component{

    constructor(props){
        super(props);
        this.startVideo = this.startVideo.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
    }


    startVideo = (e)=>{
        e.target.play();
    }

    stopVideo = (e) =>{
        e.target.pause();
        e.target.currentTime = 0;
    }

    render(){
        return(
          <div class="carousel">
            <div class="carousel-header">
                <span> EXPLORE </span>
            </div>
            <div class="carousel-wrapper">
                 <div class="item">
                    <video class="videoInsert">
                        <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                    </video>
                 </div>
                <div class="item active">
                <video class="videoInsert" onMouseEnter={this.startVideo} onMouseOut={this.stopVideo}>
                        <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="item">
                <video class="videoInsert">
                        <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
          </div>
        );
    }

}