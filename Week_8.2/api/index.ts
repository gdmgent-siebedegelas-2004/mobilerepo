import express, { Request, Response } from "express";
import * as bodyParser from "body-parser";
import fs from "fs";
import { Student } from "./types";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const readStudents = (): Student[] => {
  return JSON.parse(fs.readFileSync("data/students.json", "utf-8"));
};

const writeStudents = (students: Student[]) => {
  fs.writeFileSync("data/students.json", JSON.stringify(students));
};

app.get("/students", (req: Request, res: Response) => {
  const students: Student[] = readStudents();
  res.json(students);
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
