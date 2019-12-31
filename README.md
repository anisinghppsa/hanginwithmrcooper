![alt text](http://static.tvtropes.org/pmwiki/pub/images/hangin_with_mr_cooper.jpg "Hangin' with Mr. Cooper")

# Preliminary Stuff
## Install Before Proceeding
Install all of the components checked by default in the wizard.
+ [Git (for Windows!)](https://git-scm.com/download/win)
## Playgrounds
+ [JSFiddle](http://jsfiddle.net/)
+ [TypeScript Playground](http://www.typescriptlang.org/play/)
## Some light reading
#### HTML
+ [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)

#### CSS
+ [CSS Course (pls skip assessments and anything related to tables)](https://developer.mozilla.org/en-US/docs/Learn/CSS)

#### Javascript
##### General
+ [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
+ [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
+ [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
+ [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

##### React
+ [Overview](https://reactjs.org/docs/react-api.html)
+ [Components](https://reactjs.org/docs/react-component.html)
+ [Tutorial](https://reactjs.org/tutorial/tutorial.html)

##### TypeScript
+ [Basics](https://www.typescriptlang.org/docs/handbook/basic-types.html)
+ [Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
+ [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
+ [Functions](https://www.typescriptlang.org/docs/handbook/functions.html)
+ [Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
+ [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
+ [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

##### Lodash
This is just for reference, but make sure you understand chaining and are familiar with the common iteration functions like map, filter, and reduce.
+ [Lodash Documentation](https://lodash.com/docs/)

##### Moment
This is also just for reference. Note that "moment" objects are mutable, so make sure you understand how to go about creating new instances from existing ones and manipulating them from there.
+ [Moment Documentation](https://momentjs.com/docs/)

# Project Stuff

To get the source code on your machine, open up Git Bash, navigate to the folder you want to store things in, and run:
```bash
git clone https://github.com/strictlyaformality/hanginwithmrcooper
```
**Tip:** You can **paste** into a bash/cmd window by **right-clicking** on it.

To run the project (this can be from a regular cmd/terminal window):
```bash
cd hanginwithmrcooper
yarn install
yarn start
```

If you don't see any terrifying red text or get flooded with errors, you should be able to navigate to
``` 
localhost:3000
```
in your browser to view the application skeleton.

## Dwayne "The Store" Johnson

1. Model data via TypeScript interfaces
2. Implement a product list component
3. Implement the shopping cart component
4. Lift state to parent component
5. Allow product list and shopping cart components to communicate via their parent
6. (BONUS 1) Create a component to display and edit a product's rating
7. (BONUS 2) Create a section for adding new products, only accessible by admins
8. (BONUS 3) Allow admins to also edit existing items
