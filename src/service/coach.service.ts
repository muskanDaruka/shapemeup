"use client";

import { ICoach } from "@/types/coach.type";
import axios from "axios";

class CoachService {
    /**
     * Get All posts
     * @retutn
     */
    async getAllCoach() {
        console.log("Hello")
        return await axios.get("/api/coach");

    }

    /**
     * Create a coach
     * @return
     */
    async createCoach(coachData: ICoach) {
        return await axios.post("/api/coach", coachData);
    }

    /**
     * Delete a coach
     * @param id: string
     */
    async deleteCoach(id: string) {
        return await axios.delete(`/api/coach?id=${id}`);
    }

    /**
     * Edit the coach by id
     * @param coach ICoach
     */
    async editCoach(coach: ICoach) {
        return await axios.put(`/api/coach`, coach);
    }

    /**
     * Get coach by id
     * @param id string
     */
    async getCoachById(id: string) {
        return await axios.get(`/api/coach?id=${id}`);
    }
}

const coachService = new CoachService();

export default coachService;
