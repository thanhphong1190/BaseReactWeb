import React, { Component } from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import './Intro.css';

class ItemOne extends Component {
  render() {
    return (
      <div className="d-flex flex-column Home">
        <div className="HomeOptionsContainer">
          <span>Tạo mới</span>
        </div>
      </div>
    );
  }
}

export default ItemOne;
