import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'dva';
import { faListOl, faFileAlt, faEdit, faSpellCheck, faLanguage } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Navigation'
import SearchInput from '../components/SearchInput'
import './Layout.css'

class SearchLayout extends Component {
    
    render() {
        const { children, search, pathname } = this.props
        console.log(this.props)
        const location = pathname.replace("/home/", "")
        return (
            <div className="layout">
                <header>
                    <div className="head">
                        <Link to="/" className="logo">
                            <div>Linggle</div>
                        </Link>
                        <SearchInput value={search}/>
                        <button type="button" className="btn sign-in rounded-pill">Sign in</button>
                    </div>
                    <div className="menu">
                        <Button icon={faListOl} name="Ask" active={location === 'ask' ? true : false} />
                        <Button icon={faFileAlt} name="Read" active={location === 'read' ? true : false} />
                        <Button icon={faEdit} name="Write" active={location === 'write' ? true : false} />
                        <Button icon={faSpellCheck} name="Grammar" active={location === 'grammar' ? true : false} />
                        <Button icon={faLanguage} name="Translate" active={location === 'translate' ? true : false} />
                    </div>
                </header>
                <div className="container-fluid p-0 content">
                    {children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search.list ? state.search.list.query : null
    }
}

export default connect(mapStateToProps)(SearchLayout)