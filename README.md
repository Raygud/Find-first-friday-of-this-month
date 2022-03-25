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

##### pseudocode: Find current year -> Find current Month -> Find First day of current month -> Find First Friday of current month -> Find the monday before the first friday of the month

###### See detailed commments inside the, [FindFriday.js](./FindFriday.js) file

# Loop Trough year and find first fridays of each month

```
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();

    for (let i = 0; i < 12; i++) {
        let firstDay = new Date(y, i, 1);  
        let lastDay = new Date(y, i + 1, 0); 
        let MonthLength = lastDay.toString().substr(8,2)
        let DateToFind = "Fri" // Mon-Tue-Wed-Thu-Fri-Sat-Sun
        // console.log(firstDay +"\n\n Month Length = "+MonthLength)
        for (let q = 1; q <= 7; q++) { // using q because we need too retain the value of i inside the second loop
            let IsItFriday = new Date(y, i, q);  
            if(IsItFriday.toString().substr(0,3) == DateToFind){
                console.log(IsItFriday)
                IsItFriday = new Date(y, i, q-4);  
                console.log("\nMonday: " + IsItFriday+"\n\n") 
            }
        }
    }

```

##### pseudocode: Find current year -> Find all Months -> Find First day of each month -> Find First Friday of each month -> Find the monday before the first friday of each month

###### See detailed commments inside the, [FirstDayOfMonths.js](./FirstDayOfMonths.js) file

## Can you find other days?

A: yes you can easiliy modify the script too find any day you like, simply changing the "DateToFind" varible to the day you are looking for.
