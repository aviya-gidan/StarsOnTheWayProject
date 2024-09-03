import { ReactNode } from "react"
import { selectAuth } from "../redux/auth/auth.selectors"
import { Navigate } from "react-router-dom"
import { PATHS } from "../navbar/paths"
import { useAppSelector } from "../redux/store"

type Props = {
    children: ReactNode
}

export default function GuestGuard({ children }: Props) {
    const { isAuthenticated, isInitialized } = useAppSelector(selectAuth);

    if (isAuthenticated) { // 
        return <Navigate to={PATHS.home} />
    }

    if (!isInitialized) { // 
        return <h1>Loading...</h1>
    }

    return <>{children}</>
}

//GuestGuard: דף זה מבצע אימות למשתמשים שאינם מחוברים.
// אם המשתמש אינו מחובר, הוא מאפשר גישה לתוכן המבוקש. אם הוא מחובר, הוא מפנה לדף הבית.