/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import {Link} from "react-router-dom"
import axios from "axios"

const Account = ({user, checkout, setCheckout}) => {

    const removeCheckedBook = async (checkedId) => {

    try {
        await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/checkout`, {
          headers:{
            "Authorization": `${window.localStorage.getItem('token')}`
          }
    })
    setCheckout(checkout.filter((checked) => checked.checked_id !== checkedId))
    console.log (checkout)
  } catch (error) {
          console.error(error)
    }
      }

  return (

<div>
      <h1>{user.firstname}'s Profile</h1>
    <div>
    <hr/>
      <h2>Checked Out Books:</h2>
    </div>
      {
          checkout.length > 0 ? (
            <div className="booksContainer">
      {
          checkout.map((book) => {
            return (
                    <div key= {book.id} className="book">
                    <Link to={`/books/${book.id}`}>
                    <h3>{book.title}</h3>
                    </Link>
                    <p>{book.author}</p>
                    <p>{book.description}</p>
                    <img src={book.coverimage} alt={book.title}/>
                    <div>
                    <button onClick={() => removeCheckedBook(book.checked_id)}>Return Book</button>
                    </div>
                </div>

            )
      })
    }
      </div>
  ) : (
      <h3>No books checked out</h3>
      )
    }
  <hr/>
        <Link to= '/books'>Back to Library</Link>
</div>
  )

}

export default Account 
