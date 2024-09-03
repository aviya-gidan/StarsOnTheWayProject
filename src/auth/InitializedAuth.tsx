import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getSession, isValidToken, removeSession } from "./utils"
import { setInitialized, setUser } from "../redux/auth/auth.slice"
import { getChildByToken } from "../services/child.service"

export default function InitializedAuth() {

    const dispatch = useDispatch()

    const initialize = async () => {
        const token: string | null = getSession()
        if (token && isValidToken(token)) {
            try {
                const child = await getChildByToken(token)
                dispatch(setUser(child))
            } catch (error) {
                removeSession()
            } finally {
                dispatch(setInitialized())
            }

        } else {
            dispatch(setInitialized())
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return null;
}

// import { ReactNode, useEffect } from "react"
// import { getSession, isValidToken, setSession } from "./utils"
// import { useDispatch } from "react-redux"
// import { setInitialized, setUser } from "../redux/auth/auth.slice"
// import { getUser}
// import { getUser } from "../services/user.service"
// import { UserType } from "../types/user.types"
// import { useAppSelector } from "../redux/store"
// import { selectAuth } from "../redux/auth/auth.selectors"

// type Props = {
//     children: ReactNode
// }
// export default function InitializedAuth({ children }: Props) {
//     const dispatch = useDispatch()
//     const { isInitialized } = useAppSelector(selectAuth)

//     useEffect(() => {
//         const fetchData = async () => {
//             const token: string | null = getSession()
//             if (token && isValidToken(token)) {
//                 try {
//                     const user: UserType = await getUser(token)
//                     dispatch(setUser({ id: user.id, fullName: user.fullName! ,email:user.email}))
//                     setSession(token)
//                 } catch (error) {
//                     // Handle error
//                     console.error("Error fetching user:", error)
//                 }
//                 finally {
//                     dispatch(setInitialized())
//                 }
//             } else {
//                 dispatch(setInitialized())
//             }
//         }

//         fetchData()
//     }, [])

//     return <>{children}</>
// }

//InitializedAuth: דף זה אחראי לאתחול האוטומטי של האימות בזמן טעינת האפליקצי
//ה. הוא בודק אם קיים טוקן תקף ואם כן, מאפשר גישה למשתמש. אם לא, הוא מאפס את הסשן.
