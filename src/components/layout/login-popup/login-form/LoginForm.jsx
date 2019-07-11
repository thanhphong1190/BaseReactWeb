import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { REQUEST_LOGIN } from '../../../../actions/login.action';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      loginInfo: {
        phone: '',
        password: ''
      }
    }
  }
  render() {
    const formNotValid = (!this.state.loginInfo.phone || !this.state.loginInfo.password);
    const {loginSuccess, loginMessage, loginLoading} = this.props.login;
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="LoginForm">
          <div className="FormRow">
            <input type="text" placeholder="Số điện thoại" name="phone" value={this.state.loginInfo.phone} onChange={this.handleLoginInput.bind(this)} />
          </div>
          <div className="FormRow">
            <input type="password" placeholder="Mật khẩu" name="password" value={this.state.loginInfo.password} onChange={this.handleLoginInput.bind(this)} />
          </div>
          {
            (loginLoading === false && loginSuccess === false) && (
              <div className="FormRow">
                <span className="Error">{loginMessage}</span>
              </div>
            )
          }
          {
            loginLoading === true && (
              <div className="FormRow">
                <span className="Error">Cho xac thuc ...</span>
              </div>
            )
          }
          <div className="FormRow">
            <input
              type="submit"
              value="Đăng Nhập"
              disabled={formNotValid}
              style={{cursor: formNotValid ? 'not-allowed' : 'pointer'}}
               />
          </div>
        </div>
      </form>
    );
  }
  handleLoginInput(event) {
    const target = event.target;
    let value = null;
    switch (target.type) {
      case 'checkbox': value = target.checked; break;
      case 'number': value = target.value ? parseInt(target.value) : 0; break;
      default: value = target.value;
    }
    const name = target.name;
    this.setState({
      loginInfo: Object.assign({}, this.state.loginInfo, {
        [name]: value
      })
    })
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.onLogin(Object.assign({}, this.state.loginInfo));
  };
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogin: (loginInfo) => dispatch({type: REQUEST_LOGIN, loginInfo})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
