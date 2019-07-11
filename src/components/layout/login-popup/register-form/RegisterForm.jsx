import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RegisterForm.css';
import { REQUEST_REGISTER } from '../../../../actions/login.action';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      registerInfo: {
        phone: '',
        password: '',
        fullname: '',
        email: '',
        address: ''
      }
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="RegisterForm">
          <div className="FormRow">
            <input type="text" placeholder="Số điện thoại" name="phone" value={this.state.registerInfo.phone} onChange={this.handleInputChange.bind(this)} />
          </div>
          <div className="FormRow">
            <input type="password" placeholder="Mật khẩu" name="password" value={this.state.registerInfo.password} onChange={this.handleInputChange.bind(this)} />
          </div>
          <div className="FormRow">
            <input type="text" placeholder="Họ và tên" name="fullname" value={this.state.registerInfo.fullname} onChange={this.handleInputChange.bind(this)} />
          </div>
          <div className="FormRow">
            <input type="text" placeholder="Email" name="email" value={this.state.registerInfo.email} onChange={this.handleInputChange.bind(this)} />
          </div>
          <div className="FormRow">
            <input type="text" placeholder="Địa chỉ giao hàng" name="address" value={this.state.registerInfo.address} onChange={this.handleInputChange.bind(this)} />
          </div>
          <div className="FormRow">
            <input type="submit" value="Đăng Ký" />
          </div>
        </div>
      </form>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    let value = null;
    switch (target.type) {
      case 'checkbox': value = target.checked; break;
      case 'number': value = target.value ? parseInt(target.value) : 0; break;
      default: value = target.value;
    }
    const name = target.name;
    this.setState({
      registerInfo: Object.assign({}, this.state.registerInfo, {
        [name]: value
      })
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSumitRegister(Object.assign({}, this.state.registerInfo));
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSumitRegister: (registerInfo) => dispatch({type: REQUEST_REGISTER, registerInfo})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
