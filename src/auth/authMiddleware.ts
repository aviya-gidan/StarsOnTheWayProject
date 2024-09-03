
import { getSession, isValidToken, removeSession } from './utils'
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const authRequestMiddleware = (request: InternalAxiosRequestConfig) => {
  if(request.url === '/Login') {
    return request;
  }
  const authUser = getSession()
  if(!authUser || !isValidToken(authUser)) {
    removeSession();
    return Promise.reject('Unauthorized');
  }
  return request;
};

export const authResponseMiddleware = (response:AxiosResponse) => {
   // שגיאה 401: אין הרשאה
    if(response.status === 401) {
        removeSession();
        Promise.reject('Unauthorized');
    }
    return response;
};

//InitializedAuth: דף זה אחראי לאתחול האוטומטי של האימות בזמן טעינת האפליקציה. הוא בודק אם קיים טוקן תקף ואם כן, מאפשר גישה למשתמש
//. אם לא, הוא מאפס את הסשן.

