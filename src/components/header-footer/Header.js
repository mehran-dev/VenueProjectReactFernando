import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from '../SideDrawer'  ;//'../header-footer/SideDrawer';
//"E:\the venue\venue-project\src\components\SideDrwer.js"

class Header extends Component {

state ={
    drawerOpen:false,
    isTransparentHeader:true
}
toggleDrawer=(isOpen)=>{
this.setState({
    drawerOpen:isOpen
})

}

componentDidMount(){
    window.addEventListener('scroll',this.scrollHandler)
}

scrollHandler=()=>{
  //  console.log('scrolling ... ');
    this.setState({isTransparentHeader:!window.scrollY>0});

}



    render() {
        return (
            <div>
                <AppBar
                    position="fixed" style={{
                        backgroundColor: this.state.isTransparentHeader?'transparent':"#2f2f2f", boxShadow: 'none', padding: '10px 0'
                    }}
                >


                    <Toolbar>
                        <div className="header_logo">

                            <div className="font_righteous header_logo_venue">The Venue</div>
                            <div className="header_logo_title">Musical Event</div>
                        </div>
                        <IconButton
                            aria-label="menu"
                            color="inherit"
                            onClick={() => {
                                this.toggleDrawer(true);
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <SideDrawer
    open ={this.state.drawerOpen}
    onClose={(isOpen)=>{this.toggleDrawer(isOpen)}}
                        />
                    </Toolbar>

                </AppBar>
            </div>
        )
    }
}
export default Header;