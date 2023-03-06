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

//!! function setShare(){
//     var resultImg = document.querySelector('#resultImg');
//     var resultAlt = resultImg.firstElementChild.lastElementChild; // ALT 속성 지정
//     const shareTitle = '십이간지 연애유형 결과';
//     const shareDes = infoList[resultAlt].name;
//     const shareImage = "url+'img/image-'+resultAlt+'.png'";
//     const shareURL = url+'page.result-'+resultAlt+'.html';
//     goKakao();
// }

function goKakao(){
Kakao.init("d3f0847972aa49b92bf926aad2ad4666");
Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
        title: "십이간지 연애유형 결과",
        description: infoList[document.querySelector('#resultImg').firstElementChild.lastElementChild].name,
        imageUrl: url + "img/image-" + resultImg.firstElementChild.lastElementChild + ".png"  ,
        link: {
            mobileWebUrl: url + "page.result-" + resultImg.firstElementChild.lastElementChild + ".html" ,
            webUrl: url + "page.result-" + resultImg.firstElementChild.lastElementChild + ".html",
        },
    },
    buttons: [
        {
            title: "웹으로 보기",
            link: {
                mobileWebUrl: url + "page.result-" + resultImg.firstElementChild.lastElementChild + ".html",
                webUrl: url + "page.result-" + resultImg.firstElementChild.lastElementChild + ".html",
            },
        },
    ],
});}
