// level {2} 
function ab1(){
var a1=[1, 3, 4, 6, 7, 8]
var c1=[]
for(var k of a1){
    if(k%2!=0){
        c1.push(k)
    }
}
return c1
}
ab1()
// ########################

function ab2(){
    var b1=[]
    var a21=[]
    var d1=''
    for(var i=0;i<c1.length;i++){
        b1.push(c1[i])
    }
for(var k of b1){
  console.log(k)
 if (k=='a'||k=='A'||k=='e'||k=='E'||k=='i'||k=='I'||k=='o'||k=='O'||k=='u'||k=='U'){
 a21.push(k.toUpperCase())
 }
  else{
  a21.push(k)}
}
console.log(b1)
console.log(a21)
for( var k1 of a21)
{
  d1=k1+d1
}
return d1
}
// -----------------------------------------------------------------------
function max(){
    var a1=[1, 3, 4, 6, 7, 8, 2, 5]
    a2=Math.max(...a1);
return a2
}