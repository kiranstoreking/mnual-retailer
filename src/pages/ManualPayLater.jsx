import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, Wallet, Users, Building2, UserCheck, BarChart3,
  FileText, DollarSign, Search, Filter, Eye, Edit, Calendar,
  CheckCircle, Clock, AlertTriangle, ShieldCheck, ShieldOff, Plus,
  List, Grid
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';

const Screenshot = ({ title, children }) => (
  <div className="my-6 border bg-slate-100 rounded-xl shadow-md overflow-hidden">
    <div className="bg-slate-200 px-4 py-2 border-b border-slate-300">
      <h5 className="font-semibold text-slate-700">{title}</h5>
    </div>
    <div className="p-4 md:p-6 bg-white">
      {children}
    </div>
  </div>
);

const Step = ({ number, title, children }) => (
  <div className="flex items-start gap-4 mt-8">
    <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base">
        {children}
      </div>
    </div>
  </div>
);

const translations = {
  en: {
    pageTitle: "Pay Later Wallet Manual",
    backToManual: "Back to Manual",
    description: "Comprehensive guide to managing the Pay Later credit system for both B2C and B2B customers, including wallet activation, limit setting, KYC verification, payment tracking, and financial analytics.",
    step1Title: "Pay Later Dashboard Overview",
    step1Intro: "The Pay Later Dashboard is the central hub for managing all credit-related activities. It provides key performance indicators (KPIs), access to customer and retailer wallet management, and financial oversight tools.",
    step2Title: "B2C Wallet Management",
    step2Intro: "This section focuses on managing Pay Later services for individual B2C customers. You can activate wallets, set credit limits, monitor balances, and track payment history for each customer.",
    step3Title: "B2B Wallet Management",
    step3Intro: "Similarly, this section covers the management of Pay Later services for your B2B retail partners, allowing you to offer them a line of credit to facilitate larger and more frequent orders.",
    step4Title: "KYC Verification Process",
    step4Intro: "Know Your Customer (KYC) is a mandatory step for activating Pay Later services. This process ensures you are extending credit to verified individuals and businesses, minimizing risk.",
    step5Title: "Statement & Payment Tracking",
    step5Intro: "This section allows for complete financial transparency. You can view detailed transaction statements for each wallet and manually record offline payments to reconcile accounts.",
    step6Title: "Pay Later Analytics",
    step6Intro: "The Analytics tab provides crucial insights into the performance and health of your Pay Later program, helping you make data-driven decisions about credit policies and risk management.",
    nextStepsTitle: "Pay Later Management Complete!",
    nextStepsDescription: "With your Pay Later system managed, you can now move to Expense Management to track and control all your operational costs.",
    nextStepsButton: "Continue to Expense Management",

    // Screenshot Keys
    dashboardTitle: "Pay Later Wallet Dashboard",
    dashboardDesc: "Manage credit limits, KYC, and payments for B2C and B2B customers.",
    recordB2CPayment: "Record B2C Payment",
    recordB2BPayment: "Record B2B Payment",
    totalCreditLimit: "Total Credit Limit",
    totalOutstanding: "Total Outstanding",
    activeB2CWallets: "Active B2C Wallets",
    activeB2BWallets: "Active B2B Wallets",
    b2cManagement: "B2C Management",
    b2bManagement: "B2B Management",
    kycVerification: "KYC Verification",
    analytics: "Analytics",
    statements: "Statements",

    // B2C/B2B List
    searchCustomer: "Search customer name or phone...",
    searchRetailer: "Search retailer name or phone...",
    allStatuses: "All Statuses",
    active: "Active",
    paused: "Paused",
    stopped: "Stopped",
    customer: "Customer",
    retailer: "Retailer",
    kycStatus: "KYC Status",
    walletStatus: "Wallet Status",
    creditLimit: "Credit Limit",
    outstandingBalance: "Outstanding Balance",
    actions: "Actions",
    setLimit: "Set Limit",
    viewStatement: "View Statement",
    verified: "Verified",
    pending: "Pending",
    notSubmitted: "Not Submitted",
    priyaSharma: "Priya Sharma",
    rajeshKumar: "Rajesh Kumar",
    greenValley: "Green Valley Store",
    freshMarket: "Fresh Market Hub",

    // Set Limit Modal
    setPayLaterLimit: "Set Pay Later Limit",
    setForCustomer: "Set credit limit and validity for",
    limitAmount: "Limit Amount (₹)",
    enterLimit: "Enter limit amount",
    validityPeriod: "Validity Period",
    days30: "30 Days",
    days90: "90 Days",
    days365: "365 Days",
    unlimited: "Unlimited",
    cancel: "Cancel",
    updateLimit: "Update Limit",
    activateWallet: "Activate Wallet",

    // KYC Tab
    kycPendingRequests: "KYC Pending Requests",
    review: "Review",
    submittedOn: "Submitted on",
    customerType: "Customer Type",
    b2c: "B2C",
    b2b: "B2B",

    // KYC Review Modal
    kycReviewFor: "KYC Review for",
    submittedDocs: "Submitted Documents",
    aadharCard: "Aadhar Card",
    panCard: "PAN Card",
    viewDoc: "View Doc",
    rejectionReason: "Rejection Reason (if applicable)",
    reject: "Reject",
    approve: "Approve",

    // Statement Tab
    payLaterStatement: "Pay Later Statement",
    allCustomers: "All Customers",
    allRetailers: "All Retailers",
    searchByID: "Search by Customer/Order ID...",
    date: "Date",
    debit: "Debit",
    credit: "Credit",
    balance: "Balance",
    purchaseOrder: "Purchase - Order #",
    paymentReceived: "Payment Received",

    // Analytics Tab
    creditAnalytics: "Credit Analytics",
    totalVsOutstanding: "Total Limit vs. Outstanding Balance",
    b2cUtilization: "B2C Utilization",
    b2bUtilization: "B2B Utilization",
    overdueBalances: "Overdue Balances",
    walletsPastDue: "{count} wallets past due",
    totalOverdue: "Total Overdue",
    newActivations: "New Wallet Activations (Last 30d)",
    newB2C: "New B2C Wallets",
    newB2B: "New B2B Wallets",
    paymentCycle: "Average Payment Cycle",
    avgDaysToPay: "Avg. Days to Pay",
    avgB2C: "Avg. B2C",
    avgB2B: "Avg. B2B",
  },
  kn: {
    pageTitle: "ಪೇ ಲೇಟರ್ ವ್ಯಾಲೆಟ್ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "B2C ಮತ್ತು B2B ಗ್ರಾಹಕರಿಗಾಗಿ ಪೇ ಲೇಟರ್ ಕ್ರೆಡಿಟ್ ವ್ಯವಸ್ಥೆಯನ್ನು ನಿರ್ವಹಿಸಲು ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ, ವ್ಯಾಲೆಟ್ ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ, ಮಿತಿ ನಿಗದಿ, KYC ಪರಿಶೀಲನೆ, ಪಾವತಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಹಣಕಾಸು ವಿಶ್ಲೇಷಣೆ ಸೇರಿದಂತೆ.",
    step1Title: "ಪೇ ಲೇಟರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ಪೇ ಲೇಟರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಎಲ್ಲಾ ಕ್ರೆಡಿಟ್-ಸಂಬಂಧಿತ ಚಟುವಟಿಕೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಕೇಂದ್ರ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ಪ್ರಮುಖ ಕಾರ್ಯಕ್ಷಮತೆ ಸೂಚಕಗಳನ್ನು (KPIs), ಗ್ರಾಹಕ ಮತ್ತು ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ವ್ಯಾಲೆಟ್ ನಿರ್ವಹಣೆಗೆ ಪ್ರವೇಶ ಮತ್ತು ಹಣಕಾಸು ಮೇಲ್ವಿಚಾರಣಾ ಸಾಧನಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step2Title: "B2C ವ್ಯಾಲೆಟ್ ನಿರ್ವಹಣೆ",
    step2Intro: "ಈ ವಿಭಾಗವು ವೈಯಕ್ತಿಕ B2C ಗ್ರಾಹಕರಿಗಾಗಿ ಪೇ ಲೇಟರ್ ಸೇವೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದರ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ. ನೀವು ವ್ಯಾಲೆಟ್‌ಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು, ಕ್ರೆಡಿಟ್ ಮಿತಿಗಳನ್ನು ಹೊಂದಿಸಬಹುದು, ಬಾಕಿಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಬಹುದು ಮತ್ತು ಪ್ರತಿ ಗ್ರಾಹಕರ ಪಾವತಿ ಇತಿಹಾಸವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಬಹುದು.",
    step3Title: "B2B ವ್ಯಾಲೆಟ್ ನಿರ್ವಹಣೆ",
    step3Intro: "ಅಂತೆಯೇ, ಈ ವಿಭಾಗವು ನಿಮ್ಮ B2B ಚಿಲ್ಲರೆ ಪಾಲುದಾರರಿಗಾಗಿ ಪೇ ಲೇಟರ್ ಸೇವೆಗಳ ನಿರ್ವಹಣೆಯನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ, ದೊಡ್ಡ ಮತ್ತು ಹೆಚ್ಚು ಆಗಾಗ್ಗೆ ಆದೇಶಗಳನ್ನು ಸುಲಭಗೊಳಿಸಲು ಅವರಿಗೆ ಕ್ರೆಡಿಟ್ ಲೈನ್ ನೀಡಲು ನಿಮಗೆ ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.",
    step4Title: "KYC ಪರಿಶೀಲನೆ ಪ್ರಕ್ರಿಯೆ",
    step4Intro: "ಪೇ ಲೇಟರ್ ಸೇವೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನಿಮ್ಮ ಗ್ರಾಹಕರನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ (KYC) ಕಡ್ಡಾಯ ಹಂತವಾಗಿದೆ. ಈ ಪ್ರಕ್ರಿಯೆಯು ನೀವು ಪರಿಶೀಲಿಸಿದ ವ್ಯಕ್ತಿಗಳು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ಕ್ರೆಡಿಟ್ ವಿಸ್ತರಿಸುತ್ತಿರುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ, ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
    step5Title: "ಹೇಳಿಕೆ ಮತ್ತು ಪಾವತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
    step5Intro: "ಈ ವಿಭಾಗವು ಸಂಪೂರ್ಣ ಹಣಕಾಸು ಪಾರದರ್ಶಕತೆಯನ್ನು ಅನುಮತಿಸುತ್ತದೆ. ನೀವು ಪ್ರತಿ ವ್ಯಾಲೆಟ್‌ಗಾಗಿ ವಿವರವಾದ ವಹಿವಾಟು ಹೇಳಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಬಹುದು ಮತ್ತು ಖಾತೆಗಳನ್ನು ಸರಿಹೊಂದಿಸಲು ಆಫ್‌ಲೈನ್ ಪಾವತಿಗಳನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ದಾಖಲಿಸಬಹುದು.",
    step6Title: "ಪೇ ಲೇಟರ್ ಅನಾಲಿಟಿಕ್ಸ್",
    step6Intro: "ಅನಾಲಿಟಿಕ್ಸ್ ಟ್ಯಾಬ್ ನಿಮ್ಮ ಪೇ ಲೇಟರ್ ಕಾರ್ಯಕ್ರಮದ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಆರೋಗ್ಯದ ಬಗ್ಗೆ ನಿರ್ಣಾಯಕ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ, ಕ್ರೆಡಿಟ್ ನೀತಿಗಳು ಮತ್ತು ಅಪಾಯ ನಿರ್ವಹಣೆಯ ಬಗ್ಗೆ ಡೇಟಾ-ಚಾಲಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    nextStepsTitle: "ಪೇ ಲೇಟರ್ ನಿರ್ವಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನಿಮ್ಮ ಪೇ ಲೇಟರ್ ವ್ಯವಸ್ಥೆಯನ್ನು ನಿರ್ವಹಿಸಿದ ನಂತರ, ನಿಮ್ಮ ಎಲ್ಲಾ ಕಾರ್ಯಾಚರಣೆಯ ವೆಚ್ಚಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ನಿಯಂತ್ರಿಸಲು ನೀವು ಈಗ ವೆಚ್ಚ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಬಹುದು.",
    nextStepsButton: "ವೆಚ್ಚ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",

    // Screenshot Keys
    dashboardTitle: "ಪೇ ಲೇಟರ್ ವ್ಯಾಲೆಟ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    dashboardDesc: "B2C ಮತ್ತು B2B ಗ್ರಾಹಕರಿಗೆ ಕ್ರೆಡಿಟ್ ಮಿತಿಗಳು, KYC, ಮತ್ತು ಪಾವತಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    recordB2CPayment: "B2C ಪಾವತಿ ದಾಖಲಿಸಿ",
    recordB2BPayment: "B2B ಪಾವತಿ ದಾಖಲಿಸಿ",
    totalCreditLimit: "ಒಟ್ಟು ಕ್ರೆಡಿಟ್ ಮಿತಿ",
    totalOutstanding: "ಒಟ್ಟು ಬಾಕಿ",
    activeB2CWallets: "ಸಕ್ರಿಯ B2C ವ್ಯಾಲೆಟ್‌ಗಳು",
    activeB2BWallets: "ಸಕ್ರಿಯ B2B ವ್ಯಾಲೆಟ್‌ಗಳು",
    b2cManagement: "B2C ನಿರ್ವಹಣೆ",
    b2bManagement: "B2B ನಿರ್ವಹಣೆ",
    kycVerification: "KYC ಪರಿಶೀಲನೆ",
    analytics: "ಅನಾಲಿಟಿಕ್ಸ್",
    statements: "ಹೇಳಿಕೆಗಳು",

    searchCustomer: "ಗ್ರಾಹಕರ ಹೆಸರು ಅಥವಾ ಫೋನ್ ಹುಡುಕಿ...",
    searchRetailer: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಹೆಸರು ಅಥವಾ ಫೋನ್ ಹುಡುಕಿ...",
    allStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
    active: "ಸಕ್ರಿಯ",
    paused: "ವಿರಾಮಗೊಳಿಸಲಾಗಿದೆ",
    stopped: "ನಿಲ್ಲಿಸಲಾಗಿದೆ",
    customer: "ಗ್ರಾಹಕ",
    retailer: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ",
    kycStatus: "KYC ಸ್ಥಿತಿ",
    walletStatus: "ವ್ಯಾಲೆಟ್ ಸ್ಥಿತಿ",
    creditLimit: "ಕ್ರೆಡಿಟ್ ಮಿತಿ",
    outstandingBalance: "ಬಾಕಿ ಉಳಿದ ಮೊತ್ತ",
    actions: "ಕ್ರಿಯೆಗಳು",
    setLimit: "ಮಿತಿ ನಿಗದಿಪಡಿಸಿ",
    viewStatement: "ಹೇಳಿಕೆ ವೀಕ್ಷಿಸಿ",
    verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    pending: "ಬಾಕಿ ಇದೆ",
    notSubmitted: "ಸಲ್ಲಿಸಲಾಗಿಲ್ಲ",
    priyaSharma: "ಪ್ರಿಯಾ ಶರ್ಮಾ",
    rajeshKumar: "ರಾಜೇಶ್ ಕುಮಾರ್",
    greenValley: "ಗ್ರೀನ್ ವ್ಯಾಲಿ ಸ್ಟೋರ್",
    freshMarket: "ಫ್ರೆಶ್ ಮಾರ್ಕೆಟ್ ಹಬ್",

    setPayLaterLimit: "ಪೇ ಲೇಟರ್ ಮಿತಿ ನಿಗದಿಪಡಿಸಿ",
    setForCustomer: "ಗ್ರಾಹಕರಿಗೆ ಕ್ರೆಡಿಟ್ ಮಿತಿ ಮತ್ತು ಮಾನ್ಯತೆ ನಿಗದಿಪಡಿಸಿ",
    limitAmount: "ಮಿತಿ ಮೊತ್ತ (₹)",
    enterLimit: "ಮಿತಿ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ",
    validityPeriod: "ಮಾನ್ಯತಾ ಅವಧಿ",
    days30: "30 ದಿನಗಳು",
    days90: "90 ದಿನಗಳು",
    days365: "365 ದಿನಗಳು",
    unlimited: "ಅನಿಯಮಿತ",
    cancel: "ರದ್ದುಮಾಡಿ",
    updateLimit: "ಮಿತಿ ನವೀಕರಿಸಿ",
    activateWallet: "ವ್ಯಾಲೆಟ್ ಸಕ್ರಿಯಗೊಳಿಸಿ",

    kycPendingRequests: "KYC ಬಾಕಿ ವಿನಂತಿಗಳು",
    review: "ವಿಮರ್ಶೆ",
    submittedOn: "ಸಲ್ಲಿಸಿದ ದಿನಾಂಕ",
    customerType: "ಗ್ರಾಹಕರ ಪ್ರಕಾರ",
    b2c: "B2C",
    b2b: "B2B",

    kycReviewFor: "KYC ವಿಮರ್ಶೆ",
    submittedDocs: "ಸಲ್ಲಿಸಿದ ದಾಖಲೆಗಳು",
    aadharCard: "ಆಧಾರ್ ಕಾರ್ಡ್",
    panCard: "ಪ್ಯಾನ್ ಕಾರ್ಡ್",
    viewDoc: "ಡಾಕ್ಯುಮೆಂಟ್ ವೀಕ್ಷಿಸಿ",
    rejectionReason: "ತಿರಸ್ಕರಿಸುವ કારણ (ಇದ್ದರೆ)",
    reject: "ತಿರಸ್ಕರಿಸಿ",
    approve: "ಅನುಮೋದಿಸಿ",

    payLaterStatement: "ಪೇ ಲೇಟರ್ ಹೇಳಿಕೆ",
    allCustomers: "ಎಲ್ಲಾ ಗ್ರಾಹಕರು",
    allRetailers: "ಎಲ್ಲಾ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು",
    searchByID: "ಗ್ರಾಹಕ/ಆರ್ಡರ್ ಐಡಿ ಮೂಲಕ ಹುಡುಕಿ...",
    date: "ದಿನಾಂಕ",
    debit: "ಡೆಬಿಟ್",
    credit: "ಕ್ರೆಡಿಟ್",
    balance: "ಬಾಕಿ",
    purchaseOrder: "ಖರೀದಿ - ಆರ್ಡರ್ #",
    paymentReceived: "ಪಾವತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",

    creditAnalytics: "ಕ್ರೆಡಿಟ್ ಅನಾಲಿಟಿಕ್ಸ್",
    totalVsOutstanding: "ಒಟ್ಟು ಮಿತಿ vs ಬಾಕಿ ಉಳಿದ ಮೊತ್ತ",
    b2cUtilization: "B2C ಬಳಕೆ",
    b2bUtilization: "B2B ಬಳಕೆ",
    overdueBalances: "ಮಿತಿಮೀರಿದ ಬಾಕಿಗಳು",
    walletsPastDue: "{count} ವ್ಯಾಲೆಟ್‌ಗಳು ಅವಧಿ ಮೀರಿವೆ",
    totalOverdue: "ಒಟ್ಟು ಮಿತಿಮೀರಿದೆ",
    newActivations: "ಹೊಸ ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆಗಳು (ಕಳೆದ 30 ದಿನಗಳು)",
    newB2C: "ಹೊಸ B2C ವ್ಯಾಲೆಟ್‌ಗಳು",
    newB2B: "ಹೊಸ B2B ವ್ಯಾಲೆಟ್‌ಗಳು",
    paymentCycle: "ಸರಾಸರಿ ಪಾವತಿ ಚಕ್ರ",
    avgDaysToPay: "ಪಾವತಿಸಲು ಸರಾಸರಿ ದಿನಗಳು",
    avgB2C: "ಸರಾಸರಿ B2C",
    avgB2B: "ಸರಾಸರಿ B2B",
  },
  te: {
    pageTitle: "పే లేటర్ వాలెట్ మాన్యువల్",
    backToManual: "మాన్యువల్‌కు తిరిగి వెళ్ళు",
    description: "B2C మరియు B2B కస్టమర్‌ల కోసం పే లేటర్ క్రెడిట్ సిస్టమ్‌ను నిర్వహించడానికి సమగ్ర గైడ్, వాలెట్ యాక్టివేషన్, పరిమితి సెట్టింగ్, KYC ధృవీకరణ, చెల్లింపు ట్రాకింగ్ మరియు ఆర్థిక విశ్లేషణలతో సహా.",
    step1Title: "పే లేటర్ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "పే లేటర్ డాష్‌బోర్డ్ అన్ని క్రెడిట్-సంబంధిత కార్యకలాపాలను నిర్వహించడానికి కేంద్ర కేంద్రం. ఇది కీలక పనితీరు సూచికలను (KPIs), కస్టమర్ మరియు రిటైలర్ వాలెట్ నిర్వహణకు ప్రాప్యత మరియు ఆర్థిక పర్యవేక్షణ సాధనాలను అందిస్తుంది.",
    step2Title: "B2C వాలెట్ నిర్వహణ",
    step2Intro: "ఈ విభాగం వ్యక్తిగత B2C కస్టమర్ల కోసం పే లేటర్ సేవలను నిర్వహించడంపై దృష్టి పెడుతుంది. మీరు వాలెట్లను యాక్టివేట్ చేయవచ్చు, క్రెడిట్ పరిమితులను సెట్ చేయవచ్చు, బ్యాలెన్స్‌లను పర్యవేక్షించవచ్చు మరియు ప్రతి కస్టమర్ చెల్లింపు చరిత్రను ట్రాక్ చేయవచ్చు.",
    step3Title: "B2B వాలెట్ నిర్వహణ",
    step3Intro: "అదేవిధంగా, ఈ విభాగం మీ B2B రిటైల్ భాగస్వాముల కోసం పే లేటర్ సేవల నిర్వహణను కవర్ చేస్తుంది, పెద్ద మరియు తరచుగా ఆర్డర్‌లను సులభతరం చేయడానికి వారికి క్రెడిట్ లైన్ అందించడానికి మిమ్మల్ని అనుమతిస్తుంది.",
    step4Title: "KYC ధృవీకరణ ప్రక్రియ",
    step4Intro: "పే లేటర్ సేవలను యాక్టివేట్ చేయడానికి మీ కస్టమర్‌ను తెలుసుకోండి (KYC) తప్పనిసరి దశ. ఈ ప్రక్రియ మీరు ధృవీకరించబడిన వ్యక్తులు మరియు వ్యాపారాలకు క్రెడిట్ విస్తరిస్తున్నారని నిర్ధారిస్తుంది, ప్రమాదాన్ని తగ్గిస్తుంది.",
    step5Title: "స్టేట్‌మెంట్ & చెల్లింపు ట్రాకింగ్",
    step5Intro: "ఈ విభాగం పూర్తి ఆర్థిక పారదర్శకతను అనుమతిస్తుంది. మీరు ప్రతి వాలెట్ కోసం వివరణాత్మక లావాదేవీ స్టేట్‌మెంట్‌లను వీక్షించవచ్చు మరియు ఖాతాలను సరిచేయడానికి ఆఫ్‌లైన్ చెల్లింపులను మాన్యువల్‌గా రికార్డ్ చేయవచ్చు.",
    step6Title: "పే లేటర్ అనలిటిక్స్",
    step6Intro: "అనలిటిక్స్ ట్యాబ్ మీ పే లేటర్ ప్రోగ్రామ్ పనితీరు మరియు ఆరోగ్యంపై కీలకమైన అంతర్దృష్టులను అందిస్తుంది, క్రెడిట్ విధానాలు మరియు ప్రమాద నిర్వహణ గురించి డేటా-ఆధారిత నిర్ణయాలు తీసుకోవడంలో మీకు సహాయపడుతుంది.",
    nextStepsTitle: "పే లేటర్ నిర్వహణ పూర్తయింది!",
    nextStepsDescription: "మీ పే లేటర్ సిస్టమ్‌ను నిర్వహించిన తర్వాత, మీ అన్ని కార్యాచరణ ఖర్చులను ట్రాక్ చేయడానికి మరియు నియంత్రించడానికి మీరు ఇప్పుడు ఖర్చు నిర్వహణకు వెళ్లవచ్చు.",
    nextStepsButton: "ఖర్చు నిర్వహణకు కొనసాగండి",

    dashboardTitle: "పే లేటర్ వాలెట్ డాష్‌బోర్డ్",
    dashboardDesc: "B2C మరియు B2B కస్టమర్‌ల కోసం క్రెడిట్ పరిమితులు, KYC, మరియు చెల్లింపులను నిర్వహించండి.",
    recordB2CPayment: "B2C చెల్లింపు రికార్డ్ చేయండి",
    recordB2BPayment: "B2B చెల్లింపు రికార్డ్ చేయండి",
    totalCreditLimit: "మొత్తం క్రెడిట్ పరిమితి",
    totalOutstanding: "మొత్తం బకాయి",
    activeB2CWallets: "క్రియాశీల B2C వాలెట్లు",
    activeB2BWallets: "క్రియాశీల B2B వాలెట్లు",
    b2cManagement: "B2C నిర్వహణ",
    b2bManagement: "B2B నిర్వహణ",
    kycVerification: "KYC ధృవీకరణ",
    analytics: "విశ్లేషణలు",
    statements: "స్టేట్‌మెంట్‌లు",

    searchCustomer: "కస్టమర్ పేరు లేదా ఫోన్ శోధించండి...",
    searchRetailer: "రిటైలర్ పేరు లేదా ఫోన్ శోధించండి...",
    allStatuses: "అన్ని స్థితిలు",
    active: "క్రియాశీల",
    paused: "పాజ్ చేయబడింది",
    stopped: "ఆపివేయబడింది",
    customer: "కస్టమర్",
    retailer: "రిటైలర్",
    kycStatus: "KYC స్థితి",
    walletStatus: "వాలెట్ స్థితి",
    creditLimit: "క్రెడిట్ పరిమితి",
    outstandingBalance: "బకాయి ఉన్న బ్యాలెన్స్",
    actions: "చర్యలు",
    setLimit: "పరిమితిని సెట్ చేయండి",
    viewStatement: "స్టేట్‌మెంట్ వీక్షించండి",
    verified: "ధృవీకరించబడింది",
    pending: "పెండింగ్‌లో ఉంది",
    notSubmitted: "సమర్పించబడలేదు",
    priyaSharma: "ప్రియా శర్మ",
    rajeshKumar: "రాజేష్ కుమార్",
    greenValley: "గ్రీన్ వ్యాలీ స్టోర్",
    freshMarket: "ఫ్రెష్ మార్కెట్ హబ్",

    setPayLaterLimit: "పే లేటర్ పరిమితిని సెట్ చేయండి",
    setForCustomer: "కస్టమర్ కోసం క్రెడిట్ పరిమితి మరియు చెల్లుబాటును సెట్ చేయండి",
    limitAmount: "పరిమితి మొత్తం (₹)",
    enterLimit: "పరిమితి మొత్తాన్ని నమోదు చేయండి",
    validityPeriod: "చెల్లుబాటు కాలం",
    days30: "30 రోజులు",
    days90: "90 రోజులు",
    days365: "365 రోజులు",
    unlimited: "అపరిమిత",
    cancel: "రద్దు చేయండి",
    updateLimit: "పరిమితిని నవీకరించండి",
    activateWallet: "వాలెట్‌ను యాక్టివేట్ చేయండి",

    kycPendingRequests: "KYC పెండింగ్ అభ్యర్థనలు",
    review: "సమీక్ష",
    submittedOn: "సమర్పించిన తేదీ",
    customerType: "కస్టమర్ రకం",
    b2c: "B2C",
    b2b: "B2B",

    kycReviewFor: "కోసం KYC సమీక్ష",
    submittedDocs: "సమర్పించిన పత్రాలు",
    aadharCard: "ఆధార్ కార్డ్",
    panCard: "పాన్ కార్డ్",
    viewDoc: "పత్రాన్ని వీక్షించండి",
    rejectionReason: "తిరస్కరణ కారణం (వర్తిస్తే)",
    reject: "తిరస్కరించండి",
    approve: "ఆమోదించండి",

    payLaterStatement: "పే లేటర్ స్టేట్‌మెంట్",
    allCustomers: "అన్ని కస్టమర్లు",
    allRetailers: "అన్ని రిటైలర్లు",
    searchByID: "కస్టమర్/ఆర్డర్ ID ద్వారా శోధించండి...",
    date: "తేదీ",
    debit: "డెబిట్",
    credit: "క్రెడిట్",
    balance: "బ్యాలెన్స్",
    purchaseOrder: "కొనుగోలు - ఆర్డర్ #",
    paymentReceived: "చెల్లింపు స్వీకరించబడింది",

    creditAnalytics: "క్రెడిట్ విశ్లేషణలు",
    totalVsOutstanding: "మొత్తం పరిమితి vs బకాయి బ్యాలెన్స్",
    b2cUtilization: "B2C వినియోగం",
    b2bUtilization: "B2B వినియోగం",
    overdueBalances: "మీరిన బకాయిలు",
    walletsPastDue: "{count} వాలెట్లు గడువు మీరినవి",
    totalOverdue: "మొత్తం మీరినవి",
    newActivations: "కొత్త యాక్టివేషన్‌లు (గత 30 రోజులు)",
    newB2C: "కొత్త B2C వాలెట్లు",
    newB2B: "కొత్త B2B వాలెట్లు",
    paymentCycle: "సగటు చెల్లింపు చక్రం",
    avgDaysToPay: "చెల్లించడానికి సగటు రోజులు",
    avgB2C: "సగటు B2C",
    avgB2B: "సగటు B2B",
  },
  ta: {
    pageTitle: "பே லேட்டர் வாலட் கையேடு",
    backToManual: "கையேட்டிற்குத் திரும்பு",
    description: "B2C மற்றும் B2B வாடிக்கையாளர்களுக்கான பே லேட்டர் கடன் முறையை நிர்வகிப்பதற்கான விரிவான வழிகாட்டி, வாலட் செயல்படுத்தல், வரம்பு நிர்ணயித்தல், KYC சரிபார்ப்பு, கட்டணக் கண்காணிப்பு மற்றும் நிதிப் பகுப்பாய்வு உட்பட.",
    step1Title: "பே லேட்டர் டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "பே லேட்டர் டாஷ்போர்டு அனைத்து கடன் தொடர்பான நடவடிக்கைகளையும் நிர்வகிப்பதற்கான மைய மையமாகும். இது முக்கிய செயல்திறன் குறிகாட்டிகளை (KPIs), வாடிக்கையாளர் மற்றும் சில்லறை விற்பனையாளர் வாலட் மேலாண்மைக்கான அணுகல் மற்றும் நிதி மேற்பார்வை கருவிகளை வழங்குகிறது.",
    step2Title: "B2C வாலட் மேலாண்மை",
    step2Intro: "இந்த பிரிவு தனிப்பட்ட B2C வாடிக்கையாளர்களுக்கான பே லேட்டர் சேவைகளை நிர்வகிப்பதில் கவனம் செலுத்துகிறது. நீங்கள் வாலெட்டுகளை செயல்படுத்தலாம், கடன் வரம்புகளை அமைக்கலாம், இருப்புகளைக் கண்காணிக்கலாம் மற்றும் ஒவ்வொரு வாடிக்கையாளரின் கட்டண வரலாற்றையும் கண்காணிக்கலாம்.",
    step3Title: "B2B வாலட் மேலாண்மை",
    step3Intro: "இதேபோல், இந்த பிரிவு உங்கள் B2B சில்லறை கூட்டாளர்களுக்கான பே லேட்டர் சேவைகளின் நிர்வாகத்தை உள்ளடக்கியது, பெரிய மற்றும் அடிக்கடி ஆர்டர்களை எளிதாக்க அவர்களுக்கு கடன் வரிசையை வழங்க உங்களை அனுமதிக்கிறது.",
    step4Title: "KYC சரிபார்ப்பு செயல்முறை",
    step4Intro: "பே லேட்டர் சேவைகளை செயல்படுத்துவதற்கு உங்கள் வாடிக்கையாளரை அறிந்து கொள்ளுங்கள் (KYC) ஒரு கட்டாய படியாகும். இந்த செயல்முறை நீங்கள் சரிபார்க்கப்பட்ட தனிநபர்கள் மற்றும் வணிகங்களுக்கு கடன் வழங்குவதை உறுதிசெய்கிறது, ஆபத்தை குறைக்கிறது.",
    step5Title: "அறிக்கை & கட்டண கண்காணிப்பு",
    step5Intro: "இந்த பிரிவு முழுமையான நிதி வெளிப்படைத்தன்மையை அனுமதிக்கிறது. நீங்கள் ஒவ்வொரு வாலெட்டிற்கும் விரிவான பரிவர்த்தனை அறிக்கைகளைப் பார்க்கலாம் மற்றும் கணக்குகளை சரிசெய்ய ஆஃப்லைன் கட்டணங்களை கைமுறையாக பதிவு செய்யலாம்.",
    step6Title: "பே லேட்டர் பகுப்பாய்வு",
    step6Intro: "பகுப்பாய்வு தாவல் உங்கள் பே லேட்டர் திட்டத்தின் செயல்திறன் மற்றும் ஆரோக்கியம் குறித்த முக்கியமான நுண்ணறிவுகளை வழங்குகிறது, கடன் கொள்கைகள் மற்றும் இடர் மேலாண்மை குறித்த தரவு சார்ந்த முடிவுகளை எடுக்க உதவுகிறது.",
    nextStepsTitle: "பே லேட்டர் மேலாண்மை முடிந்தது!",
    nextStepsDescription: "உங்கள் பே லேட்டர் அமைப்பு நிர்வகிக்கப்பட்டவுடன், உங்கள் அனைத்து செயல்பாட்டு செலவுகளையும் கண்காணிக்கவும் கட்டுப்படுத்தவும் இப்போது செலவு மேலாண்மைக்கு செல்லலாம்.",
    nextStepsButton: "செலவு மேலாண்மைக்கு தொடரவும்",

    dashboardTitle: "பே லேட்டர் வாலட் டாஷ்போர்டு",
    dashboardDesc: "B2C மற்றும் B2B வாடிக்கையாளர்களுக்கான கடன் வரம்புகள், KYC, மற்றும் கட்டணங்களை நிர்வகிக்கவும்.",
    recordB2CPayment: "B2C கட்டணத்தைப் பதிவு செய்",
    recordB2BPayment: "B2B கட்டணத்தைப் பதிவு செய்",
    totalCreditLimit: "மொத்த கடன் வரம்பு",
    totalOutstanding: "மொத்த நிலுவை",
    activeB2CWallets: "செயலில் உள்ள B2C வாலெட்டுகள்",
    activeB2BWallets: "செயலில் உள்ள B2B வாலெட்டுகள்",
    b2cManagement: "B2C மேலாண்மை",
    b2bManagement: "B2B மேலாண்மை",
    kycVerification: "KYC சரிபார்ப்பு",
    analytics: "பகுப்பாய்வு",
    statements: "அறிக்கைகள்",

    searchCustomer: "வாடிக்கையாளர் பெயர் அல்லது தொலைபேசியைத் தேடுங்கள்...",
    searchRetailer: "சில்லறை விற்பனையாளர் பெயர் அல்லது தொலைபேசியைத் தேடுங்கள்...",
    allStatuses: "அனைத்து நிலைகளும்",
    active: "செயலில்",
    paused: "இடைநிறுத்தப்பட்டது",
    stopped: "நிறுத்தப்பட்டது",
    customer: "வாடிக்கையாளர்",
    retailer: "சில்லறை விற்பனையாளர்",
    kycStatus: "KYC நிலை",
    walletStatus: "வாலட் நிலை",
    creditLimit: "கடன் வரம்பு",
    outstandingBalance: "நிலுவைத் தொகை",
    actions: "செயல்கள்",
    setLimit: "வரம்பை அமைக்கவும்",
    viewStatement: "அறிக்கையைக் காண்க",
    verified: "சரிபார்க்கப்பட்டது",
    pending: "நிலுவையில்",
    notSubmitted: "சமர்ப்பிக்கப்படவில்லை",
    priyaSharma: "பிரியா சர்மா",
    rajeshKumar: "ராஜேஷ் குமார்",
    greenValley: "கிரீன் வேலி ஸ்டோர்",
    freshMarket: "ஃப்ரெஷ் மார்க்கெட் ஹப்",

    setPayLaterLimit: "பே லேட்டர் வரம்பை அமைக்கவும்",
    setForCustomer: "வாடிக்கையாளருக்கு கடன் வரம்பு மற்றும் செல்லுபடியை அமைக்கவும்",
    limitAmount: "வரம்புத் தொகை (₹)",
    enterLimit: "வரம்புத் தொகையை உள்ளிடவும்",
    validityPeriod: "செல்லுபடியாகும் காலம்",
    days30: "30 நாட்கள்",
    days90: "90 நாட்கள்",
    days365: "365 நாட்கள்",
    unlimited: "வரம்பற்றது",
    cancel: "ரத்து செய்",
    updateLimit: "வரம்பைப் புதுப்பிக்கவும்",
    activateWallet: "வாலெட்டைச் செயல்படுத்தவும்",

    kycPendingRequests: "KYC நிலுவையில் உள்ள கோரிக்கைகள்",
    review: "மதிப்பாய்வு",
    submittedOn: "சமர்ப்பிக்கப்பட்ட தேதி",
    customerType: "வாடிக்கையாளர் வகை",
    b2c: "B2C",
    b2b: "B2B",

    kycReviewFor: "KYC மதிப்பாய்வு",
    submittedDocs: "சமர்ப்பிக்கப்பட்ட ஆவணங்கள்",
    aadharCard: "ஆதார் அட்டை",
    panCard: "பான் கார்டு",
    viewDoc: "ஆவணத்தைக் காண்க",
    rejectionReason: "நிராகரிப்பு காரணம் (பொருந்தினால்)",
    reject: "நிராகரி",
    approve: "ஒப்புதல்",

    payLaterStatement: "பே லேட்டர் அறிக்கை",
    allCustomers: "அனைத்து வாடிக்கையாளர்கள்",
    allRetailers: "அனைத்து சில்லறை விற்பனையாளர்கள்",
    searchByID: "வாடிக்கையாளர்/ஆர்டர் ஐடி மூலம் தேடு...",
    date: "தேதி",
    debit: "பற்று",
    credit: "வரவு",
    balance: "இருப்பு",
    purchaseOrder: "கொள்முதல் - ஆர்டர் #",
    paymentReceived: "கட்டணம் பெறப்பட்டது",

    creditAnalytics: "கடன் பகுப்பாய்வு",
    totalVsOutstanding: "மொத்த வரம்பு vs நிலுவைத் தொகை",
    b2cUtilization: "B2C பயன்பாடு",
    b2bUtilization: "B2B பயன்பாடு",
    overdueBalances: "தாமதமான நிலுவைகள்",
    walletsPastDue: "{count} வாலெட்டுகள் గడువు మీరినవి",
    totalOverdue: "மொத்த தாமதம்",
    newActivations: "புதிய செயல்பாடுகள் (கடைசி 30 நாட்கள்)",
    newB2C: "புதிய B2C வாலெட்டுகள்",
    newB2B: "புதிய B2B வாலெட்டுகள்",
    paymentCycle: "சராசரி கட்டணச் சுழற்சி",
    avgDaysToPay: "செலுத்த சராசரி நாட்கள்",
    avgB2C: "சராசரி B2C",
    avgB2B: "சராசரி B2B",
  },
  hi: {
    pageTitle: "पे लेटर वॉलेट मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "B2C और B2B ग्राहकों के लिए पे लेटर क्रेडिट सिस्टम के प्रबंधन के लिए व्यापक गाइड, जिसमें वॉलेट सक्रियण, सीमा निर्धारण, KYC सत्यापन, भुगतान ट्रैकिंग और वित्तीय विश्लेषण शामिल हैं।",
    step1Title: "पे लेटर डैशबोर्ड अवलोकन",
    step1Intro: "पे लेटर डैशबोर्ड सभी क्रेडिट-संबंधित गतिविधियों के प्रबंधन के लिए केंद्रीय केंद्र है। यह प्रमुख प्रदर्शन संकेतक (KPIs), ग्राहक और खुदरा विक्रेता वॉलेट प्रबंधन तक पहुंच और वित्तीय निरीक्षण उपकरण प्रदान करता है।",
    step2Title: "B2C वॉलेट प्रबंधन",
    step2Intro: "यह अनुभाग व्यक्तिगत B2C ग्राहकों के लिए पे लेटर सेवाओं के प्रबंधन पर केंद्रित है। आप वॉलेट सक्रिय कर सकते हैं, क्रेडिट सीमा निर्धारित कर सकते हैं, शेष राशि की निगरानी कर सकते हैं और प्रत्येक ग्राहक के भुगतान इतिहास को ट्रैक कर सकते हैं।",
    step3Title: "B2B वॉलेट प्रबंधन",
    step3Intro: "इसी तरह, यह अनुभाग आपके B2B खुदरा भागीदारों के लिए पे लेटर सेवाओं के प्रबंधन को कवर करता है, जिससे आप उन्हें बड़े और अधिक लगातार ऑर्डर की सुविधा के लिए क्रेडिट की एक लाइन प्रदान कर सकते हैं।",
    step4Title: "KYC सत्यापन प्रक्रिया",
    step4Intro: "पे लेटर सेवाओं को सक्रिय करने के लिए अपने ग्राहक को जानें (KYC) एक अनिवार्य कदम है। यह प्रक्रिया सुनिश्चित करती है कि आप सत्यापित व्यक्तियों और व्यवसायों को क्रेडिट दे रहे हैं, जिससे जोखिम कम होता है।",
    step5Title: "स्टेटमेंट और भुगतान ट्रैकिंग",
    step5Intro: "यह अनुभाग पूर्ण वित्तीय पारदर्शिता की अनुमति देता है। आप प्रत्येक वॉलेट के लिए विस्तृत लेनदेन विवरण देख सकते हैं और खातों का मिलान करने के लिए ऑफ़लाइन भुगतानों को मैन्युअल रूप से रिकॉर्ड कर सकते हैं।",
    step6Title: "पे लेटर एनालिटिक्स",
    step6Intro: "एनालिटिक्स टैब आपके पे लेटर कार्यक्रम के प्रदर्शन और स्वास्थ्य में महत्वपूर्ण अंतर्दृष्टि प्रदान करता है, जिससे आपको क्रेडिट नीतियों और जोखिम प्रबंधन के बारे में डेटा-संचालित निर्णय लेने में मदद मिलती है।",
    nextStepsTitle: "पे लेटर प्रबंधन पूर्ण!",
    nextStepsDescription: "अपने पे लेटर सिस्टम के प्रबंधन के साथ, अब आप अपने सभी परिचालन लागतों को ट्रैक और नियंत्रित करने के लिए व्यय प्रबंधन पर जा सकते हैं।",
    nextStepsButton: "व्यय प्रबंधन पर जाएं",

    dashboardTitle: "पे लेटर वॉलेट डैशबोर्ड",
    dashboardDesc: "B2C और B2B ग्राहकों के लिए क्रेडिट सीमा, KYC और भुगतान प्रबंधित करें।",
    recordB2CPayment: "B2C भुगतान रिकॉर्ड करें",
    recordB2BPayment: "B2B भुगतान रिकॉर्ड करें",
    totalCreditLimit: "कुल क्रेडिट सीमा",
    totalOutstanding: "कुल बकाया",
    activeB2CWallets: "सक्रिय B2C वॉलेट",
    activeB2BWallets: "सक्रिय B2B वॉलेट",
    b2cManagement: "B2C प्रबंधन",
    b2bManagement: "B2B प्रबंधन",
    kycVerification: "KYC सत्यापन",
    analytics: "एनालिटिक्स",
    statements: "स्टेटमेंट्स",

    searchCustomer: "ग्राहक का नाम या फोन खोजें...",
    searchRetailer: "खुदरा विक्रेता का नाम या फोन खोजें...",
    allStatuses: "सभी स्थितियाँ",
    active: "सक्रिय",
    paused: "रोका गया",
    stopped: "बंद",
    customer: "ग्राहक",
    retailer: "खुदरा विक्रेता",
    kycStatus: "KYC स्थिति",
    walletStatus: "वॉलेट स्थिति",
    creditLimit: "क्रेडिट सीमा",
    outstandingBalance: "बकाया शेष",
    actions: "कार्रवाइयाँ",
    setLimit: "सीमा निर्धारित करें",
    viewStatement: "स्टेटमेंट देखें",
    verified: "सत्यापित",
    pending: "लंबित",
    notSubmitted: "जमा नहीं किया गया",
    priyaSharma: "प्रिया शर्मा",
    rajeshKumar: "राजेश कुमार",
    greenValley: "ग्रीन वैली स्टोर",
    freshMarket: "फ्रेश मार्केट हब",

    setPayLaterLimit: "पे लेटर सीमा निर्धारित करें",
    setForCustomer: "के लिए क्रेडिट सीमा और वैधता निर्धारित करें",
    limitAmount: "सीमा राशि (₹)",
    enterLimit: "सीमा राशि दर्ज करें",
    validityPeriod: "वैधता अवधि",
    days30: "30 दिन",
    days90: "90 दिन",
    days365: "365 दिन",
    unlimited: "असीमित",
    cancel: "रद्द करें",
    updateLimit: "सीमा अपडेट करें",
    activateWallet: "वॉलेट सक्रिय करें",

    kycPendingRequests: "KYC लंबित अनुरोध",
    review: "समीक्षा करें",
    submittedOn: "जमा करने की तारीख",
    customerType: "ग्राहक प्रकार",
    b2c: "B2C",
    b2b: "B2B",

    kycReviewFor: "के लिए KYC समीक्षा",
    submittedDocs: "जमा किए गए दस्तावेज़",
    aadharCard: "आधार कार्ड",
    panCard: "पैन कार्ड",
    viewDoc: "दस्तावेज़ देखें",
    rejectionReason: "अस्वीकृति का कारण (यदि लागू हो)",
    reject: "अस्वीकार करें",
    approve: "स्वीकृत करें",

    payLaterStatement: "पे लेटर स्टेटमेंट",
    allCustomers: "सभी ग्राहक",
    allRetailers: "सभी खुदरा विक्रेता",
    searchByID: "ग्राहक/ऑर्डर आईडी द्वारा खोजें...",
    date: "दिनांक",
    debit: "डेबिट",
    credit: "क्रेडिट",
    balance: "शेष",
    purchaseOrder: "खरीद - ऑर्डर #",
    paymentReceived: "भुगतान प्राप्त हुआ",

    creditAnalytics: "क्रेडिट एनालिटिक्स",
    totalVsOutstanding: "कुल सीमा बनाम बकाया शेष",
    b2cUtilization: "B2C उपयोग",
    b2bUtilization: "B2B उपयोग",
    overdueBalances: "अतिदेय शेष",
    walletsPastDue: "{count} वॉलेट अतिदेय",
    totalOverdue: "कुल अतिदेय",
    newActivations: "नई सक्रियताएँ (पिछले 30 दिन)",
    newB2C: "नई B2C वॉलेट",
    newB2B: "नई B2B वॉलेट",
    paymentCycle: "औसत भुगतान चक्र",
    avgDaysToPay: "भुगतान के लिए औसत दिन",
    avgB2C: "औसत B2C",
    avgB2B: "औसत B2B",
  },
  ml: {
    pageTitle: "പേ ലേറ്റർ വാലറ്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "B2C, B2B ഉപഭോക്താക്കൾക്കായുള്ള പേ ലേറ്റർ ക്രെഡിറ്റ് സിസ്റ്റം കൈകാര്യം ചെയ്യുന്നതിനുള്ള സമഗ്രമായ ഗൈഡ്, വാലറ്റ് ആക്റ്റിവേഷൻ, പരിധി നിശ്ചയിക്കൽ, KYC സ്ഥിരീകരണം, പേയ്‌മെന്റ് ട്രാക്കിംഗ്, സാമ്പത്തിക വിശകലനം എന്നിവ ഉൾപ്പെടെ.",
    step1Title: "പേ ലേറ്റർ ഡാഷ്‌ബോർഡ് അവലോകനം",
    step1Intro: "എല്ലാ ക്രെഡിറ്റ് സംബന്ധമായ പ്രവർത്തനങ്ങളും കൈകാര്യം ചെയ്യുന്നതിനുള്ള കേന്ദ്രമാണ് പേ ലേറ്റർ ഡാഷ്‌ബോർഡ്. ഇത് പ്രധാന പ്രകടന സൂചകങ്ങൾ (KPIs), ഉപഭോക്തൃ, റീട്ടെയിലർ വാലറ്റ് മാനേജ്‌മെന്റിലേക്കുള്ള പ്രവേശനം, സാമ്പത്തിക മേൽനോട്ട ഉപകരണങ്ങൾ എന്നിവ നൽകുന്നു.",
    step2Title: "B2C വാലറ്റ് മാനേജ്മെന്റ്",
    step2Intro: "ഈ വിഭാഗം വ്യക്തിഗത B2C ഉപഭോക്താക്കൾക്കായി പേ ലേറ്റർ സേവനങ്ങൾ കൈകാര്യം ചെയ്യുന്നതിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു. നിങ്ങൾക്ക് വാലറ്റുകൾ സജീവമാക്കാം, ക്രെഡിറ്റ് പരിധികൾ നിശ്ചയിക്കാം, ബാലൻസുകൾ നിരീക്ഷിക്കാം, ഓരോ ഉപഭോക്താവിന്റെയും പേയ്‌മെന്റ് ചരിത്രം ട്രാക്ക് ചെയ്യാം.",
    step3Title: "B2B വാലറ്റ് മാനേജ്മെന്റ്",
    step3Intro: "അതുപോലെ, ഈ വിഭാഗം നിങ്ങളുടെ B2B റീട്ടെയിൽ പങ്കാളികൾക്കായി പേ ലേറ്റർ സേവനങ്ങളുടെ മാനേജ്മെന്റ് ഉൾക്കൊള്ളുന്നു, വലുതും കൂടുതൽ പതിവായതുമായ ഓർഡറുകൾ സുഗമമാക്കുന്നതിന് അവർക്ക് ഒരു ക്രെഡിറ്റ് ലൈൻ വാഗ്ദാനം ചെയ്യാൻ നിങ്ങളെ അനുവദിക്കുന്നു.",
    step4Title: "KYC സ്ഥിരീകരണ പ്രക്രിയ",
    step4Intro: "പേ ലേറ്റർ സേവനങ്ങൾ സജീവമാക്കുന്നതിന് നിങ്ങളുടെ ഉപഭോക്താവിനെ അറിയുക (KYC) ഒരു നിർബന്ധിത ഘട്ടമാണ്. ഈ പ്രക്രിയ നിങ്ങൾ സ്ഥിരീകരിച്ച വ്യക്തികൾക്കും ബിസിനസുകൾക്കും ക്രെഡിറ്റ് നൽകുന്നുവെന്ന് ഉറപ്പാക്കുന്നു, അപകടസാധ്യത കുറയ്ക്കുന്നു.",
    step5Title: "സ്റ്റേറ്റ്മെന്റ് & പേയ്മെന്റ് ട്രാക്കിംഗ്",
    step5Intro: "ഈ വിഭാഗം പൂർണ്ണമായ സാമ്പത്തിക സുതാര്യത അനുവദിക്കുന്നു. ഓരോ വാലറ്റിനും നിങ്ങൾക്ക് വിശദമായ ഇടപാട് സ്റ്റേറ്റ്മെന്റുകൾ കാണാനും അക്കൗണ്ടുകൾ சரிசெய்ய ഓഫ്‌ലൈൻ പേയ്‌മെന്റുകൾ നേരിട്ട് രേഖപ്പെടുത്താനും കഴിയും.",
    step6Title: "പേ ലേറ്റർ അനലിറ്റിക്സ്",
    step6Intro: "അനലിറ്റിക്സ് ടാബ് നിങ്ങളുടെ പേ ലേറ്റർ പ്രോഗ്രാമിന്റെ പ്രകടനത്തെയും ആരോഗ്യത്തെയും കുറിച്ചുള്ള നിർണായക ഉൾക്കാഴ്ചകൾ നൽകുന്നു, ക്രെഡിറ്റ് നയങ്ങളെയും റിസ്ക് മാനേജ്മെന്റിനെയും കുറിച്ച് ഡാറ്റാ-ഡ്രൈവുചെയ്ത തീരുമാനങ്ങൾ എടുക്കാൻ നിങ്ങളെ സഹായിക്കുന്നു.",
    nextStepsTitle: "പേ ലേറ്റർ മാനേജ്മെന്റ് പൂർത്തിയായി!",
    nextStepsDescription: "നിങ്ങളുടെ പേ ലേറ്റർ സിസ്റ്റം നിയന്ത്രിച്ചുകഴിഞ്ഞാൽ, നിങ്ങളുടെ എല്ലാ പ്രവർത്തന ചെലവുകളും ട്രാക്ക് ചെയ്യാനും നിയന്ത്രിക്കാനും നിങ്ങൾക്ക് ഇപ്പോൾ ചെലവ് മാനേജ്മെന്റിലേക്ക് പോകാം.",
    nextStepsButton: "ചെലവ് മാനേജ്മെന്റിലേക്ക് തുടരുക",

    dashboardTitle: "പേ ലേറ്റർ വാലറ്റ് ഡാഷ്ബോർഡ്",
    dashboardDesc: "B2C, B2B ഉപഭോക്താക്കൾക്കായി ക്രെഡിറ്റ് പരിധികൾ, KYC, പേയ്‌മെന്റുകൾ എന്നിവ നിയന്ത്രിക്കുക.",
    recordB2CPayment: "B2C പേയ്‌മെന്റ് രേഖപ്പെടുത്തുക",
    recordB2BPayment: "B2B പേയ്‌മെന്റ് രേഖപ്പെടുത്തുക",
    totalCreditLimit: "மொத்த ക്രെഡിറ്റ് പരിധി",
    totalOutstanding: "மொத்த കുടിശ്ശിക",
    activeB2CWallets: "സജീവമായ B2C വാലറ്റുകൾ",
    activeB2BWallets: "സജീവമായ B2B വാലറ്റുകൾ",
    b2cManagement: "B2C മാനേജ്മെന്റ്",
    b2bManagement: "B2B മാനേജ്മെന്റ്",
    kycVerification: "KYC സ്ഥിരീകരണം",
    analytics: "വിശകലനങ്ങൾ",
    statements: "പ്രസ്താവനകൾ",

    searchCustomer: "ഉപഭോക്താവിന്റെ പേരോ ഫോണോ തിരയുക...",
    searchRetailer: "റീട്ടെയിലറുടെ പേരോ ഫോണോ തിരയുക...",
    allStatuses: "എല്ലാ സ്റ്റാറ്റസുകളും",
    active: "സജീവം",
    paused: "താൽക്കാലികമായി നിർത്തി",
    stopped: "നിർത്തി",
    customer: "ഉപഭോക്താവ്",
    retailer: "റീട്ടെയിലർ",
    kycStatus: "KYC സ്റ്റാറ്റസ്",
    walletStatus: "വാലറ്റ് സ്റ്റാറ്റസ്",
    creditLimit: "ക്രെഡിറ്റ് പരിധി",
    outstandingBalance: "കുടിശ്ശിക ബാലൻസ്",
    actions: "പ്രവർത്തനങ്ങൾ",
    setLimit: "പരിധി നിശ്ചയിക്കുക",
    viewStatement: "പ്രസ്താവന കാണുക",
    verified: "സ്ഥിരീകരിച്ചു",
    pending: "തീരുമാനമാകാത്തത്",
    notSubmitted: "സമർപ്പിച്ചിട്ടില്ല",
    priyaSharma: "പ്രിയ ശർമ്മ",
    rajeshKumar: "രാജേഷ് കുമാർ",
    greenValley: "ഗ്രീൻ വാലി സ്റ്റോർ",
    freshMarket: "ഫ്രഷ് മാർക്കറ്റ് ഹബ്",

    setPayLaterLimit: "പേ ലേറ്റർ പരിധി നിശ്ചയിക്കുക",
    setForCustomer: "ഉപഭോക്താവിനായി ക്രെഡിറ്റ് പരിധിയും സാധുതയും നിശ്ചയിക്കുക",
    limitAmount: "പരിധി തുക (₹)",
    enterLimit: "പരിധി തുക നൽകുക",
    validityPeriod: "സാധുത കാലയളവ്",
    days30: "30 ദിവസം",
    days90: "90 ദിവസം",
    days365: "365 ദിവസം",
    unlimited: "അപരിമിതം",
    cancel: "റദ്ദാക്കുക",
    updateLimit: "പരിധി അപ്ഡേറ്റ് ചെയ്യുക",
    activateWallet: "വാലറ്റ് സജീവമാക്കുക",

    kycPendingRequests: "KYC തീർപ്പാക്കാത്ത അഭ്യർത്ഥനകൾ",
    review: "അവലോകനം",
    submittedOn: "സമർപ്പിച്ച തീയതി",
    customerType: "ഉപഭോക്തൃ തരം",
    b2c: "B2C",
    b2b: "B2B",

    kycReviewFor: "కోసం KYC సమీక్ష",
    submittedDocs: "സമർപ്പിച്ച രേഖകൾ",
    aadharCard: "ആധാർ കാർഡ്",
    panCard: "പാൻ കാർഡ്",
    viewDoc: "രേഖ കാണുക",
    rejectionReason: "നിരസിക്കാനുള്ള കാരണം (ബാധകമെങ്കിൽ)",
    reject: "നിരസിക്കുക",
    approve: "അംഗീകരിക്കുക",

    payLaterStatement: "പേ ലേറ്റർ സ്റ്റേറ്റ്മെന്റ്",
    allCustomers: "എല്ലാ ഉപഭോക്താക്കളും",
    allRetailers: "എല്ലാ റീട്ടെയിലർമാരും",
    searchByID: "ഉപഭോക്താവ്/ഓർഡർ ഐഡി ഉപയോഗിച്ച് തിരയുക...",
    date: "തീയതി",
    debit: "ഡെബിറ്റ്",
    credit: "ക്രെഡിറ്റ്",
    balance: "ബാലൻസ്",
    purchaseOrder: "വാങ്ങൽ - ഓർഡർ #",
    paymentReceived: "പേയ്മെന്റ് ലഭിച്ചു",

    creditAnalytics: "ക്രെഡിറ്റ് വിശകലനങ്ങൾ",
    totalVsOutstanding: "மொத்த പരിധി vs കുടിശ്ശിക ബാലൻസ്",
    b2cUtilization: "B2C ഉപയോഗം",
    b2bUtilization: "B2B ഉപയോഗം",
    overdueBalances: "കാലഹരണപ്പെട്ട കുടിശ്ശികകൾ",
    walletsPastDue: "{count} வாலெட்டുകൾ గడువు మీరినవి",
    totalOverdue: "மொத்த കാലഹരണപ്പെട്ടത്",
    newActivations: "പുതിയ ആക്റ്റിവേഷനുകൾ (കഴിഞ്ഞ 30 ദിവസം)",
    newB2C: "പുതിയ B2C വാലറ്റുകൾ",
    newB2B: "പുതിയ B2B വാലറ്റുകൾ",
    paymentCycle: "சராசரி പേയ്മെന്റ് സൈക്കിൾ",
    avgDaysToPay: "செலுத்த சராசரி ദിവസങ്ങൾ",
    avgB2C: "சராசரி B2C",
    avgB2B: "சராசரி B2B",
  }
};

