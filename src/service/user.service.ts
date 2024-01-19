"use client";

import { IUser, UserType } from "@/types/user.type";
import axios from "axios";

class UserService {
    /**
   * Get All posts
   * @retutn
   */
    async getAllUser() {
        console.log("Hello");
        return await axios.get("/api/user");
    }

    /**
     * Create a user
     * @return
     */
    // async createUser(userData: UserType) {
    //     return await axios.post("/api/auth/register", userData);
    // }
    async createUser(userData: UserType) {
        try {
            const response = await axios.post("/api/auth/register", userData);
            console.log("API Response:", response);  // Log the entire response object
            return response;
        } catch (error: any) {
            console.error("API Request failed:", error);
            throw new Error(`Error in createUser: ${error.message}`);
        }
    }


    /**
     * Delete a user
     * @param id: string
     */
    async deleteUser(id: string) {
        return await axios.delete(`/api/user?id=${id}`);
    }

    /**
     * Edit the user by id
     * @param user IUser
     */
    async editUser(user: IUser) {
        return await axios.put(`/api/user`);
    }

    /**
     * Get user by id
     * @param id string
     */
    async getUserById(id: string) {
        return await axios.get(`/api/user?id=${id}`);
    }
}

const userService = new UserService();

export default userService;
