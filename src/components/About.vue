<template>
<section id="about" class="about">
 <div class="container">
   <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="heading">
       <h1>We are creating websites, mobile apps, and custom software.</h1>   
      </div> 
       <div class="content">
        <p>Our team of developers provides both, elegant server-side and front end solutions in order to assure your business a perfect presentation on all screens and devices.</p>
        <p>Our team is capable of developing both fully native iOS and Android apps, or use a cross platform framework like React Native to get same outstanding results.</p>
      </div>
      <div class="details">
        <h3>web development</h3>
        <p>Our team of developers provides both elegant server-side and front end solutions in order to assure your business a perfect presentation on all screens and devices. </p>
        <h3>app development</h3>
        <p>Our team is capable of developing both fully native iOS and Android apps, or use a cross platform framework like ReactNative to get same outstanding results.</p>
        <h3>languages & communication</h3>
        <p>We use well-known development methodologies and project management frameworks with open communication, having a team that is fluent in English and German.</p>
      </div>
      <div class="technologies">
       <h4>front end</h4>
        <p>HTML | CSS | React.js | Vue.js | Javascript E6 | Sass</p>
        <h4>server side</h4>
        <p>Node.js | PHP | Ruby on Rails | Java | C# | Swift | React Native</p>
      </div>
    </div>
   </div>
 </div>
</section>
</template>

<script>

</script>

<style scoped>
.about{
  height: 1024px;
  width: 100%;
  background: linear-gradient(180deg, #8060CC 30%, #000000 75%);
}
.heading{
  height: 199px;
  width: 100%;
  color: #FFFFFF;
  margin-top: 80px;
  margin-bottom: 20px;
}
.heading h1{
 font-size: 86px;
 font-weight: bold;
 line-height: 90px;
}

.content{
 height: 116px;
 color: #FFFFFF;
 margin-bottom: 50px;
}
.content p{
 font-size: 24px;
 line-height: 32px;  
 margin: 0 auto; 
}

.details h3{
  text-transform: uppercase;
  color: #A488E5;
}

 h4{
  text-transform: uppercase;
  color: #A488E5;
  font-size: 20px;
}
.details p{
  height: 34px;
  width: 515px;
  color: #FFFFFF;	
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.2px;
  margin-bottom: 20px;
}
span{
  margin-bottom: 10px;
}
@media (min-width: 320px) and (max-width: 480px) {
 .about{
   padding-top: 45px;
 }
  .heading{
    margin-top: 20px;
  }
  .heading h1{
   font-size: 47px;
    line-height: 51px;
    text-align: center;
    margin-bottom: 30px;
  }
  .content{
    margin-top: 40px;
  }
  .content p{
    font-size: 18px;
    line-height: 23px;
    margin: 0 auto;
    padding: 0px 17px;
  }
  .details{
    height: 320px;
    margin-top: 110px;
    margin-bottom: 44px;
  }
  .details h3{
    font-size: 20px;
    padding: 0px 14px;
  }
  .details p{
    width: auto;
    font-size: 14px;
    margin-bottom: 55px;
    padding: 0px 15px;
  }
  .technologies h4{
    padding: 0px 14px;
  }
  .technologies p{
    padding: 0px 14px;
    font-size: 12px;
  }

}
@media (min-width: 481px) and (max-width: 767px) {
  .heading{
    margin-top: 50px;
  }
  .heading h1{
    font-size: 56px;
    line-height: 62px;
    padding: 0px 20px;
  }
  .content{
    height: 200px;
    padding: 0px 20px;
  }
  .details{
    padding: 0px 20px;
  }
  .details p{
    width: 450px;
  }
  .technologies{
    padding: 0px 20px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .heading{
    margin-top: 50px;
    height: 300px;

  }
}
@media (min-width: 1025px) and (max-width: 1280px) {
  .heading{
    height: 300px;
  }
}

</style>