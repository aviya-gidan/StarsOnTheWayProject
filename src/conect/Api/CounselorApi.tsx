
import { useState, useEffect } from "react"
//import { getAllCounselorApi, deleteCounselorApi, addCounselorApi, updateCounselorApi } from "../Counselor"
// import { Counselor } from "../type"

// export default function Api() {
//     const [counselors, setCounselors] = useState<Counselor[]>([])
//     const [counselorName, setCounselorName] = useState('');
//     const [counselorMail, setCounselorMail] = useState('');
//     const [counselorPhoneNum,setcounselorPhoneNum] = useState('');

//     const getAllCounselor = async () => {
//         try {
//             const counselors = await getAllCounselorApi()
//             setCounselors(counselors)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     };

//     const addCounselor = async () => {
//         try {
//             setCounselors([])
//             const counselor = {
//                 id: 0,
//                 name: counselorName,
//                 mail: counselorMail,
//                 phoneNum: counselorPhoneNum
//             }
//             await addCounselorApi(counselor)
//             counselor.id = counselors.length + 1
//             setCounselors([counselor, ...counselors])
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     const updateCounselor= async (Id: number) => {
//         try {
//             const counselorInsex = counselors.findIndex(c => c.id === Id)
//             if (counselorInsex !== -1) {
//                 const counselorToUpdate = { ...counselors[counselorInsex] }
//                 if(counselorName!=="")
//                 counselorToUpdate.name = counselorName
//                 if(counselorMail!=="")
//                 counselorToUpdate.mail = counselorMail
//                 await updateCounselorApi(counselorToUpdate, counselorToUpdate.id!)
//                 const newCounselor = [...counselors]
//                 newCounselor[counselorInsex] = counselorToUpdate
//                 setCounselors(newCounselor)
//             }
//             else
//                 alert("NO EXIST ID!")
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     const deleteCounselor = async (id: number) => {
//         try {
//             await deleteCounselorApi(id)
//             setCounselors(counselors.filter(c => c.id !== id))
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     return(
//         <div>
//         <h1><strong>Counselor </strong></h1>
//         <button onClick={getAllCounselor}>Get All Counselor</button>
//         {counselors.map((c:Counselor) => {
//             console.log("COUNSELOR: ")
//             console.log(c.id)
//             return(
//             <div key={c.id}>
//                 <p><strong>ID:</strong>{c.id}</p>
//                 <p><strong>NAME:</strong>{c.name}</p>
//                 <p><strong>PHONE NUM:</strong>{c.phoneNum}</p>
//                 <p><strong>MAIL:</strong>{c.mail}</p>

//                 <button onClick={() => deleteCounselor(c.id)}>Delete</button> 
//             </div> 
                   
//         )})}
//         </div>
//         )

    
// }