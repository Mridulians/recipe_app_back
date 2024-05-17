import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/user.js";
import recipeRouter from "./routes/recipe.js";
import cors from "cors";
// import bodyParser from "express";

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
    "mongodb+srv://gmridul898:S0FnNuZ4MiVnzpXo@cluster0.guruze1.mongodb.net/",
    {
      dbName: "MERN_RECIPE",
    }
  )
  .then(() => console.log("MongoDb is connected ....."))
  .catch((err) => console.log(err.message));

// app.get("/", (req, res) => {
//   res.send("Hello World from MRIDUL");
// });

app.listen(3000, (req, res) => {
  console.log("server listing on port 3000");
});

//S0FnNuZ4MiVnzpXo = password
//gmridul898 =  username
