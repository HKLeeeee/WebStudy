console.log('app.js has runned');

window.onload = function() {
    const h1 = document.querySelector('#header');
    function handleMouseEnter() {
        h1.innerText = 'Mouse is here!';
    }
    function handleMouserLeave() {
        h1.innerText = 'Mouse is gone';
    }
    h1.addEventListener('mouseenter', handleMouseEnter);
    h1.addEventListener('mouseleave', handleMouserLeave);

    // css on javascipt
    // function changeH1Color(){
    //     const currColor = h1.style.color;
    //     let newColor;
    //     if (currColor === 'blue'){
    //         newColor = 'tomato';
    //     }
    //     else {
    //         newColor = 'blue';
    //     }
    //     h1.style.color = newColor;
    // }d
    
    
    function changeH1Color() {
        // const clickedClass = 'active';
        // if (h1.classList.contains(clickedClass)){
        //     h1.classList.remove(clickedClass);
        // }else {
        //     h1.classList.add(clickedClass);
        // }
        // same as
        h1.classList.toggle('active');
    }

    h1.addEventListener('click', changeH1Color);
}