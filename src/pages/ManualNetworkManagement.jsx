
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, Network, Users, Building2, BarChart3, TrendingUp,
  DollarSign, Star, Award, Eye, Search, Filter, Calendar,
  Edit, Plus, Grid, List, ArrowUpDown, Phone, Mail, MapPin,
  ShoppingBag, Wallet, UserCheck, Gift, CheckSquare, XCircle, CreditCard, Clock,
  FileText as StatementIcon, RefreshCw, Save, User
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
  <div className="flex items-start gap-4 mt-8 w-full">
    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
    <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
    <div className="prose prose-slate max-w-none text-sm sm:text-base break-words -ml-12 sm:ml-0">
        {children}
      </div>
    </div>
  </div>
);

const translations = {
  en: {
    pageTitle: "Network Management Manual",
    backToManual: "Back to Manual",
    description: "Master customer relationship management, B2B retailer partnerships, multi-level referral systems, and comprehensive network analytics to build and maintain strong business relationships.",

    // Step 1
    step1Title: "Network Management Dashboard Overview",
    step1Intro: "The Network Management Dashboard provides a unified view of your entire customer ecosystem, from individual B2C customers to large B2B retail partners, with powerful analytics and relationship tracking tools.",
    step1A: "A. Accessing Network Management",
    dashboardScreenshotTitle: "Network Management Dashboard - Main Interface",
    networkManagement: "Network Management",
    networkDesc: "Comprehensive management of B2C customers, B2B retailers, and referral relationships",
    referralDashboard: "Referral Dashboard",
    addB2BRetailer: "Add B2B Retailer",
    b2cCustomers: "B2C Customers",
    b2bRetailers: "B2B Retailers",
    b2cRevenue: "B2C Revenue",
    b2bRevenue: "B2B Revenue",
    overview: "Overview",
    analytics: "Analytics",
    networkOverviewDesc: "The Network Management interface is organized into four main tabs, each providing specialized functionality for different aspects of customer relationship management.",
    keyFeaturesOverview: "Key Features Overview",
    keyFeature1: "• Unified view of B2C customers and B2B retailers",
    keyFeature2: "• Multi-level referral system tracking",
    keyFeature3: "• Comprehensive revenue analytics by customer type",
    keyFeature4: "• Advanced filtering and search capabilities",
    keyFeature5: "• Customer lifecycle management tools",

    // Step 2
    step2Title: "The Overview Tab: Unified Activity Feed",
    step2Intro: "The Overview tab provides a high-level summary of your entire customer network, showing recent activity from both B2C customers and B2B retailers in a unified view.",
    activityScreenshotTitle: "Overview Tab - Recent Activity Dashboard",
    recentB2CActivity: "Recent B2C Activity",
    priyaSharma: "Priya Sharma",
    rajeshKumar: "Rajesh Kumar",
    anithaReddy: "Anitha Reddy",
    hoursAgo: "2 hours ago",
    hoursAgo4: "4 hours ago",
    hoursAgo6: "6 hours ago",
    view: "View",
    recentB2BActivity: "Recent B2B Activity",
    greenValleyStore: "Green Valley Store",
    freshMarketHub: "Fresh Market Hub",
    cityGrocersLtd: "City Grocers Ltd",
    hourAgo: "1 hour ago",
    hoursAgo3: "3 hours ago",
    hoursAgo5: "5 hours ago",
    confirmed: "confirmed",
    pending: "pending",
    delivered: "delivered",

    // Step 3
    step3Title: "B2C Customers Tab: CRM & Referrals",
    step3Intro: "This tab is your dedicated CRM for individual B2C customers, providing all the tools you need to manage relationships, track purchase history, and analyze behavior. It is functionally identical to the main CRM Dashboard.",
    step3A_Title: "A. B2C Customer Directory",
    step3A_Para: "The main view presents a comprehensive, sortable, and searchable list of all your B2C customers. You can quickly filter by membership tier or alphabetically to locate specific customers. Clicking on any customer's name will take you to their detailed profile page.",
    directoryScreenshotTitle: "B2C Customer Directory - List View",
    customerDirectory: "Customer Directory",
    searchCustomers: "Search customers...",
    allTiers: "All Tiers",
    platinum: "Platinum",
    gold: "Gold",
    silver: "Silver",
    bronze: "Bronze",
    customer: "Customer",
    tier: "Tier",
    totalSpent: "Total Spent",
    lastPurchase: "Last Purchase",
    actions: "Actions",
    daysAgo: "2 days ago",
    weekAgo: "1 week ago",
    step3B_Title: "B. Creating a New Referral Link",
    step3B_Para: "The \"Create Referral\" button allows you to establish a parent-child relationship between two existing customers, which is essential for the multi-level loyalty program. The parent customer will earn bonus points based on the child's purchases.",
    referralModalScreenshotTitle: "Create Referral Modal",
    createCustomerReferral: "Create Customer Referral",
    selectParentChild: "Select a parent and child customer to link them in the referral network.",
    parentCustomer: "Parent Customer (Referrer)",
    selectParent: "Select Parent Customer...",
    childCustomer: "Child Customer (Referred)",
    selectChild: "Select Child Customer...",
    cancel: "Cancel",
    createLink: "Create Link",
    step3C_Title: "C. Customer Detail Page - A Comprehensive 360° View",
    step3C_Para: "Clicking on a customer's name opens their detailed profile, providing a complete 360° view of their relationship with your business. This page is organized into several tabs, each focusing on a specific aspect of the customer's activity.",
    step3D_Title: "Profile Header & Key Metrics",
    step3D_Para: "The top of the page presents an at-a-glance summary, including contact details, membership tier, and key lifetime value metrics like total spending and order count.",
    headerScreenshotTitle: "Customer Detail Page - Header & Stats",
    joinedYear: "Joined 2023",
    goldMember: "Gold Member",
    points: "1,250 Points",
    edit: "Edit",
    email: "Email",
    totalOrders: "Total Orders",
    avgOrderValue: "Avg. Order Value",
    step3E_Title: "The Overview Tab",
    step3E_Para: "This default tab provides a quick summary of the customer's personal information and their most recent order activities.",
    custOverviewScreenshotTitle: "Overview Tab - Information & Recent Activity",
    customerInformation: "Customer Information",
    phone: "Phone",
    address: "Address",
    recentActivity: "Recent Activity",
    orderPrefix: "Order #",
    step3F_Title: "The Purchase History Tab",
    step3F_Para: "Here you can view a complete list of every order the customer has placed. This tab includes powerful order management features, allowing staff to handle partial cancellations directly from the customer's profile.",
    purchaseHistoryScreenshotTitle: "Purchase History Tab - Order Management",
    purchaseHistory: "Purchase History",
    partiallyCancelled: "Partially Cancelled",
    organicApples: "Organic Apples (1kg)",
    shippedQuantity: "Shipped: 1",
    almondMilk: "Almond Milk",
    cancelledQuantity: "Cancelled: 1",
    closeOrder: "Close Order",
    step3G_Title: "The Loyalty & Pay Later Tabs",
    step3G_Para: "These tabs provide detailed financial summaries related to the customer's engagement with your loyalty and credit programs.",
    loyaltyScreenshotTitle: "Loyalty & Pay Later Summaries",
    loyaltyProgram: "Loyalty Program",
    availablePoints: "Available Points",
    earnedForOrder: "Earned for Order #...5f3b:",
    redeemedForOrder: "Redeemed for Order #...2c4a:",
    payLaterWallet: "Pay Later Wallet",
    limit: "Limit",
    balance: "Balance",
    available: "Available",
    purchase: "Purchase #...5f3b:",
    paymentReceived: "Payment Received:",
    step3H_Title: "The KYC Tab",
    step3H_Para: "The Know Your Customer (KYC) tab is crucial for managing Pay Later eligibility. Here, you can review submitted documents, approve or reject applications, and communicate the status to the customer, ensuring compliance and managing credit risk.",
    kycScreenshotTitle: "KYC Tab - Document Verification & Status Management",
    kycStatusDocs: "KYC Status & Documents",
    currentStatus: "Current Status",
    verified: "Verified",
    pauseWallet: "Pause Wallet",
    stopWallet: "Stop Wallet",
    submittedDocuments: "Submitted Documents",
    aadharCard: "Aadhar Card",
    viewDocument: "View Document",

    // Step 4
    step4Title: "B2B Retailers Tab - Business Partner Management",
    step4Intro: "Manage your business-to-business relationships with comprehensive retailer profiles, credit management, and performance tracking.",
    step4A_Title: "A. B2B Retailer Directory",
    b2bDirectoryScreenshotTitle: "B2B Retailers Tab - Business Customer Interface",
    b2bRetailersCount: "B2B Retailers (89)",
    searchRetailers: "Search retailers...",
    allStatus: "All Status",
    active: "Active",
    suspended: "Suspended",
    addRetailer: "Add Retailer",
    contact: "Contact",
    type: "Type",
    orders: "Orders",
    totalBusiness: "Total Business:",
    creditLimit: "Credit Limit:",
    outstanding: "Outstanding:",
    availableCredit: "Available Credit:",
    viewDetails: "View Details",
    statement: "Statement",
    groceryStore: "Grocery Store",
    wholesale: "Wholesale",
    retailChain: "Retail Chain",
    goldPartner: "Gold Partner",
    silverPartner: "Silver Partner",
    platinumPartner: "Platinum Partner",
    step4B_Title: "B. Viewing B2B Retailer Details",
    step4B_Para: "From the directory, clicking \"View Details\" on any retailer's card will take you to their comprehensive detail page, allowing for in-depth management.",
    step4C_Title: "C. Adding a New B2B Retailer",
    step4C_Para: "The \"Add Retailer\" button in the directory header allows you to onboard new business partners. This process involves entering their business details, contact information, and initial account settings.",
    addB2bScreenshotTitle: "Add New B2B Retailer Form",
    addNewB2BRetailer: "Add New B2B Retailer",
    enterDetailsNewPartner: "Enter the details for the new business partner.",
    businessName: "Business Name",
    contactPerson: "Contact Person",
    phoneNumber: "Phone Number",
    businessType: "Business Type",
    selectType: "Select Type...",
    restaurant: "Restaurant",
    other: "Other",
    step4D_Title: "D. B2B Retailer Deep Dive: The Detail Page",
    step4D_Para: "Clicking on a retailer's name or the \"View Details\" button opens their comprehensive profile page. This is the central hub for managing every aspect of your relationship with that business partner, from their account status to their complete financial history.",
    step4E_Title: "E. Retailer Information & Status At-a-Glance",
    step4E_Para: "The left sidebar of the detail page provides a quick, consolidated view of the retailer's current standing and essential information.",
    b2bInfoSidebarScreenshotTitle: "Retailer Detail Page - Information Sidebar",
    businessInformation: "Business Information",
    gst: "GST:",
    accountStatus: "Account Status",
    pendingApproval: "Pending Approval",
    approveRetailer: "Approve Retailer",
    quickStats: "Quick Stats",
    b2bInfoSidebarList1: "• <b>Business Information:</b> Core contact and tax details.",
    b2bInfoSidebarList2: "• <b>Account Status:</b> Shows their current status (e.g., 'Active', 'Pending Approval'). For pending accounts, a button appears to approve them directly.",
    b2bInfoSidebarList3: "• <b>Quick Stats:</b> High-level financial summary, including lifetime spend and current outstanding balance.",
    step4F_Title: "F. Managing Retailer Activities (Tabs)",
    step4F_Para: "The main content area uses a tabbed interface to organize all transactional data and management functions related to the retailer.",
    step4G_H1: "1. Orders Tab",
    step4G_P1: "View a complete history of all purchase orders placed by this retailer. You can toggle between a visual card view and a compact list view.",
    b2bOrdersScreenshotTitle: "Retailer Orders Tab",
    mayDate: "May 20, 2024",
    mayDate2: "May 18, 2024",
    dispatched: "Dispatched",
    step4G_H2: "2. Payments Tab",
    step4G_P2: "Track all payments received from the retailer. You can also manually record new payments, such as bank transfers or cash collections, using the \"Record Payment\" button.",
    b2bPaymentsScreenshotTitle: "Retailer Payments Tab",
    paymentHistory: "Payment History",
    recordPayment: "Record Payment",
    date: "Date",
    amount: "Amount",
    method: "Method",
    reference: "Reference",
    bankTransfer: "Bank Transfer",
    upi: "UPI",
    step4G_H3: "3. Statement Tab",
    step4G_P3: "View a complete, itemized financial statement for the retailer. It provides a running balance by chronologically listing all invoices (debits) and payments (credits) to show the exact outstanding amount.",
    b2bStatementScreenshotTitle: "Retailer Account Statement Tab",
          accountStatement: "Account Statement",
      currentOutstandingBalance: "Current Outstanding Balance",
      tableDescription: "Description",
      debit: "Debit",
      credit: "Credit",
    paymentViaBankTransfer: "Payment via Bank Transfer",
    step4G_H4: "4. Pay Later Tab",
    step4G_P4: "This tab displays all transactions related to the retailer's Pay Later wallet, including purchases made on credit and subsequent repayments or adjustments. It provides a clear audit trail for their credit account.",
    b2bPayLaterScreenshotTitle: "Retailer Pay Later Transactions Tab",
    payLaterTransactions: "Pay Later Transactions",
    noPayLaterServices: "This retailer has not used Pay Later services yet.",
    step4G_H5: "5. KYC Tab",
    step4G_P5: "The Know Your Customer (KYC) tab is crucial for verifying the retailer's identity and assessing risk, especially for activating Pay Later services. Here, you can collect and store important details like nominee information, personal addresses, and additional identity photos.",
    b2bKycScreenshotTitle: "Retailer KYC Tab",
    kycVerification: "KYC Verification",
    nomineeFullName: "Nominee Full Name",
    personalAddress: "Personal Address",
    saveKycDetails: "Save KYC Details",

    // Step 5
    step5Title: "Network Analytics Tab",
    step5Intro: "The Analytics tab provides comprehensive insights into your customer network performance, including revenue trends, customer acquisition, retention metrics, and comparative analysis between B2C and B2B segments.",
    analyticsScreenshotTitle: "Analytics Tab - Network Performance Dashboard",
    revenueGrowth: "Revenue Growth",
    b2cGrowthMonth: "B2C Growth (This Month)",
    b2bGrowthMonth: "B2B Growth (This Month)",
    totalNetworkGrowth: "Total Network Growth",
    customerMetrics: "Customer Metrics",
    newB2CCustomers: "New B2C Customers",
    newB2BPartners: "New B2B Partners",
    customerRetention: "Customer Retention",
    referralNetwork: "Referral Network",
    activeReferrers: "Active Referrers",
    newReferralsMonth: "New Referrals (This Month)",
    referralConversionRate: "Referral Conversion Rate",
    b2cVsB2bRevenue: "B2C vs B2B Revenue Comparison (Last 6 Months)",
    revenueComparisonDesc: "Interactive revenue comparison chart showing monthly trends for both B2C and B2B segments",
    b2cCustomerTierDist: "B2C Customer Tier Distribution",
    platinumTier: "Platinum (₹50,000+)",
    goldTier: "Gold (₹25,000+)",
    silverTier: "Silver (₹10,000+)",
    bronzeTier: "Bronze (New)",
    b2bPartnerCategories: "B2B Partner Categories",
    groceryStores: "Grocery Stores",
    restaurantsCafes: "Restaurants & Cafes",
    hotels: "Hotels",
    retailChains: "Retail Chains",
    others: "Others",

    // Best Practices & Next Steps
    bestPracticesTitle: "Best Practices for Network Management",
    bestPractice1: "• Regularly review and update customer tiers based on purchase behavior",
    bestPractice2: "• Monitor referral network performance and reward top referrers",
    bestPractice3: "• Maintain healthy credit limits for B2B partners to minimize risk",
    bestPractice4: "• Use analytics to identify growth opportunities in underperforming segments",
    bestPractice5: "• Implement targeted marketing campaigns based on customer segmentation",
    bestPractice6: "• Track customer lifetime value to optimize acquisition and retention strategies",
    nextStepsTitle: "Network Management Complete!",
    nextStepsDescription: "You now have a comprehensive understanding of how to manage your entire customer network, from individual consumers to business partners. Use these tools to build stronger relationships and drive growth.",
    nextStepsButton: "Continue to Pay Later Management",
  },
  kn: {
    pageTitle: "ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಬಲವಾದ ವ್ಯಾಪಾರ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ಮಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಗ್ರಾಹಕ ಸಂಬಂಧ ನಿರ್ವಹಣೆ, B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಪಾಲುದಾರಿಕೆಗಳು, ಬಹು-ಹಂತದ ರೆಫರಲ್ ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು ಸಮಗ್ರ ನೆಟ್‌ವರ್ಕ್ ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಅನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    step1Title: "ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ವೈಯಕ್ತಿಕ B2C ಗ್ರಾಹಕರಿಂದ ದೊಡ್ಡ B2B ಚಿಲ್ಲರೆ ಪಾಲುದಾರರವರೆಗೆ ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಗ್ರಾಹಕ ಪರಿಸರ ವ್ಯವಸ್ಥೆಯ ಏಕೀಕೃತ ನೋಟವನ್ನು ಒದಗಿಸುತ್ತದೆ, ಶಕ್ತಿಶಾಲಿ ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಮತ್ತು ಸಂಬಂಧದ ಟ್ರ್ಯಾಕಿಂಗ್ ಸಾಧನಗಳೊಂದಿಗೆ.",
    step1A: "A. ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆಯನ್ನು ಪ್ರವೇಶಿಸುವುದು",
    dashboardScreenshotTitle: "ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ - ಮುಖ್ಯ ಇಂಟರ್ಫೇಸ್",
    networkManagement: "ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆ",
    networkDesc: "B2C ಗ್ರಾಹಕರು, B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ರೆಫರಲ್ ಸಂಬಂಧಗಳ ಸಮಗ್ರ ನಿರ್ವಹಣೆ",
    referralDashboard: "ರೆಫರಲ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    addB2BRetailer: "B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಸೇರಿಸಿ",
    b2cCustomers: "B2C ಗ್ರಾಹಕರು",
    b2bRetailers: "B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು",
    b2cRevenue: "B2C ಆದಾಯ",
    b2bRevenue: "B2B ಆದಾಯ",
    overview: "ಅವಲೋಕನ",
    analytics: "ಅನ್ಯಾಲಿಟಿಕ್ಸ್",
    networkOverviewDesc: "ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆ ಇಂಟರ್ಫೇಸ್ ಅನ್ನು ನಾಲ್ಕು ಮುಖ್ಯ ಟ್ಯಾಬ್‌ಗಳಾಗಿ ವಿಂಗಡಿಸಲಾಗಿದೆ, ಪ್ರತಿಯೊಂದೂ ಗ್ರಾಹಕ ಸಂಬಂಧ ನಿರ್ವಹಣೆಯ ವಿಭಿನ್ನ ಅಂಶಗಳಿಗೆ ವಿಶೇಷ ಕಾರ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    keyFeaturesOverview: "ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳ ಅವಲೋಕನ",
    keyFeature1: "• B2C ಗ್ರಾಹಕರು ಮತ್ತು B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳ ಏಕೀಕೃತ ನೋಟ",
    keyFeature2: "• ಬಹು-ಹಂತದ ರೆಫರಲ್ ಸಿಸ್ಟಮ್ ಟ್ರ್ಯಾಕಿಂಗ್",
    keyFeature3: "• ಗ್ರಾಹಕ ಪ್ರಕಾರದಿಂದ ಸಮಗ್ರ ಆದಾಯ ಅನ್ಯಾಲಿಟಿಕ್ಸ್",
    keyFeature4: "• ಸುಧಾರಿತ ಫಿಲ್ಟರಿಂಗ್ ಮತ್ತು ಹುಡುಕಾಟ ಸಾಮರ್ಥ್ಯಗಳು",
    keyFeature5: "• ಗ್ರಾಹಕ ಜೀವನಚಕ್ರ ನಿರ್ವಹಣಾ ಸಾಧನಗಳು",
    step2Title: "ಅವಲೋಕನ ಟ್ಯಾಬ್: ಏಕೀಕೃತ ಚಟುವಟಿಕೆ ಫೀಡ್",
    step2Intro: "ಅವಲೋಕನ ಟ್ಯಾಬ್ ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಗ್ರಾಹಕ ನೆಟ್‌ವರ್ಕ್‌ನ ಉನ್ನತ ಮಟ್ಟದ ಸಾರಾಂಶವನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇದು B2C ಗ್ರಾಹಕರು ಮತ್ತು B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳಿಂದ ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆಯನ್ನು ಏಕೀಕೃತ ವೀಕ್ಷಣೆಯಲ್ಲಿ ತೋರಿಸುತ್ತದೆ.",
    activityScreenshotTitle: "ಅವಲೋಕನ ಟ್ಯಾಬ್ - ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    recentB2CActivity: "ಇತ್ತೀಚಿನ B2C ಚಟುವಟಿಕೆ",
    priyaSharma: "ಪ್ರಿಯಾ ಶರ್ಮಾ",
    rajeshKumar: "ರಾಜೇಶ್ ಕುಮಾರ್",
    anithaReddy: "ಅನಿತಾ ರೆಡ್ಡಿ",
    hoursAgo: "2 ಗಂಟೆಗಳ ಹಿಂದೆ",
    hoursAgo4: "4 ಗಂಟೆಗಳ ಹಿಂದೆ",
    hoursAgo6: "6 ಗಂಟೆಗಳ ಹಿಂದೆ",
    view: "ನೋಡಿ",
    recentB2BActivity: "ಇತ್ತೀಚಿನ B2B ಚಟುವಟಿಕೆ",
    greenValleyStore: "ಗ್ರೀನ್ ವ್ಯಾಲಿ ಸ್ಟೋರ್",
    freshMarketHub: "ಫ್ರೆಶ್ ಮಾರ್ಕೆಟ್ ಹಬ್",
    cityGrocersLtd: "ಸಿಟಿ ಗ್ರೋಸರ್ಸ್ ಲಿಮಿಟೆಡ್",
    hourAgo: "1 ಗಂಟೆ ಹಿಂದೆ",
    hoursAgo3: "3 ಗಂಟೆಗಳ ಹಿಂದೆ",
    hoursAgo5: "5 ಗಂಟೆಗಳ ಹಿಂದೆ",
    confirmed: "ದೃಢೀಕರಿಸಲಾಗಿದೆ",
    pending: "ಬಾಕಿಯಿದೆ",
    delivered: "ವಿತರಿಸಲಾಗಿದೆ",
    step3Title: "B2C ಗ್ರಾಹಕರ ಟ್ಯಾಬ್: CRM ಮತ್ತು ರೆಫರಲ್‌ಗಳು",
    step3Intro: "ಈ ಟ್ಯಾಬ್ ವೈಯಕ್ತಿಕ B2C ಗ್ರಾಹಕರಿಗೆ ನಿಮ್ಮ ಮೀಸಲಾದ CRM ಆಗಿದೆ, ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಲು, ಖರೀದಿ ಇತಿಹಾಸವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ನಡವಳಿಕೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಲು ನಿಮಗೆ ಬೇಕಾದ ಎಲ್ಲಾ ಸಾಧನಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಇದು ಮುಖ್ಯ CRM ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ಹೋಲುತ್ತದೆ.",
    step3A_Title: "A. B2C ಗ್ರಾಹಕ ಡೈರೆಕ್ಟರಿ",
    step3A_Para: "ಮುಖ್ಯ ವೀಕ್ಷಣೆಯು ನಿಮ್ಮ ಎಲ್ಲಾ B2C ಗ್ರಾಹಕರ ಸಮಗ್ರ, ವಿಂಗಡಿಸಬಹುದಾದ ಮತ್ತು ಹುಡುಕಬಹುದಾದ ಪಟ್ಟಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ನಿರ್ದಿಷ್ಟ ಗ್ರಾಹಕರನ್ನು ಪತ್ತೆಹಚ್ಚಲು ನೀವು ಸದಸ್ಯತ್ವ ಶ್ರೇಣಿಯಿಂದ ಅಥವಾ ವರ್ಣಮಾಲೆಯಂತೆ ತ್ವರಿತವಾಗಿ ಫಿಲ್ಟರ್ ಮಾಡಬಹುದು. ಯಾವುದೇ ಗ್ರಾಹಕರ ಹೆಸರಿನ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಅವರ ವಿವರವಾದ ಪ್ರೊಫೈಲ್ ಪುಟಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತದೆ.",
    directoryScreenshotTitle: "B2C ಗ್ರಾಹಕ ಡೈರೆಕ್ಟರಿ - ಪಟ್ಟಿ ವೀಕ್ಷಣೆ",
    customerDirectory: "ಗ್ರಾಹಕ ಡೈರೆಕ್ಟರಿ",
    searchCustomers: "ಗ್ರಾಹಕರನ್ನು ಹುಡುಕಿ...",
    allTiers: "ಎಲ್ಲಾ ಶ್ರೇಣಿಗಳು",
    platinum: "ಪ್ಲಾಟಿನಂ",
    gold: "ಚಿನ್ನ",
    silver: "ಬೆಳ್ಳಿ",
    bronze: "ಕಂಚು",
    customer: "ಗ್ರಾಹಕ",
    tier: "ಶ್ರೇಣಿ",
    totalSpent: "ಒಟ್ಟು ಖರ್ಚು",
    lastPurchase: "ಕೊನೆಯ ಖರೀದಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    daysAgo: "2 ದಿನಗಳ ಹಿಂದೆ",
    weekAgo: "1 ವಾರ ಹಿಂದೆ",
    step3B_Title: "B. ಹೊಸ ರೆಫರಲ್ ಲಿಂಕ್ ರಚಿಸಲಾಗುತ್ತಿದೆ",
    step3B_Para: "The \"Create Referral\" button allows you to establish a parent-child relationship between two existing customers, which is essential for the multi-level loyalty program. The parent customer will earn bonus points based on the child's purchases.",
    referralModalScreenshotTitle: "ರೆಫರಲ್ ಮಾಡೆಲ್ ರಚಿಸಿ",
    createCustomerReferral: "ಗ್ರಾಹಕ ರೆಫರಲ್ ರಚಿಸಿ",
    selectParentChild: "ರೆಫರಲ್ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಲಿಂಕ್ ಮಾಡಲು ಪೋಷಕ ಮತ್ತು ಮಕ್ಕಳ ಗ್ರಾಹಕರನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    parentCustomer: "ಪೋಷಕ ಗ್ರಾಹಕ (ರೆಫರರ್)",
    selectParent: "ಪೋಷಕ ಗ್ರಾಹಕರನ್ನು ಆಯ್ಕೆಮಾಡಿ...",
    childCustomer: "ಮಕ್ಕಳ ಗ್ರಾಹಕ (ರೆಫರ್ ಮಾಡಲಾದ)",
    selectChild: "ಮಕ್ಕಳ ಗ್ರಾಹಕರನ್ನು ಆಯ್ಕೆಮಾಡಿ...",
    cancel: "ರದ್ದುಮಾಡಿ",
    createLink: "ಲಿಂಕ್ ರಚಿಸಿ",
    step3C_Title: "C. ಗ್ರಾಹಕ ವಿವರ ಪುಟ - ಸಮಗ್ರ 360° ವೀಕ್ಷಣೆ",
    step3C_Para: "ಗ್ರಾಹಕರ ಹೆಸರಿನ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಅವರ ವಿವರವಾದ ಪ್ರೊಫೈಲ್ ತೆರೆಯುತ್ತದೆ, ಇದು ನಿಮ್ಮ ವ್ಯಾಪಾರದೊಂದಿಗೆ ಅವರ ಸಂಬಂಧದ ಸಂಪೂರ್ಣ 360° ವೀಕ್ಷಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಈ ಪುಟವನ್ನು ಹಲವಾರು ಟ್ಯಾಬ್‌ಗಳಾಗಿ ಆಯೋಜಿಸಲಾಗಿದೆ, ಪ್ರತಿಯೊಂದೂ ಗ್ರಾಹಕರ ಚಟುವಟಿಕೆಯ ನಿರ್ದಿಷ್ಟ ಅಂಶದ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.",
    step3D_Title: "ಪ್ರೊಫೈಲ್ ಹೆಡರ್ ಮತ್ತು ಪ್ರಮುಖ ಮೆಟ್ರಿಕ್ಸ್",
    step3D_Para: "ಪುಟದ ಮೇಲ್ಭಾಗವು ಸಂಪರ್ಕ ವಿವರಗಳು, ಸದಸ್ಯತ್ವ ಶ್ರೇಣಿ ಮತ್ತು ಒಟ್ಟು ಖರ್ಚು ಮತ್ತು ಆದೇಶಗಳ ಸಂಖ್ಯೆಯಂತಹ ಪ್ರಮುಖ ಜೀವಿತಾವಧಿ ಮೌಲ್ಯ ಮೆಟ್ರಿಕ್‌ಗಳನ್ನು ಒಳಗೊಂಡಂತೆ ಒಂದು ನೋಟದಲ್ಲಿ ಸಾರಾಂಶವನ್ನು ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ.",
    headerScreenshotTitle: "ಗ್ರಾಹಕ ವಿವರ ಪುಟ - ಹೆಡರ್ ಮತ್ತು ಅಂಕಿಅಂಶಗಳು",
    joinedYear: "2023 ರಲ್ಲಿ ಸೇರಿದರು",
    goldMember: "ಚಿನ್ನದ ಸದಸ್ಯ",
    points: "1,250 ಪಾಯಿಂಟ್‌ಗಳು",
    edit: "ಸಂಪಾದಿಸಿ",
    email: "ಇಮೇಲ್",
    totalOrders: "ಒಟ್ಟು ಆದೇಶಗಳು",
    avgOrderValue: "ಸರಾಸರಿ ಆದೇಶ ಮೌಲ್ಯ",
    step3E_Title: "ಅವಲೋಕನ ಟ್ಯಾಬ್",
    step3E_Para: "ಈ ಡೀಫಾಲ್ಟ್ ಟ್ಯಾಬ್ ಗ್ರಾಹಕರ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಮತ್ತು ಅವರ ಇತ್ತೀಚಿನ ಆದೇಶ ಚಟುವಟಿಕೆಗಳ ತ್ವರಿತ ಸಾರಾಂಶವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    custOverviewScreenshotTitle: "ಅವಲೋಕನ ಟ್ಯಾಬ್ - ಮಾಹಿತಿ ಮತ್ತು ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ",
    customerInformation: "ಗ್ರಾಹಕ ಮಾಹಿತಿ",
    phone: "ಫೋನ್",
    address: "ವಿಳಾಸ",
    recentActivity: "ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ",
    orderPrefix: "ಆದೇಶ #",
    step3F_Title: "ಖರೀದಿ ಇತಿಹಾಸ ಟ್ಯಾಬ್",
    step3F_Para: "ಇಲ್ಲಿ ನೀವು ಗ್ರಾಹಕರು ಇಟ್ಟಿರುವ ಪ್ರತಿ ಆದೇಶದ ಸಂಪೂರ್ಣ ಪಟ್ಟಿಯನ್ನು ವೀಕ್ಷಿಸಬಹುದು. ಈ ಟ್ಯಾಬ್ ಶಕ್ತಿಶಾಲಿ ಆದೇಶ ನಿರ್ವಹಣಾ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಒಳಗೊಂಡಿದೆ, ಗ್ರಾಹಕರ ಪ್ರೊಫೈಲ್‌ನಿಂದ ನೇರವಾಗಿ ಭಾಗಶಃ ರದ್ದತಿಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸಿಬ್ಬಂದಿಗೆ ಅವಕಾಶ ನೀಡುತ್ತದೆ.",
    purchaseHistoryScreenshotTitle: "ಖರೀದಿ ಇತಿಹಾಸ ಟ್ಯಾಬ್ - ಆದೇಶ ನಿರ್ವಹಣೆ",
    purchaseHistory: "ಖರೀದಿ ಇತಿಹಾಸ",
    partiallyCancelled: "ಭಾಗಶಃ ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ",
    organicApples: "ಸಾವಯವ ಸೇಬುಗಳು (1ಕೆಜಿ)",
    shippedQuantity: "ರವಾನಿಸಲಾಗಿದೆ: 1",
    almondMilk: "ಬಾದಾಮಿ ಹಾಲು",
    cancelledQuantity: "ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ: 1",
    closeOrder: "ಆದೇಶ ಮುಚ್ಚಿ",
    step3G_Title: "ಲಾಯಲ್ಟಿ ಮತ್ತು ಪೇ ಲೇಟರ್ ಟ್ಯಾಬ್‌ಗಳು",
    step3G_Para: "ಈ ಟ್ಯಾಬ್‌ಗಳು ಗ್ರಾಹಕರ ಲಾಯಲ್ಟಿ ಮತ್ತು ಕ್ರೆಡಿಟ್ ಕಾರ್ಯಕ್ರಮಗಳೊಂದಿಗಿನ ಅವರ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಗೆ ಸಂಬಂಧಿಸಿದ ವಿವರವಾದ ಹಣಕಾಸಿನ ಸಾರಾಂಶಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    loyaltyScreenshotTitle: "ಲಾಯಲ್ಟಿ ಮತ್ತು ಪೇ ಲೇಟರ್ ಸಾರಾಂಶಗಳು",
    loyaltyProgram: "ಲಾಯಲ್ಟಿ ಪ್ರೋಗ್ರಾಂ",
    availablePoints: "ಲಭ್ಯವಿರುವ ಪಾಯಿಂಟ್‌ಗಳು",
    earnedForOrder: "ಆದೇಶ #...5f3b ಗಾಗಿ ಗಳಿಸಿದೆ:",
    redeemedForOrder: "ಆದೇಶ #...2c4a ಗಾಗಿ ರಿಡೀಮ್ ಮಾಡಲಾಗಿದೆ:",
    payLaterWallet: "ಪೇ ಲೇಟರ್ ವಾಲೆಟ್",
    limit: "ಮಿತಿ",
    balance: "ಬ್ಯಾಲೆನ್ಸ್",
    available: "ಲಭ್ಯವಿದೆ",
    purchase: "ಖರೀದಿ #...5f3b:",
    paymentReceived: "ಪಾವತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ:",
    step3H_Title: "KYC ಟ್ಯಾಬ್",
    step3H_Para: "ಪೇ ಲೇಟರ್ ಅರ್ಹತೆಯನ್ನು ನಿರ್ವಹಿಸಲು KYC (ನಿಮ್ಮ ಗ್ರಾಹಕರನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ) ಟ್ಯಾಬ್ ನಿರ್ಣಾಯಕವಾಗಿದೆ. ಇಲ್ಲಿ, ನೀವು ಸಲ್ಲಿಸಿದ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಬಹುದು, ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ಅನುಮೋದಿಸಬಹುದು ಅಥವಾ ತಿರಸ್ಕರಿಸಬಹುದು ಮತ್ತು ಗ್ರಾಹಕರಿಗೆ ಸ್ಥಿತಿಯನ್ನು ತಿಳಿಸಬಹುದು, ಅನುಸರಣೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಬಹುದು ಮತ್ತು ಕ್ರೆಡಿಟ್ ಅಪಾಯವನ್ನು ನಿರ್ವಹಿಸಬಹುದು.",
    kycScreenshotTitle: "KYC ಟ್ಯಾಬ್ - ದಾಖಲೆ ಪರಿಶೀಲನೆ ಮತ್ತು ಸ್ಥಿತಿ ನಿರ್ವಹಣೆ",
    kycStatusDocs: "KYC ಸ್ಥಿತಿ ಮತ್ತು ದಾಖಲೆಗಳು",
    currentStatus: "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
    verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    pauseWallet: "ವಾಲೆಟ್ ವಿರಾಮಗೊಳಿಸಿ",
    stopWallet: "ವಾಲೆಟ್ ನಿಲ್ಲಿಸಿ",
    submittedDocuments: "ಸಲ್ಲಿಸಿದ ದಾಖಲೆಗಳು",
    aadharCard: "ಆಧಾರ್ ಕಾರ್ಡ್",
    viewDocument: "ದಾಖಲೆ ವೀಕ್ಷಿಸಿ",
    step4Title: "B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳ ಟ್ಯಾಬ್ - ವ್ಯಾಪಾರ ಪಾಲುದಾರ ನಿರ್ವಹಣೆ",
    step4Intro: "ಸಮಗ್ರ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಪ್ರೊಫೈಲ್‌ಗಳು, ಕ್ರೆಡಿಟ್ ನಿರ್ವಹಣೆ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆ ಟ್ರ್ಯಾಕಿಂಗ್‌ನೊಂದಿಗೆ ನಿಮ್ಮ ವ್ಯಾಪಾರ-ಕ್ಕೆ-ವ್ಯಾಪಾರ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    step4A_Title: "A. B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಡೈರೆಕ್ಟರಿ",
    b2bDirectoryScreenshotTitle: "B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳ ಟ್ಯಾಬ್ - ವ್ಯಾಪಾರ ಗ್ರಾಹಕ ಇಂಟರ್ಫೇಸ್",
    b2bRetailersCount: "B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು (89)",
    searchRetailers: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳನ್ನು ಹುಡುಕಿ...",
    allStatus: "ಎಲ್ಲಾ ಸ್ಥಿತಿ",
    active: "ಸಕ್ರಿಯ",
    suspended: "ಅಮಾನತುಗೊಳಿಸಲಾಗಿದೆ",
    addRetailer: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಸೇರಿಸಿ",
    contact: "ಸಂಪರ್ಕ",
    type: "ಪ್ರಕಾರ",
    orders: "ಆದೇಶಗಳು",
    totalBusiness: "ಒಟ್ಟು ವ್ಯಾಪಾರ:",
    creditLimit: "ಕ್ರೆಡಿಟ್ ಮಿತಿ:",
    outstanding: "ಬಾಕಿ:",
    availableCredit: "ಲಭ್ಯವಿರುವ ಕ್ರೆಡಿಟ್:",
    viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    statement: "ಹೇಳಿಕೆ",
    groceryStore: "ಕಿರಾಣಿ ಅಂಗಡಿ",
    wholesale: "ಸಗಟು",
    retailChain: "ಚಿಲ್ಲರೆ ಸರಪಳಿ",
    goldPartner: "ಚಿನ್ನದ ಪಾಲುದಾರ",
    silverPartner: "ಬೆಳ್ಳಿಯ ಪಾಲುದಾರ",
    platinumPartner: "ಪ್ಲಾಟಿನಂ ಪಾಲುದಾರ",
    step4B_Title: "B. B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಲಾಗುತ್ತಿದೆ",
    step4B_Para: "ಡೈರೆಕ್ಟರಿಯಿಂದ, ಯಾವುದೇ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯ ಕಾರ್ಡ್‌ನಲ್ಲಿರುವ \"ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ\" ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಅವರ ಸಮಗ್ರ ವಿವರ ಪುಟಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತದೆ, ಇದು ಆಳವಾದ ನಿರ್ವಹಣೆಗೆ ಅವಕಾಶ ನೀಡುತ್ತದೆ.",
    step4C_Title: "C. ಹೊಸ B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯನ್ನು ಸೇರಿಸಲಾಗುತ್ತಿದೆ",
    step4C_Para: "ಡೈರೆಕ್ಟರಿ ಹೆಡರ್‌ನಲ್ಲಿರುವ \"ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಸೇರಿಸಿ\" ಬಟನ್ ಹೊಸ ವ್ಯಾಪಾರ ಪಾಲುದಾರರನ್ನು ಆನ್‌ಬೋರ್ಡ್ ಮಾಡಲು ನಿಮಗೆ ಅನುಮತಿಸುತ್ತದೆ. ಈ ಪ್ರಕ್ರಿಯೆಯು ಅವರ ವ್ಯಾಪಾರ ವಿವರಗಳು, ಸಂಪರ್ಕ ಮಾಹಿತಿ ಮತ್ತು ಆರಂಭಿಕ ಖಾತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ನಮೂದಿಸುವುದನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.",
    addB2bScreenshotTitle: "ಹೊಸ B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಫಾರ್ಮ್ ಸೇರಿಸಿ",
    addNewB2BRetailer: "ಹೊಸ B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಸೇರಿಸಿ",
    enterDetailsNewPartner: "ಹೊಸ ವ್ಯಾಪಾರ ಪಾಲುದಾರರಿಗಾಗಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
    businessName: "ವ್ಯಾಪಾರ ಹೆಸರು",
    contactPerson: "ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ",
    phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ",
    businessType: "ವ್ಯಾಪಾರ ಪ್ರಕಾರ",
    selectType: "ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ...",
    restaurant: "ರೆಸ್ಟೋರೆಂಟ್",
    other: "ಇತರೆ",
    step4D_Title: "D. B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಆಳವಾದ ವಿಶ್ಲೇಷಣೆ: ವಿವರ ಪುಟ",
    step4D_Para: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯ ಹೆಸರು ಅಥವಾ \"ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ\" ಬಟನ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಅವರ ಸಮಗ್ರ ಪ್ರೊಫೈಲ್ ಪುಟ ತೆರೆಯುತ್ತದೆ. ಇದು ಆ ವ್ಯಾಪಾರ ಪಾಲುದಾರರೊಂದಿಗಿನ ನಿಮ್ಮ ಸಂಬಂಧದ ಪ್ರತಿಯೊಂದು ಅಂಶವನ್ನು, ಅವರ ಖಾತೆ ಸ್ಥಿತಿಯಿಂದ ಅವರ ಸಂಪೂರ್ಣ ಹಣಕಾಸಿನ ಇತಿಹಾಸದವರೆಗೆ ನಿರ್ವಹಿಸುವ ಕೇಂದ್ರ ಹಬ್ ಆಗಿದೆ.",
    step4E_Title: "E. ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಮಾಹಿತಿ ಮತ್ತು ಸ್ಥಿತಿಯ ಒಂದು ನೋಟ",
    step4E_Para: "ವಿವರ ಪುಟದ ಎಡ ಸೈಡ್‌ಬಾರ್ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ ಮತ್ತು ಅಗತ್ಯ ಮಾಹಿತಿಯ ತ್ವರಿತ, ಏಕೀಕೃತ ನೋಟವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    b2bInfoSidebarScreenshotTitle: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ವಿವರ ಪುಟ - ಮಾಹಿತಿ ಸೈಡ್‌ಬಾರ್",
    businessInformation: "ವ್ಯಾಪಾರ ಮಾಹಿತಿ",
    gst: "GST:",
    accountStatus: "ಖಾತೆ ಸ್ಥಿತಿ",
    pendingApproval: "ಅನುಮೋದನೆ ಬಾಕಿ ಇದೆ",
    approveRetailer: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯನ್ನು ಅನುಮೋದಿಸಿ",
    quickStats: "ತ್ವರಿತ ಅಂಕಿಅಂಶಗಳು",
    b2bInfoSidebarList1: "• <b>ವ್ಯಾಪಾರ ಮಾಹಿತಿ:</b> ಪ್ರಮುಖ ಸಂಪರ್ಕ ಮತ್ತು ತೆರಿಗೆ ವಿವರಗಳು.",
    b2bInfoSidebarList2: "• <b>ಖಾತೆ ಸ್ಥಿತಿ:</b> ಅವರ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯನ್ನು ತೋರಿಸುತ್ತದೆ (ಉದಾ., 'ಸಕ್ರಿಯ', 'ಅನುಮೋದನೆ ಬಾಕಿ'). ಬಾಕಿ ಇರುವ ಖಾತೆಗಳಿಗಾಗಿ, ಅವುಗಳನ್ನು ನೇರವಾಗಿ ಅನುಮೋದಿಸಲು ಒಂದು ಬಟನ್ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ.",
    b2bInfoSidebarList3: "• <b>ತ್ವರಿತ ಅಂಕಿಅಂಶಗಳು:</b> ಜೀವಿತಾವಧಿ ಖರ್ಚು ಮತ್ತು ಪ್ರಸ್ತುತ ಬಾಕಿ ಉಳಿದಿರುವ ಮೊತ್ತವನ್ನು ಒಳಗೊಂಡಂತೆ ಉನ್ನತ ಮಟ್ಟದ ಹಣಕಾಸಿನ ಸಾರಾಂಶ.",
    step4F_Title: "F. ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಚಟುವಟಿಕೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು (ಟ್ಯಾಬ್‌ಗಳು)",
    step4F_Para: "ಮುಖ್ಯ ವಿಷಯ ಪ್ರದೇಶವು ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗೆ ಸಂಬಂಧಿಸಿದ ಎಲ್ಲಾ ವಹಿವಾಟಿನ ಡೇಟಾ ಮತ್ತು ನಿರ್ವಹಣಾ ಕಾರ್ಯಗಳನ್ನು ಸಂಘಟಿಸಲು ಟ್ಯಾಬ್ಡ್ ಇಂಟರ್ಫೇಸ್ ಅನ್ನು ಬಳಸುತ್ತದೆ.",
    step4G_H1: "1. ಆದೇಶಗಳ ಟ್ಯಾಬ್",
    step4G_P1: "ಈ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಇಟ್ಟಿರುವ ಎಲ್ಲಾ ಖರೀದಿ ಆದೇಶಗಳ ಸಂಪೂರ್ಣ ಇತಿಹಾಸವನ್ನು ವೀಕ್ಷಿಸಿ. ನೀವು ವಿಶಿಷ್ಟ ಕಾರ್ಡ್ ವೀಕ್ಷಣೆ ಮತ್ತು ಕಾಂಪ್ಯಾಕ್ಟ್ ಪಟ್ಟಿ ವೀಕ್ಷಣೆ ನಡುವೆ ಟಾಗಲ್ ಮಾಡಬಹುದು.",
    b2bOrdersScreenshotTitle: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಆದೇಶಗಳ ಟ್ಯಾಬ್",
    mayDate: "May 20, 2024",
    mayDate2: "May 18, 2024",
    dispatched: "ರವಾನಿಸಲಾಗಿದೆ",
    step4G_H2: "2. ಪಾವತಿಗಳ ಟ್ಯಾಬ್",
    step4G_P2: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯಿಂದ ಸ್ವೀಕರಿಸಿದ ಎಲ್ಲಾ ಪಾವತಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. ನೀವು \"ಪಾವತಿ ದಾಖಲಿಸಿ\" ಬಟನ್ ಬಳಸಿ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಅಥವಾ ನಗದು ಸಂಗ್ರಹಗಳಂತಹ ಹೊಸ ಪಾವತಿಗಳನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ದಾಖಲಿಸಬಹುದು.",
    b2bPaymentsScreenshotTitle: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಪಾವತಿಗಳ ಟ್ಯಾಬ್",
    paymentHistory: "ಪಾವತಿ ಇತಿಹಾಸ",
    recordPayment: "ಪಾವತಿ ದಾಖಲಿಸಿ",
    date: "ದಿನಾಂಕ",
    amount: "ಮೊತ್ತ",
    method: "ವಿಧಾನ",
    reference: "ಉಲ್ಲೇಖ",
    bankTransfer: "ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ",
    upi: "UPI",
    step4G_H3: "3. ಸ್ಟೇಟ್‌ಮೆಂಟ್ ಟ್ಯಾಬ್",
    step4G_P3: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಾಗಿ ಸಂಪೂರ್ಣ, ಐಟಮೈಸ್ ಮಾಡಿದ ಹಣಕಾಸಿನ ಹೇಳಿಕೆಯನ್ನು ವೀಕ್ಷಿಸಿ. ಇದು ಎಲ್ಲಾ ಇನ್‌ವಾಯ್ಸ್‌ಗಳನ್ನು (ಡೆಬಿಟ್‌ಗಳು) ಮತ್ತು ಪಾವತಿಗಳನ್ನು (ಕ್ರೆಡಿಟ್‌ಗಳು) ಕಾಲಾನುಕ್ರಮದಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡುವ ಮೂಲಕ ಚಾಲನೆಯಲ್ಲಿರುವ ಬ್ಯಾಲೆನ್ಸ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ, ನಿಖರವಾದ ಬಾಕಿ ಉಳಿದಿರುವ ಮೊತ್ತವನ್ನು ತೋರಿಸಲು.",
    b2bStatementScreenshotTitle: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಖಾತೆ ಹೇಳಿಕೆ ಟ್ಯಾಬ್",
          accountStatement: "ಖಾತೆ ಹೇಳಿಕೆ",
      currentOutstandingBalance: "ಪ್ರಸ್ತುತ ಬಾಕಿ ಉಳಿದಿರುವ ಬ್ಯಾಲೆನ್ಸ್",
      tableDescription: "ವಿವರಣೆ",
      debit: "ಡೆಬಿಟ್",
      credit: "ಕ್ರೆಡಿಟ್",
    paymentViaBankTransfer: "ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಮೂಲಕ ಪಾವತಿ",
    step4G_H4: "4. ಪೇ ಲೇಟರ್ ಟ್ಯಾಬ್",
    step4G_P4: "ಈ ಟ್ಯಾಬ್ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯ ಪೇ ಲೇಟರ್ ವಾಲೆಟ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಎಲ್ಲಾ ವಹಿವಾಟುಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ, ಕ್ರೆಡಿಟ್‌ನಲ್ಲಿ ಮಾಡಿದ ಖರೀದಿಗಳು ಮತ್ತು ನಂತರದ ಮರುಪಾವತಿಗಳು ಅಥವಾ ಹೊಂದಾಣಿಕೆಗಳು ಸೇರಿದಂತೆ. ಇದು ಅವರ ಕ್ರೆಡಿಟ್ ಖಾತೆಗಾಗಿ ಸ್ಪಷ್ಟ ಆಡಿಟ್ ಟ್ರಯಲ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    b2bPayLaterScreenshotTitle: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಪೇ ಲೇಟರ್ ವಹಿವಾಟುಗಳ ಟ್ಯಾಬ್",
    payLaterTransactions: "ಪೇ ಲೇಟರ್ ವಹಿವಾಟುಗಳು",
    noPayLaterServices: "ಈ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ ಇನ್ನೂ ಪೇ ಲೇಟರ್ ಸೇವೆಗಳನ್ನು ಬಳಸಿಲ್ಲ.",
    step4G_H5: "5. KYC ಟ್ಯಾಬ್",
    step4G_P5: "KYC (ನಿಮ್ಮ ಗ್ರಾಹಕರನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ) ಟ್ಯಾಬ್ ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಯ ಗುರುತನ್ನು ಪರಿಶೀಲಿಸಲು ಮತ್ತು ಅಪಾಯವನ್ನು ನಿರ್ಣಯಿಸಲು ನಿರ್ಣಾಯಕವಾಗಿದೆ, ವಿಶೇಷವಾಗಿ ಪೇ ಲೇಟರ್ ಸೇವೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು. ಇಲ್ಲಿ, ನೀವು ನಾಮಿನಿ ಮಾಹಿತಿ, ವೈಯಕ್ತಿಕ ವಿಳಾಸಗಳು ಮತ್ತು ಹೆಚ್ಚುವರಿ ಗುರುತಿನ ಫೋಟೋಗಳಂತಹ ಪ್ರಮುಖ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸಬಹುದು ಮತ್ತು ಸಂಗ್ರಹಿಸಬಹುದು.",
    b2bKycScreenshotTitle: "ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ KYC ಟ್ಯಾಬ್",
    kycVerification: "KYC ಪರಿಶೀಲನೆ",
    nomineeFullName: "ನಾಮಿನಿ ಪೂರ್ಣ ಹೆಸರು",
    personalAddress: "ವೈಯಕ್ತಿಕ ವಿಳಾಸ",
    saveKycDetails: "KYC ವಿವರಗಳನ್ನು ಉಳಿಸಿ",
    step5Title: "ನೆಟ್‌ವರ್ಕ್ ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಟ್ಯಾಬ್",
    step5Intro: "ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಟ್ಯಾಬ್ ನಿಮ್ಮ ಗ್ರಾಹಕ ನೆಟ್‌ವರ್ಕ್ ಕಾರ್ಯಕ್ಷಮತೆಯ ಬಗ್ಗೆ ಸಮಗ್ರ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ, ಆದಾಯದ ಪ್ರವೃತ್ತಿಗಳು, ಗ್ರಾಹಕರನ್ನು ಗಳಿಸುವುದು, ಧಾರಣಾ ಮೆಟ್ರಿಕ್‌ಗಳು ಮತ್ತು B2C ಮತ್ತು B2B ವಿಭಾಗಗಳ ನಡುವಿನ ತುಲನಾತ್ಮಕ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಒಳಗೊಂಡಂತೆ.",
    analyticsScreenshotTitle: "ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಟ್ಯಾಬ್ - ನೆಟ್‌ವರ್ಕ್ ಕಾರ್ಯಕ್ಷಮತೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    revenueGrowth: "ಆದಾಯದ ಬೆಳವಣಿಗೆ",
    b2cGrowthMonth: "B2C ಬೆಳವಣಿಗೆ (ಈ ತಿಂಗಳು)",
    b2bGrowthMonth: "B2B ಬೆಳವಣಿಗೆ (ಈ ತಿಂಗಳು)",
    totalNetworkGrowth: "ಒಟ್ಟು ನೆಟ್‌ವರ್ಕ್ ಬೆಳವಣಿಗೆ",
    customerMetrics: "ಗ್ರಾಹಕ ಮೆಟ್ರಿಕ್ಸ್",
    newB2CCustomers: "ಹೊಸ B2C ಗ್ರಾಹಕರು",
    newB2BPartners: "ಹೊಸ B2B ಪಾಲುದಾರರು",
    customerRetention: "ಗ್ರಾಹಕ ಧಾರಣ",
    referralNetwork: "ರೆಫರಲ್ ನೆಟ್‌ವರ್ಕ್",
    activeReferrers: "ಸಕ್ರಿಯ ರೆಫರರ್‌ಗಳು",
    newReferralsMonth: "ಹೊಸ ರೆಫರಲ್‌ಗಳು (ಈ ತಿಂಗಳು)",
    referralConversionRate: "ರೆಫರಲ್ ಪರಿವರ್ತನೆ ದರ",
    b2cVsB2bRevenue: "B2C vs B2B ಆದಾಯ ಹೋಲಿಕೆ (ಕಳೆದ 6 ತಿಂಗಳು)",
    revenueComparisonDesc: "B2C ಮತ್ತು B2B ವಿಭಾಗಗಳೆರಡಕ್ಕೂ ಮಾಸಿಕ ಪ್ರವೃತ್ತಿಗಳನ್ನು ತೋರಿಸುವ ಸಂವಾದಾತ್ಮಕ ಆದಾಯ ಹೋಲಿಕೆ ಚಾರ್ಟ್",
    b2cCustomerTierDist: "B2C ಗ್ರಾಹಕ ಶ್ರೇಣಿ ವಿತರಣೆ",
    platinumTier: "ಪ್ಲಾಟಿನಂ (₹50,000+)",
    goldTier: "ಚಿನ್ನ (₹25,000+)",
    silverTier: "ಬೆಳ್ಳಿ (₹10,000+)",
    bronzeTier: "ಕಂಚು (ಹೊಸ)",
    b2bPartnerCategories: "B2B ಪಾಲುದಾರ ವರ್ಗಗಳು",
    groceryStores: "ಕಿರಾಣಿ ಅಂಗಡಿಗಳು",
    restaurantsCafes: "ರೆಸ್ಟೋರೆಂಟ್‌ಗಳು ಮತ್ತು ಕೆಫೆಗಳು",
    hotels: "ಹೋಟೆಲ್‌ಗಳು",
    retailChains: "ಚಿಲ್ಲರೆ ಸರಪಳಿಗಳು",
    others: "ಇತರೆ",
    bestPracticesTitle: "ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆಗಾಗಿ ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು",
    bestPractice1: "• ಖರೀದಿ ನಡವಳಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ಗ್ರಾಹಕ ಶ್ರೇಣಿಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನವೀಕರಿಸಿ",
    bestPractice2: "• ರೆಫರಲ್ ನೆಟ್‌ವರ್ಕ್ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮತ್ತು ಉನ್ನತ ರೆಫರರ್‌ಗಳಿಗೆ ಪ್ರತಿಫಲ ನೀಡಿ",
    bestPractice3: "• ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡಲು B2B ಪಾಲುದಾರರಿಗೆ ಆರೋಗ್ಯಕರ ಕ್ರೆಡಿಟ್ ಮಿತಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    bestPractice4: "• ಕಡಿಮೆ ಕಾರ್ಯಕ್ಷಮತೆಯ ವಿಭಾಗಗಳಲ್ಲಿ ಬೆಳವಣಿಗೆಯ ಅವಕಾಶಗಳನ್ನು ಗುರುತಿಸಲು ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಬಳಸಿ",
    bestPractice5: "• ಗ್ರಾಹಕ ವಿಭಜನೆಯ ಆಧಾರದ ಮೇಲೆ ಉದ್ದೇಶಿತ ಮಾರ್ಕೆಟಿಂಗ್ ಅಭಿಯಾನಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಿ",
    bestPractice6: "• ಸ್ವಾಧೀನ ಮತ್ತು ಧಾರಣ ತಂತ್ರಗಳನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಗ್ರಾಹಕ ಜೀವಿತಾವಧಿ ಮೌಲ್ಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
  },
  te: {
    pageTitle: "నెట్‌వర్క్ నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కు తిరిగి వెళ్ళు",
    description: "బలమైన వ్యాపార సంబంధాలను నిర్మించడానికి మరియు నిర్వహించడానికి కస్టమర్ రిలేషన్‌షిప్ మేనేజ్‌మెంట్, B2B రిటైలర్ భాగస్వామ్యాలు, మల్టీ-లెవల్ రెఫరల్ సిస్టమ్‌లు మరియు సమగ్ర నెట్వర్క్ అనలిటిక్స్‌లో ప్రావీణ్యం సాధించండి.",
    step1Title: "నెట్‌వర్క్ నిర్వహణ డ్యాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "నెట్‌వర్క్ మేనేజ్‌మెంట్ డ్యాష్‌బోర్డ్ వ్యక్తిగత B2C కస్టమర్‌ల నుండి పెద్ద B2B రిటైల్ భాగస్వాములు వరకు మీ మొత్తం కస్టమర్ ఎకోసిస్టమ్ యొక్క ఏకీకృత వీక్షణను అందిస్తుంది, శక్తివంతమైన అనలిటిక్స్ మరియు రిలేషన్‌షిప్ ట్రాకింగ్ టూల్స్‌తో.",
    step1A: "A. నెట్‌వర్క్ నిర్వహణను యాక్సెస్ చేయడం",
    dashboardScreenshotTitle: "నెట్‌వర్క్ నిర్వహణ డ్యాష్‌బోర్డ్ - ప్రధాన ఇంటర్‌ఫేస్",
    networkManagement: "నెట్‌వర్క్ నిర్వహణ",
    networkDesc: "B2C కస్టమర్‌లు, B2B రిటైలర్లు మరియు రెఫరల్ సంబంధాల సమగ్ర నిర్వహణ",
    referralDashboard: "రెఫరల్ డ్యాష్‌బోర్డ్",
    addB2BRetailer: "B2B రిటైలర్ జోడించండి",
    b2cCustomers: "B2C కస్టమర్లు",
    b2bRetailers: "B2B రిటైలర్లు",
    b2cRevenue: "B2C రాబడి",
    b2bRevenue: "B2B రాబడి",
    overview: "అవలోకనం",
    analytics: "అనలిటిక్స్",
    networkOverviewDesc: "నెట్‌వర్క్ నిర్వహణ ఇంటర్‌ఫేస్ నాలుగు ప్రధాన ట్యాబ్‌లుగా విభజించబడింది, ప్రతి ఒక్కటి కస్టమర్ రిలేషన్‌షిప్ మేనేజ్‌మెంట్ యొక్క విభిన్న అంశాల కోసం ప్రత్యేక కార్యాచరణను అందిస్తుంది.",
    keyFeaturesOverview: "కీలక లక్షణాల అవలోకనం",
    keyFeature1: "• B2C కస్టమర్‌లు మరియు B2B రిటైలర్‌ల ఏకీకృత వీక్షణ",
    keyFeature2: "• మల్టీ-లెవల్ రెఫరల్ సిస్టమ్ ట్రాకింగ్",
    keyFeature3: "• కస్టమర్ రకం ద్వారా సమగ్ర రాబడి అనలిటిక్స్",
    keyFeature4: "• అధునాతన ఫిల్టరింగ్ మరియు శోధన సామర్థ్యాలు",
    keyFeature5: "• కస్టమర్ లైఫ్‌సైకిల్ మేనేజ్‌మెంట్ టూల్స్",
    step2Title: "ఓవర్‌వ్యూ ట్యాబ్: యూనిఫైడ్ యాక్టివిటీ ఫీడ్",
    step2Intro: "ఓవర్‌వ్యూ ట్యాబ్ మీ మొత్తం కస్టమర్ నెట్‌వర్క్ యొక్క ఉన్నత-స్థాయి సారాంశాన్ని అందిస్తుంది, B2C కస్టమర్‌లు మరియు B2B రిటైలర్‌ల నుండి ఇటీవలి కార్యాచరణను ఏకీకృత వీక్షణలో చూపుతుంది.",
    activityScreenshotTitle: "అవలోకనం ట్యాబ్ - ఇటీవలి కార్యాచరణ డ్యాష్‌బోర్డ్",
    recentB2CActivity: "ఇటీవలి B2C కార్యాచరణ",
    priyaSharma: "ప్రియా శర్మ",
    rajeshKumar: "రాజేష్ కుమార్",
    anithaReddy: "అనిత రెడ్డి",
    hoursAgo: "2 గంటల క్రితం",
    hoursAgo4: "4 గంటల క్రితం",
    hoursAgo6: "6 గంటల క్రితం",
    view: "చూడండి",
    recentB2BActivity: "ఇటీవలి B2B కార్యాచరణ",
    greenValleyStore: "గ్రీన్ వ్యాలీ స్టోర్",
    freshMarketHub: "ఫ్రెష్ మార్కెట్ హబ్",
    cityGrocersLtd: "సిటీ గ్రోసర్స్ లిమిటెడ్",
    hourAgo: "1 గంట క్రితం",
    hoursAgo3: "3 గంటల క్రితం",
    hoursAgo5: "5 గంటల క్రితం",
    confirmed: "ఖచ్చితంగా",
    pending: "పెండింగ్‌లో",
    delivered: "డెలివరీ చేయబడింది",
    step3Title: "B2C కస్టమర్ల ట్యాబ్: CRM & రెఫరల్స్",
    step3Intro: "ఈ ట్యాబ్ వ్యక్తిగత B2C కస్టమర్ల కోసం మీ ప్రత్యేక CRM, సంబంధాలను నిర్వహించడం, కొనుగోలు చరిత్రను ట్రాక్ చేయడం మరియు ప్రవర్తనను విశ్లేషించడం కోసం మీకు అవసరమైన అన్ని సాధనాలను అందిస్తుంది. ఇది ప్రధాన CRM డ్యాష్‌బోర్డ్‌కు ఫంక్షనల్‌గా సమానంగా ఉంటుంది.",
    step3A_Title: "A. B2C కస్టమర్ డైరెక్టరీ",
    step3A_Para: "ప్రధాన వీక్షణ మీ అన్ని B2C కస్టమర్‌ల సమగ్ర, క్రమబద్ధీకరించదగిన మరియు శోధించదగిన జాబితాను అందిస్తుంది. మీరు నిర్దిష్ట కస్టమర్‌లను గుర్తించడానికి సభ్యత్వ శ్రేణి ద్వారా లేదా అక్షర క్రమంలో త్వరగా ఫిల్టర్ చేయవచ్చు. ఏదైనా కస్టమర్ పేరుపై క్లిక్ చేయడం ద్వారా వారి వివరణాత్మక ప్రొఫైల్ పేజీకి తీసుకెళ్తుంది.",
    directoryScreenshotTitle: "B2C కస్టమర్ డైరెక్టరీ - జాబితా వీక్షణ",
    customerDirectory: "కస్టమర్ డైరెక్టరీ",
    searchCustomers: "కస్టమర్లను శోధించండి...",
    allTiers: "అన్ని శ్రేణులు",
    platinum: "ప్లాటినం",
    gold: "బంగారం",
    silver: "వెండి",
    bronze: "కంచు",
    customer: "కస్టమర్",
    tier: "శ్రేణి",
    totalSpent: "మొత్తం ఖర్చు",
    lastPurchase: "చివరి కొనుగోలు",
    actions: "చర్యలు",
    daysAgo: "2 రోజుల క్రితం",
    weekAgo: "1 వారం క్రితం",
    step3B_Title: "B. కొత్త రెఫరల్ లింక్‌ను సృష్టించడం",
    step3B_Para: "The \"Create Referral\" button allows you to establish a parent-child relationship between two existing customers, which is essential for the multi-level loyalty program. The parent customer will earn bonus points based on the child's purchases.",
    referralModalScreenshotTitle: "రెఫరల్ మోడల్ సృష్టించు",
    createCustomerReferral: "కస్టమర్ రెఫరల్ సృష్టించు",
    selectParentChild: "రెఫరల్ నెట్‌వర్క్‌లో లింక్ చేయడానికి పేరెంట్ మరియు చైల్డ్ కస్టమర్‌ను ఎంచుకోండి.",
    parentCustomer: "పేరెంట్ కస్టమర్ (రెఫరర్)",
    selectParent: "పేరెంట్ కస్టమర్‌ను ఎంచుకోండి...",
    childCustomer: "చైల్డ్ కస్టమర్ (రెఫర్ చేయబడిన)",
    selectChild: "చైల్డ్ కస్టమర్‌ను ఎంచుకోండి...",
    cancel: "రద్దు చేయండి",
    createLink: "లింక్ సృష్టించు",
    step3C_Title: "C. కస్టమర్ వివరాల పేజీ - సమగ్ర 360° వీక్షణ",
    step3C_Para: "కస్టమర్ పేరుపై క్లిక్ చేయడం ద్వారా వారి వివరణాత్మక ప్రొఫైల్ తెరవబడుతుంది, ఇది మీ వ్యాపారంతో వారి సంబంధం యొక్క పూర్తి 360° వీక్షణను అందిస్తుంది. ఈ పేజీ అనేక ట్యాబ్‌లుగా నిర్వహించబడుతుంది, ప్రతి ఒక్కటి కస్టమర్ కార్యాచరణ యొక్క నిర్దిష్ట అంశంపై దృష్టి సారిస్తుంది.",
    step3D_Title: "ప్రొఫైల్ హెడర్ & ముఖ్య మెట్రిక్స్",
    step3D_Para: "పేజీ ఎగువ భాగం సంప్రదింపు వివరాలు, సభ్యత్వ స్థాయి మరియు మొత్తం ఖర్చు మరియు ఆర్డర్‌ల సంఖ్య వంటి కీలక జీవితకాల విలువ మెట్రిక్‌లతో సహా ఒక చూపులో సారాంశాన్ని అందిస్తుంది.",
    headerScreenshotTitle: "కస్టమర్ వివరాల పేజీ - హెడర్ & గణాంకాలు",
    joinedYear: "2023లో చేరారు",
    goldMember: "గోల్డ్ మెంబర్",
    points: "1,250 పాయింట్లు",
    edit: "సవరించు",
    email: "ఇమెయిల్",
    totalOrders: "మొత్తం ఆర్డర్‌లు",
    avgOrderValue: "సగటు ఆర్డర్ విలువ",
    step3E_Title: "అవలోకనం ట్యాబ్",
    step3E_Para: "ఈ డిఫాల్ట్ ట్యాబ్ కస్టమర్ వ్యక్తిగత సమాచారం మరియు వారి ఇటీవలి ఆర్డర్ కార్యకలాపాల యొక్క త్వరిత సారాంశాన్ని అందిస్తుంది.",
    custOverviewScreenshotTitle: "అవలోకనం ట్యాబ్ - సమాచారం & ఇటీవలి కార్యాచరణ",
    customerInformation: "కస్టమర్ సమాచారం",
    phone: "ఫోన్",
    address: "చిరునామా",
    recentActivity: "ఇటీవలి కార్యాచరణ",
    orderPrefix: "ఆర్డర్ #",
    step3F_Title: "కొనుగోలు చరిత్ర ట్యాబ్",
    step3F_Para: "ఇక్కడ మీరు కస్టమర్ చేసిన ప్రతి ఆర్డర్ యొక్క పూర్తి జాబితాను చూడవచ్చు. ఈ ట్యాబ్‌లో శక్తివంతమైన ఆర్డర్ నిర్వహణ ఫీచర్లు ఉన్నాయి, ఇది కస్టమర్ ప్రొఫైల్ నుండి నేరుగా పాక్షిక రద్దులను నిర్వహించడానికి సిబ్బందిని అనుమతిస్తుంది.",
    purchaseHistoryScreenshotTitle: "కొనుగోలు చరిత్ర ట్యాబ్ - ఆర్డర్ నిర్వహణ",
    purchaseHistory: "కొనుగోలు చరిత్ర",
    partiallyCancelled: "పాక్షికంగా రద్దు చేయబడింది",
    organicApples: "సేంద్రీయ ఆపిల్స్ (1కేజీ)",
    shippedQuantity: "రవాణా చేయబడింది: 1",
    almondMilk: "బాదం పాలు",
    cancelledQuantity: "రద్దు చేయబడింది: 1",
    closeOrder: "ఆర్డర్ మూసివేయి",
    step3G_Title: "లాయల్టీ & పే లేటర్ ట్యాబ్‌లు",
    step3G_Para: "ఈ ట్యాబ్‌లు కస్టమర్ యొక్క లాయల్టీ మరియు క్రెడిట్ ప్రోగ్రామ్‌లతో వారి నిశ్చితార్థానికి సంబంధించిన వివరణాత్మక ఆర్థిక సారాంశాలను అందిస్తాయి.",
    loyaltyScreenshotTitle: "లాయల్టీ & పే లేటర్ సారాంశాలు",
    loyaltyProgram: "లాయల్టీ ప్రోగ్రామ్",
    availablePoints: "అందుబాటులో ఉన్న పాయింట్లు",
    earnedForOrder: "ఆర్డర్ #...5f3b కోసం సంపాదించినవి:",
    redeemedForOrder: "ఆర్డర్ #...2c4a కోసం రీడీమ్ చేయబడినవి:",
    payLaterWallet: "పే లేటర్ వాలెట్",
    limit: "పరిమితి",
    balance: "బ్యాలెన్స్",
    available: "అందుబాటులో",
    purchase: "కొనుగోలు #...5f3b:",
    paymentReceived: "చెల్లింపు అందుకుంది:",
    step3H_Title: "KYC ట్యాబ్",
    step3H_Para: "పే లేటర్ అర్హతను నిర్వహించడానికి KYC (మీ కస్టమర్‌ను తెలుసుకోండి) ట్యాబ్ చాలా ముఖ్యమైనది. ఇక్కడ, మీరు సమర్పించిన పత్రాలను సమీక్షించవచ్చు, దరఖాస్తులను ఆమోదించవచ్చు లేదా తిరస్కరించవచ్చు మరియు కస్టమర్‌కు స్థితిని తెలియజేయవచ్చు, అనుకూలతను నిర్ధారించుకోవచ్చు మరియు క్రెడిట్ రిస్క్‌ను నిర్వహించవచ్చు.",
    kycScreenshotTitle: "KYC ట్యాబ్ - డాక్యుమెంట్ వెరిఫికేషన్ & స్థితి నిర్వహణ",
    kycStatusDocs: "KYC స్థితి & పత్రాలు",
    currentStatus: "ప్రస్తుత స్థితి",
    verified: "ధృవీకరించబడింది",
    pauseWallet: "వాలెట్‌ను పాజ్ చేయండి",
    stopWallet: "వాలెట్‌ను ఆపండి",
    submittedDocuments: "సమర్పించిన పత్రాలు",
    aadharCard: "ఆధార్ కార్డు",
    viewDocument: "పత్రాన్ని చూడండి",
    step4Title: "B2B రిటైలర్స్ టాబ్ - బిజినెస్ పార్ట్‌నర్ మేనేజ్‌మెంట్",
    step4Intro: "సమగ్ర రిటైలర్ ప్రొఫైల్‌లు, క్రెడిట్ మేనేజ్‌మెంట్ మరియు పనితీరు ట్రాకింగ్‌తో మీ బిజినెస్-టు-బిజినెస్ సంబంధాలను నిర్వహించండి.",
    step4A_Title: "A. B2B రిటైలర్ డైరెక్టరీ",
    b2bDirectoryScreenshotTitle: "B2B రిటైలర్స్ ట్యాబ్ - బిజినెస్ కస్టమర్ ఇంటర్‌ఫేస్",
    b2bRetailersCount: "B2B రిటైలర్లు (89)",
    searchRetailers: "రిటైలర్‌లను శోధించండి...",
    allStatus: "అన్ని స్థితి",
    active: "యాక్టివ్",
    suspended: "సస్పెండ్ చేయబడింది",
    addRetailer: "రిటైలర్‌ను జోడించండి",
    contact: "సంప్రదించండి",
    type: "రకం",
    orders: "ఆర్డర్‌లు",
    totalBusiness: "మొత్తం వ్యాపారం:",
    creditLimit: "క్రెడిట్ పరిమితి:",
    outstanding: "బకాయి:",
    availableCredit: "అందుబాటులో ఉన్న క్రెడిట్:",
    viewDetails: "వివరాలను చూడండి",
    statement: "స్టేట్‌మెంట్",
    groceryStore: "కిరాణా దుకాణం",
    wholesale: "టోకు",
    retailChain: "రిటైల్ చైన్",
    goldPartner: "గోల్డ్ పార్ట్‌నర్",
    silverPartner: "సిల్వర్ పార్ట్‌నర్",
    platinumPartner: "ప్లాటినం పార్ట్‌నర్",
    step4B_Title: "B. B2B రిటైలర్ వివరాలను చూడటం",
    step4B_Para: "డైరెక్టరీ నుండి, ఏదైనా రిటైలర్ కార్డ్‌లోని \"వివరాలను చూడండి\" క్లిక్ చేయడం ద్వారా వారి సమగ్ర వివరాల పేజీకి తీసుకెళ్తుంది, ఇది లోతైన నిర్వహణకు అనుమతిస్తుంది.",
    step4C_Title: "C. కొత్త B2B రిటైలర్‌ను జోడించడం",
    step4C_Para: "డైరెక్టరీ హెడర్‌లోని \"రిటైలర్‌ను జోడించు\" బటన్ కొత్త వ్యాపార భాగస్వాములను ఆన్‌బోర్డ్ చేయడానికి మిమ్మల్ని అనుమతిస్తుంది. ఈ ప్రక్రియ వారి వ్యాపార వివరాలు, సంప్రదింపు సమాచారం మరియు ప్రారంభ ఖాతా సెట్టింగ్‌లను నమోదు చేయడం కలిగి ఉంటుంది.",
    addB2bScreenshotTitle: "కొత్త B2B రిటైలర్ ఫారమ్‌ను జోడించండి",
    addNewB2BRetailer: "కొత్త B2B రిటైలర్‌ను జోడించండి",
    enterDetailsNewPartner: "కొత్త వ్యాపార భాగస్వామి కోసం వివరాలను నమోదు చేయండి.",
    businessName: "వ్యాపార పేరు",
    contactPerson: "సంప్రదింపు వ్యక్తి",
    phoneNumber: "ఫోన్ నంబర్",
    businessType: "వ్యాపార రకం",
    selectType: "రకాన్ని ఎంచుకోండి...",
    restaurant: "రెస్టారెంట్",
    other: "ఇతర",
    step4D_Title: "D. B2B రిటైలర్ డీప్ డైవ్: వివరాల పేజీ",
    step4D_Para: "రిటైలర్ పేరుపై లేదా \"వివరాలను చూడండి\" బటన్‌పై క్లిక్ చేయడం ద్వారా వారి సమగ్ర ప్రొఫైల్ పేజీ తెరవబడుతుంది. ఇది ఆ వ్యాపార భాగస్వామితో మీ సంబంధం యొక్క ప్రతి అంశాన్ని, వారి ఖాతా స్థితి నుండి వారి పూర్తి ఆర్థిక చరిత్ర వరకు నిర్వహించడానికి కేంద్ర కేంద్రం.",
    step4E_Title: "E. రిటైలర్ సమాచారం & స్థితి ఒక చూపులో",
    step4E_Para: "వివరాల పేజీ యొక్క ఎడమ సైడ్‌బార్ రిటైలర్ యొక్క ప్రస్తుత స్థితి మరియు అవసరమైన సమాచారం యొక్క త్వరిత, ఏకీకృత వీక్షణను అందిస్తుంది.",
    b2bInfoSidebarScreenshotTitle: "రిటైలర్ వివరాల పేజీ - సమాచారం సైడ్‌బార్",
    businessInformation: "వ్యాపార సమాచారం",
    gst: "GST:",
    accountStatus: "ఖాతా స్థితి",
    pendingApproval: "ఆమోదం పెండింగ్‌లో ఉంది",
    approveRetailer: "రిటైలర్‌ను ఆమోదించండి",
    quickStats: "త్వరిత గణాంకాలు",
    b2bInfoSidebarList1: "• <b>వ్యాపార సమాచారం:</b> ప్రధాన సంప్రదింపు మరియు పన్ను వివరాలు.",
    b2bInfoSidebarList2: "• <b>ఖాతా స్థితి:</b> వారి ప్రస్తుత స్థితిని చూపుతుంది (ఉదా., 'యాక్టివ్', 'ఆమోదం పెండింగ్‌లో'). పెండింగ్‌లో ఉన్న ఖాతాల కోసం, వాటిని నేరుగా ఆమోదించడానికి ఒక బటన్ కనిపిస్తుంది.",
    b2bInfoSidebarList3: "• <b>త్వరిత గణాంకాలు:</b> జీవితకాల ఖర్చు మరియు ప్రస్తుత బకాయి బ్యాలెన్స్‌తో సహా ఉన్నత-స్థాయి ఆర్థిక సారాంశం.",
    step4F_Title: "F. రిటైలర్ కార్యకలాపాలను నిర్వహించడం (ట్యాబ్‌లు)",
    step4F_Para: "ప్రధాన కంటెంట్ ప్రాంతం రిటైలర్‌కు సంబంధించిన అన్ని లావాదేవీల డేటా మరియు నిర్వహణ విధులను నిర్వహించడానికి ట్యాబ్డ్ ఇంటర్‌ఫేస్‌ను ఉపయోగిస్తుంది.",
    step4G_H1: "1. ఆర్డర్‌ల ట్యాబ్",
    step4G_P1: "ఈ రిటైలర్ చేసిన అన్ని కొనుగోలు ఆర్డర్‌ల పూర్తి చరిత్రను చూడండి. మీరు విజువల్ కార్డ్ వీక్షణ మరియు కాంపాక్ట్ జాబితా వీక్షణ మధ్య టోగుల్ చేయవచ్చు.",
    b2bOrdersScreenshotTitle: "రిటైలర్ ఆర్డర్‌ల ట్యాబ్",
    mayDate: "May 20, 2024",
    mayDate2: "May 18, 2024",
    dispatched: "పంపబడింది",
    step4G_H2: "2. చెల్లింపుల ట్యాబ్",
    step4G_P2: "రిటైలర్ నుండి అందుకున్న అన్ని చెల్లింపులను ట్రాక్ చేయండి. మీరు \"చెల్లింపును రికార్డ్ చేయండి\" బటన్‌ను ఉపయోగించి బ్యాంక్ బదిలీలు లేదా నగదు సేకరణల వంటి కొత్త చెల్లింపులను మాన్యువల్‌గా రికార్డ్ చేయవచ్చు.",
    b2bPaymentsScreenshotTitle: "రిటైలర్ చెల్లింపుల ట్యాబ్",
    paymentHistory: "చెల్లింపు చరిత్ర",
    recordPayment: "చెల్లింపును రికార్డ్ చేయండి",
    date: "తేదీ",
    amount: "మొత్తం",
    method: "విధానం",
    reference: "సూచన",
    bankTransfer: "బ్యాంక్ బదిలీ",
    upi: "UPI",
    step4G_H3: "3. స్టేట్‌మెంట్ ట్యాబ్",
    step4G_P3: "రిటైలర్ కోసం పూర్తి, ఐటమైజ్ చేయబడిన ఆర్థిక స్టేట్‌మెంట్‌ను చూడండి. ఇది అన్ని ఇన్‌వాయిస్‌లు (డెబిట్‌లు) మరియు చెల్లింపులు (క్రెడిట్‌లు) క్రమంగా జాబితా చేయడం ద్వారా నడుస్తున్న బ్యాలెన్స్‌ను అందిస్తుంది, ఖచ్చితమైన బకాయి మొత్తాన్ని చూపించడానికి.",
    b2bStatementScreenshotTitle: "రిటైలర్ ఖాతా స్టేట్‌మెంట్ ట్యాబ్",
          accountStatement: "ఖాతా స్టేట్‌మెంట్",
      currentOutstandingBalance: "ప్రస్తుత బకాయి బ్యాలెన్స్",
      tableDescription: "వివరణ",
      debit: "డెబిట్",
      credit: "క్రెడిట్",
    paymentViaBankTransfer: "బ్యాంక్ బదిలీ ద్వారా చెల్లింపు",
    step4G_H4: "4. పే లేటర్ ట్యాబ్",
    step4G_P4: "ఈ ట్యాబ్ రిటైలర్ యొక్క పే లేటర్ వాలెట్‌కు సంబంధించిన అన్ని లావాదేవీలను ప్రదర్శిస్తుంది, క్రెడిట్‌పై చేసిన కొనుగోళ్లు మరియు తదుపరి రీపేమెంట్లు లేదా సర్దుబాట్లు సహా. ఇది వారి క్రెడిట్ ఖాతా కోసం స్పష్టమైన ఆడిట్ ట్రైల్‌ను అందిస్తుంది.",
    b2bPayLaterScreenshotTitle: "రిటైలర్ పే లేటర్ లావాదేవీల ట్యాబ్",
    payLaterTransactions: "పే లేటర్ లావాదేవీలు",
    noPayLaterServices: "ఈ రిటైలర్ ఇంకా పే లేటర్ సేవలను ఉపయోగించలేదు.",
    step4G_H5: "5. KYC ట్యాబ్",
    step4G_P5: "KYC (మీ కస్టమర్‌ను తెలుసుకోండి) ట్యాబ్ రిటైలర్ యొక్క గుర్తింపును ధృవీకరించడానికి మరియు ప్రమాదాన్ని అంచనా వేయడానికి చాలా ముఖ్యమైనది, ముఖ్యంగా పే లేటర్ సేవలను సక్రియం చేయడానికి. ఇక్కడ, మీరు నామినీ సమాచారం, వ్యక్తిగత చిరునామాలు మరియు అదనపు గుర్తింపు ఫోటోల వంటి ముఖ్యమైన వివరాలను సేకరించి నిల్వ చేయవచ్చు.",
    b2bKycScreenshotTitle: "రిటైలర్ KYC ట్యాబ్",
    kycVerification: "KYC ధృవీకరణ",
    nomineeFullName: "నామినీ పూర్తి పేరు",
    personalAddress: "వ్యక్తిగత చిరునామా",
    saveKycDetails: "KYC వివరాలను సేవ్ చేయండి",
    step5Title: "నెట్‌వర్క్ అనలిటిక్స్ ట్యాబ్",
    step5Intro: "అనలిటిక్స్ ట్యాబ్ మీ కస్టమర్ నెట్‌వర్క్ పనితీరుపై సమగ్ర అంతర్దృష్టులను అందిస్తుంది, ఆదాయ పోకడలు, కస్టమర్ అక్విజిషన్, రిటెన్షన్ మెట్రిక్‌లు మరియు B2C మరియు B2B విభాగాల మధ్య తులనాత్మక విశ్లేషణతో సహా.",
    analyticsScreenshotTitle: "అనలిటిక్స్ ట్యాబ్ - నెట్‌వర్క్ పనితీరు డ్యాష్‌బోర్డ్",
    revenueGrowth: "రాబడి వృద్ధి",
    b2cGrowthMonth: "B2C వృద్ధి (ఈ నెల)",
    b2bGrowthMonth: "B2B వృద్ధి (ఈ నెల)",
    totalNetworkGrowth: "మొత్తం నెట్‌వర్క్ వృద్ధి",
    customerMetrics: "కస్టమర్ మెట్రిక్స్",
    newB2CCustomers: "కొత్త B2C కస్టమర్‌లు",
    newB2BPartners: "కొత్త B2B భాగస్వాములు",
    customerRetention: "కస్టమర్ రిటెన్షన్",
    referralNetwork: "రెఫరల్ నెట్‌వర్క్",
    activeReferrers: "యాక్టివ్ రెఫరర్‌లు",
    newReferralsMonth: "కొత్త రెఫరల్‌లు (ఈ నెల)",
    referralConversionRate: "రెఫరల్ మార్పిడి రేటు",
    b2cVsB2bRevenue: "B2C vs B2B రాబడి పోలిక (గత 6 నెలలు)",
    revenueComparisonDesc: "B2C మరియు B2B విభాగాల రెండింటికీ నెలవారీ పోకడలను చూపే ఇంటరాక్టివ్ రాబడి పోలిక చార్ట్",
    b2cCustomerTierDist: "B2C కస్టమర్ టైర్ పంపిణీ",
    platinumTier: "ప్లాటినం (₹50,000+)",
    goldTier: "గోల్డ్ (₹25,000+)",
    silverTier: "సిల్వర్ (₹10,000+)",
    bronzeTier: "కంచు (కొత్త)",
    b2bPartnerCategories: "B2B భాగస్వామి వర్గాలు",
    groceryStores: "కిరాణా దుకాణాలు",
    restaurantsCafes: "రెస్టారెంట్లు & కేఫ్‌లు",
    hotels: "హోటల్స్",
    retailChains: "రిటైల్ చైన్స్",
    others: "ఇతర",
    bestPracticesTitle: "నెట్‌వర్క్ నిర్వహణ కోసం ఉత్తమ పద్ధతులు",
    bestPractice1: "• కొనుగోలు ప్రవర్తన ఆధారంగా కస్టమర్ స్థాయిలను క్రమం తప్పకుండా సమీక్షించండి మరియు నవీకరించండి",
    bestPractice2: "• రెఫరల్ నెట్‌వర్క్ పనితీరును పర్యవేక్షించండి మరియు అగ్ర రెఫరర్‌లకు బహుమతులు ఇవ్వండి",
    bestPractice3: "• ప్రమాదాన్ని తగ్గించడానికి B2B భాగస్వాముల కోసం ఆరోగ్యకరమైన క్రెడిట్ పరిమితులను నిర్వహించండి",
    bestPractice4: "• తక్కువ పనితీరు గల విభాగాలలో వృద్ధి అవకాశాలను గుర్తించడానికి అనలిటిక్స్‌ను ఉపయోగించండి",
    bestPractice5: "• కస్టమర్ విభజన ఆధారంగా లక్ష్య మార్కెటింగ్ ప్రచారాలను అమలు చేయండి",
    bestPractice6: "• సముపార్జన మరియు నిలుపుదల వ్యూహాలను ఆప్టిమైజ్ చేయడానికి కస్టమర్ జీవితకాల విలువను ట్రాక్ చేయండి",
  },
  ta: {
    pageTitle: "நெட்வொர்க் மேலாண்மை கையேடு",
    backToManual: "கையேட்டுக்கு திரும்பு",
    description: "வலுவான வணிக உறவுகளை கட்டியெழுப்புவதற்கும் பராமரிப்பதற்கும் வாடிக்கையாளர் உறவு மேலாண்மை, B2B சில்லறை விற்பனையாளர் கூட்டாண்மைகள், பல-நிலை பரிந்துரை அமைப்புகள் மற்றும் விரிவான நெட வொர்க் பகுப்பாய்வுகளில் தேர்ச்சி பெறுங்கள்.",
    step1Title: "நெட்வொர்க் மேலாண்மை டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "நெட்வொர்க் மேனேஜ்மென்ட் டாஷ்போர்டு தனிப்பட்ட B2C வாடிக்கையாளร์களிடமிருந்து பெரிய B2B சில்லறை விற்பனை கூட்டாளர்கள் வரை உங்கள் முழு வாடிக்கையாளர் சுற்றுச்சூழல் அமைப்பின் ஒருங்கிணைந்த பார்வையை வழங்குகிறது, சக्तिशाली பகுப்பாய்வுகள் மற்றும் உறவு கண்காணிப்பு கருவிகளுடன்.",
    step1A: "A. நெட்வொர்க் நிர்வாகத்தை அணுகுதல்",
    dashboardScreenshotTitle: "நெட்வொர்க் மேலாண்மை டாஷ்போர்டு - முக்கிய இடைமுகம்",
    networkManagement: "நெட்வொர்க் மேலாण्मै",
    networkDesc: "B2C வाडिक्कையாळர्गल্, B2B சিল্লरै বিক्रेতাগल् மற்றும் রেফেরাল সਂবਂधাগুळ సমগ্র নিर্বाहণ",
    referralDashboard: "ரெஃபரல் டாஷ்போர்டு",
    addB2BRetailer: "B2B சில்லறை விற்பனையாளர் சேர்க்கவும்",
    b2cCustomers: "B2C வாடிக்கையாளர்கள்",
    b2bRetailers: "B2B சில்லறை விற்பனையாளர்கள்",
    b2cRevenue: "B2C வருவாய்",
    b2bRevenue: "B2B வருவாய்",
    overview: "கண்ணோட்டம்",
    analytics: "பகுப்பாய்வு",
    networkOverviewDesc: "நெட்வொர்க் மேலாண்மை இடைமுகம் நான்கு முக்கிய தாவல்களாக ஒழுங்கமைக்கப்பட்டுள்ளது, ஒவ்வொன்றும் வாடிக்கையாளர் உறவு நிர்வாகத்தின் வெவ்வேறு அம்சங்களுக்கான சிறப்பு செயல்பாட்டை வழங்குகிறது.",
    keyFeaturesOverview: "முக்கிய அம்சங்களின் மேலோட்டம்",
    keyFeature1: "• B2C வாடிக்கையாளர்கள் மற்றும் B2B சில்லறை விற்பனையாளர்களின் ஒருங்கிணைந்த பார்வை",
    keyFeature2: "• பல-நிலை பரிந்துரை அமைப்பு கண்காணிப்பு",
    keyFeature3: "• வாடிக்கையாளர் வகை வாரியான விரிவான வருவாய் பகுப்பாய்வுகள்",
    keyFeature4: "• மேம்பட்ட வடிகட்டுதல் மற்றும் தேடல் திறன்கள்",
    keyFeature5: "• வாடிக்கையாளர் வாழ்க்கை சுழற்சி மேலாண்மை கருவிகள்",
    step2Title: "கண்ணோட்டம் தாவல்: ஒருங்கிணைந்த செயல்பாட்டு ஊட்டம்",
    step2Intro: "கண்ணோட்டம் தாவல் உங்கள் முழு வாடிக்கையாளர் நெட்வொர்க்கின் உயர் மட்ட சுருக்கத்தை வழங்குகிறது, B2C வாடிக்கையாளர்கள் மற்றும் B2B சில்லறை விற்பனையாளர்களிடமிருந்து சமீபத்திய செயல்பாடுகளை ஒரு ஒருங்கிணைந்த பார்வையில் காட்டுகிறது.",
    activityScreenshotTitle: "கண்ணோட்டம் தாவல் - சமீபத்திய செயல்பாடு டாஷ்போர்டு",
    recentB2CActivity: "சமீபத்திய B2C செயல்பாடு",
    priyaSharma: "பிரியா சர்மா",
    rajeshKumar: "ராஜேஷ் குமார்",
    anithaReddy: "அனிதா ரெட்டி",
    hoursAgo: "2 மணி நேரத்திற்கு முன்பு",
    hoursAgo4: "4 மணி நேரத்திற்கு முன்பு",
    hoursAgo6: "6 மணி நேரத்திற்கு முன்பு",
    view: "காண்க",
    recentB2BActivity: "சமீபத்திய B2B செயல்பாடு",
    greenValleyStore: "கிரீன் வேலி ஸ்டோர்",
    freshMarketHub: "புதிய மார்க்கெட் ஹப்",
    cityGrocersLtd: "சிட்டி க்ரோசர்ஸ் லிமிடெட்",
    hourAgo: "1 மணி நேரத்திற்கு முன்பு",
    hoursAgo3: "3 மணி நேரத்திற்கு முன்பு",
    hoursAgo5: "5 மணி நேரத்திற்கு முன்பு",
    confirmed: "உறுதிப்படுத்தப்பட்டது",
    pending: "நிலுவையிலுள்ளது",
    delivered: "டெலிவரி செய்யப்பட்டது",
    step3Title: "B2C வாடிக்கையாளர்கள் தாவல்: CRM & பரிந்துரைகள்",
    step3Intro: "இந்த தாவல் தனிப்பட்ட B2C வாடிக்கையாளர்களுக்கான உங்கள் பிரத்யேக CRM ஆகும், இது உறவுகளை நிர்வகிக்க, கொள்முதல் வரலாற்றைக் கண்காணிக்க மற்றும் நடத்தையை பகுப்பாய்வு செய்ய தேவையான அனைத்து கருவிகளையும் வழங்குகிறது. இது முக்கிய CRM டாஷ்போர்டுக்கு செயல்பாட்டு ரீதியாக ஒத்திருக்கிறது.",
    step3A_Title: "A. B2C வாடிக்கையாளர் அடைவு",
    step3A_Para: "முக்கிய பார்வை உங்கள் அனைத்து B2C வாடிக்கையாளர்களையும் விரிவான, வரிசைப்படுத்தக்கூடிய மற்றும் தேடக்கூடிய பட்டியலைக் காட்டுகிறது. குறிப்பிட்ட வாடிக்கையாளர்களைக் கண்டறிய உறுப்பினர் அடுக்கு அல்லது அகரவரிசைப்படி விரைவாக வடிகட்டலாம். எந்தவொரு வாடிக்கையாளரின் பெயரைக் கிளிக் செய்வதன் மூலம் அவர்களின் விரிவான சுயவிவரப் பக்கத்திற்கு அழைத்துச் செல்லப்படும்.",
    directoryScreenshotTitle: "B2C வாடிக்கையாளர் அடைவு - பட்டியல் பார்வை",
    customerDirectory: "வாடிக்கையாளர் அடைவு",
    searchCustomers: "வாடிக்கையாளர்களைத் தேடு...",
    allTiers: "அனைத்து அடுக்குகள்",
    platinum: "பிளாட்டினம்",
    gold: "தங்கம்",
    silver: "வெள்ளி",
    bronze: "வெண்கலம்",
    customer: "வாடிக்கையாளர்",
    tier: "அடுக்கு",
    totalSpent: "மொத்த செலவு",
    lastPurchase: "கடைசி கொள்முதல்",
    actions: "செயல்கள்",
    daysAgo: "2 நாட்களுக்கு முன்பு",
    weekAgo: "1 வாரத்திற்கு முன்பு",
    step3B_Title: "B. புதிய பரிந்துரை இணைப்பை உருவாக்குதல்",
    step3B_Para: "The \"Create Referral\" button allows you to establish a parent-child relationship between two existing customers, which is essential for the multi-level loyalty program. The parent customer will earn bonus points based on the child's purchases.",
    referralModalScreenshotTitle: "பரிந்துரை படிவம்",
    createCustomerReferral: "வாடிக்கையாளர் பரிந்துரையை உருவாக்கு",
    selectParentChild: "பரிந்துரை நெட்வொர்க்கில் இணைக்க ஒரு பெற்றோர் மற்றும் குழந்தை வாடிக்கையாளரைத் தேர்ந்தெடுக்கவும்.",
    parentCustomer: "பெற்றோர் வாடிக்கையாளர் (பரிந்துரையாளர்)",
    selectParent: "பெற்றோர் வாடிக்கையாளரைத் தேர்ந்தெடுக்கவும்...",
    childCustomer: "குழந்தை வாடிக்கையாளர் (பரிந்துரைக்கப்பட்டவர்)",
    selectChild: "குழந்தை வாடிக்கையாளரைத் தேர்ந்தெடுக்கவும்...",
    cancel: "ரத்து செய்",
    createLink: "இணைப்பை உருவாக்கு",
    step3C_Title: "C. வாடிக்கையாளர் விவரப் பக்கம் - ஒரு விரிவான 360° பார்வை",
    step3C_Para: "ஒரு வாடிக்கையாளரின் பெயரைக் கிளிக் செய்வதன் மூலம் அவர்களின் விரிவான சுயவிவரம் திறக்கும், இது உங்கள் வணிகத்துடன் அவர்களின் உறவின் முழுமையான 360° பார்வையை வழங்குகிறது. இந்த பக்கம் பல தாவல்களாக ஒழுங்கமைக்கப்பட்டுள்ளது, ஒவ்வொன்றும் வாடிக்கையாளரின் செயல்பாட்டின் ஒரு குறிப்பிட்ட அம்சத்தில் கவனம் செலுத்துகிறது.",
    step3D_Title: "சுயவிவர தலைப்பு மற்றும் முக்கிய அளவீடுகள்",
    step3D_Para: "பக்கத்தின் மேற்பகுதி, தொடர்பு விவரங்கள், உறுப்பினர் அடுக்கு மற்றும் மொத்த செலவு மற்றும் ஆர்டர் எண்ணிக்கை போன்ற முக்கிய வாழ்நாள் மதிப்பு அளவீடுகள் உட்பட ஒரு விரைவான சுருக்கத்தை வழங்குகிறது.",
    headerScreenshotTitle: "வாடிக்கையாளர் விவரப் பக்கம் - தலைப்பு & புள்ளிவிவரங்கள்",
    joinedYear: "2023 இல் இணைந்தது",
    goldMember: "தங்க உறுப்பினர்",
    points: "1,250 புள்ளிகள்",
    edit: "திருத்து",
    email: "மின்னஞ்சல்",
    totalOrders: "மொத்த ஆர்டர்கள்",
    avgOrderValue: "சராசரி ஆர்டர் மதிப்பு",
    step3E_Title: "கண்ணோட்டம் தாவல்",
    step3E_Para: "இந்த இயல்புநிலை தாவல் வாடிக்கையாளரின் தனிப்பட்ட தகவல்கள் மற்றும் அவர்களின் சமீபத்திய ஆர்டர் செயல்பாடுகளின் விரைவான சுருக்கத்தை வழங்குகிறது.",
    custOverviewScreenshotTitle: "கண்ணோட்டம் தாவல் - தகவல் & சமீபத்திய செயல்பாடு",
    customerInformation: "வாடிக்கையாளர் தகவல்",
    phone: "தொலைபேசி",
    address: "முகவரி",
    recentActivity: "சமீபத்திய செயல்பாடு",
    orderPrefix: "ஆர்டர் #",
    step3F_Title: "கொள்முதல் வரலாறு தாவல்",
    step3F_Para: "இங்கு நீங்கள் வாடிக்கையாளர் செய்த ஒவ்வொரு ஆர்டரின் முழுமையான பட்டியலையும் பார்க்கலாம். இந்த தாவலில் சக்திவாய்ந்த ஆர்டர் மேலாண்மை அம்சங்கள் உள்ளன, இது வாடிக்கையாளரின் சுயவிவரத்திலிருந்து நேரடியாக பகுதியளவு ரத்துசெய்தல்களைக் கையாள ஊழியர்களை அனுமதிக்கிறது.",
    purchaseHistoryScreenshotTitle: "கொள்முதல் வரலாறு தாவல் - ஆர்டர் மேலாண்மை",
    purchaseHistory: "கொள்முதல் வரலாறு",
    partiallyCancelled: "பகுதியளவு ரத்துசெய்யப்பட்டது",
    organicApples: "ஆர்கானிக் ஆப்பிள்கள் (1kg)",
    shippedQuantity: "அனுப்பப்பட்டது: 1",
    almondMilk: "பாதாம் பால்",
    cancelledQuantity: "ரத்துசெய்யப்பட்டது: 1",
    closeOrder: "ஆர்டரை மூடு",
    step3G_Title: "விசுவாசம் மற்றும் பின்னர் செலுத்து தாவல்கள்",
    step3G_Para: "இந்த தாவல்கள் வாடிக்கையாளரின் விசுவாசம் மற்றும் கடன் திட்டங்களுடனான தொடர்பின் விரிவான நிதி சுருக்கங்களை வழங்குகிறது.",
    loyaltyScreenshotTitle: "விசுவாசம் மற்றும் பின்னர் செலுத்து சுருக்கங்கள்",
    loyaltyProgram: "விசுவாச திட்டம்",
    availablePoints: "கிடைக்கும் புள்ளிகள்",
    earnedForOrder: "ஆர்டர் #...5f3b க்காக சம்பாதித்தது:",
    redeemedForOrder: "ஆர்டர் #...2c4a க்காக மீட்டெடுக்கப்பட்டது:",
    payLaterWallet: "பின்னர் செலுத்து வாலட்",
    limit: "வரம்பு",
    balance: "இருப்பு",
    available: "கிடைக்கிறது",
    purchase: "கொள்முதல் #...5f3b:",
    paymentReceived: "பணம் பெற்றது:",
    step3H_Title: "KYC தாவல்",
    step3H_Para: "KYC (உங்கள் வாடிக்கையாளரை அறிந்து கொள்ளுங்கள்) தாவல் பின்னர் செலுத்துவதற்கான தகுதியை நிர்வகிப்பதில் முக்கியமானது. இங்கு, நீங்கள் சமர்ப்பித்த ஆவணங்களை மதிப்பாய்வு செய்யலாம், விண்ணப்பங்களை அங்கீகரிக்கலாம் அல்லது நிராகரிக்கலாம், மேலும் வாடிக்கையாளருக்கு நிலையைத் தெரிவிக்கலாம், இணக்கத்தை உறுதிசெய்து கடன் அபாயத்தை நிர்வகிக்கலாம்.",
    kycScreenshotTitle: "KYC தாவல் - ஆவண சரிபார்ப்பு மற்றும் நிலை மேலாண்மை",
    kycStatusDocs: "KYC நிலை மற்றும் ஆவணங்கள்",
    currentStatus: "தற்போதைய நிலை",
    verified: "சரிபார்க்கப்பட்டது",
    pauseWallet: "வாலட்டை இடைநிறுத்து",
    stopWallet: "வாலட்டை நிறுத்து",
    submittedDocuments: "சமர்ப்பிக்கப்பட்ட ஆவணங்கள்",
    aadharCard: "ஆதார் அட்டை",
    viewDocument: "ஆவணத்தைப் பார்",
    step4Title: "B2B சில்லறை விற்பனையாளர்கள் டேப் - வணிக கூட்டாளர் மேலாண்மை",
    step4Intro: "விரிவான சில்லறை விற்பனையாளர் சுயவிवरங்கள், கடன் மேலாண्मૈ మిట్టు பனितीरು கண্काணિપ્પુடన్ உங்கள் வணிகத்திலிருந್து வणिగ உறவுગળನ્ను निर्वహించండి.",
    step4A_Title: "A. B2B சில்லறை விற்பனையாளர் அடைவு",
    b2bDirectoryScreenshotTitle: "B2B சில்லறை விற்பனையாளர்கள் தாவல் - வணிக வாடிக்கையாளர் இடைமுகம்",
    b2bRetailersCount: "B2B சில்லறை விற்பனையாளர்கள் (89)",
    searchRetailers: "சில்லறை விற்பனையாளர்களைத் தேடு...",
    allStatus: "அனைத்து நிலை",
    active: "செயலில்",
    suspended: "நிறுத்தப்பட்டது",
    addRetailer: "சில்லறை விற்பனையாளரைச் சேர்",
    contact: "தொடர்பு",
    type: "வகை",
    orders: "ஆர்டர்கள்",
    totalBusiness: "மொத்த வணிகம்:",
    creditLimit: "கடன் வரம்பு:",
    outstanding: "நிலுவையில்:",
    availableCredit: "கிடைக்கும் கடன்:",
    viewDetails: "விவரங்களைப் பார்",
    statement: "அறிக்கை",
    groceryStore: "மளிகைக் கடை",
    wholesale: "மொத்த வியாபாரம்",
    retailChain: "சில்லறை சங்கிலி",
    goldPartner: "தங்க பங்குதாரர்",
    silverPartner: "வெள்ளி பங்குதாரர்",
    platinumPartner: "பிளாட்டினம் பங்குதாரர்",
    step4B_Title: "B. B2B சில்லறை விற்பனையாளர் விவரங்களைப் பார்த்தல்",
    step4B_Para: "அடைவிலிருந்து, எந்தவொரு சில்லறை விற்பனையாளரின் அட்டையிலும் \"விவரங்களைக் காண்க\" என்பதைக் கிளிக் செய்வதன் மூலம் அவர்களின் விரிவான விவரப் பக்கத்திற்கு அழைத்துச் செல்லப்படும், இது ஆழமான நிர்வாகத்திற்கு அனுமதிக்கிறது.",
    step4C_Title: "C. புதிய B2B சில்லறை விற்பனையாளரைச் சேர்த்தல்",
    step4C_Para: "அடைவு தலைப்பில் உள்ள \"சில்லறை விற்பனையாளரைச் சேர்\" பொத்தான் புதிய வணிகப் பங்காளைகளைச் சேர்க்க உங்களை அனுமதிக்கிறது. இந்தச் செயல்முறையில் அவர்களின் வணிக விவரங்கள், தொடர்புத் தகவல் மற்றும் ஆரம்ப கணக்கு அமைப்புகள் உள்ளிடப்படும்.",
    addB2bScreenshotTitle: "புதிய B2B சில்லறை விற்பனையாளர் படிவத்தைச் சேர்",
    addNewB2BRetailer: "புதிய B2B சில்லறை விற்பனையாளரைச் சேர்",
    enterDetailsNewPartner: "புதிய வணிகப் பங்குதாரருக்கான விவரங்களை உள்ளிடவும்.",
    businessName: "வணிகப் பெயர்",
    contactPerson: "தொடர்பு நபர்",
    phoneNumber: "தொலைபேசி எண்",
    businessType: "வணிக வகை",
    selectType: "வகையைத் தேர்ந்தெடுக்கவும்...",
    restaurant: "உணவகம்",
    other: "மற்றவை",
    step4D_Title: "D. B2B சில்லறை விற்பனையாளர் ஆழமான ஆய்வு: விவரப் பக்கம்",
    step4D_Para: "ஒரு சில்லறை விற்பனையாளரின் பெயர் அல்லது \"விவரங்களைக் காண்க\" பொத்தானைக் கிளிக் செய்வதன் மூலம் அவர்களின் விரிவான சுயவிவரப் பக்கம் திறக்கும். இது அந்த வணிகப் பங்குதாரருடனான உங்கள் உறவின் ஒவ்வொரு அம்சத்தையும், அவர்களின் கணக்கு நிலை முதல் அவர்களின் முழுமையான நிதி வரலாறு வரை நிர்வகிப்பதற்கான மைய மையமாகும்.",
    step4E_Title: "E. சில்லறை விற்பனையாளர் தகவல் மற்றும் நிலை ஒரு பார்வை",
    step4E_Para: "விவரப் பக்கத்தின் இடதுபக்கப் பட்டி, சில்லறை விற்பனையாளரின் தற்போதைய நிலை மற்றும் அத்தியாவசியத் தகவல்களை விரைவான, ஒருங்கிணைந்த பார்வையில் வழங்குகிறது.",
    b2bInfoSidebarScreenshotTitle: "சில்லறை விற்பனையாளர் விவரப் பக்கம் - தகவல் பக்கப்பட்டி",
    businessInformation: "வணிகத் தகவல்",
    gst: "GST:",
    accountStatus: "கணக்கு நிலை",
    pendingApproval: "ஒப்புதலுக்காக காத்திருக்கிறது",
    approveRetailer: "சில்லறை விற்பனையாளரை அங்கீகரி",
    quickStats: "விரைவு புள்ளிவிவரங்கள்",
    b2bInfoSidebarList1: "• <b>வணிகத் தகவல்:</b> முக்கிய தொடர்பு மற்றும் வரி விவரங்கள்.",
    b2bInfoSidebarList2: "• <b>கணக்கு நிலை:</b> அவர்களின் தற்போதைய நிலையை (எ.கா., 'செயலில்', 'ஒப்புதலுக்காக காத்திருக்கிறது') காட்டுகிறது. நிலுவையில் உள்ள கணக்குகளுக்கு, அவற்றை நேரடியாக அங்கீகரிக்க ஒரு பொத்தான் தோன்றும்.",
    b2bInfoSidebarList3: "• <b>விரைவு புள்ளிவிவரங்கள்:</b> வாழ்நாள் செலவு மற்றும் தற்போதைய நிலுவைத் தொகை உட்பட உயர் மட்ட நிதி சுருக்கம்.",
    step4F_Title: "F. சில்லறை விற்பனையாளர் செயல்பாடுகளை நிர்வகித்தல் (தாவல்கள்)",
    step4F_Para: "முக்கிய உள்ளடக்கப் பகுதி சில்லறை விற்பனையாளருடன் தொடர்புடைய அனைத்து பரிவர்த்தனை தரவு மற்றும் மேலாண்மை செயல்பாடுகளை ஒழுங்கமைக்க தாவல் இடைமுகத்தைப் பயன்படுத்துகிறது.",
    step4G_H1: "1. ஆர்டர்கள் தாவல்",
    step4G_P1: "இந்த சில்லறை விற்பனையாளர் செய்த அனைத்து கொள்முதல் ஆர்டர்களின் முழுமையான வரலாற்றைக் காணலாம். ஒரு காட்சி அட்டை பார்வைக்கும் ஒரு சிறிய பட்டியல் பார்வைக்கும் இடையில் நீங்கள் மாறலாம்.",
    b2bOrdersScreenshotTitle: "சில்லறை விற்பனையாளர் ஆர்டர்கள் தாவல்",
    mayDate: "May 20, 2024",
    mayDate2: "May 18, 2024",
    dispatched: "அனுப்பப்பட்டது",
    step4G_H2: "2. கட்டணங்கள் தாவல்",
    step4G_P2: "சில்லறை விற்பனையாளரிடமிருந்து பெறப்பட்ட அனைத்து கட்டணங்களையும் கண்காணிக்கவும். \"கட்டணத்தை பதிவுசெய்\" பொத்தானைப் பயன்படுத்தி வங்கி பரிமாற்றங்கள் அல்லது பண வசூலிப்பு போன்ற புதிய கட்டணங்களை கைமுறையாகவும் பதிவு செய்யலாம்.",
    b2bPaymentsScreenshotTitle: "சில்லறை விற்பனையாளர் கட்டணங்கள் தாவல்",
    paymentHistory: "கட்டண வரலாறு",
    recordPayment: "கட்டணத்தைப் பதிவு செய்",
    date: "தேதி",
    amount: "தொகை",
    method: "முறை",
    reference: "குறிப்பு",
    bankTransfer: "வங்கி பரிமாற்றம்",
    upi: "யுபிஐ",
    step4G_H3: "3. அறிக்கை தாவல்",
    step4G_P3: "சில்லறை விற்பனையாளருக்கான முழுமையான, வரிசைப்படுத்தப்பட்ட நிதி அறிக்கையைப் பார்க்கவும். இது அனைத்து விலைப்பட்டியல் (பற்று) மற்றும் கட்டணங்கள் (வரவு) காலவரிசைப்படி பட்டியலிடுவதன் மூலம் ஒரு இயங்கும் இருப்பை வழங்குகிறது, இதன் மூலம் சரியான நிலுவைத் தொகையைக் காட்டுகிறது.",
    b2bStatementScreenshotTitle: "சில்லறை விற்பனையாளர் கணக்கு அறிக்கை தாவல்",
          accountStatement: "கணக்கு அறிக்கை",
      currentOutstandingBalance: "தற்போதைய நிலுவைத் தொகை",
      tableDescription: "விளக்கம்",
      debit: "பற்று",
      credit: "வரவு",
    paymentViaBankTransfer: "வங்கி பரிமாற்றம் மூலம் பணம்",
    step4G_H4: "4. பின்னர் செலுத்து தாவல்",
    step4G_P4: "இந்த தாவல் சில்லறை விற்பனையாளரின் பின்னர் செலுத்து வாலட்டுடன் தொடர்புடைய அனைத்து பரிவர்த்தனைகளையும் காட்டுகிறது, இதில் கடன் மூலம் செய்யப்பட்ட கொள்முதல்கள் மற்றும் அடுத்தடுத்த திருப்பிச் செலுத்துதல் அல்லது சரிசெய்தல்கள் ஆகியவை அடங்கும். இது அவர்களின் கடன் கணக்கிற்கான தெளிவான தணிக்கை தடயத்தை வழங்குகிறது.",
    b2bPayLaterScreenshotTitle: "சில்லறை விற்பனையாளர் பின்னர் செலுத்து பரிவர்த்தனைகள் தாவல்",
    payLaterTransactions: "பின்னர் செலுத்து பரிவர்த்தனைகள்",
    noPayLaterServices: "இந்த சில்லறை விற்பனையாளர் இன்னும் பின்னர் செலுத்து சேவைகளைப் பயன்படுத்தவில்லை.",
    step4G_H5: "5. KYC தாவல்",
    step4G_P5: "KYC (உங்கள் வாடிக்கையாளரை அறிந்து கொள்ளுங்கள்) தாவல் சில்லறை விற்பனையாளரின் அடையாளத்தை சரிபார்க்கவும் மற்றும் அபாயத்தை மதிப்பிடவும் முக்கியமானது, குறிப்பாக பின்னர் செலுத்து சேவைகளை செயல்படுத்துவதற்கு. இங்கு, பரிந்துரைக்கப்பட்ட தகவல், தனிப்பட்ட முகவரிகள் மற்றும் கூடுதல் அடையாள புகைப்படங்கள் போன்ற முக்கியமான விவரங்களை சேகரித்து சேமிக்கலாம்.",
    b2bKycScreenshotTitle: "சில்லறை விற்பனையாளர் KYC தாவல்",
    kycVerification: "KYC சரிபார்ப்பு",
    nomineeFullName: "பரிந்துரைக்கப்பட்டவரின் முழுப் பெயர்",
    personalAddress: "தனிப்பட்ட முகவரி",
    saveKycDetails: "KYC விவரங்களைச் சேமி",
    step5Title: "நெட்வொர்க் பகுப்பாய்வு தாவல்",
    step5Intro: "பகுப்பாய்வு தாவல் உங்கள் வாடிக்கையாளர் நெட்வொர்க் செயல்திறன் குறித்த விரிவான நுண்ணறிவுகளை வழங்குகிறது, இதில் வருவாய் போக்குகள், வாடிக்கையாளர் கையகப்படுத்தல், தக்கவைப்பு அளவீடுகள் மற்றும் B2C மற்றும் B2B பிரிவுகளுக்கு இடையிலான ஒப்பீட்டு பகுப்பாய்வு ஆகியவை அடங்கும்.",
    analyticsScreenshotTitle: "பகுப்பாய்வு தாவல் - நெட்வொர்க் செயல்திறன் டாஷ்போர்டு",
    revenueGrowth: "வருவாய் வளர்ச்சி",
    b2cGrowthMonth: "B2C வளர்ச்சி (இந்த மாதம்)",
    b2bGrowthMonth: "B2B வளர்ச்சி (இந்த மாதம்)",
    totalNetworkGrowth: "மொத்த நெட்வொர்க் வளர்ச்சி",
    customerMetrics: "வாடிக்கையாளர் அளவீடுகள்",
    newB2CCustomers: "புதிய B2C வாடிக்கையாளர்கள்",
    newB2BPartners: "புதிய B2B பங்குதாரர்கள்",
    customerRetention: "வாடிக்கையாளர் தக்கவைப்பு",
    referralNetwork: "பரிந்துரை நெட்வொர்க்",
    activeReferrers: "செயலில் உள்ள பரிந்துரையாளர்கள்",
    newReferralsMonth: "புதிய பரிந்துரைகள் (இந்த மாதம்)",
    referralConversionRate: "பரிந்துரை மாற்றும் விகிதம்",
    b2cVsB2bRevenue: "B2C vs B2B வருவாய் ஒப்பீடு (கடந்த 6 மாதங்கள்)",
    revenueComparisonDesc: "B2C மற்றும் B2B பிரிவுகள் இரண்டிற்கும் மாதாந்திர போக்குகளைக் காட்டும் ஊடாடும் வருவாய் ஒப்பீட்டு விளக்கப்படம்",
    b2cCustomerTierDist: "B2C வாடிக்கையாளர் அடுக்கு விநியோகம்",
    platinumTier: "பிளாட்டினம் (₹50,000+)",
    goldTier: "தங்கம் (₹25,000+)",
    silverTier: "வெள்ளி (₹10,000+)",
    bronzeTier: "வெண்கலம் (புதிய)",
    b2bPartnerCategories: "B2B பங்குதாரர் வகைகள்",
    groceryStores: "மளிகைக் கடைகள்",
    restaurantsCafes: "உணவகங்கள் & கஃபேக்கள்",
    hotels: "ஹோட்டல்கள்",
    retailChains: "சில்லறை சங்கிலிகள்",
    others: "மற்றவை",
    bestPracticesTitle: "நெட்வொர்க் மேலாண்மைக்கான சிறந்த நடைமுறைகள்",
    bestPractice1: "• கொள்முதல் நடத்தையின் அடிப்படையில் வாடிக்கையாளர் அடுக்குகளை தொடர்ந்து மதிப்பாய்வு செய்து புதுப்பிக்கவும்",
    bestPractice2: "• பரிந்துரை நெட்வொர்க் செயல்திறனைக் கண்காணித்து, சிறந்த பரிந்துரையாளர்களுக்கு வெகுமதி அளிக்கவும்",
    bestPractice3: "• ஆபத்தைக் குறைக்க B2B பங்குதாரர்களுக்கு ஆரோக்கியமான கடன் வரம்புகளைப் பராமரிக்கவும்",
    bestPractice4: "• குறைவாக செயல்படும் பிரிவுகளில் வளர்ச்சி வாய்ப்புகளை அடையாளம் காண பகுப்பாய்வுகளைப் பயன்படுத்தவும்",
    bestPractice5: "• வாடிக்கையாளர் பிரிவின் அடிப்படையில் இலக்கு சந்தைப்படுத்தல் பிரச்சாரங்களை செயல்படுத்தவும்",
    bestPractice6: "• கையகப்படுத்தல் மற்றும் தக்கவைப்பு உத்திகளை மேம்படுத்த வாடிக்கையாளர் வாழ்நாள் மதிப்பை கண்காணிக்கவும்",
  },
  hi: {
    pageTitle: "नेटवर्क प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "मजबूत व्यापारिक संबंध बनाने और बनाए रखने के लिए ग्राहक संबंध प्रबंधन, B2B खुदरा विक्रेता साझेदारी, बहु-स्तरीय रेफरल सिस्टम और व्यापक नेटवर्क एनालिटिक्स में महारत हासिल करें।",
    step1Title: "नेटवर्क प्रबंधन डैशबोर्ड अवलोकन",
    step1Intro: "नेटवर्क प्रबंधन डैशबोर्ड व्यक्तिगत B2C ग्राहकों से लेकर बड़े B2B खुदरा भागीदारों तक आपके संपूर्ण ग्राहक पारिस्थितिकी तंत्र का एकीकृत दृश्य प्रदान करता है, शक्तिशाली एनालिटिक्स और संबंध ट्रैकिंग उपकरणों के साथ।",
    step1A: "A. नेटवर्क प्रबंधन तक पहुँचना",
    dashboardScreenshotTitle: "नेटवर्क प्रबंधन डैशबोर्ड - मुख्य इंटरफ़ेस",
    networkManagement: "नेटवर्क प्रबंधन",
    networkDesc: "B2C ग्राहकों, B2B खुदरा विक्रेताओं और रेफरल संबंधों का व्यापक प्रबंधन",
    referralDashboard: "रेफरल डैशबोर्ड",
    addB2BRetailer: "B2B खुदरा विक्रेता जोड़ें",
    b2cCustomers: "B2C ग्राहक",
    b2bRetailers: "B2B खुदरा विक्रेता",
    b2cRevenue: "B2C राजस्व",
    b2bRevenue: "B2B राजस्व",
    overview: "अवलोकन",
    analytics: "एनालिटिक्स",
    networkOverviewDesc: "नेटवर्क प्रबंधन इंटरफ़ेस को चार मुख्य टैब में व्यवस्थित किया गया है, प्रत्येक ग्राहक संबंध प्रबंधन के विभिन्न पहलुओं के लिए विशेष कार्यक्षमता प्रदान करता है।",
    keyFeaturesOverview: "मुख्य विशेषताओं का अवलोकन",
    keyFeature1: "• B2C ग्राहकों और B2B खुदरा विक्रेताओं का एकीकृत दृश्य",
    keyFeature2: "• बहु-स्तरीय रेफरल सिस्टम ट्रैकिंग",
    keyFeature3: "• ग्राहक प्रकार के अनुसार व्यापक राजस्व एनालिटिक्स",
    keyFeature4: "• उन्नत फ़िल्टरिंग और खोज क्षमताएँ",
    keyFeature5: "• ग्राहक जीवनचक्र प्रबंधन उपकरण",
    step2Title: "अवलोकन टैब: एकीकृत गतिविधि फ़ीड",
    step2Intro: "अवलोकन टैब आपके पूरे ग्राहक नेटवर्क का एक उच्च-स्तरीय सारांश प्रदान करता है, जो B2C ग्राहकों और B2B खुदरा विक्रेताओं दोनों से हाल की गतिविधि को एक एकीकृत दृश्य में दिखाता है।",
    activityScreenshotTitle: "अवलोकन टैब - हाल की गतिविधि डैशबोर्ड",
    recentB2CActivity: "हाल की B2C गतिविधि",
    priyaSharma: "प्रिया शर्मा",
    rajeshKumar: "राजेश कुमार",
    anithaReddy: "अनीता रेड्डी",
    hoursAgo: "2 घंटे पहले",
    hoursAgo4: "4 घंटे पहले",
    hoursAgo6: "6 घंटे पहले",
    view: "देखें",
    recentB2BActivity: "हाल की B2B गतिविधि",
    greenValleyStore: "ग्रीन वैली स्टोर",
    freshMarketHub: "फ्रेश मार्केट हब",
    cityGrocersLtd: "सिटी ग्रोवर्स लिमिटेड",
    hourAgo: "1 घंटे पहले",
    hoursAgo3: "3 घंटे पहले",
    hoursAgo5: "5 घंटे पहले",
    confirmed: "पुष्टि",
    pending: "लंबित",
    delivered: "वितरित",
    step3Title: "B2C ग्राहक टैब: CRM और रेफरल",
    step3Intro: "यह टैब व्यक्तिगत B2C ग्राहकों के लिए आपका समर्पित CRM है, जो आपको संबंधों को प्रबंधित करने, खरीद इतिहास को ट्रैक करने और व्यवहार का विश्लेषण करने के लिए आवश्यक सभी उपकरण प्रदान करता है। यह मुख्य CRM डैशबोर्ड के समान कार्यात्मक है।",
    step3A_Title: "A. B2C ग्राहक निर्देशिका",
    step3A_Para: "मुख्य दृश्य आपके सभी B2C ग्राहकों की एक व्यापक, क्रमबद्ध और खोजने योग्य सूची प्रस्तुत करता है। आप विशिष्ट ग्राहकों का पता लगाने के लिए सदस्यता टियर या वर्णमाला के अनुसार जल्दी से फ़िल्टर कर सकते हैं। किसी भी ग्राहक के नाम पर क्लिक करने से आप उनके विस्तृत प्रोफ़ाइल पृष्ठ पर पहुँच जाएंगे।",
    directoryScreenshotTitle: "B2C ग्राहक निर्देशिका - सूची दृश्य",
    customerDirectory: "ग्राहक निर्देशिका",
    searchCustomers: "ग्राहक खोजें...",
    allTiers: "सभी टियर",
    platinum: "प्लेटिनम",
    gold: "सोना",
    silver: "चांदी",
    bronze: "कांस्य",
    customer: "ग्राहक",
    tier: "टियर",
    totalSpent: "कुल खर्च",
    lastPurchase: "अंतिम खरीद",
    actions: "कार्य",
    daysAgo: "2 दिन पहले",
    weekAgo: "1 सप्ताह पहले",
    step3B_Title: "B. एक नया रेफरल लिंक बनाना",
    step3B_Para: "The \"Create Referral\" button allows you to establish a parent-child relationship between two existing customers, which is essential for the multi-level loyalty program. The parent customer will earn bonus points based on the child's purchases.",
    referralModalScreenshotTitle: "रेफरल मॉडल बनाएँ",
    createCustomerReferral: "ग्राहक रेफरल बनाएँ",
    selectParentChild: "रेफरल नेटवर्क में लिंक करने के लिए एक माता-पिता और बच्चे ग्राहक का चयन करें।",
    parentCustomer: "माता-पिता ग्राहक (रेफरल करने वाला)",
    selectParent: "माता-पिता ग्राहक का चयन करें...",
    childCustomer: "बच्चा ग्राहक (रेफर किया गया)",
    selectChild: "बच्चे ग्राहक का चयन करें...",
    cancel: "रद्द करें",
    createLink: "लिंक बनाएँ",
    step3C_Title: "C. ग्राहक विवरण पृष्ठ - एक व्यापक 360° दृश्य",
    step3C_Para: "किसी ग्राहक के नाम पर क्लिक करने से उनकी विस्तृत प्रोफ़ाइल खुलती है, जो आपके व्यवसाय के साथ उनके संबंध का एक पूर्ण 360° दृश्य प्रदान करती है। यह पृष्ठ कई टैब में व्यवस्थित है, प्रत्येक ग्राहक की गतिविधि के एक विशिष्ट पहलू पर केंद्रित है।",
    step3D_Title: "प्रोफ़ाइल हेडर और मुख्य मेट्रिक्स",
    step3D_Para: "पृष्ठ का शीर्ष एक नज़र में सारांश प्रस्तुत करता है, जिसमें संपर्क विवरण, सदस्यता टियर और कुल खर्च और ऑर्डर गणना जैसे प्रमुख जीवनकाल मूल्य मेट्रिक्स शामिल हैं।",
    headerScreenshotTitle: "ग्राहक विवरण पृष्ठ - हेडर और आँकड़े",
    joinedYear: "2023 में शामिल हुए",
    goldMember: "गोल्ड सदस्य",
    points: "1,250 अंक",
    edit: "संपादित करें",
    email: "ईमेल",
    totalOrders: "कुल ऑर्डर",
    avgOrderValue: "औसत ऑर्डर मूल्य",
    step3E_Title: "अवलोकन टैब",
    step3E_Para: "यह डिफ़ॉल्ट टैब ग्राहक की व्यक्तिगत जानकारी और उनकी हाल की ऑर्डर गतिविधियों का त्वरित सारांश प्रदान करता है।",
    custOverviewScreenshotTitle: "अवलोकन टैब - जानकारी और हाल की गतिविधि",
    customerInformation: "ग्राहक जानकारी",
    phone: "फ़ोन",
    address: "पता",
    recentActivity: "हाल की गतिविधि",
    orderPrefix: "ऑर्डर #",
    step3F_Title: "खरीद इतिहास टैब",
    step3F_Para: "यहां आप ग्राहक द्वारा दिए गए प्रत्येक ऑर्डर की पूरी सूची देख सकते हैं। इस टैब में शक्तिशाली ऑर्डर प्रबंधन सुविधाएँ शामिल हैं, जिससे कर्मचारी ग्राहक के प्रोफ़ाइल से सीधे आंशिक रद्द करने को संभाल सकते हैं।",
    purchaseHistoryScreenshotTitle: "खरीद इतिहास टैब - ऑर्डर प्रबंधन",
    purchaseHistory: "खरीद इतिहास",
    partiallyCancelled: "आंशिक रूप से रद्द",
    organicApples: "जैविक सेब (1 किग्रा)",
    shippedQuantity: "भेजा गया: 1",
    almondMilk: "बादाम का दूध",
    cancelledQuantity: "रद्द किया गया: 1",
    closeOrder: "ऑर्डर बंद करें",
    step3G_Title: "वफादारी और बाद में भुगतान टैब",
    step3G_Para: "ये टैब ग्राहक के वफादारी और क्रेडिट कार्यक्रमों के साथ जुड़ाव से संबंधित विस्तृत वित्तीय सारांश प्रदान करते हैं।",
    loyaltyScreenshotTitle: "वफादारी और बाद में भुगतान सारांश",
    loyaltyProgram: "वफादारी कार्यक्रम",
    availablePoints: "उपलब्ध अंक",
    earnedForOrder: "ऑर्डर #...5f3b के लिए अर्जित:",
    redeemedForOrder: "ऑर्डर #...2c4a के लिए भुनाया गया:",
    payLaterWallet: "बाद में भुगतान वॉलेट",
    limit: "सीमा",
    balance: "शेष",
    available: "उपलब्ध",
    purchase: "खरीद #...5f3b:",
    paymentReceived: "भुगतान प्राप्त हुआ:",
    step3H_Title: "केवाईसी टैब",
    step3H_Para: "केवाईसी (अपने ग्राहक को जानें) टैब बाद में भुगतान की योग्यता को प्रबंधित करने के लिए महत्वपूर्ण है। यहां, आप प्रस्तुत दस्तावेजों की समीक्षा कर सकते हैं, आवेदनों को स्वीकृत या अस्वीकृत कर सकते हैं, और ग्राहक को स्थिति सूचित कर सकते हैं, अनुपालन सुनिश्चित कर सकते हैं और क्रेडिट जोखिम का प्रबंधन कर सकते हैं।",
    kycScreenshotTitle: "केवाईसी टैब - दस्तावेज़ सत्यापन और स्थिति प्रबंधन",
    kycStatusDocs: "केवाईसी स्थिति और दस्तावेज़",
    currentStatus: "वर्तमान स्थिति",
    verified: "सत्यापित",
    pauseWallet: "वॉलेट रोकें",
    stopWallet: "वॉलेट बंद करें",
    submittedDocuments: "जमा किए गए दस्तावेज़",
    aadharCard: "आधार कार्ड",
    viewDocument: "दस्तावेज़ देखें",
    step4Title: "B2B खुदरा विक्रेता टैब - व्यापारिक भागीदार प्रबंधन",
    step4Intro: "व्यापक खुदरा विक्रेता प्रोफाइल, क्रेडिट प्रबंधन और प्रदर्शन ट्रैकिंग के साथ अपने व्यापार-से-व्यापार संबंधों का प्रबंधन करें।",
    step4A_Title: "A. B2B खुदरा विक्रेता निर्देशिका",
    b2bDirectoryScreenshotTitle: "B2B खुदरा विक्रेता टैब - व्यावसायिक ग्राहक इंटरफ़ेस",
    b2bRetailersCount: "B2B खुदरा विक्रेता (89)",
    searchRetailers: "खुदरा विक्रेता खोजें...",
    allStatus: "सभी स्थिति",
    active: "सक्रिय",
    suspended: "निलंबित",
    addRetailer: "खुदरा विक्रेता जोड़ें",
    contact: "संपर्क",
    type: "प्रकार",
    orders: "ऑर्डर",
    totalBusiness: "कुल व्यापार:",
    creditLimit: "क्रेडिट सीमा:",
    outstanding: "बकाया:",
    availableCredit: "उपलब्ध क्रेडिट:",
    viewDetails: "विवरण देखें",
    statement: "विवरण",
    groceryStore: "किराना स्टोर",
    wholesale: "थोक",
    retailChain: "खुदरा श्रृंखला",
    goldPartner: "गोल्ड पार्टनर",
    silverPartner: "सिल्वर पार्टनर",
    platinumPartner: "प्लैटिनम पार्टनर",
    step4B_Title: "B. B2B खुदरा विक्रेता विवरण देखना",
    step4B_Para: "निर्देशिका से, किसी भी खुदरा विक्रेता के कार्ड पर \"विवरण देखें\" पर क्लिक करने से आप उनके व्यापक विवरण पृष्ठ पर पहुँच जाएंगे, जिससे गहन प्रबंधन की अनुमति मिलेगी।",
    step4C_Title: "C. एक नया B2B खुदरा विक्रेता जोड़ना",
    step4C_Para: "निर्देशिका हेडर में \"खुदरा विक्रेता जोड़ें\" बटन आपको नए व्यावसायिक भागीदारों को ऑनबोर्ड करने की अनुमति देता है। इस प्रक्रिया में उनके व्यावसायिक विवरण, संपर्क जानकारी और प्रारंभिक खाता सेटिंग्स दर्ज करना शामिल है।",
    addB2bScreenshotTitle: "नया B2B खुदरा विक्रेता फ़ॉर्म जोड़ें",
    addNewB2BRetailer: "नया B2B खुदरा विक्रेता जोड़ें",
    enterDetailsNewPartner: "नए व्यावसायिक भागीदार के लिए विवरण दर्ज करें।",
    businessName: "व्यावसायिक नाम",
    contactPerson: "संपर्क व्यक्ति",
    phoneNumber: "फोन नंबर",
    businessType: "व्यावसायिक प्रकार",
    selectType: "प्रकार चुनें...",
    restaurant: "रेस्तरां",
    other: "अन्य",
    step4D_Title: "D. B2B खुदरा विक्रेता डीप डाइव: विवरण पृष्ठ",
    step4D_Para: "किसी खुदरा विक्रेता के नाम या \"विवरण देखें\" बटन पर क्लिक करने से उनका व्यापक प्रोफ़ाइल पृष्ठ खुलता है। यह उस व्यावसायिक भागीदार के साथ आपके संबंध के हर पहलू को, उनकी खाता स्थिति से लेकर उनके पूरे वित्तीय इतिहास तक प्रबंधित करने के लिए केंद्रीय हब है।",
    step4E_Title: "E. खुदरा विक्रेता जानकारी और स्थिति एक नज़र में",
    step4E_Para: "विवरण पृष्ठ का बायां साइडबार खुदरा विक्रेता की वर्तमान स्थिति और आवश्यक जानकारी का त्वरित, समेकित दृश्य प्रदान करता है।",
    b2bInfoSidebarScreenshotTitle: "खुदरा विक्रेता विवरण पृष्ठ - जानकारी साइडबार",
    businessInformation: "व्यावसायिक जानकारी",
    gst: "GST:",
    accountStatus: "खाता स्थिति",
    pendingApproval: "लंबित अनुमोदन",
    approveRetailer: "खुदरा विक्रेता को स्वीकृत करें",
    quickStats: "त्वरित आँकड़े",
    b2bInfoSidebarList1: "• <b>व्यावसायिक जानकारी:</b> मुख्य संपर्क और कर विवरण।",
    b2bInfoSidebarList2: "• <b>खाता स्थिति:</b> उनकी वर्तमान स्थिति दिखाता है (जैसे, 'सक्रिय', 'लंबित अनुमोदन')। लंबित खातों के लिए, उन्हें सीधे स्वीकृत करने के लिए एक बटन दिखाई देता है।",
    b2bInfoSidebarList3: "• <b>त्वरित आँकड़े:</b> जीवनकाल के खर्च और वर्तमान बकाया राशि सहित उच्च-स्तरीय वित्तीय सारांश।",
    step4F_Title: "F. खुदरा विक्रेता गतिविधियों का प्रबंधन (टैब)",
    step4F_Para: "मुख्य सामग्री क्षेत्र खुदरा विक्रेता से संबंधित सभी लेनदेन डेटा और प्रबंधन कार्यों को व्यवस्थित करने के लिए एक टैब्ड इंटरफ़ेस का उपयोग करता है।",
    step4G_H1: "1. ऑर्डर टैब",
    step4G_P1: "इस खुदरा विक्रेता द्वारा दिए गए सभी खरीद ऑर्डर का पूरा इतिहास देखें। आप एक दृश्य कार्ड दृश्य और एक कॉम्पैक्ट सूची दृश्य के बीच टॉगल कर सकते हैं।",
    b2bOrdersScreenshotTitle: "खुदरा विक्रेता ऑर्डर टैब",
    mayDate: "May 20, 2024",
    mayDate2: "May 18, 2024",
    dispatched: "प्रेषित",
    step4G_H2: "2. भुगतान टैब",
    step4G_P2: "खुदरा विक्रेता से प्राप्त सभी भुगतानों को ट्रैक करें। आप \"भुगतान रिकॉर्ड करें\" बटन का उपयोग करके बैंक हस्तांतरण या नकद संग्रह जैसे नए भुगतानों को मैन्युअल रूप से भी रिकॉर्ड कर सकते हैं।",
    b2bPaymentsScreenshotTitle: "खुदरा विक्रेता भुगतान टैब",
    paymentHistory: "भुगतान इतिहास",
    recordPayment: "भुगतान रिकॉर्ड करें",
    date: "दिनांक",
    amount: "राशि",
    method: "विधि",
    reference: "संदर्भ",
    bankTransfer: "बैंक हस्तांतरण",
    upi: "यूपीआई",
    step4G_H3: "3. विवरण टैब",
    step4G_P3: "खुदरा विक्रेता के लिए एक पूर्ण, मद-वार वित्तीय विवरण देखें। यह सभी चालानों (डेबिट) और भुगतानों (क्रेडिट) को कालानुक्रमिक रूप से सूचीबद्ध करके एक चालू शेष राशि प्रदान करता है ताकि सटीक बकाया राशि दिखाई जा सके।",
    b2bStatementScreenshotTitle: "खुदरा विक्रेता खाता विवरण टैब",
          accountStatement: "खाता विवरण",
      currentOutstandingBalance: "वर्तमान बकाया शेष",
      tableDescription: "विवरण",
      debit: "डेबिट",
      credit: "क्रेडिट",
    paymentViaBankTransfer: "बैंक हस्तांतरण के माध्यम से भुगतान",
    step4G_H4: "4. बाद में भुगतान टैब",
    step4G_P4: "यह टैब खुदरा विक्रेता के बाद में भुगतान वॉलेट से संबंधित सभी लेनदेन प्रदर्शित करता है, जिसमें क्रेडिट पर की गई खरीद और बाद के पुनर्भुगतान या समायोजन शामिल हैं। यह उनके क्रेडिट खाते के लिए एक स्पष्ट ऑडिट ट्रेल प्रदान करता है।",
    b2bPayLaterScreenshotTitle: "खुदरा विक्रेता बाद में भुगतान लेनदेन टैब",
    payLaterTransactions: "बाद में भुगतान लेनदेन",
    noPayLaterServices: "इस खुदरा विक्रेता ने अभी तक बाद में भुगतान सेवाओं का उपयोग नहीं किया है।",
    step4G_H5: "5. केवाईसी टैब",
    step4G_P5: "केवाईसी (अपने ग्राहक को जानें) टैब खुदरा विक्रेता की पहचान को सत्यापित करने और जोखिम का आकलन करने के लिए महत्वपूर्ण है, खासकर बाद में भुगतान सेवाओं को सक्रिय करने के लिए। यहां, आप नामांकित व्यक्ति की जानकारी, व्यक्तिगत पते और अतिरिक्त पहचान तस्वीरों जैसे महत्वपूर्ण विवरण एकत्र और संग्रहीत कर सकते हैं।",
    b2bKycScreenshotTitle: "खुदरा विक्रेता केवाईसी टैब",
    kycVerification: "केवाईसी सत्यापन",
    nomineeFullName: "नामांकित व्यक्ति का पूरा नाम",
    personalAddress: "व्यक्तिगत पता",
    saveKycDetails: "केवाईसी विवरण सहेजें",
    step5Title: "नेटवर्क एनालिटिक्स टैब",
    step5Intro: "एनालिटिक्स टैब आपके ग्राहक नेटवर्क प्रदर्शन में व्यापक अंतर्दृष्टि प्रदान करता है, जिसमें राजस्व रुझान, ग्राहक अधिग्रहण, प्रतिधारण मीट्रिक और B2C और B2B खंडों के बीच तुलनात्मक विश्लेषण शामिल है।",
    analyticsScreenshotTitle: "एनालिटिक्स टैब - नेटवर्क प्रदर्शन डैशबोर्ड",
    revenueGrowth: "राजस्व वृद्धि",
    b2cGrowthMonth: "B2C वृद्धि (इस महीने)",
    b2bGrowthMonth: "B2B वृद्धि (इस महीने)",
    totalNetworkGrowth: "कुल नेटवर्क वृद्धि",
    customerMetrics: "ग्राहक मेट्रिक्स",
    newB2CCustomers: "नए B2C ग्राहक",
    newB2BPartners: "नए B2B भागीदार",
    customerRetention: "ग्राहक प्रतिधारण",
    referralNetwork: "रेफरल नेटवर्क",
    activeReferrers: "सक्रिय रेफरलकर्ता",
    newReferralsMonth: "नए रेफरल (इस महीने)",
    referralConversionRate: "रेफरल रूपांतरण दर",
    b2cVsB2bRevenue: "B2C बनाम B2B राजस्व तुलना (पिछले 6 महीने)",
    revenueComparisonDesc: "B2C और B2B दोनों खंडों के लिए मासिक रुझान दिखाने वाला इंटरैक्टिव राजस्व तुलना चार्ट",
    b2cCustomerTierDist: "B2C ग्राहक टियर वितरण",
    platinumTier: "प्लेटिनम (₹50,000+)",
    goldTier: "गोल्ड (₹25,000+)",
    silverTier: "सिल्वर (₹10,000+)",
    bronzeTier: "कांस्य (नया)",
    b2bPartnerCategories: "B2B भागीदार श्रेणियां",
    groceryStores: "किराना स्टोर",
    restaurantsCafes: "रेस्तरां और कैफे",
    hotels: "होटल",
    retailChains: "खुदरा श्रृंखलाएं",
    others: "अन्य",
    bestPracticesTitle: "नेटवर्क प्रबंधन के लिए सर्वोत्तम अभ्यास",
    bestPractice1: "• खरीद व्यवहार के आधार पर ग्राहक टियर की नियमित रूप से समीक्षा और अपडेट करें",
    bestPractice2: "• रेफरल नेटवर्क प्रदर्शन की निगरानी करें और शीर्ष रेफरलकर्ताओं को पुरस्कृत करें",
    bestPractice3: "• जोखिम को कम करने के लिए B2B भागीदारों के लिए स्वस्थ क्रेडिट सीमा बनाए रखें",
    bestPractice4: "• कम प्रदर्शन वाले खंडों में विकास के अवसरों की पहचान करने के लिए एनालिटिक्स का उपयोग करें",
    bestPractice5: "• ग्राहक विभाजन के आधार पर लक्षित विपणन अभियान लागू करें",
    bestPractice6: "• अधिग्रहण और प्रतिधारण रणनीतियों को अनुकूलित करने के लिए ग्राहक जीवनकाल मूल्य को ट्रैक करें",
  },
  ml: {
    pageTitle: "നെറ്റ്‌വർക്ക് മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "ബലമായ ബിസിനസ്സ് ബന്ധങ്ങൾ കെട്ടിപ്പടുക്കുന്നതിനും പരിപാലിക്കുന്നതിനും കസ്റ്റമർ റിലേഷൻഷിപ്പ് മാനേജ്മെന്റ്, B2B റീട്ടെയിലർ പങ്കാളിത്തങ്ങൾ, മൾട്ടി-ലെവൽ റഫറൽ സിസ്റ്റങ്ങൾ, സമഗ്ര നെറ്റ്‌വർക്ക് അനലിറ്റിക്സ് എന്നിവയിൽ വൈദഗ്ദ്ധ്യം നേടുക.",
    step1Title: "നെറ്റ്‌വർക്ക് മാനേജ്മെന്റ് ഡാഷ്ബോർഡ് അവലോകനം",
    step1Intro: "നെറ്റ്‌വർക്ക് മാനേജ്മെന്റ് ഡാഷ്ബോർഡ് വ്യക്തിഗത B2C കസ്റ്റമർമാരിൽ നിന്ന് വലിയ B2B റീട്ടെയിൽ പങ്കാളികൾ വരെ നിങ്ങളുടെ മുഴുവൻ കസ്റ്റമർ ഇക്കോസിസ്റ്റത്തിന്റെ ഏകീകൃത കാഴ്ച നൽകുന്നു, ശക്തമായ അനലിറ്റിക്സും റിലേഷൻഷിപ്പ് ട്രാക്കിംഗ് ടൂളുകളും സഹിതം.",
    step1A: "A. നെറ്റ്‌വർക്ക് മാനേജ്മെന്റ് ആക്സസ് ചെയ്യുന്നു",
    dashboardScreenshotTitle: "നെറ്റ്‌വർക്ക് മാനേജ്മെന്റ് ഡാഷ്ബോർഡ് - പ്രധാന ഇന്റർഫേസ്",
    networkManagement: "നെറ്റ്‌വർക്ക് മാനേജ്മെന്റ്",
    networkDesc: "B2C കസ്റ്റമർമാർ, B2B റീട്ടെയിലർമാർ, റഫറൽ ബന്ധങ്ങൾ എന്നിവയുടെ സമഗ്ര മാനേജ്മെന്റ്",
    referralDashboard: "റഫറൽ ഡാഷ്ബോർഡ്",
    addB2BRetailer: "B2B റീട്ടെയിലർ ചേർക്കുക",
    b2cCustomers: "B2C കസ്റ്റമർമാർ",
    b2bRetailers: "B2B റീട്ടെയിലർമാർ",
    b2cRevenue: "B2C വരുമാനം",
    b2bRevenue: "B2B വരുമാനം",
    overview: "അവലോകനം",
    analytics: "അനലിറ്റിക്സ്",
    networkOverviewDesc: "നെറ്റ്‌വർക്ക് മാനേജ്മെന്റ് ഇന്റർഫേസ് നാല് പ്രധാന ടാബുകളായി ക്രമീകരിച്ചിരിക്കുന്നു, ഓരോന്നും കസ്റ്റമർ റിലേഷൻഷിപ്പ് മാനേജ്മെന്റിന്റെ വ്യത്യസ്ത വശങ്ങൾക്കായി പ്രത്യേക പ്രവർത്തനക്ഷമത നൽകുന്നു.",
    keyFeaturesOverview: "പ്രധാന സവിശേഷതകളുടെ അവലോകനം",
    keyFeature1: "• B2C കസ്റ്റമർമാരുടെയും B2B റീട്ടെയിലർമാരുടെയും ഏകീകൃത കാഴ്ച",
    keyFeature2: "• മൾട്ടി-ലെവൽ റഫറൽ സിസ്റ്റം ട്രാക്കിംഗ്",
    keyFeature3: "• കസ്റ്റമർ തരം അനുസരിച്ചുള്ള സമഗ്ര വരുമാന അനലിറ്റിക്സ്",
    keyFeature4: "• അഡ്വാൻസ്ഡ് ഫിൽട്ടറിംഗ്, സെർച്ച് കപ്പാസിറ്റികൾ",
    keyFeature5: "• കസ്റ്റമർ ലൈഫ്സൈക്കിൾ മാനേജ്മെന്റ് ടൂളുകൾ",
    step2Title: "അവലോകന ടാബ്: ഏകീകൃത ആക്റ്റിവിറ്റി ഫീഡ്",
    step2Intro: "അവലോകന ടാബ് നിങ്ങളുടെ മുഴുവൻ കസ്റ്റമർ നെറ്റ്‌വർക്കിന്റെയും ഉയർന്ന തലത്തിലുള്ള സംഗ്രഹം നൽകുന്നു, B2C കസ്റ്റമർമാരിൽ നിന്നും B2B റീട്ടെയിലർമാരിൽ നിന്നുമുള്ള സമീപകാല പ്രവർത്തനം ഒരു ഏകീകൃത കാഴ്ചയിൽ കാണിക്കുന്നു.",
    activityScreenshotTitle: "അവലോകന ടാബ് - സമീപകാല പ്രവർത്തനം ഡാഷ്ബോർഡ്",
    recentB2CActivity: "സമീപകാല B2C പ്രവർത്തനം",
    priyaSharma: "പ്രിയ ശർമ്മ",
    rajeshKumar: "രാജേഷ് കുമാർ",
    anithaReddy: "അനിത റെഡ്ഡി",
    hoursAgo: "2 മണിക്കൂർ മുൻപ്",
    hoursAgo4: "4 മണിക്കൂർ മുൻപ്",
    hoursAgo6: "6 മണിക്കൂർ മുൻപ്",
    view: "കാണുക",
    recentB2BActivity: "സമീപകാല B2B പ്രവർത്തനം",
    greenValleyStore: "ഗ്രോസറി സ്റ്റോർ", // Fix: The original text was "Green Valley Store"
    freshMarketHub: "ഫ്രെഷ് മാർക്കറ്റ് ഹബ്",
    cityGrocersLtd: "സിറ്റി ഗ്രോസേഴ്സ് ലിമിറ്റഡ്",
    hourAgo: "1 മണിക്കൂർ മുൻപ്",
    hoursAgo3: "3 മണിക്കൂർ മുൻപ്",
    hoursAgo5: "5 മണിക്കൂർ മുൻപ്",
    confirmed: "സ്ഥിരീകരിച്ചു",
    pending: "തീർച്ചപ്പെടുത്തിയിട്ടില്ല",
    delivered: "ഡെലിവർ ചെയ്തു",
    step3Title: "B2C കസ്റ്റമർ ടാബ്: CRM & റഫറലുകൾ",
    step3Intro: "ഈ ടാബ് വ്യക്തിഗത B2C കസ്റ്റമർമാർക്കുള്ള നിങ്ങളുടെ സമർപ്പിത CRM ആണ്, ബന്ധങ്ങൾ നിയന്ത്രിക്കുന്നതിനും വാങ്ങൽ ചരിത്രം ട്രാക്ക് ചെയ്യുന്നതിനും പെരുമാറ്റം വിശകലനം ചെയ്യുന്നതിനും ആവശ്യമായ എല്ലാ ഉപകരണങ്ങളും നൽകുന്നു. ഇത് പ്രധാന CRM ഡാഷ്‌ബോർഡിന് പ്രവർത്തനപരമായി സമാനമാണ്.",
    step3A_Title: "A. B2C കസ്റ്റമർ ഡയറക്ടറി",
    step3A_Para: "പ്രധാന കാഴ്ച നിങ്ങളുടെ എല്ലാ B2C കസ്റ്റമർമാരുടെയും സമഗ്രവും തരംതിരിക്കാവുന്നതും തിരയാൻ കഴിയുന്നതുമായ ലിസ്റ്റ് അവതരിപ്പിക്കുന്നു. നിർദ്ദിഷ്‌ട കസ്റ്റമർമാരെ കണ്ടെത്താൻ നിങ്ങൾക്ക് അംഗത്വ തലം അനുസരിച്ചോ അക്ഷരമാലാക്രമത്തിലോ വേഗത്തിൽ ഫിൽട്ടർ ചെയ്യാൻ കഴിയും. ഏതെങ്കിലും കസ്റ്റമറുടെ പേരിൽ ക്ലിക്കുചെയ്യുന്നത് അവരുടെ വിശദമായ പ്രൊഫൈൽ പേജിലേക്ക് നിങ്ങളെ എത്തിക്കും.",
    directoryScreenshotTitle: "B2C കസ്റ്റമർ ഡയറക്ടറി - ലിസ്റ്റ് കാഴ്ച",
    customerDirectory: "കസ്റ്റമർ ഡയറക്ടറി",
    searchCustomers: "കസ്റ്റമർമാരെ തിരയുക...",
    allTiers: "എല്ലാ തലങ്ങളും",
    platinum: "പ്ലാറ്റിനം",
    gold: "ഗോൾഡ്",
    silver: "സിൽവർ",
    bronze: "ബ്രോൺസ്",
    customer: "കസ്റ്റമർ",
    tier: "തലം",
    totalSpent: "ആകെ ചെലവഴിച്ചത്",
    lastPurchase: "അവസാന വാങ്ങൽ",
    actions: "പ്രവർത്തനങ്ങൾ",
    daysAgo: "2 ദിവസം മുൻപ്",
    weekAgo: "1 ആഴ്ച മുൻപ്",
    step3B_Title: "B. ഒരു പുതിയ റഫറൽ ലിങ്ക് സൃഷ്ടിക്കുന്നു",
    step3B_Para: "The \"Create Referral\" button allows you to establish a parent-child relationship between two existing customers, which is essential for the multi-level loyalty program. The parent customer will earn bonus points based on the child's purchases.",
    referralModalScreenshotTitle: "റഫറൽ മോഡൽ സൃഷ്ടിക്കുക",
    createCustomerReferral: "കസ്റ്റമർ റഫറൽ സൃഷ്ടിക്കുക",
    selectParentChild: "റഫറൽ നെറ്റ്‌വർക്കിൽ ലിങ്ക് ചെയ്യാൻ ഒരു രക്ഷാകർതൃ കസ്റ്റമറെയും കുട്ടിക്കസ്റ്റമറെയും തിരഞ്ഞെടുക്കുക.",
    parentCustomer: "രക്ഷാകർതൃ കസ്റ്റമർ (റഫറർ)",
    selectParent: "രക്ഷാകർതൃ കസ്റ്റമറെ തിരഞ്ഞെടുക്കുക...",
    childCustomer: "കുട്ടിക്കസ്റ്റമർ (റഫർ ചെയ്യപ്പെട്ടത്)",
    selectChild: "കുട്ടിക്കസ്റ്റമറെ തിരഞ്ഞെടുക്കുക...",
    cancel: "റദ്ദാക്കുക",
    createLink: "ലിങ്ക് സൃഷ്ടിക്കുക",
    step3C_Title: "C. കസ്റ്റമർ വിശദാംശ പേജ് - ഒരു സമഗ്ര 360° കാഴ്ച",
    step3C_Para: "ഒരു കസ്റ്റമറുടെ പേരിൽ ക്ലിക്കുചെയ്യുന്നത് അവരുടെ വിശദമായ പ്രൊഫൈൽ തുറക്കുന്നു, ഇത് നിങ്ങളുടെ ബിസിനസ്സുമായുള്ള അവരുടെ ബന്ധത്തിന്റെ ഒരു പൂർണ്ണ 360° കാഴ്ച നൽകുന്നു. ഈ പേജ് നിരവധി ടാബുകളായി ക്രമീകരിച്ചിരിക്കുന്നു, ഓരോന്നും കസ്റ്റമറുടെ പ്രവർത്തനത്തിന്റെ ഒരു പ്രത്യേക വശത്തിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു.",
    step3D_Title: "പ്രൊഫൈൽ ഹെഡറും പ്രധാന മെട്രിക്കുകളും",
    step3D_Para: "പേജിന്റെ മുകൾഭാഗം ഒരു ഒറ്റനോട്ടത്തിൽ സംഗ്രഹം അവതരിപ്പിക്കുന്നു, അതിൽ കോൺടാക്റ്റ് വിവരങ്ങൾ, അംഗത്വ തലം, മൊത്തം ചെലവ്, ഓർഡർ എണ്ണം എന്നിവ പോലുള്ള പ്രധാന ലൈഫ് ടൈം വാല്യൂ മെട്രിക്കുകൾ ഉൾപ്പെടുന്നു.",
    headerScreenshotTitle: "കസ്റ്റമർ വിശദാംശ പേജ് - ഹെഡർ & സ്റ്റാറ്റസ്",
    joinedYear: "2023-ൽ ചേർന്നു",
    goldMember: "ഗോൾഡ് മെംബർ",
    points: "1,250 പോയിന്റുകൾ",
    edit: "എഡിറ്റ് ചെയ്യുക",
    email: "ഇമെയിൽ",
    totalOrders: "ആകെ ഓർഡറുകൾ",
    avgOrderValue: "ശരാശരി ഓർഡർ മൂല്യം",
    step3E_Title: "അവലോകന ടാബ്",
    step3E_Para: "ഈ ഡിഫോൾട്ട് ടാബ് കസ്റ്റമറുടെ വ്യക്തിഗത വിവരങ്ങളുടെയും അവരുടെ ഏറ്റവും പുതിയ ഓർഡർ പ്രവർത്തനങ്ങളുടെയും ഒരു പെട്ടെന്നുള്ള സംഗ്രഹം നൽകുന്നു.",
    custOverviewScreenshotTitle: "അവലോകന ടാബ് - വിവരങ്ങൾ & സമീപകാല പ്രവർത്തനം",
    customerInformation: "കസ്റ്റമർ വിവരങ്ങൾ",
    phone: "ഫോൺ",
    address: "വിലാസം",
    recentActivity: "സമീപകാല പ്രവർത്തനം",
    orderPrefix: "ഓർഡർ #",
    step3F_Title: "വാങ്ങൽ ചരിത്ര ടാബ്",
    step3F_Para: "ഇവിടെ നിങ്ങൾക്ക് കസ്റ്റമർ നൽകിയിട്ടുള്ള എല്ലാ ഓർഡറുകളുടെയും ഒരു പൂർണ്ണ ലിസ്റ്റ് കാണാൻ കഴിയും. കസ്റ്റമറുടെ പ്രൊഫൈലിൽ നിന്ന് നേരിട്ട് ഭാഗിക റദ്ദാക്കലുകൾ കൈകാര്യം ചെയ്യാൻ സ്റ്റാഫിനെ അനുവദിക്കുന്ന ശക്തമായ ഓർഡർ മാനേജ്മെന്റ് ഫീച്ചറുകൾ ഈ ടാബിൽ ഉൾപ്പെടുന്നു.",
    purchaseHistoryScreenshotTitle: "വാങ്ങൽ ചരിത്ര ടാബ് - ഓർഡർ മാനേജ്മെന്റ്",
    purchaseHistory: "വാങ്ങൽ ചരിത്രം",
    partiallyCancelled: "ഭാഗികമായി റദ്ദാക്കി",
    organicApples: "ഓർഗാനിക് ആപ്പിൾസ് (1kg)",
    shippedQuantity: "ഷിപ്പ് ചെയ്തത്: 1",
    almondMilk: "ബദാം പാൽ",
    cancelledQuantity: "റദ്ദാക്കിയത്: 1",
    closeOrder: "ഓർഡർ അടയ്ക്കുക",
    step3G_Title: "ലോയൽറ്റി & പേ ലേറ്റർ ടാബുകൾ",
    step3G_Para: "ഈ ടാബുകൾ കസ്റ്റമറുടെ ലോയൽറ്റി, ക്രെഡിറ്റ് പ്രോഗ്രാമുകളുമായുള്ള ഇടപെടലുമായി ബന്ധപ്പെട്ട വിശദമായ സാമ്പത്തിക സംഗ്രഹങ്ങൾ നൽകുന്നു.",
    loyaltyScreenshotTitle: "ലോയൽറ്റി & പേ ലേറ്റർ സംഗ്രഹങ്ങൾ",
    loyaltyProgram: "ലോയൽറ്റി പ്രോഗ്രാം",
    availablePoints: "ലഭ്യമായ പോയിന്റുകൾ",
    earnedForOrder: "ഓർഡർ #...5f3b-ൽ നിന്ന് നേടിയത്:",
    redeemedForOrder: "ഓർഡർ #...2c4a-ൽ നിന്ന് റെഡീം ചെയ്തത്:",
    payLaterWallet: "പേ ലേറ്റർ വാലറ്റ്",
    limit: "പരിധി",
    balance: "ബാലൻസ്",
    available: "ലഭ്യം",
    purchase: "വാങ്ങൽ #...5f3b:",
    paymentReceived: "പേയ്‌മെന്റ് ലഭിച്ചു:",
    step3H_Title: "KYC ടാബ്",
    step3H_Para: "പേ ലേറ്റർ യോഗ്യത നിയന്ത്രിക്കുന്നതിന് KYC (നിങ്ങളുടെ ഉപഭോക്താവിനെ അറിയുക) ടാബ് നിർണായകമാണ്. ഇവിടെ, നിങ്ങൾക്ക് സമർപ്പിച്ച രേഖകൾ അവലോകനം ചെയ്യാനും, അപേക്ഷകൾ അംഗീകരിക്കാനോ നിരസിക്കാനോ, കസ്റ്റമറിന് സ്റ്റാറ്റസ് അറിയിക്കാനും കഴിയും, ഇത് അനുസരണം ഉറപ്പാക്കുകയും ക്രെഡിറ്റ് റിസ്ക് കൈകാര്യം ചെയ്യുകയും ചെയ്യുന്നു.",
    kycScreenshotTitle: "KYC ടാബ് - രേഖാ പരിശോധനയും സ്റ്റാറ്റസ് മാനേജ്മെന്റും",
    kycStatusDocs: "KYC സ്റ്റാറ്റസ് & രേഖകൾ",
    currentStatus: "നിലവിലെ സ്റ്റാറ്റസ്",
    verified: "സ്ഥിരീകരിച്ചു",
    pauseWallet: "വാലറ്റ് താൽക്കാലികമായി നിർത്തുക",
    stopWallet: "വാലറ്റ് നിർത്തുക",
    submittedDocuments: "സമർപ്പിച്ച രേഖകൾ",
    aadharCard: "ആധാർ കാർഡ്",
    viewDocument: "രേഖ കാണുക",
    step4Title: "B2B റീട്ടെയിലർമാരുടെ ടാബ് - ബിസിനസ്സ് പാർട്ണർ മാനേജ്മെന്റ്",
    step4Intro: "സമഗ്ര റീട്ടെയിലർ പ്രൊഫൈലുകൾ, ക്രെഡിറ്റ് മാനേജ്മെന്റ്, പ്രകടന ട്രാക്കിംഗ് എന്നിവയോടുകൂടി നിങ്ങളുടെ ബിസിനസ്സ്-ടു-ബിസിനസ്സ് ബന്ധങ്ങൾ കൈകാര്യം ചെയ്യുക.",
    step4A_Title: "A. B2B റീട്ടെയിലർ ഡയറക്ടറി",
    b2bDirectoryScreenshotTitle: "B2B റീട്ടെയിലർമാരുടെ ടാബ് - ബിസിനസ്സ് കസ്റ്റമർ ഇന്റർഫേസ്",
    b2bRetailersCount: "B2B റീട്ടെയിലർമാർ (89)",
    searchRetailers: "റീട്ടെയിലർമാരെ തിരയുക...",
    allStatus: "എല്ലാ സ്റ്റാറ്റസും",
    active: "സജീവമാണ്",
    suspended: "സസ്പെൻഡ് ചെയ്തു",
    addRetailer: "റീട്ടെയിലർ ചേർക്കുക",
    contact: "ബന്ധപ്പെടുക",
    type: "തരം",
    orders: "ഓർഡറുകൾ",
    totalBusiness: "മൊത്തം ബിസിനസ്സ്:",
    creditLimit: "ക്രെഡിറ്റ് പരിധി:",
    outstanding: "outstanding:",
    availableCredit: "ലഭ്യമായ ക്രെഡിറ്റ്:",
    viewDetails: "വിശദാംശങ്ങൾ കാണുക",
    statement: "പ്രസ്താവന",
    groceryStore: "ഗ്രോസറി സ്റ്റോർ",
    wholesale: "മൊത്തവ്യാപാരം",
    retailChain: "റീട്ടെയിൽ ചെയിൻ",
    goldPartner: "ഗോൾഡ് പങ്കാളി",
    silverPartner: "സിൽവർ പങ്കാളി",
    platinumPartner: "പ്ലാറ്റിനം പങ്കാളി",
    step4B_Title: "B. B2B റീട്ടെയിലർ വിശദാംശങ്ങൾ കാണുന്നു",
    step4B_Para: "ഡയറക്ടറിയിൽ നിന്ന്, ഏതെങ്കിലും റീട്ടെയിലറുടെ കാർഡിലെ \"വിശദാംശങ്ങൾ കാണുക\" ക്ലിക്ക് ചെയ്യുന്നത് അവരുടെ സമഗ്രമായ വിശദാംശ പേജിലേക്ക് നിങ്ങളെ എത്തിക്കും, ഇത് ആഴത്തിലുള്ള മാനേജ്മെന്റിന് അനുവദിക്കുന്നു.",
    step4C_Title: "C. ഒരു പുതിയ B2B റീട്ടെയിലറെ ചേർക്കുന്നു",
    step4C_Para: "ഡയറക്ടറി ഹെഡറിലെ \"റീട്ടെയിലർ ചേർക്കുക\" ബട്ടൺ പുതിയ ബിസിനസ്സ് പങ്കാളികളെ ഓൺബോർഡ് ചെയ്യാൻ നിങ്ങളെ അനുവദിക്കുന്നു. ഈ പ്രക്രിയയിൽ അവരുടെ ബിസിനസ്സ് വിവരങ്ങൾ, കോൺടാക്റ്റ് വിവരങ്ങൾ, പ്രാരംഭ അക്കൗണ്ട് ക്രമീകരണങ്ങൾ എന്നിവ ഉൾപ്പെടുന്നു.",
    addB2bScreenshotTitle: "പുതിയ B2B റീട്ടെയിലർ ഫോം ചേർക്കുക",
    addNewB2BRetailer: "പുതിയ B2B റീട്ടെയിലർ ചേർക്കുക",
    enterDetailsNewPartner: "പുതിയ ബിസിനസ്സ് പങ്കാളിക്കുള്ള വിവരങ്ങൾ നൽകുക.",
    businessName: "ബിസിനസ്സ് പേര്",
    contactPerson: "ബന്ധപ്പെടാനുള്ള വ്യക്തി",
    phoneNumber: "ഫോൺ നമ്പർ",
    businessType: "ബിസിനസ്സ് തരം",
    selectType: "തരം തിരഞ്ഞെടുക്കുക...",
    restaurant: "റെസ്റ്റോറന്റ്",
    other: "മറ്റുള്ളവ",
    step4D_Title: "D. B2B റീട്ടെയിലർ ഡീപ് ഡൈവ്: വിശദാംശ പേജ്",
    step4D_Para: "ഒരു റീട്ടെയിലറുടെ പേരിൽ അല്ലെങ്കിൽ \"വിശദാംശങ്ങൾ കാണുക\" ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുന്നത് അവരുടെ സമഗ്ര പ്രൊഫൈൽ പേജ് തുറക്കുന്നു. ഇത് ആ ബിസിനസ്സ് പങ്കാളിയുമായുള്ള നിങ്ങളുടെ ബന്ധത്തിന്റെ എല്ലാ വശങ്ങളും, അവരുടെ അക്കൗണ്ട് സ്റ്റാറ്റസ് മുതൽ അവരുടെ പൂർണ്ണ സാമ്പത്തിക ചരിത്രം വരെ, കൈകാര്യം ചെയ്യുന്നതിനുള്ള പ്രധാന ഹബ് ആണ്.",
    step4E_Title: "E. റീട്ടെയിലർ വിവരങ്ങളും നിലയും ഒറ്റനോട്ടത്തിൽ",
    step4E_Para: "വിശദാംശ പേജിന്റെ ഇടതുവശത്തുള്ള സൈഡ്‌ബാർ റീട്ടെയിലറുടെ നിലവിലെ സ്ഥിതിയുടെയും അവശ്യ വിവരങ്ങളുടെയും പെട്ടെന്നുള്ളതും ഏകീകൃതവുമായ കാഴ്ച നൽകുന്നു.",
    b2bInfoSidebarScreenshotTitle: "റീട്ടെയിലർ വിശദാംശ പേജ് - വിവര സൈഡ്‌ബാർ",
    businessInformation: "ബിസിനസ്സ് വിവരങ്ങൾ",
    gst: "GST:",
    accountStatus: "അക്കൗണ്ട് സ്റ്റാറ്റസ്",
    pendingApproval: "അംഗീകാരം തീർച്ചപ്പെടുത്തിയിട്ടില്ല",
    approveRetailer: "റീട്ടെയിലറെ അംഗീകരിക്കുക",
    quickStats: "വേഗത്തിലുള്ള സ്ഥിതിവിവരക്കണക്കുകൾ",
    b2bInfoSidebarList1: "• <b>ബിസിനസ് വിവരങ്ങൾ:</b> പ്രധാന കോൺടാക്റ്റ്, ടാക്സ് വിവരങ്ങൾ.",
    b2bInfoSidebarList2: "• <b>അക്കൗണ്ട് സ്റ്റാറ്റസ്:</b> അവരുടെ നിലവിലെ സ്റ്റാറ്റസ് കാണിക്കുന്നു (ഉദാ. 'സജീവമാണ്', 'അംഗീകാരം തീർച്ചപ്പെടുത്തിയിട്ടില്ല'). തീർച്ചപ്പെടുത്താത്ത അക്കൗണ്ടുകൾക്ക്, അവ നേരിട്ട് അംഗീകരിക്കാൻ ഒരു ബട്ടൺ ദൃശ്യമാകും.",
    b2bInfoSidebarList3: "• <b>വേഗത്തിലുള്ള സ്ഥിതിവിവരക്കണക്കുകൾ:</b> ആജീവനാന്ത ചെലവും നിലവിലെ ബാക്കി തുകയും ഉൾപ്പെടെയുള്ള ഉയർന്ന തലത്തിലുള്ള സാമ്പത്തിക സംഗ്രഹം.",
    step4F_Title: "F. റീട്ടെയിലർ പ്രവർത്തനങ്ങൾ കൈകാര്യം ചെയ്യൽ (ടാബുകൾ)",
    step4F_Para: "പ്രധാന ഉള്ളടക്ക പ്രദേശം റീട്ടെയിലറുമായി ബന്ധപ്പെട്ട എല്ലാ ട്രാൻസാക്ഷണൽ ഡാറ്റയും മാനേജ്മെന്റ് ഫംഗ്ഷനുകളും ക്രമീകരിക്കുന്നതിന് ഒരു ടാബഡ് ഇന്റർഫേസ് ഉപയോഗിക്കുന്നു.",
    step4G_H1: "1. ഓർഡറുകൾ ടാബ്",
    step4G_P1: "ഈ റീട്ടെയിലർ നൽകിയിട്ടുള്ള എല്ലാ പർച്ചേസ് ഓർഡറുകളുടെയും പൂർണ്ണ ചരിത്രം കാണുക. ഒരു വിഷ്വൽ കാർഡ് കാഴ്‌ചയ്ക്കും ഒരു കോംപാക്റ്റ് ലിസ്റ്റ് കാഴ്‌ചയ്ക്കും ഇടയിൽ നിങ്ങൾക്ക് ടോഗിൾ ചെയ്യാൻ കഴിയും.",
    b2bOrdersScreenshotTitle: "റീട്ടെയിലർ ഓർഡറുകൾ ടാബ്",
    mayDate: "മെയ് 20, 2024",
    mayDate2: "മെയ് 18, 2024",
    dispatched: "ഡിസ്പാച്ച് ചെയ്തു",
    step4G_H2: "2. പേയ്‌മെന്റുകൾ ടാബ്",
    step4G_P2: "റീട്ടെയിലറിൽ നിന്ന് ലഭിച്ച എല്ലാ പേയ്‌മെന്റുകളും ട്രാക്ക് ചെയ്യുക. \"പേയ്‌മെന്റ് രേഖപ്പെടുത്തുക\" ബട്ടൺ ഉപയോഗിച്ച് ബാങ്ക് ട്രാൻസ്ഫറുകൾ അല്ലെങ്കിൽ ക്യാഷ് കളക്ഷനുകൾ പോലുള്ള പുതിയ പേയ്‌മെന്റുകളും നിങ്ങൾക്ക് സ്വമേധയാ രേഖപ്പെടുത്താം.",
    b2bPaymentsScreenshotTitle: "റീട്ടെയിലർ പേയ്‌മെന്റുകൾ ടാബ്",
    paymentHistory: "പേയ്‌മെന്റ് ചരിത്രം",
    recordPayment: "പേയ്‌മെന്റ് രേഖപ്പെടുത്തുക",
    date: "തീയതി",
    amount: "തുക",
    method: "രീതി",
    reference: "റഫറൻസ്",
    bankTransfer: "ബാങ്ക് ട്രാൻസ്ഫർ",
    upi: "UPI",
    step4G_H3: "3. സ്റ്റേറ്റ്‌മെന്റ് ടാബ്",
    step4G_P3: "റീട്ടെയിലർക്കായുള്ള പൂർണ്ണവും ഐറ്റമൈസ് ചെയ്തതുമായ ഒരു സാമ്പത്തിക സ്റ്റേറ്റ്‌മെന്റ് കാണുക. എല്ലാ ഇൻവോയ്‌സുകളും (ഡെബിറ്റുകൾ), പേയ്‌മെന്റുകളും (ക്രെഡിറ്റുകൾ) കാലക്രമത്തിൽ പട്ടികപ്പെടുത്തിക്കൊണ്ട് അത് ഒരു റണ്ണിംഗ് ബാലൻസ് നൽകുന്നു, ഇത് കൃത്യമായ ബാക്കി തുക കാണിക്കുന്നു.",
    b2bStatementScreenshotTitle: "റീട്ടെയിലർ അക്കൗണ്ട് സ്റ്റേറ്റ്‌മെന്റ് ടാബ്",
          accountStatement: "അക്കൗണ്ട് സ്റ്റേറ്റ്‌മെന്റ്",
      currentOutstandingBalance: "നിലവിലെ ബാക്കി തുക",
      tableDescription: "വിവരണം",
      debit: "ഡെബിറ്റ്",
      credit: "ക്രെഡിറ്റ്",
    paymentViaBankTransfer: "ബാങ്ക് ട്രാൻസ്ഫർ വഴി പേയ്‌മെന്റ്",
    step4G_H4: "4. പേ ലേറ്റർ ടാബ്",
    step4G_P4: "ഈ ടാബ് റീട്ടെയിലറുടെ പേ ലേറ്റർ വാലറ്റുമായി ബന്ധപ്പെട്ട എല്ലാ ട്രാൻസാക്ഷനുകളും പ്രദർശിപ്പിക്കുന്നു, ക്രെഡിറ്റിൽ നടത്തിയ വാങ്ങലുകളും തുടർന്നുള്ള തിരിച്ചടവുകളും അല്ലെങ്കിൽ ക്രമീകരണങ്ങളും ഉൾപ്പെടെ. ഇത് അവരുടെ ക്രെഡിറ്റ് അക്കൗണ്ടിന് വ്യക്തമായ ഒരു ഓഡിറ്റ് ട്രയൽ നൽകുന്നു.",
    b2bPayLaterScreenshotTitle: "റീട്ടെയിലർ പേ ലേറ്റർ ട്രാൻസാക്ഷൻ ടാബ്",
    payLaterTransactions: "പേ ലേറ്റർ ട്രാൻസാക്ഷനുകൾ",
    noPayLaterServices: "ഈ റീട്ടെയിലർ ഇതുവരെ പേ ലേറ്റർ സേവനങ്ങൾ ഉപയോഗിച്ചിട്ടില്ല.",
    step4G_H5: "5. KYC ടാബ്",
    step4G_P5: "KYC (നിങ്ങളുടെ ഉപഭോക്താവിനെ അറിയുക) ടാബ് റീട്ടെയിലറുടെ ഐഡന്റിറ്റി പരിശോധിക്കുന്നതിനും റിസ്ക് വിലയിരുത്തുന്നതിനും, പ്രത്യേകിച്ചും പേ ലേറ്റർ സേവനങ്ങൾ സജീവമാക്കുന്നതിനും നിർണായകമാണ്. ഇവിടെ, നോമിനി വിവരങ്ങൾ, വ്യക്തിഗത വിലാസങ്ങൾ, അധിക തിരിച്ചറിയൽ ഫോട്ടോകൾ എന്നിവ പോലുള്ള പ്രധാന വിവരങ്ങൾ ശേഖരിക്കാനും സംഭരിക്കാനും നിങ്ങൾക്ക് കഴിയും.",
    b2bKycScreenshotTitle: "റീട്ടെയിലർ KYC ടാബ്",
    kycVerification: "KYC വെരിഫിക്കേഷൻ",
    nomineeFullName: "നോമിനിയുടെ പൂർണ്ണമായ പേര്",
    personalAddress: "വ്യക്തിപരമായ വിലാസം",
    saveKycDetails: "KYC വിവരങ്ങൾ സംരക്ഷിക്കുക",
    step5Title: "നെറ്റ്‌വർക്ക് അനലിറ്റിക്സ് ടാബ്",
    step5Intro: "അനലിറ്റിക്സ് ടാബ് നിങ്ങളുടെ കസ്റ്റമർ നെറ്റ്‌വർക്ക് പ്രകടനത്തെക്കുറിച്ചുള്ള സമഗ്രമായ ഉൾക്കാഴ്ചകൾ നൽകുന്നു, വരുമാന പ്രവണതകൾ, കസ്റ്റമർ അക്വിസിഷൻ, നിലനിർത്തൽ മെട്രിക്കുകൾ, B2C, B2B സെഗ്‌മെന്റുകൾ തമ്മിലുള്ള താരതമ്യ വിശകലനം എന്നിവ ഉൾപ്പെടെ.",
    analyticsScreenshotTitle: "അനലിറ്റിക്സ് ടാബ് - നെറ്റ്‌വർക്ക് പ്രകടന ഡാഷ്ബോർഡ്",
    revenueGrowth: "വരുമാന വളർച്ച",
    b2cGrowthMonth: "B2C വളർച്ച (ഈ മാസം)",
    b2bGrowthMonth: "B2B വളർച്ച (ഈ മാസം)",
    totalNetworkGrowth: "മൊത്തം നെറ്റ്‌വർക്ക് വളർച്ച",
    customerMetrics: "കസ്റ്റമർ മെട്രിക്കുകൾ",
    newB2CCustomers: "പുതിയ B2C കസ്റ്റമർമാർ",
    newB2BPartners: "പുതിയ B2B പങ്കാളികൾ",
    customerRetention: "കസ്റ്റമർ റീട്ടെൻഷൻ",
    referralNetwork: "റഫറൽ നെറ്റ്‌വർക്ക്",
    activeReferrers: "സജീവ റഫറർമാർ",
    newReferralsMonth: "പുതിയ റഫറലുകൾ (ഈ മാസം)",
    referralConversionRate: "റഫറൽ പരിവർത്തന നിരക്ക്",
    b2cVsB2bRevenue: "B2C vs B2B വരുമാന താരതമ്യം (കഴിഞ്ഞ 6 മാസം)",
    revenueComparisonDesc: "B2C, B2B സെഗ്‌മെന്റുകൾക്ക് പ്രതിമാസ ട്രെൻഡുകൾ കാണിക്കുന്ന ഇന്ററാക്ടീവ് വരുമാന താരതമ്യ ചാർട്ട്",
    b2cCustomerTierDist: "B2C കസ്റ്റമർ ടയർ വിതരണം",
    platinumTier: "പ്ലാറ്റിനം (₹50,000+)",
    goldTier: "ഗോൾഡ് (₹25,000+)",
    silverTier: "സിൽവർ (₹10,000+)",
    bronzeTier: "ബ്രോൺസ് (പുതിയത്)",
    b2bPartnerCategories: "B2B പങ്കാളി വിഭാഗങ്ങൾ",
    groceryStores: "ഗ്രോസറി സ്റ്റോറുകൾ",
    restaurantsCafes: "റെസ്റ്റോറന്റുകളും കഫേകളും",
    hotels: "ഹോട്ടലുകൾ",
    retailChains: "റീട്ടെയിൽ ചെയിനുകൾ",
    others: "മറ്റുള്ളവ",
    bestPracticesTitle: "നെറ്റ്‌വർക്ക് മാനേജ്മെന്റിനായുള്ള മികച്ച പ്രായോഗിക കാര്യങ്ങൾ",
    bestPractice1: "• വാങ്ങൽ സ്വഭാവം അടിസ്ഥാനമാക്കി കസ്റ്റമർ തലങ്ങളെ പതിവായി അവലോകനം ചെയ്യുകയും അപ്ഡേറ്റ് ചെയ്യുകയും ചെയ്യുക",
    bestPractice2: "• റഫറൽ നെറ്റ്‌വർക്ക് പ്രകടനം നിരീക്ഷിക്കുകയും മികച്ച റഫറർമാർക്ക് പ്രതിഫലം നൽകുകയും ചെയ്യുക",
    bestPractice3: "• അപകടസാധ്യത കുറയ്ക്കുന്നതിന് B2B പങ്കാളികൾക്ക് ആരോഗ്യകരമായ ക്രെഡിറ്റ് പരിധി നിലനിർത്തുക",
    bestPractice4: "• കുറഞ്ഞ പ്രകടനമുള്ള വിഭാഗങ്ങളിൽ വളർച്ചാ സാധ്യതകൾ തിരിച്ചറിയാൻ അനലിറ്റിക്സ് ഉപയോഗിക്കുക",
    bestPractice5: "• കസ്റ്റമർ സെഗ്‌മെന്റേഷൻ അടിസ്ഥാനമാക്കി ടാർഗെറ്റുചെയ്‌ത മാർക്കറ്റിംഗ് കാമ്പെയ്‌നുകൾ നടപ്പിലാക്കുക",
    bestPractice6: "• അക്വിസിഷൻ, റീട്ടെൻഷൻ തന്ത്രങ്ങൾ ഒപ്റ്റിമൈസ് ചെയ്യുന്നതിന് കസ്റ്റമർ ലൈഫ് ടൈം വാല്യൂ ട്രാക്ക് ചെയ്യുക",
  }
};

