# Vue.js Quotation Report POC (Monday-inspired design)

โปรเจกต์นี้เป็น **Vue.js code แบบแยกไฟล์** สำหรับพัฒนาต่อได้ทันที โดยโฟลว์หลักคือ:
1. Login (กรอกอะไรก็ได้)
2. Main Menu
3. เข้าเมนู Report
4. แก้ไขข้อมูลก่อน Preview / Print / Save PDF / Download HTML

## สิ่งที่ปรับรอบนี้
- ปรับ UI ฝั่งแอปให้เป็นโทนสีสดใสแบบ productivity board (Monday-inspired)
- ปรับ template เอกสารให้มี accent bar, colorful column header, cards และ total section ที่เด่นขึ้น
- คงความสามารถ realtime preview + print/export เหมือนเดิม

## โครงสร้างไฟล์ (Vue.js)
- `document-print-ui/index.html` : HTML shell + mount point
- `document-print-ui/src/main.js` : createApp entry
- `document-print-ui/src/App.js` : root app state + navigation + orchestration
- `document-print-ui/src/views/LoginView.js` : หน้า Login
- `document-print-ui/src/views/MenuView.js` : หน้า Main Menu
- `document-print-ui/src/views/ReportView.js` : หน้าแก้ไขข้อมูล + preview controls
- `document-print-ui/src/utils/reportTemplate.js` : template HTML สำหรับเอกสาร Quotation
- `document-print-ui/src/styles.css` : app styles (Monday-inspired)

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
- หากจะย้ายไป Vite ภายหลัง สามารถย้ายโค้ดชุด `src/` เดิมไปใช้ได้เลย
