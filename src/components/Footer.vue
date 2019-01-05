<template>
    <footer id="footer" class="footer-wrapper">
     <div class="footer">
          <div class="col col1">
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">work</a></li>
              <li><a href="#">mission</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </div>
          <div class="col col2">
            <div class="footer-logo-wrapper">
                <a @click="scrollToTop"><app-logo></app-logo></a>  
            </div>
          </div>
          <div class="col col3">
            <div class="footer_icons">
              <ul>
                <li><a href="https://www.facebook.com/codepoolio/" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="fa"/></a></li>
                <li><a href="https://www.instagram.com/codepoolio/" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" class="fa"/></a></li>
                <li><a href="https://twitter.com/codepoolio" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fa"/></a></li>
                <li><a href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" class="fa"/></a></li>
              </ul>
            </div>
            <ul>
              <li>CODEPOOL Sarajevo, z.o.d. </li>
              <li>Džemal Bijedić & Sanjin Čabaravdić</li>
              <li>Čobanija 17, 71000 Sarajevo</li>
              <br />
              <li>+387 61  722 590</li>
              <li>info@codepool.io</li>
            </ul>
          </div>
        </div>
      </footer>  
</template>
<script>
import Logo from './Logo'
export default {
  components: {
   'app-logo': Logo
 },
  data(){
   return {
    intervalId: 0,
    delayInMs: '25',
    backScroll: '50'
    }
  },
  methods: {
       scrollStep: function(){
        let yPosition = window.pageYOffset;
        if (yPosition === 0) {
         clearInterval(this.intervalId);
        } 
        window.scroll(0, yPosition - this.backScroll);
       },
       scrollToTop: function(){
         let intervalId = setInterval(this.scrollStep, this.delayInMs);
         this.intervalId = intervalId;
    }
 }
}
</script>
<style scoped>
.footer-wrapper {
  width: 100%;
  background-color: #000000;
  border-top: 7px solid #8B80F9;
  padding: 10px;
}

.footer {
  width: 100%;
  overflow: hidden;
}

.col {
  width: 31%;
  height: auto;
  min-height: 100px;
  float: left;
  padding: 15px;
  margin: 0 0 0 20px;
}

.footer ul {
  list-style: outside none none;
  margin-top: 30px;
  padding: 0;
}
.footer .col1 ul li {
  border-top: 1px solid #878587;
  color: #f1f2f2;
  padding: 5px 0;
  text-transform: uppercase;
}
.footer .col1 ul li:first-child {
  border-top: medium none;
  box-shadow: none;
}
.footer .col1 a {
  color: #FFFFFF;
}
.footer .col1 a:hover {
  color: #8B80F9;
  text-decoration: none;
}
.footer .col2 .footer-logo-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
}
.footer .col2 .footer-logo-wrapper a {
  outline: none;
  cursor: pointer;
}
.footer .col2 .footer-logo {
  width: 145px;
  height: 100px;
  margin-left: 10%;
  margin-top: 25%;
  cursor: pointer;
  transition: transform 0.2s;
}

.footer .col3 ul li {
  color: #FFFFFF;
  font-size: 15px;
}
.footer .col3 ul li a {
  color: #FFFFFF;
}

.footer_icons {
  margin: 0;
  padding: 0;
}
.footer_icons ul {
  margin-top: 30px;
  padding: 0;
  border-bottom: 1px solid #878587;
}
.footer_icons li {
  display: inline-block;
  margin-right: 20px;
  color: #FFFFFF;
  margin-bottom: 10px;
  cursor: pointer;
}
.footer_icons .fa {
  font-size: 24px;
}
.footer_icons .fa:hover {
  color: #8B80F9;
}

@media only screen and (max-width: 880px) {
  .footer {
    margin: 0;
  }

  .col1, .col2, .col3 {
    width: 100%;
    margin: 0px;
  }

  .footer .col2 .footer-logo {
    margin-top: 0%;
  }
}
@media only screen and (max-width: 480px) {
  .col {
    float: none;
    width: 100%;
  }

  .footer .col2 .footer-logo {
    margin-top: 4%;
  }
}
</style>

