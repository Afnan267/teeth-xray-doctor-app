import { getAuth } from "@react-native-firebase/auth"
import { useState } from "react"

export const useLoginWithEmail = () => {
    const [loadingLoginWithEmail, setLoading] = useState(false)

    const [error, setError] = useState<string | null>(null)

    const loginWithEmail = async (email: string, password: string): Promise<boolean> => {
        setLoading(true)
        setError(null)

        try {
            await getAuth().signInWithEmailAndPassword(email, password);
            return true;
        } catch (error: any) {
            console.log("Login error in hook:", error.message);
            setError(error.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { loginWithEmail, loadingLoginWithEmail, error };
}