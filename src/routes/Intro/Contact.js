import React, { Component } from 'react'
import { connect } from 'dva';
import './Intro.css'
class Contact extends Component {
  render() {
    return (
      <section class="bg-primary" id="contact">
        <div className="left">
        </div>
        <div className="right">
          <h3 class="text-uppercase text-white font-weight-bold">NTHU nlplab</h3>
          <p>
            Department of Computer Science
            National Tsing Hua University
            101 Kuangfu Road, Sec. 2
            Hsinchu 30043
            TAIWAN
            </p>
          <h6 class="text-uppercase text-white font-weight-bold">
            For educational programs, projects or collaborations, please email:
          </h6>
          <p>
            info@linggle.com
          </p>
          <h6 class="text-uppercase text-white font-weight-bold">
            For PR press, media, communications related inquiries, please email:
          </h6>
          <p>
            alice@linggle.com
          </p>
          <h6 class="text-uppercase text-white font-weight-bold">
            For all other inquiries, please email:
          </h6>
          <p>
            info@linggle.com
          </p>
        </div>
      </section>
    )
  }
}

export default connect()(Contact)