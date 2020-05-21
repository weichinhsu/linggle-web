import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'dva';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListOl, faFileAlt, faEdit, faSpellCheck, faLanguage } from '@fortawesome/free-solid-svg-icons'
import './Layout.css'

class Button extends Component {
    render() {
        const { icon, name, active } = this.props
        return <Link className={active ? 'active' : null} to={name.toLowerCase()}>
            {icon ? <FontAwesomeIcon icon={icon} className="feature-icon" /> : null}
            {name ? name : null}
        </Link>
    }
}
class SearchLayout extends Component {
    render() {
        const { children } = this.props
        const location = this.props.location.pathname.replace("/", "")
        return (
            <div className="layout">
                <header>
                    <div className="head">
                        <Link to="/" className="logo">
                            <div>Linggle</div>
                        </Link>
                        <div className="border shadow px-3 py-1 mx-3 bg-white rounded-pill search">
                            <div className="input-group">
                                <div className="search-icon"></div>
                                <input type="text" id="search" className="dropdown form-control border-0 shadow-none ml-4 mr-4"
                                    placeholder="Search Linggle, or enter any text or URL" autoFocus data-reference="parent"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu" aria-labelledby="search">
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn sign-in rounded-pill">Sign in</button>
                    </div>
                    <div className="menu">
                        <Button icon={faListOl} name="Ask" active={location == 'ask' ? true : false} />
                        <Button icon={faFileAlt} name="Read" active={location == 'read' ? true : false} />
                        <Button icon={faEdit} name="Write" active={location == 'write' ? true : false} />
                        <Button icon={faSpellCheck} name="Grammar" active={location == 'grammar' ? true : false} />
                        <Button icon={faLanguage} name="Translate" active={location == 'translate' ? true : false} />
                    </div>
                </header>
                <div className="container-fluid p-0">
                    {children}
                </div>
            </div>
        )
    }
}

export default connect()(SearchLayout)