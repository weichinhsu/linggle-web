import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'dva';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListOl, faFileAlt, faEdit, faSpellCheck, faLanguage } from '@fortawesome/free-solid-svg-icons'
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

  componentDidMount() {
    const location = this.props.pathname.replace("/intro/", "")
    if(location !== 'about')
      this.setState({ scroll: 'navbar-scrolled' });
    else
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { children } = this.props
    const location = this.props.pathname.replace("/intro/", "")
    return (
      <div >
        <nav className={"navbar navbar-expand-lg navbar-light fixed-top py-3 " + this.state.scroll} id="mainNav">
          <div className="container">
            <Link className="navbar-brand js-scroll-trigger logo" to="/">
              <div>Linggle</div>
            </Link>
            {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">Linggle</a> */}
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <div class="dropdown">
                  <li className="nav-item" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a></li>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Mission</a>
                    <a class="dropdown-item" href="#">Story</a>
                    <a class="dropdown-item" href="#">Lab</a>
                    <a class="dropdown-item" href="#">Projects</a>
                  </div>
                </div>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">News</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Media</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Blog</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="https://www.facebook.com/Lingglebynlplab" target="_blank"><i class="fab fa-facebook-square"></i></a>
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