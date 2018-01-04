![alt text](http://static.tvtropes.org/pmwiki/pub/images/hangin_with_mr_cooper.jpg "Hangin' with Mr. Cooper")

# Preliminary Stuff
## Some light reading
#### HTML
+ [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)

#### CSS
+ [CSS Course (pls skip assessments and anything related to tables)](https://developer.mozilla.org/en-US/docs/Learn/CSS)
+ [Assessment: Creating a letter head (pls add this to the previous assessment)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper)

#### Javascript
+ [Javascript Objects (pls skip the assessment)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)

# Project Stuff

To get the source code on your machine, open up Git Bash, navigate to the folder you want to store things in, and run:
```bash
git clone https://github.com/strictlyaformality/hanginwithmrcooper
```

To run the project (this can be from a regular cmd/terminal window):
```bash
cd hanginwithmrcooper
npm install
npm run
```

If you don't see any terrifying red text or get flooded with errors, you should be able to navigate to
``` 
localhost:8080
```
in your browser to view the application skeleton.

## README: A reading list
Navigate to  
```
localhost:8080/readme
```
in your browser to view this skeleton.

**Note**: All constants, variables, and functions should be defined in the **readme/script.js** file

1. Define an array of books named **books**. You should **let** this array be variable. A book is comprised of **5** properties: 
  + title (a unique **string**)
  + author (**string**)
  + genres (**Array&lt;string&gt;**)
  + read (**boolean**)
  + pages (**number**)
2. Define **3** functions to filter the **books** array. The string provided to these functions will be whatever string is present in the textbox at the top of the page. One of these functions will be invoked whenever a character is added/removed to the textbox or a different filter is chosen in the selectbox 
```javascript 
filterByAuthor(Array<Book>, string) => Array<Book> 
```
```javascript
filterByTitle(Array<Book>, string) => Array<Book>
``` 
```javascript
filterByGenre(Array<Book>, string) => Array<Book>
```
3. Define a function to filter books by length. The string provided to these functions will be one of **all**, **short**, **medium**, **long**. It's up to you to decide the range of page lengths that corresponds to each string. This function is invoked when a radio button is selected at the top of the page.
```javascript
filterByLength(Array<Book>, string) => Array<Book>
```
4. Define a function to toggle the *read* status of the book. It will be invoked when the checkboxes present in each individual entry are toggled. The function will be provided a the title of the book being toggled (as a **string**) and a **boolean** representing the new *read* status of the book:
```javascript
toggleReadStatus(Array<Book>, string, boolean) => Array<Book>
```
5. Define a function to toggle the *read* status of all books. This function will also receive a **boolean** value representing the new *read* status of *all* the books. It will be invoked when the checkbox at the top of the page is toggled:
```javascript
toggleAllReadStatus(Array<Book>, boolean) => Array<Book>
```

Once these constants, variables, and functions are in place, you should have a functioning (and horribly colored) little application.

#### Useful Links
+ [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
+ [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
+ [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Dwayne "The Store" Johnson

Navigate to  
```
localhost:8080
```
in your browser to view this skeleton.

1. Create static HTML page
2. Model data via TypeScript interfaces/classes
3. Implement a product list component
4. Determine different states for the shopping cart component
5. Implement the shopping cart component
6. Lift state to parent component
7. Allow product list and shopping cart components to communicate via their parent

#### Useful Links
+ [ReactJS Documentation & Tutorial](https://reactjs.org/docs/hello-world.html)
+ [TypeScript Documentation](https://www.typescriptlang.org/docs/home.html)
+ [Lodash Documentation](https://lodash.com/docs/)
+ [MomentJS Documentation](https://momentjs.com/docs/)
