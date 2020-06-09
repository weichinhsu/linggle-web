import React, { Component } from 'react';
// import { Route, Switch, BrowserRouter } from 'dva/router';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import AppSwitch from './routes/AppSwitch'
import Home from './routes/Home/Home';
import Ask from './routes/Home/Ask';
import Read from './routes/Home/Read';
import Write from './routes/Home/Write';
import About from './routes/Intro/About';
import Media from './routes/Intro/Media';
import News from './routes/Intro/News';

const routes = [{
    name: 'ask',
    path: '/home/ask',
    component: Ask,
}, {
    name: 'read',
    path: '/home/read',
    component: Read,
}, {
    name: 'write',
    path: '/home/write',
    component: Write,
}, {
    name: 'about',
    path: '/intro/about',
    component: About
}, {
    name: 'media',
    path: '/intro/media',
    component: Media
}, {
    name: 'news',
    path: '/intro/news',
    component: News
}]

export default (props) => {
    return (
        <BrowserRouter basename='/'>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <AppSwitch>
                    {routes.map(item => (<Route key={item.path} path={item.path} exact component={item.component} />))}
                </AppSwitch> */}
            </Switch>
        </BrowserRouter>
    )
}