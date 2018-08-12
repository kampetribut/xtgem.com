<!--
function hapusx(){
	var fom = document.fom;
	hsl.style.display = "none";
	var s1x = eval("fom.s1");
	var s2x = eval("fom.s2");
	var s3x = eval("fom.s3");
	var s4x = eval("fom.s4");
	var s5x = eval("fom.s5");
	var s6x = eval("fom.s6");
	var s7x = eval("fom.s7");

	s1x.value = "";
	s2x.value = "";
	s3x.value = "";
	s4x.value = "";
	s5x.value = "";
	s6x.value = "";
	s7x.value = "";
	s1x.focus();
}
function convert(){
	var fom = document.fom;
	var s1 = eval("fom.s1");
	var s2 = eval("fom.s2");
	var s3 = eval("fom.s3");
	var s4 = eval("fom.s4");
	var s5 = eval("fom.s5");
	var s6 = eval("fom.s6");
	var s7 = eval("fom.s7");
	if ((!s1.value) || (!s2.value) || (!s3.value) || (!s4.value) || (!s5.value) || (!s6.value) || (!s7.value)){
		alert("Winning Numbers dan Additional Number harus diisi dengan angka \n Tidak boleh dikosongi!!");
		s1.focus();
		return;
	}//else if ()
	hsl.style.display = "block";
	var myarray=[s1.value, s2.value, s3.value, s4.value, s5.value, s6.value]
	myarray.sort(function(a,b){return a - b});	
	xyz = s7.value;
	xyz1 = myarray[0];
	xyz2 = myarray[1];
	xyz3 = myarray[2];
	xyz4 = myarray[3];
	xyz5 = myarray[4];
	xyz6 = 	myarray[5];
	var c = parseInt(myarray[0]) + parseInt(myarray[1]) + parseInt(myarray[2]) + parseInt(myarray[3]) + parseInt(myarray[4]) + parseInt(myarray[5]);
	c = parseInt(c) * 2;
	c = parseInt(c) - parseInt(myarray[0]) - parseInt(myarray[5]);
	c = parseInt(c) + Number(s7.value);
	c = ""+c;
	if (c.length > 2){
		c = c.substr(1,2);
	}
	var d = c.substr(1);
	c = c.substr(0,1);
	var b = parseInt(myarray[3]) + parseInt(myarray[4]);
	b = ""+b;
	if (b.length > 2){
		b = b.substr(2,1);
	}else {
		b = b.substr(1);
	}
	var a = parseInt(myarray[1]) + parseInt(myarray[2]);
	a = ""+a;
	if (a.length >= 2){
		a = a.substr(1);
	}

	document.getElementById("ab1").innerHTML = a;
	document.getElementById("ab2").innerHTML = b;
	document.getElementById("ab3").innerHTML = c;
	document.getElementById("ab4").innerHTML = d;
	
	document.getElementById("an1231").innerHTML = xyz1;
	document.getElementById("an1232").innerHTML = xyz2;	
	document.getElementById("an1233").innerHTML = xyz3;	
	document.getElementById("an1234").innerHTML = xyz4;
	document.getElementById("an1235").innerHTML = xyz5;
	document.getElementById("an1236").innerHTML = xyz6;	
		document.getElementById("an1237").innerHTML = xyz;	
}
_dom = 0;
_dom=document.all?3:(document.getElementById?1:(document.layers?2:0));
function huruf(obj,e) {             //=============================================================

	//thispost=parseInt(obj.name.slice(-1));
	//alert(obj.name)
	if (_dom == 3 || (_dom == 1 && navigator.userAgent.indexOf("Opera/")==0)) // for IE
	{
		//alert(event.keyCode)
		if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode==8 || event.keyCode==9  || event.keyCode >= 37 && event.keyCode <= 40 ) {
			//tebak.value = String.fromCharCode(event.keyCode);
			//event.returnValue=false;
		}
		else  { 
			event.returnValue=false;
			return false;
		}

		
	}
	else {
		//alert(e.charCode)
		if (e.charCode > 47 && e.charCode < 58) {
			//alert('ttttt')
			//tebak.value = String.fromCharCode(e.charCode);
			//event.returnValue=false;
		} 
		else if (e.charCode == 0){
			event.returnValue=false;
			return false;
		}
		else  { 
			var fom = document.fom;
			var nam = eval("fom."+obj.name);
			e.returnValue=false;
			//alert(nam.value)
			nam.value = "";
			alert("Winning Numbers dan Additional Number harus diisi dengan angka! \n Jangan memasukkan selain angka!!");
			return true;
			
		}
	}
}
//-->
