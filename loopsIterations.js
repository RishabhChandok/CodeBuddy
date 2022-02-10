level {2}
function(){
    var n=6
    var n1=0
    var n2=1
    var n3=0
    var sum=0
    for(var i=1;i<=n;i++){
        sum+=n1
        n3=n1+n2
        n1=n2
        n2=n3
    }
    return sum
}