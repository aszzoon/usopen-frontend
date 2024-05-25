export default interface BoardListItemInterface {
    boardNumber : number;
    title : string;
    content : string;
    boardTitle : string | null;
    favoriteCount : number;
    commentCount : number ;
    viewCount : number;
    writeDatetime : string;
    writerNickname : string;
    writerProfileImage : string;
}