//JS DOM BOM
//1.抓元件 文字內容改掉
//let 宣告變數 可以變化
//const 宣告變數 不可以變化

//1.1 result
const myForm = document.getElementById("myForm");//()裡是Html id,"myFrom"是自己取的變數名稱
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const optInput = document.getElementById("opt");
const resultp = document.getElementById("result");//抓document裡面的result ID
//檢查JS是否抓到該id
console.log(document);
console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultp);

//num1Input.value="123456";
//num2Input.value="987654";

//當myForm的submit送出
//抓到num1 num2的值
myForm.addEventListener('submit',function(e){
        e.preventDefault();//submit不送出資料
        console.log(num1Input.value);
        console.log(num2Input.value);
        let num1=parseInt(num1Input.value);
        let num2=parseInt(num2Input.value);
        let option = optInput.value;
        let sum = num1 + opt +num2;

        switch (option) {
                case "+":
                        result= num1 + num2;
                        break;
                case "-":
                        result= num1 - num2;
                        break;
                case "*":
                        result= num1 * num2;
                        break;
                case "/":
                        result= num1 / num2;
                        break;
                default:
                        break;
        }
        // ` 符號在Esc鍵下方，數字1左邊
        //submit get value
        console.log(result);
        // let mystring1 = `${num1}  ${option}  ${num2} = ${sum}`;
        let mystring2 = num1 + option + num2 + " = " +result;
        // console.log(mystring1);
        console.log(mystring2);
        //2.改元件 內容文字
        // resultp.innerText = "Hello first change text.";
        resultp.innerText = mystring2;
})
        
        