document.addEventListener("DOMContentLoaded", (event) => {

const weeklyDatas = [
    {
        id:0,
        start : 'seoul',
        end: 'osaka',
        way: '왕복',
        price: '450,000',
        information: 'Winter festival'
    },
    {
        id:1,
        start : 'seoul',
        end: 'fukuoka',
        way: '왕복',
        price: '560,000',
        information: 'Ice festival'
    },
    {
        id:2,
        start : 'seoul',
        end: 'shanghai',
        way: '왕복',
        price: '528,000',
        information: 'Spring festival'
    },
    {
        id:3,
        start : 'seoul',
        end: 'taiwan',
        way: '왕복',
        price: '589,000',
        information: 'Tulip festival'
    },
    {
        id:4,
        start : 'seoul',
        end: 'guam',
        way: '왕복',
        price: '1,030,000',
        information: 'Rose festival'
    },
    {
        id:5,
        start : 'seoul',
        end: 'doha',
        way: '왕복',
        price: '1,693,000',
        information: 'Summer festival'
    },
    {
        id:6,
        start : 'seoul',
        end: 'san francisco',
        way: '편도',
        price: '958,000',
        information: 'Pool festival'
    },
    {
        id:7,
        start : 'seoul',
        end: 'cancun',
        way: '편도',
        price: '1,201,000',
        information: 'Kayaking festival'
    },
    {
        id:8,
        start : 'seoul',
        end: 'lundon',
        way: '편도',
        price: '1,305,000',
        information: 'Fall festival'
    },
    {
        id:9,
        start : 'seoul',
        end: 'barcelona',
        way: '왕복',
        price: '2,490,000',
        information: 'Maple festival'
    },
    
]
// recommand lists
const recomDatas = [
    {
        id:1,
        start : 'seoul',
        end: 'osaka',
        way: '왕복',
        price: '520,000'
    },
    {
        id:2,
        start : 'seoul',
        end: 'frankfurt',
        way: '왕복',
        price: '1,482,900'
    },
    {
        id:2,
        start : 'seoul',
        end: 'honolulu',
        way: '왕복',
        price: '2,321,000'
    },
    {
        id:3,
        start : 'seoul',
        end: 'toronto',
        way: '왕복',
        price: '2,493,000'
    },
    {
        id:4,
        start : 'seoul',
        end: 'sweden',
        way: '편도',
        price: '1,734,000'
    },
    {
        id:5,
        start : 'seoul',
        end: 'guam',
        way: '왕복',
        price: '520,000'
    },
    {
        id:6,
        start : 'seoul',
        end: 'boracay',
        way: '왕복',
        price: '850,000'
    },
    {
        id:7,
        start : 'seoul',
        end: 'hongkong',
        way: '편도',
        price: '630,000'
    },
    {
        id:8,
        start : 'seoul',
        end: 'rome',
        way: '왕복',
        price: '2,450,000'
    },
    {
        id:9,
        start : 'seoul',
        end: 'paris',
        way: '왕복',
        price: '2,520,000'
    },
]
// weekly
const monthlyData = [
    {
        id: 0,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 1,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 2,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 3,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 4,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 5,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 6,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 7,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 8,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 9,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 10,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    },
    {
        id: 11,
        price: '500,000',
        information:'아름다운 이벤트가 가득하고, 야시장등 볼거리가많습니다.'

    } 
]

const weeklyUpdate = () => {
    const wrap = document.querySelector('.weekly .module_slide_card');
    const count = weeklyDatas.length;
    let weeklyData = '';
    
    for (let i=0; i < count; i++){
        weeklyData += `<li class="module_card a">
        <a href="javascript:void(0);">
        <img src="./static/images/weekly_${[i]}.jpg" alt="images" class="picbg">
            <div class="text">
                <p class="journey">
                    <strong>${weeklyDatas[i].start}</strong>
                    <i class="material-symbols-outlined">
                        sync_alt
                    </i>
                    <strong>${weeklyDatas[i].end}</strong>
                </p> 
                <span>${weeklyDatas[i].way}</span> 
                <span class="price">
                    <b>KRW</b>
                    <em>${weeklyDatas[i].price}</em>
                    <span>~</span>
                </span>
            </div>
        </a>
        </li> `
    }
   wrap.innerHTML = weeklyData;
}
weeklyUpdate();

const recommandUpdate = () => {
    const wrap = document.querySelector('.recommand .module_slide_card');
    const count = recomDatas.length;
    let recommandData = '';

    for (let i=0; i < count; i++){
        recommandData += `<li class="module_card a">
        <a href="javascript:void(0);">
        <img src="./static/images/pics_${[i]}.jpg" alt="images" class="pics">
            <div class="text">
                <p class="journey">
                    <strong>${recomDatas[i].start}</strong>
                    <i class="material-symbols-outlined">
                        sync_alt
                    </i>
                    <strong>${recomDatas[i].end}</strong>
                </p> 
                <span>${recomDatas[i].way}</span> 
                <p class="price">
                    <b>KRW</b>
                    <em>${recomDatas[i].price}</em>
                    <span>~</span>
                </p>
            </div>
        </a>
    </li>`
    }
    wrap.innerHTML = recommandData;
}

recommandUpdate();

const viewInfor = () => {
    const view = document.querySelector('.view_detail');
    const recomm = document.querySelectorAll('.recommand .module_slide_card li');
    const weekly = document.querySelectorAll('.weekly .module_slide_card li');
    const dimm = document.querySelector('.dimm');
    const book_button = view.querySelector('.modal_book');
    const close = view.querySelector('.modal_close');
    const monthly = view.querySelectorAll('.monthly button');
    const month = view.querySelector('.month');
    const info = view.querySelector('.info');
    const monthEvent = view.querySelector('.monthEvent'); 
    const closeModal = () => {
        view.classList.remove('open');
        dimm.classList.remove('open');
    }
   
    book_button.addEventListener('click', closeModal);

    let date = new Date();
    let now = date.getMonth();

    const openModal = (now) => { 
        view.classList.add('open');
        dimm.classList.add('open');
        console.log(now)
        month.innerHTML = `${monthlyData[now].id + 1}월<span>${monthlyData[now].information}</span>`
        
    }
   
    close.addEventListener('click',closeModal);
    
    

    recomm.forEach( (e,idx) => {  
        e.addEventListener('click',(event) => {
            const contents = e.children[0].innerHTML; 
            openModal(now)
            view.classList.add('notInfo')
            info.innerHTML = contents;
        }) 
    })

    weekly.forEach((e, idx) => {
        e.addEventListener('click',(event) =>{
            const contents = e.children[0].innerHTML;
            view.classList.remove('notInfoc')

            openModal(now)
            info.innerHTML = contents;
            
        } )
    })

    
    monthly[now].classList.add('active')
    monthly.forEach((e,idx) => {
        e.addEventListener('click',(event) => {
            const mon = event.target;
            if(mon.nodeName == 'BUTTON') {
                // month.innerHTML = mon.innerHTML;

              monthly.forEach( (e) => {
                e.classList.remove('active')
              })

              mon.classList.add('active')
                month.innerHTML =
                `
                    ${monthlyData[idx].id + 1}월<span>${monthlyData[idx].information}</span>` 
                
            }

        })
    })
};

viewInfor();

const visualTab = () => {
    const tabMenus = document.querySelectorAll('.visual .tab_menu li');
    const tabContainer = document.querySelector('.visual .tab-container')
    const tabContents = document.querySelectorAll('.tab-contents');
    const cancels = document.querySelectorAll('.visual .cancel');
    // console.log(tabContents)
    tabMenus.forEach((tabMenu,index) => {
        tabMenu.addEventListener('click', (e) => {
            tabMenus.forEach(menu => {
                menu.classList.remove('on');
            })
            e.currentTarget.classList.add('on');
            tabContainer.classList.add('open')

            tabContents.forEach(content => {
                content.classList.remove('active');
            })

            tabContents[index].classList.add('active');
        })

    })
    cancels.forEach((cancel) => {
        cancel.addEventListener('click', (e) => {
            tabContainer.classList.remove('open');
        })

    })
    
}

const pcGnb = () => { 
    const header = document.getElementById("header");
    const gnb = header.querySelector('.gnb');
    const menus = gnb.querySelectorAll(".depth1 > li");
    const bg = header.querySelector(".bg");
    const line = gnb.querySelector(".line"); 
    const arrow_back = document.querySelector('.arrow_back');
    const dimm = document.querySelector('.dimm') 

    const pcReset = () => {
        gnb.classList.remove('on');
        dimm.classList.remove('open');
        arrow_back.style.display = 'none';
    }

    pcReset();

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
    $list.slick({
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 960,
              settings: {
                arrows: true
              }
            },]
        });
 
        
    const $recommand = $('.recommand .module_slide_card');
    
    $recommand.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                dots: false
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
        });

    const $weekly = $('.weekly .module_slide_card');
    
    $weekly.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 960,
                settings:{
                    slidesToShow: 3,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  dots: false
                }
            },
            {
                breakpoint: 360,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
        });
}
                          
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

