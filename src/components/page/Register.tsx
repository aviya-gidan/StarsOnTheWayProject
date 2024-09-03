import { ChangeEvent, useState } from "react";
import { addChildService } from "../../services/child.service";
import { Child } from "../../conect/type";
import React from "react";

export default function LoginPage() {

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
        password: '0000'
    });

    const addChild = async () => {
        try {
             setChildren([])
            const childToAdd = {
                name: child.name,
                userName: child.userName,
                address: child.address,
                birthDate: child.birthDate,
                guardianName: child.guardianName,
                guardianPhoneNum: child.guardianPhoneNum,
                mail: child.mail,
                phoneNum: child.phoneNum,
                password: child.password  

            };
            // const newChild = await addChildService(child)
            // setChildren([newChild, ...children])
            // } catch (error) {
            //     console.log(error)
            // }
            const newChild = await addChildService(childToAdd);
            // setChildren([newChild, ...children]);
            setChild({
                name: '',
                userName: '',
                address: '',
                birthDate: new Date(),
                guardianName: '',
                guardianPhoneNum: '',
                mail: '',
                phoneNum: '',
                password: '0000'
            }); // ניקוי השדות לאחר הוספת הילד
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        let updatedValue: string | Date = value; 
        if (name === 'birthDate') {
            updatedValue = new Date(value);
        setChild({ ...child, [name]: updatedValue })
    }
    }
    return(
        <div>
            <h1><strong>Child </strong></h1>
            <div style={{ marginBottom: '20px' }} className="div2"></div>
            <h1>sign in</h1>
            <input id="childName: " type="text" name='name' value={child.name} onChange={handleChange} />
            <label htmlFor="childName">שם הילד:</label>
            <br />
            <input id="childUser: " type="text" name='userName' value={child.userName} onChange={handleChange} />
            <label htmlFor="childUser">שם משתמש:</label>
            <br />

            <input id="childAddress" type="text" name='address' value={child.address} onChange={handleChange} />
            <label htmlFor="childAddress"> כתובת :</label>
            <br />

            <input id="childBirthDate" type="date" value={child.birthDate.toISOString().split('T')[0]} onChange={handleChange} />
            <label htmlFor="childBirthDate">תאריך לידה</label>
            <br />
            <input id="childGuardianName" type="text" name='guardianName' value={child.guardianName} onChange={handleChange} />
            <label htmlFor="childGuardianName"> שם האפוטרופוס</label>
            <br />
            <input id="childGuardianPhoneNum" type="text" name='guardianPhoneNum' value={child.guardianPhoneNum} onChange={handleChange} />
            <label htmlFor="childGuardianPhoneNum"> מספר טלפון האפוטרופוס </label>
            <br />
            <input id="ChildMail" type="text" name='mail' value={child.mail} onChange={handleChange} />
            <label htmlFor="ChildMail"> מיייל:
            </label>
            <br />

            <button style={{ background: 'red', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() =>
                addChild()}>Add Child</button><br />

        </div>
    )
};

