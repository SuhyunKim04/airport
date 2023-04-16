const button = document.querySelector('.openModal');
const dimm = document.querySelector('.dimm');
// const view = document.querySelector('.view_detail');
button.addEventListener('click',(e)=>{
    view.classList.add('open');
    dimm.classList.add('open');
})

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

 
$(function() {
    const $list = $('.slide_wrap .slide_list');
    // const $slide = $('.test_slide')
    $list.slick({
        dots: true,
        infinite: true,
        arrows:true,
        speed: 500,
        // fade: true,
        cssEase: 'linear'
        });
})
 



