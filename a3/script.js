var jp1, jia, p1 = 0, pia = 0, modo;
modo = prompt("n - normal, i - impossivel");

while(p1!=2 && pia!=2){
jp1 = Number(prompt("0 - pedra, 1 - papel, 2 - tesoura"));
 if (modo == 'n') {
  jia = Math.trunc(Math.random()*3); 
 }else{
if(jp1==0){
 jia=1
}else if(jp1==1){
 jia=2

}else{
 jia = 0
}
}
if( (jp1 == 0 && jia == 2) || (jp1 == 1 && jia == 0) || (jp1==2 && jia ==1) ){
document.write("<h1>Jogador humano ganhou</h1>");
p1++;


//p1
}else if((jp1 == 2 && jia == 0) || (jp1 == 0 && jia == 1) || (jp1==1 && jia ==2)){
document.write("<h1>Jogador não humano ganhou</h1>");
pia++;


//jia
}else{
document.write("<h1>Empatou.</h1> <br>");

//empate
 }

}
if(p1==2){
document.write('<img src= "ganhou.jpg">')
}else{
document.write('<img src= "perdeu.jpg">')
}


