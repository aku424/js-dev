////////////////////////////////////////////////////
//電卓１
////////////////////////////////////////////////////
// const no1 =document.getElementById('no1');
// const no2 =document.getElementById('no2');
// const no3 =document.getElementById('no3');
// const no4 =document.getElementById('no4');
// const no5 =document.getElementById('no5');
// const no6 =document.getElementById('no6');
// const no7 =document.getElementById('no7');
// const no8 =document.getElementById('no8');
// const no9 =document.getElementById('no9');
// const pul =document.getElementById('pul');
// const min =document.getElementById('min');
// const del =document.getElementById('del');
// const equ =document.getElementById('equal');

let total_count = 0;
let display_no = "";
let flg = 0; //0ならば前回の入力は数値、1ならば演算子
let myCalc = "+";
let work = "";
const den_display =document.getElementById('den__main--display');
function counter(no) {
    flg = 0;
    display_no += no;
    den_display.innerText=display_no
}
function counter_del() {
    display_no = ""
    den_display.innerText=0
}
function calc(date) {
    if (flg === 0){
        flg = 1;
        work =   +total_count + myCalc +display_no;
        console.log(work);
        total_count = eval(work);
        display_no = "";
        den_display.innerText=total_count;
    }
    if (date === "=") {
        total_count = 0;
        myCalc = '+';
    }else{
        myCalc = date;
    }

}

////////////////////////////////////////////////////
//カウンター
////////////////////////////////////////////////////
const btn = document.getElementById('c-btn');
const c_del = document.getElementById('c-del');
let count = 0;
const counter_display =document.getElementById('counter__main--display');

btn.addEventListener('click',function(){
    count =count+1;
    if (count === 21) {
        count = 0
    }
    console.log(count);
    counter_display.innerText=count;
});
c_del.addEventListener('click',function(){
    count = 0
    console.log(count);
    counter_display.innerText=count;
});

////////////////////////////////
//カウンター
////////////////////////////////
const c1_d = document.getElementById('counter1-display');
const c1_b = document.getElementById('counter1_btn');
let count1 = 0;

c1_b.addEventListener('click',function(){
    count1 += 1;
    c1_d.innerText=count1;
});
