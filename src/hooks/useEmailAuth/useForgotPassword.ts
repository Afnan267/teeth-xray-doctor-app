import { getAuth } from "@react-native-firebase/auth";
import { useState } from "react";

export const useForgotPassword = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendPasswordResetEmail = async (email: string): Promise<boolean> => {
        setLoading(true);
        setError(null);

        try {
            await getAuth().sendPasswordResetEmail(email);
            console.log("Forgot password in hook success:");
            return true;
        } catch (error: any) {
            console.log("Forgot password error:", error.message);
            setError(error.message);
            return false;
        } finally {
            setLoading(false);
        }
    };
    return { sendPasswordResetEmail, loading, error };

}