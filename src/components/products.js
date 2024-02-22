import cloth1 from '..//images/cloth1.png';
import cloth2 from '..//images/cloth2.png';
import cloth3 from '..//images/cloth3.png';
import cloth4 from '..//images/cloth4.png';
import cloth5 from '..//images/cloth5.png';
import elec1 from '..//images/elec1.png';
import elec2 from '..//images/elec2.png';
import elec3 from '..//images/elec3.png';
import elec4 from '..//images/elec4.png';
import elec5 from '..//images/elec5.png';
import acc1 from '..//images/acc1.png';
import acc2 from '..//images/acc2.png';
import acc3 from '..//images/acc3.png';
import acc4 from '..//images/acc4.png';
import acc5 from '..//images/acc5.png';
// product.js
const products = {
  Clothing: [
      { id: 11, name: "Shirt", price: 999 ,image:cloth1 ,discount:25,rating:4.3,actualprice:1500},
      { id: 12, name: "Dress", price: 800 ,image:cloth2,discount:25,rating:4.7 },
      { id: 13, name: "Denim", price: 405,image:cloth3,discount:25,rating:4.9 },
      { id: 14, name: "Top", price: 400 ,image:cloth4,discount:25,rating:4.2 },
      { id: 15, name: "Shirt", price: 1189 ,image:cloth5,discount:25,rating:4.3 },
      { id: 16, name: "Shirt", price: 1500,image:cloth5,discount:25,rating:4.3 },
      // Add more clothing items as needed
  ],
  Electronics: [
      { id: 21, name: "Phone", price: 500 ,image:elec1,rating:3.7 },
      { id: 22, name: "Laptop", price: 1000 ,image:elec2,rating:4.2 },
      { id: 23, name: "Laptop", price: 1000 ,image:elec3,rating:5.0 },
      { id: 24, name: "Laptop", price: 1000 ,image:elec4,rating:2.9 },
      { id: 25, name: "Laptop", price: 1000 ,image:elec5,rating:3.9 },

      // Add more electronics items as needed
  ],
  Accessories: [
      { id: 31, name: "Spects", price: 100,image:acc1,rating:4.5 },
      { id: 32, name: "Studs", price: 500 ,image:acc2,rating:4.7 },
      { id: 33, name: "Watch", price: 1000,image:acc3,rating:4.2 },
      { id: 34, name: "Watch", price: 999,image:acc4,rating:4.1},
      { id: 35, name: "Watch", price: 499,image:acc5,rating:4.4 },
      // Add more accessories items as needed
  ]
};
  export default products;
  