<template>
   <div class="logo">
    <img src='../assets/cp-logo.png'/>
  </div>  
</template>

<script>

</script>

<style>
.logo{
  text-align: center;
}
.logo img{
  height: 128px;
  width: 128px;
  border-radius: 63.56px;
  background-color: #8060CC;
  margin-top: 100px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .logo img {
    	height: 64px;
      width: 64px;
      border-radius: 31px;
      background-color: #8060CC;
      margin-top: 75px;
      }
  
}
@media(min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .logo img{
    margin-top: 50px;
  }
}
</style>


