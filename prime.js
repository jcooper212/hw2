#! /usr/bin/env node


var primeCount = 100;

var primeArr = [];
var N = 1000000;
var out_line;

// Print to console
var prtString = function(arr) {

var str = "";
var cnt100 = 0;

for (var i=0; i < N; i++)
{
if (arr[i] == true) 
{
str = str + i + ",";
cnt100++;
}
if (cnt100 >= 100) break;
};
console.log(str);
}



primeArr[0]=false; primeArr[1]=false;

for (var i = 2; i < N; i++)
primeArr[i]=true;


for (var i  = 2; i < Math.sqrt(N); i++)
{
 for (var j= 2; j*i < N; j++)
 {
   primeArr[i*j]=false;
 }
}



out_line = prtString(primeArr);

//console.log(prtString(primeArr));
