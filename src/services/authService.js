import User from "../models/User.js"
import { generateAuthToken } from "../utils/tokenUtils.js";

import bcrypt from "bcrypt";

export default {
    async register(userData) {
        // Check if user exists
        const userExists = await User.exists({email: userData.email})

        if(userExists) {
            throw new Error("User already exists!");
        }

        // Check if passwords are the same
        if(userData.password !== userData.rePassword) {
            throw new Error("Password missmatch!");
        }

        const user = await User.create(userData);

        const token = generateAuthToken(user);

        return token;
    },
    async login(email, password) {
        // Validate user
        const user = await User.findOne({ email });

        if(!user) {
            throw new Error("Invalid user or password!");
        }

        // Validate password
        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid) {
            throw new Error("Invalid user or password!");
        }

        const token = generateAuthToken(user);

        return token;
    }
}