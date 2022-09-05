function myfunction()
{
    let x = document.getElementById("a").value;

    let text;
    if(x > 0)
    {
        if(x%2==0)
        {
            let y=2;
                let b=parseInt(x)+parseInt(y);
                let c=(b+y);
                let d=(c+y);
                text =`${b},${c},${d}`;
                document.getElementById("demo").innerHTML=text;

        }
        else{
            let y=2;
            let b=parseInt(x)+parseInt(y);
            let c=(b+y);
            let d=(c+y);
            text =`${b},${c},${d}`;
            document.getElementById("demo").innerHTML=text;
        }
    }
    else
    {
        text="Enter a positive value";
    }
    document.getElementById("demo").innerHTML=text;
    
}