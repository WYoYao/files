import React from 'react';

import {connect} from 'react-redux';
import { Link } from 'react-router';

export default connect(
    ({routing})=>{

        return {
            pathname:routing.locationBeforeTransitions.pathname
        }
    }
    ,
    null
)(
    ({pathname}) => <div>
        <p>Home</p>
        <p>当前页为:{pathname}</p>
        <p><Link to="/home">Home</Link></p>
        <p><Link to="/about">About</Link></p>
    </div>
)


