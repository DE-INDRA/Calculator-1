const screen=document.getElementById("screen");
let str="";
function calculate(val){
    str+=val;
    screen.value=str;
}
function go() {
    let result = 0.0;
    let operator = '@';
    let hook = 0;
    let i = 0;

    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) === '+' || str.charAt(i) === '-' || str.charAt(i) === '*' ||str.charAt(i) === '^'|| str.charAt(i) === '/' || i === str.length - 1) {
            let temp = 0.0;
            if (i === str.length - 1) {
                temp = parseFloat(str.substring(hook, i + 1));
            } else {
                temp = parseFloat(str.substring(hook, i));
            }

            if (operator === '@') {
                result = temp;
            } else {
                switch (operator) {
                    case '+':
                        result = result + temp;
                        break;
                    case '-':
                        result = result - temp;
                        break;
                    case '*':
                        result = result * temp;
                        break;
                    case '/':
                        result = result / temp;
                        break;
                    case '^':
                        result = Math.pow(result,temp);
                        break;     
                    default:
                        console.log("Invalid input");
                }
            }
            operator = str.charAt(i);
            hook = i + 1;
        }
    }
    screen.value=result;
    str=result;
}
function Clear(){
    str="";
    screen.value="";
}
function Delete(){
    str=str.substring(0,str.length-1);
    screen.value=str;
}

// Example Usage:

