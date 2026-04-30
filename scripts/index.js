//1. 그래픽 영역 부모 안 a(1)를 클릭 시(href#처리)
//2. 클릭한 a안에 이미지 경로를 인식(저장)
//3. 숨긴 팝업(2)을 보이게 하면서
//4. 팝업 안에 이미지 경로에 클릭한 a의 이미지 경로를 대입
//5. 팝업 영역 도는 팝업 안 X버튼(3) 클릭 시
//6. 팝업 숨기기
const graphic_project_a = document.querySelectorAll('.graphic_container a');
const graphic_project_bnr_a = document.querySelectorAll('.graphic_bnr_container a');
const graphic_popup = document.querySelector('.graphic_popup_bg');
// const graphic_popup_close = graphic_popup.querySelector('#close');

function graphic_func(e, index){
    e.preventDefault(); //a태그의 href 기본기능 막기함수
    let targetImg = graphic_project_a[index].children[0]
    let aSrc = targetImg.src;//2
    let aWidth = targetImg.dataset.w
    let aHeight = targetImg.dataset.h
    graphic_popup.style.display = 'block';//3
    graphic_popup.children[0].children[0].src = aSrc;//4
    //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
    graphic_popup.children[0].style.width = aWidth + 'px';
    graphic_popup.children[0].style.height = aHeight + 'px';
    graphic_popup.children[0].style.objectFit = 'contain';
    //팝업이 실행됐을 때 뒤쪽 body의 전체 스크롤을 막기
    document.body.style.overflow = 'hidden';
}
function graphic_bnr_func(e, index, w=60){
    e.preventDefault(); //a태그의 href 기본기능 막기함수
    let aSrc = graphic_project_bnr_a[index].children[0].src;//2
    graphic_popup.style.display = 'block';//3
    graphic_popup.children[0].children[0].src = aSrc;//4
    //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
    graphic_popup.children[0].style.width = w + '%';
    graphic_popup.children[0].style.height = 'max-content';
    //팝업이 실행됐을 때 뒤쪽 body의 전체 스크롤을 막기
    document.body.style.overflow = 'hidden';
}

for(let i=0; i<graphic_project_a.length; i++){graphic_project_a[i].addEventListener('click',function(e){graphic_func(e,i)})}
for(let i=0; i<graphic_project_bnr_a.length; i++){graphic_project_bnr_a[i].addEventListener('click',function(e){graphic_bnr_func(e,i)})}
// graphic_project_bnr_a[0].addEventListener('click',function(e){graphic_bnr_func(e,0)})
// graphic_project_bnr_a[1].addEventListener('click',function(e){graphic_bnr_func(e,1)})

graphic_popup.addEventListener('click',function(e){
    if (e.target === this) {
        graphic_popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
})

// graphic_popup_close.addEventListener('click',function(){ //5
//     graphic_popup_close.parentNode.parentNode.style.display = 'none';//6
//     document.body.style.overflow = 'auto';
// })

const graphic = document.querySelector('.graphic_wrap');
const graphicSwiper = new Swiper(graphic,{
    nested: true,
    loop:true,
    slidesPerView:5.5,
})

const graphic_bnr = document.querySelector('.graphic_bnr_wrap');
const graphicBnrSwiper = new Swiper(graphic_bnr,{
    nested: true,
    loop:true,
    slidesPerView:1.5,
})

const webProject = document.querySelector('.web_project');
const webProjectSwiper = new Swiper(webProject,{
    nested: true,
})

const all = document.querySelector('.all_container');
const allSwiper = new Swiper(all,{
    nested: true,
    direction:'vertical',
    slidesPerView:1,
    mousewheel: true,
})