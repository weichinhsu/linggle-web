import React, { Component } from 'react'
import { connect } from 'dva';
import './Intro.css'

class About extends Component {
  handleScroll = () => {
    if (window.pageYOffset > 100)
      this.props.dispatch({ type: 'global/SET_scroll', payload: 'navbar-scrolled' });
    else
      this.props.dispatch({ type: 'global/SET_scroll', payload: '' });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.dispatch({
      type: 'introduce/GET_about',
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.props.dispatch({ type: 'global/SET_scroll', payload: 'navbar-scrolled' });
  }
  render() {
    const { about } = this.props
    return (
      about ? <Content about={about} /> : null
    )
  }
}

class Content extends Component {
  render() {
    const { about } = this.props
    console.log(about)
    return (
      <div className="">
        <header class="masthead" id="mission">
          <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
              <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase text-white font-weight-bold">{about[0].fields.title}</h1>
                <hr class="divider my-4" />
              </div>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 font-weight-light mb-5">
                  {about[0].fields.content}
                </p>
              </div>
            </div>
          </div>
        </header>
        <section class="bg-primary" id="about">
          <div className="left">
          </div>
          <div className="right">
            <h3 class="text-uppercase text-white font-weight-bold">{about[1].fields.title}</h3>
            <p>
            {about[1].fields.content}
          </p>
          </div>
        </section>
        <section class="bg-primary" id="lab">
          <div className="left">
            <h3 class="text-uppercase font-weight-bold">{about[2].fields.title}</h3>
            {about[2].fields.content}

          </div>
          <div className="right">

          </div>
        </section>
        <section class="bg-primary" id="project">
          <div className="left">
          </div>
          <div className="right">
            <h3 class="text-uppercase font-weight-bold">{about[3].fields.title}</h3>
            {about[3].fields.content}
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    about: state.introduce.about
  }
}

export default connect(mapStateToProps)(About)