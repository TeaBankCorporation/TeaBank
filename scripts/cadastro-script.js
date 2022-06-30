


function CPF_Formatter(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";

}

function validateForm() {
    let ID1 = document.getElementById("accountID").value;
    let ID1_Repeat = document.getElementById("accountID-Repeat").value;
    let x = document.forms["myForm"]["fname"].value;

    if (x == ""){
        alert("Name must be filled out");
        return false;
    }

    if (ID1 != ID1_Repeat) {
        document.body.classList.toggle("errorInputMenssage");
        return false;
    }   
}