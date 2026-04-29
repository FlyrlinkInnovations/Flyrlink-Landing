import type { Metadata } from 'next';
import LegalPage, { type LegalBlock } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Flyrlink Terms and Conditions governing access to and use of the Website, user accounts, services, payments, content, and dispute resolution.',
};

const blocks: LegalBlock[] = [
  {
    type: 'p',
    text: 'Welcome to https://www.flyrlink.com/ ("Website"). This Website, including sub-domains, mobile applications and platforms, is owned, operated, and maintained by Flyrlink Innovations Private Limited, having its registered address at Unit 407, 4th Floor, Jain Sadguru Image Capital Park, Image Garden Road, Hyderabad - 500081, and incorporated under the Laws of India (hereinafter referred to as the "Company", "we", "us" or "our"). These Terms and Conditions govern your access to and use of the Website including any sub-domains, mobile applications, content, material, features, functionalities, products, services, User Accounts, transactions, communications, and any related services made available on or through the Website.',
  },
  {
    type: 'p',
    text: 'By accessing, registering and using this Website and any content, material, product, feature or services contained therein, you acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions, along with our Privacy Policy, Payment Policy, Cookie Policy, Disclaimers and any other policies referenced herein. Where required, acceptance of these Terms shall be evidenced through electronic consent (including without limitation click-wrap acceptance during registration or transaction). These Terms and Conditions may include amendments, modifications, additions, or deletions (collectively referred to as the "Terms and Conditions" or "Terms") made by the Company from time to time at its sole discretion, and your continued access or usage of the Website shall be deemed your acceptance to said amendments or updates. If you do not understand or agree with these Terms and Conditions, you are advised not to access or use this Website and to discontinue further use immediately.',
  },
  {
    type: 'p',
    text: 'This Website is an online marketplace where Users purchase and sell products and services. Purchasers and Sellers must register for a User Account in order to transact on the Website. The Website enables Users to work together online to complete and pay for Services and Products. For avoidance of doubt, the Company and the Website are not parties to any contractual agreements between the Purchaser and the Seller, and merely act as a facilitator to connect the Parties. We do not provide employment to any User. The Company and the Website do not hire, terminate, pay, supervise, or otherwise act in any capacity as an employer to any Purchaser or Seller. The Purchaser and the Seller agree that nothing in this Agreement constitutes an employment, partnership, joint venture, or principal-agent relationship between them, between the Users and the Company.',
  },
  {
    type: 'p',
    text: 'For the purposes of these Terms and Conditions, the expressions "you", "your", "User", "experts", "client", and "visitor" shall refer to any individual accessing or using the Website and accepting these Terms and Conditions, whether as a registered Purchaser, Seller, or otherwise. Any reference to the above terminology in singular or plural form, or any pronoun such as he/she/they, shall be construed as interchangeable and referring to the same entity or individual, as the context requires.',
  },

  { type: 'h2', text: 'User Account' },
  {
    type: 'p',
    text: 'The Website is accessible for browsing and limited access by all online visitors worldwide, subject to Applicable Laws. However, certain features on the Website which include conducting transactions (buy or sell services and products) are only available to Registered Users. A Registered User means a User with a User Account on the Website.',
  },
  {
    type: 'p',
    text: 'For conducting business on the Website, the User must create a User Account by providing complete and accurate information and documents as instructed by the Company. The Company, upon receipt of an application for User Account creation, at its sole discretion, may accept, reject or request more information from Users. The Company may conduct KYC verification of the User in the process of creating the User Account and at any time thereafter, and the User hereby consents to such verification. The Company reserves the right to reject the application and restrict, suspend, or permanently disable and blacklist the User if KYC or document verification fails, or the Company suspects fraudulent, unlawful, or suspicious activity.',
  },
  {
    type: 'p',
    text: 'The User shall refrain from creating multiple accounts. The Company strictly follows a "one User Account per User" policy. The User shall be responsible for maintaining confidentiality and security of login credentials related to the User Account on the Website and shall not share such credentials with any third party. You shall be responsible for all activities occurring or authorized to occur in your User Account. You shall promptly inform the Company in the event of any suspicion towards unauthorized access or activities into your account.',
  },
  {
    type: 'p',
    text: 'You shall not impersonate any person, entity or organization or use a false name while using the Website or creating any User Account. By registering yourself with the Website, you warrant and confirm to be of legal age and legal capacity to enter into binding contracts as per Applicable Laws.',
  },

  { type: 'h2', text: 'Code of Conduct' },
  {
    type: 'p',
    text: 'The Company aims to create a secure and legitimate environment while appreciating fundamental values including without limitation integrity, honesty, truth, safety and security, diversity and inclusivity without any discrimination or harassment of any kind. Users are mandated to adhere to this code of conduct while communicating on this Website.',
  },
  { type: 'h3', text: "Dos and Don'ts" },
  {
    type: 'ul',
    items: [
      "Users shall not request, solicit, share, suggest, or exchange any personal communication or correspondence details of and from other Users including without limitation email addresses, phone numbers, social media accounts/handles, personal websites, business name or any other information for the purpose of communicating outside the Website.",
      'Users shall not misuse, abuse, or exploit the chat systems or communication tools provided on the Website for any unlawful activity, fraudulent conduct, prohibited content, or activities that violate Applicable Laws, these Terms, or Public Policy.',
      'Any information including Personal Information, that is necessary for order fulfillment shall be shared exclusively through the designated Order page or such other authorized interfaces provided on the Website.',
      'All exchanges of data, documentation, consideration, and payments between Users shall be conducted exclusively through the Website\'s authorized systems, unless expressly permitted in writing by the Company.',
      'Users shall not initiate false disputes, fraudulent chargebacks, collusive arrangements, artificial transactions or otherwise attempt to manipulate or abuse the Company\'s Payment Policy.',
    ],
  },

  { type: 'h2', text: 'Prohibited Activities' },
  {
    type: 'p',
    text: 'You shall not use the Website for any malicious, illegal, unethical or illegitimate activities that may harm any person, entity or organization. You shall not directly or indirectly use the Website for:',
  },
  {
    type: 'ul',
    items: [
      'Carrying out any fraudulent transaction or activity on the Website.',
      'Initiating or participating in false disputes, fraudulent chargebacks, collusive transactions, manipulation of escrow mechanisms, circumvention of the Company\'s Commission structure, or any conduct intended to abuse or bypass the Company\'s Payment Policy.',
      'Abusing, harassing, threatening, defaming, demeaning or otherwise violating the legal rights of any other person or entity.',
      'Engaging in any activity that interferes with or disrupts access to the Website or the materials therein.',
      'Publishing or disseminating any information which is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, libelous, invasive of another\'s privacy, hateful, racially or ethnically objectionable, or otherwise unlawful.',
      'Infringing upon the Intellectual Property Rights or proprietary rights of the Company or a third party.',
      'Using or launching any automated system including "robots", "spiders", "offline readers" or "crawlers" that accesses our products and services or the Website in a way that sends more requests than a human can reasonably produce.',
      'Attempting to exploit, probe, test or breach the security of the Website, its servers, networks, escrow systems or payment infrastructure.',
      'Creating multiple accounts on the Website. The Company strictly follows a "One User One Account" policy.',
      'Buying, selling, mortgaging, renting, pledging or otherwise transferring your User Account to any third party.',
      'Posting, manipulating, coercing, or attempting to influence ratings or reviews through false representations, incentives, threats, spam, or any unfair practice.',
    ],
  },

  { type: 'h2', text: 'Sellers' },
  { type: 'h3', text: 'Seller Profile' },
  {
    type: 'p',
    text: 'In the profile section of a User Account, different types of profiles can be created including a Seller profile and a Purchaser profile. Within the Seller profile, the User may create or upload details of the Services or Products offered by it. These Products or Services shall be transacted on the Website via User Account on monetary considerations for which the pricing shall be fixed by the User. The Company does not fix or mandate pricing; however, the Company may, at its discretion, provide non-binding recommendations or visibility-based suggestions regarding pricing based on platform practices, demand trends, or compliance considerations.',
  },
  {
    type: 'p',
    text: 'The Seller, at the time of creating a Seller profile, shall provide the following information to the Company:',
  },
  {
    type: 'ul',
    items: [
      'Contact details.',
      'Tax related documents including PAN, GST and other applicable documents as required by the Company.',
      'Representation and undertaking regarding compliance with Indian tax Laws.',
      'Declaration and undertaking regarding legal capacity to contract and financial solvency under Applicable Laws.',
      'Bank account details for payment processing.',
    ],
  },
  { type: 'h3', text: 'Pricing for Products and Services' },
  {
    type: 'p',
    text: 'Each Product and Service listed on the Seller profile shall be mapped to a clearly stated denominated price in Indian Rupees (INR). The Seller shall factor in applicable taxation and the Company\'s Commission structure into account while deciding the pricing for its products and services.',
  },
  {
    type: 'p',
    text: 'The Company may prescribe a minimum listing price or minimum hourly rate for Products or Services offered on the Website. Unless otherwise notified, the minimum price for any Product or Service shall be INR 1,000, and where services are offered on an hourly basis, the minimum hourly rate shall be INR 1,000. There shall be no upper limit or cap on pricing, subject to compliance with these Terms and Applicable Laws.',
  },
  { type: 'h3', text: 'Order Acceptance' },
  {
    type: 'p',
    text: 'Upon receipt of an Order, the Seller may either accept or reject the Order through the Website. Where an Order is rejected, the Seller shall provide detailed reasoning. Upon acceptance by the Seller, the Order shall constitute a binding agreement between the Purchaser and the Seller, subject to these Terms and the Company\'s policies.',
  },
  { type: 'h3', text: 'Delivery' },
  {
    type: 'p',
    text: 'The Seller may deliver Products or Services electronically, based on their nature or mutual agreement with the Purchaser on the Order Page. The Seller shall clearly specify the mode of delivery, applicable timelines, and delivery expectations as part of the Order details and shall be solely responsible for adherence thereto. Upon completion of delivery, the Seller must update the tracking details or delivery confirmation against the Order on the Website.',
  },

  { type: 'h2', text: 'Purchasers' },
  { type: 'h3', text: 'Purchaser Profile' },
  {
    type: 'p',
    text: 'The User Account may permit creation of different types of profiles including a Seller profile and a Purchaser profile. Within the Purchaser profile, the User may specify areas of interest to enable the Company to recommend Seller profiles. The Purchaser profile shall specify and maintain a valid payment method approved by the Company for the purpose of placing Orders against Seller listings on the Website.',
  },
  { type: 'h3', text: 'Placement of an Order' },
  {
    type: 'p',
    text: 'Prior to Order placement, the Purchaser shall independently review and satisfy itself regarding the scope of Products or Services offered by the Seller, including applicable timelines, pricing, format and mode of delivery. Placement of an Order by the Purchaser shall constitute an offer to contract with the Seller. The Seller may accept or reject such Order at its discretion. An Order shall be deemed accepted only upon confirmation of acceptance by the Seller through the Order Page.',
  },
  {
    type: 'p',
    text: 'Upon Order fulfillment, the Seller shall deliver the Products or Services as per the Order placed and accepted. The Purchaser shall review the contents of the delivery within the agreed timeline and may either accept the delivery or reject the delivery with reasons and recommendations. If the Purchaser fails to respond within the prescribed review period, the delivery shall be deemed accepted. Rejections must be bona fide and limited to material deviations from the agreed scope.',
  },

  { type: 'h2', text: 'Events or Contests' },
  {
    type: 'p',
    text: 'The Seller may promote or host contests, webinars, workshops or similar engagements ("Event") on the Website by providing an event brief and relevant details. A Purchaser may participate in such Event by paying the applicable booking amount through the Company\'s authorized payment mechanism. The Seller acknowledges that it is solely responsible for the planning, operation, management, promotion, safety, regulatory compliance, prize distribution (if applicable), tax compliance and lawful conduct of the Event. The Company acts solely as an intermediary platform and shall have no liability whatsoever for any loss, injury, damage, penalties, regulatory action, refund claims, misrepresentation, cancellation, delay or contravention of law arising in connection with such Event.',
  },

  { type: 'h2', text: 'Referral Policy' },
  {
    type: 'p',
    text: 'Registered Users on this Website may refer new Users to the Website and earn referral benefits subject to the Terms herein. The referred user shall be a new user who has not previously registered on the Website, completes the registration on the Website using the referral code or link of the referring User, and completes account verification. The Company reserves the sole right to determine whether the referral qualifies and whether the same entitles the referring User to the benefits. Referral benefits shall not be transferable, are non-exchangeable, and expire within a period of 30 days. Users are solely responsible for determining and paying any taxes applicable to referral rewards received under this policy.',
  },

  { type: 'h2', text: 'Ownership and Limited License' },
  {
    type: 'p',
    text: 'The content, layout, design, software, source code, database architecture, compilation, branding elements and other proprietary materials of this Website, individually or in combination, are proprietary to the Company or licensed to it. Any rights not expressly granted herein are reserved. All trademarks, service marks, logos, names, brands, graphics, pictures, designs, illustrations, drawings, and information of any nature and any kind are the Company\'s property through direct ownership or licensed to the Company.',
  },
  {
    type: 'p',
    text: 'Save and except for the foregoing as expressly permitted herein, the materials on the Website shall not be copied, used, distributed, modified, transmitted, displayed, performed or otherwise communicated, disseminated or reproduced for any purpose that is not approved in advance by the Company in writing.',
  },

  { type: 'h2', text: 'Content Guidelines' },
  {
    type: 'p',
    text: 'These Content Guidelines apply to all Users accessing or using the Website. All Users shall strictly adhere to these Content Guidelines while posting, uploading, publishing, transmitting, displaying, or otherwise making available any content on the Website.',
  },
  { type: 'h3', text: 'Lawful and Accurate Content' },
  {
    type: 'p',
    text: 'All User Content must be lawful, accurate, and created in good faith. Users shall ensure that descriptions of Products, Services, qualifications, experience, pricing representations, and performance claims are truthful and not misleading. Users shall not publish exaggerated, unverifiable, or deceptive claims relating to qualifications, certifications, affiliations, endorsements, or results.',
  },
  { type: 'h3', text: 'Professional and Commercial Integrity' },
  {
    type: 'p',
    text: 'Users must maintain professional standards appropriate to a commercial marketplace platform in relation to the Content on the Website. Listings must clearly and accurately describe scope, deliverables, timelines, pricing and limitations where applicable.',
  },
  { type: 'h3', text: 'Regulatory Compliance' },
  {
    type: 'p',
    text: 'User Content must comply with all Applicable Laws. Users shall ensure that any regulated service (including professional, financial, advisory, or technical services) is offered only where legally permitted and properly authorized.',
  },

  { type: 'h2', text: 'Interactive Services' },
  {
    type: 'p',
    text: 'The Website contains many features which are interactive in nature including communication tools, feedback mechanisms, and other User engagement functionalities. The Website further contains an interactive bot, which is an AI backed interactive system designed to answer queries, facilitate navigation of the Website and understand your requirements. The Interactive Bot operates through automated systems and algorithmic processes. Responses generated by the Interactive Bot are provided for general informational and facilitative purposes only and shall not constitute professional, legal, financial, or technical advice.',
  },

  { type: 'h2', text: 'Dispute Resolution and Governing Law' },
  {
    type: 'p',
    text: 'These Terms and policies governing access and usage of the Website and product and service orders and related transactions shall be expounded and construed in accordance with the Laws of India. Subject to the arbitration clause detailed hereinbelow, any dispute or issue arising out of or in connection with this usage and access or the Website or any transaction made pursuant thereto shall be submitted to the exclusive jurisdiction of the courts at Telangana, India. Any dispute or issue shall be resolved amicably in good faith through negotiations. In case the dispute is not resolved within a reasonable time, said dispute shall be referred to arbitration by a sole arbitrator, appointed by the Company. The arbitration proceedings shall be governed by the provisions of the Arbitration and Conciliation Act, 1996, conducted in the English language, with seat and venue at Telangana, India.',
  },

  { type: 'h2', text: 'Confidential Information' },
  {
    type: 'p',
    text: 'You acknowledge that you may be provided with or have access to our confidential information including but not limited to website related plans, pricing structures, commission models, technical data, trade secrets, software, customer information, operational processes, and other proprietary materials ("Confidential Information"). You undertake not to use any such confidential information for your own purposes except as expressly permitted hereunder, without our prior written consent.',
  },

  { type: 'h2', text: 'Disclaimer of Warranties and Limitation of Liability' },
  {
    type: 'p',
    text: 'You agree that your use of our Website, applications, products and services is at your sole risk and acknowledge that the information or content contained on our Website is provided on "as-is" and "as available" basis and we disclaim all warranties of any kind, whether implied or statutory, including the warranties of merchantability, fitness for a particular purpose, use, title, quiet enjoyment, accuracy, completeness, availability and non-infringement.',
  },
  {
    type: 'p',
    text: "Notwithstanding the other terms of this agreement: (a) the Company, its affiliates, its suppliers or its third party agents will not be liable to you or any third party for any loss of use, data, business opportunity, reputation or goodwill or lost profits or indirect, consequential, exemplary, incidental, special or punitive damages; and (b) our total cumulative liability in connection with our website, applications, products and services and any other information and content in respect thereof and otherwise in connection with this agreement will at all times be limited to the greater of the amount paid by you to the Company in the six (6) months preceding the claim or INR 1,000.",
  },

  { type: 'h2', text: 'Suspension and Termination of User Account' },
  {
    type: 'p',
    text: 'The Company reserves the right, at its sole discretion, to suspend, restrict or terminate your User Account due to breach of these Terms, breach of Applicable Laws, illegal/unethical/immoral/fraudulent usage of the Website or its parts, failure of KYC verification, suspicious transaction patterns, misuse of the Payment Policy or due to consistently poor ratings and reviews. The Company shall not be liable for any consequences arising from such suspension or termination undertaken in good faith.',
  },
  {
    type: 'p',
    text: 'Users may seek to disable or deactivate their User Accounts at any time by selecting the relevant option from the account settings. Deactivation shall not affect any ongoing disputes, escrow holds, Cooling Periods, commissions deducted, or outstanding payment liabilities.',
  },

  { type: 'h2', text: 'Indemnification' },
  {
    type: 'p',
    text: 'You shall indemnify, defend and hold us, our subsidiaries, affiliates, directors, officers, representatives, agents, suppliers, and employees harmless from and against any and all losses, damages, deficiencies, liabilities, claims, demands, actions, judgements or causes of action, assessments, interest, fines, penalties, diminution in value, costs, or expenses (including reasonable attorneys\' fees) arising out of or relating to: (a) breach or alleged breach of these Terms or any other Company policies; (b) any claim, dispute or demand arising out of or relating to the relationship, transaction or alleged transaction between the Seller and the Purchaser; (c) violation of any third party intellectual property rights, access rights, privacy rights, data protection rights or property rights; (d) breach or inaccuracy of any representation or warranty made under these Terms; or (e) your violation of any Applicable Laws or any right of any third party.',
  },

  { type: 'h2', text: 'Communication' },
  {
    type: 'p',
    text: 'You consent to receive notices, disclosures, agreements, policies, updates and other information in matters related to or in connection with the Website, Products and Services therein by electronic communication. You may withdraw this consent at any time; however, if you do so, the Company, at its sole discretion, may suspend, restrict or close your User Account, particularly where electronic communication is necessary for compliance, transactional or security purposes.',
  },

  { type: 'h2', text: 'Severability' },
  {
    type: 'p',
    text: 'If any provision of these Terms is found to be unenforceable, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under Applicable Laws and the remaining provisions will continue in full force and effect.',
  },

  { type: 'h2', text: 'Waiver and Assignment' },
  {
    type: 'p',
    text: 'These Terms and the documents referred to herein or incorporated by reference constitute the final, complete, and exclusive agreement between the parties regarding the subject matter hereof and supersede all prior or contemporaneous agreements. You may not assign this Agreement without our prior written consent and any assignment in violation of the foregoing is null and void. We may freely assign under these Terms.',
  },

  { type: 'h2', text: 'Amendment of the Terms and Conditions' },
  {
    type: 'p',
    text: 'We may, at our sole discretion, amend, modify or update these Terms and Conditions and policies and documents incorporated herein from time to time. If we make material changes to these terms and conditions, we will notify you by posting the change on our Website or sending you an e-mail at your primary email address. Changes will be effective upon the earlier of: (a) fifteen (15) calendar days following our dispatch of an e-mail notice to you; or (b) fifteen (15) calendar days following our posting of a notice on our Website. Your continued access to or use of our Website following the effective date of such changes shall constitute your acknowledgement and agreement to the revised Terms.',
  },

  { type: 'h2', text: 'Feedback' },
  {
    type: 'p',
    text: 'If you have any queries about these Terms or wish to report any breach or violation, please contact us at support@flyrlink.com. Any feedback, suggestions, comments or recommendations submitted by you shall be deemed non-confidential and may be used by the Company without restriction or obligation to compensate you.',
  },

  { type: 'h2', text: 'Notice' },
  {
    type: 'p',
    text: 'Any legal notice or communication required to be given under these Terms shall be served to the email address mapped to the User Account on the Website or through such other electronic mode as may be recorded in the User Account. Notice shall be deemed to have been given within 24 hours after email is sent, unless the Company receives notification that the email address is invalid or that delivery has permanently failed. It shall be the User\'s responsibility to ensure that the contact details provided in the User Account are accurate, complete and up to date.',
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      effectiveDate="April 5, 2026"
      blocks={blocks}
    />
  );
}
