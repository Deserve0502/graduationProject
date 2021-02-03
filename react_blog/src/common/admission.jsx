import React, { Component } from 'react'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';
import admission from '../Style/addmission.module.css'
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
const { Option } = Select;
export default class addmission extends Component {
  static propTypes = {
    history:PropTypes.any,
    }; 
  state = {
    show: true,
    combinedFlag:true,
    Loginvisible: false,
    Registvisible: false,

  }

  componentDidMount() {

    this.timeoutId = setTimeout(() => {
      this.setState({combinedFlag:false})


    }, 3000)

  }



  componentWillUnmount() {

    clearTimeout(this.timeoutId)

  }
  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }
  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }

  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }
  goPage=(goPlace)=>{
    if(goPlace === 'forlook'){
      this.props.history.push( {pathname:'/index'})
    }
    if(goPlace === 'login'){
      this.props.history.push( {pathname:'/login'})
    }
    
  }
  showLoginDrawer = () => {
    this.setState({
      Loginvisible: true,
    });
  };

  onLoginClose = () => {
    this.setState({
      Loginvisible: false,
    });
  };
  showRegistDrawer = ()=>{
    this.setState({
      Registvisible: true,
    });
  }


  
  render() {
    return (
      <div className={admission['combined-wrapper']}
      
      >
        <div className={admission['combined-reload']}>
         

         
        </div>
        {this.state.show && (
          <div className={this.state.combinedFlag===true?admission['combined']:admission['combined1']}>
            <div className={admission["combined-shape"]}>
              <div className={admission["shape-left"]}>
                <TweenOne
                  animation={[
                    { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
              <div className={admission["shape-right"]}>
                <TweenOne
                  animation={[
                    { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
            </div>
            <Texty
              className={admission["title"]}
              type="mask-top"
              delay={400}
              enter={this.getEnter}
              interval={this.geInterval}
              component={TweenOne}
              componentProps={{
                animation: [
                  { x: 130, type: 'set' },
                  { x: 100, delay: 500, duration: 450 },
                  {
                    ease: 'easeOutQuart',
                    duration: 300,
                    x: 0,
                  },
                  {
                    letterSpacing: 0,
                    delay: -300,
                    scale: 0.9,
                    ease: 'easeInOutQuint',
                    duration: 1000,
                  },
                  { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                ],
              }}
            >
                  &nbsp; 顷     刻 &nbsp;  
            </Texty>
            {/* <TweenOne
              className={admission["combined-bar"]}
              animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
            /> */}
            <Texty
              className={admission["content"]}
              type="bottom"
              split={this.getSplit}
              delay={2200}
              interval={30}
            >
              ——你的生活分享平台
            </Texty>
          </div>
        )}
        <QueueAnim 
        type={'bottom'}
        delay={3000} 
        // interval={40}
        className={admission['add-button']}>
          <span key="a" onClick={()=>this.goPage('login')}>注册登陆</span>
          <span key="b" onClick={()=>this.goPage('forlook')}>随便看看</span>
        </QueueAnim>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={this.onLoginClose}
          visible={this.state.Loginvisible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
     
      </div>
    );
  }
}





