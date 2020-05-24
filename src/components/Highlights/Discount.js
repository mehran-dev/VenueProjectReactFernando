import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyBtn from '../Utility/MyBtn';

export default class Discount extends Component {

    state = {
        disStart: 0,
        disEnd: 30
    }

    porcentage = () => {
        if (this.state.disStart < this.state.disEnd) {

            this.setState({
                disStart: this.state.disStart + 1
            });

        } else {

        }

    }



    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        }, 30);
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={() => { this.porcentage() }}
                    >
                        <div className="discount_porcentage ">
                            <span>{this.state.disStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3> Purchase ticket before 20th June </h3>
                            <p>  Seasonal, local produce is served in the Lightermans Restaurant. A casual lunch and dinner menu is available in the Inn, which specializes in steaks and fish dishes. Riverside views can be enjoyed with a hot drink in the Vue conservatory, which leads out to the terrace. An indoor pool, sauna and fitness center are available at the hotel.</p>
                            <MyBtn 
                            text ="Purchase Ticket"
                            bck="#ffa800"
                            color ="#fff"
                            link="#"
                            />
                        </div>
                    
                     </Slide>
                    
                </div>

            </div>
        )
    }
}
