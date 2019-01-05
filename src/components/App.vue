<template>
  <div>
     <app-navbar></app-navbar>
     <app-header></app-header>
     <app-about></app-about>
     <app-contact></app-contact>
     <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

export default {
  components: {
  'app-navbar' : Navbar,
  'app-header': Header,
  'app-about' : About,
  'app-work' : Work,
  'app-contact' : Contact,
  'app-footer' : Footer
 }
}
</script>

<style>

</style>