export default function ManualNetworkManagement() {
  const [language] = useManualLanguage();

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link to={createPageUrl('Manual')}>
            <Button variant="outline" className="mb-4">
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
                <Network className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-10">
              <Step number="1" title={t('step1Title')}>
                <p>
                  {t('step1Intro')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step1A')}</h6>
                <Screenshot title={t('dashboardScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border">
                      <div className="flex justify-between items-start mb-6 flex-col sm:flex-row gap-4 sm:gap-0">
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                            <Network className="w-6 h-6 text-purple-600" />
                            {t('networkManagement')}
                          </h2>
                          <p className="text-slate-600 mt-1">{t('networkDesc')}</p>
                        </div>
                        <div className="flex gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                          <Button variant="outline" size="sm">
                            <Star className="w-4 h-4 mr-2" />
                            {t('referralDashboard')}
                          </Button>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <Plus className="w-4 h-4 mr-2" />
                            {t('addB2BRetailer')}
                          </Button>
                        </div>
                      </div>

                      {/* Network Overview Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 border shadow-sm">
                          <div className="flex items-center gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                            <div className="p-2 bg-orange-100 rounded-lg">
                              <Users className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="text-sm text-slate-600">{t('b2cCustomers')}</p>
                              <p className="text-xl font-bold text-slate-900">1,247</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border shadow-sm">
                          <div className="flex items-center gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Building2 className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm text-slate-600">{t('b2bRetailers')}</p>
                              <p className="text-xl font-bold text-slate-900">89</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border shadow-sm">
                          <div className="flex items-center gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                            <div className="p-2 bg-emerald-100 rounded-lg">
                              <DollarSign className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-sm text-slate-600">{t('b2cRevenue')}</p>
                              <p className="text-xl font-bold text-slate-900">₹24.8L</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border shadow-sm">
                          <div className="flex items-center gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                            <div className="p-2 bg-purple-100 rounded-lg">
                              <DollarSign className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <p className="text-sm text-slate-600">{t('b2bRevenue')}</p>
                              <p className="text-xl font-bold text-slate-900">₹18.4L</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab Navigation Preview */}
                    <div className="border rounded-lg bg-white">
                      <div className="border-b p-4">
                        <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg w-fit">
                          <button className="px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium">{t('overview')}</button>
                          <button className="px-4 py-2 text-slate-600 text-sm font-medium">{t('b2cCustomers')}</button>
                          <button className="px-4 py-2 text-slate-600 text-sm font-medium">{t('b2bRetailers')}</button>
                          <button className="px-4 py-2 text-slate-600 text-sm font-medium">{t('analytics')}</button>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-slate-600">{t('networkOverviewDesc')}</p>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <h6 className="font-semibold text-blue-800 mb-2">{t('keyFeaturesOverview')}</h6>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li dangerouslySetInnerHTML={{ __html: t('keyFeature1') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('keyFeature2') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('keyFeature3') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('keyFeature4') }} />
                    <li dangerouslySetInnerHTML={{ __html: t('keyFeature5') }} />
                  </ul>
                </div>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>
                  {t('step2Intro')}
                </p>

                <Screenshot title={t('activityScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Recent B2C Activity */}
                      <div className="bg-white border rounded-lg">
                        <div className="p-4 border-b">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <Users className="w-5 h-5 text-orange-600" />
                            {t('recentB2CActivity')}
                          </h3>
                        </div>
                        <div className="p-4 space-y-4">
                          {[
                            { name: t('priyaSharma'), amount: "₹1,245", id: "ORD-2024-001", time: t('hoursAgo') },
                            { name: t('rajeshKumar'), amount: "₹2,180", id: "ORD-2024-002", time: t('hoursAgo4') },
                            { name: t('anithaReddy'), amount: "₹845", id: "ORD-2024-003", time: t('hoursAgo6') }
                          ].map((activity, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                              <div>
                                <p className="font-medium text-slate-900">{activity.name}</p>
                                <p className="text-sm text-slate-500">{activity.id} • {activity.time}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-green-600">{activity.amount}</p>
                                <Button variant="outline" size="sm" className="mt-1">
                                  <Eye className="w-3 h-3 mr-1" />
                                  {t('view')}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent B2B Activity */}
                      <div className="bg-white border rounded-lg">
                        <div className="p-4 border-b">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-blue-600" />
                            {t('recentB2BActivity')}
                          </h3>
                        </div>
                        <div className="p-4 space-y-4">
                          {[
                            { name: t('greenValleyStore'), amount: "₹45,200", id: "B2B-2024-089", time: t('hourAgo'), status: t('confirmed') },
                            { name: t('freshMarketHub'), amount: "₹28,750", id: "B2B-2024-088", time: t('hoursAgo3'), status: t('pending') },
                            { name: t('cityGrocersLtd'), amount: "₹62,400", id: "B2B-2024-087", time: t('hoursAgo5'), status: t('delivered') }
                          ].map((activity, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                              <div>
                                <p className="font-medium text-slate-900">{activity.name}</p>
                                <p className="text-sm text-slate-500">{activity.id} • {activity.time}</p>
                                <Badge variant="outline" className="mt-1" size="sm">{activity.status}</Badge>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-blue-600">{activity.amount}</p>
                                <Button variant="outline" size="sm" className="mt-1">
                                  <Eye className="w-3 h-3 mr-1" />
                                  {t('view')}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>
                  {t('step3Intro')} <Link to={createPageUrl('CRMDashboard')} className="text-purple-600 hover:underline">CRM Dashboard</Link>.
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step3A_Title')}</h6>
                <p>
                  {t('step3A_Para')}
                </p>
                <Screenshot title={t('directoryScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      {/* Header with search and filters */}
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                          <Users className="w-5 h-5 text-orange-600" />
                          {t('customerDirectory')}
                        </h4>
                        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                          <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input placeholder={t('searchCustomers')} className="pl-9" />
                          </div>
                          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                            <option>{t('allTiers')}</option>
                            <option>{t('platinum')}</option>
                            <option>{t('gold')}</option>
                            <option>{t('silver')}</option>
                            <option>{t('bronze')}</option>
                          </select>
                        </div>
                      </div>
                      {/* Alphabet filter */}
                      <div className="flex flex-wrap gap-1 mt-4">
                        <Button variant="default" size="sm" className="h-7 px-3 text-xs">All</Button>
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => <Button key={l} variant="outline" size="sm" className="h-7 w-7 text-xs">{l}</Button>)}
                      </div>
                    </div>
                    {/* Table */}
                    <div className="overflow-x-auto p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2 font-medium text-slate-600">{t('customer')}</th>
                            <th className="text-left p-2 font-medium text-slate-600">{t('tier')}</th>
                            <th className="text-left p-2 font-medium text-slate-600">{t('totalSpent')}</th>
                            <th className="text-left p-2 font-medium text-slate-600">{t('lastPurchase')}</th>
                            <th className="text-left p-2 font-medium text-slate-600">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">
                              <p className="font-medium text-slate-800">{t('priyaSharma')}</p>
                              <p className="text-xs text-slate-500">priya.sharma@example.com</p>
                            </td>
                            <td className="p-2"><Badge className="bg-yellow-100 text-yellow-800">{t('gold')}</Badge></td>
                            <td className="p-2">₹12,450.00</td>
                            <td className="p-2">{t('daysAgo')}</td>
                            <td className="p-2"><Button variant="ghost" size="icon"><Eye className="w-4 h-4"/></Button></td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">
                              <p className="font-medium text-slate-800">Rahul Verma</p>
                              <p className="text-xs text-slate-500">rahul.v@example.com</p>
                            </td>
                            <td className="p-2"><Badge className="bg-gray-100 text-gray-800">{t('silver')}</Badge></td>
                            <td className="p-2">₹6,820.50</td>
                            <td className="p-2">{t('weekAgo')}</td>
                            <td className="p-2"><Button variant="ghost" size="icon"><Eye className="w-4 h-4"/></Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-8 mb-3">{t('step3B_Title')}</h6>
                <p>
                  {t('step3B_Para')}
                </p>
                 <Screenshot title={t('referralModalScreenshotTitle')}>
                  <div className="bg-white p-6 rounded-lg border max-w-md mx-auto">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{t('createCustomerReferral')}</h3>
                    <p className="text-sm text-slate-500 mb-6">{t('selectParentChild')}</p>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 block mb-1">{t('parentCustomer')}</label>
                        <select className="w-full px-3 py-2 border rounded-lg bg-white"><option>{t('selectParent')}</option></select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 block mb-1">{t('childCustomer')}</label>
                        <select className="w-full px-3 py-2 border rounded-lg bg-white"><option>{t('selectChild')}</option></select>
                      </div>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-purple-600 hover:bg-purple-700">{t('createLink')}</Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-8 mb-3">{t('step3C_Title')}</h6>
                <p>
                  {t('step3C_Para')}
                </p>

                <div className="pl-4 border-l-4 border-purple-300 mt-4 space-y-8">

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3">{t('step3D_Title')}</h5>
                    <p className="mb-4">{t('step3D_Para')}</p>
                    <Screenshot title={t('headerScreenshotTitle')}>
                       <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border">
                          <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">PS</div>
                            <div className="flex-grow">
                              <h2 className="text-2xl font-bold text-slate-900">{t('priyaSharma')}</h2>
                              <p className="text-slate-600">{t('joinedYear')}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge className="bg-yellow-100 text-yellow-800">{t('goldMember')}</Badge>
                                <Badge variant="outline" className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> {t('points')}</Badge>
                              </div>
                            </div>
                            <div className="flex gap-2">
                               <Button variant="outline" size="sm"><Edit className="w-4 h-4 mr-2" />{t('edit')}</Button>
                               <Button variant="outline" size="sm"><Mail className="w-4 h-4 mr-2" />{t('email')}</Button>
                            </div>
                          </div>
                        </div>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-white border p-4 rounded-lg text-center"><p className="text-xl font-bold">₹12,450</p><p className="text-xs text-slate-500">{t('totalSpent')}</p></div>
                          <div className="bg-white border p-4 rounded-lg text-center"><p className="text-xl font-bold">15</p><p className="text-xs text-slate-500">{t('totalOrders')}</p></div>
                          <div className="bg-white border p-4 rounded-lg text-center"><p className="text-xl font-bold">₹830</p><p className="text-xs text-slate-500">{t('avgOrderValue')}</p></div>
                          <div className="bg-white border p-4 rounded-lg text-center"><p className="text-sm font-bold">{t('daysAgo')}</p><p className="text-xs text-slate-500">{t('lastPurchase')}</p></div>
                        </div>
                      </div>
                    </Screenshot>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3">{t('step3E_Title')}</h5>
                    <p className="mb-4">{t('step3E_Para')}</p>
                    <Screenshot title={t('custOverviewScreenshotTitle')}>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2"><User className="w-4 h-4 text-slate-500"/>{t('customerInformation')}</h4>
                          <div className="text-sm space-y-2">
                             <p><strong className="font-medium text-slate-600">{t('email')}:</strong> priya.sharma@example.com</p>
                             <p><strong className="font-medium text-slate-600">{t('phone')}:</strong> +91 98765 12345</p>
                             <p><strong className="font-medium text-slate-600">{t('address')}:</strong> 123, Rose Villa, Mumbai</p>
                          </div>
                        </div>
                        <div className="border rounded-lg p-4">
                           <h4 className="font-semibold mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500"/>{t('recentActivity')}</h4>
                           <div className="space-y-2 text-sm">
                              <div className="flex justify-between items-center bg-slate-50 p-2 rounded"><span>{t('orderPrefix')}...5f3b</span><span>₹950.00</span></div>
                              <div className="flex justify-between items-center bg-slate-50 p-2 rounded"><span>{t('orderPrefix')}...8a1c</span><span>₹1,120.00</span></div>
                           </div>
                        </div>
                      </div>
                    </Screenshot>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3">{t('step3F_Title')}</h5>
                    <p className="mb-4">{t('step3F_Para')}</p>
                    <Screenshot title={t('purchaseHistoryScreenshotTitle')}>
                      <div className="border rounded-lg p-4 space-y-4">
                        <h4 className="font-semibold text-lg flex items-center gap-2"><ShoppingBag className="w-5 h-5 text-slate-600"/>{t('purchaseHistory')}</h4>
                        <div className="border rounded-lg p-3 bg-slate-50">
                           <div className="flex justify-between items-center mb-2">
                              <div>
                                <p className="font-semibold text-blue-600">{t('orderPrefix')}ORD-2024-9815f3b</p>
                                <p className="text-xs text-slate-500">June 18, 2024</p>
                              </div>
                              <Badge className="bg-orange-100 text-orange-800">{t('partiallyCancelled')}</Badge>
                           </div>
                           <div className="space-y-2 mt-3 border-t pt-2">
                             <div className="flex justify-between items-center bg-white p-2 rounded border">
                                <div><p className="text-sm font-medium">{t('organicApples')}</p><span className="text-xs text-green-600">{t('shippedQuantity')}</span></div>
                                <span className="font-medium">₹250.00</span>
                             </div>
                             <div className="flex justify-between items-center bg-white p-2 rounded border">
                                <div><p className="text-sm font-medium">{t('almondMilk')}</p><span className="text-xs text-red-600">{t('cancelledQuantity')}</span></div>
                                <div className="flex items-center gap-2"><span className="font-medium line-through">₹180.00</span><Button size="sm" variant="outline" className="h-7 text-red-600 border-red-200"><XCircle className="w-3 h-3 mr-1"/>{t('cancel')}</Button></div>
                             </div>
                           </div>
                           <div className="flex justify-end mt-3 gap-2">
                              <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50"><CheckSquare className="w-4 h-4 mr-1"/>{t('closeOrder')}</Button>
                           </div>
                        </div>
                      </div>
                    </Screenshot>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3">{t('step3G_Title')}</h5>
                    <p className="mb-4">{t('step3G_Para')}</p>
                    <Screenshot title={t('loyaltyScreenshotTitle')}>
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="border rounded-lg p-4">
                           <h4 className="font-semibold mb-3 flex items-center gap-2"><Award className="w-5 h-5 text-purple-600"/>{t('loyaltyProgram')}</h4>
                            <div className="text-center p-4 bg-purple-50 rounded-lg mb-3">
                              <div className="text-3xl font-bold text-purple-600">1,250</div>
                              <p className="text-sm text-slate-600">{t('availablePoints')}</p>
                            </div>
                            <div className="text-sm space-y-1">
                                <div className="flex justify-between"><span className="text-slate-500">{t('earnedForOrder')}</span><strong className="text-green-600">+50 Points</strong></div>
                                <div className="flex justify-between"><span className="text-slate-500">{t('redeemedForOrder')}</span><strong className="text-red-600">-200 Points</strong></div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                           <h4 className="font-semibold mb-3 flex items-center gap-2"><Wallet className="w-5 h-5 text-blue-600"/>{t('payLaterWallet')}</h4>
                           <div className="grid grid-cols-3 gap-2 text-center p-3 bg-blue-50 rounded-lg mb-3">
                              <div><p className="font-bold">₹5,000</p><p className="text-xs">{t('limit')}</p></div>
                              <div><p className="font-bold text-orange-600">₹1,500</p><p className="text-xs">{t('balance')}</p></div>
                              <div><p className="font-bold text-green-600">₹3,500</p><p className="text-xs">{t('available')}</p></div>
                           </div>
                           <div className="text-sm space-y-1">
                                <div className="flex justify-between"><span className="text-slate-500">{t('purchase')}</span><strong className="text-red-600">- ₹950.00</strong></div>
                                <div className="flex justify-between"><span className="text-slate-500">{t('paymentReceived')}</span><strong className="text-green-600">+ ₹2,000.00</strong></div>
                            </div>
                        </div>
                      </div>
                    </Screenshot>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3">{t('step3H_Title')}</h5>
                    <p className="mb-4">{t('step3H_Para')}</p>
                     <Screenshot title={t('kycScreenshotTitle')}>
                       <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-lg flex items-center gap-2"><UserCheck className="w-5 h-5 text-cyan-600"/>{t('kycStatusDocs')}</h4>
                         <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                           <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                              <div>
                                 <p className="text-sm text-slate-600">{t('currentStatus')}</p>
                                 <Badge className="text-base bg-green-100 text-green-800">{t('verified')}</Badge>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">{t('pauseWallet')}</Button>
                                <Button variant="destructive">{t('stopWallet')}</Button>
                              </div>
                           </div>
                           <div className="mt-4 pt-4 border-t">
                             <h5 className="font-medium mb-2">{t('submittedDocuments')}</h5>
                             <div className="flex items-center justify-between p-2 bg-white border rounded">
                                <span className="flex items-center gap-2 text-sm"><StatementIcon className="w-4 h-4"/>{t('aadharCard')}</span>
                                <Button variant="outline" size="sm" className="h-7">{t('viewDocument')}</Button>
                             </div>
                           </div>
                         </div>
                       </div>
                    </Screenshot>
                  </div>
                </div>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>
                  {t('step4Intro')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4A_Title')}</h6>
                <Screenshot title={t('b2bDirectoryScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="bg-white border rounded-lg">
                      <div className="p-4 border-b">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-blue-600" />
                            {t('b2bRetailersCount')}
                          </h3>
                          <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto">
                            <div className="relative flex-1 lg:w-64">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                              <Input placeholder={t('searchRetailers')} className="pl-9" />
                            </div>
                            <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                              <option>{t('allStatus')}</option>
                              <option>{t('active')}</option>
                              <option>{t('pending')}</option>
                              <option>{t('suspended')}</option>
                            </select>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Plus className="w-4 h-4 mr-2" />
                              {t('addRetailer')}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Retailer Cards */}
                      <div className="p-4">
                        <div className="grid gap-4">
                          {[
                            { name: t('greenValleyStore'), contact: "Ramesh Patel", email: "ramesh@greenvalley.com", type: t('groceryStore'), orders: 45, spent: "₹4,85,200", creditLimit: "₹50,000", outstanding: "₹12,400", tier: t('goldPartner') },
                            { name: t('freshMarketHub'), contact: "Sunita Devi", email: "sunita@freshmarket.com", type: t('wholesale'), orders: 32, spent: "₹3,28,750", creditLimit: "₹75,000", outstanding: "₹8,900", tier: t('silverPartner') },
                            { name: t('cityGrocersLtd'), contact: "Arjun Singh", email: "arjun@citygrocers.com", type: t('retailChain'), orders: 67, spent: "₹7,62,400", creditLimit: "₹1,00,000", outstanding: "₹22,100", tier: t('platinumPartner') }
                          ].map((retailer, index) => (
                            <div key={index} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                                <div className="flex-grow">
                                  <div className="flex items-center gap-3 mb-3 ">
                                    <div className="hidden sm:blockw-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                                      <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-slate-900">{retailer.name}</h4>
                                      <p className="text-sm text-slate-600">{retailer.contact} • {retailer.email}</p>
                                      <p className="text-xs text-slate-500">{retailer.type}</p>
                                    </div>
                                    <Badge className={
                                      retailer.tier === t('platinumPartner') ? 'bg-purple-100 text-purple-800' :
                                      retailer.tier === t('goldPartner') ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-gray-100 text-gray-800'
                                    }>
                                      {retailer.tier}
                                    </Badge>
                                  </div>
                                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                                    <div>
                                      <span className="text-slate-600">{t('orders')}:</span>
                                      <span className="font-medium ml-1">{retailer.orders}</span>
                                    </div>
                                    <div>
                                      <span className="text-slate-600">{t('totalBusiness')}</span>
                                      <span className="font-medium text-green-600 ml-1">{retailer.spent}</span>
                                    </div>
                                    <div>
                                      <span className="text-slate-600">{t('creditLimit')}</span>
                                      <span className="font-medium text-blue-600 ml-1">{retailer.creditLimit}</span>
                                    </div>
                                    <div>
                                      <span className="text-slate-600">{t('outstanding')}</span>
                                      <span className="font-medium text-red-600 ml-1">{retailer.outstanding}</span>
                                    </div>
                                    <div>
                                      <span className="text-slate-600">{t('availableCredit')}</span>
                                      <span className="font-medium text-emerald-600 ml-1">₹{(parseInt(retailer.creditLimit.replace('₹', '').replace(/,/g, '')) - parseInt(retailer.outstanding.replace('₹', '').replace(/,/g, ''))).toLocaleString()}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    <Eye className="w-4 h-4 mr-2" />
                                    {t('viewDetails')}
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <DollarSign className="w-4 h-4 mr-2" />
                                    {t('statement')}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4B_Title')}</h6>
                <p>
                    {t('step4B_Para')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4C_Title')}</h6>
                <p>
                    {t('step4C_Para')}
                </p>
                <Screenshot title={t('addB2bScreenshotTitle')}>
                    <div className="bg-white p-6 rounded-lg border max-w-md mx-auto">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{t('addNewB2BRetailer')}</h3>
                        <p className="text-sm text-slate-500 mb-6">{t('enterDetailsNewPartner')}</p>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-slate-700 block mb-1">{t('businessName')}</label>
                                <Input placeholder="e.g., Green Valley Store" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700 block mb-1">{t('contactPerson')}</label>
                                <Input placeholder="e.g., Ramesh Patel" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700 block mb-1">{t('email')}</label>
                                <Input type="email" placeholder="e.g., ramesh@greenvalley.com" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700 block mb-1">{t('phoneNumber')}</label>
                                <Input type="tel" placeholder="e.g., +91 98765 12345" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700 block mb-1">{t('businessType')}</label>
                                <select className="w-full px-3 py-2 border rounded-lg bg-white">
                                    <option>{t('selectType')}</option>
                                    <option>{t('groceryStore')}</option>
                                    <option>{t('wholesale')}</option>
                                    <option>{t('retailChain')}</option>
                                    <option>{t('restaurant')}</option>
                                    <option>{t('other')}</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-3 pt-4">
                                <Button variant="outline">{t('cancel')}</Button>
                                <Button className="bg-blue-600 hover:bg-blue-700">{t('addRetailer')}</Button>
                            </div>
                        </div>
                    </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-8 pt-6 border-t mb-3">{t('step4D_Title')}</h6>
                <p>
                  {t('step4D_Para')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4E_Title')}</h6>
                <p>
                    {t('step4E_Para')}
                </p>
                <Screenshot title={t('b2bInfoSidebarScreenshotTitle')}>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-1/3 space-y-4">
                            {/* Business Info Card */}
                            <div className="border rounded-lg shadow-sm">
                                <div className="p-3 border-b bg-slate-50"><h4 className="font-semibold text-sm flex items-center gap-2"><Building2 className="w-4 h-4"/>{t('businessInformation')}</h4></div>
                                <div className="p-3 space-y-2 text-xs">
                                    <p><span className="font-medium text-slate-600">{t('contact')}:</span> John Doe</p>
                                    <p><span className="font-medium text-slate-600">{t('email')}:</span> johndoe@freshmart.com</p>
                                    <p><span className="font-medium text-slate-600">{t('phone')}:</span> +91 9876543210</p>
                                    <p><span className="font-medium text-slate-600">{t('gst')}:</span> 29ABCDE1234F1Z5</p>
                                </div>
                            </div>
                            {/* Account Status Card */}
                            <div className="border rounded-lg shadow-sm">
                                <div className="p-3 border-b bg-slate-50"><h4 className="font-semibold text-sm">{t('accountStatus')}</h4></div>
                                <div className="p-3 space-y-2 text-xs">
                                    <div className="flex justify-between"><span>Status:</span><Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{t('pendingApproval')}</Badge></div>
                                    <div className="flex justify-between"><span>{t('tier')}:</span><Badge variant="secondary" className="bg-amber-100 text-amber-800">{t('bronze')}</Badge></div>
                                    <Button size="sm" className="w-full mt-2 bg-green-600 hover:bg-green-700"><CheckSquare className="w-4 h-4 mr-2"/>{t('approveRetailer')}</Button>
                                </div>
                            </div>
                             {/* Quick Stats Card */}
                            <div className="border rounded-lg shadow-sm">
                                <div className="p-3 border-b bg-slate-50"><h4 className="font-semibold text-sm">{t('quickStats')}</h4></div>
                                <div className="p-3 grid grid-cols-2 gap-2 text-center">
                                    <div><p className="font-bold text-lg">15</p><p className="text-xs text-slate-500">{t('totalOrders')}</p></div>
                                    <div><p className="font-bold text-lg text-emerald-600">$5,250</p><p className="text-xs text-slate-500">{t('totalSpent')}</p></div>
                                    <div><p className="font-bold text-lg text-orange-600">$850</p><p className="text-xs text-slate-500">{t('outstanding')}</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <p className="text-slate-600">
                                This sidebar consolidates key data points:
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li dangerouslySetInnerHTML={{ __html: t('b2bInfoSidebarList1') }} />
                                    <li dangerouslySetInnerHTML={{ __html: t('b2bInfoSidebarList2') }} />
                                    <li dangerouslySetInnerHTML={{ __html: t('b2bInfoSidebarList3') }} />
                                </ul>
                            </p>
                        </div>
                    </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-8 pt-6 border-t mb-3">{t('step4F_Title')}</h6>
                <p>{t('step4F_Para')}</p>

                <div className="ml-0 md:ml-8 mt-4 space-y-6">
                    <div>
                        <h5 className="font-semibold text-slate-700 mb-2">{t('step4G_H1')}</h5>
                        <p className="mb-3">{t('step4G_P1')}</p>
                        <Screenshot title={t('b2bOrdersScreenshotTitle')}>
                           <div className="border rounded-lg shadow-sm">
                                <div className="p-4 border-b flex justify-between items-center bg-slate-50">
                                    <h4 className="font-semibold text-slate-800 flex items-center gap-2"><ShoppingBag className="w-5 h-5 text-purple-600"/>{t('purchaseHistory')}</h4>
                                    <div className="flex items-center gap-1 bg-slate-200 p-1 rounded-lg">
                                        <Button size="sm" variant="default" className="h-7"><Grid className="w-4 h-4"/></Button>
                                        <Button size="sm" variant="ghost" className="h-7"><List className="w-4 h-4"/></Button>
                                    </div>
                                </div>
                                <div className="p-4 grid md:grid-cols-2 gap-3">
                                    <div className="border rounded-lg p-3">
                                        <div className="flex justify-between items-start text-xs mb-2">
                                            <code>B2B-ORD-00128</code>
                                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">{t('delivered')}</Badge>
                                        </div>
                                        <p className="font-bold text-slate-900">$450.00</p>
                                        <p className="text-xs text-slate-500 mt-1">{t('mayDate')}</p>
                                    </div>
                                    <div className="border rounded-lg p-3">
                                        <div className="flex justify-between items-start text-xs mb-2">
                                            <code>B2B-ORD-00125</code>
                                            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">{t('dispatched')}</Badge>
                                        </div>
                                        <p className="font-bold text-slate-900">$1,200.00</p>
                                        <p className="text-xs text-slate-500 mt-1">{t('mayDate2')}</p>
                                    </div>
                                </div>
                            </div>
                        </Screenshot>
                    </div>

                    <div>
                        <h5 className="font-semibold text-slate-700 mb-2">{t('step4G_H2')}</h5>
                        <p className="mb-3">{t('step4G_P2')}</p>
                        <Screenshot title={t('b2bPaymentsScreenshotTitle')}>
                           <div className="border rounded-lg shadow-sm">
                                <div className="p-4 border-b flex justify-between items-center bg-slate-50">
                                    <h4 className="font-semibold text-slate-800 flex items-center gap-2"><CreditCard className="w-5 h-5 text-green-600"/>{t('paymentHistory')}</h4>
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700"><Plus className="w-4 h-4 mr-1"/>{t('recordPayment')}</Button>
                                </div>
                                <div className="p-4 overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead><tr className="border-b"><th className="p-2 text-left font-medium">{t('date')}</th><th className="p-2 text-left font-medium">{t('amount')}</th><th className="p-2 text-left font-medium">{t('method')}</th><th className="p-2 text-left font-medium">{t('reference')}</th></tr></thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2">May 21, 2024</td>
                                                <td className="p-2 font-medium text-green-700">$500.00</td>
                                                <td className="p-2">{t('bankTransfer')}</td>
                                                <td className="p-2">TRF-54321</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">May 15, 2024</td>
                                                <td className="p-2 font-medium text-green-700">$1000.00</td>
                                                <td className="p-2">{t('upi')}</td>
                                                <td className="p-2">upi-98765</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Screenshot>
                    </div>

                     <div>
                        <h5 className="font-semibold text-slate-700 mb-2">{t('step4G_H3')}</h5>
                        <p className="mb-3">{t('step4G_P3')}</p>
                        <Screenshot title={t('b2bStatementScreenshotTitle')}>
                           <div className="border rounded-lg shadow-sm">
                                <div className="p-4 border-b bg-slate-50">
                                    <h4 className="font-semibold text-slate-800 flex items-center gap-2"><StatementIcon className="w-5 h-5 text-blue-600"/>{t('accountStatement')}</h4>
                                </div>
                                <div className="p-4">
                                     <div className="mb-4 p-3 bg-red-50 rounded-lg text-center">
                                        <p className="text-sm font-medium text-red-800">{t('currentOutstandingBalance')}</p>
                                        <p className="text-2xl font-bold text-red-600">$850.00</p>
                                    </div>
                                    <div className='overflow-x-auto'>
                                    <table className="w-full text-sm ">
                                        <thead><tr className="border-b"><th className="p-2 text-left font-medium">{t('date')}</th><th className="p-2 text-left font-medium">{t('tableDescription')}</th><th className="p-2 text-right font-medium">{t('debit')}</th><th className="p-2 text-right font-medium">{t('credit')}</th><th className="p-2 text-right font-medium">{t('balance')}</th></tr></thead>
                                        <tbody>
                                            <tr className="border-b"><td className="p-2">May 21, 2024</td><td className="p-2">{t('paymentViaBankTransfer')}</td><td className="p-2 text-right"></td><td className="p-2 text-right text-green-600">$500.00</td><td className="p-2 text-right font-semibold">$850.00</td></tr>
                                            <tr className="border-b"><td className="p-2">May 20, 2024</td><td className="p-2">{t('orderPrefix')}B2B-ORD-00128</td><td className="p-2 text-right text-red-600">$450.00</td><td className="p-2 text-right"></td><td className="p-2 text-right font-semibold">$1,350.00</td></tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </Screenshot>
                    </div>

                    <div>
                        <h5 className="font-semibold text-slate-700 mb-2">{t('step4G_H4')}</h5>
                        <p className="mb-3">{t('step4G_P4')}</p>
                        <Screenshot title={t('b2bPayLaterScreenshotTitle')}>
                           <div className="border rounded-lg shadow-sm">
                                <div className="p-4 border-b bg-slate-50"><h4 className="font-semibold text-slate-800 flex items-center gap-2"><Wallet className="w-5 h-5 text-cyan-600"/>{t('payLaterTransactions')}</h4></div>
                                <div className="p-4">
                                    <p className="text-center text-sm text-slate-500 py-6">{t('noPayLaterServices')}</p>
                                </div>
                            </div>
                        </Screenshot>
                    </div>

                     <div>
                        <h5 className="font-semibold text-slate-700 mb-2">{t('step4G_H5')}</h5>
                        <p className="mb-3">{t('step4G_P5')}</p>
                        <Screenshot title={t('b2bKycScreenshotTitle')}>
                           <div className="border rounded-lg shadow-sm">
                                <div className="p-4 border-b bg-slate-50"><h4 className="font-semibold text-slate-800 flex items-center gap-2"><UserCheck className="w-5 h-5 text-indigo-600"/>{t('kycVerification')}</h4></div>
                                <div className="p-4 space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-slate-700">{t('nomineeFullName')}</label>
                                        <Input value="Jane Doe" disabled />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-700">{t('personalAddress')}</label>
                                        <Input value="123 Personal St, Anytown" disabled />
                                    </div>
                                    <div className="flex justify-end">
                                        <Button><Save className="w-4 h-4 mr-2"/>{t('saveKycDetails')}</Button>
                                    </div>
                                </div>
                            </div>
                        </Screenshot>
                    </div>
                </div>
              </Step>

              <Step number="5" title={t('step5Title')}>
                <p>
                  {t('step5Intro')}
                </p>

                <Screenshot title={t('analyticsScreenshotTitle')}>
                  <div className="space-y-6">
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-emerald-600" />
                          {t('revenueGrowth')}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('b2cGrowthMonth')}</span>
                            <span className="font-semibold text-emerald-600">+12.5%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('b2bGrowthMonth')}</span>
                            <span className="font-semibold text-emerald-600">+8.3%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('totalNetworkGrowth')}</span>
                            <span className="font-semibold text-emerald-600">+10.8%</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-blue-600" />
                          {t('customerMetrics')}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('newB2CCustomers')}</span>
                            <span className="font-semibold text-blue-600">47</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('newB2BPartners')}</span>
                            <span className="font-semibold text-blue-600">5</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('customerRetention')}</span>
                            <span className="font-semibold text-blue-600">89.4%</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                          <Star className="w-5 h-5 text-purple-600" />
                          {t('referralNetwork')}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('activeReferrers')}</span>
                            <span className="font-semibold text-purple-600">234</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('newReferralsMonth')}</span>
                            <span className="font-semibold text-purple-600">89</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('referralConversionRate')}</span>
                            <span className="font-semibold text-purple-600">67.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Revenue Comparison Chart */}
                    <div className="bg-white border rounded-lg p-6">
                      <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-slate-600" />
                        {t('b2cVsB2bRevenue')}
                      </h3>
                      <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                          <p className="text-slate-600">{t('revenueComparisonDesc')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Customer Tier Distribution */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="font-semibold text-slate-800 mb-4">{t('b2cCustomerTierDist')}</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span className="text-sm">{t('platinumTier')}</span>
                            </div>
                            <span className="font-semibold">145</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <span className="text-sm">{t('goldTier')}</span>
                            </div>
                            <span className="font-semibold">298</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                              <span className="text-sm">{t('silverTier')}</span>
                            </div>
                            <span className="font-semibold">456</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                              <span className="text-sm">{t('bronzeTier')}</span>
                            </div>
                            <span className="font-semibold">348</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="font-semibold text-slate-800 mb-4">{t('b2bPartnerCategories')}</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('groceryStores')}</span>
                            <span className="font-semibold">34</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('restaurantsCafes')}</span>
                            <span className="font-semibold">28</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('hotels')}</span>
                            <span className="font-semibold">15</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('retailChains')}</span>
                            <span className="font-semibold">8</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{t('others')}</span>
                            <span className="font-semibold">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-8">
                <h6 className="font-semibold text-emerald-800 mb-3">{t('bestPracticesTitle')}</h6>
                <ul className="text-emerald-700 text-sm space-y-2">
                  <li dangerouslySetInnerHTML={{ __html: t('bestPractice1') }} />
                  <li dangerouslySetInnerHTML={{ __html: t('bestPractice2') }} />
                  <li dangerouslySetInnerHTML={{ __html: t('bestPractice3') }} />
                  <li dangerouslySetInnerHTML={{ __html: t('bestPractice4') }} />
                  <li dangerouslySetInnerHTML={{ __html: t('bestPractice5') }} />
                  <li dangerouslySetInnerHTML={{ __html: t('bestPractice6') }} />
                </ul>
              </div>

              <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-blue-700 mb-4">
                  {t('nextStepsDescription')}
                </p>
                <Link to={createPageUrl('ManualPayLater')} className="inline-block">
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
