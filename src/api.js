import axios from  "axios"

const axiosInstance = axios.create({
    baseURL:"http://localhost:4000",
    headers:{
        Authariztion: localStorage.getItem("token")
    }
})


export default class API{
    static fetchWrapper(method,url,data){
        let refreshromise
         let expired
         if(expired){
            refreshromise = API.refreshtoken()
         }else{
            refreshromise = Promise.resolve(null)
         }
         return refreshromise
         .then((res)=>{
            if(!res){
                return
            }
            const data = res.data
            const header = {
                Authariztion: data.token,
                "cache-control":"nc-cache,no-store,must-revalidate"
            }
            API.updateHeaders(header)
         })
         .then(()=>{
            switch(method){
                case "get":
                    return axiosInstance.get(url)
                case "post":
                    return axiosInstance.post(url,data)
                case "patch":
                    return axiosInstance.patch(url,data)
                case "put":
                    return axiosInstance.put(url,{data})
                case "delete":
                    return axiosInstance.delete(url,{data})
                default:
                return new Error("server Erorr")
            }
         })

    }

    static refreshtoken(){
        return axiosInstance.post("/refreshToken")
    }
    static updateHeaders(header){
        const axiosHeaders = axiosInstance.defaults.headers || {} 

        return axiosInstance.defaults.headers = {...axiosHeaders,...header}
    }

    static logIn(data){
         return API.fetchWrapper("post","./logIn",data)
    }
    static otp(data){
      return  API.logIn(data).then((res)=>{
       localStorage.setItem("token",res.data.token)

        })
   
    }
    static logOut(){
        localStorage.setItem("token",null)
    }

}