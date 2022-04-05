var password = prompt("Enter a password: ")

function isStrongPassword(password){
  while (isStrong = false){
  if (password >= 8 && password.indexOf(password == -1)){
    for (let i = 0; i < password.length; i++) {
      charCode = password.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90){
        isStrong = true
      }
    }
  }
  }  
  return isStrong
  }

isStrong = isStrongPassword(password);
if (isStrong){
  alert(password + " is strong");
}
else{
  alert(password + " is not strong");
}