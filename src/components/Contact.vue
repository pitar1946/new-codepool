<template>
 <section id="contact" class="container">
    <div class="heading">
      <h1>Contact Us</h1>     
   </div> 
   	<div class="container">
		<div class="formBox">
			<form>
			  <div class="row">
				<div class="col-sm-6">
				  <div class="inputBox ">
					<input type="text" name="" class="input" placeholder="Your Name" v-model="client.firstName">
				 </div>
				 </div>
                 <div class="col-sm-6">
				  <div class="inputBox">
					<input type="text" name="" class="input" placeholder="Name of your company" v-model="client.lastName">
				  </div>
				  </div>
				</div>
				 <div class="row">
				  <div class="col-sm-6">
				   <div class="inputBox">
					<input type="text" name="" class="input" aria-describedby="emailHelp" placeholder="Email address" v-model="client.email">
				   </div>
				 </div>
				  <div class="col-sm-6">
				   <div class="inputBox">
					 <input type="text" name="" class="input" placeholder="Phone number" v-model="client.phone">
				  </div>
				  </div>
				 </div>
				  <div class="row">
					<div class="col-sm-12">
					  <input type="submit" name="" class="button"  @click.prevent='submitForm'>
					</div>
					</div>
				</form>
			</div>
		</div>
 </section> 
</template>

<script>
import axios from 'axios';

export default {
    data(){
      return{
       client: {
         firstName: '',
         lastName: '',
         email: '',
         phone: ''
       },
        postResults: []
      }
    },
     methods: {
      submitForm: function(){
        let { firstName, lastName, email, phone } = this.client;
        let newClient = {
              firstName,
              lastName,
              email,
              phone
          }
        if( firstName !== '' && lastName !== '' && email !== '' && phone !== ''){
          axios.post('https://jsonplaceholder.typicode.com/posts', newClient)
           .then( res => {
             this.postResults = res.data;
             console.log(this.postResults)
            })
           .catch(err => {
             console.log(err)
           })
              this.client.firstName = '',
              this.client.lastName = '',
              this.client.email = '',
              this.client.phone = ''
          }
       } 
     }
}
</script>

<style scoped>
#contact{
    width: 100%;
    height: 500px;
}
.heading{
   text-align: center;
   margin-bottom: 30px;
}
.heading h1{
  display: inline-block;
  font-size: 100px;
  font-weight: bold;
  color: #000000;
  margin-top: 50px;
}

.inputBox{
	position: relative;
	box-sizing: border-box;
	margin-bottom: 50px;
}

.inputBox .input{
	position: relative;
	width: 100%;
	height: 50px;
	background: transparent;
	border: none;
  outline: none;
  font-size: 24px;
  border-bottom: 1px solid rgba(0,0,0,.5);

}

.button{
	width: 100%;
  height: 50px;
  border: none;
  outline: none;
  background: #A488E5;
  color: #fff;
	cursor: pointer;
	position: relative;
	box-sizing: border-box;
	transition: all 500ms ease; 

}

@media (min-width: 320px) and (max-width: 480px){
	#contact{
		  padding-top: 35px;
	}
	.heading h1{
		font-size: 70px;
    margin-top: 40px;
	}
	.inputBox{
		margin-bottom: 20px;
	}
	.inputBox .input{
		height: 30px;
		font-size: 16px;
	}
	.button{
		height: 40px;
	}

}
@media (min-width: 481px) and (max-width: 580px) {

}

@media (min-width: 481px) and (max-width: 767px) {
	.heading h1{
		margin-top: 30px;
		font-size: 72px;
	}
	.inputBox{
		margin-bottom: 30px;
	}
	.inputBox .input{
		height: 30px;
		font-size: 20px;
	}
	#contact{
		height: 450px;
	}
}

</style>


