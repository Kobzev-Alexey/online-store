import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смартфон" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
     
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 Pro",
        price: 110000,
        rating: 5,
        img: "https://a.allegroimg.com/original/1156ca/6d98a4dc455f9d2b4cd10535b0c2/Apple-iPhone-12-Pro-Max-128-GB-Gold",
      },
      {
        id: 2,
        name: "Iphone 12 Pro",
        price: 110000,
        rating: 5,
        img: "https://a.allegroimg.com/original/1156ca/6d98a4dc455f9d2b4cd10535b0c2/Apple-iPhone-12-Pro-Max-128-GB-Gold",
      },
      {
        id: 3,
        name: "Iphone 12 Pro",
        price: 110000,
        rating: 4,
        img: "https://a.allegroimg.com/original/1156ca/6d98a4dc455f9d2b4cd10535b0c2/Apple-iPhone-12-Pro-Max-128-GB-Gold",
      },
      {
        id: 4,
        name: "Iphone 12 Pro",
        price: 110000,
        rating: 5,
        img: "https://a.allegroimg.com/original/1156ca/6d98a4dc455f9d2b4cd10535b0c2/Apple-iPhone-12-Pro-Max-128-GB-Gold",
      },
      {
        id: 5,
        name: "Iphone 12 Pro",
        price: 110000,
        rating: 5,
        img: "https://a.allegroimg.com/original/1156ca/6d98a4dc455f9d2b4cd10535b0c2/Apple-iPhone-12-Pro-Max-128-GB-Gold",
      },
      {
        id: 6,
        name: "Iphone 12 Pro",
        price: 110000,
        rating: 5,
        img: "https://a.allegroimg.com/original/1156ca/6d98a4dc455f9d2b4cd10535b0c2/Apple-iPhone-12-Pro-Max-128-GB-Gold",
      },
    ];

    this._selectedType = {}

    this._selectedBrand = {}

    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}
