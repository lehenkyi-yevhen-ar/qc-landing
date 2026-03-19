import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | QuitCode',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.quitcode.com/terms' },
};

const policyStyles = `
  [data-custom-class='body'], [data-custom-class='body'] * { background: transparent !important; }
  [data-custom-class='title'], [data-custom-class='title'] * { font-family: Arial !important; font-size: 26px !important; color: #000000 !important; }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * { font-family: Arial !important; color: #595959 !important; font-size: 14px !important; }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * { font-family: Arial !important; font-size: 19px !important; color: #000000 !important; }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * { color: #595959 !important; font-size: 14px !important; font-family: Arial !important; }
  [data-custom-class='link'], [data-custom-class='link'] * { color: #3030F1 !important; font-size: 14px !important; font-family: Arial !important; word-break: break-word !important; }
  ul { list-style-type: square; }
  ul > li > ul { list-style-type: circle; }
  ol li { font-family: Arial; }
`;

const termsHtml = `
<div data-custom-class="body">
<div><strong><span style="font-size: 26px;"><span data-custom-class="title"><h1>TERMS OF USE</h1></span></span></strong></div>
<div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Effective Date: 19 March 2026</span></span></strong></span></div>
<div><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Company:</strong> QuitCode | <a data-custom-class="link" href="mailto:sales@quitcode.com">sales@quitcode.com</a></span></span></div>
<div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>1. Introduction</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">These Terms of Use ("Terms") govern your access to and use of the QuitCode website and services. By accessing this website, you agree to be bound by these Terms.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you do not agree with any part of these Terms, please do not use the website.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>2. Use of the Website</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">You agree to use this website only for lawful purposes and in a way that does not:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">violate any applicable laws or regulations</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">infringe on the rights of others</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">interfere with the normal operation of the website</span></li>
</ul>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">You may not attempt to gain unauthorized access to any part of the website or its systems.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>3. Services Disclaimer</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">QuitCode provides no-code automation and operational consulting services.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">All content on this website is provided for informational purposes only and does not constitute professional advice or a binding offer.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">Project scope, timelines, and outcomes are defined separately in client agreements.</span></li>
</ul>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>4. No Guarantees</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">While we aim to improve operational efficiency, we do not guarantee:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">specific business outcomes</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">revenue growth</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">cost savings</span></li>
</ul>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Results depend on multiple factors including client implementation, internal processes, and external conditions.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>5. Intellectual Property</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All content on this website, including:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">text</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">visuals</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">case studies</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">branding</span></li>
</ul>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">is the property of QuitCode unless stated otherwise. You may not copy, reproduce, or distribute any content without prior written permission.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>6. Third-Party Tools and Links</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Our website may include links to third-party tools and services (e.g., Airtable, Make, forms, scheduling tools).</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We are not responsible for the content, privacy practices, or performance of these third-party services.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>7. Limitation of Liability</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">To the fullest extent permitted by law, QuitCode shall not be liable for:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">any indirect or consequential damages</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">loss of data, revenue, or business opportunities</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">any issues arising from the use or inability to use the website</span></li>
</ul>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>8. User Submissions</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you submit information through forms (e.g., contact forms, surveys):</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">you agree that the information is accurate</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">you grant us the right to use this information to respond to your request</span></li>
</ul>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Handling of personal data is governed by our <a data-custom-class="link" href="/privacy">Privacy Policy</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>9. Changes to These Terms</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>10. Governing Law</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">These Terms are governed by the laws of Ukraine.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>11. Contact</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have any questions regarding these Terms, please contact:</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Email:</strong> <a data-custom-class="link" href="mailto:sales@quitcode.com">sales@quitcode.com</a><br><strong>Company:</strong> QuitCode<br>Sakharova 35, Lviv 79000, Ukraine</span></span></div>
<div style="line-height: 1.5;"><br></div>
</div>
`;

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '10rem 1.5rem 5rem' }}>
        <style dangerouslySetInnerHTML={{ __html: policyStyles }} />
        <div dangerouslySetInnerHTML={{ __html: termsHtml }} />
      </div>
    </div>
  );
}
