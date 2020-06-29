// التمرين الاول 
 let choice = prompt("ماذا تحب ان تطلب؟");
switch(choice) {
    case "1": 
      console.log("بيتزا ")
      break;
    case "2": 
    console.log("برجر ")
      break;
      case "3": 
      console.log("سوشي ")
      break; 
    default:
        console.log("عفوا طلبك غير متوفر حاليا ")
     }
//    التمرين الثاني 
  let number1 = prompt("ادخل الرقم الاول ")
  let number2 = prompt("ادخل الرقم الثاني ")
  let type = prompt("اختر العمليه(-,+,*,/)")
  let x = parseInt(number1);
  let y = parseInt(number2);
  let answer = null;
  if (x && y ){
  if (type == "*"){
      answer = x * y ; console.log(answer);
  }else if (type == "+"){
      answer = x + y; console.log(answer);
  }else if (type == "-"){
    answer = x - y; console.log(answer);
  }else if (type == "/"){
    answer = x / y; console.log(answer);
  } else {
      console.log("العمليه غير صحيحه")
  }
  } else {
      console.log("احد الارقام غير صحيحه")
  }


// التمرين الثالث

  let age = "17"
  console.log(age);
  if (age >= 4 && age <= 6 ){
   console.log ("انت في الروضه ")
} else if ( age <= 17 && age >= 7){
       console.log("انت في المدرسه")
   } else if ( age < 27 && age >= 18 ) {
       console.log ("انت في الجامعه ")
   } else {
       console.log ("لا تستوفي الشروط ")
   }
  
   