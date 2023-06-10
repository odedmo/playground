import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import todoRoutes from "./features/todos/routes";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();

const PORT: string | number = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use(todoRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.nxzdg.mongodb.net?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World From the Typescript Server!");
// });

// interface FormInputs {
//   email: string;
//   password: string;
// }

// // Array of example users for testing purposes
// const users = [
//   {
//     id: 1,
//     name: "Maria Doe",
//     email: "maria@example.com",
//     password: "maria123",
//   },
//   {
//     id: 2,
//     name: "Juan Doe",
//     email: "juan@example.com",
//     password: "juan123",
//   },
// ];

// // route login
// app.post("/login", (req: Request, res: Response) => {
//   const { email, password }: FormInputs = req.body;

//   const user = users.find((user) => {
//     return user.email === email && user.password === password;
//   });

//   if (!user) {
//     return res.status(404).send("User Not Found!");
//   }

//   return res.status(200).json(user);
// });

// const port = process.env.PORT || 8000;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
