/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useParams, useNavigate } from "react-router-dom"


const SingleBook = ({books}) =>{
  const params= useParams()
  const id= params.id*1 

  const navigate = useNavigate()
  const book =books.find((book) =>{
      return book.id === id
  })
  console.log(book)

  return (
    <div>
        {
          book ?(
        
        <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <img src={book.coverimage} alt={book.title}/>
        </div>
        ) : (
          <h3>Loading...</h3>
        )
    }
    <button onClick={() => {navigate ('/books')}}>Return to Full Library</button>
    </div>
 )
}
export default SingleBook