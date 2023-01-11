import * as yup from 'yup'

 const logInSchema = yup.object().shape({
    userName: yup.string("please enter valaid name").required("user Name is required"),
    password:yup.string().required("password field is required")
})

export default logInSchema