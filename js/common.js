// const button = document.querySelector('.openModal');
// const dimm = document.querySelector('.dimm');
// // const view = document.querySelector('.view_detail');
// button.addEventListener('click',(e)=>{
//     view.classList.add('open');
//     dimm.classList.add('open');
// })

const datas = [
    {
        id:0,
        month: 1,
        price: 1482500,
        information: '1월입니다.'
    },
    {
        id:1,
        month: 2,
        price: 100,
        information: '2월입니다.'
    },
    {
        id:2,
        month: 3,
        price: 100,
        information: '3월입니다.'
    },
    {
        id:3,
        month: 4,
        price: 100,
        information: '4월입니다.'
    },
    {
        id:4,
        month: 5,
        price: 100,
        information: '5월입니다.'
    },
    {
        id:5,
        month: 6,
        price: 100,
        information: '6월입니다.'
    },
    {
        id:6,
        month: 7,
        price: 100,
        information: '7월입니다.'
    },
    {
        id:7,
        month: 8,
        price: 100,
        information: '8월입니다.'
    },
    {
        id:8,
        month: 9,
        price: 100,
        information: '9월입니다.'
    },
    {
        id:9,
        month: 10,
        price: 100,
        information: '10월입니다.'
    },
    {
        id:10,
        month: 11,
        price: 100,
        information: '11월입니다.'
    },
    {
        id:11,
        month: 12,
        price: 100,
        information: '12월입니다.'
    },
]


const viewInfor = () => {
    const view = document.querySelector('.view_detail');
    const list = document.querySelectorAll('.recommand .module_slide_card li');
    const weekly = document.querySelectorAll('.weekly .module_slide_card li');
    const dimm = document.querySelector('.dimm');
    const info = view.querySelector('.info');
    const book_button = view.querySelector('.book_button');
    const close = view.querySelector('.close');
    const monthly = view.querySelectorAll('.monthly button');
    const month = view.querySelector('.month');
    const closeModal = () => {
        view.classList.remove('open');
        dimm.classList.remove('open');
    }
   
    book_button.addEventListener('click', closeModal);

    const openModal = () => {
        view.classList.add('open');
        dimm.classList.add('open');
    }
   
    close.addEventListener('click',closeModal);
 

    list.forEach( (e,idx) => {
        e.addEventListener('click',(event) => {
            const target = event.target;
           
            if(target.nodeName == 'A') {
                openModal()
                info.innerHTML = target.innerHTML
            }
        })
    })

    weekly.forEach((e,idx) => {
        e.addEventListener('click',(week) => {
            const aim = week.target;
            if(aim.nodeName == 'A') {
                openModal()
                info.innerHTML = aim.innerHTML
            }

        })
    })
    
    monthly.forEach((e,idx) => {
        e.addEventListener('click',(event) => {
            const mon = event.target;
            if(mon.nodeName == 'BUTTON') {
                month.innerHTML = mon.innerHTML;
            }
        })
    })
};

viewInfor();

const visualTab = () => {
    const tabMenus = document.querySelectorAll('.visual .tab_menu li');
    const tabContents = document.querySelectorAll('.tab-contents');
    console.log(tabContents)
    // const reserve = tabContents.querySelector('.reserv');
    // const search = tabContents.querySelector('.search');
    // const ticket = tabContents.querySelector('.ticket');
    // const time = tabContents.querySelector('.time');
    tabMenus.forEach((tabMenu,index) => {
        tabMenu.addEventListener('click', (e) => {
            tabMenus.forEach(menu => {
                menu.classList.remove('on');
            })
            e.currentTarget.classList.add('on');

            tabContents.forEach(content => {
                content.classList.remove('active');
            })

            tabContents[index].classList.add('active');
        })

    })
    
}

const mainMenu = () => {
    const dropMenu = document.querySelectorAll('.main_btn');
    const dropContents = document.querySelectorAll('.sub_depth2')
    const bg = document.querySelector('.bg');
    const gnb = document.querySelector('.gnb');
    console.log(dropContents)
    
    dropMenu.forEach((e,index) => {
        e.addEventListener('mouseenter', () => {
            dropMenu.forEach(e=>{e.classList.remove('active')});
            e.classList.add('active');

            dropContents.forEach(sub_depth2=>{sub_depth2.classList.remove('active')});
            dropContents[index].classList.add('active');

            bg.style.display = 'block';
            
        })
    })

    gnb.addEventListener('mouseleave',() => {
        bg.style.display = 'none';
        dropContents.forEach((e,index) => {
            e.classList.remove('active');
        })
    })

    // const closeModal = () => {
    //     view.classList.remove('open');
    //     dimm.classList.remove('open');
    // }
    // console.log(close)
    // book_button.addEventListener('click', closeModal);

    // const openModal = () => {
    //     view.classList.add('open');
    //     dimm.classList.add('open');
    // }
    // console.log()
    // close.addEventListener('click',closeModal);
    
}

mainMenu();

visualTab();
 
$(function() {
    const $list = $('.slide_wrap .slide_list');
    // const $slide = $('.test_slide')
    $list.slick({
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        // fade: true,
        cssEase: 'linear'
        });

       
        
        const $recommand = $('.recommand .module_slide_card');
        
        $recommand.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });

        const $weekly = $('.weekly .module_slide_card');
        
        $weekly.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
                          

      
    
})

/*
const notice = document.querySelector('.notice');
const noticeList = notice.querySelectorAll('.list ul li');
console.log(noticeList)

let seconds = 1;
let timerId;

timerId = setInterval(function(){
    notice.textContent = seconds++
},2000);
*/

const notice = document.querySelector('.notice');
console.log(notice.offsetTop, notice.offsetLeft, notice.offsetWidth);
let noticeBox = notice.getBoundingClientRect();
console.log(noticeBox, noticeBox.top );


let count =0;
const scrollUp = () => {
    console.log(`This time is ${count++}th.`)
}

// setInterval( scrollUp, 1000);
