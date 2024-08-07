'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

// Define the type for user data
type SignUpParams = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

export const signIn = async (p0: { email: string | undefined; password: string | undefined; }): Promise<void> => {
    const { email, password } = p0;

    if (!email || !password) {
        console.error('Email and password are required');
        return;
    }

    try {
        // Handle sign-in logic
    } catch (error) {
        console.error('Sign-in Error:', error);
    }
}

export const signUp = async (userData: SignUpParams): Promise<any> => {
    const { email, password, firstName, lastName } = userData;

    try {
        const { account } = await createAdminClient();

        // Combine firstName and lastName
        const fullName = `${firstName} ${lastName}`;

        // Create a new user account
        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            fullName // Ensure fullName is a valid parameter
        );

        // Create a session for the new user
        const session = await account.createEmailPasswordSession(email, password);

        // Set the session cookie
        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        // Return the user account data
        return parseStringify(newUserAccount);
    } catch (error) {
        console.error('Sign-up Error:', error);
        throw error; // Optionally rethrow or handle the error
    }
}

// Fetch logged-in user details
export async function getLoggedInUser(): Promise<any | null> {
    try {
        const { account } = await createSessionClient();
        return await account.get();
    } catch (error) {
        console.error('Error fetching logged-in user:', error);
        return null;
    }
}
