"use client"

import {getAuth, signOut} from "firebase/auth";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function securePage(){
    // const navigate = useNavigate();
    const auth = getAuth();
    const router = useRouter();
    const {user, loading} = useUserAuth();

   
    useEffect(() => {
        if(loading == false && user == null){
            router.push("../login");
        }
    }, [user])

    const handleSignout = async () => {
        signOut(auth);
        router.push("../login");
    }

    if(loading){
        return <p>processing authentication</p>
    }

    if(loading == false && user != null){
        return (

            <div>
                <h1>Homepage</h1>
                <p>Hi {user.email}</p>
                <button onClick={handleSignout}>Sign out</button>
            </div>

        )
    }

}