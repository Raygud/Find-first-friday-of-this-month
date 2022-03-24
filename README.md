# Find-First-friday-of-this-month

```
       let date = new Date(), y = date.getFullYear(), m = date.getMonth(); 
       let firstDay = new Date(y, m, 1);  
       let lastDay = new Date(y, m + 1, 0); 
       let MonthLength = lastDay.toString().substr(8,2) 
       let DateToFind = "Fri" // Mon-Tue-Wed-Thu-Fri-Sat-Sun

        for (let i= 1; i <= 7; i++) {
            let IsItFriday = new Date(y, m+1, i);  
                if(IsItFriday.toString().substr(0,3) == DateToFind){ 
                    console.log(IsItFriday) 
                    IsItFriday = new Date(y, m+1, i-4);  
                    console.log("\nMonday: " + IsItFriday+"\n\n") 
                }
        }
```
###### See detailed commments inside the, FindFriday.js file

# Loop Trough year and find first fridays of each month

```
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();

    for (let i = 0; i < 12; i++) {
        let firstDay = new Date(y, i, 1);  
        let lastDay = new Date(y, i + 1, 0); 
        let MonthLength = lastDay.toString().substr(8,2)
        // console.log(firstDay +"\n\n Month Length = "+MonthLength)
        for (let q = 1; q <= 7; q++) { // using q because we need too retain the value of i inside the second loop
            let IsItFriday = new Date(y, i, q);  
            if(IsItFriday.toString().substr(0,3) == DateToFind){
                console.log(IsItFriday)
                IsItFriday = new Date(y, i, q-5);  
                console.log("\nMonday: " + IsItFriday+"\n\n") 
            }
        }
    }

```

## Can you find other days?

A: yes you can easiliy modify the script too find any day you like, simply changing the "DateToFind" varible to the day you are looking for.
