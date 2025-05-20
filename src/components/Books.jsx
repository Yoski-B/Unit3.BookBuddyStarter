/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import "./books.css"
import {Link} from "react-router-dom"

const Books = ({books}) => {

    return (
        <div>
            <h2>Check out books from the Library! <Link to='/books/register'>Register Here!</Link></h2>
            <div className="booksContainer">
              {
                books.map((books) =>{
                  return(
                    <div key={books.id} className="book">
                      <Link to={`/books/${books.id}`}></Link>
                        <h3>{books.title}</h3>
                        <p>{books.author}</p>
                        <p>{books.description}</p>
                        <img src={books.coverimage} alt={books.title}/>
                    </div>
                  )

                })             
              }
            </div>
        </div>
    )
}

export default Books