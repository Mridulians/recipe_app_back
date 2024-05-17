import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/user.js";
import recipeRouter from "./routes/recipe.js";
import cors from "cors";
import 'dotenv/config'
const PORT = process.env.PORT || 3000

 const MONGOURL = process.env.DB_URL


const app = express();
app.use(express.json());



app.use(cors({
    origin: true, 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);



// UserRouter
app.use("/api", UserRouter);

// recipe router
app.use("/api", recipeRouter);


mongoose
  .connect(
       MONGOURL,
    {
      dbName: "MERN_RECIPE",
    }
  )
  .then(() => console.log("MongoDb is connected ....."))
  .catch((err) => console.log(err.message));

// app.get("/", (req, res) => {
//   res.send("Hello World from MRIDUL");
// });


app.listen(PORT, (req, res) => {
  console.log("server listing on port 3000");
});

//S0FnNuZ4MiVnzpXo = password
//gmridul898 =  username
