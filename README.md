# Frontend-only Quotation Print POC

ตัวอย่างนี้เป็น POC แบบไม่พึ่ง backend สำหรับเดโมการ:
- Preview เอกสาร Quotation
- เปิด/ปิด Stamp, Signature, Watermark
- สั่งพิมพ์เฉพาะเอกสารใน iframe (`contentWindow.print()`)

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
   - ปรับค่าด้านขวา
   - กด **Reload Preview**
   - กด **Print HTML** เพื่อสั่งพิมพ์จาก iframe

## ทางเลือก: เปิดไฟล์ตรง
สามารถเปิดไฟล์ `document-print-ui/index.html` ตรง ๆ ได้เช่นกัน แต่แนะนำให้รันผ่าน http server เพื่อเลี่ยงข้อจำกัดบาง browser

## ไฟล์สำคัญ
- `document-print-ui/index.html` : หน้าเดโมทั้งหมด (UI + template + print logic)

## หมายเหตุ
- โปรเจกต์นี้จงใจทำให้รันได้ทันทีใน environment ที่ติดข้อจำกัด npm/dotnet
- ถ้าต้องการเวอร์ชัน React + ASP.NET Core เต็มรูปแบบ สามารถต่อยอดจากโครงนี้ได้
