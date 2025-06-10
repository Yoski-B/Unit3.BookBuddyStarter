/* TODO - add your code to create a functional React component that renders a login form */
import axios from "axios"
import {Link} from "react-router-dom"

const Login= ({authenticate}) => { 

      const signin = async (formData) => {
        console.log(authenticate)
        const email = formData.get("email")
        const password = formData.get("password")
        const user= {
            email,
            password
        }
          try {
             const {data} =await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", user)
             console.log(data)
             window.localStorage.setItem("token", data.token)
             authenticate()
            } catch (error) {
            console.error(error)
          }
         
      }
     
  return(
    <div>
        <form action= {signin}>
              <label>Email:
              <input name="email" type="text" required/>
              </label>
              <br/>
              <label>Password:
              <input name="password" type="text" required/>
              </label>
              <button>Login</button>
        </form>
        <h3>Don't have an account? <Link to='/books/register'>Register Here!</Link></h3>
    </div>
  )

}

export default Login