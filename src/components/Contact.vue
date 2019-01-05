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
					<input type="text" name="" class="input" placeholder="Your Name">
				 </div>
				 </div>
                 <div class="col-sm-6">
				  <div class="inputBox">
					<input type="text" name="" class="input" placeholder="Name of your company">
				  </div>
				  </div>
				</div>
				 <div class="row">
				  <div class="col-sm-6">
				   <div class="inputBox">
					<input type="text" name="" class="input" placeholder="Email address">
				   </div>
				 </div>
				  <div class="col-sm-6">
				   <div class="inputBox">
					 <input type="text" name="" class="input" placeholder="Phone number">
				  </div>
				  </div>
				 </div>
				  <div class="row">
					<div class="col-sm-12">
					  <input type="submit" name="" class="button">
					</div>
					</div>
				</form>
			</div>
		</div>
 </section> 
</template>

<script>

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
}
@media (min-width: 320px) and (max-width: 480px){
	.heading h1{
		font-size: 70px;
    margin-top: 40px;
	}
	.inputBox{
		margin-bottom: 30px;
	}
	.inputBox .input{
		height: 30px;
		font-size: 16px;
	}
	.button{
		height: 40px;
	}

}

</style>


