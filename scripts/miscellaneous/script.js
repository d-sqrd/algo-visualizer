// import foo from "./demo-function";


function init() {
    let time = 0;
    setTimeout(() => {
        // console.log("Hello world");
        foo();
    }, time += 5000);
    console.log(time);
}





window.onload = () => {
    init();
};