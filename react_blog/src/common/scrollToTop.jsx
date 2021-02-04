import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

class ScrollToTop extends Component {
    static propTypes = {
        location:PropTypes.any,
        children:PropTypes.any
        }; 
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
        }
    }
 
    render() {
        return this.props.children
        // return 1
    }
}
export default withRouter(ScrollToTop);