const mobileGnb = () => {
    const menus = document.querySelectorAll('.depth1 > li');
    const menu_btns = document.querySelectorAll('.main_btn');
  
    const gnb = document.querySelector('.gnb');
    const sub_depth2 = document.querySelectorAll('.sub_depth2');
    const hamburger = document.querySelector('.hamburger');
    const arrow_back = document.querySelector('.arrow_back');
    const dimm = document.querySelector('.dimm') 
    const bg = header.querySelector(".bg");

    hamburger.addEventListener('click',() => { 
        gnb.classList.toggle('on')
        dimm.classList.toggle('open')
    })

    const showMenu = (menu, idx) => { 
        menu.classList.add("on");  
    };
    
    menus.forEach((btn, index) => {
        btn.addEventListener('click', (menu) => { 
            const target = menu.target;
            if(target.nodeName == 'A') {
                console.log('clicked A')      
            }
            menu_btns.forEach((e)=>{
                e.style.display = 'none'
            })
            btn.classList.add('on');
            target.style.display = 'block'
            
            arrow_back.style.display = 'block'; 
        })
    })

    arrow_back.addEventListener('click', (e) =>{
        menus.forEach((e) => {
            e.classList.remove('on')
        })

        menu_btns.forEach((e) => {
            e.style.display = 'block'
        })
    })
   

    // hamburger.addEventListener('click', openMenu);
    // console.log(hamburger)
    // 메뉴들 클릭하면 depth1 숨기고 submenu만 보여야함
    // back 버튼 보이게
    // back 버튼을 클릭하면 submenu 닫고 depth1 보이게
    // dimm 처리하고 , dimm 누르면 메뉴 닫아지기
    // 헴버거 메뉴 기능 설정하기
}


