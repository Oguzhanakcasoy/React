import React from 'react'
import { useContext, useEffect, useState } from "react";
import { BookContext } from '../context/Context';
import { getBooks } from '../functions/http/http';


export default function BookList() {
    const context = useContext(BookContext)
    useEffect(() => {
        async function getAllBooks() {
            const books = await getBooks() // apiden aldığı books
            context.setBook(books)
            // console.log(books)
        async function getRlist() {
           return   books.map(b=> {
                return (
                  <tr>
                    <td>{b.bookname}</td>
                    <td>{b.description}</td>
                    <td>{b.author}</td>
                    <td><img src="{b.picture}" height="50" />  </td>
                  </tr>
                )
            })
        }
        }
        
        getAllBooks()
        
    }, [])
    return (
        <table className='table'>
            <thead>
                <tr>
                   <th>Book Name</th> 
                   <th>Description</th>
                   <th>Author</th>
                   <th>Picture</th>
                </tr>
            </thead>
            <tbody>
               
            </tbody>
        </table>
    )
}
