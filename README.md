# Frontend-only Quotation Print POC

ตัวอย่างนี้เป็น POC แบบไม่พึ่ง backend สำหรับเดโมการ:
- Preview เอกสาร Quotation
- เปิด/ปิด Stamp, Signature, Watermark
- สั่งพิมพ์เฉพาะเอกสารใน iframe (`contentWindow.print()`)

## วิธีใช้งาน
1. เปิดไฟล์ `document-print-ui/index.html` ด้วย browser
2. ปรับค่าทางขวา แล้วกด **Reload Preview**
3. กด **Print HTML** เพื่อพิมพ์เอกสาร

## ไฟล์สำคัญ
- `document-print-ui/index.html` : หน้าเดโมทั้งหมด (UI + template + print logic)

## หมายเหตุ
- โปรเจกต์นี้จงใจทำให้รันได้ทันทีใน environment ที่ติดข้อจำกัด npm/dotnet
- ถ้าต้องการเวอร์ชัน React + ASP.NET Core เต็มรูปแบบ สามารถต่อยอดจากโครงนี้ได้
