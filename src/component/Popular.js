import React from 'react';
import '../css/popular.css';
import '../css/carousal.css';
import Blue from '../testVideo/blue.mp4';
import Red from '../testVideo/red.mp4';
import Yellow from '../testVideo/yellow.mp4';

export class Popular extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
          <div class="popular">
            <div class="popular-header">
                <span> POPULAR VIDEOS </span>
            </div>
            <div className="popular-Video">
                <div className="Video">
                    <video className="videoInsert" src={Blue} autoPlay loop>
                    </video> 
                </div>
                <div className="Video">
                    <video className="videoInsert" src={Yellow} autoPlay loop>
                    </video> 
                </div>
                <div className="Video">
                    <video className="videoInsert" src={Red} autoPlay loop>
                    </video> 
                </div>
            </div>
          </div>
        );
    }

}