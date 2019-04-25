function cdtt(){
 let   a= document.getElementById("0").value;
 let   f=document.getElementById("5").value;
 let   g=document.getElementById("6").value;
let x ;
    if(f==="1"&&g==="3"){
        x=23000*a;//USD >> VND
    }
    if(f==="2"&&g==="3"){
        x=a; // VND>> VND
    }
    if(f==="2"&&g==="4"){//USD>>VND
        x= a/23000;
    }
    if(f==="2"&&g==="3"){//USD>>USD
        x=a;
    }
   // document.write("result= "+x);
document.getElementById("323    ").value = x;
}