const accountNo = 1234;
let userName = "Ram";
var bankName = "SBI";
password = "12345667";

// accountNo = 234; // we can not redelacare and reinitialized const variable

userName = "shyam"
bankName = "HDFC"
password = "87690456"
//we do not use var keyword while declaring the variables because issue of the scope
console.log(accountNo);

//it gives the output in the table structure
console.table([accountNo,userName,bankName,password])