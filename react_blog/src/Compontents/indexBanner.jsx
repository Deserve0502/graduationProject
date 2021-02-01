import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom' 
//import PropTypes from 'prop-types' 
//import axios from 'axios' 
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom' 
// import '../Style/indexBanner.css' 
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import '../Style/index.css'
const { Element, Arrow, Thumb } = BannerAnim;
const   BgElement = Element.BgElement;
export default   class   IndexBanner   extends   Component {
    constructor() {
        super(...arguments);
        this.imgArray = [
          '../bannerImg/banner1.jpg',
          '../bannerImg/banner4.jpg',
        ];
        this.state = {
          intShow: 0,
          prevEnter: false,
          nextEnter: false,
          thumbEnter: false,
        };
        [
          'onChange',
          'prevEnter',
          'prevLeave',
          'nextEnter',
          'nextLeave',
          'onMouseEnter',
          'onMouseLeave',
        ].forEach((method)   =>   this[method] = this[method].bind(this));
      }
      onChange(type, int) {
        if (type === 'before') {
          this.setState({
            intShow: int,
          });

        }

      }
      getNextPrevNumber() {
        let   nextInt = this.state.intShow + 1;
        let   prevInt = this.state.intShow - 1;
        if (nextInt >= this.imgArray.length) {
         nextInt = 0;
        }
        if (prevInt < 0) {
          prevInt = this.imgArray.length - 1;
        }
        return [prevInt, nextInt];
      }
      prevEnter() {
        this.setState({
          prevEnter: true,
        });
      }
      prevLeave() {
        this.setState({
          prevEnter: false,
        });
      }
      nextEnter() {
        this.setState({
          nextEnter: true,
        });
      }
      nextLeave() {
        this.setState({
          nextEnter: false,
        });
      }
      onMouseEnter() {
        this.setState({
          thumbEnter: true,
        });
      }
      onMouseLeave() {
        this.setState({
          thumbEnter: false,
        });
      }
   render() {
      const   intArray = this.getNextPrevNumber();
      const   thumbChildren = this.imgArray.map((img, i)   =>  
          <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>

        );
    return (
        <div style={{height:'455px'}} className='index-banner'>
      <BannerAnim 
        onChange={this.onChange} 
        onMouseEnter={this.onMouseEnter} 
        onMouseLeave={this.onMouseLeave} 
        prefixCls="custom-arrow-thumb"
        autoPlay={true}
        >
        <Element key="aaa"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
            backgroundImage: `url(${this.imgArray[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}

          />

          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            这是文章1的标题
          </TweenOne>
          <TweenOne 
          className="banner-user-text" 
          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话
            </TweenOne>
        </Element>
        <Element key="bbb"
          prefixCls="banner-user-elem"
          >
          <BgElement
            key="bg"
           className="bg"
            style={{
              backgroundImage: `url(${this.imgArray[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            这是文章2的标题
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            >
            一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话一段话 
          </TweenOne>
        </Element>
        <Arrow arrowType="prev" key="prev" prefixCls="user-arrow" component={TweenOne}
          onMouseEnter={this.prevEnter}
          onMouseLeave={this.prevLeave}
          animation={{ left: this.state.prevEnter ? 0 : -120 }}
          >
          <div className="arrow"></div>
          <TweenOneGroup 
            enter={{ opacity: 0, type: 'from' }} 
            leave={{ opacity: 0 }} 
            appear={false} 
            className="img-wrapper" component="ul"
            >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})`}} key={intArray[0]} />
          </TweenOneGroup>
        </Arrow>
        <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}
          onMouseEnter={this.nextEnter}
          onMouseLeave={this.nextLeave}
          animation={{ right: this.state.nextEnter ? 0 : -120 }}
          >
          <div className="arrow"></div>
          <TweenOneGroup 
            enter={{ opacity: 0, type: 'from' }} 
            leave={{ opacity: 0 }} 
            appear={false} 
            className="img-wrapper" 
            component="ul"
            >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />
          </TweenOneGroup>
        </Arrow>
        <Thumb prefixCls="user-thumb" key="thumb" component={TweenOne}
          animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
          >
          {thumbChildren}
        </Thumb>
      </BannerAnim>

      </div>

    );

   }



}




