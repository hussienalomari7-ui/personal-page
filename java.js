console.log('hi . this is first coode in java script');



for(let a=0 ; a<3 ; a=a+1 ){
    console.log('hellow') ; // we are going to print "hellow" three 
}



let test =20;
var testt = 19 ;
const testtt = 18; 

console.log(test) // 20
console.log(testt) // 19
console.log(testtt) // 18

if(testtt>testt)
{
    document.getElementById('a').style.backgroundColor='red'  ; // color shape = red 
}
else if(testt>test)
{
    document.getElementById('a').style.backgroundColor='green'  ; // color shape = red 
}
else
{
    document.getElementById('a').style.backgroundColor='blue'  ; 
}

switch (testtt) {
    case  20 :{document.getElementById('b').style.backgroundColor='blue'  ;  }  
        break;
    case  19 :{document.getElementById('b').style.backgroundColor='black'  ;  }  
        break;
    case  18 :{document.getElementById('b').style.backgroundColor='red'  ;  }  
        break;

    default :{ document.getElementById('b').style.backgroundColor='green'  ; }
        break;
}




