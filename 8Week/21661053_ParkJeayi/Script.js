// JavaScript source code
/*
 * 
 * 
var Num_1 = 1;
var Num_2 = 2;
var Num_3 = 3;
var Num_4 = 4;
var Num_5 = 5;
*/
/* 1.����(1-5) �� ���� ���õ� ���ڿ� ���� ������(+, -, *, /, %) ��ư�� Ŭ���� ���� ó���� �����ϵ��� �����մϴ�.*/

/* 2.����� ����� result ���̵� ���� ������ ���� ����մϴ�.*/

/* 3.�ʱ�ȭ ��ư�� Ŭ���� ����(0)�� �ʱ�ȭ�մϴ�.*/


document.onselectstart = new Function("return false");//��ũ������.


//���ڹ�ư�� ������ ���̴ٶ�����.
var Result = document.getElementById('result');
//var Numresult = Result[0].getAttribute('input');
Result.value = 0;//���� �� �����.
var Numchoice ;//���ð�

console.log(Result.value);


//---------------------------------------------------------���� �� });
var Num1 = document.getElementById('ButtonNum1');
Num1.addEventListener('click', function () {
    Numchoice = 1;
    console.log(Numchoice);})
var Num2 = document.getElementById('ButtonNum2');
Num2.addEventListener('click', function () {
    Numchoice = 2;
    console.log(Numchoice);})
var Num3 = document.getElementById('ButtonNum3');
Num3.addEventListener('click', function () {
    Numchoice = 3;
    console.log(Numchoice);})
var Num4 = document.getElementById('ButtonNum4');
Num4.addEventListener('click', function () {
    Numchoice = 4;
    console.log(Numchoice);})
var Num5 = document.getElementById('ButtonNum5');
Num5.addEventListener('click', function () {
    Numchoice = 5;
    console.log(Numchoice);})

//---------------------------------------------------------���� });
var _Plus = document.getElementById('Plus');
_Plus.addEventListener('click', function ()
{ //Result.value += Numchoice;

    Result.value = (Number(Result.value) + Numchoice);;
});
var _Subtract = document.getElementById('Subtract');
_Subtract.addEventListener('click', function ()
{
Result.value -= Numchoice;
    console.log(typeof Result.value);});
var _Multiply = document.getElementById('Multiply');
_Multiply.addEventListener('click', function ()
{Result.value *= Numchoice;  });
var _Division = document.getElementById('Division');
_Division.addEventListener('click', function ()
{ Result.value %= Numchoice;  })
var _Remainder = document.getElementById('Remainder');
_Remainder.addEventListener('click', function ()
{ Result.value /= Numchoice; });



var reset = document.getElementById("Reset");
reset.addEventListener('click',function ()
{
    Result.value = 0;
})



