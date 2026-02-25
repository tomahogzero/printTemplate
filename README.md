# Frontend-only Quotation Print POC (Vue.js)

ตัวอย่างนี้เป็น POC แบบไม่พึ่ง backend สำหรับเดโมการ:
- Preview เอกสาร Quotation
- เปิด/ปิด Stamp, Signature, Watermark
- สั่งพิมพ์เฉพาะเอกสารใน iframe (`contentWindow.print()`)
- Save to PDF ผ่าน browser print dialog

## Tech Stack
- Vue.js 3 (CDN) — ไม่ต้อง npm build

## วิธีรันหน้าเว็บจริง (แนะนำ)
> ไม่ต้องใช้ npm/dotnet

1. เปิด Terminal ที่โฟลเดอร์โปรเจกต์
2. รัน static web server:

```bash
python3 -m http.server 4173
```

3. เปิด Browser ไปที่:

```text
http://localhost:4173/document-print-ui/index.html
```

4. กดใช้งานจากหน้าเว็บได้ทันที
   - ปรับค่าด้านขวา (Preview จะ reload realtime อัตโนมัติ)
   - หรือกด **Reload Preview** เองได้
   - กด **Print HTML** เพื่อสั่งพิมพ์จาก iframe
   - กด **Save to PDF** แล้วเลือกปลายทางใน print dialog ของ browser

## ไฟล์สำคัญ
- `document-print-ui/index.html` : หน้าเดโมทั้งหมด (Vue app + template + print logic)

## หมายเหตุ
- ถ้าต้องการเวอร์ชัน React + ASP.NET Core เต็มรูปแบบ สามารถต่อยอดจากโครงนี้ได้
