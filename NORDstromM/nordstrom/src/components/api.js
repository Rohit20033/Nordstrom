import axios from "axios"

export function Myapi(){
    return axios("http://localhost:3000/email")
}


// function PostData(prevData={}){

//     return axios.post("http://localhost:3000/email",{

//      user_email: prevData.user_email,
//      first_name:prevData.first_name,
//      last_name:prevData.last_name,
//      user_password:prevData.user_password
//     })
// }
// export default PostData