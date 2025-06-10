/* TODO - add your code to create a functional React component that renders a registration form */
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {

    const navigate = useNavigate()
    const addUser = async (formData) =>{
      try {
        const newUser = {
              firstname: formData.get("firstname"),
              lastname: formData.get("lastname"),
              email: formData.get("email"),
              password: formData.get("password")
        }
         const {data} = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", newUser)
         console.log(data)
         alert("Thanks! Your registration is complete.")
         navigate('/')
        } catch (error) {
        console.error(error)
      }
    }
    return(
      <div>
          <form action={addUser}>
              <label>First Name:
              <input name="firstname" type="text" required/>
              </label>
              <br/>
              <label>Last Name:
              <input name="lastname" type="text" required/>
              </label>
              <br/>
              <label>Email:
              <input name="email" type="text" required/>
              </label>
              <br/>
              <label>Password:
              <input name="password" type="text" required/>
              </label>
              <br/>
          <button type="submit">Submit</button>
          </form>
      </div>
    )

}

export default Register