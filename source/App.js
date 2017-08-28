module.exports={
  aritGeo:(A)=>{
  var arit=0;
  var geo=0;
  
  if(A==[]){
    return 0;
  }else if(A.length<=2){
      return undefined;
  }else{
      for (var i=0;i<A.length-2;i+=1){
        if (A[i+1]-A[i]===A[i+2]-A[i+1]){
          arit+=1;
        }else if (A[i+1]/A[i]===A[i+2]/A[i+1]){
          geo+=1;
        }else return -1;
      }
  }
     
     if(arit==A.length-1){
       return "isArithmetic";
     }else if (geo==A.length-1){
       return "isGeometric";
     }
}
}
