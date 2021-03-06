import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import './index.css'
import "antd/dist/antd.css";
import search from './models/search';
import global from './models/global';
import introduce from './models/introduce';

const app = dva({ history: createHistory( ) });

app.model(search)
app.model(introduce)
app.model(global)
app.router(require('./router').default);
app.start('#root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
