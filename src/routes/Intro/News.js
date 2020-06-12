import React, { Component } from 'react'
import { connect } from 'dva';
import './Intro.css'
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Carousel, Divider } from 'antd';
import lab from '../../assets/intro/lab.png'
import mission from '../../assets/intro/mission.png'
import project from '../../assets/intro/projects.png'
import story from '../../assets/intro/search-knowledge.png'

const { Meta } = Card;
class News extends Component {
  handleScroll = () => {
    if (window.pageYOffset > 100)
      this.props.dispatch({ type: 'global/SET_scroll', payload:'navbar-scrolled' });
    else
      this.props.dispatch({ type: 'global/SET_scroll', payload:'' });
  }

  componentDidMount(){
    this.props.dispatch({ type: 'global/SET_scroll', payload:'' });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.props.dispatch({ type: 'global/SET_scroll', payload:'navbar-scrolled' });
  }
  render() {
    return (
      <div className="news" >
        <Carousel autoplay>
          <div>
            <img src={mission} />
            <h3>1</h3>
          </div>
          <div>
            <img src={lab} />
            <h3>2</h3>
          </div>
          <div>
            <img src={mission} />

            <h3>3</h3>
          </div>
          <div>
            <img src={mission} />

            <h3>4</h3>
          </div>
        </Carousel>
        <Divider/>
        <MultiCarousel additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          // centerMode={false}
          className="carousel"
          containerClass="container-with-dots"
          dotListClass=""
          itemClass="carousel-item"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          centerMode
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={lab} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={mission} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={project} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={story} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={project} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </MultiCarousel>
      </div>
    )
  }
}

export default connect()(News)