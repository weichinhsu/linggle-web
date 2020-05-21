import React, { Component } from 'react';
// import { Route, Switch, routerRedux, withRouter, Redirect } from 'dva/router';
import { HashRouter, Route, withRouter, Switch, Redirect, BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types';
// import _ from 'lodash';
import SearchLayout from './layouts/SearchLayout'
import Home from './routes/Home';
import Ask from './routes/Ask';
import Read from './routes/Read';

class Root extends Component {
    static propTypes = {
        app: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }
    render() {
        const { children } = this.props;
        return children;
    }
}

const routes = [{
    name: 'ask',
    path: '/ask',
    component: Ask,
}, {
    name: 'read',
    path: '/read',
    component: Read,
},
]

// const RouterRoot = withRouter(_.flow()(Root));

export default (props) => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Home} />
                <SearchLayout route={routes}>
                    <Switch>
                    {routes.map(item => (<Route key={item.path} path={item.path} exact component={item.component} />))}
                    </Switch>
                </SearchLayout>
            </Switch>
        </HashRouter>
    )
}