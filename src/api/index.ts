export type ProductDataModel = {
  id: number,
  rating: string
  // Fill in DATA MODEL (use products.json for reference) 
}

export type UserDataModel = {
  id: number,
  email: string,
  password: string,
  accountBalance: string,
  name: string
}

const productData = require("./products");
const userData = require("./users");
const delay = 1000; //ms

//Error messages
const notLoggedIn = "You are not logged in.";
const productNotFound = "Product not found.";
const invalidCredentials = "Invalid credentials.";

export const getProducts = (): Promise<Array<ProductDataModel>> => {
  return new Promise<Array<ProductDataModel>>((resolve, reject) => {
    setTimeout(function(){
      if (!isLoggedIn()) {
        reject(notLoggedIn);
      } else {
        resolve(productData.products);
      }
    }, delay);
  });
};

export const getProductById = (id: number): Promise<ProductDataModel> => {
  return new Promise<ProductDataModel>((resolve, reject) => {
    const model = productData.products.find((product: ProductDataModel) => product.id === id);
    setTimeout(function(){
      if (!isLoggedIn()) {
        reject(notLoggedIn)
      } else if (model) {
        resolve(model);
      } else {
        reject(productNotFound)
      }
    }, delay);
  })
};

export const getProductRating = (id: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const model = productData.products.find((product: ProductDataModel) => product.id === id);
    setTimeout(function() {
      if (!isLoggedIn()) {
        reject(notLoggedIn);
      } else if (model) {
        resolve(model);
      } else {
        reject(productNotFound);
      }
    }, delay)
  })
}

export const login = (email: string, password: string): Promise<any> => {
  return new Promise<string>((resolve, reject) => {
    const user = userData.users.find((user: UserDataModel) => user.email === email && user.password === password);
    setTimeout(function() {
      if (user) {
        localStorage.setItem("userId", user.id);
        resolve();
      } else {
        reject(invalidCredentials);
      }
    }, delay)
  })
}

export const getUserName = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const id = localStorage.getItem("userId");
    setTimeout(function() {
      if (id != null) {
        const user: UserDataModel = userData.users.find((user: UserDataModel) => user.id === +id);
        resolve(user.name);
      } else {
        reject(notLoggedIn);
      }
    }, delay)
  })
}

export const getUserAccountBalance = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const id = localStorage.getItem("userId");
    setTimeout(function() {
      if (id != null) {
        const user: UserDataModel = userData.users.find((user: UserDataModel) => user.id === +id);
        resolve(user.accountBalance);
      } else {
        reject(notLoggedIn);
      }
    }, delay);
  })
}

export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem("userId")
}

export const checkout = (items: Array<ProductDataModel>): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(function(){
      resolve("Thank you for the money!");
    }, delay);
  });
}
