let goto=0;
let yLeft=0;
let yRight=0;
let newY=0;

function mapMe (x, y) {
   if (x==="1" && y==="1") { goto="2"; }
   if (x==="1" && y==="2") { goto="no"; }
   if (x==="1" && y==="3") { goto="no"; }
   if (x==="1" && y==="4") { goto="44"; }
   if (x==="2" && y==="1") { goto="no"; }
   if (x==="2" && y==="2") { goto="3"; }
   if (x==="2" && y==="3") { goto="1"; }
   if (x==="2" && y==="4") { goto="no"; }
   if (x==="3" && y==="1") { goto="no"; }
   if (x==="3" && y==="2") { goto="4"; }
   if (x==="3" && y==="3") { goto="7"; }
   if (x==="3" && y==="4") { goto="2"; }
   if (x==="4" && y==="1") { goto="37"; }
   if (x==="4" && y==="2") { goto="9"; }
   if (x==="4" && y==="3") { goto="5"; }
   if (x==="4" && y==="4") { goto="3"; }
   if (x==="5" && y==="1") { goto="4"; }
   if (x==="5" && y==="2") { goto="6"; }
   if (x==="5" && y==="3") { goto="no"; }
   if (x==="5" && y==="4") { goto="no"; }
   if (x==="6" && y==="1") { goto="no"; }
   if (x==="6" && y==="2") { goto="no"; }
   if (x==="6" && y==="3") { goto="no"; }
   if (x==="6" && y==="4") { goto="5"; }
   if (x==="7" && y==="1") { goto="4"; }
   if (x==="7" && y==="2") { goto="8"; }
   if (x==="7" && y==="3") { goto="no"; }
   if (x==="7" && y==="4") { goto="no"; }
   if (x==="8" && y==="1") { goto="no"; }
   if (x==="8" && y==="2") { goto="no"; }
   if (x==="8" && y==="3") { goto="no"; }
   if (x==="8" && y==="4") { goto="7"; }
   if (x==="9" && y==="1") { goto="12"; }
   if (x==="9" && y==="2") { goto="36"; }
   if (x==="9" && y==="3") { goto="10"; }
   if (x==="9" && y==="4") { goto="4"; }
   if (x==="10" && y==="1") { goto="9"; }
   if (x==="10" && y==="2") { goto="no"; }
   if (x==="10" && y==="3") { goto="no"; }
   if (x==="10" && y==="4") { goto="11"; }
   if (x==="11" && y==="1") { goto="no"; }
   if (x==="11" && y==="2") { goto="10"; }
   if (x==="11" && y==="3") { goto="no"; }
   if (x==="11" && y==="4") { goto="7"; }
   if (x==="12" && y==="1") { goto="23"; }
   if (x==="12" && y==="2") { goto="13"; }
   if (x==="12" && y==="3") { goto="9"; }
   if (x==="12" && y==="4") { goto="no"; }
   if (x==="13" && y==="1") { goto="14"; }
   if (x==="13" && y==="2") { goto="15"; }
   if (x==="13" && y==="3") { goto="no"; }
   if (x==="13" && y==="4") { goto="12"; }
   if (x==="14" && y==="1") { goto="no"; }
   if (x==="14" && y==="2") { goto="no"; }
   if (x==="14" && y==="3") { goto="13"; }
   if (x==="14" && y==="4") { goto="23"; }
   if (x==="15" && y==="1") { goto="no"; }
   if (x==="15" && y==="2") { goto="16"; }
   if (x==="15" && y==="3") { goto="no"; }
   if (x==="15" && y==="4") { goto="13"; }
   if (x==="16" && y==="1") { goto="no"; }
   if (x==="16" && y==="2") { goto="no"; }
   if (x==="16" && y==="3") { goto="17"; }
   if (x==="16" && y==="4") { goto="15"; }
   if (x==="17" && y==="1") { goto="16"; }
   if (x==="17" && y==="2") { goto="18"; }
   if (x==="17" && y==="3") { goto="no"; }
   if (x==="17" && y==="4") { goto="no"; }
   if (x==="18" && y==="1") { goto="no"; }
   if (x==="18" && y==="2") { goto="19"; }
   if (x==="18" && y==="3") { goto="no"; }
   if (x==="18" && y==="4") { goto="17"; }
   if (x==="19" && y==="1") { goto="20"; }
   if (x==="19" && y==="2") { goto="22"; }
   if (x==="19" && y==="3") { goto="no"; }
   if (x==="19" && y==="4") { goto="18"; }
   if (x==="20" && y==="1") { goto="21"; }
   if (x==="20" && y==="2") { goto="22"; }
   if (x==="20" && y==="3") { goto="19"; }
   if (x==="20" && y==="4") { goto="no"; }
   if (x==="21" && y==="1") { goto="no"; }
   if (x==="21" && y==="2") { goto="no"; }
   if (x==="21" && y==="3") { goto="20"; }
   if (x==="21" && y==="4") { goto="no"; }
   if (x==="22" && y==="1") { goto="no"; }
   if (x==="22" && y==="2") { goto="no"; }
   if (x==="22" && y==="3") { goto="no"; }
   if (x==="22" && y==="4") { goto="20"; }
   if (x==="23" && y==="1") { goto="24"; }
   if (x==="23" && y==="2") { goto="14"; }
   if (x==="23" && y==="3") { goto="12"; }
   if (x==="23" && y==="4") { goto="38"; }
   if (x==="24" && y==="1") { goto="25"; }
   if (x==="24" && y==="2") { goto="no"; }
   if (x==="24" && y==="3") { goto="23"; }
   if (x==="24" && y==="4") { goto="no"; }
   if (x==="25" && y==="1") { goto="26"; }
   if (x==="25" && y==="2") { goto="27"; }
   if (x==="25" && y==="3") { goto="24"; }
   if (x==="25" && y==="4") { goto="39"; }
   if (x==="26" && y==="1") { goto="no"; }
   if (x==="26" && y==="2") { goto="no"; }
   if (x==="26" && y==="3") { goto="25"; }
   if (x==="26" && y==="4") { goto="no"; }
   if (x==="27" && y==="1") { goto="no"; }
   if (x==="27" && y==="2") { goto="28"; }
   if (x==="27" && y==="3") { goto="no"; }
   if (x==="27" && y==="4") { goto="25"; }
   if (x==="28" && y==="1") { goto="no"; }
   if (x==="28" && y==="2") { goto="no"; }
   if (x==="28" && y==="3") { goto="29"; }
   if (x==="28" && y==="4") { goto="27"; }
   if (x==="29" && y==="1") { goto="28"; }
   if (x==="29" && y==="2") { goto="30"; }
   if (x==="29" && y==="3") { goto="35"; }
   if (x==="29" && y==="4") { goto="no"; }
   if (x==="30" && y==="1") { goto="31"; }
   if (x==="30" && y==="2") { goto="no"; }
   if (x==="30" && y==="3") { goto="32"; }
   if (x==="30" && y==="4") { goto="29"; }
   if (x==="31" && y==="1") { goto="no"; }
   if (x==="31" && y==="2") { goto="no"; }
   if (x==="31" && y==="3") { goto="30"; }
   if (x==="31" && y==="4") { goto="no"; }
   if (x==="32" && y==="1") { goto="30"; }
   if (x==="32" && y==="2") { goto="34"; }
   if (x==="32" && y==="3") { goto="no"; }
   if (x==="32" && y==="4") { goto="33"; }
   if (x==="33" && y==="1") { goto="30"; }
   if (x==="33" && y==="2") { goto="32"; }
   if (x==="33" && y==="3") { goto="no"; }
   if (x==="33" && y==="4") { goto="no"; }
   if (x==="34" && y==="1") { goto="no"; }
   if (x==="34" && y==="2") { goto="no"; }
   if (x==="34" && y==="3") { goto="no"; }
   if (x==="34" && y==="4") { goto="32"; }
   if (x==="35" && y==="1") { goto="29"; }
   if (x==="35" && y==="2") { goto="no"; }
   if (x==="35" && y==="3") { goto="no"; }
   if (x==="35" && y==="4") { goto="36"; }
   if (x==="36" && y==="1") { goto="no"; }
   if (x==="36" && y==="2") { goto="35"; }
   if (x==="36" && y==="3") { goto="no"; }
   if (x==="36" && y==="4") { goto="9"; }
   if (x==="37" && y==="1") { goto="38"; }
   if (x==="37" && y==="2") { goto="no"; }
   if (x==="37" && y==="3") { goto="4"; }
   if (x==="37" && y==="4") { goto="no"; }
   if (x==="38" && y==="1") { goto="no"; }
   if (x==="38" && y==="2") { goto="23"; }
   if (x==="38" && y==="3") { goto="37"; }
   if (x==="38" && y==="4") { goto="42"; }
   if (x==="39" && y==="1") { goto="no"; }
   if (x==="39" && y==="2") { goto="25"; }
   if (x==="39" && y==="3") { goto="40"; }
   if (x==="39" && y==="4") { goto="no"; }
   if (x==="40" && y==="1") { goto="39"; }
   if (x==="40" && y==="2") { goto="no"; }
   if (x==="40" && y==="3") { goto="no"; }
   if (x==="40" && y==="4") { goto="41"; }
   if (x==="41" && y==="1") { goto="no"; }
   if (x==="41" && y==="2") { goto="40"; }
   if (x==="41" && y==="3") { goto="42"; }
   if (x==="41" && y==="4") { goto="no"; }
   if (x==="42" && y==="1") { goto="41"; }
   if (x==="42" && y==="2") { goto="38"; }
   if (x==="42" && y==="3") { goto="43"; }
   if (x==="42" && y==="4") { goto="no"; }
   if (x==="43" && y==="1") { goto="42"; }
   if (x==="43" && y==="2") { goto="no"; }
   if (x==="43" && y==="3") { goto="44"; }
   if (x==="43" && y==="4") { goto="no"; }
   if (x==="44" && y==="1") { goto="43"; }
   if (x==="44" && y==="2") { goto="1"; }
   if (x==="44" && y==="3") { goto="no"; }
   if (x==="44" && y==="4") { goto="no"; }
   return goto;
}

