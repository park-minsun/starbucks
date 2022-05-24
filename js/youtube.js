 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
//onYouTubeIframeAPIReady 절대 바꾸면 안됨
 function onYouTubeIframeAPIReady() {
   //div id=player
    new YT.Player('player', {
     videoId: 'An6LvWQuj_8', //유튜브 주소 맨뒤 v=An6LvWQuj_8 되어있는거 복사
     playerVars: {
         autoplay: true,
         loop: true,
         playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록 (위에 루프 트루면 꼭 해주기)
     },
     events: {
         onReady: function (event){
           event.target.mute()  //음소거
         }
     }
   });
 }

 //https://developers.google.com/youtube/player_parameters?hl=ko#Parameters
 