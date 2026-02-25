# Vue.js Quotation Report POC (Vue Design style)

โปรเจกต์นี้เป็น **Vue.js code แบบแยกไฟล์** (ไม่ใช่ logic กองใน `index.html` แล้ว) เพื่อให้คุณนำไปพัฒนาต่อบน Vue ได้ง่าย
โดยเป็น flow:
1. Login (กรอกอะไรก็ได้)
2. Main Menu
3. เข้าเมนู Report
4. แก้ไขข้อมูลก่อน Preview / Print / Save PDF / Download HTML

## โครงสร้างไฟล์ (Vue.js)
- `document-print-ui/index.html` : HTML shell + mount point
- `document-print-ui/src/main.js` : createApp entry
- `document-print-ui/src/App.js` : root app state + navigation + orchestration
- `document-print-ui/src/views/LoginView.js` : หน้า Login
- `document-print-ui/src/views/MenuView.js` : หน้า Main Menu
- `document-print-ui/src/views/ReportView.js` : หน้าแก้ไขข้อมูล + preview controls
- `document-print-ui/src/utils/reportTemplate.js` : template HTML สำหรับเอกสาร Quotation
- `document-print-ui/src/styles.css` : Vue design-style / mac-like UI styles

## วิธีรัน
```bash
python3 -m http.server 4173
```

เปิด:
```text
http://localhost:4173/document-print-ui/index.html
```

## หมายเหตุ
- ใช้ Vue 3 ESM จาก CDN (`vue.esm-browser.prod.js`) เพื่อให้รันได้โดยไม่ต้อง build
- ถ้าจะย้ายไป Vite ภายหลัง สามารถย้ายโค้ดชุด `src/` เดิมไปใช้ได้เลย
