import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/journal">Journal</Link></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Nav);