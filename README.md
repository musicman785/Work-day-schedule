# Work-day-schedule

1. html set up is a basic table. This way, I found, made it easier for me to separate the rows and columns. Then I added classes to the rows and a textarea tag for the user input. The classes made it easier to work with the jquery manipulation. 

2. Made minor changes to the css since most of it was already pre-loaded.

3. Began doing pseudo code for the variables first and decided that a for loop would suit best because I could simply compare time slots to teh moment.js api and get the color of the row correct based on the time of day (PST). I used an array and a parseInt on the rows to be able to compare numbers and not strings, as the first attempted code did yet did not render the results desired.

4. Comparing the numbers worked and I was able to get the rows to display the proper color based on current time. Next I used a object value pair variable to pass the strings into the browser locat storage using the JSON.strigify format. The results to the local storage was desired but the input text in the text area would not remain if browser was refreshed. 

5. Was finally able to hold the input on the text area using the JSON.parse method with the local storage. Now new input can be added and old input still will display on the browser. 

6. Final submission: All code now works proplerly on the browser side. 


