import { useEffect, useState } from "react"
import Books from "./components/Books"
import axios from "axios"
import {Routes, Route, useLocation} from 'react-router-dom'
import SingleBook from "./components/SingleBook"
import Login from "./components/Login"
import Register from "./components/Register"
import Welcome from "./components/Welcome"
import Navigations from "./components/Navigations"
import Account from "./components/Account"

function App() {
  const [books, setBooks] = useState ([])
  const [user, setUser] = useState ({})
  const location = useLocation()
  console.log (location)
  
  const authenticate = async() => {

  try {
      const {response} = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {

        headers: {
          "Authorization": `Bearer ${window.localStorage.getItem("token")}`
        } 
      })
      console.log(response)
      setUser(response)
        } catch (error) {
          console.error(error)
        }

  }

  

  useEffect(() => {
    async function fetchBooks() {
      try {
        const {data} = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
      console.log(data)
      setBooks(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBooks()
  }, [])

  useEffect(() => {
    const loggedInToken = window.localStorage.getItem("token")
     if(loggedInToken){
      authenticate (loggedInToken)
     }
  },[user.id])
  /*
    const fetchBooks = async () => {
      try {
      const data = axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
    fetchBooks()
   }, [])*/

  return (
    <div>
      <Navigations />
      <h1>A Random Library of Random Books</h1>
      {
        location.pathname === "/login" ? (
          null
        ) : (
          <div>
            {
      user.id ? 
      <Welcome user = {user} setUser = {setUser}/> :
      <div>
        <h2>Please log in</h2>
        <Login authenticate={authenticate}/>
      </div>
          }
          <hr/>
     </div>
        )
    }
    


    
     

      <Routes>
        <Route path="/" element={<Books books={books}/>}/> 
        <Route path="/books" element={<Books books={books}/>}/>
        <Route path="/books/:id" element={<SingleBook books={books}/>}/>
        <Route path="/books/register" element={<Register authenticate={authenticate}/>}/>
        <Route path="/books/login" element={<Login authenticate={authenticate}/>}/>
        <Route path="/books/account" element={<Account user={user}/>}/>
      </Routes>
    </div>
  )
}


export default App
