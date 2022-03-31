const DELAY = 100;

function heightUpdate(div1, div2, time) {
    time += DELAY;
    setTimeout(() => {
        let temp = div1.style.height;
        div1.style.height = div2.style.height;
        div2.style.height = temp;
    }, time);
    return(time);
}