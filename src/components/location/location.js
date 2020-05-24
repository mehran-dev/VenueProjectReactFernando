import React from 'react';
import color from '@material-ui/core/colors/amber';

const location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12969.033826127506!2d51.39832887888375!3d35.64600335719809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f91fe31a44e2e95%3A0x1a66f1c231c17fcc!2z2YXYsdqp2LIg2KLZhdmI2LLYtCDZgdmG24wg2Ygg2K3YsdmB2Ycg2KfbjCDYtNmF2KfYsdmHINu1INi02YfbjNivINmF2LHZiNiq24w!5e0!3m2!1sen!2s!4v1581594768372!5m2!1sen!2s"
                width="100%"
                height="450px"
                frameborder="0"
                allowFullScreen="">

            </iframe>
<div className="location_tag">
<div 
style={{
    opacity:0.6,
    backgroundColor:"#eee",
    color:"black"
}}  >
    Location
    </div>
</div>


        </div>
    );
};

export default location;