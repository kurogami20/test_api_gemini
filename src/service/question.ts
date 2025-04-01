
import { axiosInstance as axios } from "../utils/axios";
import "dotenv/config"

async function searchQuestion(question:string){
    const response = await axios.post("",{
        question
    })
    return response
}
export default searchQuestion