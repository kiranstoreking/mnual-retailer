
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
  },
  ta: {
    pageTitle: "விற்பனையாளர் மேலாண்மை கையேடு",
    backToManual: "கையேடுக்குத் திரும்பு",
    description: "ஆன்போர்டிங் முதல் செயல்திறன் கண்காணிப்பு வரை விற்பனையாளர் உறவுகளை நிர்வகிப்பதற்கான முழுமையான வழிகாட்டி, விற்பனையாளர் சுயவிவரங்கள், கொள்முதல் ஆர்டர் ஒருங்கிணைப்பு, கட்டண நிர்வாகம் மற்றும் செயல்திறன் பகுப்பாய்வு உட்பட.",
    step1Title: "விற்பனையாளர் டாஷ்போர்டு மேலோட்டம்",
    step1Intro: "எல்லா சப்ளையர் உறவுகளையும் நிர்வகிப்பதற்கான உங்கள் மத்திய மையம் விற்பனையாளர் டாஷ்போர்டு ஆகும். இது விரிவான விற்பனையாளர் புள்ளிவிவரங்கள், செயல்திறன் அளவீடுகள் மற்றும் அனைத்து விற்பனையாளர் மேலாண்மை செயல்பாடுகளுக்கும் விரைவான அணுகலை வழங்குகிறது.",
  },
  hi: {
    pageTitle: "विक्रेता प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "ऑनबोर्डिंग से लेकर प्रदर्शन ट्रैकिंग तक विक्रेता संबंधों को प्रबंधित करने के लिए पूर्ण गाइड, विक्रेता प्रोफाइल, खरीद आदेश समन्वय, भुगतान प्रबंधन और प्रदर्शन विश्लेषण सहित।",
    step1Title: "विक्रेता डैशबोर्ड अवलोकन",
    step1Intro: "विक्रेता डैशबोर्ड सभी आपूर्तिकर्ता संबंधों को प्रबंधित करने के लिए आपका केंद्रीय हब है। यह व्यापक विक्रेता आंकड़े, प्रदर्शन मेट्रिक्स और सभी विक्रेता प्रबंधन कार्यों तक त्वरित पहुंच प्रदान करता है।",
  },
  ml: {
    pageTitle: "വെണ്ടർ മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "ഓൺബോർഡിംഗ് മുതൽ പ്രകടന ട്രാക്കിംഗ് വരെ വെണ്ടർ ബന്ധങ്ങൾ കൈകാര്യം ചെയ്യുന്നതിനുള്ള പൂർണ്ണ ഗൈഡ്, വെണ്ടർ പ്രൊഫൈലുകൾ, പർച്ചേസ് ഓർഡർ കോർഡിനേഷൻ, പേയ്‌മെന്റ് മാനേജ്മെന്റ്, പ്രകടന അനാലിറ്റിക്സ് എന്നിവ ഉൾപ്പെടെ.",
    step1Title: "വെണ്ടർ ഡാഷ്‌ബോർഡ് അവലോകനം",
    step1Intro: "എല്ലാ സപ്ലയർ ബന്ധങ്ങളും കൈകാര്യം ചെയ്യുന്നതിനുള്ള നിങ്ങളുടെ സെൻട്രൽ ഹബ് ആണ് വെണ്ടർ ഡാഷ്‌ബോർഡ്. ഇത് സമഗ്രമായ വെണ്ടർ സ്ഥിതിവിവരക്കണക്കുകൾ, പ്രകടന മെട്രിക്സ്, എല്ലാ വെണ്ടർ മാനേജ്മെന്റ് ഫംഗ്ഷനുകളിലേക്കും ദ്രുത ആക്സസ് എന്നിവ നൽകുന്നു.",
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
                        <div className="flex items-center gap-4 flex-col sm:flex-row gap-4 sm:gap-0">
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
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
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
