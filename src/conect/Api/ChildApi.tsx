import { useState, useEffect, ChangeEvent } from "react"
// import { getAllChildApi, deleteChildApi, addChildApi, updateChildApi } from "../../Repository/Child"
import { Child } from "../type"
import { isNamespaceImport } from "typescript";
// import { v4 as uuidv4 } from 'uuid';


// export default function ApiChild() {
//     const [children, setChildren] = useState<Child[]>([])
//     // const [childId, setChildId] = useState(0);
//     // const [childName, setChildName] = useState('');
//     // const [childUserName, setChildUserName] = useState('');
//     // const [childAddress, setChildAddress] = useState('');
//     // const [childBirthDate, setChildBirthDate] = useState(new Date());
//     // const [childGuardianName, setChildGuardianName] = useState('');
//     // const [childGuardianPhoneNum, setchildGuardianPhoneNum] = useState('');
//     // const [ChildMail, setChildMail] = useState('');
//     // const [ChildPhoneNum, setChildPhoneNum] = useState('');
//     const [child, setChild] = useState<Child>({
//         name: '',
//         userName: '',
//         address: '',
//         birthDate: new Date(),
//         guardianName: '',
//         guardianPhoneNum: '',
//         mail: '',
//         phoneNum: ''
//     })
//     const getAllChild = async () => {
//         try {
//             const children = await getAllChildApi()
//             setChildren(children)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     };

