import React, { Component } from 'react'
import { connect } from 'dva';
import './Intro.css'

class About extends Component {

  render() {
    return (
      <div className="">
        <header class="masthead" id="mission">
          <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
              <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase text-white font-weight-bold">Our mission</h1>
                <hr class="divider my-4" />
              </div>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 font-weight-light mb-5">
                  We aim to provide self-sufficient and smart language learning tools to those in need.
                </p>
              </div>
            </div>
          </div>
        </header>
        <section class="bg-primary" id="about">
          <div className="left">
          </div>
          <div className="right">
            <h3 class="text-uppercase text-white font-weight-bold">Our story</h3>
            <p>
              Linggle was first developed in 2008 as a linguistic search engine,
              by NLP laboratory (natural language processing) in National Tsing-Hua University in Hsinchu, Taiwan.
              It was one of the first computer-assisted language learning tools utilizing AI technologies such as data mining,
              machine learning, and natural language processing.
          </p>
            <p>
              Through diligent research efforts over the past decade,
              Linggle has developed into an integrated platform that offers comprehensive language learning tools assisting all aspects of reading, writing,
              grammar and error check, translation and word/phrase query.
              It won the 2nd and 5th prize of CoNLL (Conference on Natural Language Learning) Grammatical and Error Correction Competition in 2013 and 2014,
              and received honourable mention from the FITI program in 2015. Linggle had gained academic recognition internationally and was released to the public free of charge since 2016.
          </p>
          </div>
        </section>
        <section class="bg-primary" id="lab">
          <div className="left">
            <h3 class="text-uppercase text-white font-weight-bold">NLPlab NTHU Taiwan</h3>
            <p>
              Natural Language Processing lab was established in 1988 by Prof. Jason S. Chang.
            </p>
            <p>
              The lab had since been a leading pioneer in AI research and projects,
              including computer-assisted language learning, word alignment, information retrieval and machine translation.
              Their recent development of award-winning linguistic search engine Linggle has received public attention and awareness as language learning becomes popular through online education programs.
            </p>
          </div>
          <div className="right">

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

export default connect()(About)