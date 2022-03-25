let date = new Date(), y = date.getFullYear(), m = date.getMonth();

for (let i = 0; i < 12; i++) {
    let firstDay = new Date(y, i, 1);  
    let lastDay = new Date(y, i + 1, 0); 
    let MonthLength = lastDay.toString().substr(8,2)
    let DateToFind = "Fri" // Mon-Tue-Wed-Thu-Fri-Sat-Sun
    // console.log(firstDay +"\n\n Month Length = "+MonthLength)
    for (let q = 1; q <= MonthLength; q++) { // using q because we need too retain the value of i inside the second loop
        let IsItFriday = new Date(y, i, q);  
        if(IsItFriday.toString().substr(0,3) == DateToFind){
            console.log(IsItFriday)
            IsItFriday = new Date(y, i, q-4);  
            console.log("\nMonday: " + IsItFriday+"\n\n") 
            break;
        }
    }
}
