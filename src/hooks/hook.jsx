import { useState } from "react"
import axios from "axios"

const useAxios = () => {
  const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:1337/api" : "https://doers-centa-strapi.herokuapp.com/api"
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  /*
  Execute Req
  */
  const executeReq = async (body, path) => {

    setIsPending(true)

    try {
      console.log(JSON.stringify(body))
      const res = await axios.post(`${BASE_URL}/${path}`, body)
      console.log(JSON.stringify(res))
      // const { jwt, payload } = res.data
      return res
    }
    catch (err) {
      console.log(err)
      setError(err)
    } finally { setIsPending(false) }
  }
  /*
  Execute Req
  */

  return { executeReq }
}
export default useAxios