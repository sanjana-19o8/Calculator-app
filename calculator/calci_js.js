const disExp =document.querySelector('.display-exp');
const disRes =document.querySelector('.display-result');

const numE1 = document.querySelectorAll('.num');
const operationE1 = document.querySelectorAll('.op');
const equal = document.querySelector('.equal');
const allclear = document.querySelector('.ac');
const del = document.querySelector('.del');

let dis1 = '';  //  display-exp number
let dis2 = '';  //  display-result number
let result = null;
let last_op = '';
let temp = 0;
let clear = false;
let haveDot = false;    // for validating decimal point

numE1.forEach( num => {
    num.addEventListener('click', (e)=> {
        if( e.target.innerText === '.'){
            if(!haveDot) {haveDot = true;}
            else return;
        }
        if(clear) {
            dis2 = '';
            clear = false;
        }
        dis2 += e.target.innerText;
        disRes.innerText = dis2;
    })
});

operationE1.forEach( op => {
    op.addEventListener('click', (e)=>{
        if(!dis2) return;
        haveDot = false;
        const opName = e.target.innerText;
        if(dis1 && dis2 && last_op){
            mathOperation();
        }else{
            result = parseFloat(dis2);
        }
        clearVar(opName);
        last_op = opName;
        console.log(result);
    })
});

function clearVar( name = ''){
    dis1 = dis2 + name;
    // to display temporary result add temp to new div
    disExp.innerText= dis1;
    disRes.innerText= '';
    dis2 = '';
    temp = `${result}`
}

function mathOperation(){
    if(last_op==='*') result = parseFloat(result) * parseFloat(dis2);
    else if(last_op==='+') result = parseFloat(result) + parseFloat(dis2);
    else if(last_op==='-') result = parseFloat(result) - parseFloat(dis2);
    else if(last_op==='/') result = parseFloat(result) / parseFloat(dis2);
    disRes.innerText = result;
    temp = `${result}`
}

equal.addEventListener('click',()=>{
    if (!dis2 || !dis1 || clear) {
        // disExp.innerText = dis2;
        // disRes.innerText = dsi2 = '0';
        return
    }
    haveDot=false;
    mathOperation();
    clearVar();
    disExp.innerText += dis2;
    disRes.innerText = result;
    temp = '';
    dis2 = result;
    dis1 = '';
    clear = true;
})

allclear.addEventListener( 'click', ()=>{
    disExp.innerText = '0';
    disRes.innerText = '0';
    dis1 = dis2 = '';
    result =0;
    temp = '';
})

del.addEventListener( 'click', ()=>{
    disRes.innerText = '0';
    dis2 = '';
})

window.addEventListener('keydown', (e)=>{
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        cliclButton
    }
})

function clickButtonE1(key) {
    numE1.forEach((button)=> {
        if (button.innerText === key) button.clicl();
    })
}

function cliclOperation(key) {
    operationE1.forEach( (operation)=> {
        if(operation.innerText === key) operation.click()
    })
}

function clickEqual () {
    equal.click()
}
