import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter } from 'dva/router';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import AppSwitch from './routes/AppSwitch'
import Home from './routes/Home/Home';
import Ask from './routes/Home/Ask';
import Read from './routes/Home/Read';
import About from './routes/Intro/About';

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
    path: '/home/ask',
    component: Ask,
}, {
    name: 'read',
    path: '/home/read',
    component: Read,
}, {
    name: 'about',
    path: '/intro/about',
    component: About
}]

// const RouterRoot = withRouter(_.flow()(Root));

export default (props) => {
    return (
        <BrowserRouter basename='/'>
            <Switch>
                <Route path="/" exact component={Home} />
                <AppSwitch route={routes}>
                    {routes.map(item => (<Route key={item.path} path={item.path} exact component={item.component} />))}
                </AppSwitch>
            </Switch>
        </BrowserRouter>
    )
}