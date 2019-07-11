import { BILL_STATUS } from "../../constant";
export default [
  {
    id: 1,
    billCode: "20181205",
    createdDate: new Date("2018/6/1 12:00:00"),
    updatedDate: null,
    productTotalPrice: 25000,
    shippingPrice: 30000,
    totalPrice: 55000,
    status: BILL_STATUS.CONFIRMED,
    receiverName: "Khoa",
    receiverAddress: "15 Ngo Quyen, Da Nang",
    receiverEmail: "khoa@gmail.com",
    receiverPhone: "01214542102",
    paymentId: 1,
    paymentName: "Phong",
    paymentAddress: "123 Ngo Quyen, Da Nang",
    paymentEmail: "phong@gmail.com",
    paymentPhone: "01905123456",
    staffNote: "",
    customerNote: "Nhan vien co thai do ko tot",
    billDetail: [
      {
        orderId: 1,
        productId: 1,
        productName: "Rau sach 1",
        productPrice: 10000,
        productImage: "https://znews-photo-td.zadn.vn/w660/Uploaded/cqxrcajwp/2015_05_04/dua_chuot.jpg",
        unit: "bo",
        quantity: 2,
        totalPrice: 20000
      },
      {
        orderId: 2,
        productId: 2,
        productName: "Cu ca rot",
        productPrice: 5000,
        productImage: "https://znews-photo-td.zadn.vn/w660/Uploaded/cqxrcajwp/2015_05_04/dua_chuot.jpg",
        unit: "kg",
        quantity: 1,
        totalPrice: 5000
      }
    ]
  }
];