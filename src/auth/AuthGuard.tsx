import { ReactNode } from "react"
import { selectAuth } from "../redux/auth/auth.selectors"
import { Navigate } from "react-router-dom"
import { PATHS } from "../navbar/paths"
import { useSelector } from "react-redux"
import React from "react"


type Props = {
    children: ReactNode
}

export default function AuthGuard({ children }: Props) {
    const { isAuthenticated, isInitialized } = useSelector(selectAuth);

    if (!isInitialized) { // מחכה לבדיקה של הבדיקה  אם הוא מחובר או לא 
        return <h1>Loading...</h1>
    }
    if (!isAuthenticated) { // אם אתה לא מחובר תלך לדף הלוגין
        return <Navigate to={PATHS.login} />
    }
    return <>{children}</>
}


//AuthGuard: דף זה מבצע אימות אם המשתמש מחובר או לא
//אם הוא מחובר, הוא מאפשר גישה לתוכן המבוקש. אם לא, הוא מפנה לדף ההתחברות.