import React from 'react';
import StyledH3Heading from '../../common/components/styledH3Heading/StyledH3Heading';
import StyledH4Heading from '../../common/components/styledH4Heading/StyledH4Heading';
import StyledMdText from '../../common/components/styledMdText/StyledMdText';

const PrivacyPolicyPage = () => {
    return (
        <div className="max-w-site">
            <div className="flex flex-col gap-6 py-24 text-river-blue">
                <div className='flex flex-col items-center justify-center gap-4 px-4 lg:px-48'>
                    <StyledH3Heading fontColor="text-river-blue">Privacy Policy</StyledH3Heading>
                    <StyledMdText>
                        <span>
                            <a href='https://www.blockmedpro.com' className='underline text-button-light-blue underline-offset-2' rel='noopener noreferrer'>
                                www.blockmedpro.com
                            </a>
                        </span> (the "Site") is owned and operated by BlockMed Pro Global Ltd. BlockMed Pro Global Ltd is the data controller and can be contacted at:
                    </StyledMdText>
                    <StyledMdText>
                        <a href='mailto:info@blockmedpro.com' className='underline text-button-light-blue underline-offset-2' rel='noopener noreferrer'>
                            info@blockmedpro.com
                        </a>
                    </StyledMdText>
                    <StyledMdText>
                        16th Floor, Hub71, Al-Khatem Tower, ADGM, Abu Dhabi, UAE
                    </StyledMdText>
                </div>
                <div className='px-4 lg:px-44'>
                    <div className='flex flex-col items-start justify-center gap-8 px-6 py-6 border rounded-lg border-button-light-blue'>
                        {/* Purpose */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading fontColor="text-river-blue">1. Purpose</StyledH4Heading>
                            <StyledMdText fontColor="text-river-blue">
                                The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li>The personal data we will collect.</li>
                                <li>Use of collected data.</li>
                                <li>Who has access to the data collected.</li>
                                <li>The rights of Site users and</li>
                                <li>The Site's cookie policy.</li>
                            </ul>
                            <StyledMdText fontColor="text-river-blue">
                                This Privacy Policy applies in addition to the terms and conditions of our Site.
                            </StyledMdText>
                        </div>

                        {/* GDPR */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading fontColor="text-river-blue">2. GDPR</StyledH4Heading>
                            <StyledMdText>
                                For users in the European Union, we adhere to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, known as the General Data Protection Regulation (the "GDPR"). For users in the United Kingdom, we adhere to the GDPR as enshrined in the Data Protection Act 2018.
                            </StyledMdText>
                            <StyledMdText>
                                As BlockMed Pro Global Ltd is incorporated in the Abu Dhabi Global Market (ADGM), we also comply with ADGM’s Data Protection Regulations 2021, which provide a legal framework for processing personal data within the jurisdiction. These regulations ensure that all personal data handled by ADGM-incorporated entities is processed fairly, lawfully, and securely, with rights similar to those under the GDPR.
                            </StyledMdText>
                            <StyledMdText fontColor="text-river-blue">
                                This means that data subjects have the right to access, correct, and delete their data, among other protections, and BlockMed Pro is committed to ensuring that these rights are upheld in all relevant jurisdictions.
                            </StyledMdText>
                        </div>

                        {/* Consent */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>3. Consent</StyledH4Heading>
                            <StyledMdText>
                                By using our Site, users agree that they consent to:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li>The conditions set out in this Privacy Policy.</li>
                            </ul>
                            <StyledMdText>
                                When the legal basis for processing your personal data is your consent, you may withdraw this consent at any time. Withdrawing consent does not affect the lawfulness of any processing carried out before your consent was withdrawn
                            </StyledMdText>
                            <StyledMdText>
                                You can withdraw your consent by contacting the BlockMed Pro team.
                            </StyledMdText>
                        </div>

                        {/* Legal Basis for Processing */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                4. Legal Basis for Processing
                            </StyledH4Heading>
                            <StyledMdText>
                                We collect and process personal data about users only when we have a legal basis for doing so under Article 6 of the GDPR.
                            </StyledMdText>
                            <StyledMdText>
                                We rely on the following legal basis to collect and process the personal data of users:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li>Users have provided their consent to the processing of their data for one or more specific purposes.</li>
                            </ul>
                        </div>

                        {/* Personal Data We Collect */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                5. Personal Data We Collect
                            </StyledH4Heading>
                            <StyledMdText>
                                We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not collect
                                any additional data beyond the data listed below without notifying you first.
                            </StyledMdText>
                            <StyledMdText>
                                We may collect the following data when you perform certain functions on our Site:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li>First and last name.</li>
                                <li>Age.</li>
                                <li>Date and birth.</li>
                                <li>Sex.</li>
                                <li>Email Address.</li>
                                <li>Phone Number.</li>
                                <li>Address.</li>
                                <li>Payment information and.</li>
                                <li>Auto fill data.</li>
                            </ul>
                            <StyledMdText>
                                This data may be collected using the following methods:
                            </StyledMdText>
                            <StyledMdText className='!font-bold'>
                                - Creating an account
                            </StyledMdText>
                            <StyledMdText className='!font-bold'>
                                - Data Uploaded via Subject Access Requests (SAR)
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li><b>Medical Records Upload:</b> Users can provide their personal data by ­­­­(SAR) from their healthcare providers. This is a primary feature of the platform.
                                </li>
                            </ul>
                            <StyledMdText className='!font-bold'>
                                - Surveys, Feedback Forms, and Questionnaires
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li><b>User Input:</b> We could ask users to voluntarily provide data via surveys, questionnaires, or feedback forms related to their experience on the platform, health conditions, or preferences.
                                </li>
                            </ul>
                            <StyledMdText className='!font-bold'>
                                - Customer Support Interactions
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li><b>Support Requests:</b> Data may be collected when users contact customer support, including any information they voluntarily provide to resolve issues or queries.
                                </li>
                            </ul>
                            <StyledMdText className='!font-bold'>
                                - Email and Direct Communication
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li><b>Email Lists and Newsletters:</b> We may collect user data when users sign up for newsletters, marketing emails, or opt-in to receive communication without necessarily creating an account.
                                </li>
                                <li><b>In-App Communication:</b> If the platform includes messaging or notifications, you can track communication data within the app.
                                </li>
                            </ul>
                            <StyledMdText className='!font-bold'>
                                - Referral Programs and Affiliate Marketing
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li><b>Referral Program Participation:</b> Data may be collected if users refer others to the platform via unique links or codes, providing insights into how they engage with promotional campaigns.
                                </li>
                            </ul>
                            <StyledMdText className='!font-bold'>
                                - Payment Transactions
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li><b>Payment Details: </b>In addition to payment processing, transaction data such as billing address and payment method details can be collected when users engage in financial transactions on the platform.
                                </li>
                            </ul>
                            <StyledMdText className='!font-bold'>
                                - Third-Party Data Sharing
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li><b>External Data Providers: </b>IWith user consent, data could be collected from third-party sources, such as healthcare apps or wearable devices that users choose to integrate with BlockMed Pro.
                                </li>
                            </ul>
                        </div>

                        {/* How We Use Personal Data */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                6. How We Use Personal Data
                            </StyledH4Heading>
                            <StyledMdText>
                                Data collected on our Site will only be used for the purposes specified in this Privacy Policy or indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in this Privacy Policy.
                            </StyledMdText>
                            <StyledMdText>
                                The data we collect when the user performs certain functions may be used for the following purposes:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-1 list-disc text-river-blue text-md">
                                <li>Improving User Experience.</li>
                                <li>Compliance and Legal Obligations.</li>
                                <li>Analytics and Platform Optimisation.</li>
                                <li>Marketing and Communication.</li>
                                <li>Research and Development.</li>
                                <li>Third-Party Services and Partnerships.</li>
                                <li>Compliance with User Requests and.</li>
                                <li>Security and Risk Management.</li>
                            </ul>
                        </div>

                        {/* Who We Share Personal Data With */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                7. Who We Share Personal Data With
                            </StyledH4Heading>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <StyledMdText><b>Employees</b></StyledMdText>
                                    <StyledMdText>
                                        We may disclose user data to any member of our organisation who reasonably needs access to user data to achieve the purposes set out in this Privacy Policy.
                                    </StyledMdText>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <StyledMdText><b>Third Parties</b></StyledMdText>
                                    <StyledMdText>
                                        BlockMed Pro may share the following types of anonymised, pseudonymised and aggregated data with third-party pharmaceutical companies or research organisations. It’s important to clarify that any identifiable information (such as name, contact details, or other personal identifiers) is removed, ensuring the data cannot be traced back to individual users.
                                    </StyledMdText>
                                </div>
                                <StyledMdText>
                                    We may share the following user data with third parties:
                                </StyledMdText>
                            </div>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Medical Records: </b>This includes users' medical history, diagnoses, treatments, medications, and lab results. Sensitive identifiers like name, date of birth, and contact information are stripped away to protect privacy.
                                </li>
                                <li><b>Demographic Information: </b>Basic demographic details such as age, gender, geographic region (without precise location), and ethnicity (where relevant) may be shared.
                                </li>
                                <li><b>Health Trends and Usage Data: </b>Data on user behaviours or interactions with their medical records, such as types of conditions managed or engagement with health monitoring tools on BlockMed Pro.
                                </li>
                                <li><b>Aggregated Insights: </b>Statistical insights derived from large datasets (e.g., trends in disease management, treatment efficacy patterns, regional health concerns). These insights are aggregated across users and do not include individual-level data.
                                </li>
                            </ul>
                            <StyledMdText>
                                Importantly, any data shared is processed to prevent re-identification of individual users by third parties by using robust de-identification techniques.
                            </StyledMdText>
                            <StyledMdText>
                                The sharing of medical data with pharmaceutical companies is pseudonymised and shared for the following purposes, which benefit both the users and the wider healthcare community:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Drug Development and Research: </b>Pharmaceutical companies use the medical data to better understand disease patterns, treatment outcomes, and patient responses to medications. This data supports the development of new drugs and therapies tailored to real-world needs.</li>
                                <li><b>Clinical Trials and Medical Studies: </b>The data can inform the design of clinical trials, helping pharma companies identify suitable patient populations, geographic regions, and study parameters. It can also support post-market surveillance studies to track how existing drugs perform in diverse patient populations.</li>
                                <li><b>Public Health Insights: </b>Pharmaceutical companies may use aggregated data to derive insights into population health trends, supporting broader research efforts that aim to improve healthcare delivery and patient outcomes on a systemic level.</li>
                                <li><b>Targeted Healthcare Solutions: </b>By analysing the data, pharmaceutical companies can develop targeted healthcare interventions and personalised medicine strategies that align with the needs of specific patient groups.</li>
                            </ul>
                            <StyledMdText>
                                Third parties will not be able to access user data beyond what is reasonably necessary to achieve the given purpose. Before any data is shared with third parties, BlockMed Pro ensures that users have explicitly consented to the use of their pseudonymised data for research and commercial purposes. Users will be given clear information on how their data will be pseudonymised, the types of companies that may receive it, and the potential benefits of sharing this data for medical advancements.
                            </StyledMdText>
                            <StyledMdText>
                                Users will be required to opt-in to share their pseudonymised data, ensuring that no data is communicated to third parties without their informed consent.
                            </StyledMdText>
                            <StyledMdText>
                                Users will retain the right to withdraw their consent at any time, and upon such a request, their data will no longer be shared with third parties moving forward.
                                BlockMed Pro takes the security of user data seriously. All data communicated to third parties is encrypted during transmission, and strict contractual obligations are placed on third parties to ensure they maintain the highest standards of data security and privacy.
                            </StyledMdText>
                            <StyledMdText>
                                We use advanced pseudonymisation techniques that ensure no direct identifiers (such as names, addresses, or unique personal codes) are included in the shared datasets, making re-identification highly unlikely.
                            </StyledMdText>
                            <StyledMdText>
                                Pharmaceutical companies and other third parties are bound by data processing agreements that outline their responsibilities for handling anonymised data in compliance with applicable data protection laws, such as GDPR.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Other Disclosures</b>
                            </StyledMdText>
                            <StyledMdText>
                                We will not sell or share your data with other third parties, except in the following cases:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li>If the law requires it</li>
                                <li>If it is required for any legal proceeding</li>
                                <li>To prove or protect our legal rights; and</li>
                                <li>To buyers or potential buyers of this company in the event that we seek to sell the company.</li>
                            </ul>
                            <StyledMdText>
                                If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and have no control over their privacy policies and practices.
                            </StyledMdText>
                        </div>

                        {/* How Long We Store Personal Data */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                8. How Long We Store Personal Data
                            </StyledH4Heading>
                            <StyledMdText>
                                BlockMed Pro retains user data only for as long as it is necessary to fulfil the purposes outlined in the privacy policy or as required by law. Below are the general retention periods for different types of data:
                            </StyledMdText>
                            <StyledMdText>
                                <b>1. User Account Data</b>
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Retention Period: </b>As long as the user maintains an active account with BlockMed Pro.
                                </li>
                                <li><b>Deletion Upon Account Closure: </b>When a user deletes their account, all personal data is permanently removed from our systems within 30 days, unless there is a legal or regulatory obligation to retain certain information.
                                </li>
                            </ul>
                            <StyledMdText>
                                <b>2. Medical Records and Health Data</b>
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Retention Period: </b>Medical records and health data uploaded by users are retained for the duration of the user's account activity. If the user opts out of data sharing or closes their account, the data is anonymised or deleted within 30 days.
                                </li>
                                <li><b>Anonymised Data: </b>Anonymised data, which can no longer be linked to a specific individual, may be retained indefinitely for research, statistical, or business analysis purposes.
                                </li>
                            </ul>
                            <StyledMdText>
                                <b>3. Transaction Data (Payments, Financial Information)</b>
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Retention Period: </b>Payment and financial data are retained for 10 years to comply with financial and tax regulations, such as bookkeeping, auditing, and anti-fraud requirements.
                                </li>
                                <li><b>Deletion After Retention Period: </b>After the legally mandated retention period, this data is securely deleted.
                                </li>
                            </ul>
                            <StyledMdText>
                                <b>4. Communications and Support Data</b>
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Retention Period: </b>Records of communications with users (e.g., customer support emails or chat logs) are kept for 2 years to ensure continuity of service and for training and quality purposes.
                                </li>
                                <li><b>Deletion After Retention Period: </b>Communications data will be deleted or anonymised after 2 years, unless a longer retention period is required by law.
                                </li>
                            </ul>
                            <StyledMdText>
                                <b>5. Marketing and Consent Records</b>
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Retention Period: </b>Data related to marketing preferences and consent (e.g., opt-ins or opt-outs for promotional emails) will be kept for as long as required to demonstrate compliance with data protection laws (e.g., GDPR).
                                </li>
                                <li><b>Deletion Upon Request: </b>: Users can opt out of marketing communications at any time, and their data will no longer be used for direct marketing. However, records of their opt-out preferences may be kept for 2 years to ensure compliance.
                                </li>
                            </ul>
                            <StyledMdText>
                                <b>6. Legal and Regulatory Obligations</b>
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Retention Period: </b>Data necessary to comply with legal obligations, such as responding to law enforcement or fulfilling regulatory requirements, may be retained for the period specified by applicable law.
                                </li>
                                <li><b>Deletion After Retention Period: </b>Once legal obligations have been satisfied, the data will be securely deleted.
                                </li>
                            </ul>
                            <StyledMdText>
                                <b>7. Analytics and Website Usage Data</b>
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Retention Period: </b>Cookies, tracking, and analytics data are typically retained for 12 months to provide insights into user behaviour, improve the platform’s functionality, and optimise performance.
                                </li>
                                <li><b>Deletion or Anonymisation: </b>After the retention period, this data is either deleted or anonymised so that it cannot be used to identify individual users.
                                </li>
                            </ul>
                        </div>


                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                9. User Rights Regarding Data Retention
                            </StyledH4Heading>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li><b>Request Deletion: </b>Users have the right to request deletion of their personal data at any time. BlockMed Pro will respond to such requests in accordance with applicable data protection laws (e.g., GDPR), provided that no overriding legal obligations require us to retain the data.
                                </li>
                                <li><b>Right to Access and Correct Data: </b>Users can access, correct, or update their data at any time by visiting their account settings or contacting customer support.
                                </li>
                            </ul>
                        </div>

                        {/* How We Protect Your Personal Data */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                10. How We Protect Your Personal Data
                            </StyledH4Heading>
                            <StyledMdText>
                                <b>Data Encryption</b>
                            </StyledMdText>
                            <StyledMdText>
                                Encryption in Transit: All data transmitted between users and our servers is encrypted using industry-standard SSL/TLS encryption protocols. This ensures that sensitive information, such as medical records and financial details, is securely transferred over the internet and cannot be intercepted by unauthorised parties.
                            </StyledMdText>
                            <StyledMdText>
                                Encryption at Rest: User data, including medical records, is encrypted at rest using advanced encryption standards (e.g., AES-256). This ensures that, even if data storage systems are compromised, the information remains protected and unreadable without the proper decryption keys.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Multi-Factor Authentication (MFA)</b>
                            </StyledMdText>
                            <StyledMdText>
                                To prevent unauthorised access to user accounts, we require multi-factor authentication (MFA) for all users. This adds an extra layer of security by requiring not just a password but also a second factor, such as a code sent to a user’s phone or email, for account access.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Access Control and Role-Based Permissions</b>
                            </StyledMdText>
                            <StyledMdText>
                                Restricted Access: Only authorised personnel with a legitimate business need have access to sensitive user data. We implement role-based access control (RBAC), meaning that employees and contractors can only access the data necessary for their role and are restricted from viewing or altering user health records unless absolutely required.
                            </StyledMdText>
                            <StyledMdText>
                                Audit Logs: All access to user data is logged and monitored through audit logs to detect and respond to any suspicious or unauthorised activity. Regular reviews of these logs help ensure compliance with our data protection policies.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Secure Data Storage</b>
                            </StyledMdText>
                            <StyledMdText>
                                Cloud Security: User data is stored on secure cloud servers with industry-leading providers that comply with stringent security and privacy standards (such as ISO 27001 or SOC 2 compliance). These data centres offer physical and network security to protect against data breaches.
                            </StyledMdText>
                            <StyledMdText>
                                Backup and Disaster Recovery: We maintain secure, encrypted backups of critical data to ensure continuity of service in the event of data loss or system failure. Our disaster recovery plan ensures that data is quickly recoverable in emergencies, minimising potential downtime.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Regular Security Audits and Penetration Testing</b>
                            </StyledMdText>
                            <StyledMdText>
                                We conduct regular security audits, including third-party penetration testing, to identify and address vulnerabilities within our systems. These assessments help ensure that our defences against cyber threats remain robust and effective.
                            </StyledMdText>
                            <StyledMdText>
                                Compliance Audits: We adhere to industry standards and regularly undergo audits to maintain compliance with applicable data protection regulations (e.g., GDPR, HIPAA).
                            </StyledMdText>
                            <StyledMdText>
                                <b>Privacy by Design</b>
                            </StyledMdText>
                            <StyledMdText>
                                Minimisation: We only collect the data necessary to provide and improve our services. Data collection is limited to what is essential, and we anonymise or pseudonymised data where possible to further protect user privacy.
                            </StyledMdText>
                            <StyledMdText>
                                Secure Development Practices: BlockMed Pro’s software is built with security in mind from the outset, employing best practices in secure coding and regular code reviews to prevent vulnerabilities.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Intrusion Detection and Prevention Systems (IDPS)</b>
                            </StyledMdText>
                            <StyledMdText>
                                We implement advanced intrusion detection and prevention systems to monitor our network for suspicious activity or unauthorised access attempts. These systems allow us to detect and block potential threats in real-time before they compromise our users' data.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Data Anonymisation and Pseudonymisation</b>
                            </StyledMdText>
                            <StyledMdText>
                                For cases where data is shared with third parties, such as pharmaceutical companies, we use advanced anonymisation or pseudonymisation techniques. This ensures that user identities are protected and that the data shared cannot be used to re-identify individuals.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Secure Payment Processing</b>
                            </StyledMdText>
                            <StyledMdText>
                                Financial data, including payment information, is processed securely through certified third-party payment processors that comply with the Payment Card Industry Data Security Standard (PCI- DSS). BlockMed Pro does not store payment card details directly on our servers.
                            </StyledMdText>
                            <StyledMdText>
                                <b>Incident Response Plan</b>
                            </StyledMdText>
                            <StyledMdText>
                                In the event of a data breach or security incident, BlockMed Pro has a comprehensive incident response plan in place. This plan includes procedures for identifying the breach, containing the threat, notifying affected users (if required by law), and mitigating any further damage. We are committed to transparency and will inform users of significant security incidents that may affect their data.
                            </StyledMdText>
                            <StyledMdText>
                                <b>User Responsibility</b>
                            </StyledMdText>
                            <StyledMdText>
                                Strong Passwords: We encourage users to create strong, unique passwords and provide guidelines on how to do so.
                            </StyledMdText>
                            <StyledMdText>
                                User Education: BlockMed Pro provides users with resources to help them recognise and avoid phishing attempts and other common security threats.
                            </StyledMdText>
                            <StyledMdText>
                                While we take all reasonable precautions to ensure that user data is secure and that users are protected, there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore we are unable to guarantee the security of user data beyond what is reasonably practical.
                            </StyledMdText>
                        </div>

                        {/* International Data Transfers */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                11. International Data Transfers
                            </StyledH4Heading>
                            <StyledMdText>
                                We transfer user personal data to the following countries:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li>United Arab Emirates.</li>
                            </ul>
                            <StyledMdText>
                                When we transfer user personal data we will protect that data as described in this Privacy Policy and comply with applicable legal requirements for transferring personal data internationally.
                            </StyledMdText>
                            <StyledMdText>
                                If you are located in the United Kingdom or the European Union, we will only transfer your personal data if:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li>The country your personal data is being transferred to has been deemed to have adequate data protection by the European Commission or, if you are in the United Kingdom, by the United Kingdom adequacy regulations or</li>
                                <li>We have implemented appropriate safeguards in respect of the transfer. For example, the recipient is a party to binding corporate rules, or we have entered into standard EU or United Kingdom data protection contractual clauses with the recipient.</li>
                            </ul>
                        </div>

                        {/* Your Rights as a User */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                12.  Your Rights as a User
                            </StyledH4Heading>
                            <StyledMdText>Under the GDPR, you have the following rights:</StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li>Right to be informed</li>
                                <li>Right of access</li>
                                <li>Right to rectification</li>
                                <li>Right to erasure</li>
                                <li>Right to restrict processing</li>
                                <li>Right to data portability; and</li>
                                <li>Right to object.</li>
                            </ul>
                        </div>

                        {/* Children */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                13. Children
                            </StyledH4Heading>
                            <StyledMdText>
                                The minimum age to use the Site and register for an account is 18 years of age. We do not knowingly collect or use personal data from children under 18 years of age. If we learn that we have collected personal data from a child under 18 years of age, the personal data will be deleted as soon as possible. If a child under 18 years of age has provided us with personal data their parent or guardian may contact our data protection officer.
                            </StyledMdText>
                        </div>

                        {/* How to Access, Modify, Delete, or Challenge the Data Collected */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                14. How to Access, Modify, Delete, or Challenge the Data Collected
                            </StyledH4Heading>
                            <StyledMdText>
                                If you would like to know if we have collected your personal data, how we have used your personal data, if we have disclosed your personal data and to who we disclosed your personal data, if you would like your data to be deleted or modified in any way, or if you would like to exercise any of your other rights under the GDPR, please contact our data protection officer here:
                            </StyledMdText>
                            <div className='flex flex-col gap-1'>
                                <StyledMdText>M Burhan Ahmed</StyledMdText>
                                <StyledMdText>
                                    <a
                                        href="mailto:burhan@blockmedpro.com"
                                        className="underline text-button-light-blue underline-offset-2"
                                        rel="noopener noreferrer"
                                    >
                                        burhan@blockmedpro.com
                                    </a>

                                </StyledMdText>
                            </div>
                        </div>

                        {/* How to Opt-Out of Data Collection, Use or Disclosure */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                15. How to Opt-Out of Data Collection, Use or Disclosure
                            </StyledH4Heading>
                            <StyledMdText>
                                In addition to the method(s) described in the <i>How to Access, Modify, Delete, or Challenge the Data Collected section, </i>we provide the following specific opt-out methods for the forms of collection, use, or disclosure of your personal data specified below:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li>Direct Marketing (Emails and Promotional Communications) You can opt-out by users can opt out of receiving marketing emails by clicking the “Unsubscribe” link included in all promotional communications. Users can also go to their account settings on the BlockMed Pro platform to manage their communication preferences and disable promotional emails.</li>
                                <li>Anonymised Data Sharing with Third Parties. You can opt-out by opt-In/Opt-Out Consent Management: Users have the ability to control whether or not their anonymised data is shared with third parties through an opt-in mechanism at the point of account creation.</li>
                                <li>Account Settings: Users can manage their consent preferences in their account settings at any time. By opting out, no further anonymised data will be shared with third parties.</li>
                                <li>Right to Withdraw Consent: Users can withdraw previously given consent for third-party data sharing by contacting customer support or updating their preferences in their account dashboard.</li>
                                <li>Data Collected for Surveys and Feedback Forms. You can opt-out by non-Participation: Users are not required to participate in surveys or provide feedback, and can simply choose not to engage when prompted.</li>
                                <li>Unsubscribe from Survey Invitations: If users receive email invitations to participate in surveys, they can opt out by using the unsubscribe link in those invitations or by managing communication preferences in their account settings.</li>
                            </ul>
                        </div>

                        {/* Cookie Policy */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                16. Cookie Policy
                            </StyledH4Heading>
                            <StyledMdText>
                                A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect data relating to the user's browsing habits. You can choose to disable cookies entirely in your internet browser, but this may decrease the quality of your user experience.
                            </StyledMdText>
                            <StyledMdText>
                                We use the following types of cookies on our Site:
                            </StyledMdText>
                            <ul className="flex flex-col px-6 space-y-2 list-disc text-river-blue text-md">
                                <li>Functional cookies: Functional cookies are used to remember the selections you make on our Site so that your selections are saved for your next visits.</li>
                                <li>Analytical cookies: Analytical cookies allow us to improve the design and functionality of our Site by collecting data on how you access our Site, for example data on the content you access, how long you stay on our Site, etc.</li>
                                <li>Targeting cookies: Targeting cookies collect data on how you use the Site and your preferences. This allows us to personalise the information you see on our Site for you and</li>
                                <li>Third-Party Cookies: Third-party cookies are created by a website other than ours. We may use third-party cookies to achieve the following purposes:</li>
                                <div>
                                    <StyledMdText>- Analytics and Website Performance</StyledMdText>
                                    <StyledMdText>- Advertising and Remarketing and</StyledMdText>
                                    <StyledMdText>- Social Media Integrations.</StyledMdText>
                                </div>
                            </ul>
                        </div>

                        {/* Modifications */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                17. Modifications
                            </StyledH4Heading>
                            <StyledMdText>
                                This Privacy Policy may be amended from time to time in order to maintain compliance with the law and to reflect any changes to our data collection process. When we amend this Privacy Policy we will update the "Effective Date" at the top of this Privacy Policy. We recommend that our users periodically review our Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify users by email of changes to this Privacy Policy.
                            </StyledMdText>
                        </div>

                        {/* Complaints */}
                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                18. Complaints
                            </StyledH4Heading>
                            <StyledMdText>
                                If you have any complaints about how we process your personal data, please contact us through the contact methods listed in the Contact Information section so that we can, where possible, resolve the issue. If you feel we have not addressed your concern in a satisfactory manner you may contact a supervisory authority. You also have the right to directly make a complaint to a supervisory authority. You can lodge a complaint with a supervisory authority by contacting the ADGM Office of Data Protection <span>
                                    <a href='https://www.adgm.com/operating-in-adgm/office-of-data-protection' className='underline text-button-light-blue underline-offset-2' rel='noopener noreferrer'>
                                        (https://www.adgm.com/operating-in-adgm/office-of-data-protection/)
                                    </a></span>.
                            </StyledMdText>
                        </div>


                        <div className='flex flex-col gap-4'>
                            <StyledH4Heading>
                                19. Contact Information
                            </StyledH4Heading>
                            <StyledMdText>
                                If you have any questions, concerns or complaints, you can contact our data protection officer, Dr M Burhan Ahmed, at:
                            </StyledMdText>
                            <StyledMdText>
                                <a
                                    href="mailto:burhan@blockmedpro.com"
                                    className="underline text-button-light-blue underline-offset-2"
                                    rel="noopener noreferrer"
                                >
                                    burhan@blockmedpro.com
                                </a>

                            </StyledMdText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;

