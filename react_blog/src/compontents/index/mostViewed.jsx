import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';
import '../../style/index.css'
import { Select } from 'antd';
import MostComments from './mostComments'
import MostCollect from './mostCollect'
function handleChange(value) {
    console.log(`selected ${value}`);
}
export default class MostViewed extends Component {
    render() {
        return (
            <>
            <div className='viewed-container safe'>
                <div className='index-page-title'>
                    <p>最多点击</p>
                    <p>Most Viewed</p>
                </div>
                <OverPack style={{ overflow: 'hidden', height: 200, width: '90%', margin: 'auto', }}
                    always={false}

                >
                 <QueueAnim key="queue00"
                        leaveReverse
                        duration={500}
                        type={'bottom'}
                        >
                    <div className='viewed-banner-contain' key='view1'>
                        <div className='viwed-banner-img'>
                            <img src="../bannerImg/banner1.jpg" />
                        </div>
                        <div className='viewd-banner-intro'>
                            <div className='viewed-banner-classify'>
                                生活方式
            </div>
                            <div className='viewd-banner-title'>
                                一段话一段介绍的话哈哈哈哈哈一段话一段介绍的话哈
            </div>
                        </div>
                    </div>
<div className='viewed-list-contain' >

            <div className='viewed-list' key='view2'>
            <div className='viewed-list-img'>
            <img src="../bannerImg/banner3.jpg"/>
            </div>


            <div className='viewed-list-classify'>
            旅行

            </div>
            <div className='viewed-list-title'>
一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题
            </div>
            <div className='viewed-list-content'>
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            </div>
            </div>
           


            <div className='viewed-list' key='view2'>
            <div className='viewed-list-img'>
            <img src="../bannerImg/banner3.jpg"/>
            </div>


            <div className='viewed-list-classify'>
            旅行

            </div>
            <div className='viewed-list-title'>
一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题
            </div>
            <div className='viewed-list-content'>
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            </div>
            </div>
            <div className='viewed-list' key='view2'>
            <div className='viewed-list-img'>
            <img src="../bannerImg/banner3.jpg"/>
            </div>


            <div className='viewed-list-classify'>
            旅行

            </div>
            <div className='viewed-list-title'>
一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题
            </div>
            <div className='viewed-list-content'>
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            </div>
            </div>
            <div className='viewed-list' key='view2'>
            <div className='viewed-list-img'>
            <img src="../bannerImg/banner3.jpg"/>
            </div>


            <div className='viewed-list-classify'>
            旅行

            </div>
            <div className='viewed-list-title'>
一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题一个标题
            </div>
            <div className='viewed-list-content'>
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
            </div>
            </div>
</div>
</QueueAnim>
                </OverPack>
                <MostComments />
                <MostCollect />
            </div>
            </>
        )
    }
}