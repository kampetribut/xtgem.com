<script type="text/javascript">
document.write("var waktu=new Date()"); 
document.writeln("var tahun=waktu.getFullYear()"); 
document.writeln("var hari=waktu.getDay()"); 
document.writeln("var bulan=waktu.getMonth()"); 
document.writeln("var tanggal=waktu.getDate()"); 
document.writeln("if (tanggal < 7) {tanggal=\"0\"+tanggal} "); 
document.writeln("var hariarray=new Array(\"Minggu\",\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jum'at\",\"Sabtu\")"); 
document.writeln("var bulanarray=new Array(\"Januari\",\"Pebruari\",\"Maret\",\"April\",\"Mei\",\"Juni\",\"Juli\",\"Agustus\",\"September\",\"Oktober\",\"Nopember\",\"Desember\")"); 
document.writeln("document.write(hariarray[hari]+\", \"+tanggal+\" \"+bulanarray[bulan]+\"  \"+tahun)");
</script>
