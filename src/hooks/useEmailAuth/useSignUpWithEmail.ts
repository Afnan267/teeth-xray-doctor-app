import { getAuth } from "@react-native-firebase/auth"
import { useState } from "react"

export const useSignUpWithEmail = () => {
    const [loadingSignUpWithEmail, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const signUpWithEmail = async (email: string, password: string) => {
        setLoading(true)
        setError(null)

        try {
            await getAuth().createUserWithEmailAndPassword(email, password);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { signUpWithEmail, loadingSignUpWithEmail,error };
}