import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Typography, Row, Col, Card, Collapse, Image, Space, Dropdown, Carousel } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, HeartFilled } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const {Text, Link, Title} = Typography;
const {Panel} = Collapse;
// import Image from 'next/image'

import bg from '../public/images/banner.webp'
import { StoreProvier, useStore } from '../mobx/Context';
import {useObserver} from 'mobx-react'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const store = useStore();


  return useObserver(() => (
    <Layout className="layout">
      <Header style={{background: "white"}}>
        
      <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        
        <Menu.SubMenu key="SubMenu" title="Plan your trip" icon={<SettingOutlined />}>
          <Menu.Item key="two">
            Andamans Guide
          </Menu.Item>
          <Menu.Item key="three">
            How to reach
          </Menu.Item>
          <Menu.Item key="four">
            Best time to reach
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Contacts Us
        </Menu.Item>
      </Menu>
      </Header>
      <Content
        style={{
          paddingTop: "20px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "0 0 20px 40px"
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Andaman Tavel Guide</Breadcrumb.Item>
          <Breadcrumb.Item>Havelock</Breadcrumb.Item>
        </Breadcrumb>

        <div style={{backgroundImage: `url("${bg.src}")`, height: "400px", width: "100%"}}>
          <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
            <Title style={{color: "white", fontSize: "120px", fontFamily: "'Brush Script MT', cursive"}}>Havelock</Title>
          </Space>
          <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
            <Title style={{color: "white", fontSize: "30px", fontFamily: "'Brush Script MT', cursive"}}>Travel Guide - Top Things to Do & See, Hotel & Resorts, Restaurants & Cafe and more</Title>
          </Space>
          
          
        </div>
        {/* <Image src={bg.src} preview={false} style={{position: "relative"}}></Image>
        <div className="overlay">
          <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
            <Title>Havelock</Title>
          </Space>
        </div> */}
        
        <div
          className="site-layout-content"
          style={{
            padding: "50px",
            background: "#f5f5f5",
          }}
        >
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row" span={16}>
                {
                  store.paraCards.map((block, i) => {
                    return (
                      <div key={i}>
                        <Title level={2}>{block.title}</Title>
                        <Card style={{ width: "100%" }}>
                          {
                            block.content.map((para, j) => {
                              return (
                                <div key={j} style={{marginBottom: "10px"}}>
                                  <Text>{para}</Text>
                                </div>
                              )
                            })
                          }
                        </Card>
                      </div>
                    )
                  })
                }
                {
                  store.bulletCards.map((block, i) => {
                    return (
                      <div key={i}>
                        <Title level={2}>{block.title}</Title>
                        <Card style={{width: "100%"}}>
                          {
                            block.content.map((para, j) => {
                              return (
                                <div key={j}>
                                  <Text>{para}</Text>
                                  <br/><br/>
                                </div>
                              )
                            })
                          }
                          {
                            block.subheadings.map((sub, j) => {
                              return (
                                <div key={j}>
                                  <Title level={4}>{j+1}. {sub.title}:</Title>
                                  <Text>{sub.content}</Text>
                                </div>
                              )
                            })
                          }
                        </Card>
                      </div>
                    )
                  })
                }

                <Title level={2}>Directorate of Shipping Services</Title>
                <Card style={{width: "100%"}}>
                  <Text strong>Government-run boats are the lifeline for locals of Andaman.</Text>
                  <Text>They connect almost all islands in the Andaman Islands (including the Nicobar group of islands). Bookings can only be made from the counters mentioned below.</Text>
                  <ul>
                    <li><Text type='warning' strong>Port Blair</Text> - <Text>Phoenix Bay Jetty & Common Service Centers located around the town</Text></li>
                    <li><Text type='warning' strong>Havelock Island</Text> - <Text>Havelock Jetty</Text></li>
                    <li><Text type='warning' strong>Neil Island</Text> - <Text>Neil Jetty</Text></li>
                  </ul>
                </Card>


                <Title level={2}>Top things to do in Swaraj Dweep (Havelock)</Title>
                {
                  <Card style={{width: "100%"}}>
                    <Text>{store.thingsToDo.content}</Text>
                    {
                      store.thingsToDo.things.map((thing, i) => {
                        return (
                          <div key={i}>
                            <Title level={4}>{i+1}. <Link type='success'>{thing.title}</Link></Title>
                            <Image width={"100%"} src={thing.image} />
                            <br/><br/>
                            <Text>{thing.content}</Text>
                          </div>
                        )
                      })
                    }
                  </Card>
                }

                <Title level={2}>FAQS about Havelock</Title>
                <Collapse defaultActiveKey={['0']}>
                  {
                    store.faqs.map((block, i) => {
                      return (
                        <Panel header={block.title} key={i}>
                          <p>{block.content}</p>
                        </Panel>
                      )
                    })
                  }
                  
              </Collapse>
                
            </Col>
            <Col className="gutter-row" span={8}>
              <Card style={{width: "100%"}}>
                {
                  store.rightLinks.map((block, i) => {
                    return (
                      <div key={i}>
                        <Title type='success' level={3}>{block.title}</Title>
                        <ul>
                          {
                            block.bullets.map((bullet, j) => {
                              return (
                                <li key={j}><Link type='success'>{bullet}</Link></li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )

                  })
                }
              </Card>
            </Col>
          </Row>
          
        </div>
        <Card style={{width: "100%"}}>
          <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
              <Title level={3}>We Care.</Title>
          </Space>
          <div style={{padding: "30px"}}>
            <Row
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}
              >
                <Col className="gutter-row" span={4}></Col>
                {
                  store.careCards.map((block, i) => {
                    return (
                      <Col className="gutter-row" span={4} key={i}>
                        <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                        <Image width={"100%"} preview={false} src={block.image}/>
                      </Space>
                        
                        <Title level={4}>{block.title}</Title>
                        <Text>{block.content}</Text>
                      </Col>
                    )
                  })
                }
                <Col className="gutter-row" span={4}>
                  
                </Col>

            </Row>
            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                <Title level={3}>Why Choose Us?</Title>
                
            </Space>
            <br/><br/>
            <Row
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}
              >
                <Col className="gutter-row" span={6}></Col>
                {
                  store.chooseUs.map((block, i) => {
                    return (
                      <Col className="gutter-row" span={4} key={i}>
                        <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                        <Image width={"100%"} preview={false} src={block.image}/>
                      </Space>
                        
                        <Title level={4}>{block.title}</Title>
                        <Text>{block.content}</Text>
                      </Col>
                    )
                  })
                }
                <Col className="gutter-row" span={4}>
                  
                </Col>

            </Row>
            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                <Title level={1}>They <HeartFilled /> Us</Title>
                
            </Space>
            <br/><br/>
            <Row
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}
              >
                <Col className="gutter-row" span={4}></Col>
                <Col className="gutter-row" span={16}>
                  <Carousel autoplay>
                    {
                      store.carouselItems.map((item, i) => {
                        return (
                          <div key={i}>
                            <p>{item.content}</p>
                            <br/><br/>
                            <p>{item.author}</p>
                          </div>
                        )
                      })
                    }
                  </Carousel>


                </Col>
                <Col className="gutter-row" span={4}></Col>
                

            </Row>
            
          </div>
          

        </Card>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  ));
};


export default function Home() {
  return (
   <StoreProvier>
      <App/>
   </StoreProvier>
  )
}