import { getAuth } from "@react-native-firebase/auth"
import { useState } from "react"

export const useSignoutWithEmail = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const signoutWithEmail = async () => {
        setLoading(true)
        setError(null)

        try {
            await getAuth().signOut();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { signoutWithEmail, loading, error };
}