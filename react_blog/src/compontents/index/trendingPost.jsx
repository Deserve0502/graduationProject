import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
import { OverPack} from 'rc-scroll-anim';
import '../../Style/index.css'
export default class TrendingPost extends Component {
    state = {
        
    }
    render() {
        return (
            <div className='trending-container safe clear'>
                <div className='index-page-title'>
                    <p>最新发帖</p>
                    <p>Trending Post</p>
                </div>
               
                <OverPack style={{ overflow: 'hidden', height: 200,width:'100%',margin:'auto', }}
                    always={false}
                >
                    <div className='trending-page '>
                    <QueueAnim key="queue"
                        leaveReverse
                        style={{width:'110%',height:'600px',marginLeft:'-40px'  }}
                    >



                        <div key="a" className="trending-post" >
                        <span className='trending-up'>
                        </span>
                        <div className='trending-img'>
                            <img src='../trendingImg/1.jpg'/>
                            <span className='trending-reply'>
                                <span>1</span>
                                <span>评论</span>
                            </span>
                            <span className='tranding-classify'>
                                摄影
                            </span>
                        </div>
                        <div className='trending-content'>
                        <div className='trending-title'>
                            奔跑吧兄弟
                        </div>
                        <div className='trending-date'>
                            <span>
                                创建于 ⦁ 
                            </span>
                            <span className='create-date'> 2021-01-01</span>
                        </div>
                        <div className='trending-articl'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='trending-lookmore'>
                            查看更多
                        </div>

                        </div>
                        </div>



                        <div key="b" className="trending-post" >
                        <span className='trending-down'>
                        </span>
                        <div className='trending-img'>
                            <img src='../trendingImg/2.jpg'/>
                            <span className='trending-reply'>
                                <span>1</span>
                                <span>评论</span>
                            </span>
                            <span className='tranding-classify'>
                                摄影
                            </span>
                        </div>

                        <div className='trending-content'>
                        <div className='trending-title'>
                            奔跑吧兄弟
                        </div>
                        <div className='trending-date'>
                            <span>
                                创建于 ⦁ 
                            </span>
                            <span className='create-date'> 2021-01-01</span>
                        </div>
                        <div className='trending-articl'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='trending-lookmore'>
                            查看更多
                        </div>

                        </div>
                        </div>
                        <div key="c" className="trending-post">
                        <span className='trending-up'>
                        </span>
                        <div className='trending-img'>
                            <img src='../trendingImg/3.jpg'/>
                            <span className='trending-reply'>
                                <span>1</span>
                                <span>评论</span>
                            </span>
                            <span className='tranding-classify'>
                                摄影
                            </span>
                        </div>
                        <div className='trending-content'>
                        <div className='trending-title'>
                            奔跑吧兄弟
                        </div>
                        <div className='trending-date'>
                            <span>
                                创建于 ⦁ 
                            </span>
                            <span className='create-date'> 2021-01-01</span>
                        </div>
                        <div className='trending-articl'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='trending-lookmore'>
                            查看更多
                        </div>

                        </div>
                        </div>
                        <div key="d" className="trending-post">
                        <span className='trending-down'>
                        </span>
                        <div className='trending-img'>
                            <img src='../trendingImg/4.jpg'/>
                            <span className='trending-reply'>
                                <span>1</span>
                                <span>评论</span>
                            </span>
                            <span className='tranding-classify'>
                                摄影
                            </span>
                        </div>
                        <div className='trending-content'>
                        <div className='trending-title'>
                            奔跑吧兄弟
                        </div>
                        <div className='trending-date'>
                            <span>
                                创建于 ⦁ 
                            </span>
                            <span className='create-date'> 2021-01-01</span>
                        </div>
                        <div className='trending-articl'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='trending-lookmore'>
                            查看更多
                        </div>

                        </div>
                        </div>
                        <div key="e" className="trending-post" >
                        <span className='trending-up'>
                        </span>
                        <div className='trending-img'>
                            <img src='../trendingImg/5.jpg'/>
                            <span className='trending-reply'>
                                <span>1</span>
                                <span>评论</span>
                            </span>
                            <span className='tranding-classify'>
                                摄影
                            </span>
                        </div>
                        <div className='trending-content'>
                        <div className='trending-title'>
                            奔跑吧兄弟
                        </div>
                        <div className='trending-date'>
                            <span>
                                创建于 ⦁ 
                            </span>
                            <span className='create-date'> 2021-01-01</span>
                        </div>
                        <div className='trending-articl'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='trending-lookmore'>
                            查看更多
                        </div>

                        </div>
                        </div>
                        <div key="f" className="trending-post">
                        <span className='trending-down'>
                        </span>
                        <div className='trending-img'>
                            <img src='../trendingImg/6.jpg'/>
                            <span className='trending-reply'>
                                <span>1</span>
                                <span>评论</span>
                            </span>
                            <span className='tranding-classify'>
                                摄影
                            </span>
                        </div>
                        <div className='trending-content'>
                        <div className='trending-title'>
                            奔跑吧兄弟
                        </div>
                        <div className='trending-date'>
                            <span>
                                创建于 ⦁ 
                            </span>
                            <span className='create-date'> 2021-01-01</span>
                        </div>
                        <div className='trending-articl'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='trending-lookmore'>
                            查看更多
                        </div>

                        </div>
                        </div>
                        <div key="h" className="trending-post">
                        <span className='trending-up'>
                        </span>
                        <div className='trending-img'>
                            <img src='../trendingImg/7.jpg'/>
                            <span className='trending-reply'>
                                <span>1</span>
                                <span>评论</span>
                            </span>
                            <span className='tranding-classify'>
                                摄影
                            </span>
                        </div>
                        <div className='trending-content'>
                        <div className='trending-title'>
                            奔跑吧兄弟
                        </div>
                        <div className='trending-date'>
                            <span>
                                创建于 ⦁ 
                            </span>
                            <span className='create-date'> 2021-01-01</span>
                        </div>
                        <div className='trending-articl'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='trending-lookmore'>
                            查看更多
                        </div>

                        </div>
                        </div>
                        <div key="i" className="trending-post" >
                        <span className='trending-down'>
                        </span>
                        <div className='trending-img'>
                            <img src='../trendingImg/8.jpg'/>
                            <span className='trending-reply'>
                                <span>1</span>
                                <span>评论</span>
                            </span>
                            <span className='tranding-classify'>
                                摄影
                            </span>
                        </div>
                        <div className='trending-content'>
                        <div className='trending-title'>
                            奔跑吧兄弟
                        </div>
                        <div className='trending-date'>
                            <span>
                                创建于 ⦁ 
                            </span>
                            <span className='create-date'> 2021-01-01</span>
                        </div>
                        <div className='trending-articl'>
                        剪影这部分算是比较优先检出来的，大概是自己对旅行中拍些人文还是不太擅长吧，没有面部表情的轮廓却很适合自己拍照的调调。

                        </div>
                        <div className='trending-lookmore'>
                            查看更多
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