import { useState } from 'react';
import {
    GoogleSignin,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
} from '@react-native-google-signin/google-signin';

export const useGoogleLogin = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
                setUser(response.data.user); // Store user in state
                console.log('User Info:', response.data.user);
                return response.data.user;
            }
            return null;
        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.IN_PROGRESS:
                        console.log('Sign-in already in progress');
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        console.log('Play Services not available');
                        break;
                    default:
                        console.log('Google Sign-in error:', error.message);
                }
            } else {
                console.log('Unexpected error:', error);
            }
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { user, loading, signInWithGoogle };
};