import React from 'react';
import './style.css';

// component: board List Item 컴포넌트
export default function BoardListItem() {

    // render : Board List Item 컴포넌트 렌더링
    return (
        <div className='board-list-item'>
            <div className='board-list-item-main-box'>
                <div className='board-list-item-top'>
                    <div className='board-list-item-profile-box'>
                        <div className='board-list-item-profile-image' style={{ backgroundImage: 'url()' }}></div>

                    </div>
                    <div className='board-list-item-write-box'>
                        <div className='board-list-item-nickname'>{'hello world'}</div>
                        <div className='board-list-item-write-datetime'>{'2024.05.26'}</div>


                    </div>
                </div>
                <div className='board-list-item-middle'>
                    <div className='board-list-item-title'>{'제목 입니다.'}</div>
                    <div className='board-list-item-content'>{'내용 입니다.'}</div>
                </div>
                <div className='board-list-item-bottom'>
                    <div className='board-list-item-count'>{'댓글 99 * 좋아요 100 * 조회수 100'}</div>
                </div>
            </div>
            <div className='board-item-image-box'>
                <div className='board-list-item-image'></div>
            </div>
        </div>
    )
}
