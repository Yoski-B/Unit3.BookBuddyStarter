import { useEffect, useState } from "react"
import Books from "./components/Books"
import axios from "axios"
import {Routes, Route} from 'react-router-dom'
import SingleBook from "./components/SingleBook"
import Login from "./components/Login"
import Register from "./components/Register"


function App() {
  const [books, setBooks] = useState ([])
  const [user, setUser] = useState ({})

  const authenticate = async() => {

  try {
    const data = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate"),
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
              "Authorization":`Bearer ${token}`
            }
          })
            console.log

        } catch (error) {
          console.error(error)
        }

      }

  },[])

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
  /*useEffect(() => {
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
      <h1>A Random Library of Random Books</h1>
      <div>
        <Login />
      </div>
     

      <Routes>
        <Route path="/" element={<Books books={books}/>}/> 
        <Route path="/books" element={<Books books={books}/>}/>
        <Route path="/books/:id" element={<SingleBook books={books}/>}/>
        <Route path="/books/register" element={<Register/>}/>
        <Route path="/books/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}


export default App
