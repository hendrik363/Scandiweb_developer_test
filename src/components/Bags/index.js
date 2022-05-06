import React from "react";
import './styles.scss';
import { connect } from "react-redux";
import { fetchBags } from "../../redux/Bags/bags.actions";
import { getBagsError, getBags, getBagsPending } from "../../redux/Bags/bags.reducer";
import { bindActionCreators } from "redux";
import Bag from "./Bag";
import "./styles.scss";

class Bags extends React.Component {

    componentDidMount() {
        const { fetchBags } = this.props;
        fetchBags();
    }

    shouldComponentRender() {
        const { pending } = this.props;
        return pending;
    }

    displayProducts() {
        const { bags } = this.props;
        //console.log("BAGS: " + JSON.stringify(bags));
        if (this.shouldComponentRender()) {
            return(
                <div>
                    <h1>loading...</h1>
                </div>
            );
        } else {
            return bags.map((product) => {
                const productName = product.name;
                const configBag= {
                    product
                };
                return <Bag {...configBag} key={productName} />
            });
        }
    }

    render() {
        return(
            <div className="bags">
                <h1>Browse Bags</h1>
                <div className="productresults">
                    {this.displayProducts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: getBagsError(state.bagData),
    bags: getBags(state.bagData),
    pending: getBagsPending(state.bagData)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchBags: fetchBags,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Bags);