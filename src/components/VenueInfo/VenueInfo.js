import React from 'react';
import ico_calendar from '../../resources/images/icons/calendar.png';
import ico_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon"
                                        style={{
                                            background: `url(${ico_calendar})`
                                        }}></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                </div>
                                    <div className="vn_desc">
                                        21 Dec 2025 @10.00pm
                                </div>


                                </div>
                            </div>
                        </div>
                    </Zoom>



                    {/* /////////////////////////////////////////////////////////////////// */}

                    <Zoom delay={500} duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon"
                                        style={{
                                            background: `url(${ico_location})`
                                        }}></div>
                                    <div className="vn_title">
                                        Event Location
                                </div>
                                    <div className="vn_desc">
                                        354 Speer Street Okland ,CA 9835
                                </div>


                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <div>

                    </div>

                </div>
            </div>




        </div>
    );
};

export default VenueInfo;