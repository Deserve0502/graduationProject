import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import '../Style/post.css'
import QueueAnim from 'rc-queue-anim';
import { OverPack, Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import '../Style/index.css'
import { Select,Pagination } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
export default class PopularPost extends Component {
    render() {
        return (
            <div className='popular-container safe'>
            <div className='index-page-title'>
                <p>热门发帖</p>
                <p>Popular Post</p>
            </div>
            <OverPack style={{ overflow: 'hidden', height: 200,width:'90%',margin:'auto', }}
                    always={false}
                >
                   <div className='popular-page'>
                   
                    <QueueAnim key="queue"
                        leaveReverse
                        
                    >
                        <div key="popu1" className="popular-post" >
                        <div className='popular-img'>
            <img src='../trendingImg/1.jpg'/>
                        </div>
                        <div className='popular-contain'>
                        <p className='popular-classify'>
                            爱好
                        </p>
                        <div className='popular-title'>
                        奔跑吧兄弟奔跑吧兄弟奔跑吧兄弟奔跑吧兄弟
                        
                        </div>
                        <div className='popular-introduce'>
                        <span className='popular-author-img'>
                        <img src='../trendingImg/author.jpg' />

                        </span>
                        <span className='popular-author-name'>
                        灵素素 
                        </span>
                        <span className='cicle'>
                        ⦁
                        </span>
                        <span className='popular-author-date'>
                        2021-01-01
                        </span>
                        <span className='cicle'>
                        ⦁
                        </span>
                        <span className='popular-author-reply'>
                            1 评论
                        </span>
                        </div>
                        <div className='popular-artical'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='popular-lookmore'>
                        查看更多
                        </div>
                       

                        </div>
                      

                        
                        </div>

                        <div key="popu2" className="popular-post" >
                        <div className='popular-img'>
            <img src='../trendingImg/1.jpg'/>
                        </div>
                        <div className='popular-contain'>
                        <p className='popular-classify'>
                            爱好
                        </p>
                        <div className='popular-title'>
                        奔跑吧兄弟奔跑吧兄弟奔跑吧兄弟奔跑吧兄弟
                        
                        </div>
                        <div className='popular-introduce'>
                        <span className='popular-author-img'>
                        <img src='../trendingImg/author.jpg' />

                        </span>
                        <span className='popular-author-name'>
                        灵素素 
                        </span>
                        <span className='cicle'>
                        ⦁
                        </span>
                        <span className='popular-author-date'>
                        2021-01-01
                        </span>
                        <span className='cicle'>
                        ⦁
                        </span>
                        <span className='popular-author-reply'>
                            1 评论
                        </span>
                        </div>
                        <div className='popular-artical'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='popular-lookmore'>
                        查看更多
                        </div>
                       

                        </div>
                      

                        
                        </div>

                        <div key="popu3" className="popular-post" >
                        <div className='popular-img'>
            <img src='../trendingImg/1.jpg'/>
                        </div>
                        <div className='popular-contain'>
                        <p className='popular-classify'>
                            爱好
                        </p>
                        <div className='popular-title'>
                        奔跑吧兄弟奔跑吧兄弟奔跑吧兄弟奔跑吧兄弟
                        
                        </div>
                        <div className='popular-introduce'>
                        <span className='popular-author-img'>
                        <img src='../trendingImg/author.jpg' />

                        </span>
                        <span className='popular-author-name'>
                        灵素素 
                        </span>
                        <span className='cicle'>
                        ⦁
                        </span>
                        <span className='popular-author-date'>
                        2021-01-01
                        </span>
                        <span className='cicle'>
                        ⦁
                        </span>
                        <span className='popular-author-reply'>
                            1 评论
                        </span>
                        </div>
                        <div className='popular-artical'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='popular-lookmore'>
                        查看更多
                        </div>
                       

                        </div>
                      

                        
                        </div>
                        <div key="popu4" className="popular-post" >
                        <div className='popular-img'>
            <img src='../trendingImg/1.jpg'/>
                        </div>
                        <div className='popular-contain'>
                        <p className='popular-classify'>
                            爱好
                        </p>
                        <div className='popular-title'>
                        奔跑吧兄弟奔跑吧兄弟奔跑吧兄弟奔跑吧兄弟
                        
                        </div>
                        <div className='popular-introduce'>
                        <span className='popular-author-img'>
                        <img src='../trendingImg/author.jpg' />

                        </span>
                        <span className='popular-author-name'>
                        灵素素 
                        </span>
                        <span className='cicle'>
                        ⦁
                        </span>
                        <span className='popular-author-date'>
                        2021-01-01
                        </span>
                        <span className='cicle'>
                        ⦁
                        </span>
                        <span className='popular-author-reply'>
                            1 评论
                        </span>
                        </div>
                        <div className='popular-artical'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='popular-lookmore'>
                        查看更多
                        </div>
                       

                        </div>
                      

                        
                        </div>
                        {/* <Pagination defaultCurrent={4} total={50} 
                        className='popular-pagin'
                        />, */}
                    </QueueAnim>

                    <QueueAnim key="queue1"
                        leaveReverse
                        
                    >
                    <div key='categroy' className='popular-categories'>
                    请选择分类：
                    <Select defaultValue="love" style={{ width: '70%' }} onChange={handleChange}>
      <Option value="love">爱好</Option>
      <Option value="fashion">时尚</Option>
      <Option value="travel">旅行</Option>
      <Option value="adventure">冒险</Option>
      <Option value="food">食物</Option>
      <Option value="sports">运动</Option>
      <Option value="lisfestyle">生活方式</Option>
      <Option value="technology">科技</Option>
    </Select>
    <div className='categroy-popular'>

    <div className='cate-popu-post'>
            <div className='cate-popu-img'>
            <img src='../trendingImg/4.jpg' />
            </div>
            <div className='cate-popu-contain'>
            <p className='cate-popu-classify'>
                爱好
            </p>
            <p className='cate-popu-title'>
                滋儿哇啦呜呜呜呜哇哇
            </p>
            <p className='cate-popu-date'>
                2021-01-01
            </p>
            </div>
    </div>

    <div className='cate-popu-post'>
            <div className='cate-popu-img'>
            <img src='../trendingImg/6.jpg' />
            </div>
            <div className='cate-popu-contain'>
            <p className='cate-popu-classify'>
                运动
            </p>
            <p className='cate-popu-title'>
                滋儿哇啦呜呜呜呜哇哇
            </p>
            <p className='cate-popu-date'>
                2021-01-01
            </p>
            </div>
    </div>

    <div className='cate-popu-post'>
            <div className='cate-popu-img'>
            <img src='../trendingImg/8.jpg' />
            </div>
            <div className='cate-popu-contain'>
            <p className='cate-popu-classify'>
                食物
            </p>
            <p className='cate-popu-title'>
                滋儿哇啦呜呜呜呜哇哇
            </p>
            <p className='cate-popu-date'>
                2021-01-01
            </p>
            </div>
    </div>

    <div className='cate-popu-post'>
            <div className='cate-popu-img'>
            <img src='../trendingImg/7.jpg' />
            </div>
            <div className='cate-popu-contain'>
            <p className='cate-popu-classify'>
                旅行
            </p>
            <p className='cate-popu-title'>
                滋儿哇啦呜呜呜呜哇哇
            </p>
            <p className='cate-popu-date'>
                2021-01-01
            </p>
            </div>
    </div>
    
                    </div>
                    </div>
                    </QueueAnim>
                    </div>
                </OverPack>
            </div>
        )
    }
}