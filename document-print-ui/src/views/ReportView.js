export default {
  props: {
    form: { type: Object, required: true },
    showStamp: { type: Boolean, required: true },
    showSignature: { type: Boolean, required: true },
    watermark: { type: String, required: true },
    previewHtml: { type: String, required: true }
  },
  emits: [
    'update:showStamp',
    'update:showSignature',
    'update:watermark',
    'reload-preview',
    'print-html',
    'save-pdf',
    'download-html',
    'add-item',
    'remove-item',
    'back-menu',
    'logout'
  ],
  template: `
    <section>
      <div class="toolbar">
        <div>
          <h2 style="margin:0">Report Builder (Vue Design)</h2>
          <div class="small">แก้ไขข้อมูลก่อน แล้ว preview realtime</div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-ghost" @click="$emit('back-menu')">← Back Menu</button>
          <button class="btn btn-light" @click="$emit('logout')">Logout</button>
        </div>
      </div>

      <div class="report-layout">
        <aside class="card panel settings-panel">
          <h3>Input ข้อมูลรายงาน</h3>
          <div class="field">
            <label class="label">Quotation No</label>
            <input class="input" v-model="form.quotationNo" />
          </div>
          <div class="grid-2">
            <div class="field">
              <label class="label">Issue Date</label>
              <input class="input" v-model="form.issueDate" />
            </div>
            <div class="field">
              <label class="label">Valid Until</label>
              <input class="input" v-model="form.validUntil" />
            </div>
          </div>

          <div class="field">
            <label class="label">Customer</label>
            <input class="input" v-model="form.customerName" />
          </div>
          <div class="field">
            <label class="label">Customer Address</label>
            <textarea class="input" rows="2" v-model="form.customerAddress"></textarea>
          </div>
          <div class="field">
            <label class="label">Issuer</label>
            <input class="input" v-model="form.issuerName" />
          </div>
          <div class="field">
            <label class="label">Issuer Address</label>
            <textarea class="input" rows="2" v-model="form.issuerAddress"></textarea>
          </div>

          <h3 style="margin-top:16px">Display Options</h3>
          <div class="field"><label><input type="checkbox" :checked="showStamp" @change="$emit('update:showStamp', $event.target.checked)" /> Show Stamp</label></div>
          <div class="field"><label><input type="checkbox" :checked="showSignature" @change="$emit('update:showSignature', $event.target.checked)" /> Show Signature</label></div>
          <div class="field">
            <label class="label">Watermark</label>
            <select class="select" :value="watermark" @change="$emit('update:watermark', $event.target.value)">
              <option value="none">none</option>
              <option value="ORIGINAL">ORIGINAL</option>
              <option value="COPY">COPY</option>
            </select>
          </div>

          <h3 style="margin-top:16px">Items</h3>
          <div v-for="(item, idx) in form.items" :key="idx" class="item-row">
            <div class="field">
              <label class="label">Description</label>
              <textarea class="input" rows="2" v-model="item.description"></textarea>
            </div>
            <div class="grid-2">
              <div class="field">
                <label class="label">Qty</label>
                <input class="input" type="number" step="0.01" v-model.number="item.qty" />
              </div>
              <div class="field">
                <label class="label">Unit Price</label>
                <input class="input" type="number" step="0.01" v-model.number="item.unitPrice" />
              </div>
            </div>
            <button class="btn btn-light" style="width:100%" @click="$emit('remove-item', idx)" :disabled="form.items.length===1">Remove Item</button>
          </div>
          <button class="btn btn-ghost" style="width:100%" @click="$emit('add-item')">+ Add Item</button>
        </aside>

        <section class="card panel">
          <div class="preview-actions">
            <button class="btn btn-light" @click="$emit('reload-preview')">Reload Preview</button>
            <button class="btn btn-primary" @click="$emit('print-html')">Print HTML</button>
            <button class="btn btn-secondary" @click="$emit('save-pdf')">Save to PDF</button>
            <button class="btn btn-secondary" @click="$emit('download-html')">Download HTML</button>
          </div>
          <iframe ref="previewFrame" :srcdoc="previewHtml" title="quotation-preview"></iframe>
        </section>
      </div>
    </section>
  `
};
