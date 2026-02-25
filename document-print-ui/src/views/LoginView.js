export default {
  props: {
    login: { type: Object, required: true }
  },
  emits: ['login'],
  template: `
    <section class="card login-wrap">
      <h1>Welcome Back</h1>
      <div class="small">เข้าสู่ระบบแบบ demo: กรอกอะไรก็ได้ แล้วกด Login</div>
      <div class="login-grid">
        <div>
          <label class="label">Username</label>
          <input class="input" v-model="login.username" placeholder="any username" />
        </div>
        <div>
          <label class="label">Password</label>
          <input class="input" type="password" v-model="login.password" placeholder="any password" />
        </div>
        <button class="btn btn-primary" @click="$emit('login')">Login</button>
      </div>
    </section>
  `
};
