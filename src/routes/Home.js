import React, { Component } from 'react';
import { connect } from 'dva';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListOl, faFileAlt, faEdit, faSpellCheck, faLanguage, faBars } from '@fortawesome/free-solid-svg-icons'

class Button extends Component {
    render() {
        const { icon, name, click } = this.props
        console.log(click)
        return <div onClick={click}>
            {icon ? <FontAwesomeIcon icon={icon} className="feature-icon" /> : null}
            {name ? name : null}
        </div>
    }
}

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'search/GET_search',
            payload: 'discuss ?about the'
        });
    }
    render() {
        const { history } = this.props
        return (
            <div className="App">
                <header>
                    <button type="button" className="btn sign-in rounded-pill">Sign in</button>
                </header>
                <div className="App-content">
                    <div className="App-title">Linggle</div>
                    <div className="border shadow px-3 py-1 my-4 bg-white rounded-pill">
                        <div className="input-group">
                            <div className="search-icon"></div>
                            <input type="text" id="search" className="dropdown form-control border-0 shadow-none ml-4 mr-4"
                                placeholder="Search Linggle, or enter any text or URL" autoFocus data-reference="parent"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                            <div className="dropdown-menu" aria-labelledby="search">
                            </div>
                        </div>
                    </div>
                    <div className="App-feature">
                        <Button icon={faListOl} name="Ask" click={() => history.push('ask')} />
                        <Button icon={faFileAlt} name="Read" click={() => history.push('read')} />
                        <Button icon={faEdit} name="Write" click={() => history.push('write')} />
                        <Button icon={faSpellCheck} name="Grammar" click={() => history.push('grammar')} />
                        <Button icon={faLanguage} name="Translate" click={() => history.push('translate')} />
                    </div>
                </div>
                <footer>
                    <Button icon={faBars} />
                    <Button name="About" />
                    <Button name="How it works" />
                </footer>
            </div>
        );
    }
}

export default connect()(Home);
