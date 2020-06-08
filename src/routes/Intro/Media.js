import React, { Component } from 'react'
import { connect } from 'dva';
import './Intro.css'

class Media extends Component {

  render() {
    return (
      <div className="">
        <section class="bg-primary" id="project">
          <div className="left">
          </div>
          <div className="right">
            <h3 class="text-uppercase text-white font-weight-bold">Projects</h3>
            <p>
              Cool English – An Online English Learning Platform
              Taiwan’s Ministry of Education
              Department of English, National Taiwan Normal University
            </p>
            <p>
              Proactive Outstanding Academic Research Program
              Taiwan’s Ministry of Science and Technology
            </p>
            <p>
              CANDLE Project (Corpora And NLP for Digital Learning of English)
              National Tsing-Hua University, Taiwan
            </p>
            <p>
              NTHU Competitive Outstanding/Potential Research and Development Team Project
              Taiwan’s Ministry of Education
            </p>
            <p>
              AI Project –The Construction of A Concept-based Chinese Knowledge Base with Semantic Composition Capability  (in collaboration with Assistant Researh Fellow Prof. Wei-Yun Ma）
              Academia Sinica
            </p>
          </div>
        </section>
        <section class="bg-primary" id="project">
          <div className="left">
          </div>
          <div className="right">
            <h3 class="text-uppercase text-white font-weight-bold">Projects</h3>
            <p>
              Cool English – An Online English Learning Platform
              Taiwan’s Ministry of Education
              Department of English, National Taiwan Normal University
            </p>
            <p>
              Proactive Outstanding Academic Research Program
              Taiwan’s Ministry of Science and Technology
            </p>
            <p>
              CANDLE Project (Corpora And NLP for Digital Learning of English)
              National Tsing-Hua University, Taiwan
            </p>
            <p>
              NTHU Competitive Outstanding/Potential Research and Development Team Project
              Taiwan’s Ministry of Education
            </p>
            <p>
              AI Project –The Construction of A Concept-based Chinese Knowledge Base with Semantic Composition Capability  (in collaboration with Assistant Researh Fellow Prof. Wei-Yun Ma）
              Academia Sinica
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default connect()(Media)