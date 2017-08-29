module.exports={

  aritGeo:(arr)=>{ 
if(arr.length===0)
  return 0;
if(arr.length<=2)
  return undefined;
var cmDiff = arr[1] - arr[0];
var cmRatio = arr[1] / arr[0];

var arith = true;
var geo = true;

for(var i = 0; i < arr.length - 1; i++)
{
    if( arr[i + 1] - arr[i] !== cmDiff )
      arith = false;
    if(arr[i + 1] /arr[i] !== cmRatio)
      geo = false;
}

if(arith === true)
    return "arithmetic";
else if(geo === true)
    return" geometric";
else
    return -1;

  }

}


