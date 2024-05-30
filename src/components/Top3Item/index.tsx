import React from "react";
import './style.css';

//      component : Top 3 List Item 컴포넌트        //
export default function Top3Item() {

    //      render : Top 3 List Item 컴포넌트 렌더링        //
    return (
        <div className='top-3-list-item'>
            <div className='top-3-list-item-main-box'>
                <div className='top-3-list-item-top'>
                    <div className='top-3-list-item-profile-box'>
                        <div className='top-3-list-item-profile-image' style={{backgroundImage: 'url()'}}></div>
                    </div>
                    <div className='top-3-list-item-write-box'>
                        <div className='top-3-list-item-nickname'>{'hello world'}</div>
                        <div className='top-3-list-item-write-date'>{'2024.05.30.'}</div>
                    </div>
                </div>
                <div className='top-3-list-item-middle'>
                    <div className='top-3-list-item-title'>{'오늘은 목요일 내일은 금요일 모레는 토요일'}</div>
                    <div className='top-3-list-item-content'>{'다음주는 월요일 화요일 수요일 목요일 금요일 토요일'}</div>
                </div>
                <div className='top-3-list-item-bottom'>
                    <div className='top-3-list-item-counts'>{'댓글 0 * 좋아요 0 * 조회수 0'}</div>
                </div>
            </div>
        </div>
    )
}
