
let myForm = document.getElementById('myForm');
    let submit = document.getElementById("submit");
    submit.addEventListener('click', f_valid);

myForm.addEventListener = ('submit', function(e){
      let error;
      let inputName = document.getElementById('inputName')
      let inputEmail = document.getElementById('inputEmail')
      let inputMessage = document.getElementById('inputMessage')
      let missing_e = document.getElementById('missing_e');

   let inputs = document.getElementsByTagName('input');

   for (let i=0; i<inputs.length; i++){
       if(!inputs[i].value){
           error = "Please fill in all the Fields*"
        }
       else{
           alert('Message sent! Thank You')
       }
   }
       if(error){
           e.preventDefault();
           document.getElementById("error").innerHTML= error;
           return false;
       }
       else{
           alert('Mesaage sent! Thank You')
       }
})

