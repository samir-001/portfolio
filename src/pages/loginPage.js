import { Form,Formik } from "formik"
import CustomInput from "../components/Utilities/customInput"
import logInSchema from "../schema/logInValidationSchema"
import api from '../api'
import loginThunk from '../thunk/loginThunk'
import { useDispatch ,useSelector } from 'react-redux'
const LoginPage = ()=>{
    const {isloading} = useSelector((state)=>{
        return state.Auth
    })
    const dispatch = useDispatch()
    const login = (values,action)=>{
        console.log(isloading)
    return dispatch(loginThunk(values))
    }
    const logOut = ()=>{
       return  api.logOut()
       
    }
    return(
        <Formik
        initialValues={{
            userName:'',
            password:''
        }}
        validationSchema={logInSchema}
        onSubmit={login}
        >
            {(props)=>(
                <Form>
                    <CustomInput
                    label="User name"
                    type="text"
                    name ="userName"
                    /> 
                    <CustomInput
                    label="Password"
                    type="password"
                    name='password'
                    /> 
                    <input type="submit" value="submit" />
                    <input type="button" value="logout" onClick={logOut} />
                   
                </Form>
            )}
        </Formik>
    )

}

export default LoginPage