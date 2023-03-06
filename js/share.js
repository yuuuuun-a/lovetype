const url = 'https://warm-crostata-a6dd43.netlify.app/';

// function setShare(){
//   var resultImg = document.querySelector('#resultImg');
//   var resultAlt = resultImg.firstElementChild.alt;
//   const shareTitle = '십이간지 연애유형 결과';
//   const shareDes = infoList[resultAlt].name;
//   const shareImage = url + 'img/image-' + resultAlt + '.png';
//   const shareURL = url + 'page/result-' + resultAlt + '.html';

//   Kakao.Link.sendDefault({
//     objectType: 'feed',
//     content: {
//       title: shareTitle,
//       description: shareDes,
//       imageUrl: shareImage,
//       link: {
//         mobileWebUrl: shareURL,
//         webUrl: shareURL
//       },
//     },

//     buttons: [
//       {
//         title: '결과확인하기',
//         link: {
//           mobileWebUrl: shareURL,
//           webUrl: shareURL,
//         },
//       },
//     ]
//   });
// }



    // var resultImg = document.querySelector('#resultImg');
    // var resultAlt = resultImg.firstElementChild.lastElementChild; // ALT 속성 지정
    // const shareTitle = '십이간지 연애유형 결과';
    // const shareDes = infoList[resultAlt].name;
    // const shareImage = url+'img/imgae-'+resultAlt+'.png';
    // const shareURL = url+'page.result-'+resultAlt+'.html';
    


function goKakao(){

    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt; // ALT 속성 지정
    const shareTitle = '십이간지 연애유형 결과';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url+'img/imgae-'+resultAlt+'.png';
    const shareURL = url+'page.result-'+resultAlt+'.html';

Kakao.init("d3f0847972aa49b92bf926aad2ad4666");
Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
            mobileWebUrl: shareURL ,
            webUrl: shareURL,
        },
    },
    buttons: [
        {
            title: "결과 확인하기",
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
        },
    ],
});}

// function goKakao(){

//     var resultImg = document.querySelector('#resultImg');
//     var resultAlt = resultImg.firstElementChild.lastElementChild; // ALT 속성 지정
//     const shareTitle = '십이간지 연애유형 결과';
//     const shareDes = infoList[resultAlt].name;
//     const shareImage = url+'img/imgae-'+resultAlt+'.png';
//     const shareURL = url+'page.result-'+resultAlt+'.html';

    
// Kakao.init("d3f0847972aa49b92bf926aad2ad4666");
// Kakao.Link.sendDefault({
//     objectType: "feed",
//     content: {
//         title: "십이간지 연애유형",
//         description: "십이간지 연애유형 결과",
//         imageUrl: "img/share.png",
//         link: {
//             mobileWebUrl: "https://warm-crostata-a6dd43.netlify.app" ,
//             webUrl: "https://warm-crostata-a6dd43.netlify.app",
//         },
//     },
//     buttons: [
//         {
//             title: "웹으로 보기",
//             link: {
//                 mobileWebUrl: "https://warm-crostata-a6dd43.netlify.app",
//                 webUrl: "https://warm-crostata-a6dd43.netlify.app",
//             },
//         },
//     ],
// });}
