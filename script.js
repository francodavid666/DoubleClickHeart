const image = document.querySelector('.container'),
heartIcon = document.querySelector('.heart');

//agregamos el doble click

image.addEventListener('dblclick',(e)=>{
    //calculamos la posicion en X e Y del click
    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY- e.target.offsetTop;
    //colocamso la posicion (valores) indicada para el corazon
    heartIcon.style.left = `${xValue}px`
    heartIcon.style.top = `${yValue}px`

    //agregmos el activador del corazon
    heartIcon.classList.add('active')

    //removemos el activador 1 segundo
    setTimeout(()=>{
        heartIcon.classList.remove('active')
    },1000)
});

