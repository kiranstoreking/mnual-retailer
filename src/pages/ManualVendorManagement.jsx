
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, Building2, UserPlus, Edit, Eye, Star,
  Phone, Mail, MapPin, Package, DollarSign, TrendingUp,
  CheckCircle, Clock, AlertTriangle, FileText, Upload,
  Search, Filter, Grid, List, Calendar, Users, Plus, User
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
    pageTitle: "Vendor Management Manual",
    backToManual: "Back to Manual",
    description: "Complete guide to managing vendor relationships from onboarding to performance tracking, including vendor profiles, purchase order coordination, payment management, and performance analytics.",
    
    step1Title: "Vendor Dashboard Overview",
    step1Intro: "The Vendor Dashboard is your central hub for managing all supplier relationships. It provides comprehensive vendor statistics, performance metrics, and quick access to all vendor management functions.",
    step1Description: "Navigate to the Vendor Dashboard to access vendor management tools and monitor supplier performance metrics.",
    
    step2Title: "Adding New Vendors (Onboarding Process)",
    step2Intro: "Proper vendor onboarding is crucial for establishing strong supplier relationships. The system guides you through collecting essential vendor information, documentation, and setting up business terms.",
    step2Description: "Learn the complete vendor onboarding workflow including information collection, document verification, and account setup.",
    
    step3Title: "Vendor Profile Management",
    step3Intro: "Each vendor has a comprehensive profile containing contact information, business details, performance metrics, and transaction history. Regular profile maintenance ensures accurate supplier data.",
    step3Description: "Master vendor profile management including updating information, managing documents, and tracking performance metrics.",
    
    step4Title: "Purchase Order Coordination",
    step4Intro: "Vendor management includes coordinating purchase orders, tracking deliveries, and managing vendor communications throughout the procurement process.",
    step4Description: "Learn how to coordinate purchase orders with vendors and track order fulfillment progress.",
    
    step5Title: "Payment Management & Statements",
    step5Intro: "The system tracks all financial transactions with vendors, generates payment schedules, and provides comprehensive vendor statements for reconciliation purposes.",
    step5Description: "Master vendor payment processing, statement generation, and financial reconciliation workflows.",
    
    step6Title: "Vendor Performance Analytics",
    step6Intro: "Performance tracking helps evaluate vendor reliability, quality, and cost-effectiveness. The system provides detailed analytics to support vendor selection and management decisions.",
    step6Description: "Learn to analyze vendor performance metrics and make data-driven supplier management decisions.",
    
    step7Title: "Vendor Portal Integration",
    step7Intro: "RetailOS provides vendors with portal access for order management, product updates, and direct communication. This integration streamlines vendor collaboration and reduces manual coordination.",
    step7Description: "Understand how to enable and manage vendor portal access for improved collaboration.",
    
    // Dashboard Screenshots
    dashboardScreenshotTitle: "Vendor Dashboard - Main Interface",
    vendorManagement: "Vendor Management",
    manageVendorRelationships: "Manage all vendor relationships, track performance, and coordinate orders.",
    addVendor: "Add Vendor",
    generateReport: "Generate Report",
    totalVendors: "Total Vendors",
    activeVendors: "Active Vendors",
    pendingOrders: "Pending Orders",
    totalSpent: "Total Spent",
    onTimeDelivery: "On-Time Delivery",
    qualityRating: "Quality Rating",
    
    // Vendor List Screenshots
    vendorListScreenshotTitle: "Vendor List - All Suppliers Overview",
    allVendors: "All Vendors ({count})",
    searchVendors: "Search by vendor name, category, or contact...",
    allCategories: "All Categories",
    allStatuses: "All Statuses",
    active: "Active",
    inactive: "Inactive",
    vendorName: "Vendor Name",
    category: "Category",
    contact: "Contact",
    rating: "Rating",
    orders: "Orders",
    lastOrder: "Last Order",
    actions: "Actions",
    
    // Sample vendor data
    freshFarmSupplies: "Fresh Farm Supplies",
    produce: "Produce",
    johnSmith: "John Smith",
    johnEmail: "john@freshfarm.com",
    sunriseManufacturing: "Sunrise Manufacturing",
    packaged: "Packaged",
    sarahJohnson: "Sarah Johnson",
    sarahEmail: "sarah@sunrise.com",
    may15: "May 15, 2024",
    may20: "May 20, 2024",
    viewDetails: "View Details",
    edit: "Edit",
    
    // Add Vendor Screenshots
    addVendorScreenshotTitle: "Add New Vendor Form",
    onboardNewVendor: "Onboard New Vendor",
    enterVendorDetails: "Enter all details for the new vendor profile.",
    basicInformation: "Basic Information",
    vendorPrimaryDetails: "Enter the vendor's primary company and contact details.",
    vendorNameField: "Vendor Name",
    contactPerson: "Contact Person",
    email: "Email",
    phone: "Phone",
    productCategories: "Product Categories",
    categoriesHelp: "Enter categories separated by commas.",
    
    addressSection: "Address",
    streetAddress: "Street Address",
    city: "City",
    state: "State / Province",
    zipCode: "ZIP / Postal Code",
    
    financialTaxInfo: "Financial & Tax Information",
    paymentTerms: "Payment Terms",
    gstNumber: "GST Number",
    taxId: "Tax ID / PAN",
    
    kycDetails: "KYC Details",
    documentType: "Document Type",
    panCard: "PAN Card",
    gstCertificate: "GST Certificate",
    bankStatement: "Bank Statement",
    documentNumber: "Document Number",
    uploadDocument: "Upload Document",
    uploadDocumentHelp: "Upload a PDF or image of the selected document.",
    
    cancel: "Cancel",
    saveVendor: "Save Vendor",
    
    // Vendor Detail Screenshots
    vendorDetailScreenshotTitle: "Vendor Profile - Detailed View",
    vendorProfile: "Vendor Profile",
    editVendor: "Edit Vendor",
    kycStatus: "KYC Status",
    verified: "Verified",
    pending: "Pending",
    contactInformation: "Contact Information",
    businessDetails: "Business Details",
    paymentInfo: "Payment Information",
    
    performanceMetrics: "Performance Metrics",
    totalOrders: "Total Orders",
    avgOrderValue: "Avg. Order Value",
    deliveryTime: "Delivery Time",
    days: "days",
    
    recentOrders: "Recent Orders",
    orderId: "Order ID",
    orderDate: "Order Date",
    amount: "Amount",
    status: "Status",
    shipped: "Shipped",
    delivered: "Delivered",
    
    // Performance Analytics Screenshots
    analyticsScreenshotTitle: "Vendor Performance Analytics",
    performanceAnalytics: "Vendor Performance Analytics",
    analyzePerfomance: "Analyze vendor performance metrics and delivery statistics.",
    deliveryPerformance: "Delivery Performance",
    onTime: "On Time",
    delayed: "Delayed",
    orderTrends: "Order Trends (Last 6 Months)",
    orderValue: "Order Value",
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "May",
    jun: "Jun",
    
    topPerformers: "Top Performing Vendors",
    vendor: "Vendor",
    score: "Score",
    
    // Payment Management Screenshots
    paymentScreenshotTitle: "Vendor Payment Management",
    paymentManagement: "Vendor Payment Management",
    trackPayments: "Track payments to vendors and manage financial reconciliation.",
    pendingPayments: "Pending Payments",
    paymentHistory: "Payment History",
    dueDate: "Due Date",
    amountDue: "Amount Due",
    payNow: "Pay Now",
    paymentDate: "Payment Date",
    method: "Method",
    reference: "Reference",
    bankTransfer: "Bank Transfer",
    
    // Portal Integration Screenshots
    portalScreenshotTitle: "Vendor Portal Integration",
    portalIntegration: "Vendor Portal Integration",
    managePortalAccess: "Manage vendor portal access and collaboration tools.",
    portalUsers: "Portal Users",
    accessLevel: "Access Level",
    fullAccess: "Full Access",
    enablePortal: "Enable Portal",
    portalFeatures: "Portal Features Available",
    orderManagement: "Order Management",
    productCatalog: "Product Catalog",
    paymentTracking: "Payment Tracking",
    communication: "Communication",
    
    nextStepsTitle: "Vendor Management Mastery Complete!",
    nextStepsDescription: "You have successfully mastered vendor management including onboarding, profile management, performance tracking, payment coordination, and portal integration. Your supplier relationships are now optimally managed for efficiency and collaboration.",
    nextStepsButton: "Continue to Purchase Orders",
    openDashboard: "Open Vendor Dashboard",
  },
  kn: {
    pageTitle: "ವೆಂಡರ್ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಆನ್‌ಬೋರ್ಡಿಂಗ್‌ನಿಂದ ಕಾರ್ಯಕ್ಷಮತೆ ಟ್ರ್ಯಾಕಿಂಗ್‌ವರೆಗೆ ಮಾರಾಟಗಾರರ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ, ಮಾರಾಟಗಾರರ ಪ್ರೊಫೈಲ್‌ಗಳು, ಖರೀದಿ ಆದೇಶ ಸಮನ್ವಯ, ಪಾವತಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ ಸೇರಿದಂತೆ.",
    
    step1Title: "ವೆಂಡರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ವೆಂಡರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಎಲ್ಲಾ ಪೂರೈಕೆದಾರರ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಲು ನಿಮ್ಮ ಕೇಂದ್ರ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ಸಮಗ್ರ ಮಾರಾಟಗಾರರ ಅಂಕಿಅಂಶಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್ ಮತ್ತು ಎಲ್ಲಾ ಮಾರಾಟಗಾರರ ನಿರ್ವಹಣಾ ಕಾರ್ಯಗಳಿಗೆ ತ್ವರಿತ ಪ್ರವೇಶವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step1Description: "ಮಾರಾಟಗಾರರ ನಿರ್ವಹಣಾ ಸಾಧನಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಮತ್ತು ಪೂರೈಕೆದಾರರ ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್ ಅನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ವೆಂಡರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",
    
    step2Title: "ಹೊಸ ಮಾರಾಟಗಾರರನ್ನು ಸೇರಿಸುವುದು (ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪ್ರಕ್ರಿಯೆ)",
    step2Intro: "ಬಲವಾದ ಪೂರೈಕೆದಾರರ ಸಂಬಂಧಗಳನ್ನು ಸ್ಥಾಪಿಸಲು ಸರಿಯಾದ ಮಾರಾಟಗಾರರ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ನಿರ್ಣಾಯಕವಾಗಿದೆ. ಸಿಸ್ಟಮ್ ಅಗತ್ಯ ಮಾರಾಟಗಾರರ ಮಾಹಿತಿ, ದಾಖಲಾತಿ ಮತ್ತು ವ್ಯಾಪಾರ ನಿಯಮಗಳನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.",
    step2Description: "ಮಾಹಿತಿ ಸಂಗ್ರಹಣೆ, ದಾಖಲೆ ಪರಿಶೀಲನೆ ಮತ್ತು ಖಾತೆ ಸೆಟಪ್ ಸೇರಿದಂತೆ ಸಂಪೂರ್ಣ ಮಾರಾಟಗಾರರ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಕಾರ್ಯಪ್ರವಾಹವನ್ನು ಕಲಿಯಿರಿ.",
    
    step3Title: "ವೆಂಡರ್ ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಣೆ",
    step3Intro: "ಪ್ರತಿ ಮಾರಾಟಗಾರರು ಸಂಪರ್ಕ ಮಾಹಿತಿ, ವ್ಯಾಪಾರ ವಿವರಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್ ಮತ್ತು ವಹಿವಾಟು ಇತಿಹಾಸವನ್ನು ಒಳಗೊಂಡಿರುವ ಸಮಗ್ರ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಹೊಂದಿದ್ದಾರೆ. ನಿಯಮಿತ ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಣೆಯು ನಿಖರವಾದ ಪೂರೈಕೆದಾರರ ಡೇಟಾವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
    step3Description: "ಮಾಹಿತಿಯನ್ನು ನವೀಕರಿಸುವುದು, ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್ ಅನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದು ಸೇರಿದಂತೆ ಮಾಸ್ಟರ್ ವೆಂಡರ್ ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಣೆ.",
    
    step4Title: "ಖರೀದಿ ಆದೇಶ ಸಮನ್ವಯ",
    step4Intro: "ಮಾರಾಟಗಾರರ ನಿರ್ವಹಣೆಯು ಖರೀದಿ ಆದೇಶಗಳನ್ನು ಸಮನ್ವಯಗೊಳಿಸುವುದು, ವಿತರಣೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದು ಮತ್ತು ಸಂಗ್ರಹಣೆ ಪ್ರಕ್ರಿಯೆಯ ಉದ್ದಕ್ಕೂ ಮಾರಾಟಗಾರರ ಸಂವಹನಗಳನ್ನು ನಿರ್ವಹಿಸುವುದನ್ನು ಒಳಗೊಂಡಿದೆ.",
    step4Description: "ಮಾರಾಟಗಾರರೊಂದಿಗೆ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ಹೇಗೆ ಸಮನ್ವಯಗೊಳಿಸುವುದು ಮತ್ತು ಆದೇಶ ಪೂರೈಸುವಿಕೆಯ ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದು ಎಂಬುದನ್ನು ಕಲಿಯಿರಿ.",
    
    step5Title: "ಪಾವತಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಹೇಳಿಕೆಗಳು",
    step5Intro: "ಸಿಸ್ಟಮ್ ಮಾರಾಟಗಾರರೊಂದಿಗಿನ ಎಲ್ಲಾ ಆರ್ಥಿಕ ವಹಿವಾಟುಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ, ಪಾವತಿ ವೇಳಾಪಟ್ಟಿಗಳನ್ನು ರಚಿಸುತ್ತದೆ ಮತ್ತು ಸಮನ್ವಯ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಸಮಗ್ರ ಮಾರಾಟಗಾರರ ಹೇಳಿಕೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step5Description: "ಮಾಸ್ಟರ್ ವೆಂಡರ್ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆ, ಹೇಳಿಕೆ ಉತ್ಪಾದನೆ ಮತ್ತು ಆರ್ಥಿಕ ಸಮನ್ವಯ ಕಾರ್ಯಪ್ರವಾಹಗಳು.",
    
    step6Title: "ವೆಂಡರ್ ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ",
    step6Intro: "ಕಾರ್ಯಕ್ಷಮತೆ ಟ್ರ್ಯಾಕಿಂಗ್ ಮಾರಾಟಗಾರರ ವಿಶ್ವಾಸಾರ್ಹತೆ, ಗುಣಮಟ್ಟ ಮತ್ತು ವೆಚ್ಚ-ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಸಿಸ್ಟಮ್ ಮಾರಾಟಗಾರರ ಆಯ್ಕೆ ಮತ್ತು ನಿರ್ವಹಣಾ ನಿರ್ಧಾರಗಳನ್ನು ಬೆಂಬಲಿಸಲು ವಿವರವಾದ ವಿಶ್ಲೇಷಣೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step6Description: "ಮಾರಾಟಗಾರರ ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಮತ್ತು ಡೇಟಾ-ಚಾಲಿತ ಪೂರೈಕೆದಾರರ ನಿರ್ವಹಣಾ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಕಲಿಯಿರಿ.",
    
    step7Title: "ವೆಂಡರ್ ಪೋರ್ಟಲ್ ಏಕೀಕರಣ",
    step7Intro: "RetailOS ಆದೇಶ ನಿರ್ವಹಣೆ, ಉತ್ಪನ್ನ ನವೀಕರಣಗಳು ಮತ್ತು ನೇರ ಸಂವಹನಕ್ಕಾಗಿ ಮಾರಾಟಗಾರರಿಗೆ ಪೋರ್ಟಲ್ ಪ್ರವೇಶವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಈ ಏಕೀಕರಣವು ಮಾರಾಟಗಾರರ ಸಹಯೋಗವನ್ನು ಸುಗಮಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಹಸ್ತಚಾಲಿತ ಸಮನ್ವಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
    step7Description: "ಸುಧಾರಿತ ಸಹಯೋಗಕ್ಕಾಗಿ ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್ ಪ್ರವೇಶವನ್ನು ಹೇಗೆ ಸಕ್ರಿಯಗೊಳಿಸುವುದು ಮತ್ತು ನಿರ್ವಹಿಸುವುದು ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
    
    // Dashboard Screenshots
    dashboardScreenshotTitle: "ವೆಂಡರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ - ಮುಖ್ಯ ಇಂಟರ್‌ಫೇಸ್",
    vendorManagement: "ವೆಂಡರ್ ನಿರ್ವಹಣೆ",
    manageVendorRelationships: "ಎಲ್ಲಾ ಮಾರಾಟಗಾರರ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಆದೇಶಗಳನ್ನು ಸಮನ್ವಯಗೊಳಿಸಿ.",
    addVendor: "ವೆಂಡರ್ ಸೇರಿಸಿ",
    generateReport: "ವರದಿಯನ್ನು ಉತ್ಪಾದಿಸಿ",
    totalVendors: "ಒಟ್ಟು ಮಾರಾಟಗಾರರು",
    activeVendors: "ಸಕ್ರಿಯ ಮಾರಾಟಗಾರರು",
    pendingOrders: "ಬಾಕಿ ಆದೇಶಗಳು",
    totalSpent: "ಒಟ್ಟು ಖರ್ಚು",
    onTimeDelivery: "ಸಮಯಕ್ಕೆ ವಿತರಣೆ",
    qualityRating: "ಗುಣಮಟ್ಟದ ರೇಟಿಂಗ್",
    
    // Vendor List Screenshots
    vendorListScreenshotTitle: "ವೆಂಡರ್ ಪಟ್ಟಿ - ಎಲ್ಲಾ ಪೂರೈಕೆದಾರರ ಅವಲೋಕನ",
    allVendors: "ಎಲ್ಲಾ ಮಾರಾಟಗಾರರು ({count})",
    searchVendors: "ಮಾರಾಟಗಾರರ ಹೆಸರು, ವರ್ಗ ಅಥವಾ ಸಂಪರ್ಕದ ಮೂಲಕ ಹುಡುಕಿ...",
    allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    allStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
    active: "ಸಕ್ರಿಯ",
    inactive: "ನಿಷ್ಕ್ರಿಯ",
    vendorName: "ಮಾರಾಟಗಾರರ ಹೆಸರು",
    category: "ವರ್ಗ",
    contact: "ಸಂಪರ್ಕ",
    rating: "ರೇಟಿಂಗ್",
    orders: "ಆದೇಶಗಳು",
    lastOrder: "ಕೊನೆಯ ಆದೇಶ",
    actions: "ಕ್ರಿಯೆಗಳು",
    
    // Sample vendor data
    freshFarmSupplies: "ಫ್ರೆಶ್ ಫಾರ್ಮ್ ಸಪ್ಲೈಸ್",
    produce: "ಉತ್ಪನ್ನ",
    johnSmith: "ಜಾನ್ ಸ್ಮಿತ್",
    johnEmail: "john@freshfarm.com",
    sunriseManufacturing: "ಸನ್‌ರೈಸ್ ಮ್ಯಾನುಫ್ಯಾಕ್ಚರಿಂಗ್",
    packaged: "ಪ್ಯಾಕೇಜ್ಡ್",
    sarahJohnson: "ಸಾರಾ ಜಾನ್ಸನ್",
    sarahEmail: "sarah@sunrise.com",
    may15: "ಮೇ 15, 2024",
    may20: "ಮೇ 20, 2024",
    viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    edit: "ಸಂಪಾದಿಸಿ",
    
    // Add Vendor Screenshots
    addVendorScreenshotTitle: "ಹೊಸ ವೆಂಡರ್ ಫಾರ್ಮ್ ಸೇರಿಸಿ",
    onboardNewVendor: "ಹೊಸ ವೆಂಡರ್ ಆನ್‌ಬೋರ್ಡ್ ಮಾಡಿ",
    enterVendorDetails: "ಹೊಸ ಮಾರಾಟಗಾರರ ಪ್ರೊಫೈಲ್‌ಗಾಗಿ ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
    basicInformation: "ಮೂಲಭೂತ ಮಾಹಿತಿ",
    vendorPrimaryDetails: "ಮಾರಾಟಗಾರರ ಪ್ರಾಥಮಿಕ ಕಂಪನಿ ಮತ್ತು ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
    vendorNameField: "ಮಾರಾಟಗಾರರ ಹೆಸರು",
    contactPerson: "ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ",
    email: "ಇಮೇಲ್",
    phone: "ಫೋನ್",
    productCategories: "ಉತ್ಪನ್ನ ವರ್ಗಗಳು",
    categoriesHelp: "ಅಲ್ಪವಿರಾಮಗಳಿಂದ ಬೇರ್ಪಡಿಸಿದ ವರ್ಗಗಳನ್ನು ನಮೂದಿಸಿ.",
    
    addressSection: "ವಿಳಾಸ",
    streetAddress: "ರಸ್ತೆ ವಿಳಾಸ",
    city: "ನಗರ",
    state: "ರಾಜ್ಯ / ಪ್ರಾಂತ್ಯ",
    zipCode: "ZIP / ಪೋಸ್ಟಲ್ ಕೋಡ್",
    
    financialTaxInfo: "ಆರ್ಥಿಕ ಮತ್ತು ತೆರಿಗೆ ಮಾಹಿತಿ",
    paymentTerms: "ಪಾವತಿ ನಿಯಮಗಳು",
    gstNumber: "GST ಸಂಖ್ಯೆ",
    taxId: "ತೆರಿಗೆ ID / PAN",
    
    kycDetails: "KYC ವಿವರಗಳು",
    documentType: "ದಾಖಲೆ ಪ್ರಕಾರ",
    panCard: "PAN ಕಾರ್ಡ್",
    gstCertificate: "GST ಪ್ರಮಾಣಪತ್ರ",
    bankStatement: "ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್",
    documentNumber: "ದಾಖಲೆ ಸಂಖ್ಯೆ",
    uploadDocument: "ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    uploadDocumentHelp: "ಆಯ್ಕೆಮಾಡಿದ ದಾಖಲೆಯ PDF ಅಥವಾ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    
    cancel: "ರದ್ದುಮಾಡಿ",
    saveVendor: "ವೆಂಡರ್ ಉಳಿಸಿ",
    
    // Vendor Detail Screenshots
    vendorDetailScreenshotTitle: "ವೆಂಡರ್ ಪ್ರೊಫೈಲ್ - ವಿವರವಾದ ನೋಟ",
    vendorProfile: "ವೆಂಡರ್ ಪ್ರೊಫೈಲ್",
    editVendor: "ವೆಂಡರ್ ಸಂಪಾದಿಸಿ",
    kycStatus: "KYC ಸ್ಥಿತಿ",
    verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    pending: "ಬಾಕಿ ಇದೆ",
    contactInformation: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    businessDetails: "ವ್ಯಾಪಾರ ವಿವರಗಳು",
    paymentInfo: "ಪಾವತಿ ಮಾಹಿತಿ",
    
    performanceMetrics: "ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್",
    totalOrders: "ಒಟ್ಟು ಆದೇಶಗಳು",
    avgOrderValue: "ಸರಾಸರಿ ಆದೇಶ ಮೌಲ್ಯ",
    deliveryTime: "ವಿತರಣೆ ಸಮಯ",
    days: "ದಿನಗಳು",
    
    recentOrders: "ಇತ್ತೀಚಿನ ಆದೇಶಗಳು",
    orderId: "ಆದೇಶ ID",
    orderDate: "ಆದೇಶದ ದಿನಾಂಕ",
    amount: "ಮೊತ್ತ",
    status: "ಸ್ಥಿತಿ",
    shipped: "ರವಾನಿಸಲಾಗಿದೆ",
    delivered: "ವಿತರಿಸಲಾಗಿದೆ",
    
    // Performance Analytics Screenshots
    analyticsScreenshotTitle: "ವೆಂಡರ್ ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ",
    performanceAnalytics: "ವೆಂಡರ್ ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ",
    analyzePerfomance: "ಮಾರಾಟಗಾರರ ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್ ಮತ್ತು ವಿತರಣಾ ಅಂಕಿಅಂಶಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ.",
    deliveryPerformance: "ವಿತರಣೆ ಕಾರ್ಯಕ್ಷಮತೆ",
    onTime: "ಸಮಯಕ್ಕೆ",
    delayed: "ವಿಳಂಬವಾಗಿದೆ",
    orderTrends: "ಆದೇಶದ ಪ್ರವೃತ್ತಿಗಳು (ಕಳೆದ 6 ತಿಂಗಳುಗಳು)",
    orderValue: "ಆದೇಶದ ಮೌಲ್ಯ",
    jan: "ಜನ",
    feb: "ಫೆಬ್ರು",
    mar: "ಮಾರ್ಚ್",
    apr: "ಏಪ್ರಿ",
    may: "ಮೇ",
    jun: "ಜೂನ್",
    
    topPerformers: "ಉನ್ನತ ಕಾರ್ಯಕ್ಷಮತೆ ಮಾರಾಟಗಾರರು",
    vendor: "ಮಾರಾಟಗಾರ",
    score: "ಸ್ಕೋರ್",
    
    // Payment Management Screenshots
    paymentScreenshotTitle: "ವೆಂಡರ್ ಪಾವತಿ ನಿರ್ವಹಣೆ",
    paymentManagement: "ವೆಂಡರ್ ಪಾವತಿ ನಿರ್ವಹಣೆ",
    trackPayments: "ಮಾರಾಟಗಾರರಿಗೆ ಪಾವತಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಆರ್ಥಿಕ ಸಮನ್ವಯವನ್ನು ನಿರ್ವಹಿಸಿ.",
    pendingPayments: "ಬಾಕಿ ಪಾವತಿಗಳು",
    paymentHistory: "ಪಾವತಿ ಇತಿಹಾಸ",
    dueDate: "ಬಾಕಿ ದಿನಾಂಕ",
    amountDue: "ಬಾಕಿ ಮೊತ್ತ",
    payNow: "ಈಗ ಪಾವತಿಸಿ",
    paymentDate: "ಪಾವತಿ ದಿನಾಂಕ",
    method: "ವಿಧಾನ",
    reference: "ಉಲ್ಲೇಖ",
    bankTransfer: "ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ",
    
    // Portal Integration Screenshots
    portalScreenshotTitle: "ವೆಂಡರ್ ಪೋರ್ಟಲ್ ಏಕೀಕರಣ",
    portalIntegration: "ವೆಂಡರ್ ಪೋರ್ಟಲ್ ಏಕೀಕರಣ",
    managePortalAccess: "ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್ ಪ್ರವೇಶ ಮತ್ತು ಸಹಯೋಗ ಸಾಧನಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    portalUsers: "ಪೋರ್ಟಲ್ ಬಳಕೆದಾರರು",
    accessLevel: "ಪ್ರವೇಶ ಮಟ್ಟ",
    fullAccess: "ಪೂರ್ಣ ಪ್ರವೇಶ",
    enablePortal: "ಪೋರ್ಟಲ್ ಸಕ್ರಿಯಗೊಳಿಸಿ",
    portalFeatures: "ಲಭ್ಯವಿರುವ ಪೋರ್ಟಲ್ ವೈಶಿಷ್ಟ್ಯಗಳು",
    orderManagement: "ಆದೇಶ ನಿರ್ವಹಣೆ",
    productCatalog: "ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್",
    paymentTracking: "ಪಾವತಿ ಟ್ರ್ಯಾಕಿಂಗ್",
    communication: "ಸಂವಹನ",
    
    nextStepsTitle: "ವೆಂಡರ್ ನಿರ್ವಹಣೆ ಪಾಂಡಿತ್ಯ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನೀವು ಆನ್‌ಬೋರ್ಡಿಂಗ್, ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಣೆ, ಕಾರ್ಯಕ್ಷಮತೆ ಟ್ರ್ಯಾಕಿಂಗ್, ಪಾವತಿ ಸಮನ್ವಯ ಮತ್ತು ಪೋರ್ಟಲ್ ಏಕೀಕರಣ ಸೇರಿದಂತೆ ಮಾರಾಟಗಾರರ ನಿರ್ವಹಣೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಕರಗತ ಮಾಡಿಕೊಂಡಿದ್ದೀರಿ. ನಿಮ್ಮ ಪೂರೈಕೆದಾರರ ಸಂಬಂಧಗಳನ್ನು ಈಗ ದಕ್ಷತೆ ಮತ್ತು ಸಹಯೋಗಕ್ಕಾಗಿ ಅತ್ಯುತ್ತಮವಾಗಿ ನಿರ್ವಹಿಸಲಾಗಿದೆ.",
    nextStepsButton: "ಖರೀದಿ ಆದೇಶಗಳಿಗೆ ಮುಂದುವರಿಯಿರಿ",
    openDashboard: "ವೆಂಡರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ",
  },
  te: {
    pageTitle: "విక్రేత నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కు తిరిగి వెళ్ళు",
    description: "ఆన్‌బోర్డింగ్ నుండి పనితీరు ట్రాకింగ్ వరకు విక్రేత సంబంధాలను నిర్వహించడానికి పూర్తి గైడ్, విక్రేత ప్రొఫైల్‌లు, కొనుగోలు ఆర్డర్ సమన్వయం, చెల్లింపు నిర్వహణ మరియు పనితీరు విశ్లేషణలతో సహా.",
    
    step1Title: "విక్రేత డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "అన్ని సరఫరాదారు సంబంధాలను నిర్వహించడానికి విక్రేత డాష్‌బోర్డ్ మీ కేంద్ర కేంద్రం. ఇది సమగ్ర విక్రేత గణాంకాలు, పనితీరు మెట్రిక్స్ మరియు అన్ని విక్రేత నిర్వహణ ఫంక్షన్‌లకు త్వరిత ప్రాప్యతను అందిస్తుంది.",
    step1Description: "విక్రేత నిర్వహణ సాధనాలను యాక్సెస్ చేయడానికి మరియు సరఫరాదారు పనితీరు మెట్రిక్స్‌ను పర్యవేక్షించడానికి విక్రేత డాష్‌బోర్డ్‌కు నావిగేట్ చేయండి.",
    
    step2Title: "కొత్త విక్రేతలను జోడించడం (ఆన్‌బోర్డింగ్ ప్రక్రియ)",
    step2Intro: "బలమైన సరఫరాదారు సంబంధాలను ఏర్పాటు చేయడానికి సరైన విక్రేత ఆన్‌బోర్డింగ్ కీలకం. సిస్టమ్ ముఖ్యమైన విక్రేత సమాచారం, పత్రాలను సేకరించడం మరియు వ్యాపార నిబంధనలను ఏర్పాటు చేయడం ద్వారా మిమ్మల్ని నడిపిస్తుంది.",
    step2Description: "సమాచార సేకరణ, పత్ర ధృవీకరణ మరియు ఖాతా సెటప్‌తో సహా పూర్తి విక్రేత ఆన్‌బోర్డింగ్ వర్క్‌ఫ్లోని నేర్చుకోండి.",
    
    step3Title: "విక్రేత ప్రొఫైల్ నిర్వహణ",
    step3Intro: "ప్రతి విక్రేతకు సంప్రదింపు సమాచారం, వ్యాపార వివరాలు, పనితీరు మెట్రిక్స్ మరియు లావాదేవీ చరిత్రను కలిగి ఉన్న సమగ్ర ప్రొఫైల్ ఉంటుంది. క్రమమైన ప్రొఫైల్ నిర్వహణ ఖచ్చితమైన సరఫరాదారు డేటాను నిర్ధారిస్తుంది.",
    step3Description: "సమాచారాన్ని నవీకరించడం, పత్రాలను నిర్వహించడం మరియు పనితీరు మెట్రిక్స్‌ను ట్రాక్ చేయడం సహా విక్రేత ప్రొఫైల్ నిర్వహణను నేర్చుకోండి.",
    
    step4Title: "కొనుగోలు ఆర్డర్ సమన్వయం",
    step4Intro: "విక్రేత నిర్వహణలో కొనుగోలు ఆర్డర్లను సమన్వయం చేయడం, డెలివరీలను ట్రాక్ చేయడం మరియు కొనుగోలు ప్రక్రియలో విక్రేత సవాదాలను నిర్వహించడం ఉంటుంది.",
    step4Description: "విక్రేతలతో కొనుగోలు ఆర్డర్లను ఎలా సమన్వయం చేయాలి మరియు ఆర్డర్ నెరవేర్పు పురోగతిని ఎలా ట్రాక్ చేయాలి నేర్చుకోండి.",
    
    step5Title: "చెల్లింపు నిర్వహణ మరియు స్టేట్‌మెంట్లు",
    step5Intro: "సిస్టమ్ విక్రేతలతో జరిగే అన్ని ఆర్థిక లావాదేవీలను ట్రాక్ చేస్తుంది, చెల్లింపు షెడ్యూల్‌లను రూపొందిస్తుంది మరియు సమన్వయ ప్రయోజనాల కోసం సమగ్ర విక్రేత స్టేట్‌మెంట్లను అందిస్తుంది.",
    step5Description: "విక్రేత చెల్లింపు ప్రక్రియ, స్టేట్‌మెంట్ ఉత్పాదన మరియు ఆర్థిక సమన్వయ వర్క్‌ఫ్లోలను నేర్చుకోండి.",
    
    step6Title: "విక్రేత పనితీరు విశ్లేషణ",
    step6Intro: "పనితీరు ట్రాకింగ్ విక్రేత విశ్వాసనీయత, నాణ్యత మరియు ఖర్చు-ప్రభావాన్ని అంచనా వేయడానికి సహాయపడుతుంది. సిస్టమ్ విక్రేత ఎంపిక మరియు నిర్వహణ నిర్ధారణలకు మద్దతు ఇవ్వడానికి వివరమైన విశ్లేషణలను అందిస్తుంది.",
    step6Description: "విక్రేత పనితీరు మెట్రిక్స్‌ను విశ్లేషించడం మరియు డేటా-ఆధారిత సరఫరాదారు నిర్వహణ నిర్ధారణలను తీసుకోవడం నేర్చుకోండి.",
    
    step7Title: "విక్రేత పోర్టల్ ఏకీకరణ",
    step7Intro: "RetailOS ఆర్డర్ నిర్వహణ, ఉత్పత్తి నవీకరణలు మరియు నేరుగా సవాదం కోసం విక్రేతలకు పోర్టల్ యాక్సెస్‌ను అందిస్తుంది. ఈ ఏకీకరణ విక్రేత సహకారాన్ని సులభతరం చేస్తుంది మరియు మాన్యువల్ సమన్వయాన్ని తగ్గిస్తుంది.",
    step7Description: "మెరుగైన సహకారం కోసం విక్రేత పోర్టల్ యాక్సెస్‌ను ఎలా ప్రారంభించాలి మరియు నిర్వహించాలి అర్థం చేసుకోండి.",
    
    // Dashboard Screenshots
    dashboardScreenshotTitle: "విక్రేత డాష్‌బోర్డ్ - ప్రధాన ఇంటర్‌ఫేస్",
    vendorManagement: "విక్రేత నిర్వహణ",
    manageVendorRelationships: "అన్ని విక్రేత సంబంధాలను నిర్వహించండి, పనితీరును ట్రాక్ చేయండి మరియు ఆర్డర్లను సమన్వయం చేయండి.",
    addVendor: "విక్రేత జోడించండి",
    generateReport: "రిపోర్ట్ రూపొందించండి",
    totalVendors: "మొత్తం విక్రేతలు",
    activeVendors: "క్రియాశీల విక్రేతలు",
    pendingOrders: "పెండింగ్ ఆర్డర్లు",
    totalSpent: "మొత్తం ఖర్చు",
    onTimeDelivery: "సమయానికి డెలివరీ",
    qualityRating: "నాణ్యత రేటింగ్",
    
    // Vendor List Screenshots
    vendorListScreenshotTitle: "విక్రేత జాబితా - అన్ని సరఫరాదారుల అవలోకనం",
    allVendors: "అన్ని విక్రేతలు ({count})",
    searchVendors: "విక్రేత పేరు, వర్గం లేదా సంప్రదింపు ద్వారా శోధించండి...",
    allCategories: "అన్ని వర్గాలు",
    allStatuses: "అన్ని స్థితులు",
    active: "క్రియాశీల",
    inactive: "నిష్క్రియ",
    vendorName: "విక్రేత పేరు",
    category: "వర్గం",
    contact: "సంప్రదింపు",
    rating: "రేటింగ్",
    orders: "ఆర్డర్లు",
    lastOrder: "చివరి ఆర్డర్",
    actions: "చర్యలు",
    
    // Sample vendor data
    freshFarmSupplies: "ఫ్రెష్ ఫార్మ్ సప్లైలు",
    produce: "ఉత్పత్తి",
    johnSmith: "జాన్ స్మిత్",
    johnEmail: "john@freshfarm.com",
    sunriseManufacturing: "సన్‌రైజ్ మానుఫ్యాక్చరింగ్",
    packaged: "ప్యాకేజ్డ్",
    sarahJohnson: "సారా జాన్సన్",
    sarahEmail: "sarah@sunrise.com",
    may15: "మే 15, 2024",
    may20: "మే 20, 2024",
    viewDetails: "వివరాలను చూడండి",
    edit: "సవరించండి",
    
    // Add Vendor Screenshots
    addVendorScreenshotTitle: "కొత్త విక్రేత ఫారం జోడించండి",
    onboardNewVendor: "కొత్త విక్రేత ఆన్‌బోర్డ్ చేయండి",
    enterVendorDetails: "కొత్త విక్రేత ప్రొఫైల్ కోసం అన్ని వివరాలను నమోదు చేయండి.",
    basicInformation: "ప్రాథమిక సమాచారం",
    vendorPrimaryDetails: "విక్రేత ప్రధాన కంపెనీ మరియు సంప్రదింపు వివరాలను నమోదు చేయండి.",
    vendorNameField: "విక్రేత పేరు",
    contactPerson: "సంప్రదింపు వ్యక్తి",
    email: "ఇమెయిల్",
    phone: "ఫోన్",
    productCategories: "ఉత్పత్తి వర్గాలు",
    categoriesHelp: "కామాలతో వేరు చేయబడిన వర్గాలను నమోదు చేయండి.",
    
    addressSection: "చిరునామా",
    streetAddress: "వీధి చిరునామా",
    city: "నగరం",
    state: "రాష్ట్రం / ప్రాంతం",
    zipCode: "ZIP / పోస్టల్ కోడ్",
    
    financialTaxInfo: "ఆర్థిక మరియు పన్ను సమాచారం",
    paymentTerms: "చెల్లింపు నిబంధనలు",
    gstNumber: "GST సంఖ్య",
    taxId: "పన్ను ID / PAN",
    
    kycDetails: "KYC వివరాలు",
    documentType: "పత్రం రకం",
    panCard: "PAN కార్డ్",
    gstCertificate: "GST సర్టిఫికేట్",
    bankStatement: "బ్యాంక్ స్టేట్‌మెంట్",
    documentNumber: "పత్రం సంఖ్య",
    uploadDocument: "పత్రం అప్‌లోడ్ చేయండి",
    uploadDocumentHelp: "ఎంచుకున్న పత్రం యొక్క PDF లేదా చిత్రాన్ని అప్‌లోడ్ చేయండి.",
    
    cancel: "రద్దు",
    saveVendor: "విక్రేతను సేవ్ చేయండి",
    
    // Vendor Detail Screenshots
    vendorDetailScreenshotTitle: "విక్రేత ప్రొఫైల్ - వివరమైన వీక్షణ",
    vendorProfile: "విక్రేత ప్రొఫైల్",
    editVendor: "విక్రేతను సవరించండి",
    kycStatus: "KYC స్థితి",
    verified: "ధృవీకరించబడింది",
    pending: "పెండింగ్",
    contactInformation: "సంప్రదింపు సమాచారం",
    businessDetails: "వ్యాపార వివరాలు",
    paymentInfo: "చెల్లింపు సమాచారం",
    
    performanceMetrics: "పనితీరు మెట్రిక్స్",
    totalOrders: "మొత్తం ఆర్డర్లు",
    avgOrderValue: "సగటు ఆర్డర్ విలువ",
    deliveryTime: "డెలివరీ సమయం",
    days: "రోజులు",
    
    recentOrders: "ఇటీవలి ఆర్డర్లు",
    orderId: "ఆర్డర్ ID",
    orderDate: "ఆర్డర్ తేదీ",
    amount: "మొత్తం",
    status: "స్థితి",
    shipped: "రవానించబడింది",
    delivered: "అందించబడింది",
    
    // Performance Analytics Screenshots
    analyticsScreenshotTitle: "విక్రేత పనితీరు విశ్లేషణ",
    performanceAnalytics: "విక్రేత పనితీరు విశ్లేషణ",
    analyzePerfomance: "విక్రేత పనితీరు మెట్రిక్స్ మరియు డెలివరీ గణాంకాలను విశ్లేషించండి.",
    deliveryPerformance: "డెలివరీ పనితీరు",
    onTime: "సమయానికి",
    delayed: "విలంబం",
    orderTrends: "ఆర్డర్ ధోరణులు (గత 6 నెలలు)",
    orderValue: "ఆర్డర్ విలువ",
    jan: "జన",
    feb: "ఫిబ్ర",
    mar: "మార్చి",
    apr: "ఏప్రి",
    may: "మే",
    jun: "జూన్",
    
    topPerformers: "అగ్ర పనితీరు విక్రేతలు",
    vendor: "విక్రేత",
    score: "స్కోర్",
    
    // Payment Management Screenshots
    paymentScreenshotTitle: "విక్రేత చెల్లింపు నిర్వహణ",
    paymentManagement: "విక్రేత చెల్లింపు నిర్వహణ",
    trackPayments: "విక్రేతలకు చెల్లింపులను ట్రాక్ చేయండి మరియు ఆర్థిక సమన్వయాన్ని నిర్వహించండి.",
    pendingPayments: "పెండింగ్ చెల్లింపులు",
    paymentHistory: "చెల్లింపు చరిత్ర",
    dueDate: "చెల్లింపు తేదీ",
    amountDue: "చెల్లించాల్సిన మొత్తం",
    payNow: "ఇప్పుడు చెల్లించండి",
    paymentDate: "చెల్లింపు తేదీ",
    method: "పద్ధతి",
    reference: "సూచన",
    bankTransfer: "బ్యాంక్ బదిలీ",
    
    // Portal Integration Screenshots
    portalScreenshotTitle: "విక్రేత పోర్టల్ ఏకీకరణ",
    portalIntegration: "విక్రేత పోర్టల్ ఏకీకరణ",
    managePortalAccess: "విక్రేత పోర్టల్ యాక్సెస్ మరియు సహకార సాధనాలను నిర్వహించండి.",
    portalUsers: "పోర్టల్ వినియోగదారులు",
    accessLevel: "యాక్సెస్ స్థాయి",
    fullAccess: "పూర్తి యాక్సెస్",
    enablePortal: "పోర్టల్‌ను ప్రారంభించండి",
    portalFeatures: "అందుబాటులో ఉన్న పోర్టల్ లక్షణాలు",
    orderManagement: "ఆర్డర్ నిర్వహణ",
    productCatalog: "ఉత్పత్తి కేటలాగ్",
    paymentTracking: "చెల్లింపు ట్రాకింగ్",
    communication: "సంవాదం",
    
    nextStepsTitle: "విక్రేత నిర్వహణ నైపుణ్యం పూర్తయింది!",
    nextStepsDescription: "మీరు ఆన్‌బోర్డింగ్, ప్రొఫైల్ నిర్వహణ, పనితీరు ట్రాకింగ్, చెల్లింపు సమన్వయం మరియు పోర్టల్ ఏకీకరణతో సహా విక్రేత నిర్వహణను విజయవంతంగా నేర్చుకున్నారు. మీ సరఫరాదారు సంబంధాలు ఇప్పుడు సమర్థత మరియు సహకారం కోసం అత్యుత్తమంగా నిర్వహించబడుతున్నాయి.",
    nextStepsButton: "కొనుగోలు ఆర్డర్లకు కొనసాగండి",
    openDashboard: "విక్రేత డాష్‌బోర్డ్‌ను తెరవండి",
  },
  ta: {
    pageTitle: "விற்பனையாளர் மேலாண்மை கையேடு",
    backToManual: "கையேடுக்குத் திரும்பு",
    description: "ஆன்போர்டிங் முதல் செயல்திறன் கண்காணிப்பு வரை விற்பனையாளர் உறவுகளை நிர்வகிப்பதற்கான முழுமையான வழிகாட்டி, விற்பனையாளர் சுயவிவரங்கள், கொள்முதல் ஆர்டர் ஒருங்கிணைப்பு, கட்டண நிர்வாகம் மற்றும் செயல்திறன் பகுப்பாய்வு உட்பட.",
    
    step1Title: "விற்பனையாளர் டாஷ்போர்டு மேலோட்டம்",
    step1Intro: "எல்லா சப்ளையர் உறவுகளையும் நிர்வகிப்பதற்கான உங்கள் மத்திய மையம் விற்பனையாளர் டாஷ்போர்டு ஆகும். இது விரிவான விற்பனையாளர் புள்ளிவிவரங்கள், செயல்திறன் அளவீடுகள் மற்றும் அனைத்து விற்பனையாளர் மேலாண்மை செயல்பாடுகளுக்கும் விரைவான அணுகலை வழங்குகிறது.",
    step1Description: "விற்பனையாளர் மேலாண்மை கருவிகளை அணுக மற்றும் சப்ளையர் செயல்திறன் அளவீடுகளை கண்காணிக்க விற்பனையாளர் டாஷ்போர்டுக்கு செல்லவும்.",
    
    step2Title: "புதிய விற்பனையாளர்களை சேர்த்தல் (ஆன்போர்டிங் செயல்முறை)",
    step2Intro: "வலுவான சப்ளையர் உறவுகளை நிறுவுவதற்கு சரியான விற்பனையாளர் ஆன்போர்டிங் முக்கியமானது. கணினி முக்கிய விற்பனையாளர் தகவல்கள், ஆவணங்களை சேகரிப்பது மற்றும் வணிக விதிமுறைகளை நிறுவுவதன் மூலம் உங்களை வழிநடத்துகிறது.",
    step2Description: "தகவல் சேகரிப்பு, ஆவண சரிபார்ப்பு மற்றும் கணக்கு அமைப்பு உட்பட முழுமையான விற்பனையாளர் ஆன்போர்டிங் பணிப்பாய்வைக் கற்றுக்கொள்ளுங்கள்.",
    
    step3Title: "விற்பனையாளர் சுயவிவர மேலாண்மை",
    step3Intro: "ஒவ்வொரு விற்பனையாளருக்கும் தொடர்பு தகவல்கள், வணிக விவரங்கள், செயல்திறன் அளவீடுகள் மற்றும் பரிவர்த்தனை வரலாறு ஆகியவற்றைக் கொண்ட விரிவான சுயவிவரம் உள்ளது. வழக்கமான சுயவிவர பராமரிப்பு துல்லியமான சப்ளையர் தரவை உறுதி செய்கிறது.",
    step3Description: "தகவல்களை புதுப்பித்தல், ஆவணங்களை நிர்வகித்தல் மற்றும் செயல்திறன் அளவீடுகளை கண்காணித்தல் உட்பட விற்பனையாளர் சுயவிவர மேலாண்மையை மாஸ்டர் செய்யுங்கள்.",
    
    step4Title: "கொள்முதல் ஆர்டர் ஒருங்கிணைப்பு",
    step4Intro: "விற்பனையாளர் மேலாண்மையில் கொள்முதல் ஆர்டர்களை ஒருங்கிணைத்தல், விநியோகங்களை கண்காணித்தல் மற்றும் கொள்முதல் செயல்முறையில் விற்பனையாளர் தொடர்புகளை நிர்வகித்தல் ஆகியவை அடங்கும்.",
    step4Description: "விற்பனையாளர்களுடன் கொள்முதல் ஆர்டர்களை எப்படி ஒருங்கிணைப்பது மற்றும் ஆர்டர் நிறைவேற்றுதல் முன்னேற்றத்தை எப்படி கண்காணிப்பது என்பதைக் கற்றுக்கொள்ளுங்கள்.",
    
    step5Title: "கட்டண மேலாண்மை மற்றும் அறிக்கைகள்",
    step5Intro: "கணினி விற்பனையாளர்களுடனான அனைத்து நிதி பரிவர்த்தனைகளையும் கண்காணிக்கிறது, கட்டண அட்டவணைகளை உருவாக்குகிறது மற்றும் ஒத்திசைவு நோக்கங்களுக்காக விரிவான விற்பனையாளர் அறிக்கைகளை வழங்குகிறது.",
    step5Description: "விற்பனையாளர் கட்டண செயலாக்கம், அறிக்கை உருவாக்கம் மற்றும் நிதி ஒத்திசைவு பணிப்பாய்வுகளை மாஸ்டர் செய்யுங்கள்.",
    
    step6Title: "விற்பனையாளர் செயல்திறன் பகுப்பாய்வு",
    step6Intro: "செயல்திறன் கண்காணிப்பு விற்பனையாளர் நம்பகத்தன்மை, தரம் மற்றும் செலவு-பயனுள்ள தன்மையை மதிப்பிட உதவுகிறது. கணினி விற்பனையாளர் தேர்வு மற்றும் மேலாண்மை முடிவுகளை ஆதரிக்க விரிவான பகுப்பாய்வுகளை வழங்குகிறது.",
    step6Description: "விற்பனையாளர் செயல்திறன் அளவீடுகளை பகுப்பாய்வு செய்து தரவு-ஆதாரமான சப்ளையர் மேலாண்மை முடிவுகளை எடுக்கக் கற்றுக்கொள்ளுங்கள்.",
    
    step7Title: "விற்பனையாளர் போர்டல் ஒருங்கிணைப்பு",
    step7Intro: "RetailOS ஆர்டர் மேலாண்மை, தயாரிப்பு புதுப்பிப்புகள் மற்றும் நேரடி தொடர்புக்காக விற்பனையாளர்களுக்கு போர்டல் அணுகலை வழங்குகிறது. இந்த ஒருங்கிணைப்பு விற்பனையாளர் ஒத்துழைப்பை எளிதாக்குகிறது மற்றும் கைமுறை ஒருங்கிணைப்பை குறைக்கிறது.",
    step7Description: "மேம்பட்ட ஒத்துழைப்புக்காக விற்பனையாளர் போர்டல் அணுகலை எப்படி செயல்படுத்துவது மற்றும் நிர்வகிப்பது என்பதைப் புரிந்துகொள்ளுங்கள்.",
    
    // Dashboard Screenshots
    dashboardScreenshotTitle: "விற்பனையாளர் டாஷ்போர்டு - முதன்மை இடைமுகம்",
    vendorManagement: "விற்பனையாளர் மேலாண்மை",
    manageVendorRelationships: "அனைத்து விற்பனையாளர் உறவுகளையும் நிர்வகிக்கவும், செயல்திறனை கண்காணிக்கவும் மற்றும் ஆர்டர்களை ஒருங்கிணைக்கவும்.",
    addVendor: "விற்பனையாளரை சேர்க்கவும்",
    generateReport: "அறிக்கையை உருவாக்கவும்",
    totalVendors: "மொத்த விற்பனையாளர்கள்",
    activeVendors: "செயலில் உள்ள விற்பனையாளர்கள்",
    pendingOrders: "நிலுவையில் உள்ள ஆர்டர்கள்",
    totalSpent: "மொத்த செலவு",
    onTimeDelivery: "சரியான நேரத்தில் விநியோகம்",
    qualityRating: "தர மதிப்பீடு",
    
    // Vendor List Screenshots
    vendorListScreenshotTitle: "விற்பனையாளர் பட்டியல் - அனைத்து சப்ளையர்களின் கண்ணோட்டம்",
    allVendors: "அனைத்து விற்பனையாளர்களும் ({count})",
    searchVendors: "விற்பனையாளர் பெயர், வகை அல்லது தொடர்பு மூலம் தேடுங்கள்...",
    allCategories: "அனைத்து வகைகளும்",
    allStatuses: "அனைத்து நிலைகளும்",
    active: "செயலில்",
    inactive: "செயலற்ற",
    vendorName: "விற்பனையாளர் பெயர்",
    category: "வகை",
    contact: "தொடர்பு",
    rating: "மதிப்பீடு",
    orders: "ஆர்டர்கள்",
    lastOrder: "கடைசி ஆர்டர்",
    actions: "செயல்கள்",
    
    // Sample vendor data
    freshFarmSupplies: "புதிய பண்ணை சப்ளைஸ்",
    produce: "உற்பத்தி",
    johnSmith: "ஜான் ஸ்மித்",
    johnEmail: "john@freshfarm.com",
    sunriseManufacturing: "சூரிய உதய உற்பத்தி",
    packaged: "பேக்கேஜ் செய்யப்பட்டது",
    sarahJohnson: "சாரா ஜான்சன்",
    sarahEmail: "sarah@sunrise.com",
    may15: "மே 15, 2024",
    may20: "மே 20, 2024",
    viewDetails: "விவரங்களைக் காண்க",
    edit: "திருத்து",
    
    // Add Vendor Screenshots
    addVendorScreenshotTitle: "புதிய விற்பனையாளர் படிவத்தை சேர்க்கவும்",
    onboardNewVendor: "புதிய விற்பனையாளரை ஆன்போர்ட் செய்யவும்",
    enterVendorDetails: "புதிய விற்பனையாளர் சுயவிவரத்திற்கான அனைத்து விவரங்களையும் உள்ளிடவும்.",
    basicInformation: "அடிப்படை தகவல்கள்",
    vendorPrimaryDetails: "விற்பனையாளரின் முதன்மை நிறுவனம் மற்றும் தொடர்பு விவரங்களை உள்ளிடவும்.",
    vendorNameField: "விற்பனையாளர் பெயர்",
    contactPerson: "தொடர்பு நபர்",
    email: "மின்னஞ்சல்",
    phone: "தொலைபேசி",
    productCategories: "தயாரிப்பு வகைகள்",
    categoriesHelp: "கமாவுகளால் பிரிக்கப்பட்ட வகைகளை உள்ளிடவும்.",
    
    addressSection: "முகவரி",
    streetAddress: "தெரு முகவரி",
    city: "நகரம்",
    state: "மாநிலம் / மாகாணம்",
    zipCode: "ZIP / அஞ்சல் குறியீடு",
    
    financialTaxInfo: "நிதி மற்றும் வரி தகவல்கள்",
    paymentTerms: "கட்டண விதிமுறைகள்",
    gstNumber: "GST எண்",
    taxId: "வரி ID / PAN",
    
    kycDetails: "KYC விவரங்கள்",
    documentType: "ஆவண வகை",
    panCard: "PAN அட்டை",
    gstCertificate: "GST சான்றிதழ்",
    bankStatement: "வங்கி அறிக்கை",
    documentNumber: "ஆவண எண்",
    uploadDocument: "ஆவணத்தை பதிவேற்றவும்",
    uploadDocumentHelp: "தேர்ந்தெடுக்கப்பட்ட ஆவணத்தின் PDF அல்லது படத்தை பதிவேற்றவும்.",
    
    cancel: "ரத்து",
    saveVendor: "விற்பனையாளரை சேமிக்கவும்",
    
    // Vendor Detail Screenshots
    vendorDetailScreenshotTitle: "விற்பனையாளர் சுயவிவரம் - விரிவான பார்வை",
    vendorProfile: "விற்பனையாளர் சுயவிவரம்",
    editVendor: "விற்பனையாளரை திருத்து",
    kycStatus: "KYC நிலை",
    verified: "சரிபார்க்கப்பட்டது",
    pending: "நிலுவையில்",
    contactInformation: "தொடர்பு தகவல்கள்",
    businessDetails: "வணிக விவரங்கள்",
    paymentInfo: "கட்டண தகவல்கள்",
    
    performanceMetrics: "செயல்திறன் அளவீடுகள்",
    totalOrders: "மொத்த ஆர்டர்கள்",
    avgOrderValue: "சராசரி ஆர்டர் மதிப்பு",
    deliveryTime: "விநியோக நேரம்",
    days: "நாட்கள்",
    
    recentOrders: "சமீபத்திய ஆர்டர்கள்",
    orderId: "ஆர்டர் ID",
    orderDate: "ஆர்டர் தேதி",
    amount: "தொகை",
    status: "நிலை",
    shipped: "அனுப்பப்பட்டது",
    delivered: "வழங்கப்பட்டது",
    
    // Performance Analytics Screenshots
    analyticsScreenshotTitle: "விற்பனையாளர் செயல்திறன் பகுப்பாய்வு",
    performanceAnalytics: "விற்பனையாளர் செயல்திறன் பகுப்பாய்வு",
    analyzePerfomance: "விற்பனையாளர் செயல்திறன் அளவீடுகள் மற்றும் விநியோக புள்ளிவிவரங்களை பகுப்பாய்வு செய்யவும்.",
    deliveryPerformance: "விநியோக செயல்திறன்",
    onTime: "சரியான நேரத்தில்",
    delayed: "தாமதமாக",
    orderTrends: "ஆர்டர் போக்குகள் (கடந்த 6 மாதங்கள்)",
    orderValue: "ஆர்டர் மதிப்பு",
    jan: "ஜன",
    feb: "பிப்",
    mar: "மார்",
    apr: "ஏப்",
    may: "மே",
    jun: "ஜூன்",
    
    topPerformers: "சிறந்த செயல்திறன் விற்பனையாளர்கள்",
    vendor: "விற்பனையாளர்",
    score: "மதிப்பெண்",
    
    // Payment Management Screenshots
    paymentScreenshotTitle: "விற்பனையாளர் கட்டண மேலாண்மை",
    paymentManagement: "விற்பனையாளர் கட்டண மேலாண்மை",
    trackPayments: "விற்பனையாளர்களுக்கான கட்டணங்களை கண்காணிக்கவும் மற்றும் நிதி ஒத்திசைவை நிர்வகிக்கவும்.",
    pendingPayments: "நிலுவையில் உள்ள கட்டணங்கள்",
    paymentHistory: "கட்டண வரலாறு",
    dueDate: "காலக்கெடு",
    amountDue: "பாக்கி தொகை",
    payNow: "இப்போது செலுத்துங்கள்",
    paymentDate: "கட்டண தேதி",
    method: "முறை",
    reference: "குறிப்பு",
    bankTransfer: "வங்கி பரிமாற்றம்",
    
    // Portal Integration Screenshots
    portalScreenshotTitle: "விற்பனையாளர் போர்டல் ஒருங்கிணைப்பு",
    portalIntegration: "விற்பனையாளர் போர்டல் ஒருங்கிணைப்பு",
    managePortalAccess: "விற்பனையாளர் போர்டல் அணுகல் மற்றும் ஒத்துழைப்பு கருவிகளை நிர்வகிக்கவும்.",
    portalUsers: "போர்டல் பயனர்கள்",
    accessLevel: "அணுகல் நிலை",
    fullAccess: "முழு அணுகல்",
    enablePortal: "போர்டலை செயல்படுத்தவும்",
    portalFeatures: "கிடைக்கக்கூடிய போர்டல் அம்சங்கள்",
    orderManagement: "ஆர்டர் மேலாண்மை",
    productCatalog: "தயாரிப்பு பட்டியல்",
    paymentTracking: "கட்டண கண்காணிப்பு",
    communication: "தொடர்பு",
    
    nextStepsTitle: "விற்பனையாளர் மேலாண்மை திறமை முடிந்தது!",
    nextStepsDescription: "நீங்கள் ஆன்போர்டிங், சுயவிவர மேலாண்மை, செயல்திறன் கண்காணிப்பு, கட்டண ஒருங்கிணைப்பு மற்றும் போர்டல் ஒருங்கிணைப்பு உட்பட விற்பனையாளர் மேலாண்மையை வெற்றிகரமாக மாஸ்டர் செய்துள்ளீர்கள். உங்கள் சப்ளையர் உறவுகள் இப்போது திறன் மற்றும் ஒத்துழைப்புக்காக உகந்தமாக நிர்வகிக்கப்படுகின்றன.",
    nextStepsButton: "கொள்முதல் ஆர்டர்களுக்கு தொடரவும்",
    openDashboard: "விற்பனையாளர் டாஷ்போர்டைத் திறக்கவும்",
  },
  hi: {
    pageTitle: "विक्रेता प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "ऑनबोर्डिंग से लेकर प्रदर्शन ट्रैकिंग तक विक्रेता संबंधों को प्रबंधित करने के लिए पूर्ण गाइड, विक्रेता प्रोफाइल, खरीद आदेश समन्वय, भुगतान प्रबंधन और प्रदर्शन विश्लेषण सहित।",
    
    step1Title: "विक्रेता डैशबोर्ड अवलोकन",
    step1Intro: "विक्रेता डैशबोर्ड सभी आपूर्तिकर्ता संबंधों को प्रबंधित करने के लिए आपका केंद्रीय हब है। यह व्यापक विक्रेता आंकड़े, प्रदर्शन मेट्रिक्स और सभी विक्रेता प्रबंधन कार्यों तक त्वरित पहुंच प्रदान करता है।",
    step1Description: "विक्रेता प्रबंधन उपकरणों तक पहुंचने और आपूर्तिकर्ता प्रदर्शन मेट्रिक्स की निगरानी के लिए विक्रेता डैशबोर्ड पर जाएं।",
    
    step2Title: "नए विक्रेताओं को जोड़ना (ऑनबोर्डिंग प्रक्रिया)",
    step2Intro: "मजबूत आपूर्तिकर्ता संबंध स्थापित करने के लिए उचित विक्रेता ऑनबोर्डिंग महत्वपूर्ण है। सिस्टम आवश्यक विक्रेता जानकारी, दस्तावेजीकरण और व्यावसायिक शर्तें स्थापित करने के माध्यम से आपका मार्गदर्शन करता है।",
    step2Description: "जानकारी संग्रह, दस्तावेज़ सत्यापन और खाता सेटअप सहित पूर्ण विक्रेता ऑनबोर्डिंग वर्कफ़्लो सीखें।",
    
    step3Title: "विक्रेता प्रोफाइल प्रबंधन",
    step3Intro: "प्रत्येक विक्रेता के पास संपर्क जानकारी, व्यावसायिक विवरण, प्रदर्शन मेट्रिक्स और लेन-देन इतिहास वाला एक व्यापक प्रोफाइल होता है। नियमित प्रोफाइल रखरखाव सटीक आपूर्तिकर्ता डेटा सुनिश्चित करता है।",
    step3Description: "जानकारी अपडेट करना, दस्तावेज़ प्रबंधन और प्रदर्शन मेट्रिक्स ट्रैक करना सहित विक्रेता प्रोफाइल प्रबंधन में महारत हासिल करें।",
    
    step4Title: "खरीद आदेश समन्वय",
    step4Intro: "विक्रेता प्रबंधन में खरीद आदेशों का समन्वय, डिलीवरी ट्रैकिंग और खरीद प्रक्रिया के दौरान विक्रेता संचार का प्रबंधन शामिल है।",
    step4Description: "विक्रेताओं के साथ खरीद आदेशों का समन्वय कैसे करें और आदेश पूर्ति प्रगति को कैसे ट्रैक करें सीखें।",
    
    step5Title: "भुगतान प्रबंधन और विवरण",
    step5Intro: "सिस्टम विक्रेताओं के साथ सभी वित्तीय लेन-देन को ट्रैक करता है, भुगतान अनुसूची उत्पन्न करता है और समन्वय उद्देश्यों के लिए व्यापक विक्रेता विवरण प्रदान करता है।",
    step5Description: "विक्रेता भुगतान प्रसंस्करण, विवरण उत्पादन और वित्तीय समन्वय वर्कफ़्लो में महारत हासिल करें।",
    
    step6Title: "विक्रेता प्रदर्शन विश्लेषण",
    step6Intro: "प्रदर्शन ट्रैकिंग विक्रेता विश्वसनीयता, गुणवत्ता और लागत-प्रभावशीलता का मूल्यांकन करने में मदद करती है। सिस्टम विक्रेता चयन और प्रबंधन निर्णयों का समर्थन करने के लिए विस्तृत विश्लेषण प्रदान करता है।",
    step6Description: "विक्रेता प्रदर्शन मेट्रिक्स का विश्लेषण करना और डेटा-संचालित आपूर्तिकर्ता प्रबंधन निर्णय लेना सीखें।",
    
    step7Title: "विक्रेता पोर्टल एकीकरण",
    step7Intro: "RetailOS आदेश प्रबंधन, उत्पाद अपडेट और सीधे संचार के लिए विक्रेताओं को पोर्टल पहुंच प्रदान करता है। यह एकीकरण विक्रेता सहयोग को सुविधाजनक बनाता है और मैनुअल समन्वय को कम करता है।",
    step7Description: "बेहतर सहयोग के लिए विक्रेता पोर्टल पहुंच को कैसे सक्षम और प्रबंधित करें समझें।",
    
    // Dashboard Screenshots
    dashboardScreenshotTitle: "विक्रेता डैशबोर्ड - मुख्य इंटरफेस",
    vendorManagement: "विक्रेता प्रबंधन",
    manageVendorRelationships: "सभी विक्रेता संबंधों का प्रबंधन करें, प्रदर्शन ट्रैक करें और आदेशों का समन्वय करें।",
    addVendor: "विक्रेता जोड़ें",
    generateReport: "रिपोर्ट जनरेट करें",
    totalVendors: "कुल विक्रेता",
    activeVendors: "सक्रिय विक्रेता",
    pendingOrders: "लंबित आदेश",
    totalSpent: "कुल खर्च",
    onTimeDelivery: "समय पर डिलीवरी",
    qualityRating: "गुणवत्ता रेटिंग",
    
    // Vendor List Screenshots
    vendorListScreenshotTitle: "विक्रेता सूची - सभी आपूर्तिकर्ताओं का अवलोकन",
    allVendors: "सभी विक्रेता ({count})",
    searchVendors: "विक्रेता नाम, श्रेणी या संपर्क द्वारा खोजें...",
    allCategories: "सभी श्रेणियां",
    allStatuses: "सभी स्थितियां",
    active: "सक्रिय",
    inactive: "निष्क्रिय",
    vendorName: "विक्रेता नाम",
    category: "श्रेणी",
    contact: "संपर्क",
    rating: "रेटिंग",
    orders: "आदेश",
    lastOrder: "अंतिम आदेश",
    actions: "कार्रवाई",
    
    // Sample vendor data
    freshFarmSupplies: "फ्रेश फार्म सप्लाईज",
    produce: "उत्पाद",
    johnSmith: "जॉन स्मिथ",
    johnEmail: "john@freshfarm.com",
    sunriseManufacturing: "सनराइज मैन्युफैक्चरिंग",
    packaged: "पैकेज्ड",
    sarahJohnson: "सारा जॉन्सन",
    sarahEmail: "sarah@sunrise.com",
    may15: "15 मई, 2024",
    may20: "20 मई, 2024",
    viewDetails: "विवरण देखें",
    edit: "संपादित करें",
    
    // Add Vendor Screenshots
    addVendorScreenshotTitle: "नया विक्रेता फॉर्म जोड़ें",
    onboardNewVendor: "नए विक्रेता को ऑनबोर्ड करें",
    enterVendorDetails: "नए विक्रेता प्रोफाइल के लिए सभी विवरण दर्ज करें।",
    basicInformation: "बुनियादी जानकारी",
    vendorPrimaryDetails: "विक्रेता की प्राथमिक कंपनी और संपर्क विवरण दर्ज करें।",
    vendorNameField: "विक्रेता नाम",
    contactPerson: "संपर्क व्यक्ति",
    email: "ईमेल",
    phone: "फोन",
    productCategories: "उत्पाद श्रेणियां",
    categoriesHelp: "अल्पविराम से अलग की गई श्रेणियां दर्ज करें।",
    
    addressSection: "पता",
    streetAddress: "सड़क का पता",
    city: "शहर",
    state: "राज्य / प्रांत",
    zipCode: "ZIP / पोस्टल कोड",
    
    financialTaxInfo: "वित्तीय और कर जानकारी",
    paymentTerms: "भुगतान शर्तें",
    gstNumber: "GST संख्या",
    taxId: "कर ID / PAN",
    
    kycDetails: "KYC विवरण",
    documentType: "दस्तावेज़ प्रकार",
    panCard: "PAN कार्ड",
    gstCertificate: "GST प्रमाणपत्र",
    bankStatement: "बैंक स्टेटमेंट",
    documentNumber: "दस्तावेज़ संख्या",
    uploadDocument: "दस्तावेज़ अपलोड करें",
    uploadDocumentHelp: "चयनित दस्तावेज़ का PDF या छवि अपलोड करें।",
    
    cancel: "रद्द करें",
    saveVendor: "विक्रेता सहेजें",
    
    // Vendor Detail Screenshots
    vendorDetailScreenshotTitle: "विक्रेता प्रोफाइल - विस्तृत दृश्य",
    vendorProfile: "विक्रेता प्रोफाइल",
    editVendor: "विक्रेता संपादित करें",
    kycStatus: "KYC स्थिति",
    verified: "सत्यापित",
    pending: "लंबित",
    contactInformation: "संपर्क जानकारी",
    businessDetails: "व्यावसायिक विवरण",
    paymentInfo: "भुगतान जानकारी",
    
    performanceMetrics: "प्रदर्शन मेट्रिक्स",
    totalOrders: "कुल आदेश",
    avgOrderValue: "औसत आदेश मूल्य",
    deliveryTime: "डिलीवरी समय",
    days: "दिन",
    
    recentOrders: "हाल के आदेश",
    orderId: "आदेश ID",
    orderDate: "आदेश तिथि",
    amount: "राशि",
    status: "स्थिति",
    shipped: "शिप किया गया",
    delivered: "डिलीवर किया गया",
    
    // Performance Analytics Screenshots
    analyticsScreenshotTitle: "विक्रेता प्रदर्शन विश्लेषण",
    performanceAnalytics: "विक्रेता प्रदर्शन विश्लेषण",
    analyzePerfomance: "विक्रेता प्रदर्शन मेट्रिक्स और डिलीवरी आंकड़ों का विश्लेषण करें।",
    deliveryPerformance: "डिलीवरी प्रदर्शन",
    onTime: "समय पर",
    delayed: "देरी से",
    orderTrends: "आदेश प्रवृत्तियां (पिछले 6 महीने)",
    orderValue: "आदेश मूल्य",
    jan: "जन",
    feb: "फर",
    mar: "मार्च",
    apr: "अप्रैल",
    may: "मई",
    jun: "जून",
    
    topPerformers: "शीर्ष प्रदर्शन विक्रेता",
    vendor: "विक्रेता",
    score: "स्कोर",
    
    // Payment Management Screenshots
    paymentScreenshotTitle: "विक्रेता भुगतान प्रबंधन",
    paymentManagement: "विक्रेता भुगतान प्रबंधन",
    trackPayments: "विक्रेताओं को भुगतान ट्रैक करें और वित्तीय समन्वय प्रबंधित करें।",
    pendingPayments: "लंबित भुगतान",
    paymentHistory: "भुगतान इतिहास",
    dueDate: "देय तिथि",
    amountDue: "देय राशि",
    payNow: "अभी भुगतान करें",
    paymentDate: "भुगतान तिथि",
    method: "विधि",
    reference: "संदर्भ",
    bankTransfer: "बैंक ट्रांसफर",
    
    // Portal Integration Screenshots
    portalScreenshotTitle: "विक्रेता पोर्टल एकीकरण",
    portalIntegration: "विक्रेता पोर्टल एकीकरण",
    managePortalAccess: "विक्रेता पोर्टल पहुंच और सहयोग उपकरण प्रबंधित करें।",
    portalUsers: "पोर्टल उपयोगकर्ता",
    accessLevel: "पहुंच स्तर",
    fullAccess: "पूर्ण पहुंच",
    enablePortal: "पोर्टल सक्षम करें",
    portalFeatures: "उपलब्ध पोर्टल सुविधाएं",
    orderManagement: "आदेश प्रबंधन",
    productCatalog: "उत्पाद कैटलॉग",
    paymentTracking: "भुगतान ट्रैकिंग",
    communication: "संचार",
    
    nextStepsTitle: "विक्रेता प्रबंधन महारत पूरी!",
    nextStepsDescription: "आपने ऑनबोर्डिंग, प्रोफाइल प्रबंधन, प्रदर्शन ट्रैकिंग, भुगतान समन्वय और पोर्टल एकीकरण सहित विक्रेता प्रबंधन में सफलतापूर्वक महारत हासिल कर ली है। आपके आपूर्तिकर्ता संबंध अब दक्षता और सहयोग के लिए इष्टतम रूप से प्रबंधित किए जा रहे हैं।",
    nextStepsButton: "खरीद आदेशों पर जारी रखें",
    openDashboard: "विक्रेता डैशबोर्ड खोलें",
  },
  ml: {
    pageTitle: "വെണ്ടർ മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "ഓൺബോർഡിംഗ് മുതൽ പ്രകടന ട്രാക്കിംഗ് വരെ വെണ്ടർ ബന്ധങ്ങൾ കൈകാര്യം ചെയ്യുന്നതിനുള്ള പൂർണ്ണ ഗൈഡ്, വെണ്ടർ പ്രൊഫൈലുകൾ, പർച്ചേസ് ഓർഡർ കോർഡിനേഷൻ, പേയ്‌മെന്റ് മാനേജ്മെന്റ്, പ്രകടന അനാലിറ്റിക്സ് എന്നിവ ഉൾപ്പെടെ.",
    
    step1Title: "വെണ്ടർ ഡാഷ്‌ബോർഡ് അവലോകനം",
    step1Intro: "എല്ലാ സപ്ലയർ ബന്ധങ്ങളും കൈകാര്യം ചെയ്യുന്നതിനുള്ള നിങ്ങളുടെ സെൻട്രൽ ഹബ് ആണ് വെണ്ടർ ഡാഷ്‌ബോർഡ്. ഇത് സമഗ്രമായ വെണ്ടർ സ്ഥിതിവിവരക്കണക്കുകൾ, പ്രകടന മെട്രിക്സ്, എല്ലാ വെണ്ടർ മാനേജ്മെന്റ് ഫംഗ്ഷനുകളിലേക്കും ദ്രുത ആക്സസ് എന്നിവ നൽകുന്നു.",
    step1Description: "വെണ്ടർ മാനേജ്മെന്റ് ടൂളുകൾ ആക്സസ് ചെയ്യാനും സപ്ലയർ പ്രകടന മെട്രിക്സ് നിരീക്ഷിക്കാനും വെണ്ടർ ഡാഷ്‌ബോർഡിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക.",
    
    step2Title: "പുതിയ വെണ്ടർമാരെ ചേർക്കൽ (ഓൺബോർഡിംഗ് പ്രക്രിയ)",
    step2Intro: "ശക്തമായ സപ്ലയർ ബന്ധങ്ങൾ സ്ഥാപിക്കാനുള്ള ശരിയായ വെണ്ടർ ഓൺബോർഡിംഗ് നിർണായകമാണ്. സിസ്റ്റം ആവശ്യമായ വെണ്ടർ വിവരങ്ങൾ, ഡോക്യുമെന്റേഷൻ, ബിസിനസ് നിബന്ധനകൾ സ്ഥാപിക്കുന്നതിലൂടെ നിങ്ങളെ നയിക്കുന്നു.",
    step2Description: "വിവര സമാഹാരം, ഡോക്യുമെന്റ് വെരിഫിക്കേഷൻ, അക്കൗണ്ട് സെറ്റപ്പ് എന്നിവ ഉൾപ്പെടെ പൂർണ്ണമായ വെണ്ടർ ഓൺബോർഡിംഗ് വർക്ക്‌ഫ്ലോ പഠിക്കുക.",
    
    step3Title: "വെണ്ടർ പ്രൊഫൈൽ മാനേജ്മെന്റ്",
    step3Intro: "ഓരോ വെണ്ടർക്കും കോൺടാക്റ്റ് വിവരങ്ങൾ, ബിസിനസ് വിശദാംശങ്ങൾ, പ്രകടന മെട്രിക്സ്, ഇടപാട് ചരിത്രം എന്നിവ ഉൾപ്പെട്ട സമഗ്രമായ പ്രൊഫൈൽ ഉണ്ട്. ക്രമമായ പ്രൊഫൈൽ പരിപാലനം കൃത്യമായ സപ്ലയർ ഡാറ്റ ഉറപ്പാക്കുന്നു.",
    step3Description: "വിവരങ്ങൾ അപ്ഡേറ്റ് ചെയ്യൽ, ഡോക്യുമെന്റുകൾ മാനേജ് ചെയ്യൽ, പ്രകടന മെട്രിക്സ് ട്രാക്ക് ചെയ്യൽ എന്നിവ ഉൾപ്പെടെ വെണ്ടർ പ്രൊഫൈൽ മാനേജ്മെന്റിൽ മാസ്റ്റർ ചെയ്യുക.",
    
    step4Title: "പർച്ചേസ് ഓർഡർ കോർഡിനേഷൻ",
    step4Intro: "വെണ്ടർ മാനേജ്മെന്റിൽ പർച്ചേസ് ഓർഡറുകൾ കോർഡിനേറ്റ് ചെയ്യൽ, ഡെലിവറികൾ ട്രാക്ക് ചെയ്യൽ, വാങ്ങൽ പ്രക്രിയയിൽ വെണ്ടർ ആശയവിനിമയങ്ങൾ മാനേജ് ചെയ്യൽ എന്നിവ ഉൾപ്പെടുന്നു.",
    step4Description: "വെണ്ടർമാരുമായി പർച്ചേസ് ഓർഡറുകൾ എങ്ങനെ കോർഡിനേറ്റ് ചെയ്യാം, ഓർഡർ ഫുൾഫില്ല്മെന്റ് പുരോഗതി എങ്ങനെ ട്രാക്ക് ചെയ്യാം എന്നത് പഠിക്കുക.",
    
    step5Title: "പേയ്‌മെന്റ് മാനേജ്മെന്റ് & സ്റ്റേറ്റ്മെന്റുകൾ",
    step5Intro: "സിസ്റ്റം വെണ്ടർമാരുമായുള്ള എല്ലാ ധനകാര്യ ഇടപാടുകളും ട്രാക്ക് ചെയ്യുന്നു, പേയ്‌മെന്റ് ഷെഡ്യൂളുകൾ ജനറേറ്റ് ചെയ്യുന്നു, റികൺസിലിയേഷൻ ആവശ്യങ്ങൾക്കായി സമഗ്രമായ വെണ്ടർ സ്റ്റേറ്റ്മെന്റുകൾ നൽകുന്നു.",
    step5Description: "വെണ്ടർ പേയ്‌മെന്റ് പ്രോസസിംഗ്, സ്റ്റേറ്റ്മെന്റ് ജനറേഷൻ, ധനകാര്യ റികൺസിലിയേഷൻ വർക്ക്‌ഫ്ലോകളിൽ മാസ്റ്റർ ചെയ്യുക.",
    
    step6Title: "വെണ്ടർ പ്രകടന അനാലിറ്റിക്സ്",
    step6Intro: "പ്രകടന ട്രാക്കിംഗ് വെണ്ടർ വിശ്വാസ്യത, ഗുണനിലവാരം, ചെലവ്-ഫലപ്രാപ്തി എന്നിവ വിലയിരുത്താൻ സഹായിക്കുന്നു. സിസ്റ്റം വെണ്ടർ തിരഞ്ഞെടുപ്പ്, മാനേജ്മെന്റ് തീരുമാനങ്ങൾക്ക് പിന്തുണ നൽകാൻ വിശദമായ അനാലിറ്റിക്സ് നൽകുന്നു.",
    step6Description: "വെണ്ടർ പ്രകടന മെട്രിക്സ് വിശകലനം ചെയ്യാനും ഡാറ്റ-ആധാരിത സപ്ലയർ മാനേജ്മെന്റ് തീരുമാനങ്ങൾ എടുക്കാനും പഠിക്കുക.",
    
    step7Title: "വെണ്ടർ പോർട്ടൽ ഇന്റഗ്രേഷൻ",
    step7Intro: "RetailOS ഓർഡർ മാനേജ്മെന്റ്, പ്രോഡക്റ്റ് അപ്ഡേറ്റുകൾ, നേരിട്ടുള്ള ആശയവിനിമയം എന്നിവയ്ക്കായി വെണ്ടർമാർക്ക് പോർട്ടൽ ആക്സസ് നൽകുന്നു. ഈ ഇന്റഗ്രേഷൻ വെണ്ടർ സഹകരണം സുഗമമാക്കുന്നു, മാനുവൽ കോർഡിനേഷൻ കുറയ്ക്കുന്നു.",
    step7Description: "മെച്ചപ്പെട്ട സഹകരണത്തിനായി വെണ്ടർ പോർട്ടൽ ആക്സസ് എങ്ങനെ പ്രവർത്തനക്ഷമമാക്കാം, മാനേജ് ചെയ്യാം എന്നത് മനസ്സിലാക്കുക.",
    
    // Dashboard Screenshots
    dashboardScreenshotTitle: "വെണ്ടർ ഡാഷ്‌ബോർഡ് - പ്രധാന ഇന്റർഫേസ്",
    vendorManagement: "വെണ്ടർ മാനേജ്മെന്റ്",
    manageVendorRelationships: "എല്ലാ വെണ്ടർ ബന്ധങ്ങളും മാനേജ് ചെയ്യുക, പ്രകടനം ട്രാക്ക് ചെയ്യുക, ഓർഡറുകൾ കോർഡിനേറ്റ് ചെയ്യുക.",
    addVendor: "വെണ്ടർ ചേർക്കുക",
    generateReport: "റിപ്പോർട്ട് ജനറേറ്റ് ചെയ്യുക",
    totalVendors: "ആകെ വെണ്ടർമാർ",
    activeVendors: "സജീവ വെണ്ടർമാർ",
    pendingOrders: "തീരുമാനിക്കാത്ത ഓർഡറുകൾ",
    totalSpent: "ആകെ ചെലവ്",
    onTimeDelivery: "സമയത്ത് ഡെലിവറി",
    qualityRating: "ഗുണനിലവാര റേറ്റിംഗ്",
    
    // Vendor List Screenshots
    vendorListScreenshotTitle: "വെണ്ടർ ലിസ്റ്റ് - എല്ലാ സപ്ലയർമാരുടെയും അവലോകനം",
    allVendors: "എല്ലാ വെണ്ടർമാരും ({count})",
    searchVendors: "വെണ്ടർ പേര്, വിഭാഗം അല്ലെങ്കിൽ കോൺടാക്റ്റ് വഴി തിരയുക...",
    allCategories: "എല്ലാ വിഭാഗങ്ങളും",
    allStatuses: "എല്ലാ നിലകളും",
    active: "സജീവം",
    inactive: "നിഷ്ക്രിയം",
    vendorName: "വെണ്ടർ പേര്",
    category: "വിഭാഗം",
    contact: "കോൺടാക്റ്റ്",
    rating: "റേറ്റിംഗ്",
    orders: "ഓർഡറുകൾ",
    lastOrder: "അവസാന ഓർഡർ",
    actions: "പ്രവർത്തനങ്ങൾ",
    
    // Sample vendor data
    freshFarmSupplies: "ഫ്രഷ് ഫാം സപ്ലൈസ്",
    produce: "ഉത്പാദനം",
    johnSmith: "ജോൺ സ്മിത്ത്",
    johnEmail: "john@freshfarm.com",
    sunriseManufacturing: "സൺറൈസ് മാനുഫാക്ചറിംഗ്",
    packaged: "പാക്കേജ്ഡ്",
    sarahJohnson: "സാറ ജോൺസൺ",
    sarahEmail: "sarah@sunrise.com",
    may15: "മേയ് 15, 2024",
    may20: "മേയ് 20, 2024",
    viewDetails: "വിവരങ്ങൾ കാണുക",
    edit: "എഡിറ്റ് ചെയ്യുക",
    
    // Add Vendor Screenshots
    addVendorScreenshotTitle: "പുതിയ വെണ്ടർ ഫോം ചേർക്കുക",
    onboardNewVendor: "പുതിയ വെണ്ടർ ഓൺബോർഡ് ചെയ്യുക",
    enterVendorDetails: "പുതിയ വെണ്ടർ പ്രൊഫൈലിനായി എല്ലാ വിവരങ്ങളും നൽകുക.",
    basicInformation: "അടിസ്ഥാന വിവരങ്ങൾ",
    vendorPrimaryDetails: "വെണ്ടറിന്റെ പ്രാഥമിക കമ്പനിയും കോൺടാക്റ്റ് വിവരങ്ങളും നൽകുക.",
    vendorNameField: "വെണ്ടർ പേര്",
    contactPerson: "കോൺടാക്റ്റ് വ്യക്തി",
    email: "ഇമെയിൽ",
    phone: "ഫോൺ",
    productCategories: "ഉത്പാദന വിഭാഗങ്ങൾ",
    categoriesHelp: "കോമകളാൽ വേർതിരിച്ച വിഭാഗങ്ങൾ നൽകുക.",
    
    addressSection: "വിലാസം",
    streetAddress: "തെരുവ് വിലാസം",
    city: "നഗരം",
    state: "സംസ്ഥാനം / പ്രവിശ്യ",
    zipCode: "ZIP / പോസ്റ്റൽ കോഡ്",
    
    financialTaxInfo: "ധനകാര്യ, നികുതി വിവരങ്ങൾ",
    paymentTerms: "പേയ്‌മെന്റ് നിബന്ധനകൾ",
    gstNumber: "GST നമ്പർ",
    taxId: "നികുതി ID / PAN",
    
    kycDetails: "KYC വിവരങ്ങൾ",
    documentType: "ഡോക്യുമെന്റ് തരം",
    panCard: "PAN കാർഡ്",
    gstCertificate: "GST സർട്ടിഫിക്കറ്റ്",
    bankStatement: "ബാങ്ക് സ്റ്റേറ്റ്മെന്റ്",
    documentNumber: "ഡോക്യുമെന്റ് നമ്പർ",
    uploadDocument: "ഡോക്യുമെന്റ് അപ്‌ലോഡ് ചെയ്യുക",
    uploadDocumentHelp: "തിരഞ്ഞെടുത്ത ഡോക്യുമെന്റിന്റെ PDF അല്ലെങ്കിൽ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.",
    
    cancel: "റദ്ദാക്കുക",
    saveVendor: "വെണ്ടർ സേവ് ചെയ്യുക",
    
    // Vendor Detail Screenshots
    vendorDetailScreenshotTitle: "വെണ്ടർ പ്രൊഫൈൽ - വിശദമായ കാഴ്ച",
    vendorProfile: "വെണ്ടർ പ്രൊഫൈൽ",
    editVendor: "വെണ്ടർ എഡിറ്റ് ചെയ്യുക",
    kycStatus: "KYC നില",
    verified: "വെരിഫൈ ചെയ്തത്",
    pending: "തീരുമാനിക്കാത്തത്",
    contactInformation: "കോൺടാക്റ്റ് വിവരങ്ങൾ",
    businessDetails: "ബിസിനസ് വിവരങ്ങൾ",
    paymentInfo: "പേയ്‌മെന്റ് വിവരങ്ങൾ",
    
    performanceMetrics: "പ്രകടന മെട്രിക്സ്",
    totalOrders: "ആകെ ഓർഡറുകൾ",
    avgOrderValue: "ശരാശരി ഓർഡർ മൂല്യം",
    deliveryTime: "ഡെലിവറി സമയം",
    days: "ദിവസങ്ങൾ",
    
    recentOrders: "സമീപകാല ഓർഡറുകൾ",
    orderId: "ഓർഡർ ID",
    orderDate: "ഓർഡർ തീയതി",
    amount: "തുക",
    status: "നില",
    shipped: "ഷിപ്പ് ചെയ്തത്",
    delivered: "ഡെലിവർ ചെയ്തത്",
    
    // Performance Analytics Screenshots
    analyticsScreenshotTitle: "വെണ്ടർ പ്രകടന അനാലിറ്റിക്സ്",
    performanceAnalytics: "വെണ്ടർ പ്രകടന അനാലിറ്റിക്സ്",
    analyzePerfomance: "വെണ്ടർ പ്രകടന മെട്രിക്സ്, ഡെലിവറി സ്ഥിതിവിവരക്കണക്കുകൾ വിശകലനം ചെയ്യുക.",
    deliveryPerformance: "ഡെലിവറി പ്രകടനം",
    onTime: "സമയത്ത്",
    delayed: "താമസിച്ചത്",
    orderTrends: "ഓർഡർ പ്രവണതകൾ (കഴിഞ്ഞ 6 മാസം)",
    orderValue: "ഓർഡർ മൂല്യം",
    jan: "ജന",
    feb: "ഫെബ്",
    mar: "മാർ",
    apr: "ഏപ്രിൽ",
    may: "മേയ്",
    jun: "ജൂൺ",
    
    topPerformers: "മികച്ച പ്രകടനം കാട്ടുന്ന വെണ്ടർമാർ",
    vendor: "വെണ്ടർ",
    score: "സ്കോർ",
    
    // Payment Management Screenshots
    paymentScreenshotTitle: "വെണ്ടർ പേയ്‌മെന്റ് മാനേജ്മെന്റ്",
    paymentManagement: "വെണ്ടർ പേയ്‌മെന്റ് മാനേജ്മെന്റ്",
    trackPayments: "വെണ്ടർമാർക്കുള്ള പേയ്‌മെന്റുകൾ ട്രാക്ക് ചെയ്യുക, ധനകാര്യ റികൺസിലിയേഷൻ മാനേജ് ചെയ്യുക.",
    pendingPayments: "തീരുമാനിക്കാത്ത പേയ്‌മെന്റുകൾ",
    paymentHistory: "പേയ്‌മെന്റ് ചരിത്രം",
    dueDate: "അവസാന തീയതി",
    amountDue: "പേയ്‌മെന്റ് ചെയ്യേണ്ട തുക",
    payNow: "ഇപ്പോൾ പേയ്‌മെന്റ് ചെയ്യുക",
    paymentDate: "പേയ്‌മെന്റ് തീയതി",
    method: "രീതി",
    reference: "റഫറൻസ്",
    bankTransfer: "ബാങ്ക് ട്രാൻസ്ഫർ",
    
    // Portal Integration Screenshots
    portalScreenshotTitle: "വെണ്ടർ പോർട്ടൽ ഇന്റഗ്രേഷൻ",
    portalIntegration: "വെണ്ടർ പോർട്ടൽ ഇന്റഗ്രേഷൻ",
    managePortalAccess: "വെണ്ടർ പോർട്ടൽ ആക്സസ്, സഹകരണ ടൂളുകൾ മാനേജ് ചെയ്യുക.",
    portalUsers: "പോർട്ടൽ ഉപയോക്താക്കൾ",
    accessLevel: "ആക്സസ് ലെവൽ",
    fullAccess: "പൂർണ്ണ ആക്സസ്",
    enablePortal: "പോർട്ടൽ പ്രവർത്തനക്ഷമമാക്കുക",
    portalFeatures: "ലഭ്യമായ പോർട്ടൽ സവിശേഷതകൾ",
    orderManagement: "ഓർഡർ മാനേജ്മെന്റ്",
    productCatalog: "ഉത്പാദന കാറ്റലോഗ്",
    paymentTracking: "പേയ്‌മെന്റ് ട്രാക്കിംഗ്",
    communication: "ആശയവിനിമയം",
    
    nextStepsTitle: "വെണ്ടർ മാനേജ്മെന്റ് പാണ്ഡിത്യം പൂർത്തിയായി!",
    nextStepsDescription: "ഓൺബോർഡിംഗ്, പ്രൊഫൈൽ മാനേജ്മെന്റ്, പ്രകടന ട്രാക്കിംഗ്, പേയ്‌മെന്റ് കോർഡിനേഷൻ, പോർട്ടൽ ഇന്റഗ്രേഷൻ എന്നിവ ഉൾപ്പെടെ വെണ്ടർ മാനേജ്മെന്റിൽ നിങ്ങൾ വിജയകരമായി പാണ്ഡിത്യം നേടിയിരിക്കുന്നു. നിങ്ങളുടെ സപ്ലയർ ബന്ധങ്ങൾ ഇപ്പോൾ കാര്യക്ഷമതയ്ക്കും സഹകരണത്തിനും ഒപ്റ്റിമൈസ് ചെയ്ത് മാനേജ് ചെയ്യപ്പെടുന്നു.",
    nextStepsButton: "പർച്ചേസ് ഓർഡറുകളിലേക്ക് തുടരുക",
    openDashboard: "വെണ്ടർ ഡാഷ്‌ബോർഡ് തുറക്കുക",
  }
};

