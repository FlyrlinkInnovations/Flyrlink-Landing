import type { Metadata } from 'next';
import LegalPage, { type LegalBlock } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Payment Policy',
  description:
    'Flyrlink Payment Policy covering payment methods, fees, escrow, refunds, currency, taxes, and transaction terms for Purchasers and Sellers.',
};

const blocks: LegalBlock[] = [
  {
    type: 'p',
    text: 'This Payment Policy governs all payments made by Users acting as Purchasers and received by Sellers on the Website. By using the services on the Website, you agree to the terms outlined herein along with the Website Terms and Conditions, Privacy Policy, Cookie Policy and other policies applicable to you and amended by the Company from time to time.',
  },
  {
    type: 'p',
    text: 'The Company acts only as an intermediary or marketplace that facilitates payments between Purchasers and Sellers and the Company does not provide any freelance services. For clarity, the Company is not a banking or financial institution and does not provide any interest or benefits on the payments made on the Website. The Company is not responsible in the event of any issues faced by Users on the Website while making payments through third-party interfaces including UPI, credit cards, debit cards, and payment portals. Also, the Company does not accept any cash payments. Amounts collected by the Company from Purchasers are held only for the purpose of settlement to Sellers once contractual conditions are met.',
  },

  { type: 'h2', text: 'General Payment Terms' },
  { type: 'h3', text: 'Supported Currency' },
  {
    type: 'p',
    text: 'All transactions on the Website are carried out in Indian Rupees. If any payment is made in a different currency, it will be converted as per the exchange rate offered by the Company in compliance with RBI mandate, subject to deduction of conversion fees and taxes payable by the User.',
  },

  { type: 'h3', text: 'Payment Methods' },
  {
    type: 'p',
    text: 'The Company accepts payments through online or digital transactions via UPI, Credit Card, Debit Card, Bank Transfer, and PayPal. The same modes of payment can be used for adding or emptying the wallet connected to the User Account. We do not store your credit or debit card information, and all sensitive financial and banking data is processed by secure and legitimate third-party payment gateways.',
  },

  { type: 'h2', text: 'Purchaser Specific Terms' },
  {
    type: 'p',
    text: "At the time of placing an order, the Purchaser must deposit the order value using online transfer, or if sufficiently funded, through the wallet mapped to its User Account into the Company's escrow account. The deposited amount may be in relation to an hourly rate or lumpsum services agreed by and between the Seller and the Purchaser. To avoid payment disputes, the Company holds the deposited amount until the order is fulfilled by the Seller and successfully and satisfactorily accepted by the Purchaser.",
  },
  {
    type: 'ul',
    items: [
      'The Purchaser shall place an order with the Seller at a minimum value of INR 1,000.',
      'For hourly contracts, the Purchaser shall estimate the number of hours to be undertaken by the Seller to render Services and deposit the equivalent sum estimated by multiplying estimated hours with the hourly rate of the Seller. In the event of an extension of hours or change in hourly rate, the Seller shall intimate the Company and request the Purchaser to deposit the additional amount. If contested, the matter shall be referred for dispute resolution.',
      'The Company charges a platform fee of 5 (five)% on all payments to cover operational and administrative expenses. This fee is added to the total checkout amount.',
      'Users are liable for applicable indirect taxes under Applicable Laws. The Company will collect and remit these taxes to the relevant authorities, and withdrawals from the Website shall be subject to deduction or withholding of applicable taxes under Applicable Laws.',
      'A copy of the invoice is generated on the Website at the time of placing an order with the Purchaser.',
    ],
  },

  { type: 'h2', text: 'Seller Specific Terms' },
  {
    type: 'ul',
    items: [
      'At the time of order acceptance, the Seller must understand that the value of the order accepted is inclusive of the platform fees of 10 (Ten)% of the payment, and the amount payable to the Seller shall be released after deduction of platform fees, taxes, currency conversion charges and any additional cess or levies as applicable or determined by the Company. Payments are further subject to third-party fees.',
      'The Company shall release funds 15 (fifteen) days after order fulfillment to provide a grace period for raising any dispute with the Purchaser or vice versa.',
      'The minimum value of order acceptable by the Seller stands at INR 500.',
    ],
  },

  { type: 'h2', text: 'Escrow Mechanism' },
  {
    type: 'p',
    text: 'The Website provides an escrow-based payment system ("Escrow") to facilitate secure transactions between Purchasers and Sellers. All payments made by the Purchaser for a Service shall be deposited into the Escrow account maintained by the Website or its authorized payment service provider until the Service is completed, accepted, or otherwise resolved in accordance with these Terms.',
  },
  {
    type: 'p',
    text: 'Funds held in Escrow shall be released to the Seller only upon:',
  },
  {
    type: 'ul',
    items: [
      'The Purchaser marking the order as completed or approved on the Website; or',
      'Expiry of the applicable review period without dispute; or',
      'Resolution of any dispute directing release of funds to the Seller.',
    ],
  },
  {
    type: 'p',
    text: "The Purchaser acknowledges that once funds are released from Escrow, the transaction is considered final and irreversible except as permitted under the Website's policies.",
  },
  {
    type: 'p',
    text: "In the event of a dispute between the Purchaser and the Seller, the Platform may, at its sole discretion, place a hold on the funds in Escrow until the dispute is resolved through the Website's dispute resolution mechanism. The Website may request additional information or evidence from either party before reaching a determination.",
  },
  {
    type: 'p',
    text: "If a refund is approved pursuant to the dispute resolution process, cancellation request, or Website policy, the Platform shall return the applicable funds from Escrow to the Buyer's original payment method, subject to deduction of any non-refundable fees, charges, or currency conversion costs.",
  },
  {
    type: 'p',
    text: 'The Purchaser and Seller expressly authorize the Platform to act as escrow agent for the limited purpose of holding, releasing, and refunding funds in accordance with these Terms. The Platform does not act as a bank, financial institution, or fiduciary for either party and has no independent obligation to either party beyond the Escrow operations described herein.',
  },
  {
    type: 'p',
    text: 'All escrow operations are subject to Applicable Laws, including KYC/AML requirements. The Website may suspend, delay, or cancel the release of funds if required by law, regulatory directives, or risk assessment measures.',
  },
  {
    type: 'p',
    text: 'The parties hereto acknowledge that funds held in Escrow do not earn interest for either Purchaser or Seller. Any interest, if generated, shall accrue solely to the Website or its payment service provider.',
  },
];

export default function PaymentPolicyPage() {
  return (
    <LegalPage
      title="Payment Policy"
      effectiveDate="April 5, 2026"
      blocks={blocks}
    />
  );
}
