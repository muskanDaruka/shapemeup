"use client";

import { IExercise } from "@/types/exercise.type";
import axios from "axios";

class ExerciseService {
  /**
   * Get All posts
   * @retutn
   */
  async getAllExercise() {
    console.log("Hello");
    return await axios.get("/api/exercise");
  }

  /**
   * Create a exercise
   * @return
   */
  async createExercise(exerciseData: IExercise) {
    return await axios.post("/api/exercise", exerciseData);
  }

  /**
   * Delete a exercise
   * @param id: string
   */
  async deleteExercise(id: string) {
    return await axios.delete(`/api/exercise?id=${id}`);
  }

  /**
   * Edit the exercise by id
   * @param exercise IExercise
   */
  async editExercise(exercise: IExercise) {
    return await axios.put(`/api/exercise`, exercise);
  }

  /**
   * Get exercise by id
   * @param id string
   */
  async getExerciseById(id: string) {
    return await axios.get(`/api/exercise?id=${id}`);
  }
}

const exerciseService = new ExerciseService();

export default exerciseService;
