import { useState, useEffect } from "react"
// import { getAllResponseApi, deleteResponseApi, addResponseApi, updateResponseApi } from "../Response"
import { Responses } from "../type"

// export default function Api() {
//     const [responses, setResponses] = useState<Response[]>([])
//     const [responseComment, setResponseComment] = useState('');
//     const [responseUserId, setResponseUserId] = useState(0);

//     const getAllResponses = async () => {
//         try {
//             const res = await getAllResponseApi()
//             setResponses(responses)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     };

//     const addResponse = async () => {
//         try {
//             setResponses([])
//             const res = {
//                 id: 0,
//                 comment: responseComment,
//                 userId:responseUserId
//             }
//             await addResponseApi(res)
//             res.id = responses.length + 1
//             setResponses([res, ...responses])
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     const updateResponse= async (Id: number) => {
//         try {
//             const responseIndex = responses.findIndex(c => c.id === Id)
//             if (responseIndex !== -1) {
//                 const responseToUpdate = { ...responses[responseIndex] }
//                 if(responseComment!=="")
//                 responseToUpdate.comment = responseComment
//                 if(responseComment.userId!==0)
//                 responseToUpdate.userId = responseUserId
//             }
//             else
//                 alert("NO EXIST ID!")
//         } catch (error) {
//             console.log(error)
//         }
//     };
    

    
// }