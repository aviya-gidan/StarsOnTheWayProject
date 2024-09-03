import { useState, useEffect } from "react"
// import { getAllStoryApi, deleteStoryApi, addStoryApi, updateStoryApi } from "../Repository/Story"
import { Story } from "../type"
import { isNamespaceImport } from "typescript";

// export default function Api() {
//     const [stories, setStories] = useState<Story[]>([])
//     const [storyUserId, setStoryUserId] = useState(0);
//     const [storyUserName, setStoryUserName] = useState('');
//     const [storyOfChild, setStoryOfChild] = useState('');
//     const [storyUploadDate, setStoryUplaodDate] = useState(new Date());
//     const [storyResponses,setStoryResponses] = useState(new Response());

//     const getAllStory = async () => {
//         try {
//             const stories = await getAllStoryApi()
//             setStories(stories)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     };
//     const addStory = async () => {
//         try {
//             setStories([])
//             const story = {
//                 id: 0,
//                 userId: storyUserId,
//                 userName: storyUserName,
//                 storyOfChild:storyOfChild,
//                 uploadDate: new Date(),
//                 responses: storyResponses
//             }
//             await addStoryApi(story)
//             story.id = stories.length + 1
//             setStories([story, ...stories])
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     const updateStory = async (Id: number) => {
//         try {
//             const storyIndex = stories.findIndex(c => c.id === Id)
//             if (storyIndex !== -1) {
//                 const storyToUpdate = { ...stories[storyIndex] }
//                 if(storyUserId!==0)
//                 storyToUpdate.userId = storyUserId
//                 if(storyUserName!=="")
//                 storyToUpdate.userName = storyUserName
//                 if(storyOfChild!=="")
//                 storyToUpdate.storyOfChild = storyOfChild
//                 if(storyUploadDate.getTime()!==new Date().getTime())
//                 storyToUpdate.uploadDate = new Date(storyUploadDate)
//                 await updateStoryApi(storyToUpdate, storyToUpdate.id!)
//                 const newStory = [...stories]
//                 newStory[storyIndex] = storyToUpdate
//                 setStories(newStory)
//             }
//             else
//                 alert("NO EXIST ID!")
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     const deleteStory = async (id: number|undefined) => {
//         try {
//             await deleteStoryApi(id)
//             setStories(stories.filter(c => c.id !== id))
//         } catch (error) {
//             console.log(error)
//         }
//         getAllStory();
//     };
//     return(
//         <div>
//         <h1><strong>Story </strong></h1>
//         <button onClick={getAllStory}>Get All Stories</button>
//         {stories.map((s:Story) => {
//             console.log("STORY: ")
//             console.log(s.id)
//             return(
//             <div key={s.id}>
//                 <p><strong>ID:</strong>{s.id}</p>
//                 <p><strong>USER ID:</strong>{s.userId}</p>
//                 <p><strong>USER NAME:</strong>{s.userName}</p>
//                 <p><strong>STORY OF CHILD:</strong>{s.storyOfChild}</p>
//                 <p><strong>UPLOAD DATE:</strong>{new Date(s.uploadDate).toLocaleDateString()}</p>
//                 <button onClick={() => deleteStory(s.id)}>Delete</button> 
//             </div> 
                   
//         )})}
//                 <div style={{marginBottom:'20px'}} className="div2"></div>
//         <h2>ADD STORY</h2>
        
//         <input id="storyUserId" type="number" value={storyUserId} onChange={(e)=>setStoryUserId(Number(e.target.value))}/>
//         <label htmlFor="storyUserId">מזהה של הילד</label>
//         <br />
//         <input id="storyUserName" type="text" value={storyUserName} onChange={(e)=>setStoryUserName(e.target.value)}/>
//         <label htmlFor="storyUserName">שם הילד</label>
//         <br />
//         <input id="storyOfChild" type="text" value={storyOfChild} onChange={(e)=>setStoryOfChild(e.target.value)}/>
//         <label htmlFor="storyOfChild">הסיפור של הילד</label>
//         <button style={{ background: 'red', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() =>
//             addStory()}>Add Story</button><br />
//         <br />
//         </div>
//         )
            
// }