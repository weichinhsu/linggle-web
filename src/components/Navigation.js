import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Button extends Component {
    render() {
        const { icon, name, active } = this.props
        return <Link className={active ? 'active' : null} to={'/home/'+name.toLowerCase()}>
            {icon ? <FontAwesomeIcon icon={icon} className="feature-icon" /> : null}
            {name ? name : null}
        </Link>
    }
}

export default Button