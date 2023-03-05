const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const StatusEndPoint = 12; // 질문이 12가지 있으니 끝 질문 수만큼
const result = document.querySelector("#result");
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]; // 배열 생성

function calResult(){
    //select 배열의 최댓값을 가진 idex 번호를 불러오기 (indexOf: index값을 반환 / math.max():소괄호 안 주어진 것이 반환)
    var result = select.indexOf(Math.max(...select)); //select라는 배열의 인덱스를 반환할건데, 거기서 가지고 있는 최댓값을 선택.
    return result;
}

function setResult() {
    let answerPoint = calResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[answerPoint].name;

    var resultImg = document.createElement('img'); // img 태그생성
    const imgDiv = document.querySelector('#resultImg');
    var resultImgURL = 'img/image-' + answerPoint + '.png';
    //resultImg에 src와 alt 부여
    resultImg.src = resultImgURL;
    resultImg.alt = answerPoint;
    resultImg.classList.add('img-fluid'); // resultImg에 반응형 속성 부여
    imgDiv.appendChild(resultImg); // imgDiv영역에 resultImg 포함되게 지정

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[answerPoint].desc;
}

function goResult() {
    qna.style.webkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    // qna 레이아웃이 반쯤 꺼졌을때 result 등장하기 시작
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 150)})

        setResult();
        calResult();
}


function addAnswer(answerText, qIndex, Iindex){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');

    answer.classList.add('answerList');

    // 마진과 패딩 속성 부여 + 버튼에 animation fadeIn효과 부여
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer); // answer 버튼이 a에 소속될 수 있도록 관계지정
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var childrenAnswer = document.querySelectorAll('.answerList');
        for(let i = 0; i < childrenAnswer.length; i++){ // 0부터 앤서 박스 갯수만큼 i가 증가하면서
            // 변수의 요소마다 비활성화되도록 + 보이지 않도록 + 버튼에 fadeIn/Out 속성 부여
            childrenAnswer[i].disabled = true;
            childrenAnswer[i].style.webkitAnimation = "fadeOut 0.5s";
            childrenAnswer[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            var target = qnaList[qIndex].a[Iindex].type; // 몇번째 질문에 해당하는지 알아야 하므로 qindex. a배열에서 선택한 질문을 고르게끔 Iindex
            for(let i = 0; i < target.length; i++){
                select[target[i]] += 1;
            } // 이 반복문이 다 돌고나면 사용자가 버튼클릭시 동물 타입 인덱스번호대로 해당하는 값이 1씩 증가
            // 버튼이 다 사라지고 난 9.5초 이후

            for(let i = 0; i < childrenAnswer.length; i++){ // 0부터 앤서 박스 갯수만큼 i가 증가하면서
                childrenAnswer[i].style.display = 'none';
            }
            goNext(++qIndex); // 반복문 끝난 이후 인덱스 값 1 증가해 호출
            // 반복문이 다 끝난 이후에는 goNext 함수 호출
        }, 450)
    }, false);
}


// goNext 함수에서 addAnswer함수 호출
// addAnswer 함수에서 버튼을 클릭했을때 goNext함수 호출
// 마지막 질문에서 결과 버튼 보이고 실행할 수 있게끔
function goNext(qIndex){
    // 인덱스 값이 12이면 결과 실행버튼 뜨게끔
    if(qIndex === StatusEndPoint){
        goResult();
        return; //goNext함수가 끝나지 않고 나머지 아래가 실행되므로 return
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIndex].q; //qna list의 첫번째 q 요소 불러옴

    for(let i in qnaList[qIndex].a){
        addAnswer(qnaList[qIndex].a[i].answer, qIndex, i);
    }

    // answer 버튼 누를때마다 progress bar 채워지게끔
    var status = document.querySelector('.statusBar');
    status.style.width = (100/StatusEndPoint) * (qIndex+1) + '%';

}


function begin(){
    main.style.webkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";


    // main 레이아웃이 반쯤 꺼졌을때 qna 등장하기 시작
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
          main.style.display = "none";
          qna.style.display = "block"
        }, 150)
        let qIndex = 0;
        goNext(qIndex);
      }, 150);



    // main.classList.add(HIDDEN_CLASSNAME);
    // qna.classList.remove(HIDDEN_CLASSNAME);
}

