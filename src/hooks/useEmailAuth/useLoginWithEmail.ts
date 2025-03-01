import { getAuth } from "@react-native-firebase/auth"
import { useState } from "react"

export const useLoginWithEmail = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const loginWithEmail = async (email: string, password: string) => {
        setLoading(true)
        setError(null)

        try {
            await getAuth().signInWithEmailAndPassword(email, password);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loginWithEmail, loading, error };
}