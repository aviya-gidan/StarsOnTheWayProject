import { useState, useEffect } from "react"
// import { getAllWorkshopApi, deleteWorkshopApi, addWorkshopApi, updateWorkshopApi } from "../Repository/Workshop"
import { Workshop } from "../type"
import { isNamespaceImport } from "typescript";

// export default function Api() {
//     const [workshops, setWorkshops] = useState<Workshop[]>([]);
//     const [workshopName, setWorkshopName] = useState('');
//     const [workshopLength, setWorkshopLength] = useState(0);
//     const [workshopDescription, setWorkshopDescription] = useState('') ;
//     const [workshopNameOfCounselor, setWorkshopNameOfCounselor] = useState('');
//     const [workshopHour,setWorkshopHour] = useState(0);
//     const [workshopDate,setWorkshopDate] = useState(new Date());
//     const [workshopCapacity, setWorkshopCapacity] = useState(0);
//     const [workshopNumOfKids,setWorkshopNumOfKids] = useState(0);
//     const [workshopAddress, setWorkshopAddress] = useState('');

//     const getAllWorkshop = async () => {
//         try {
//             const workshops = await getAllWorkshopApi()
//             setWorkshops(workshops)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     };
//     const addWorkshop = async () => {
//         try {
//             setWorkshops([])
//             const workshop = {
//                 id: 0,
//                 name: workshopName,
//                 length: workshopLength,
//                 description:workshopDescription,
//                 nameOfCounselor: workshopNameOfCounselor,
//                 hour: workshopHour,
//                 date:workshopDate,
//                 capacity: workshopCapacity,
//                 numOfKids: workshopNumOfKids,
//                 address: workshopAddress
//             }
//             await addWorkshopApi(workshop)
//             workshop.id = workshops.length + 1
//             setWorkshops([workshop, ...workshops])
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     const updateWorkshop = async (Id: number) => {
//         try {
//             const workshopIndex = workshops.findIndex(w => w.id === Id)
//             if (workshopIndex !== -1) {
//                 const workshopToUpdate = { ...workshops[workshopIndex] }
//                 if(workshopName!=='')
//                 workshopToUpdate.name = workshopName
//                 if(workshopLength!==0)
//                 workshopToUpdate.length = workshopLength
//                 if(workshopDescription!=="")
//                 workshopToUpdate.description = workshopDescription
//                 if(workshopNameOfCounselor!=="")
//                 workshopToUpdate.nameOfCounselor = workshopNameOfCounselor
//                 if(workshopHour!==0)
//                 workshopToUpdate.hour = workshopHour
//                 if(workshopDate.getTime()!==new Date().getTime())
//                 workshopToUpdate.date = new Date(workshopDate)
//                 if(workshopCapacity!==0)
//                 workshopToUpdate.capacity = workshopCapacity
//                 if(workshopNumOfKids!==0)
//                 workshopToUpdate.numOfKids = workshopNumOfKids
//                 if(workshopAddress!=="")
//                 workshopToUpdate.address = workshopAddress
//                 await updateWorkshopApi(workshopToUpdate, workshopToUpdate.id!)
//                 const newWorkshop = [...workshops]
//                 newWorkshop[workshopIndex] = workshopToUpdate
//                 setWorkshops(newWorkshop)
//             }
//             else
//                 alert("NO EXIST ID!")
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     const deleteWorkshop = async (id: number) => {
//         try {
//             await deleteWorkshopApi(id)
//             setWorkshops(workshops.filter(w => w.id !== id))
//         } catch (error) {
//             console.log(error)
//         }
//         getAllWorkshop();
//     };
//     return(
//         <div>
//         <h1><strong>Workshop </strong></h1>
//         <button onClick={getAllWorkshop}>Get All Workshops</button>
//         {workshops.map((w:Workshop) => {
//             console.log("WORKSHOP: ")
//             console.log(w.id)
//             return(
//             <div key={w.id}>
//                 <p><strong>ID:</strong>{w.id}</p>
//                 <p><strong>NAME:</strong>{w.name}</p>
//                 <p><strong>LENGTH:</strong>{w.length}</p>
//                 <p><strong>DESCRIPRION:</strong>{w.description}</p>
//                 <p><strong>NAME OF COUNSELOR:</strong>{w.nameOfCounselor}</p>
//                 <p><strong>HOUR:</strong>{w.hour}</p>
//                 <p><strong>DATE</strong>{new Date(w.date).toLocaleDateString()}</p>
//                 <p><strong>CAPACITY:</strong>{w.capacity}</p>
//                 <p><strong>NUM OF KIDS:</strong>{w.numOfKids}</p>
//                 <p><strong>ADDRESS:</strong>{w.address}</p>

//                 <button onClick={() => deleteWorkshop(w.id)}>Delete</button> 
//             </div> 
                   
//         )})}
//         </div>
//         )
            
// }