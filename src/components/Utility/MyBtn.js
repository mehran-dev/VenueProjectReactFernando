import React from 'react';
import Button from '@material-ui/core/Button';
import icon_ticket from '../../resources/images/icons/ticket.png';

const MyBtn = (props) => {
    return (

<Button
href={props.link?props.link:"#"}
variant="contained"
size="small"
style={{
    backgroundColor: props.bck?props.bck:'red',
    color:props.color?props.color:"white"
}}
>
<img src={icon_ticket} className="iconImage" alt="icon_button"/>
{props.text}
</Button>

    );
};

export default MyBtn;