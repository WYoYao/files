import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Menus from '../menus/index';

export default connect(
    ({routing})=>{

        return {
            pathname:'home'
        }
    }
    ,
    null
)(
    ({pathname}) => <Menus>
        <p>Home</p>
        <p>当前页为:{pathname}</p>
        <p><Link to="/home">Home</Link></p>
        <p><Link to="/about">About</Link></p>
    </Menus>
)


