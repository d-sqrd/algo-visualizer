// const DELAY = 100;
// let time = 0;

function colorUpdate(htmlNode1, htmlNode2, bgColor) {
    // time += DELAY;
    setTimeout(() => {
        htmlNode1.style.backgroundColor = bgColor;
        htmlNode2.style.backgroundColor = bgColor;
    }, time += DELAY);
    // return(time);
}

function heightUpdate(div1, div2) {
    // time += DELAY;
    setTimeout(() => {
        let temp = div1.style.height;
        div1.style.height = div2.style.height;
        div2.style.height = temp;
    }, time += DELAY);
    // return(time);
}

