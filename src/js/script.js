const productContainers = [...document.querySelectorAll('.sugestoes-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDeDimensao = item.getBoundingClientRect();
    let containerLargura = containerDeDimensao.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerLargura;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerLargura;
    })
})