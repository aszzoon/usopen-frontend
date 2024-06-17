import React from 'react';
import './App.css';
import BoardItem from "./components/BoardItem";
import latestBoardListMock from "./mocks/latest-board-list.mock";
import Top3Item from "./components/Top3Item";
import {commentListMock, favoriteListMock, top3BoardListMock} from "./mocks";
import CommentItem from "./components/CommentItem";
import FavoriteItem from 'components/FavoriteItem';
import InputBox from "./components/InputBox";


function App() {
    return (
        <>
            <InputBox />
        </>
    );
}

export default App;
