import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Books from '@/components/Books'
import AddBook from '@/components/AddBook'
import EditBook from '@/components/EditBook'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/addBook',
      name: 'AddBook',
      component: AddBook
    },
    {
      path: '/editBook',
      name: 'EditBook',
      component: EditBook,
      props: true
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
