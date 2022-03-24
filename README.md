# Find-First-friday-of-this-month

```
       let date = new Date(), y = date.getFullYear(), m = date.getMonth(); 
       let firstDay = new Date(y, m, 1);  
       let lastDay = new Date(y, m + 1, 0); 
       let MonthLength = lastDay.toString().substr(8,2) 

        for (let i= 1; i <= 7; i++) {
            let IsItFriday = new Date(y, m+1, i);  
                if(IsItFriday.toString().substr(0,3) == "Fri"){ 
                    console.log(IsItFriday) 
                    IsItFriday = new Date(y, m+1, i-4);  
                    console.log("\nMonday: " + IsItFriday+"\n\n") 
                }
        }
```

# Loop Trough year and find first fridays of each month
