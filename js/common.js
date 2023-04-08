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
    const dimm = document.querySelector('.dimm');
    const depart = view.querySelector('.departure');
    const arrive = view.querySelector('.arrive');
    const price = view.querySelector('.price');
    const info = view.querySelector('.info');
    const close = view.querySelector('.close');

    const openModal = () => {
        
    }
    const closeModal = () => {
        view.classList.remove('open');
        dimm.classList.remove('open');
    }
    console.log(close)
    close.addEventListener('click', closeModal);
 
    function setDetail(index) {
        depart.innerHTML = datas[index].departure
        arrive.innerHTML = datas[index].arrive
        price.innerHTML = datas[index].price
    }

    function setjourney(index) {

    }

    list.forEach( (e,idx) => {
        e.addEventListener('click',(event) => {
            const target = event.target;
            console.log(target.innerHTML);
            if(target.nodeName == 'A') {
                view.classList.add('open');
                dimm.classList.add('open');
                info.innerHTML = target.innerHTML
            }
        })
    })

    
}

viewInfor();




