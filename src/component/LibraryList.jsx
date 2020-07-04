import React, { Component } from 'react';
import Library from './Library';
import LibraryService from '../service/LibraryService';

class LibraryList extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            libraries: [],
            books:[],
            message: null
        }
        this.allLibraries = this.allLibraries.bind(this)
        this.seeAllBooksClicked = this.seeAllBooksClicked.bind(this)
    }

    componentDidMount() {
        this.allLibraries();
    }

    allLibraries() {
        LibraryService.retrieveAllLibraries()
            .then(
                response => {
                    console.log(response);
                    this.setState({ libraries: response.data });
                }
            )
    }

    seeAllBooksClicked(id) {
        LibraryService.seeAllBooks(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ books: response.data });
                }
            )
    
    }
    
    render() {
		
		return (
            <div className="container" align="center">
                <h3>All libraries</h3>
                <div className="container">
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>Library Id</th>
                                <th>Library Name</th>
                                <th>Library Type</th>
                                <th>Librarian</th>
                                <th>Books</th>
                            </tr>
                            {
                                this.state.libraries.map(
                                    library =>
                                    <tr>
                                        <td>{library.libId}</td>
                                        <td>{library.libName}</td>
                                        <td>{library.libType}</td>
                                        <td>{library.librarian}</td>
                                        <td><button onClick={() => this.seeAllBooksClicked(library.libId)}>See Books</button></td>
                                    </tr>
                                        
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <br/>
                <div className="container">
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>ISBN</th>
                                <th>Book Title</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                <th>Type</th>
                            </tr>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr>
                                        <td>{book.isbn}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.type}</td>
                                    </tr>
                                        
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
		)
	}
}
export default LibraryList