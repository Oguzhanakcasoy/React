import axios from 'axios';

const url ='https://books-f3e27-default-rtdb.firebaseio.com/';

export async function getBooks() {
    const response = await axios.get(url + '/books.json');
   // console.log("response.data" + response.data)
    const books = [];
    
  
    for (const key in response.data) {
      const bookObj = {
        id: key,
        author: response.data[key].author,
        description: response.data[key].description,
        bookname: response.data[key].bookname,
        picture: response.data[key].picture,

      };
      books.push(bookObj);
    }
    return books;
  }