const chkMobile = () => {
    const matchResult = window.matchMedia(`(max-width: 960px)`);
    const tabContainer = document.querySelector('.page_main .visual .tab-container');
    
    if(matchResult.matches) {

        // is Mobile
        // tabContainer.style.display = 'none'
        tabContainer.classList.remove('open')
        console.log('mobile')
        mobileGnb();
    }else{

        // is not Mobile
        // tabContainer.style.display = 'block'
        tabContainer.classList.add('open')
         
        console.log('pc')
        pcGnb();
    } 
}


const scrollTabMenu = () => {
    const tabMenu = document.querySelector('.tab_menu');
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 100) {
            tabMenu.style.display = 'none'
        }else{
            tabMenu.style.display = 'flex'
        }
    })
}

const rangeDates = () => {
    const trip = document.getElementById('trip_range');
    const start = document.querySelector('.start');
    const end = document.querySelector('.end');
    
    function updateTrip(){
        // start.innerHTML = trip.value;
        console.log(allDay);
        let range1 = new Date( allDay.selectedDates[0]);
        let range2 = new Date( allDay.selectedDates[1]);
        start.innerHTML = `
            ${range1.getFullYear()}-${range1.getMonth()+1}-${range1.getDate()}
        `
        end.innerHTML = `
        ${range2.getFullYear()}-${range2.getMonth()+1}-${
            range2.getDate()}`
    }

   
  
    const allDay = flatpickr(trip, {
        enableTime: false, // 시간 선택 여부
        locale: "ko", // 한국어
        altInput: true, // 기존 입력을 숨기고 새 입력을 만듦
        altFormat : "Y-m-d",
        // mode: "multiple",
        // defaultDate: ["today", "today"],
        mode: "range",
        minDate: "today",
        dateFormat: "Y-m-d",
        // defaultDate: ["today", "2023-06-15"],
        onChange: function() {
            updateTrip();
        },
    });
   

     
}
 
        
     
 



 
chkMobile();
window.addEventListener('resize', chkMobile)
 
visualTab(); // home - tabmenu
noticeAutoScroll(); // notice
slideBanners(); //jquery 
searchBox();
scrollTabMenu();
// selectDate();
rangeDates();

})