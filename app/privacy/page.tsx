import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | QuitCode',
  robots: { index: false, follow: false },
};

const policyStyles = `
  [data-custom-class='body'], [data-custom-class='body'] * { background: transparent !important; }
  [data-custom-class='title'], [data-custom-class='title'] * { font-family: Arial !important; font-size: 26px !important; color: #000000 !important; }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * { font-family: Arial !important; color: #595959 !important; font-size: 14px !important; }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * { font-family: Arial !important; font-size: 19px !important; color: #000000 !important; }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * { font-family: Arial !important; font-size: 17px !important; color: #000000 !important; }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * { color: #595959 !important; font-size: 14px !important; font-family: Arial !important; }
  [data-custom-class='link'], [data-custom-class='link'] * { color: #3030F1 !important; font-size: 14px !important; font-family: Arial !important; word-break: break-word !important; }
  ul { list-style-type: square; }
  ul > li > ul { list-style-type: circle; }
  ul > li > ul > li > ul { list-style-type: square; }
  ol li { font-family: Arial; }
  table { border-collapse: collapse; width: 100%; }
  td, th { padding: 8px; }
`;

const policyHtml = `
<div data-custom-class="body">
<div><strong><span style="font-size: 26px;"><span data-custom-class="title"><h1>PRIVACY POLICY</h1></span></span></strong></div>
<div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated March 18, 2026</span></span></strong></span></div>
<div><br></div><div><br></div><div><br></div>
<div style="line-height: 1.5;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This Privacy Notice for <strong>QuitCode</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</span></span></div>
<ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">Visit our website at <a target="_blank" data-custom-class="link" href="https://www.quitcode.com">https://www.quitcode.com</a> or any website of ours that links to this Privacy Notice</span></li></ul>
<ul><li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">Engage with us in other related ways, including any marketing or events</span></li></ul>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a target="_blank" data-custom-class="link" href="mailto:sales@quitcode.com">sales@quitcode.com</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a data-custom-class="link" href="#toc">table of contents</a> below to find the section you are looking for.</em></strong></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a data-custom-class="link" href="#personalinfo">personal information you disclose to us</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. Learn more about <a data-custom-class="link" href="#infouse">how we process your information</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure. Learn more about <a data-custom-class="link" href="#infosafe">how we keep your information safe</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a data-custom-class="link" href="#privacyrights">your privacy rights</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a <a data-custom-class="link" href="https://app.termly.io/dsar/5d0b784a-c905-4ecc-b42d-0e13920c1859" rel="noopener noreferrer" target="_blank">data subject access request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? <a data-custom-class="link" href="#toc">Review the Privacy Notice in full</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><br></div>

<div id="toc" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#legalbases">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#cookies">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#inforetain">6. HOW LONG DO WE KEEP YOUR INFORMATION?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infosafe">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infominors">8. DO WE COLLECT INFORMATION FROM MINORS?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#DNT">10. CONTROLS FOR DO-NOT-TRACK FEATURES</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#uslaws">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#policyupdates">12. DO WE MAKE UPDATES TO THIS NOTICE?</a></span></div>
<div style="line-height: 1.5;"><a data-custom-class="link" href="#contact"><span style="font-size: 15px;">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
<div style="line-height: 1.5;"><a data-custom-class="link" href="#request">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></div>
<div style="line-height: 1.5;"><br></div><div style="line-height: 1.5;"><br></div>

<div id="infocollect" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong>
<span data-custom-class="heading_2" id="personalinfo"><span style="font-size: 15px;"><strong><h3>Personal information you disclose to us</h3></strong></span></span>
<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We collect personal information that you provide to us.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">names</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">email addresses</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">job titles</span></li>
</ul>
<div id="sensitiveinfo" style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Sensitive Information.</strong> We do not process sensitive information.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></div>

<span data-custom-class="heading_2" style="color: rgb(0, 0, 0);"><span style="font-size: 15px;"><strong><h3>Information automatically collected</h3></strong></span></span>
<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></span></span>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Like many businesses, we also collect information through cookies and similar technologies.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">The information we collect includes:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device.</span></li>
</ul>

<div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="heading_2"><h3>Google API</h3></span></strong><span data-custom-class="body_text">Our use of information received from Google APIs will adhere to <a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer" target="_blank">Google API Services User Data Policy</a>, including the <a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" rel="noopener noreferrer" target="_blank">Limited Use requirements</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="infouse" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes only with your prior explicit consent.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To deliver targeted advertising to you.</strong> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</span></li>
</ul>
<div style="line-height: 1.5;"><br></div>

<div id="legalbases" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2></span></strong>
<em><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</span></span></em></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><em><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><u>If you are located in the EU or UK, this section applies to you.</u></strong></span></span></em></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Consent.</strong> We may process your information if you have given us permission to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <a data-custom-class="link" href="#withdrawconsent">withdrawing your consent</a>.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</span></li>
</ul>
<div style="line-height: 1.5;"><br></div>

<div id="whoshare" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may share information in specific situations described in this section and/or with the following third parties.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We may need to share your personal information in the following situations:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></li>
</ul>
<div style="line-height: 1.5;"><br></div>

<div id="cookies" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may use cookies and other tracking technologies to collect and store your information.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><strong><span data-custom-class="heading_2"><h3>Google Analytics</h3></span></strong><span style="font-size: 15px;"><span data-custom-class="body_text">We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a data-custom-class="link" href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">https://tools.google.com/dlpage/gaoptout</a>. For more information on the privacy practices of Google, please visit the <a data-custom-class="link" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy &amp; Terms page</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="inforetain" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="infosafe" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We aim to protect your personal information through a system of organizational and technical security measures.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="infominors" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>8. DO WE COLLECT INFORMATION FROM MINORS?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a target="_blank" data-custom-class="link" href="mailto:sales@quitcode.com">sales@quitcode.com</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="privacyrights" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>9. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <a data-custom-class="link" href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will consider and act upon any request in accordance with applicable data protection laws.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank">Member State data protection authority</a> or <a data-custom-class="link" href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" rel="noopener noreferrer" target="_blank">UK data protection authority</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div id="withdrawconsent" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <a data-custom-class="link" href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If you have questions or comments about your privacy rights, you may email us at <a target="_blank" data-custom-class="link" href="mailto:sales@quitcode.com">sales@quitcode.com</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="DNT" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="uslaws" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to know</strong> whether or not we are processing your personal data</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to access</strong> your personal data</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to correct</strong> inaccuracies in your personal data</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to request</strong> the deletion of your personal data</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to non-discrimination</strong> for exercising your rights</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects</span></li>
</ul>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><strong><span data-custom-class="heading_2"><h3>How to Exercise Your Rights</h3></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">To exercise these rights, you can contact us by submitting a <a data-custom-class="link" href="https://app.termly.io/dsar/5d0b784a-c905-4ecc-b42d-0e13920c1859" rel="noopener noreferrer" target="_blank">data subject access request</a>, by emailing us at <a target="_blank" data-custom-class="link" href="mailto:sales@quitcode.com">sales@quitcode.com</a>, or by referring to the contact details at the bottom of this document.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><strong><span data-custom-class="heading_2"><h3>Request Verification</h3></span></strong>
<span style="font-size: 15px;"><span data-custom-class="body_text">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><strong><span data-custom-class="heading_2"><h3>Appeals</h3></span></strong>
<span style="font-size: 15px;"><span data-custom-class="body_text">Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a target="_blank" data-custom-class="link" href="mailto:sales@quitcode.com">sales@quitcode.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="policyupdates" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>12. DO WE MAKE UPDATES TO THIS NOTICE?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="contact" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have questions or comments about this notice, you may email us at <a target="_blank" data-custom-class="link" href="mailto:sales@quitcode.com">sales@quitcode.com</a> or contact us by post at:</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">QuitCode<br>Sakharova 35<br>Lviv, Lviv 79000<br>Ukraine</span></span></div>
<div style="line-height: 1.5;"><br></div>

<div id="request" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <a data-custom-class="link" href="https://app.termly.io/dsar/5d0b784a-c905-4ecc-b42d-0e13920c1859" rel="noopener noreferrer" target="_blank">data subject access request</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div><span data-custom-class='body_text'>This Privacy Policy was created using Termly's <a href="https://termly.io/products/privacy-policy-generator/" target="_blank" rel="noopener" data-custom-class='link'>Privacy Policy Generator</a>.</span></div>
</div>
`;

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <style dangerouslySetInnerHTML={{ __html: policyStyles }} />
        <div dangerouslySetInnerHTML={{ __html: policyHtml }} />
      </div>
    </div>
  );
}
