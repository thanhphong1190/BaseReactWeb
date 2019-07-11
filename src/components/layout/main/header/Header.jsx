import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"
import "./Header.css"
import LogoImgUrl from "../../../../assets/images/kfc.png"
import ShipImgUrl from '../../../../assets/images/kfc_ship.PNG'

class AppHeader extends Component {
  constructor(props) {
    super(props);
    // const _loggedInUser = SessionHelper.getUser();
    this.state = {
    };
  }
  render() {
    return (
      <div className="Header">
        <Row>
          <Col xs="12">
            <Row className="d-flex align-items-center justify-content-between HeaderContainer">
              <div className="AppLogo">
                  <img src="https://www.wslogos.com/wp-content/uploads/2019/02/good-kfc-logo-mcdonalds-jollibee-restaurant-kfc-bucket-png-download-this-week.jpg"/>
              </div>
              <h5>Ứng dụng mẫu</h5>
              <div className="d-flex ActionContainer">
                <span className="AppActionItem">Đăng nhập</span>
                <span className="AppActionItem">Đăng ký</span>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppHeader;