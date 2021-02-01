import React, { Component, useState } from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
export default class MostCollect extends Component {
    render(){
        return (
          <div className='most' style={{bottom:'0'}}>
          <div className='most-banner-title'>
            最多收藏
          </div>
          <BannerAnim prefixCls="banner-user"
          type={'across'}
          >
            <Element 
              prefixCls="banner-user-elem"
              key="0"
            >
              <BgElement
                key="bg"
                className="bg most-con"
                style={{
                  background: '#fff',
                }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                <div className='most-list'>
                  <img src="../bannerImg/banner4.jpg" alt=""/>
                  <div className='most-list-title'>
                    一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题
                  </div>
                </div>
              </TweenOne>
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                <div className='most-list'>
                  <img src="../bannerImg/banner4.jpg" alt=""/>
                  <div className='most-list-title'>
                    一个标题一个标题
                  </div>
                </div>
              </TweenOne>
            </Element>
            <Element 
              prefixCls="banner-user-elem"
              key="1" 
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  background: '#fff',
                }}
              />
                           <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                <div className='most-list'>
                  <img src="../bannerImg/banner4.jpg" alt=""/>
                  <div className='most-list-title'>
                    一个标题一个标题
                  </div>
                </div>
              </TweenOne>
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                <div className='most-list'>
                  <img src="../bannerImg/banner4.jpg" alt=""/>
                  <div className='most-list-title'>
                    一个标题一个标题
                  </div>
                </div>
              </TweenOne>
            </Element>
          </BannerAnim>
          </div>
          )
      }
}