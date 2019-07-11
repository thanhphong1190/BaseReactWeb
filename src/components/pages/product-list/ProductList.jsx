import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LOADING_PRODUCTS } from "../../../actions/product.action"
import ProductItem from "../../common/product-item/ProductItem";
import Loading from "../../common/loading/Loading";
import './ProductList.css';

class ProductList extends Component {
  render() {
    const { loading, fulfilled, failed, error, productData } = this.props.products;
    return (
      <div className="ProductList">
        {
          (fulfilled && productData) && productData.map((item, index) => {
            return (
              <ProductItem key={index} product={item} />
            )
          }
          )
        }
        {
          loading && <Loading/>
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.getProducts();
  }

}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch({ type: LOADING_PRODUCTS });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
