////////////////////////////////////////////////////
//電卓１
////////////////////////////////////////////////////

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
        work = total_count + myCalc +display_no;
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
//電卓２
////////////////////////////////////////////////////

const display = document.getElementById('den_2--display');
let dis_no = '';
let flag = 1;
let total = 0;
let calcMe = '+';

//数字を押した時の処理
function counter2(num) {
    flag = 0;
    dis_no += num;
    display.innerText = dis_no;
}

//
function count_cal(cal) {
    if (flag === 0) {
        flag = 1;
        works = total + calcMe +dis_no;
        console.log(works);
        dis_no = "";
        total = eval(works);
        display.innerText = total;
    }else{
        flag = 1;
    }
    if (cal === '=') {
        display.innerText = total;
        total = 0;
        calMe = '+';
        dis_no = '';
        flag = 1;
    }else{
        calcMe = cal;
    }
}

//delを押した後の処理
function count_del() {
    flag = 1;
    dis_no = '';
    total = 0;
    calcMe = '+';
    display.innerText = 0;
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
