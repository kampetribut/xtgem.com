function fCheckNum(Isi){
if(isNaN(Isi.value)==true){ Isi.value="";Isi.focus();}else{fCalculate();}

}
function fCalculate(){
  var ekor=0;
  var ekor1=0
  var kop=0;
  var asi=0;
  var j;
  //with (document.all.item("totfrm").tags("INPUT")){
  with (document.getElementById("totfrm").getElementsByTagName("INPUT")){
  for(j=0;j<7;j++){
    if (item(j).value==""){
       ekor=parseInt(ekor);
       }else{
       if (j==1||j==2||j==3||j==4){
          ekor1=parseInt(ekor1)+parseInt(item(j).value);
          if (j==1||j==2){
             asi=parseInt(asi)+parseInt(item(j).value);
          }else{
             kop=parseInt(kop)+parseInt(item(j).value);
          }
       }else{ekor=parseInt(ekor)+parseInt(item(j).value);}
       }
  }
  ekor = ekor+ekor1*2;
  ekor=ekor.toString();
  ekor=ekor.substr(parseInt(ekor.length)-2);
  asi=asi.toString();
  asi=asi.substr(parseInt(asi.length)-1);
  kop=kop.toString();
  kop=kop.substr(parseInt(kop.length)-1);
  item(7).value=asi+kop+ekor;
  }
  //document.getElementByName("varCrtl").value=document.getElementById("totfrm").getElementsByTagName("INPUT").item(7).value;
}
function fHapus(){
  var j;
  with (document.getElementById("totfrm").getElementsByTagName("INPUT")){
  for(j=0;j<8;j++)
      item(j).value="";
}
document.getElementById("totfrm").getElementsByTagName("INPUT").item(0).focus();
}
                                    
 