function firstNavigation () {
   document.getElementById("btnAccueil").style.display = "none";
   document.getElementById("accueil").style.display = "none";
   document.getElementById("main").style.display = "flex";
   document.getElementById("gauche").style.display = "flex";
   document.getElementById("centre").style.display = "flex";
   document.getElementById("droite").style.display = "flex";
}

function doesGoTo () {
   const centre=document.querySelector('#centre');
   let x=centre.dataset.x;
   let y=centre.dataset.y;
   goto=mapMe(x, y);
   if (goto==="no") { document.getElementById("goTo").style.display = "none"; }
   else { document.getElementById("goTo").style.display = "flex";}
}

function goGoGo () {
   const centre=document.querySelector('#centre');
   let x=centre.dataset.x;
   let y=centre.dataset.y;
   goto=mapMe(x, y);
   if (goto!=="no") {
      centre.dataset.x=goto;
      if (y==="1") {yLeft="4";yRight="2"; }
      if (y==="2") {yLeft="1";yRight="3"; }
      if (y==="3") {yLeft="2";yRight="4"; }
      if (y==="4") {yLeft="3";yRight="1"; }
      document.getElementById("gaucheImg").src="./assets/img/"+goto+"-"+yLeft+".jpg";
      document.getElementById("centre").style.backgroundImage="url('./assets/img/"+goto+"-"+y+".jpg')";
      document.getElementById("droiteImg").src="./assets/img/"+goto+"-"+yRight+".jpg";
   }

   doesGoTo();
}

function pivote(direction) {
   const centre=document.querySelector('#centre');
   let x=centre.dataset.x;
   let y=centre.dataset.y;
   if (direction==="left") {
      if (y==="1") {yLeft="3";newY="4";yRight="1"; }
      if (y==="2") {yLeft="4";newY="1";yRight="2"; }
      if (y==="3") {yLeft="1";newY="2";yRight="3"; }
      if (y==="4") {yLeft="2";newY="3";yRight="4"; }
   }
   if (direction==="right") {
      if (y==="1") {yLeft="1";newY="2";yRight="3"; }
      if (y==="2") {yLeft="2";newY="3";yRight="4"; }
      if (y==="3") {yLeft="3";newY="4";yRight="1"; }
      if (y==="4") {yLeft="4";newY="1";yRight="2"; }
   }
   centre.dataset.y=newY;
   document.getElementById("gaucheImg").src="./assets/img/"+x+"-"+yLeft+".jpg";
   document.getElementById("centre").style.backgroundImage="url('./assets/img/"+x+"-"+newY+".jpg')";
   document.getElementById("droiteImg").src="./assets/img/"+x+"-"+yRight+".jpg";
   doesGoTo ();
}

