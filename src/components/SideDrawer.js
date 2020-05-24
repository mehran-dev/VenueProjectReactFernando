import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {

    const scrollToEl = (el) => {
        scroller.scrollTo(el, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -85
        })
        //این چه کدیه دیگه خخخخ
        props.onClose(false);
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >

            <ListItem button onClick={() => {
                scrollToEl('start');
            }}>
                Event Starts In...
</ListItem>

            <ListItem button onClick={() => {
                scrollToEl('nfo');
            }}>
                Venue NFO
</ListItem>

            <ListItem button onClick={() => {
                scrollToEl('highlight');
            }}>
                HighLights
</ListItem>

            <ListItem button onClick={() => {
                scrollToEl('price');
            }}>
                Price
</ListItem>

            <ListItem button onClick={() => {
                scrollToEl('location');
            }}>
                Location
</ListItem>

        </Drawer>


    )


};



export default SideDrawer;