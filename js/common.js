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
    console.log(close)
    book_button.addEventListener('click', closeModal);

    const openModal = () => {
        view.classList.add('open');
        dimm.classList.add('open');
    }
    console.log()
    close.addEventListener('click',closeModal);
 

    list.forEach( (e,idx) => {
        e.addEventListener('click',(event) => {
            const target = event.target;
            console.log(target.innerHTML);
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
    console.log(monthly)
    monthly.forEach((e,idx) => {
        e.addEventListener('click',(event) => {
            const mon = event.target;
            if(mon.nodeName == 'BUTTON') {
                console.log(typeof(month))
                month.innerHTML = mon.innerHTML;
            }
        })
    })
};

viewInfor();

const visualTab = () => {
    const tabMenu = document.querySelectorAll('.visual .tab_menu li');
    tabMenu.forEach((e,idx) => {
        e.addEventListener('click', (event) => {
            e.classList.add('on')
        })
    })
    console.log(tabMenu)
}

const mainMenu = () => {
    const dropMenu = document.querySelectorAll('.main_menu .click');
    const dropContents = document.querySelectorAll('.sub_depth2 li')
    console.log(dropContents)
    
    dropMenu.forEach((e,idx) => {
        e.addEventListener('click', (activeSection) => {
            
        })
    })
    
    const activeSection = (e) => {
        let menuIndex = [...dropMenu].indexOf(e.target)
    
        console.log(menuIndex)
    }
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

        console.log('hello')
        
        const $slide = $('.module_slide_card');
        console.log('world')
        $slide.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
                          

      console.log('end')
    
})


