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
        <HashRouter basename='/'>
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

// export default (props) => {
//     return (
//         <ConnectedRouter history={props.history}>
//             <RouterRoot {...props} >
//                 <Switch >
//                 <Route path="/" exact render={ () => (< Redirect to='/news' />)}/> 
//                     <HomeLayout route={route} >
//                         <Switch >
//                             {
//                                 _.map(route, item => (<Route key={item.path} path={item.path} exact component={item.component} />))
//                             }
//                             <Route  component={News}/>)}/> 
//                         </Switch>
//                     </HomeLayout>
//                 </Switch>
//             </RouterRoot>
//         </ConnectedRouter>
//     )
// }