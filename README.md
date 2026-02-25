# Frontend-only Quotation Report POC (Vue.js)

POC นี้เป็นเว็บหน้าเดียวแบบไม่ใช้ backend เพื่อเดโม flow งานเอกสาร:
1. Login (กรอกอะไรก็ได้)
2. Main Menu → เข้าเมนู Report
3. หน้า Input ข้อมูล/แก้ไขข้อมูล
4. Preview Report + Print + Save to PDF + Download HTML

## จุดเด่น
- เขียนด้วย Vue.js 3 (CDN) ไม่ต้อง npm build
- มี flow การใช้งานเหมือนแอปจริง (Login → Menu → Report Builder)
- Preview แบบ realtime เมื่อแก้ข้อมูลหรือเปลี่ยนตัวเลือก
- Template โทน clean/mac-style

## วิธีรัน
```bash
python3 -m http.server 4173
```

เปิด:
```text
http://localhost:4173/document-print-ui/index.html
```

## วิธีใช้งานสั้น ๆ
- หน้า Login: กด Login ได้เลย (ข้อมูลใด ๆ)
- หน้า Main Menu: กดการ์ด **Report**
- หน้า Report Builder:
  - แก้ข้อมูลหัวเอกสาร/ลูกค้า/ผู้ออกเอกสาร/รายการสินค้า
  - เปิด/ปิด Stamp, Signature และเลือก Watermark
  - กด Print HTML หรือ Save to PDF (ผ่าน browser print dialog)

## ไฟล์สำคัญ
- `document-print-ui/index.html` : Vue app + report template + preview/print/pdf logic
