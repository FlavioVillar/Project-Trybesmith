import * as productModel from '../models/product.model';
import IProduct from '../interfaces/products.interface';

export async function create(product: IProduct) { 
  const products = await productModel.create(product);
  return products;
}

export async function getAll() {
  const products = await productModel.getAll();
  return products;
}