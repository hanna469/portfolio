//1. 그래픽 영역 부모 안 a(1)를 클릭 시(href#처리)
//2. 클릭한 a안에 이미지 경로를 인식(저장)
//3. 숨긴 팝업(2)을 보이게 하면서
//4. 팝업 안에 이미지 경로에 클릭한 a의 이미지 경로를 대입
//5. 팝업 영역 도는 팝업 안 X버튼(3) 클릭 시
//6. 팝업 숨기기
const graphic_project_a = document.querySelectorAll('.graphic_container a');
const graphic_project_bnr_a = document.querySelectorAll('.graphic_bnr_container a');
const graphic_popup = document.querySelector('.graphic_popup_bg');
const graphic_popup_close = graphic_popup.querySelector('#close');
console.log(graphic_project_a,graphic_popup,graphic_popup_close);

console.log(graphic_project_a[0].children[0].src);
console.log(graphic_popup.children[0].children[1].src);
console.log(graphic_popup_close.parentNode.parentNode.parentNode);

// graphic_project_a[0].addEventListener('click',function(e){
//     e.preventDefault(); //a태그의 href 기본기능 막기함수
//     // console.log('클릭테스트');
//     let aSrc = graphic_project_a[0].children[0].src; //2
//     graphic_popup.style.display = 'block'; //3
//     graphic_popup.children[0].children[1].src = aSrc; //4
//     //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
//     graphic_popup.children[0].style.width = '60%';
//     graphic_popup.children[0].style.height = '80vh';
//     //팝업이 실행됐을 때 뒤쪽 body의 전체 스크롤을 막기
//     document.body.style.overflow = 'hidden';
// })

function graphic_func(e, index, w=70, h=90){
    e.preventDefault(); //a태그의 href 기본기능 막기함수
    let aSrc = graphic_project_a[index].children[0].src;//2
    graphic_popup.style.display = 'block';//3
    graphic_popup.children[0].children[1].src = aSrc;//4
    //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
    graphic_popup.children[0].style.width = 'auto';
    graphic_popup.children[0].style.height = 'auto';
    graphic_popup.children[0].style.maxWidth = w + '%';
    graphic_popup.children[0].style.maxHeight = h + 'vh';
    graphic_popup.children[0].style.objectFit = 'contain';
    //팝업이 실행됐을 때 뒤쪽 body의 전체 스크롤을 막기
    document.body.style.overflow = 'hidden';
}
function graphic_bnr_func(e, index, w=60){
    e.preventDefault(); //a태그의 href 기본기능 막기함수
    let aSrc = graphic_project_bnr_a[index].children[0].src;//2
    graphic_popup.style.display = 'block';//3
    graphic_popup.children[0].children[1].src = aSrc;//4
    //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
    graphic_popup.children[0].style.width = w + '%';
    graphic_popup.children[0].style.height = 'max-content';
    //팝업이 실행됐을 때 뒤쪽 body의 전체 스크롤을 막기
    document.body.style.overflow = 'hidden';
}

for(let i=0; i<11; i++){graphic_project_a[i].addEventListener('click',function(e){graphic_func(e,i)})}
graphic_project_bnr_a[0].addEventListener('click',function(e){graphic_bnr_func(e,0)})
graphic_project_bnr_a[1].addEventListener('click',function(e){graphic_bnr_func(e,1)})

graphic_popup_close.addEventListener('click',function(){ //5
    graphic_popup_close.parentNode.parentNode.parentNode.style.display = 'none';//6
    document.body.style.overflow = 'auto';
})

const graphic = document.querySelector('.graphic_wrap');
const graphicSwiper = new Swiper(graphic,{
    loop:true,
    slidesPerView:3.5,
})