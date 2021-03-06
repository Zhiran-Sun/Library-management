import Api from '@/services/api'

export default {
  fetchBooks () {
    return Api().get('/books')
  },
  postBook (book) {
    return Api().post('/books', book,
      { headers: {'Content-type': 'application/json'} })
  },
  changeStatus (id) {
    return Api().put(`/books/${id}/status`)
  },
  deleteBook (id) {
    return Api().delete(`/books/${id}`)
  },
  fetchBook (id) {
    return Api().get(`/books/${id}`)
  },
  putBook (id, book) {
    console.log('REQUESTING ' + id + ' ' +
      JSON.stringify(book, null, 5))
    return Api().put(`/books/${id}`, book,
      { headers: {'Content-type': 'application/json'} })
  },
  fetchUsers () {
    return Api().get('/myusers')
  },
  deleteUser (id) {
    return Api().delete(`/myusers/${id}`)
  }
}
