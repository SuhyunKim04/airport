const button = document.querySelector('.openModal');
const dimm = document.querySelector('.dimm');
const view = document.querySelector('.view_detail');
button.addEventListener('click',(e)=>{
    view.classList.add('open');
    dimm.classList.add('open');
})

const datas = [
    {
        id:0,
        title:'1월',
        journey: `<p>
                    <strong>서울 / 인천</strong>
                    <i class="material-symbols-outlined">
                        sync_alt
                    </i>
                    <strong>오사카</strong>
                </p> `,
        information:`<span>왕복</span> 
                        <p>
                            <b>KRW</b>
                            <em>1,482,500</em>
                            <span>~</span>
                        </p>`
    }
]

const viewInfor = () => {
    const view = document.querySelector('.recommand')
    const card = recommand.querySelector('.module_slide_card');

    function setDetail(index) {
        const depart = view.querySelector('.departure');
        const icon = view.querySelector('.material-symbols-outlined');
        const arrive = view.querySelector('.arrive');
        const way = view.querySelector('.way');
        const exchange = view.querySelector('.exchange')
        const price = view.querySelector('.price')
        const symbol = view.querySelector('.symbol')

    }
}