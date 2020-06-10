import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'dva';
import './Layout.css'

class IntroLayout extends Component {
  state = {
    scroll: ''
  }

  handleScroll = () => {
    if (window.pageYOffset > 100)
      this.setState({ scroll: 'navbar-scrolled' });
    else
      this.setState({ scroll: '' });
  }

  // componentDidMount(){
  //   const location = this.props.pathname.replace("/intro/", "")
  //   if (location === 'about')
  //     window.addEventListener('scroll', this.handleScroll);
  // }

  // componentDidUpdate(prevProps) {
  //   const location = this.props.pathname.replace("/intro/", "")
  //   const pre_location = prevProps.pathname.replace("/intro/", "")
  //   console.log(location, pre_location)
  //   if (location !== 'about' && location !== pre_location)
  //     this.setState({ scroll: 'navbar-scrolled' });
  //   if (location === 'about' && location !== pre_location)
  //     window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   const location = this.props.pathname.replace("/intro/", "")
  //   if (location === 'about')
  //     window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    const { children } = this.props
    const location = this.props.pathname.replace("/intro/", "")
    return (
      <div >
        <nav className={"navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled" + this.state.scroll} id="mainNav">
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger logo" to="/">
              <div>Linggle</div>
            </Link>
            {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">Linggle</a> */}
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <div className="dropdown">
                  <li className="nav-item" id="dropdownMenuButton" data-toggle="dropdown">
                    <Link className="nav-link js-scroll-trigger" to="/intro/about">About</Link>
                  </li>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {/* <Link className="dropdown-item" to="/intro/about">Mission</Link>
                  <Link className="dropdown-item" to="/intro/about#about">Story</Link>
                  <Link className="dropdown-item" to="/intro/about#lab">Lab</Link>
                  <Link className="dropdown-item" to="/intro/about#project">Projects</Link> */}

                    <a className="dropdown-item" href="/intro/about#mission">Mission</a>
                    <a className="dropdown-item" href="/intro/about#about">Story</a>
                    <a className="dropdown-item" href="/intro/about#lab">Lab</a>
                    <a className="dropdown-item" href="/intro/about#project">Projects</a>
                  </div>
                </div>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/intro/news">News</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/intro/media">Media</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/intro/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/intro/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="https://www.facebook.com/Lingglebynlplab" target="_blank"><i className="fab fa-facebook-square"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div >
          {children}
        </div>
      </div>
    )
  }
}

export default connect()(IntroLayout)