import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class MyHeader extends Component {

    render(){
        return(
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                     Best Recruitment Company
                    </Typography>
                </Toolbar>
            </AppBar>

        );
    }

}

export default MyHeader;