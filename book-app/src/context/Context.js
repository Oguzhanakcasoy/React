import { createContext, useReducer } from "react";
export const BookContext = createContext(
{
    bookList: [],
  
});
//                    State  metot ismi , parametre
function bookReducer(State,action) {
    switch (action.type) {
        case "SET":
            const inverted = action.payload.reverse();
            return inverted; 
        default:
         return State
    }
}
function BookProvider({children}) {
    const [booksState, dispatch] = useReducer(bookReducer, [])
function setBook(books) {
        dispatch({ type: 'SET', payload: books });
      } 
      const value = {
        books: booksState,
        setBook: setBook,
        // addTransaction: addTransaction,
        // deleteTransaction: deleteTransaction,
        // updateTransaction: updateTransaction,
      };
      return (
        <BookContext.Provider value={value}>
          {children}
        </BookContext.Provider>
      );
       
}
export default BookProvider