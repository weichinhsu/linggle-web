import React, { Component } from 'react';
// import { Switch } from 'dva/router';
import { Switch } from "react-router-dom";

import SearchLayout from '../layouts/SearchLayout';
import IntroLayout from '../layouts/IntroLayout';

class AppSwitch extends Component {
  render() {
    const { children, location } = this.props;
    const { pathname } = location;

    if (pathname.indexOf('/home') === 0) {
      return (<SearchLayout pathname={pathname} ><Switch>{children}</Switch></SearchLayout>)
    } else if (pathname.indexOf('/intro') === 0) {
      return (<IntroLayout pathname={pathname} ><Switch>{children}</Switch></IntroLayout>)
    } else {
      return (<Switch>{children}</Switch>)
    }
  }
}

export default AppSwitch;
