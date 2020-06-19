import React, { Component } from 'react';

class Navbar extends Component {
    
    render() {
        const {count}=this.props.cart;
        return (
            <div>
               COUNT = {count}
            </div>
        );
    }
}

export default Navbar;