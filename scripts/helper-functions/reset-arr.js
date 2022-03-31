function resetArray(parentDiv) {
    let barsArr = [];
    for(let i = 0; i < NUMBER_OF_BARS; i++) {
        let newBarHeight = Math.floor(Math.random() * 200 + 50);    //generate random integers between 50 and 250
        let newBar = document.createElement('div');
        newBar.setAttribute('class', 'bars');
        newBar.style.height = newBarHeight + "px";
        parentDiv.appendChild(newBar);
        barsArr.push(newBarHeight);
    }
    return(barsArr);
}

