import { ChangeEvent, useState } from "react";
import { updateChildService } from "../../services/child.service";
import { Child } from "../../conect/type";

export default function PrivateDetails() {
    const [children, setChildren] = useState<Child[]>([])
    const [child, setChild] = useState<Child>({
        name: '',
        userName: '',
        address: '',
        birthDate: new Date(),
        guardianName: '',
        guardianPhoneNum: '',
        mail: '',
        phoneNum: '',
        password: ''
    })

    const updateChild = async (Id: number) => {
        try {
            const childIndex = children.findIndex(c => c.id === Id)
            if (childIndex !== -1) {
                const childToUpdate = { ...children[childIndex] }
                if (child.name !== "")
                    childToUpdate.name = child.name
                if (child.userName !== "")
                    childToUpdate.userName = child.userName
                if (child.address !== "")
                    childToUpdate.address = child.address
                if (child.birthDate !== new Date())
                    childToUpdate.birthDate = child.birthDate
                if (child.guardianName !== "")
                    childToUpdate.guardianName = child.guardianName
                if (child.guardianPhoneNum !== "")
                    childToUpdate.guardianPhoneNum = child.guardianPhoneNum
                if (child.mail !== "")
                    childToUpdate.mail = child.mail
                await updateChild( childToUpdate.id!)
                const newChild = [...children]
                newChild[childIndex] = childToUpdate
                setChildren(newChild)
            }
            else
                alert("NO EXIST ID!")
        } catch (error) {
            console.log(error)
        }
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setChild({ ...child, [name]: value })
    }
    return (
        <div>
              <div style={{marginBottom:'20px'}} className="div3"></div>
        <h2>UPDATE CHILD</h2>

        <input id="childName: " type="text" name='name' value={child.name} onChange={handleChange} />
        <label htmlFor="childName">שם הילד:</label>
        <br />
        <input id="childUser: " type="text" name='userName' value={child.userName} onChange={handleChange} />
        <label htmlFor="childUser">שם משתמש:</label>
        <br />

        <input id="childAddress" type="text" name='address' value={child.address} onChange={handleChange} />
        <label htmlFor="childAddress"> כתובת :</label>
        <br />

        <input id="childBirthDate"  type="date" name='birthDate' value={child.birthDate.toISOString().split('T')[0]} onChange={handleChange} />
        <label htmlFor="childBirthDate">תאריך לידה</label>
        <br />
        <input id="childGuardianName"  type="text" name='guardianName' value={child.guardianName} onChange={handleChange} />
        <label htmlFor="childGuardianName"> שם האפוטרופוס</label>
        <br />
        <input id="childGuardianPhoneNum"  type="text" name='guardianPhoneNum' value={child.guardianPhoneNum} onChange={handleChange} />
        <label htmlFor="childGuardianPhoneNum"> מספר טלפון האפוטרופוס </label>
        <br />
        <input id="ChildMail"  type="text" name='mail' value={child.mail} onChange={handleChange} />
        <label htmlFor="ChildMail"> מיייל:
        </label>
        <br />
        <button style={{ background: 'red', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() =>
            updateChild}>Update Child</button><br />
        </div>
    )
}
