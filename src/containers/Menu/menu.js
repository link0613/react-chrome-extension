import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../Login/actions';

import auth from 'api/auth';

export class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    };

    handleSignOut = () => {
      auth.signOut();
    }

    render() {
        return (
            <div >

                <Drawer containerStyle={{backgroundColor: '#333439', color:'#ffffff'}} open={this.state.open}>

                    <MenuItem href="/apikey" style={{color:'#ddd'}}>
                        <i className="material-icons menu-icons">account_circle</i>
                        Generate App key
                    </MenuItem>

                    <MenuItem  href="/login" style={{color:'#ddd'}} onClick={this.handleSignOut}>
                        <i className="material-icons menu-icons">power_settings_new</i>
                        Log out
                    </MenuItem>

                </Drawer>
            </div>
        );
    };
}

export default connect(
  state => ({
    login: state.login,
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Menu);