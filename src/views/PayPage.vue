<template>
  <div class="pay-page">
    <h1>การจ่ายเงินผ่าน QR Code</h1>

    <!-- หากผู้ใช้ไม่ได้ล็อกอิน จะมีข้อความแสดงขึ้น -->
    <div v-if="!isLoggedIn">
      <p style="color: red; font-weight: bold;">กรุณาล็อกอินเพื่อทำการชำระเงิน</p>
      <button @click="goLogin">ไปยังหน้าล็อกอิน</button>
    </div>

    <!-- ส่วนที่จะแสดงหากผู้ใช้ล็อกอินแล้ว -->
    <div v-else>
      <div class="qr-container">
        <p>กรุณาสแกน QR Code เพื่อทำการจ่ายเงิน</p>
        <!-- QR Code Image -->
        <img src="@/assets/qr-code.jpg" alt="QR Code" class="qr-code-img" />
      </div>

      <div class="instructions">
        <p>ขั้นตอนการสแกน QR Code:</p>
        <ul>
          <li>1. เปิดแอปพลิเคชันธนาคารหรือวอลเล็ตที่รองรับการชำระเงิน</li>
          <li>2. เลือกเมนู "ชำระเงินผ่าน QR Code"</li>
          <li>3. สแกน QR Code ที่แสดงในหน้านี้</li>
          <li>4. ใส่จำนวนเงินที่ต้องการ</li>
          <li>5. กดโอนแล้วรอยอดเงินอัพเดตใน 1-5 นาที</li>
        </ul>
      </div>
      
      <!-- ปุ่มกลับไปหน้าหลัก -->
      <button @click="goHome">กลับสู่หน้าหลัก</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayPage',
  data() {
    return {
      isLoggedIn: false,  // ตัวแปรเช็คสถานะการล็อกอิน
    };
  },
  mounted() {
    this.checkLoginStatus();  // เช็คสถานะการล็อกอินเมื่อคอมโพเนนต์โหลด
  },
  methods: {
    // ฟังก์ชันตรวจสอบว่า user ได้เข้าสู่ระบบหรือไม่
    checkLoginStatus() {
      const token = localStorage.getItem('token');
      if (token) {
        this.isLoggedIn = true;  // ถ้ามี token แสดงว่าเข้าสู่ระบบแล้ว
      } else {
        this.isLoggedIn = false;  // ถ้าไม่มี token แสดงว่ายังไม่ได้เข้าสู่ระบบ
        this.goLogin();  // ถ้ายังไม่ได้ล็อกอินให้เด้งไปหน้า login
      }
    },
    // ฟังก์ชันไปยังหน้าล็อกอิน
    goLogin() {
      this.$router.push('/buy');  // ไปยังหน้าล็อกอิน
    },
    // ฟังก์ชันกลับไปหน้าหลัก
    goHome() {
      this.$router.push('/buy');  // เปลี่ยนเส้นทางไปยังหน้า Home
    }
  }
};
</script>

<style scoped>
.pay-page {
  text-align: center;
  padding: 20px;
}

.qr-container {
  margin-top: 20px;
}

.qr-code-img {
  width: 300px;
  height: 370px;
  margin-top: 20px;
}

.instructions {
  margin-top: 20px;
  text-align: left;
  display: inline-block;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
