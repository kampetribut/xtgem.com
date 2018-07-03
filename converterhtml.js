function brCheck(data)
{
  var ns4 = document.layers;
  var ns6 = document.getElementById && !document.all;
  var ie4 = document.all;
  
  if(ns4) br = "%0A";
  else if(ns6) br = "%0A";
  else if(ie4) br = "%0D%0A";
  else br = "%0D%0A";
	 
  data.value=data.value.replace(/"/gi,'\\"'); 
  dataArr=escape(data.value).split(br);
  data.value="";
	 
}

function scriptPHP(data){
brCheck(data);
for (i=0; i<dataArr.length; i++){
data.value+= (i==0) ? "<?php\necho " : "echo "
data.value+= "\"" + unescape(dataArr[i]); 
data.value+= (i!=dataArr.length-1) ? "\\n\"; \n" : "\\n\";\n"
}
data.value+="\?>"
}

function scriptJS(data){
brCheck(data);
for (i=0; i<dataArr.length; i++){
data.value+= (i==0) ? "<script type=\"text/javascript\">\ndocument.write(\"" : "document.writeln(\""
data.value+= "" + unescape(dataArr[i])
data.value+= (i!=dataArr.length-1) ? "\"); \n" : "\");\n"
}
data.value+="<\/script>"
}

function scriptASP(data){
brCheck(data);
for (i=0; i<dataArr.length; i++){
data.value+= (i==0) ? "#!/usr/bin/perl\nprint \"Content-type: text/html\\n\\n\";\n$code[0] = " : "$code["+i+"] = "
data.value+= "\"" + unescape(dataArr[i])
data.value+= (i!=dataArr.length-1) ? "\"; \n" : "\";\n" 
}
data.value+="for ($i=0;$i<scalar(@code);$i++) {print($code[$i].\"\\n\");}" 
}

function copyF(txx) {
with(txx){
focus(); select() 
}
if(document.all){
txt=txx.createTextRange()
txt.execCommand("Copy") 
}}

document.write('<b><font color="#ff00ff">H</font><font color="#ff00cc">T</font><font color="#ff0099">M</font><font color="#ff0066">L </font><font color="#ff0033">S</font><font color="#ff0000">c</font><font color="#ff3300">r</font><font color="#ff6600">i</font><font color="#ff9900">p</font><font color="#ffcc00">t </font><font color="#ffff00">C</font><font color="#ccff00">o</font><font color="#99ff00">n</font><font color="#66ff00">v</font><font color="#33ff00">e</font><font color="#00ff00">r</font><font color="#00ff33">t</font><font color="#00ff66">e</font><font color="#00ff99">r</font><form name="doc" action=""><br/><font color="#ff00ff">M</font><font color="#ff00cc">a</font><font color="#ff0099">s</font><font color="#ff0066">u</font><font color="#ff0033">k</font><font color="#ff0000">k</font><font color="#ff3300">a</font><font color="#ff6600">n </font><font color="#ff9900">T</font><font color="#ffcc00">e</font><font color="#ffff00">k</font><font color="#ccff00">s </font><font color="#99ff00">:</font></b><br/><textarea style="border:2px dashed;border-color:#ff0000 #00ff00 #0000ff #ffff00;" name="tx" cols="70" rows="7"></textarea><br/><input style="border:2px solid;border-color:#ff0000 #00ff00 #0000ff #ffff00;" name="button" type="button" onClick="scriptPHP(document.doc.tx)" value="HTML -> PHP"><br/><input style="border:2px solid;border-color:#ff0000 #00ff00 #0000ff #ffff00;" name="button2" type="button" onClick="scriptJS(document.doc.tx)" value="HTML -> JavaScript"><br/><input style="border:2px solid;border-color:#ff0000 #00ff00 #0000ff #ffff00;" name="button2" type="button" onClick="scriptASP(document.doc.tx)" value="HTML -> ASP"><br/><input style="border:2px solid;border-color:#ff0000 #00ff00 #0000ff #ffff00;" name="reset" type="reset" value="Reset" onClick="document.doc.tx.focus()"><br/><input style="border:2px solid;border-color:#ff0000 #00ff00 #0000ff #ffff00;" name="button2" type="button" onClick="copyF(document.doc.tx)" value="Select All"></form><br/>');
