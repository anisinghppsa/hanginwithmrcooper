![alt text](http://static.tvtropes.org/pmwiki/pub/images/hangin_with_mr_cooper.jpg "Hangin' with Mr. Cooper")

# Preliminary Stuff
## Install Before Proceeding
+ [Visual Studio Code](https://code.visualstudio.com/Download)
+ [Git (for Windows!)](https://git-scm.com/download/win)
Install all of the components checked by default in the wizard.
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
+ [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
+ [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
+ [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
+ [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
+ [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
+ [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
+ [Default function parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

##### Operators
+ [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
+ [Nullish Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
+ [Unary Plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
+ [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

##### React
+ [Overview](https://reactjs.org/docs/react-api.html)
+ [Tutorial](https://reactjs.org/tutorial/tutorial.html)
+ [Components](https://reactjs.org/docs/react-component.html)
+ [Fragments](https://reactjs.org/docs/fragments.html)
+ [Context](https://reactjs.org/docs/context.html)
+ [Hooks](https://reactjs.org/docs/hooks-intro.html)
+ [Router](https://reacttraining.com/react-router/web/example/basic)

##### TypeScript
+ [Basics](https://www.typescriptlang.org/docs/handbook/basic-types.html)
+ [Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
+ [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
+ [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
+ [Functions](https://www.typescriptlang.org/docs/handbook/functions.html)
+ [Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
+ [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions)
+ [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
+ [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

##### Redux
+ [Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

# Project Stuff

To get the source code on your machine, open up Git Bash, navigate to the folder you want to store things in, and run:
```bash
git clone https://github.com/anisinghppsa/hanginwithmrcooper
```
**Tip:** You can **paste** into a bash/cmd window by **right-clicking** on it.

To run the project (this can be from a regular cmd/terminal window):
```bash
cd hanginwithmrcooper
npm install
npm start
```

If you don't see any terrifying red text or get flooded with errors, you should be able to navigate to
``` 
localhost:3000
```
in your browser to view the application skeleton.

## Dwayne "The Store" Johnson

1. Implement a login form component for the login page. This page should use the **login** API function.
2. Implement a product list component for the store page. Each list item should display the product's image, name, price, and rating. Clicking on the image or the name should bring the user to a detail page for that particular item.
3. Implement the shopping cart component. This should show a list of items, similar to the product list. Additionally, the quantity of the item and the total price should be shown per entry. A total for the entire cart should be displayed at the bottom of the list. Use the **checkout** API function to checkout.
4. Allow products to be added to the cart via the product list component. Users should be able to enter a quanity they want to add to the cart. The quantity should **not** be able to exceed the item stock.
5. Add a text box that users can type into to filter the product list. Filter by the product's **name** OR **description** fields.
6. Implement an item details page. This should show a larger image of the item, as well as its name, price, rating, and description. If user is an admin, they should be able to edit the product details. Use the **isAdmin** API function for determining if the user is an admin. The **useParams** hook might be useful here.
7. Enhance the shopping cart to display the user's name and account balance. If the cart total exceeds the account balance, the user should not be able to checkout.
8. Add error handling to the application. API calls will fail if the user is not logged in. The user should be redirected to the login page in these cases.
9. Add a route for logging out. Also add the appropriate link to **App.tsx**. Redirect to the login page after successfully logging out.
10. Convert uses of local state to Context API + hooks where applicable. (useReducer + useContext)

### Bonus
- More advanced tasks
- Storybook
- Testing
