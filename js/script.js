
    function myFunction() {
    var x = document.getElementById("luas");
    var y = document.getElementById("keliling");
      x.style.display = "block";
      y.style.display = "none";
  }
  function myFunctionk() {
    var x = document.getElementById("keliling");
    var y = document.getElementById("luas");
      x.style.display = "block";
      y.style.display = "none";
    
  }

  function hitungluas() { 
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    var luas = 1/2 *alas*tinggi;

    document.getElementById('jawaban').innerHTML += "L = 1/2 x a x t" ;
    document.getElementById('jawaban').innerHTML += "<br><b>";
    document.getElementById('jawaban').innerHTML += "L = 1/2 x " + alas + "x" + tinggi;
    document.getElementById('jawaban').innerHTML += "<br><b>";
    document.getElementById('jawaban').innerHTML += "L = " + luas;
    return false;
 } 
 function hitungkeliling() { 
  const  s1 = document.getElementById("s1").value;
  const  s2 = document.getElementById("s2").value;
  const  s3 = document.getElementById("s3").value;
  const  keliling = (parseInt(s1) + parseInt(s2) + parseInt(s3));

  document.getElementById('jawaban2').innerHTML += "K = S1 + S2 + s3" ;
  document.getElementById('jawaban2').innerHTML += "<br><b>";
  document.getElementById('jawaban2').innerHTML += "K = " + s1 +"+" + s2 + "+" + s3;
  document.getElementById('jawaban2').innerHTML += "<br><b>";
  document.getElementById('jawaban2').innerHTML += "K = " + keliling;
  return false;
} 