import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './LoginPopup.css';
import { TOGGLE_LOGIN, SHOW_LOGIN_TAB, SHOW_REGISTER_TAB } from '../../../actions/login.action';
import LoginForm from './login-form/LoginForm';
import RegisterForm from './register-form/RegisterForm';

class LoginPopup extends Component {
  render() {
    const {showLoginTab, showRegisterTab, toggleLogin} = this.props.login;
    return (
      <Modal
        show={toggleLogin}
        backdrop="static"
        container={this}
        className="LoginPopup"
      >
        <Modal.Header>
          <div className="ModalHeader">
            <span className="Title">xác nhận tài khoản</span>
            <i className="Close fa fa-times"
              aria-hidden="true"
              onClick={this.handleHide.bind(this)}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          {
            showLoginTab && <LoginForm />
          }
          {
            showRegisterTab && <RegisterForm />
          }
        </Modal.Body>
        <Modal.Footer>
          <div className="LoginFooter">
            <div className={`LoginSection ${showLoginTab ? 'Actived' : ''}`} onClick={this.toggleTab.bind(this, true, false)}>Đăng Nhập</div>
            <div className={`LoginSection ${showRegisterTab ? 'Actived' : ''}`} onClick={this.toggleTab.bind(this, false, true)}>Đăng Ký</div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  handleHide() {
    this.props.hideLogin();
  }

  toggleTab (_showLoginTab, _showRegisterTab) {
    if (_showLoginTab) {
      this.props.showLoginTab();
    }
    if (_showRegisterTab) {
      this.props.showRegisterTab();
    }
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    hideLogin: () => dispatch({ type: TOGGLE_LOGIN, toggleLogin: false }),
    showLoginTab: () => dispatch({ type: SHOW_LOGIN_TAB }),
    showRegisterTab: () => dispatch({ type: SHOW_REGISTER_TAB })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
