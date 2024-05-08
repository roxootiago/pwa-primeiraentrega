import express from "express";
import mongoose from "mongoose";
import Exercise from './models/exercises.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get("/exercises",async (req, res) => {
  const exercise = await Exercise.find()
  return res.json(exercise);
});

app.get("/exercises/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const exercise = await Exercise.findById(id);

    if (exercise) {
      return res.json(exercise);
    } else {
      return res.status(404).send("Exercise not found");
    }
  } catch (error) {
    console.error("Exercise fetching exercise:", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.post("/exercises", async (request, response) => {
  const exercise = request.body;

const newExercise = await Exercise.create(exercise)

  return response.json(newExercise);
});

app.put("/exercises/:id", async (req, res) => {
  const { id } = req.params;
  const exerciseData = req.body;

  try {
    const updatedExercise = await exercise.findByIdAndUpdate(id, exerciseData, {
      new: true,
    });

    if (updatedExercise) {
      return res.json(updatedExercise);
    } else {
      return res.status(404).send("Exercise not found");
    }
  } catch (error) {
    console.error("Error updating exercise:", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.patch("/Exercises/:id", async (req, res) => {
  const { id } = req.params;
  const exerciseData = req.body;

  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(id, exerciseData, {
      new: true,
    });

    if (updatedExercise) {
      return res.json(updatedExercise);
    } else {
      return res.status(404).send("Exercise not found");
    }
  } catch (error) {
    console.error("Error updating exercise:", error);
    return res.status(500).send("Internal Server Error");
  }
});
app.delete("/exercises/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExercise = await Exercise.findByIdAndDelete(id);

    if (deletedExercise) {
      return res.status(204).send("Deleted exercise"); 
    } else {
      return res.status(404).send("Exercise not found");
    }
  } catch (error) {
    console.error("Error deleting exercise:", error);
    return res.status(500).send("Internal Server Error");
  }
});

app.listen(port, (err) => {
    if (err) console.log(`error message: ${err}`);
    console.log(`Server listening on http://localhost${port}`);
});

mongoose
  .connect(
    "mongodb+srv://tiagorxsilva:yxHBq2DSAkscYxdo@cluster0.g6r4ete.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log(`Banco conectado`))
  .catch(() => console.log("Não conectado :<"));
