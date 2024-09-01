import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import searchRoute from "./route/search.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config(); 

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

const itemSchema = new mongoose.Schema({
    name: String,
    category: String,
    title: String,
    price: Number,
    img: String,
  });
  
  const Item = mongoose.model('Item', itemSchema);
  
  // API route to get item details
  app.get('/api/item/:id', async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/search",searchRoute);

if(process.env.NODE_ENV==="production"){
  const dirPath=path.resolve();
  app.use(express.static("Frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirpath,"Frontend","dist","index.html"));
  })
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});