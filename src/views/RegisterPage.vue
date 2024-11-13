<template>
  <div>
   
    <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" @submit.prevent="register" >
        <h1>Register</h1>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" v-model="name" placeholder="ชื่อ" required>
				</div>
        <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" 
        v-model="phone"
        placeholder="เบอร์โทร"
        required
        maxlength="10"
        @input="validatePhone"
      />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" v-model="password"  placeholder="รหัสผ่าน" required>
				</div>
        <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input  class="login__input" v-model="bankAccount" placeholder="พร้อมเพย์" required>
				</div>
				<button class="button login__submit" >
					<span class="button__text" >สมัครสมาชิก</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
        <span v-if="phoneError" style="color: red;">{{ phoneError }}</span>
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
			</form>
			
			
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

    
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      phone: "",
      password: "",
      bankAccount: "",
      errorMessage: "",
      phoneError: "", // สำหรับเก็บข้อความเตือนเบอร์โทร
    };
  },

  methods: {
    validatePhone() {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(this.phone)) {
        this.phoneError = "เบอร์โทรศัพท์ต้องมี 10 หลักเท่านั้น";
      } else {
        this.phoneError = ""; // ลบข้อความเตือนเมื่อเบอร์โทรถูกต้อง
      }
    },

    async register() {
      if (this.phoneError) {
        return; // หยุดการทำงานหากเบอร์โทรไม่ถูกต้อง
      }

      try {
        const response = await fetch("http://127.0.0.1:8080/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.name,
            phone: this.phone,
            password: this.password,
            bank_account: this.bankAccount,
          }),
        });

        if (response.status === 400) {
          const data = await response.json();
          this.errorMessage = data.message;
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        } else if (response.ok) {
          this.$router.push("/login");
        } else {
          throw new Error("Registration failed");
        }
      } catch (error) {
        console.error("Error:", error);
        this.errorMessage = "เกิดข้อผิดพลาดในการลงทะเบียน";
      }
    },
  },
};
</script>
<style>


* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;	
	font-family: Raleway, sans-serif;
}

body {
	background: linear-gradient(90deg, #ffffff, #ecbb76);		
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

.screen {		
	background: linear-gradient(90deg, #5D54A4, #7C78B8);		
	position: relative;	
	height: 600px;
	width: 360px;	
	box-shadow: 0px 0px 24px #5C5696;
}

.screen__content {
	z-index: 1;
	position: relative;	
	height: 100%;
}

.screen__background {		
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	-webkit-clip-path: inset(0 0 0 0);
	clip-path: inset(0 0 0 0);	
}

.screen__background__shape {
	transform: rotate(45deg);
	position: absolute;
}

.screen__background__shape1 {
	height: 520px;
	width: 520px;
	background: #FFF;	
	top: -50px;
	right: 120px;	
	border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
	height: 220px;
	width: 220px;
	background: #6C63AC;	
	top: -172px;
	right: 0;	
	border-radius: 32px;
}

.screen__background__shape3 {
	height: 540px;
	width: 190px;
	background: linear-gradient(270deg, #5D54A4, #6A679E);
	top: -24px;
	right: 0;	
	border-radius: 32px;
}

.screen__background__shape4 {
	height: 400px;
	width: 200px;
	background: #7E7BB9;	
	top: 420px;
	right: 50px;	
	border-radius: 60px;
}

.login {
	width: 320px;
	padding: 30px;
	padding-top: 156px;
}

.login__field {
	padding: 20px 0px;	
	position: relative;	
}

.login__icon {
	position: absolute;
	top: 30px;
	color: #7875B5;
}

.login__input {
	border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	padding: 10px;
	padding-left: 24px;
	font-weight: 700;
	width: 75%;
	transition: .2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
	outline: none;
	border-bottom-color: #6A679E;
}

.login__submit {
	background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 100%;
	color: #4C489D;
	box-shadow: 0px 2px 2px #5C5696;
	cursor: pointer;
	transition: .2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
	border-color: #6A679E;
	outline: none;
}

.button__icon {
	font-size: 24px;
	margin-left: auto;
	color: #7875B5;
}

.social-login {	
	position: absolute;
	height: 140px;
	width: 160px;
	text-align: center;
	bottom: 0px;
	right: 0px;
	color: #fff;
}

.social-icons {
	display: flex;
	align-items: center;
	justify-content: center;
}

.social-login__icon {
	padding: 20px 10px;
	color: #fff;
	text-decoration: none;	
	text-shadow: 0px 0px 8px #7875B5;
}

.social-login__icon:hover {
	transform: scale(1.5);	
}
</style>