import React from 'react';
import StyledH3Heading from '../../common/components/styledH3Heading/StyledH3Heading';
import StyledH4Heading from '../../common/components/styledH4Heading/StyledH4Heading';
import StyledMdText from '../../common/components/styledMdText/StyledMdText';

const TermsAndConditionPage = () => {
    return (
        <div className="max-w-site">
            <div className='relative w-full px-4 py-24 text-river-blue'>
                <div className='flex items-center justify-center'>
                    <div className='py-10'>
                        <StyledH3Heading fontColor="text-river-blue">
                            BlockMed Pro Terms and Conditions
                        </StyledH3Heading>
                    </div>
                </div>
                <div className='max-w-4xl px-8 py-6 mx-auto space-y-6 border rounded-lg border-button-light-blue'>
                    <StyledMdText fontColor="text-river-blue">
                        <strong>Effective Date:</strong> 1st November 2024
                    </StyledMdText>

                    {/* Introduction */}
                    <StyledH4Heading fontColor="text-river-blue">1. Introduction</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        Welcome to
                        <span className='px-2 underline text-button-light-blue underline-offset-2'>
                            <a href='https://www.blockmedpro.com' rel='noopener noreferrer'>
                                www.blockmedpro.com
                            </a>
                        </span>
                        (the "Site"),, operated by BlockMed Pro Global Ltd. (“BlockMed Pro,”
                        “we,” “our,” or “us”). By accessing or using our Site and services, you agree to comply with these Terms
                        and Conditions. Please read them carefully. If you do not agree, please refrain from using our Site.
                    </StyledMdText>
                    {/* Use of the Site */}
                    <StyledH4Heading fontColor="text-river-blue">2. Use of the Site</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        BlockMed Pro provides a health-tech platform allowing users to access, upload, and share health records
                        for personal use and data-sharing options with third parties, such as pharmaceutical companies. By using
                        our Site, you agree to use it solely for lawful purposes and in compliance with all applicable laws.
                    </StyledMdText>

                    {/* Account Registration */}
                    <StyledH4Heading fontColor="text-river-blue">3. Account Registration</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        To access certain features, you may be required to create an account. You agree to provide accurate
                        information and keep your account details secure. You are responsible for any activity on your account.
                        BlockMed Pro reserves the right to suspend or terminate accounts that violate these Terms or involve
                        fraudulent activity.
                    </StyledMdText>

                    {/* Privacy Policy */}
                    <StyledH4Heading fontColor="text-river-blue">4. Privacy Policy</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        Our <b>Privacy Policy</b> governs the collection, processing, and storage of user data and is incorporated by
                        reference into these Terms. By using our services, you acknowledge and consent to BlockMed Pro’s data
                        handling practices. Please review our Privacy Policy here.
                    </StyledMdText>

                    {/* Intellectual Property Rights */}
                    <StyledH4Heading fontColor="text-river-blue">5. Intellectual Property Rights</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        All content, trademarks, logos, and designs on the Site are the property of BlockMed Pro or our licensors.
                        You may not use, copy, or reproduce any content from our Site without prior written permission. You are
                        granted a limited license to use the Site solely for personal, non-commercial purposes.
                    </StyledMdText>

                    <StyledH4Heading fontColor="text-river-blue">6. User Responsibilities</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        You agree not to:
                    </StyledMdText>
                    <ul className="ml-4 space-y-2 list-disc list-inside">
                        <li className="text-river-blue">
                            Use the Site for unlawful or harmful activities.
                        </li>
                        <li className="text-river-blue">
                            Transmit viruses, malware, or any harmful content.
                        </li>
                        <li className="text-river-blue">
                            Attempt to gain unauthorized access to other users’ accounts.
                        </li>
                        <li className="text-river-blue">
                            Use automated systems to access the Site in a way that disrupts our servers or services.
                        </li>
                    </ul>
                    <StyledMdText fontColor="text-river-blue">
                        Violation of these responsibilities may result in termination of your account and legal action.
                    </StyledMdText>

                    {/* Third-Party Links */}
                    <StyledH4Heading fontColor="text-river-blue">7. Third-Party Links</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        The Site may contain links to third-party websites or services, including pharmaceutical companies and
                        healthcare partners. BlockMed Pro is not responsible for the content, policies, or practices of these
                        third-party sites. Accessing them is at your own risk, and you should review their terms and policies.
                    </StyledMdText>

                    {/* Data Usage and Third-Party Sharing */}
                    <StyledH4Heading fontColor="text-river-blue">8. Data Usage and Third-Party Sharing</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        Your use of BlockMed Pro may include the sharing of pseudonymised data with third parties, such as
                        pharmaceutical companies, for research or analysis purposes, only with your explicit consent. This data is
                        shared in a way that protects your identity. Please refer to our Privacy Policy for more information on
                        how we handle and share data.
                    </StyledMdText>

                    {/* Payment and Fees */}
                    <StyledH4Heading fontColor="text-river-blue">9. Payment and Fees</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        Certain features may be accessible only through paid subscriptions or one-time fees. Payments are
                        processed through secure third-party providers. By making a payment, you agree to our payment terms
                        and any additional terms provided by our payment processors.
                    </StyledMdText>

                    {/* Limitation of Liability */}
                    <StyledH4Heading fontColor="text-river-blue">10. Limitation of Liability</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        To the fullest extent permitted by law, BlockMed Pro shall not be liable for any damages, including but
                        not limited to direct, indirect, incidental, or consequential damages arising from your use of or inability
                        to use the Site. BlockMed Pro is provided on an “as-is” and “as available” basis without warranties of any
                        kind.
                    </StyledMdText>

                    {/* Disclaimer */}
                    <StyledH4Heading fontColor="text-river-blue">11. Disclaimer</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        The content on BlockMed Pro’s Site is provided for informational purposes only and should not be
                        interpreted as medical advice. Users should consult qualified healthcare professionals for medical
                        diagnosis or treatment. BlockMed Pro is not liable for decisions made based on information from the
                        Site.
                    </StyledMdText>

                    {/* Modifications to Terms */}
                    <StyledH4Heading fontColor="text-river-blue">12. Modifications to Terms</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        BlockMed Pro reserves the right to update or modify these Terms at any time. Changes will be effective
                        upon posting on the Site. We encourage users to review these Terms periodically. Continued use of the
                        Site after any changes constitute acceptance of the new Terms.
                    </StyledMdText>

                    {/* Governing Law */}
                    <StyledH4Heading fontColor="text-river-blue">13. Governing Law</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        These Terms are governed by and construed in accordance with the laws of the Abu Dhabi Global Market
                        (ADGM). Any disputes arising from or related to the use of the Site shall be subject to the exclusive
                        jurisdiction of the ADGM courts.
                    </StyledMdText>

                    {/* Contact Us */}
                    <StyledH4Heading fontColor="text-river-blue">14. Contact Us</StyledH4Heading>
                    <StyledMdText fontColor="text-river-blue">
                        If you have any questions or concerns about these Terms, please contact us at:
                    </StyledMdText>
                    <StyledMdText fontColor="text-river-blue">
                        Email: {' '}
                        <a href='mailto:info@blockmedpro.com' className='underline underline-offset-2' rel='noopener noreferrer'>
                            info@blockmedpro.com
                        </a>
                        <br />
                        Address: 16th Floor, Hub71, Al-Khatem Tower, ADGM, Abu Dhabi, UAE
                    </StyledMdText>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionPage;
