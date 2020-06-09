import React, { Component } from 'react'
import { connect } from 'dva';
import './Intro.css'
import { List, Avatar, Space } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `英文系最受歡迎的線上語料庫：用20個網站學習英文句型與詞彙搭配 / 廖柏森`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      '2020.05.10',
    content:
      '語料庫的大數據學習有別於傳統的英語學習方式，是國內英文相關系所相當推崇一種語言學習方式，使用者透過親自操作，可以更深入探索語言的變化，發現各種意想不到的詞彙組合變化，讓學習英文變成一場有趣的探險。另外，語料庫所蒐集的語料為英語母語人士在真實情境中使用的自然語言...',
  });
}

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
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />

      </div>
    )
  }
}

export default connect()(Media)