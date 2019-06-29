import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Holder = styled.nav`

`;

class Navigation extends Component {
    render() {
        return (
            <Holder>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </Holder>
        )
    }
}

export default Navigation;