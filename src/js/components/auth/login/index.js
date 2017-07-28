import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm';
import { google } from '../../../actions/HomeActions';
import '../../../../styles/index.css';
import FacebokButton from '../../commons/FacebookButton';
import GoogleButton from '../../commons/GoogleButton';

class UserLoginPage extends Component {

  render() {
    return (
      <div className="container center">
        <h4 className="header col s12 light">Manage and listen to your favourites songs</h4>
        <h5>Getting Started</h5>
        <br/><br/>
        <div className="row center">
          <LoginForm />
        </div>
        OR
        <div className="row">
          <div className="col s3 center">
          
          </div>
          <div className="col s3">
            <FacebokButton />
          </div>
          <div className="col s3">
            <GoogleButton />
          </div>
          <div className="col s3 center">
            
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    google: bindActionCreators(google, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(UserLoginPage);