export default function ManualVendorManagement() {
  const [language, setLanguage] = useManualLanguage();
  
  const t = (key, params = {}) => {
    let text = translations[language]?.[key] || translations['en']?.[key] || key;
    if (text) {
      for (const [param, value] of Object.entries(params)) {
        text = text.replace(`{${param}}`, value);
      }
    }
    return text;
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
          <LanguageSelector language={language} setLanguage={setLanguage} readOnly={true} />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <div className="space-y-8">
              <Step number="1" title={t('step1Title')}>
                <p>
                  {t('step1Intro')}
                </p>
                <p>
                  {t('step1Description')}
                </p>

                <Screenshot title={t('dashboardScreenshotTitle')}>
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-cyan-100 rounded-xl">
                          <Building2 className="w-8 h-8 text-cyan-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900">{t('vendorManagement')}</h2>
                          <p className="text-slate-600">{t('manageVendorRelationships')}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-cyan-600 hover:bg-cyan-700 flex items-center gap-2">
                          <UserPlus className="w-4 h-4" />
                          {t('addVendor')}
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          {t('generateReport')}
                        </Button>
                      </div>
                    </div>

                    {/* Summary Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Building2 className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-slate-600">{t('totalVendors')}</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">156</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-slate-600">{t('activeVendors')}</span>
                        </div>
                        <p className="2xl font-bold text-green-600">142</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm font-medium text-slate-600">{t('pendingOrders')}</span>
                        </div>
                        <p className="text-2xl font-bold text-yellow-600">28</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-slate-600">{t('totalSpent')}</span>
                        </div>
                        <p className="text-2xl font-bold text-purple-600">₹45.2L</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-slate-600">{t('onTimeDelivery')}</span>
                        </div>
                        <p className="text-2xl font-bold text-emerald-600">92%</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-white shadow-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-medium text-slate-600">{t('qualityRating')}</span>
                        </div>
                        <p className="text-2xl font-bold text-amber-600">4.7</p>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>
                  {t('step2Intro')}
                </p>
                <p>
                  {t('step2Description')}
                </p>

                <Screenshot title={t('addVendorScreenshotTitle')}>
                  <div className="max-w-4xl bg-white border rounded-lg shadow-sm">
                    <div className="p-6 border-b">
                      <h3 className="text-xl font-bold text-slate-900">{t('onboardNewVendor')}</h3>
                      <p className="text-slate-600">{t('enterVendorDetails')}</p>
                    </div>
                    <div className="p-6 space-y-6">
                      {/* Basic Information */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">{t('basicInformation')}</h4>
                        <p className="text-sm text-slate-600 mb-4">{t('vendorPrimaryDetails')}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('vendorNameField')}</label>
                            <Input placeholder="Enter vendor name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('contactPerson')}</label>
                            <Input placeholder="Primary contact person" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('email')}</label>
                            <Input type="email" placeholder="vendor@company.com" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('phone')}</label>
                            <Input placeholder="+91 9876543210" />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('productCategories')}</label>
                            <Input placeholder="dairy, produce, beverages" />
                            <p className="text-xs text-slate-500 mt-1">{t('categoriesHelp')}</p>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">{t('addressSection')}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('streetAddress')}</label>
                            <Input placeholder="123 Business Street" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('city')}</label>
                            <Input placeholder="Bangalore" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('state')}</label>
                            <Input placeholder="Karnataka" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('zipCode')}</label>
                            <Input placeholder="560001" />
                          </div>
                        </div>
                      </div>

                      {/* Financial & Tax */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">{t('financialTaxInfo')}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('paymentTerms')}</label>
                            <Input placeholder="Net 30" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('gstNumber')}</label>
                            <Input placeholder="29ABCDE1234F1Z5" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('taxId')}</label>
                            <Input placeholder="ABCDE1234F" />
                          </div>
                        </div>
                      </div>

                      {/* KYC Details */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">{t('kycDetails')}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('documentType')}</label>
                            <select className="w-full px-3 py-2 border border-slate-200 rounded-lg">
                              <option>{t('panCard')}</option>
                              <option>{t('gstCertificate')}</option>
                              <option>{t('bankStatement')}</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('documentNumber')}</label>
                            <Input placeholder="Document number" />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('uploadDocument')}</label>
                            <div className="flex items-center gap-2">
                              <Input type="file" className="flex-grow" />
                              <Button variant="outline" size="icon">
                                <Upload className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{t('uploadDocumentHelp')}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-cyan-600 hover:bg-cyan-700">{t('saveVendor')}</Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>
                  {t('step3Intro')}
                </p>
                <p>
                  {t('step3Description')}
                </p>

                <Screenshot title={t('vendorListScreenshotTitle')}>
                  <div className="border rounded-lg shadow-sm bg-white">
                    <div className="p-4 border-b border-slate-100">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-cyan-600" />
                            {t('allVendors', {count: 156})}
                          </h3>
                          <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                            <Button variant="default" size="sm" className="h-8 px-3">
                              <List className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-3">
                              <Grid className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input placeholder={t('searchVendors')} className="pl-9" />
                          </div>
                          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                            <option>{t('allCategories')}</option>
                            <option>{t('produce')}</option>
                            <option>{t('packaged')}</option>
                          </select>
                          <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                            <option>{t('allStatuses')}</option>
                            <option>{t('active')}</option>
                            <option>{t('inactive')}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="p-0 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b">
                            <th className="text-left p-4 font-medium">{t('vendorName')}</th>
                            <th className="text-left p-4 font-medium">{t('category')}</th>
                            <th className="text-left p-4 font-medium">{t('contact')}</th>
                            <th className="text-left p-4 font-medium">{t('rating')}</th>
                            <th className="text-left p-4 font-medium">{t('orders')}</th>
                            <th className="text-left p-4 font-medium">{t('lastOrder')}</th>
                            <th className="text-left p-4 font-medium">{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-slate-50">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <Building2 className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-medium">{t('freshFarmSupplies')}</p>
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">{t('active')}</Badge>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge variant="outline">{t('produce')}</Badge>
                            </td>
                            <td className="p-4">
                              <div>
                                <p className="font-medium">{t('johnSmith')}</p>
                                <p className="text-xs text-slate-500">{t('johnEmail')}</p>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-medium">4.8</span>
                              </div>
                            </td>
                            <td className="p-4"><span className="font-medium">124</span></td>
                            <td className="p-4">{t('may20')}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-slate-50">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Building2 className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                  <p className="font-medium">{t('sunriseManufacturing')}</p>
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">{t('active')}</Badge>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge variant="outline">{t('packaged')}</Badge>
                            </td>
                            <td className="p-4">
                              <div>
                                <p className="font-medium">{t('sarahJohnson')}</p>
                                <p className="text-xs text-slate-500">{t('sarahEmail')}</p>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-medium">4.6</span>
                              </div>
                            </td>
                            <td className="p-4"><span className="font-medium">87</span></td>
                            <td className="p-4">{t('may15')}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>
                  {t('step4Intro')}
                </p>
                <p>
                  {t('step4Description')}
                </p>

                <Screenshot title={t('vendorDetailScreenshotTitle')}>
                  <div className="max-w-6xl bg-white border rounded-lg shadow-sm">
                    <div className="p-6 border-b">
                      <div className="flex justify-between items-start flex-col sm:flex-row gap-4 sm:gap-0">
                        <div className="flex items-center gap-4 flex-col sm:flex-row ">
                          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-green-600" />
                          </div>
                          <div>
                            <h3 className="2xl font-bold text-slate-900">{t('freshFarmSupplies')}</h3>
                            <div className="flex items-center gap-3 mt-2">
                              <Badge variant="secondary" className="bg-green-100 text-green-800">{t('active')}</Badge>
                              <Badge variant="outline">{t('produce')}</Badge>
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800">{t('verified')}</Badge>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-cyan-600 hover:bg-cyan-700">
                          <Edit className="w-4 h-4 mr-2" />
                          {t('editVendor')}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Contact & Business Details */}
                        <div className="lg:col-span-2 space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-3">{t('contactInformation')}</h4>
                            <div className="space-y-3 text-sm">
                              <div className="flex items-center gap-3">
                                <User className="w-4 h-4 text-slate-400" />
                                <span>{t('johnSmith')} (Contact Person)</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-slate-400" />
                                <span>{t('johnEmail')}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-slate-400" />
                                <span>+91 9876543210</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-slate-400" />
                                <span>123 Farm Road, Bangalore, Karnataka 560001</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-3">{t('businessDetails')}</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-slate-500">{t('gstNumber')}</span>
                                <p className="font-medium">29ABCDE1234F1Z5</p>
                              </div>
                              <div>
                                <span className="text-slate-500">{t('taxId')}</span>
                                <p className="font-medium">ABCDE1234F</p>
                              </div>
                              <div>
                                <span className="text-slate-500">{t('paymentTerms')}</span>
                                <p className="font-medium">Net 30</p>
                              </div>
                              <div>
                                <span className="text-slate-500">{t('kycStatus')}</span>
                                <Badge variant="secondary" className="bg-green-100 text-green-800">{t('verified')}</Badge>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-3">{t('recentOrders')}</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                <div>
                                  <p className="font-medium">PO-2024-0521-001</p>
                                  <p className="text-sm text-slate-500">{t('may20')}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">₹12,500</p>
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">{t('delivered')}</Badge>
                                </div>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                <div>
                                  <p className="font-medium">PO-2024-0515-003</p>
                                  <p className="text-sm text-slate-500">{t('may15')}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">₹8,750</p>
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">{t('shipped')}</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right Column - Performance Metrics */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-3">{t('performanceMetrics')}</h4>
                            <div className="space-y-4">
                              <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <p className="text-2xl font-bold text-blue-600">124</p>
                                <p className="text-sm text-slate-600">{t('totalOrders')}</p>
                              </div>
                              <div className="text-center p-4 bg-green-50 rounded-lg">
                                <p className="text-2xl font-bold text-green-600">₹8,420</p>
                                <p className="text-sm text-slate-600">{t('avgOrderValue')}</p>
                              </div>
                              <div className="text-center p-4 bg-amber-50 rounded-lg">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                                  <p className="text-2xl font-bold text-amber-600">4.8</p>
                                </div>
                                <p className="text-sm text-slate-600">{t('qualityRating')}</p>
                              </div>
                              <div className="text-center p-4 bg-purple-50 rounded-lg">
                                <p className="text-2xl font-bold text-purple-600">2.5 {t('days')}</p>
                                <p className="text-sm text-slate-600">{t('deliveryTime')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="5" title={t('step5Title')}>
                <p>
                  {t('step5Intro')}
                </p>
                <p>
                  {t('step5Description')}
                </p>

                <Screenshot title={t('paymentScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-600" />
                        {t('paymentManagement')}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{t('trackPayments')}</p>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3">{t('pendingPayments')}</h4>
                          <div className="space-y-3">
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">{t('freshFarmSupplies')}</p>
                                  <p className="text-sm text-slate-500">{t('dueDate')}: {t('may20')}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold text-red-600">₹12,500</p>
                                  <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                                    {t('payNow')}
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">{t('sunriseManufacturing')}</p>
                                  <p className="text-sm text-slate-500">{t('dueDate')}: {t('may15')}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold text-red-600">₹8,750</p>
                                  <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                                    {t('payNow')}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3">{t('paymentHistory')}</h4>
                          <div className="space-y-3">
                            <div className="border rounded-lg p-4 bg-green-50">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">{t('freshFarmSupplies')}</p>
                                  <p className="text-sm text-slate-500">{t('paymentDate')}: May 18, 2024</p>
                                  <p className="text-xs text-slate-500">{t('method')}: {t('bankTransfer')}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold text-green-600">₹15,200</p>
                                  <p className="text-xs text-slate-500">{t('reference')}: TXN-001</p>
                                </div>
                              </div>
                            </div>
                            <div className="border rounded-lg p-4 bg-green-50">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">{t('sunriseManufacturing')}</p>
                                  <p className="text-sm text-slate-500">{t('paymentDate')}: May 12, 2024</p>
                                  <p className="text-xs text-slate-500">{t('method')}: {t('bankTransfer')}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold text-green-600">₹9,800</p>
                                  <p className="text-xs text-slate-500">{t('reference')}: TXN-002</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="6" title={t('step6Title')}>
                <p>
                  {t('step6Intro')}
                </p>
                <p>
                  {t('step6Description')}
                </p>

                <Screenshot title={t('analyticsScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        {t('performanceAnalytics')}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{t('analyzePerfomance')}</p>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-4">{t('deliveryPerformance')}</h4>
                          <div className="flex items-center justify-center">
                            <div className="relative w-32 h-32">
                              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                                <circle cx="60" cy="60" r="50" fill="none" stroke="#10b981" strokeWidth="8" 
                                        strokeDasharray="314" strokeDashoffset="25" strokeLinecap="round" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <p className="text-2xl font-bold text-green-600">92%</p>
                                  <p className="text-xs text-slate-500">{t('onTime')}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center mt-4 space-x-6">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-sm">{t('onTime')}: 92%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-red-500 text-white rounded-full"></div>
                              <span className="text-sm">{t('delayed')}: 8%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-4">{t('orderTrends')}</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-600">{t('jan')}</span>
                              <div className="flex-1 mx-3">
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                                </div>
                              </div>
                              <span className="text-sm font-medium">₹60K</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-600">{t('feb')}</span>
                              <div className="flex-1 mx-3">
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                </div>
                              </div>
                              <span className="text-sm font-medium">₹75K</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-600">{t('mar')}</span>
                              <div className="flex-1 mx-3">
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                                </div>
                              </div>
                              <span className="text-sm font-medium">₹85K</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-600">{t('apr')}</span>
                              <div className="flex-1 mx-3">
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                                </div>
                              </div>
                              <span className="text-sm font-medium">₹90K</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-600">{t('may')}</span>
                              <div className="flex-1 mx-3">
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                                </div>
                              </div>
                              <span className="text-sm font-medium">₹100K</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-slate-600">{t('jun')}</span>
                              <div className="flex-1 mx-3">
                                <div className="w-full bg-slate-200 rounded-full h-2">
                                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                                </div>
                              </div>
                              <span className="text-sm font-medium">₹95K</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-semibold text-slate-800 mb-4">{t('topPerformers')}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="border rounded-lg p-4 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Building2 className="w-6 h-6 text-green-600" />
                            </div>
                            <p className="font-medium">{t('freshFarmSupplies')}</p>
                            <div className="flex items-center justify-center gap-1 mt-2">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-bold text-green-600">4.8</span>
                            </div>
                          </div>
                          <div className="border rounded-lg p-4 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Building2 className="w-6 h-6 text-blue-600" />
                            </div>
                            <p className="font-medium">{t('sunriseManufacturing')}</p>
                            <div className="flex items-center justify-center gap-1 mt-2">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-bold text-blue-600">4.6</span>
                            </div>
                          </div>
                          <div className="border rounded-lg p-4 text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Building2 className="w-6 h-6 text-purple-600" />
                            </div>
                            <p className="font-medium">Quality Foods Ltd</p>
                            <div className="flex items-center justify-center gap-1 mt-2">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-bold text-purple-600">4.5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="7" title={t('step7Title')}>
                <p>
                  {t('step7Intro')}
                </p>
                <p>
                  {t('step7Description')}
                </p>

                <Screenshot title={t('portalScreenshotTitle')}>
                  <div className="bg-white border rounded-lg shadow-sm">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                        <Users className="w-5 h-5 text-indigo-600" />
                        {t('portalIntegration')}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{t('managePortalAccess')}</p>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-4">{t('portalUsers')}</h4>
                          <div className="space-y-3">
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3 flex-col sm:flex-row gap-4 sm:gap-0">
                                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-green-600" />
                                  </div>
                                  <div>
                                    <p className="font-medium">{t('freshFarmSupplies')}</p>
                                    <p className="text-sm text-slate-500">{t('johnEmail')}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">{t('fullAccess')}</Badge>
                                  <p className="text-xs text-slate-500 mt-1">Active since May 2024</p>
                                </div>
                              </div>
                            </div>
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-4 sm:gap-0">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-blue-600" />
                                  </div>
                                  <div>
                                    <p className="font-medium">{t('sunriseManufacturing')}</p>
                                    <p className="text-sm text-slate-500">{t('sarahEmail')}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                                    {t('enablePortal')}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-4">{t('portalFeatures')}</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span className="font-medium">{t('orderManagement')}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span className="font-medium">{t('productCatalog')}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span className="font-medium">{t('paymentTracking')}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span className="font-medium">{t('communication')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>
            </div>

            {/* Next Steps */}
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  {t('nextStepsDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={createPageUrl('ManualPurchaseOrders')}>
                    <Button className="bg-cyan-600 hover:bg-cyan-700">
                      {t('nextStepsButton')}
                    </Button>
                  </Link>
                  <Link to={createPageUrl('VendorDashboard')}>
                    <Button variant="outline">
                      {t('openDashboard')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
