import axios from 'axios'

const API_URL = 'http://localhost:7272/blapp'

class LibraryService {

    retrieveAllLibraries() {
        return axios.get(API_URL+'/libraries');
    }

    seeAllBooks(id) {
        return axios.get(API_URL+'/books/lib/'+id);
    }
}

export default new LibraryService()

