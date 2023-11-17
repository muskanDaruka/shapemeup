"use client";

import { IClass } from "@/types/classes.type";
import axios from "axios";

class ClassesService {
    /**
     * Get All posts
     * @retutn
     */
    async getAllClasses() {
        console.log("Hello")
        return await axios.get("/api/classes");

    }

    /**
     * Create a classes
     * @return
     */
    async createClasses(classesData: IClass) {
        return await axios.post("/api/classes", classesData);
    }

    /**
     * Delete a classes
     * @param id: string
     */
    async deleteClasses(id: string) {
        return await axios.delete(`/api/classes?id=${id}`);
    }

    /**
     * Edit the classes by id
     * @param classes IClass
     */
    async editClasses(classes: IClass) {
        return await axios.put(`/api/classes`);
    }

    /**
     * Get classes by id
     * @param id string
     */
    async getClassesById(id: string) {
        return await axios.get(`/api/classes?id=${id}`);
    }
}

const classesService = new ClassesService();

export default classesService;
