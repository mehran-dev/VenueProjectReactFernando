import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Slider from 'react-slick';

export default class TimeUntile extends Component {
    state = {
        deadline: 'Dec, 26, 2025',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline) {

        const time = Date.parse(deadline) - Date.parse(new Date());
        // console.log(time);

        if (time < 0) {
            //datePast
        } else {
            const sec = Math.floor((time / 1000) % 60);
            const min = Math.floor((time / 1000 / 60) % 60);
            const h = Math.floor((time / (1000 * 60 * 60)) % 24);
            const d = Math.floor(time / (1000 * 60 * 60 * 24));

            this.setState({
                days: d,
                minutes: min,
                hours: h,
                seconds: sec

            });

        }


    }

    componentDidMount() {
        setInterval(() => {
            this.getTimeUntil(this.state.deadline)
        }, 1000);
    }


    render() {
        return (
            <Slide left delay={1000}>


                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Events Starts In
                </div>

                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                        </div>
                            <div className="countdown_tag">
                                Days
                        </div>
                        </div>{/* countdown_item */}


                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                        </div>
                            <div className="countdown_tag">
                                Hours
                        </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                        </div>
                            <div className="countdown_tag">
                                Minute
                        </div>
                        </div>


                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                        </div>
                            <div className="countdown_tag">
                                Second
                        </div>
                        </div>

                    </div>{/* buttom */}
                </div>
            </Slide>
        )
    }
}
