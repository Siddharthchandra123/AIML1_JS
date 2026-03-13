function calculateResult(){
    const n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("enter Subject Number"+(i+1)));
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>90){
        grade='A';
    }
    else if (average>80 && average<90){
        grade='B'
    }
    else if (average>70 && average<80){
        grade='C'
    }
    else if (average>60 && average<70){
        grade='D'
    }
    else if (average>50 && average<60){
        grade='pass'
    }
    else{
        grade='Fail'
    }

let result=document.getElementById("Result").innerHTML="Total Marks"+total+"<br/>"+"Grade:"+grade
}