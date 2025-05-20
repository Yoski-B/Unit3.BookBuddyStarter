/* TODO - add your code to create a functional React component that renders a login form */
import axios from "axios"

const Login= () => {

      const signin = async (formData) => {
        const email = formData.get("email")
        const password = formData.get("email")
        const user= {
            email,
            password
        }
          try {
             const {data} =await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books", user)
             console.log(data)
             window.localStorage.setItem("token", data.token)
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
        <h3>Don't have an account?</h3>
    </div>
  )

}

export default Login