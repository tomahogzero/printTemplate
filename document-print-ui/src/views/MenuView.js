export default {
  emits: ['open-report', 'logout'],
  template: `
    <section>
      <div class="toolbar">
        <h2 style="margin:0">Main Menu</h2>
        <button class="btn btn-light" @click="$emit('logout')">Logout</button>
      </div>
      <div class="menu-grid">
        <article class="card menu-item" @click="$emit('open-report')">
          <div class="small">Menu</div>
          <h3>Report</h3>
          <div class="small">เข้าไปแก้ไขข้อมูลก่อน แล้วค่อย Preview / Print / Save PDF</div>
        </article>
        <article class="card menu-item">
          <div class="small">Menu</div>
          <h3>Dashboard</h3>
          <div class="small">Placeholder</div>
        </article>
        <article class="card menu-item">
          <div class="small">Menu</div>
          <h3>Settings</h3>
          <div class="small">Placeholder</div>
        </article>
      </div>
    </section>
  `
};
