let num1=parseInt(prompt("Enter any number"));
  if(num1<0||num1>0||num1==0){
    switch (true) {
       
        case (num1==0):
            console.log("Given number is nither even nor Odd");
            break;
        case (num1%2==0):
            console.log("Given number is even");
            break;
    
        default:
            console.log("Given number is Odd");
            break;
        }}
        else{
    console.log("Enter valid input:");

}