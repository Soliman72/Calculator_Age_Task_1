function calcAge(){
  const userDate = document.getElementById( "userDate" ).value;
  if ( userDate === '' ){
    document.getElementById( "result" ).innerText  = 'Please enter your date of birth !'; 
    return;
  } 

  const dob = new Date(userDate);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
}