const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.use('/api/auth', authRoutes);


let menu = [
 { id: 1, name: 'Americano', price: 250, category: 'coffee',image:'https://i.pinimg.com/1200x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg'  },
{ id: 2, name: 'Cappuccino', price: 280, category: 'coffee', image:'https://i.pinimg.com/736x/52/41/31/52413159c7f291bbc186422481b3ac50.jpg' },
{ id: 3, name: 'Macchiato', price: 270, category: 'coffee',image:'https://i.pinimg.com/736x/3f/b6/7a/3fb67abb0e6bf9ed6556fc32549dce76.jpg' },
{ id: 4, name: 'Espresso', price: 240, category: 'coffee',image:'https://i.pinimg.com/1200x/40/67/01/4067010339fb0ee75c9631551f30576a.jpg' },
{ id: 5, name: 'Latte', price: 290, category: 'coffee',image:'https://i.pinimg.com/736x/46/33/c0/4633c0742fefe5f4ae17428770053158.jpg' },
{ id: 6, name: 'Iced Americano', price: 260, category: 'cold-coffee' ,image:'https://i.pinimg.com/736x/cf/86/85/cf8685f6b02dea31682f696be282f703.jpg'},
{ id: 7, name: 'Iced Latte', price: 300, category: 'cold-coffee',image:'https://i.pinimg.com/736x/8c/79/14/8c7914fd444376555ab0de073f082144.jpg' },
{ id: 8, name: 'Iced Mocha', price: 320, category: 'cold-coffee', image:'https://i.pinimg.com/736x/66/bd/32/66bd320679db4217c5c20785a961d1bc.jpg'},
{ id: 9, name: 'Cold Brew', price: 210, category: 'cold-coffee',image:'https://i.pinimg.com/1200x/a0/8b/61/a08b618b6bbe45c5f3ae62ffdaff1d7d.jpg' },
{ id: 10, name: 'Nitro Cold Brew', price: 230, category: 'cold-coffee',image:'https://i.pinimg.com/736x/bb/15/60/bb156021a82846025d1c9ec4a28c5a19.jpg' },
{ id: 11, name: 'Green Tea', price: 330, category: 'tea' ,image:'https://i.pinimg.com/736x/d3/85/ce/d385ce2cabe96a724807459a4190ea42.jpg'},
{ id: 12, name: 'Hot Chocolate', price: 260, category: 'tea',image:'https://i.pinimg.com/736x/7c/db/8f/7cdb8fdd1441d491a9e4b35b5ce2744a.jpg' },
{ id: 13, name: 'Iced Tea', price: 240, category: 'tea' ,image:'https://i.pinimg.com/736x/35/5f/bd/355fbd94605c64e5e9591c51018ca21e.jpg'},
{ id: 14, name: 'Chamomile Tea', price: 250, category: 'tea',image:'https://i.pinimg.com/736x/ae/b8/49/aeb8497821284e34978199e7c5165054.jpg' },
{ id: 15, name: 'Lemon Ginger Tea', price: 250, category: 'tea',image:'https://i.pinimg.com/736x/b6/36/f9/b636f96aae33b394209001a73939bdaa.jpg' },
{ id: 16, name: 'Caramel Macchiato', price: 330, category: 'specialty',image:'https://i.pinimg.com/1200x/e8/cd/a1/e8cda1ae03a408f2d25cc9a701d1d89d.jpg' },
{ id: 17, name: 'Vanilla Latte', price: 310, category: 'specialty' ,image:'https://i.pinimg.com/1200x/38/4e/60/384e6075849ba6118d07f523a75814ca.jpg'},
{ id: 18, name: 'Hazelnut Mocha', price: 320, category: 'specialty',image:'https://i.pinimg.com/736x/c3/ff/9e/c3ff9e4df1449ce6edaa791976b8993f.jpg' },
{ id: 19, name: 'Chai Latte', price: 300, category: 'specialty',image:'https://i.pinimg.com/736x/0a/b4/ca/0ab4cad99ca1475d0eb1c9b2c9be13af.jpg' },
{ id: 20, name: 'Matcha Latte', price: 340, category: 'specialty',image:'https://i.pinimg.com/1200x/fb/b3/3e/fbb33ee802c31c6018a180f81ed2ee5e.jpg' },
{ id: 21, name: 'Croissant (Almond)', price: 220, category: 'snacks',image:'https://i.pinimg.com/1200x/cf/9b/af/cf9bafa8f904bb4c2aacf06cebf46331.jpg' },
{ id: 22, name: 'Croissant (Chocolate)', price: 230, category: 'snacks',image:'https://i.pinimg.com/1200x/a2/42/e2/a242e2d5751c1f81bc11aea26c5778f3.jpg' },
{ id: 23, name: 'Croissant (Plain)', price: 210, category: 'snacks',image:'https://i.pinimg.com/1200x/fb/5a/7b/fb5a7b4a04fe90e7ad03b98c79d6e836.jpg' },
{ id: 24, name: 'Blueberry Muffin', price: 200, category: 'snacks',image:'https://i.pinimg.com/1200x/32/ab/2f/32ab2f39dd38f85e489f96953a9fa5d6.jpg' },
{ id: 25, name: 'Chocolate Muffin', price: 200, category: 'snacks',image:'https://i.pinimg.com/1200x/5a/b7/55/5ab75511a7e5ce39ad0a97f08f074a51.jpg' },
{ id: 26, name: 'Scone (Lemon)', price: 150, category: 'snacks',image:'https://i.pinimg.com/1200x/7e/0c/f5/7e0cf5a029650959b8904c6c44a5a4ed.jpg' },
{ id: 27, name: 'Scone (Cranberry)', price: 180, category: 'snacks',image:'https://i.pinimg.com/736x/97/70/bc/9770bcfbbf9406566e6bd80c1e1b286e.jpg' },
{ id: 28, name: 'Cookie (Chocolate Chip)', price: 110, category: 'snacks',image:'https://i.pinimg.com/736x/32/f8/9a/32f89a9b388e1549d5ae052b954c3584.jpg' },
{ id: 29, name: 'Cookie (Oatmeal)', price: 110, category: 'snacks',image:'https://i.pinimg.com/1200x/b5/f2/4d/b5f24d64f54458dab89e06ee52cb3004.jpg' },
{ id: 30, name: 'Bagel (Cream Cheese)', price: 210, category: 'snacks',image:'https://i.pinimg.com/1200x/3d/f1/32/3df1324018f5d7a114250583cf8c06e9.jpg' },

];

let orders = [];

app.get('/api/menu', (req, res) => res.json(menu));

app.post('/api/orders', (req, res) => {
  const { user, items } = req.body;
  const newOrder = { user, items, status: 'Placed' };
  orders.push(newOrder);
  res.status(201).json({ message: 'Order placed' });
});

app.get('/api/orders/:user', (req, res) => {
  const userOrders = orders.filter(o => o.user === req.params.user);
  res.json(userOrders);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));