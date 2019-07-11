import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'reactstrap';
import "./ProductDetailPopup.css";
import { TOGGLE_PRODUCT_DETAIL } from "../../../actions/product.action";

class ProductDetailPopup extends Component {
    render() {
        const { toggleProdDetail } = this.props.prodDetail;
        return (
            <Modal
                show={toggleProdDetail}
                backdrop="static"
                container={this}
                className="ProductDetailPopup"
            >
                <Modal.Header>
                    <div className="ModalHeader">
                        <span className="Title">Product Detail</span>
                        <i className="Close fa fa-times"
                            aria-hidden="true"
                            onClick={this.handleHide.bind(this)}
                        />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <span>123</span>
                </Modal.Body>
            </Modal>
        )
    }
    handleHide() {
        this.props.hideProdDetail();
    }
}

const mapStateToProps = state => {
    return {
        prodDetail: state.productDetail
    };
};
const mapDispatchToProps = dispatch => {
    return {
        hideProdDetail: () => dispatch({ type: TOGGLE_PRODUCT_DETAIL, toggleProdDetail: false })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPopup);
