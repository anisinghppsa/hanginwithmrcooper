export interface ProductDataModel {
  id: number;
  name: string;
  imageUrl: string;
}

const data = require("./data");
const delay = 1000; //ms

export const getProducts = (): Promise<Array<ProductDataModel>> => {
  return new Promise<Array<ProductDataModel>>((resolve, reject) => {
    setTimeout(function(){
      resolve(data.products);
    }, delay);
  });
};

export const getProductById = (id: number): Promise<ProductDataModel> => {
  return new Promise<ProductDataModel>((resolve, reject) => {
    const model = data.products.find((product: ProductDataModel) => product.id === id);
    setTimeout(function(){
      resolve(model || null);
    }, delay);
  })
};

export const checkout = (items: Array<ProductDataModel>): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(function(){
      resolve("Thank you for the money!");
    }, delay);
  });
}
