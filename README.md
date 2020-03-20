# Password Generator
This aaplication generates a random password basedd on user-selected criteria. The JavaScript application features a clean user interface, hiding the result box until the results are displaced.

When the web page is loaded, the user will see an instruction to press the RED button to begin.
Then the user will receive a popUp box asking them to enter the number of characters they would like to use for their password.  If the user the cancels, they are returned to the web page with an alert that they cancled.

If the user selects a number below 8 or above 128, they will be alerted a number must be entered between 8 and 128.

Given that different password criteria is needed for differnt sites, the generator leave the functionality to use only lower case characters if so chosen.  By default the user will use lower case, upper case, numbers and special characters.  The user has the option to choose.

Once the user selects the length of their password, they are asked
- Does the user want to use Upper Case characters?
- Does the user want to use Numbers?
- Does the user want to use Special Characters?

Then the password box is displayed with the generated password.


## Site Picture

![Site](screen-shot.jpg) 


## Technologies Used
- HTML - used to make the appliaction interface.
- CSS - styles were applied to ensure a responsive, clean and polished user interface.
- JavaScript - Powers the application using multiple function call backs, arrays, variables and DOM manipulation.
- Git - version control system to track changes to source code
- GITHub - hosts reository taht can be deployed to GitHub Pages
- Bootstrap - Used the Bootstrap framework to build the Portfolio pages


## Code Snippet
The application had a tendency to repeat a sequence of character types.  To make the password more random, I tried converting the password string to an array then use Math.random to shuffle the array indexes.  This resulted in undefined indexes which shortened the requested password.  To resolve the issue, I used the array sort function and subtracted 0.5 from athe random function to create a random sort.  I then joined that back into a string to pass back to writePassword.

html
'''
  
  // Shuffle password string to ensure the characters are random
  shufflePasswdStr();
  return passwd;
}

function shufflePasswdStr() {
  // Convert String to array
  var arr = passwd.split('');
  
  // Random Sort
  arr.sort(function() {
    return 0.5 - Math.random();
  });

  // Convert Array to string
  passwd = arr.join('');
  return;
}


'''

## Author Links
### Michael Downs
[LinkedIn](http://www.linkedin.com/in/michaeldownssj)  
[GitHub](https://chindowns.github.io/) 