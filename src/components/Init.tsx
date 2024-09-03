import { ReactNode, useEffect } from "react"
import { getChildByToken } from "../services/child.service"
import { getSession, isValidToken } from "../auth/utils"
import { useDispatch } from "react-redux"
import { setInitialized, setUser } from "../redux/auth/auth.slice"

type InitProps = {
    children: ReactNode
}
export default function Init({ children }: InitProps) {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = getSession()
                if (token && isValidToken(token)) {
                    const child = await getChildByToken(token)
                    dispatch(setUser(child))
                }
            } catch (error) {
                console.error("Error fetching user:", error)
            } finally {
                dispatch(setInitialized())
            }
        }
        fetchData()
    }, [])
    return <>{children}</>
}