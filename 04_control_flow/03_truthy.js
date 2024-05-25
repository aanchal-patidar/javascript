const userName = {}

    if(userName)
    {
        console.log("have username");
    }
    else{
        console.log("don't have username");
    }



    if(Object.keys(userName).length === 0)
        {
            console.log("Object is empty");
        }

    const arr = []
    if(arr.length === 0)
        console.log("Array is empty");
    
    // Nullish operator
    let val1;
    val1 = null ?? 10;
    console.log(val1); // 10

    val1 = undefined ?? 20 ?? 30
    console.log(val1);  // 20

    // ternary operator
    let point = 200
    point >= 150 ? console.log("more than 150") : console.log("less then 150"); // more than 150




    /*++++++++++++++++++++++++++ Note++++++++++++++++++++++++++++ */
    // falsy values -> false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
    // truthy values -> true , [] , " " ,{} , '0' , 'false' , function(){}

    // Nullish coalescing operator (??) : null , undefined
    // it is used when user give null or just declared it so to handle this kind of situation and give another value

    // Ternory oprator 
    // it is a single conditional stmt  where we can write only single stmt 
    // condition ? true : false;
