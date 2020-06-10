import React, { Component } from 'react'
import { connect } from 'dva';
import './Intro.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from 'antd';
import lab from '../../assets/intro/lab.png'
import mission from '../../assets/intro/mission.png'
import project from '../../assets/intro/projects.png'
import story from '../../assets/intro/search-knowledge.png'

const { Meta } = Card;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
class News extends Component {

  render() {
    return (
      <div className="news" >

        <Carousel additionalTransfrom={0}
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
            cover={<img alt="example" src={project}/>}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Carousel>
      </div>
    )
  }
}

export default connect()(News)