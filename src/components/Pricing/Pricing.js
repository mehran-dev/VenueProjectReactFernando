import React, { Component } from 'react'
import MyBtn from '../Utility/MyBtn';
import Zoom from 'react-reveal/Zoom';


export default class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Cheap and Economy ',
            'Best View And More Relaxibility',
            'The Royal One  For Empires !! '
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]

    }

    showBoxes = () => {
        return (

            this.state.prices.map((box, i) => {
                return (
                    <Zoom delay={this.state.delay[i]} key={i}>
                        <div className="pricing_item">
                            <div className="pricing_inner_wrapper">
                                <div className="pricing_title">
                                    <span>${this.state.prices[i]}</span>
                                    <span>{this.state.positions[i]}</span>
                                </div>
                                <div className="pricing_description">
                                    {this.state.desc[i]}
                                </div>
                                <div className="pricing_buttons">
                                    <MyBtn
                                        text="Purchase"
                                        bck="#ffa800"
                                        link={this.state.linkto[i]}
                                    />
                                </div>
                            </div>
                        </div>
                    </Zoom>
                )
            })
        );
    }

    render() {
        return (
            <div className="bck_black">
                <div className="center-wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}



                    </div>


                </div>
            </div>
        )
    }
}
