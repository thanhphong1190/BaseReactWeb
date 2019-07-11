import { CATEGORIES, PRODUCT_STATUS } from "../../constant";
import NoImage from "../../assets/images/no-image.png";

export default [
  {
    id: 1, 
    category: CATEGORIES.VEGETABLES, 
    name: "Rau 1", 
    price: 25000, 
    discount: 0.1, 
    description: "Đang bán ngon lành", 
    status: PRODUCT_STATUS.SELLING, 
    unit: "bo", 
    provider: "Ba 4 ban rau", 
    quantity: 30, 
    imageUrl: NoImage, 
    featured: false
  },
  {id: 2, category: CATEGORIES.VEGETABLES, name: "Rau 2", price: 30000, discount: 0.15, description: "Đang bán ngon lành", status: PRODUCT_STATUS.ARCHIVED, unit: "bo", provider: "Ba 4 ban rau", quantity: 20, imageUrl: NoImage, featured: false},
  {id: 3, category: CATEGORIES.VEGETABLES, name: "Rau 3", price: 40000, discount: 0, description: "Đang bán ngon lành", status: PRODUCT_STATUS.SELLING, unit: "bo", provider: "Ba 4 ban rau", quantity: 10, imageUrl: NoImage, featured: true},
  {id: 4, category: CATEGORIES.TUBER, name: "Cu 1", price: 12000, discount: 0.1, description: "Đang bán ngon lành", status: PRODUCT_STATUS.SELLING, unit: "g", provider: "Ba 3 ban cu", quantity: 15, imageUrl: NoImage, featured: true },
  {id: 5, category: CATEGORIES.TUBER, name: "Cu 2", price: 15000, discount: 0.1, description: "Đang bán ngon lành", status: PRODUCT_STATUS.ARCHIVED, unit: "g", provider: "Ba 3 ban cu", quantity: 30, imageUrl: NoImage, featured: false },
  {id: 6, category: CATEGORIES.TUBER, name: "Cu 3", price: 19000, discount: 0.1, description: "Đang bán ngon lành", status: PRODUCT_STATUS.SELLING, unit: "kg", provider: "Ba 2 ban cu", quantity: 100, imageUrl: NoImage, featured: true},
  {id: 7, category: CATEGORIES.FRUIT, name: "Qua 1", price: 30000, discount: 0.05, description: "Đang bán ngon lành", status: PRODUCT_STATUS.SELLING, unit: "g", provider: "Ba 1 ban cu", quantity: 70, imageUrl: NoImage, featured: true},
  {id: 8, category: CATEGORIES.FRUIT, name: "Qua 2", price: 40000, discount: 0.05, description: "Đang bán ngon lành", status: PRODUCT_STATUS.SELLING, unit: "g", provider: "Ong 5 ban qua", quantity: 60, imageUrl: NoImage, featured: false},
  {id: 9, category: CATEGORIES.FRUIT, name: "Qua 3", price: 50000, discount: 0.05, description: "Đang bán ngon lành", status: PRODUCT_STATUS.ARCHIVED, unit: "kg", provider: "Ong 6 ban qua", quantity: 30, imageUrl: NoImage, featured: false},
  {id: 10, category: CATEGORIES.FRUIT, name: "Qua 4", price: 15000, discount: 0.1, description: "Đang bán ngon lành", status: PRODUCT_STATUS.SELLING, unit: "kg", provider: "Ba 7 ban qua", quantity: 30, imageUrl: NoImage, featured: true}
];
