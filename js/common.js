// const button = document.querySelector('.openModal');
// const dimm = document.querySelector('.dimm');
// // const view = document.querySelector('.view_detail');
// button.addEventListener('click',(e)=>{
//     view.classList.add('open');
//     dimm.classList.add('open');
// })
document.addEventListener("DOMContentLoaded", (event) => {

const tripLists = [
    {
        id:0,
        start : 'seoul',
        end: 'osaka',
        way: '왕복'
    },
    {
        id:1,
        start : 'seoul',
        end: 'fukuoka',
        way: '왕복'
    },
    {
        id:2,
        start : 'seoul',
        end: 'shanghai',
        way: '왕복'
    },
    {
        id:3,
        start : 'seoul',
        end: 'taiwan',
        way: '왕복'
    },
    {
        id:4,
        start : 'seoul',
        end: 'guam',
        way: '왕복'
    },
    {
        id:5,
        start : 'seoul',
        end: 'doha',
        way: '왕복'
    },
    {
        id:6,
        start : 'seoul',
        end: 'san francisco',
        way: '편도'
    },
    {
        id:7,
        start : 'seoul',
        end: 'cancun',
        way: '편도'
    },
    {
        id:8,
        start : 'seoul',
        end: 'lundon',
        way: '편도'
    },
    {
        id:9,
        start : 'seoul',
        end: 'barcelona',
        way: '왕복'
    },
    
]

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

const weeklyUpdate = () => {
    const wrap = document.querySelector('.weekly .module_slide_card');
    const count = tripLists.length;
    let weeklyData = '';
    
    for (let i=0; i < count; i++){
        weeklyData += `<li class="slide_card a">
        <a href="javascript:void(0);">
        <img src="./static/images/weekly_${[i]}.jpg" alt="images" class="picbg">
            <div class="text">
                <p>
                    <strong>${tripLists[i].start}</strong>
                    <i class="material-symbols-outlined">
                        sync_alt
                    </i>
                    <strong>${tripLists[i].end}</strong>
                </p> 
                <span>${tripLists[i].way}</span> 
                <p>
                    <b>KRW</b>
                    <em>${datas[i].price}</em>
                    <span>~</span>
                </p>
            </div>
        </a>
        </li> `
    }
   wrap.innerHTML = weeklyData;


    let test = '';
    const a = ['mango','banana','melon']
    for(let i=0; i< a.length; i++) {
        test = test + a[i]
        test += a[i]
    }


    console.log(test);
}

weeklyUpdate();

const viewInfor = () => {
    const view = document.querySelector('.view_detail');
    const list = document.querySelectorAll('.recommand .module_slide_card li');
    // const weekly = document.querySelectorAll('.weekly .module_slide_card li');
    const dimm = document.querySelector('.dimm');
    const info = view.querySelector('.info');
    const book_button = view.querySelector('.book_button');
    const close = view.querySelector('.close');
    const monthly = view.querySelectorAll('.monthly button');
    const month = view.querySelector('.month');
    // view.innerHTML = datas[index].information
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
    
    let date = new Date();
    let now = date.getMonth();
    

    list.forEach( (e,idx) => {
        e.addEventListener('click',(event) => {
            const target = event.target;
           
            if(target.nodeName == 'A') {
                openModal()
                info.innerHTML = target.innerHTML + datas[now].information;
            }
        })
    })

    // weekly.forEach((e,idx) => {
    //     e.addEventListener('click',(week) => {
    //         const aim = week.target;
    //         if(aim.nodeName == 'A') {
    //             openModal();
                
    //             info.innerHTML = aim.innerHTML + datas[now].information;
    //             console.log(document.querySelector('.view_detail .test_price'));   
    //         }

    //     })
    // })
    
    monthly.forEach((e,idx) => {
        e.addEventListener('click',(event) => {
            const mon = event.target;
            if(mon.nodeName == 'BUTTON') {
                month.innerHTML = mon.innerHTML;
                info.innerHTML = datas[idx].information;
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
    const header = document.getElementById("header");
    const gnb = header.querySelector('.gnb');
    const menus = gnb.querySelectorAll(".depth1 > li");
    const bg = header.querySelector(".bg");
    const line = gnb.querySelector(".line");

    
    const showMenu = (menu, idx) => {
        
        menu.classList.add("on"); 
        let size = menu.offsetWidth; 
        bg.style.height = menu.children[1].offsetHeight + "px";  
        lineUpdate(idx, size);
    };

    const lineUpdate = (idx, size) => {
        
        let start = gnb.offsetLeft;
        let x = start;

        if (idx === "hide") {
            line.style.display = "none";
            return false;
        }else {
            line.style.display = "block";
        }

        if (idx === 0) {
            x = start;
        } else if (idx === 1) {
            x = menus[0].offsetWidth + 20 + start;
        } else if(idx === 2) {
            x = menus[0].offsetWidth + menus[1].offsetWidth + 40 + start;
        }else {
            x = menus[0].offsetWidth + menus[1].offsetWidth + menus[2].offsetWidth + 60 +start;
        }

        line.style.left = x + "px";
        line.style.width = size + "px";
    };

    const hideMenu = (menu) => {
        
        menus.forEach((menu) => menu.classList.remove("on"));
        bg.style.height = 0;
        lineUpdate("hide");
    };

    menus.forEach((menu, idx) => {
        menu.addEventListener("mouseenter", () => {
            hideMenu();
            showMenu(menu, idx);
        });

        gnb.addEventListener("mouseleave", () => {
            hideMenu();
        })
    })
}

function slideBanners() {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        });
}
                          

      
 

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
const noticeAutoScroll = () => {
    const notice = document.getElementById('notice');
    const list = notice.querySelector('.list ul');

    
    let timerId;
    let size = 0;
    let line = notice.querySelector('.list').offsetHeight;
    let limit = (list.childElementCount - 1 )* line
    const scrollUp = () => {
    
        if (size >= limit){
            size = 0 
        }else{
            size += line
            // 만약 사이즈가 250보다 크면 0으로 돌아가고, 작으면 50을 더해라
        }
        list.style.transform = `translateY(-${size}px)`;

        
    }

    const loopPlay = () => {
        timerId = setInterval(scrollUp, 3000);
    }
    const loopStop = () => {
        clearInterval(timerId);
        console.log('scroll is stoped')
    }

    loopPlay();
    notice.addEventListener('mouseenter', loopStop );
    notice.addEventListener('mouseleave', loopPlay );


}


const searchBox = () => {
    
    const search = document.querySelector('.openSearch');
    const searchModal = document.querySelector('.searchModal');
    const searchClose = searchModal.querySelector('.close');
    const dimm = document.querySelector('.dimm');

    const openSearchModal = () => {
        console.log('hello')
        searchModal.classList.add('open')
        dimm.classList.add('open')

        
    }
    search.addEventListener('click',openSearchModal);

    const closeSearchModal = () => {
        searchModal.classList.remove('open');
        dimm.classList.remove('open')
    }
    searchClose.addEventListener('click', closeSearchModal);
}
mainMenu(); // gnb
visualTab(); // home - tabmenu
noticeAutoScroll(); // notice
slideBanners(); //jquery 
searchBox();
})