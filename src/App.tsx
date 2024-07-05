import React from 'react';
import './App.css';
import BoardItem from "./components/BoardItem";
import latestBoardListMock from "./mocks/latest-board-list.mock";
import Top3Item from "./components/Top3Item";
import {commentListMock, favoriteListMock, top3BoardListMock} from "./mocks";
import CommentItem from "./components/CommentItem";
import FavoriteItem from 'components/FavoriteItem';


function App() {
    return (
        <>
            <div style={{display: 'flex', columnGap: '30px', rowGap: '20px'}}>

                {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem}/>)}

            </div>

        </>
    );
}

export default App;
