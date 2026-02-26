import LoginView from './views/LoginView.js';
import MenuView from './views/MenuView.js';
import ReportView from './views/ReportView.js';
import { makeQuotationHtml } from './utils/reportTemplate.js';

export default {
  components: { LoginView, MenuView, ReportView },
  data() {
    return {
      view: 'login',
      login: { username: '', password: '' },
      showStamp: true,
      showSignature: true,
      watermark: 'ORIGINAL',
      previewHtml: '',
      form: {
        quotationNo: 'QO-69001',
        issueDate: '12/01/2026',
        validUntil: '19/01/2026',
        customerName: 'Big Star Co., Ltd.',
        customerAddress: '99/1 Sukhumvit 21 Rd., Khlong Toei Nuea, Watthana, Bangkok 10110',
        issuerName: 'EaseTrack Co., Ltd.',
        issuerAddress: '88 Rama IX Rd., Huai Khwang, Bangkok 10310',
        signerName: 'Napat Kittipong',
        signerTitle: 'Sales Director',
        items: [
          { description: 'SaaS Subscription - Pro Plan (12 months)', qty: 1, unitPrice: 45000 },
          { description: 'Implementation & onboarding package including workshop, process mapping and advanced report setup with long text for wrap behavior in table layout.', qty: 1, unitPrice: 28500 },
          { description: 'Priority support (business hours)', qty: 12, unitPrice: 1200 }
        ]
      }
    };
  },
  watch: {
    showStamp: 'reloadPreview',
    showSignature: 'reloadPreview',
    watermark: 'reloadPreview',
    form: {
      deep: true,
      handler: 'reloadPreview'
    }
  },
  methods: {
    doLogin() {
      this.view = 'menu';
    },
    logout() {
      this.view = 'login';
      this.login = { username: '', password: '' };
    },
    goReport() {
      this.view = 'report';
      this.reloadPreview();
    },
    addItem() {
      this.form.items.push({ description: 'New service item', qty: 1, unitPrice: 0 });
    },
    removeItem(index) {
      if (this.form.items.length > 1) {
        this.form.items.splice(index, 1);
      }
    },
    reloadPreview() {
      if (this.view !== 'report') return;
      this.previewHtml = makeQuotationHtml({
        form: this.form,
        watermark: this.watermark,
        showSignature: this.showSignature,
        showStamp: this.showStamp
      });
    },
    getPreviewFrame() {
      const reportComponent = this.$refs.reportView;
      return reportComponent?.$refs?.previewFrame;
    },
    printHtml() {
      const frame = this.getPreviewFrame();
      if (frame?.contentWindow) {
        frame.contentWindow.focus();
        frame.contentWindow.print();
      }
    },
    saveToPdf() {
      this.printHtml();
    },
    downloadHtml() {
      const blob = new Blob([this.previewHtml], { type: 'text/html;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Quotation-${this.form.quotationNo || 'preview'}.html`;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  },
  template: `
    <div class="window">
      <header class="window-bar">
        <div class="dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="title">Vue Design Report Workspace</div>
        <div class="small">Frontend-only Vue.js POC</div>
      </header>

      <main class="page">
        <LoginView
          v-if="view === 'login'"
          :login="login"
          @login="doLogin"
        />

        <MenuView
          v-else-if="view === 'menu'"
          @open-report="goReport"
          @logout="logout"
        />

        <ReportView
          v-else
          ref="reportView"
          :form="form"
          :show-stamp="showStamp"
          :show-signature="showSignature"
          :watermark="watermark"
          :preview-html="previewHtml"
          @update:showStamp="showStamp = $event"
          @update:showSignature="showSignature = $event"
          @update:watermark="watermark = $event"
          @reload-preview="reloadPreview"
          @print-html="printHtml"
          @save-pdf="saveToPdf"
          @download-html="downloadHtml"
          @add-item="addItem"
          @remove-item="removeItem"
          @back-menu="view = 'menu'"
          @logout="logout"
        />
      </main>
    </div>
  `
};
