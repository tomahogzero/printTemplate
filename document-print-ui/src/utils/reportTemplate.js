export const toMoney = (value) =>
  Number(value || 0).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

export function makeQuotationHtml({ form, watermark, showSignature, showStamp }) {
  const subtotal = form.items.reduce((sum, item) => sum + Number(item.qty) * Number(item.unitPrice), 0);
  const vat = subtotal * 0.07;
  const total = subtotal + vat;

  const rows = form.items
    .map(
      (item, idx) => `
      <tr>
        <td class="c">${idx + 1}</td>
        <td>${item.description}</td>
        <td class="r">${Number(item.qty).toFixed(2)}</td>
        <td class="r">${toMoney(item.unitPrice)}</td>
        <td class="r">${toMoney(Number(item.qty) * Number(item.unitPrice))}</td>
      </tr>`
    )
    .join('');

  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Quotation ${form.quotationNo}</title>
  <style>
    @page { size: A4; margin: 8mm; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #eef2f7; color: #0f172a; }
    .page { width: 194mm; min-height: 281mm; margin: 8mm auto; padding: 8mm; background: #fff; border: 1px solid #dde5ef; border-radius: 8px; position: relative; overflow: hidden; }
    .watermark { position: absolute; top: 46%; left: 50%; transform: translate(-50%, -50%) rotate(-28deg); font-size: 58px; letter-spacing: 6px; font-weight: 700; color: rgba(100,116,139,.14); }
    .header { display: flex; justify-content: space-between; align-items: start; border-bottom: 1px solid #d5dde8; padding-bottom: 6mm; }
    .header h1 { margin: 0; font-size: 30px; }
    .header h2 { margin: 2px 0 0; font-size: 13px; color: #64748b; font-weight: 500; }
    .meta { font-size: 12px; line-height: 1.7; text-align: right; }
    .grid { margin-top: 6mm; display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
    .card { border: 1px solid #dce3ed; border-radius: 7px; padding: 3mm; font-size: 12px; line-height: 1.45; }
    table { width: 100%; border-collapse: collapse; margin-top: 6mm; table-layout: fixed; }
    thead { display: table-header-group; }
    tr { page-break-inside: avoid; }
    th, td { border: 1px solid #dce3ed; padding: 8px; font-size: 12px; vertical-align: top; word-break: break-word; }
    th { background: #f8fafd; color: #334155; }
    .r { text-align: right; } .c { text-align: center; }
    .totals { margin-top: 4mm; margin-left: auto; width: 72mm; }
    .totals td { border: 1px solid #dce3ed; padding: 8px; }
    .totals .grand td { font-weight: 700; background: #f4f7fb; }
    .signature { width: 70mm; margin-left: auto; text-align: center; margin-top: 12mm; font-size: 12px; }
    .line { border-bottom: 1px solid #94a3b8; margin: 11mm 0 2mm; }
    .stamp { position: absolute; right: 10mm; bottom: 10mm; width: 30mm; height: 30mm; border: 2px solid #ef4444; border-radius: 50%; color: #ef4444; display: flex; align-items: center; justify-content: center; font-weight: 700; transform: rotate(-14deg); opacity: .86; }
    @media print { body { background: #fff; } .page { margin: 0; border: none; border-radius: 0; } }
  </style>
</head>
<body>
  <article class="page">
    ${watermark !== 'none' ? `<div class="watermark">${watermark}</div>` : ''}
    <section class="header">
      <div><h1>Quotation</h1><h2>ใบเสนอราคา</h2></div>
      <div class="meta">
        <div>Quotation No: ${form.quotationNo}</div>
        <div>Issue Date: ${form.issueDate}</div>
        <div>Valid Until: ${form.validUntil}</div>
      </div>
    </section>

    <section class="grid">
      <div class="card"><b>Customer</b><br>${form.customerName}<br>${form.customerAddress}</div>
      <div class="card"><b>Issued By</b><br>${form.issuerName}<br>${form.issuerAddress}<br>Tax ID: 0105566001234</div>
    </section>

    <table>
      <thead>
        <tr><th style="width:8%" class="c">No</th><th>Description</th><th style="width:14%" class="r">Qty</th><th style="width:18%" class="r">Unit Price</th><th style="width:18%" class="r">Amount</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <table class="totals">
      <tr><td>Subtotal</td><td class="r">${toMoney(subtotal)}</td></tr>
      <tr><td>VAT 7%</td><td class="r">${toMoney(vat)}</td></tr>
      <tr class="grand"><td>Grand Total (THB)</td><td class="r">${toMoney(total)}</td></tr>
    </table>

    ${showSignature ? `<section class="signature"><div>Authorized Signature</div><div class="line"></div><div><b>${form.signerName}</b></div><div>${form.signerTitle}</div></section>` : ''}
    ${showStamp ? '<div class="stamp">STAMP</div>' : ''}
  </article>
</body>
</html>`;
}
