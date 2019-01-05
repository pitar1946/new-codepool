<template>
  <nav id="nav" class="navbar test navbar-expand-md bg-primary navbar-dark fixed-top">
        <a class="navbar-brand" href="#"><img class="navbar-logo-circle" src='../assets/cp-logo.png'/></a>
        <a class="navbar-brand" href="#"><img class="navbar-logo" src='../assets/codepool.png'/></a>
        <button id="nav-btn"  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDiv" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarDiv">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#" v-scroll-to="'#header'"  data-toggle="collapse" data-target=".navbar-collapse.show">home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" v-scroll-to="'#about'"  data-toggle="collapse" data-target=".navbar-collapse.show">about</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="collapse" data-target=".navbar-collapse.show">work</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="collapse" data-target=".navbar-collapse.show">mission</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="collapse" data-target=".navbar-collapse.show">blog</a>
                </li>  
                 <li class="nav-item">
                    <a class="nav-link" href="#" v-scroll-to="'#contact'"  data-toggle="collapse" data-target=".navbar-collapse.show">contact</a>
                </li>  
            </ul>
        </div>
</nav>  
</template>

<script>
export default {
    methods: {
    showLogo: function(){
      document.addEventListener('scroll', function(){
      let logo = document.querySelector('.navbar-logo-circle');
      let yPosition = window.pageYOffset;
         if( yPosition > 700 ){
           logo.style.display = 'block'
          } 
         else{
           logo.style.display = 'none'   
          } 
        })
       },
     addClassActive: function() {
        document.addEventListener('click', function () {
	      if (!event.target.classList.contains('nav-link')) return;
	          event.target.classList.add('active');
	          let links = document.querySelectorAll('.nav-link');
           	for (let i = 0; i < links.length; i++) {
		        if (links[i] === event.target) continue;
	          links[i].classList.remove('active');
	         }
         }, false);
       }   
    },
    created () {
      this.showLogo();
      this.addClassActive();
    }
}
</script>
<style scoped>
 #nav{
   width: 100%;
   background-color: #000000 !important;
 }
 .nav-link {
   text-transform: uppercase !important;
   color: #FFFFFF !important;
   text-align: center;
   background-color: #000000 !important;
   margin-bottom: -6px;
 }

 .navbar-logo-circle{
     width: 30px !important;
     display: none;
 }
 .navbar-logo{
     width: 150px;
     display: block;
 }
 .navbar-toggler{
    cursor: pointer;
    outline: none;
}
@media only screen and (min-width: 900px) {
  #nav {
     height: 50px !important;
     
  }
  .active{
     border-bottom: 3px solid #8060CC !important;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .navbar-logo{
        display: none;
      }
}
</style>