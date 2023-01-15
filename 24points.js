// ①(a—b）×（c+d）
// 如（10—4）×（2+2）=24等。
// ②（a+b）÷c×d
// 如（10+2）÷2×4=24等。
// ③（a－b÷c）×d
// 如（3—2÷2）×12=24等。
// ④（a+b－c）×d
// 如（9+5—2）×2=24等。
// ⑤a×b+c—d
// 如11×3+l—10=24等。
// ⑥（a－b）×c+d
// 如（4—l）×6+6=24等。
// ⑦（a×b）÷（c+d）
// 如（6×8）÷（1+1）=24等。也可以用计算机编程好后再做。
function get(){
const {
    randomInt
} = require('@kivibot/core')
var type = randomInt(1, 7)
var formula = [
    '(a-b)*(c+d)',
    '(a+b)/c*d',
    '(a-b/c)*d',
    '(a+b-c)*d',
    'a*b+c-d',
    '(a-b)*c+d',
    '(a*b)/(c+d)'

]
var a = randomInt(1, 10)
var b = randomInt(1, 10)
var c = randomInt(1, 10)
var d = randomInt(1, 10)
while (true) {
    var a = randomInt(1, 10)
    var b = randomInt(1, 10)
    var c = randomInt(1, 10)
    var d = randomInt(1, 10)
    if(eval(formula[type])==24){
        break;
    }
}
const result=[formula[type].replace('a',a).replace('b',b).replace('c',c).replace('d',d),[a,b,c,d]]
return result
}
const fs=require('fs')
var obj={}
for(var i=0;i<400;i++){
    obj[i]=get()
}
fs.writeFile('24.json',JSON.stringify(obj),(err)=>{
    if(err){
        console.log(err)
    }
})