export default function ManualPayLater() {
  const [language] = useManualLanguage();
  
  const t = (key, variables = {}) => {
    let translation = translations[language]?.[key] || translations['en']?.[key] || key;
    // Replace placeholders like {count}
    for (const varName in variables) {
      translation = translation.replace(new RegExp(`\\{${varName}\\}`, 'g'), variables[varName]);
    }
    return translation;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link to={createPageUrl('Manual')}>
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToManual')}
            </Button>
          </Link>
          <LanguageSelector language={language} setLanguage={() => {}} readOnly />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Wallet className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-10">
              {/* Step 1: Dashboard Overview */}
              <Step number="1" title={t('step1Title')}>
                <p>{t('step1Intro')}</p>
                <Screenshot title={t('dashboardTitle')}>
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                          <Wallet className="w-6 h-6 text-sky-600" /> {t('dashboardTitle')}
                        </h2>
                        <p className="text-slate-500 mt-1">{t('dashboardDesc')}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-2" />{t('recordB2CPayment')}</Button>
                        <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-2" />{t('recordB2BPayment')}</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Card><CardHeader><CardTitle className="text-sm font-medium text-slate-500">{t('totalCreditLimit')}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">₹12.5L</p></CardContent></Card>
                      <Card><CardHeader><CardTitle className="text-sm font-medium text-slate-500">{t('totalOutstanding')}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold text-red-600">₹4.8L</p></CardContent></Card>
                      <Card><CardHeader><CardTitle className="text-sm font-medium text-slate-500">{t('activeB2CWallets')}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">245</p></CardContent></Card>
                      <Card><CardHeader><CardTitle className="text-sm font-medium text-slate-500">{t('activeB2BWallets')}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">58</p></CardContent></Card>
                    </div>
                    <div className="border rounded-lg bg-white">
                      <div className="flex space-x-1 bg-slate-100 p-1 rounded-t-lg border-b">
                        <button className="px-3 py-1.5 bg-white rounded-md shadow-sm text-sm font-medium flex items-center gap-2"><Users className="w-4 h-4 text-orange-600"/>{t('b2cManagement')}</button>
                        <button className="px-3 py-1.5 text-slate-600 text-sm font-medium flex items-center gap-2"><Building2 className="w-4 h-4 text-blue-600"/>{t('b2bManagement')}</button>
                        <button className="px-3 py-1.5 text-slate-600 text-sm font-medium flex items-center gap-2"><UserCheck className="w-4 h-4 text-green-600"/>{t('kycVerification')}</button>
                        <button className="px-3 py-1.5 text-slate-600 text-sm font-medium flex items-center gap-2"><BarChart3 className="w-4 h-4 text-purple-600"/>{t('analytics')}</button>
                        <button className="px-3 py-1.5 text-slate-600 text-sm font-medium flex items-center gap-2"><FileText className="w-4 h-4 text-indigo-600"/>{t('statements')}</button>
                      </div>
                      <div className="p-4"><p className="text-sm text-slate-500">The dashboard is organized into tabs for managing different aspects of the Pay Later system.</p></div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              {/* Step 2: B2C Wallet Management */}
              <Step number="2" title={t('step2Title')}>
                <p>{t('step2Intro')}</p>
                <Screenshot title={`${t('b2cManagement')} - ${t('customer')} ${t('list')}`}>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="relative flex-grow">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <Input placeholder={t('searchCustomer')} className="pl-10"/>
                      </div>
                      <select className="border rounded-md px-3 py-2 text-sm bg-white"><option>{t('allStatuses')}</option><option>{t('active')}</option><option>{t('paused')}</option><option>{t('stopped')}</option></select>
                    </div>
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="min-w-full text-sm">
                        <thead className="bg-slate-50"><tr className="border-b"><th className="p-2 text-left">{t('customer')}</th><th className="p-2 text-left">{t('kycStatus')}</th><th className="p-2 text-left">{t('walletStatus')}</th><th className="p-2 text-left">{t('creditLimit')}</th><th className="p-2 text-left">{t('outstandingBalance')}</th><th className="p-2 text-right">{t('actions')}</th></tr></thead>
                        <tbody>
                          <tr className="border-b"><td className="p-2 font-medium">{t('priyaSharma')}</td><td className="p-2"><Badge className="bg-green-100 text-green-800">{t('verified')}</Badge></td><td className="p-2"><Badge className="bg-green-100 text-green-800">{t('active')}</Badge></td><td className="p-2">₹5,000</td><td className="p-2 text-red-600">₹1,500</td><td className="p-2 flex justify-end gap-1"><Button variant="outline" size="xs">{t('setLimit')}</Button><Button variant="ghost" size="xs">{t('viewStatement')}</Button></td></tr>
                          <tr className="border-b"><td className="p-2 font-medium">{t('rajeshKumar')}</td><td className="p-2"><Badge className="bg-yellow-100 text-yellow-800">{t('pending')}</Badge></td><td className="p-2"><Badge className="bg-gray-100 text-gray-800">{t('stopped')}</Badge></td><td className="p-2">₹0</td><td className="p-2">₹0</td><td className="p-2 flex justify-end gap-1"><Button variant="outline" size="xs">{t('setLimit')}</Button><Button variant="ghost" size="xs">{t('viewStatement')}</Button></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Screenshot>
                <Screenshot title={`${t('setLimit')} Modal`}>
                  <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-xl">
                    <h3 className="text-lg font-bold">{t('setPayLaterLimit')}</h3>
                    <p className="text-sm text-slate-500 mt-1">{t('setForCustomer')} <strong>{t('priyaSharma')}</strong></p>
                    <div className="space-y-4 mt-6">
                      <div><label className="text-sm font-medium">{t('limitAmount')}</label><Input placeholder={t('enterLimit')} defaultValue="5000" /></div>
                      <div><label className="text-sm font-medium">{t('validityPeriod')}</label><select className="w-full border rounded-md p-2 bg-white"><option>{t('days30')}</option><option>{t('days90')}</option><option>{t('days365')}</option><option>{t('unlimited')}</option></select></div>
                      <div className="flex justify-end gap-2 pt-2"><Button variant="outline">{t('cancel')}</Button><Button className="bg-sky-600 hover:bg-sky-700">{t('updateLimit')}</Button></div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              {/* Step 3: B2B Wallet Management */}
              <Step number="3" title={t('step3Title')}>
                <p>{t('step3Intro')}</p>
                 <Screenshot title={`${t('b2bManagement')} - ${t('retailer')} ${t('list')}`}>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="relative flex-grow">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <Input placeholder={t('searchRetailer')} className="pl-10"/>
                      </div>
                      <select className="border rounded-md px-3 py-2 text-sm bg-white"><option>{t('allStatuses')}</option><option>{t('active')}</option><option>{t('paused')}</option><option>{t('stopped')}</option></select>
                    </div>
                    <div className="overflow-x-auto border rounded-lg">
                      <table className="min-w-full text-sm">
                        <thead className="bg-slate-50"><tr className="border-b"><th className="p-2 text-left">{t('retailer')}</th><th className="p-2 text-left">{t('kycStatus')}</th><th className="p-2 text-left">{t('walletStatus')}</th><th className="p-2 text-left">{t('creditLimit')}</th><th className="p-2 text-left">{t('outstandingBalance')}</th><th className="p-2 text-right">{t('actions')}</th></tr></thead>
                        <tbody>
                          <tr className="border-b"><td className="p-2 font-medium">{t('greenValley')}</td><td className="p-2"><Badge className="bg-green-100 text-green-800">{t('verified')}</Badge></td><td className="p-2"><Badge className="bg-green-100 text-green-800">{t('active')}</Badge></td><td className="p-2">₹50,000</td><td className="p-2 text-red-600">₹12,400</td><td className="p-2 flex justify-end gap-1"><Button variant="outline" size="xs">{t('setLimit')}</Button><Button variant="ghost" size="xs">{t('viewStatement')}</Button></td></tr>
                          <tr className="border-b"><td className="p-2 font-medium">{t('freshMarket')}</td><td className="p-2"><Badge className="bg-red-100 text-red-800">{t('notSubmitted')}</Badge></td><td className="p-2"><Badge className="bg-gray-100 text-gray-800">{t('stopped')}</Badge></td><td className="p-2">₹0</td><td className="p-2">₹0</td><td className="p-2 flex justify-end gap-1"><Button variant="outline" size="xs">{t('setLimit')}</Button><Button variant="ghost" size="xs">{t('viewStatement')}</Button></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              {/* Step 4: KYC Verification */}
              <Step number="4" title={t('step4Title')}>
                <p>{t('step4Intro')}</p>
                <Screenshot title={`${t('kycVerification')} - ${t('pending')}`}>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">{t('kycPendingRequests')} (3)</h3>
                    <div className="border rounded-lg divide-y">
                      <div className="flex justify-between items-center p-3"><div className="flex items-center gap-3"><p className="font-medium">{t('priyaSharma')}</p><Badge variant="secondary">{t('b2c')}</Badge></div><div className="text-right"><p className="text-xs text-slate-500">{t('submittedOn')}: 20/07/2024</p><Button size="sm" variant="outline">{t('review')}</Button></div></div>
                      <div className="flex justify-between items-center p-3"><div className="flex items-center gap-3"><p className="font-medium">{t('greenValley')}</p><Badge variant="secondary">{t('b2b')}</Badge></div><div className="text-right"><p className="text-xs text-slate-500">{t('submittedOn')}: 19/07/2024</p><Button size="sm" variant="outline">{t('review')}</Button></div></div>
                    </div>
                  </div>
                </Screenshot>
                <Screenshot title={`${t('kycReviewFor')} ${t('priyaSharma')}`}>
                  <div className="max-w-lg mx-auto p-6 bg-white border rounded-lg shadow-xl">
                    <h3 className="text-lg font-bold">{t('kycReviewFor')} <strong>{t('priyaSharma')}</strong></h3>
                    <div className="mt-4 border-t pt-4">
                      <h4 className="font-semibold mb-2">{t('submittedDocs')}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 border rounded-md"><p>{t('aadharCard')}</p><Button size="sm" variant="ghost">{t('viewDoc')}</Button></div>
                        <div className="flex justify-between items-center p-2 border rounded-md"><p>{t('panCard')}</p><Button size="sm" variant="ghost">{t('viewDoc')}</Button></div>
                      </div>
                    </div>
                    <div className="mt-4"><label className="text-sm font-medium">{t('rejectionReason')}</label><Input placeholder="Optional: provide reason for rejection..."/></div>
                    <div className="flex justify-end gap-2 mt-6"><Button variant="destructive">{t('reject')}</Button><Button className="bg-green-600 hover:bg-green-700">{t('approve')}</Button></div>
                  </div>
                </Screenshot>
              </Step>

              {/* Step 5: Statement & Payment Tracking */}
              <Step number="5" title={t('step5Intro')}>
                <p>{t('step5Intro')}</p>
                <Screenshot title={t('payLaterStatement')}>
                  <div className="space-y-4">
                     <div className="flex flex-col md:flex-row gap-3">
                        <select className="border rounded-md px-3 py-2 text-sm bg-white"><option>{t('allCustomers')}</option><option>{t('priyaSharma')}</option></select>
                        <div className="relative flex-grow"><Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><Input placeholder={t('searchByID')} className="pl-10"/></div>
                     </div>
                     <div className="overflow-x-auto border rounded-lg">
                       <table className="min-w-full text-sm">
                         <thead className="bg-slate-50"><tr className="border-b"><th className="p-2 text-left">{t('date')}</th><th className="p-2 text-left">{t('description')}</th><th className="p-2 text-right">{t('debit')}</th><th className="p-2 text-right">{t('credit')}</th><th className="p-2 text-right">{t('balance')}</th></tr></thead>
                         <tbody>
                           <tr className="border-b"><td className="p-2">21/07/2024</td><td className="p-2">{t('paymentReceived')}</td><td className="p-2 text-right"></td><td className="p-2 text-right text-green-600">₹2,000</td><td className="p-2 text-right font-semibold">₹1,500</td></tr>
                           <tr className="border-b"><td className="p-2">18/07/2024</td><td className="p-2">{t('purchaseOrder')}123</td><td className="p-2 text-right text-red-600">₹500</td><td className="p-2 text-right"></td><td className="p-2 text-right font-semibold">₹3,500</td></tr>
                         </tbody>
                       </table>
                     </div>
                  </div>
                </Screenshot>
              </Step>

              {/* Step 6: Analytics */}
              <Step number="6" title={t('step6Title')}>
                <p>{t('step6Intro')}</p>
                <Screenshot title={t('creditAnalytics')}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="border p-4 rounded-lg bg-white"><h4 className="text-sm font-medium">{t('totalVsOutstanding')}</h4><p className="text-xl font-bold">₹4.8L / ₹12.5L</p><div className="w-full bg-gray-200 rounded-full h-2.5 mt-2"><div className="bg-sky-600 h-2.5 rounded-full" style={{width: '38%'}}></div></div></div>
                      <div className="border p-4 rounded-lg bg-white"><h4 className="text-sm font-medium">{t('b2cUtilization')}</h4><p className="text-xl font-bold">62%</p></div>
                      <div className="border p-4 rounded-lg bg-white"><h4 className="text-sm font-medium">{t('b2bUtilization')}</h4><p className="text-xl font-bold">35%</p></div>
                      <div className="border p-4 rounded-lg bg-red-50"><h4 className="text-sm font-medium">{t('overdueBalances')}</h4><p className="text-xl font-bold text-red-600">₹1.2L</p><p className="text-xs text-red-700">{t('walletsPastDue', { count: 12 })}</p></div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border rounded-lg p-4 bg-white"><h4 className="text-sm font-medium">{t('newActivations')}</h4><div className="mt-2"><span className="text-lg font-bold">{t('newB2C')}: 45</span><br/><span className="text-lg font-bold">{t('newB2B')}: 8</span></div></div>
                        <div className="border rounded-lg p-4 bg-white"><h4 className="text-sm font-medium">{t('paymentCycle')}</h4><div className="mt-2"><span className="text-lg font-bold">{t('avgB2C')}: 15 {t('avgDaysToPay')}</span><br/><span className="text-lg font-bold">{t('avgB2B')}: 28 {t('avgDaysToPay')}</span></div></div>
                        <div className="border rounded-lg p-4 bg-white"><h4 className="text-sm font-medium">{t('totalOverdue')}</h4><div className="h-24 bg-gray-200 mt-2 rounded flex items-center justify-center"><p className="text-xs text-slate-500">Overdue Chart</p></div></div>
                     </div>
                  </div>
                </Screenshot>
              </Step>
              
              <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-blue-700 mb-4">{t('nextStepsDescription')}</p>
                <Link to={createPageUrl('ManualExpenses')} className="inline-block">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    {t('nextStepsButton')}
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                </Link>
              </div>

            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}