//     const addChild = async () => {
//         try {
//             setChildren([])
//             const child = {
//                 // id: generateUniqueId(),
//                 name: '',
//                 userName: '',
//                 address: '',
//                 birthDate: new Date(),
//                 guardianName: '',
//                 guardianPhoneNum: '',
//                 mail: '',
//                 phoneNum: ''
//             }
//             const newChild = await addChildApi(child)
//             setChildren([newChild, ...children])
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     const updateChild = async (Id: number) => {
//         try {
//             const childIndex = children.findIndex(c => c.id === Id)
//             if (childIndex !== -1) {
//                 const childToUpdate = { ...children[childIndex] }
//                 if (child.name !== "")
//                     childToUpdate.name = child.name
//                 if (child.userName !== "")
//                     childToUpdate.userName = child.userName
//                 if (child.address !== "")
//                     childToUpdate.address = child.address
//                 if (child.birthDate !== new Date())
//                     childToUpdate.birthDate = child.birthDate
//                 if (child.guardianName !== "")
//                     childToUpdate.guardianName = child.guardianName
//                 if (child.guardianPhoneNum !== "")
//                     childToUpdate.guardianPhoneNum = child.guardianPhoneNum
//                 if (child.mail !== "")
//                     childToUpdate.mail = child.mail
//                 await updateChildApi(childToUpdate, childToUpdate.id!)
//                 const newChild = [...children]
//                 newChild[childIndex] = childToUpdate
//                 setChildren(newChild)
//             }
//             else
//                 alert("NO EXIST ID!")
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     const deleteChild = async (id: number | undefined) => {
//         try {
//             await deleteChildApi(id)
//             setChildren(children.filter(c => c.id !== id))
//         } catch (error) {
//             console.log(error)
//         }
//         getAllChild();
//     };

//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const { value, name } = event.target
//         setChild({ ...child, [name]: value })
//     }

    // const AddNew = async( name:string,userName:string,address:string,
    //     birthDate:Date,guardianName:string | undefined,guardianPhoneNum:string,
    //     mail:string,phoneNum:string) => {
    //     const newChild = {
    //         id: 0,
    //         name: name,
    //         address: address,
    //         birthDate: birthDate,
    //         guardianName: guardianName,
    //         guardianPhoneNum: guardianPhoneNum,
    //         mail: mail
    //     };
    //     await addChild();
    // };

    // const PutNew = async(id:number,name:string,userName:string,address:string,
    //     birthDate:Date,guardianName:string ,guardianPhoneNum:string,
    //     mail:string,phoneNum:string)=>{
    //     const newChild:Child  = {    
    //         id: Number(id),
    //         name: name,
    //         userName: userName,
    //         address: address,
    //         birthDate: birthDate,
    //         guardianName: guardianName,
    //         guardianPhoneNum:guardianPhoneNum,
    //         mail:mail,
    //         phoneNum:phoneNum
    //         };
    //         updateChild((Number)(id));
    // }

    // return (
    //     <div>
    //         <h1><strong>Child </strong></h1>
    //         <button onClick={getAllChild}>Get All Children</button>
    //         {children.map((c: Child) => {
    //             console.log("CHILD: ")
    //             console.log(c.id)
    //             return (
    //                 <div key={c.id}>
    //                     <p><strong>ID:</strong>{c.id}</p>
    //                     <p><strong>NAME:</strong>{c.name}</p>
    //                     <p><strong>USERNAME:</strong>{c.userName}</p>
    //                     <p><strong>ADRESS:</strong>{c.address}</p>
    //                     <p><strong>GUARDIANNAME:</strong>{c.guardianName}</p>
    //                     <p><strong>GUARDIANPHONENUM:</strong>{c.guardianName}</p>
    //                     <p><strong>MAIL:</strong>{c.mail}</p>
    //                     <p><strong>PHONENUM:</strong>{c.phoneNum}</p>
    //                     {<button onClick={() => deleteChild(c.id)}>Delete</button>}
    //                 </div>


    //             )
    //         })}
    //         {/* הוספה */}
    //         <div style={{ marginBottom: '20px' }} className="div2"></div>
    //         <h2>ADD CHILD</h2>

    //         <input id="childName: " type="text" name='name' value={child.name} onChange={handleChange} />
    //         <label htmlFor="childName">שם הילד:</label>
    //         <br />
    //         <input id="childUser: " type="text" value={child.userName} onChange={(e) => setChildUserName(e.target.value)} />
    //         <label htmlFor="childUser">שם משתמש:</label>
    //         <br />

    //         <input id="childAddress" type="text" value={childAddress} onChange={(e) => setChildAddress(e.target.value)} />
    //         <label htmlFor="childAddress"> כתובת :</label>
    //         <br />

    //         <input id="childBirthDate" type="date" value={childBirthDate.toISOString().split('T')[0]} onChange={(e) => setChildBirthDate(new Date(e.target.value))} />
    //         <label htmlFor="childBirthDate">תאריך לידה</label>
    //         <br />
    //         <input id="childGuardianName" type="text" value={childGuardianName} onChange={(e) => setChildGuardianName(e.target.value)} />
    //         <label htmlFor="childGuardianName"> שם האפוטרופוס</label>
    //         <br />
    //         <input id="childGuardianPhoneNum" type="text" value={childGuardianPhoneNum} onChange={(e) => setchildGuardianPhoneNum(e.target.value)} />
    //         <label htmlFor="childGuardianPhoneNum"> מספר טלפון האפוטרופוס </label>
    //         <br />
    //         <input id="ChildMail" type="text" value={ChildMail} onChange={(e) => setChildMail(e.target.value)} />
    //         <label htmlFor="ChildMail"> מיייל:
    //         </label>
    //         <br />

    //         <button style={{ background: 'red', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() =>
    //             addChild()}>Add Child</button><br />

            {/* עדכון */}
            {/* <div style={{marginBottom:'20px'}} className="div3"></div>
        <h2>UPDATE CHILD</h2>
        <label htmlFor="childId">Child ID:</label>
            <input id="childId" type="text" value={childId} onChange={(e) => setChildId(Number(e.target.value))} />
            <br />
        <input id="childName: " type="text" value={childName} onChange={(e) => setChildName(e.target.value)} />
        <label htmlFor="childName">שם הילד:</label>
        <br />
        <input id="childUser: " type="text" value={childUserName} onChange={(e) => setChildUserName(e.target.value)} />
        <label htmlFor="childUser">שם משתמש:</label>
        <br />

        <input id="childAddress" type="text"  value={childAddress} onChange={(e) => setChildAddress(e.target.value)} />
        <label htmlFor="childAddress"> כתובת :</label>
        <br />

        <input id="childBirthDate"  type="date"  value={childBirthDate.toISOString().split('T')[0]} onChange={(e)=> setChildBirthDate(new Date(e.target.value))} />
        <label htmlFor="childBirthDate">תאריך לידה</label>
        <br />
        <input id="childGuardianName"  type="text"  value={childGuardianName} onChange={(e)=> setChildGuardianName(e.target.value)} />
        <label htmlFor="childGuardianName"> שם האפוטרופוס</label>
        <br />
        <input id="childGuardianPhoneNum"  type="text"  value={childGuardianPhoneNum} onChange={(e)=> setchildGuardianPhoneNum(e.target.value)} />
        <label htmlFor="childGuardianPhoneNum"> מספר טלפון האפוטרופוס </label>
        <br />
        <input id="ChildMail"  type="text"  value={ChildMail} onChange={(e)=> setChildMail(e.target.value)} />
        <label htmlFor="ChildMail"> מיייל:
        </label>
        <br />
        <button style={{ background: 'red', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() =>
            updateChild}>Update Child</button><br /> */}
//         </div>
//     )
// }

// function generateUniqueId() {
//     const uuidString = uuidv4();
//     const uuidNumber = parseInt(uuidString.replace(/-/g, ''), 16);
//     return uuidNumber;
// }