import React, { Component } from 'react'
import { connect } from 'dva';
import './Intro.css'
import { List } from 'antd';
import data from '../../data/media'

class Media extends Component {

  render() {
    return (
      <div className="media">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={data}
          renderItem={(item,index) => (
            <List.Item
              key={index}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
              actions={[<a href={item.href}>{item.date}</a>]}
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.subtitle}
              />
              {item.description}
            </List.Item>
          )}
        />

      </div>
    )
  }
}

export default connect()(Media)