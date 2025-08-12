
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, ArrowRight, Navigation, UserPlus, Bike, MapPin, Truck, Building2,
  Phone, Calendar, CreditCard, CheckCircle, Clock, AlertTriangle,
  User, Package, Camera, Upload, FileText, Star, DollarSign, Plus, Users
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
    pageTitle: "Last Mile Logistics Manual",
    backToManual: "Back to Manual",
    description: "Complete guide to managing delivery personnel, courier agencies, route optimization, and end-to-end logistics operations for successful last-mile delivery.",
    step1Title: "Last Mile Delivery Dashboard",
    step1Intro: "The Last Mile Delivery Dashboard provides comprehensive control over all delivery operations, including personnel management, vehicle tracking, route optimization, and delivery performance analytics.",
    step2Title: "Adding and Managing Delivery Personnel",
    step2Intro: "Efficient delivery operations start with properly onboarded and managed personnel. The system provides comprehensive tools for adding new delivery staff, managing their documents, assigning vehicles, and tracking performance.",
    step3Title: "Order Assignment and Delivery Tracking",
    step3Intro: "Once orders are ready for dispatch, they need to be efficiently assigned to available delivery personnel. The system provides intelligent assignment algorithms, real-time tracking, and comprehensive delivery management.",
    step4Title: "Courier Agency Management",
    step4Intro: "For expanded delivery capacity and coverage, RetailOS integrates with third-party courier agencies. This system manages agency partnerships, service level agreements, performance tracking, and cost optimization.",
    nextStepsTitle: "Last-Mile Logistics Mastery Complete!",
    nextStepsDescription: "You have successfully mastered the complete last-mile delivery system including personnel management, vehicle coordination, real-time tracking, COD collections, and courier agency partnerships. Your delivery operations are now fully optimized for efficiency and customer satisfaction.",
    nextStepsButton: "Continue to Expense Management",
    openDashboard: "Open Delivery Dashboard",

    // Screenshot content
    dashboardScreenshotTitle: "Last Mile Delivery Dashboard - Main Interface",
    lastMileManagement: "Last Mile Delivery Management",
    opsControlCenter: "Comprehensive delivery operations control center",
    addPersonnel: "Add Personnel",
    routePlanner: "Route Planner",
    activePersonnel: "Active Personnel",
    availableVehicles: "Available Vehicles",
    outForDelivery: "Out for Delivery",
    deliveredToday: "Delivered Today",
    pendingPickups: "Pending Pickups",
    dailyPerformance: "Daily Performance Summary",
    todaysMetrics: "Today's delivery metrics and efficiency indicators",
    onTimeDelivery: "On-Time Delivery",
    avgDeliveryTime: "Avg. Delivery Time",
    customerRating: "Customer Rating",
    dashboardProvides: "Dashboard provides real-time visibility into all delivery operations with key performance indicators.",

    addPersonnelSubStep: "A. Add New Delivery Personnel Form",
    addPersonnelScreenshotTitle: "Add New Delivery Personnel",
    onboardNewPersonnel: "Onboard New Delivery Personnel",
    addStaffWithVerification: "Add new delivery staff with complete profile and document verification",
    personalInfo: "Personal Information",
    fullName: "Full Name *",
    enterFullName: "Enter full name",
    phoneNumber: "Phone Number *",
    emailAddress: "Email Address",
    drivingLicense: "Driving License Number *",
    addressInfo: "Address Information",
    streetAddress: "Street Address",
    city: "City",
    pinCode: "PIN Code",
    emergencyContact: "Emergency Contact",
    contactName: "Contact Name",
    relationship: "Relationship",
    selectRelationship: "Select relationship",
    father: "Father",
    mother: "Mother",
    spouse: "Spouse",
    sibling: "Sibling",
    other: "Other",
    vehicleAssignment: "Vehicle Assignment",
    assignVehicle: "Assign Vehicle",
    selectVehicle: "Select available vehicle",
    hasOwnVehicle: "Has own vehicle",
    ownVehicleNumber: "Own vehicle number",
    documentUpload: "Document Upload",
    profilePhoto: "Profile Photo",
    uploadPhoto: "Upload photo",
    idProof: "ID Proof (Aadhar)",
    uploadIdProof: "Upload ID proof",
    addressProof: "Address Proof",
    uploadAddressProof: "Upload address proof",
    cancel: "Cancel",
    addPersonnelBtn: "Add Personnel",
    personnelProfileSubStep: "B. Personnel Profile and Performance",
    profileScreenshotTitle: "Detailed Personnel Profile",
    personnelProfileName: "Personnel Profile: Arjun Singh",
    basicInfo: "Basic Information",
    joined: "Joined:",
    statusLabel: "Status:",
    activeStatus: "Active",
    performanceMetrics: "Performance Metrics",
    totalDeliveries: "Total Deliveries:",
    successRate: "Success Rate:",
    avgRating: "Avg Rating:",
    codCollected: "COD Collected:",
    onTimePercent: "On-Time %:",
    recentDeliveryHistory: "Recent Delivery History",
    date: "Date",
    orderId: "Order ID",
    codAmount: "COD Amount",
    rating: "Rating",
    delivered: "Delivered",
    paymentAndEarnings: "Payment & Earnings",
    currentBalance: "Current Balance",
    thisMonthEarnings: "This Month",
    deliveriesCount: "Deliveries",
    avgPerDay: "Avg/Day",
    processPayment: "Process Payment",
    viewStatement: "View Statement",
    portalAccessSubStep: "C. Personnel Portal Access",
    portalSetupScreenshotTitle: "Delivery Personnel Portal Setup",
    portalAccessManagement: "Portal Access Management",
    deliveryPersonnelPortal: "Delivery Personnel Portal",
    portalDesc: "Provide delivery staff with access to their dedicated portal for order management, earnings tracking, and communication.",
    portalStatusFor: "Portal Status for Arjun Singh:",
    lastLogin: "Last Login:",
    portalFeatures: "Portal Features:",
    portalFeaturesAvailable: "Portal Features Available",

    viewAssignedOrders: "View assigned delivery orders",
    updateStatusRealtime: "Update delivery status in real-time",
    trackEarnings: "Track daily and monthly earnings",
    viewPerformance: "View performance metrics and ratings",
    reportIssues: "Report delivery issues or problems",
    accountManagement: "Account Management",
    loginEmail: "Login Email",
    portalRole: "Portal Role",
    deliveryPersonnelRole: "Delivery Personnel",
    seniorDeliveryPersonnelRole: "Senior Delivery Personnel",
    mobileAppAccess: "Mobile app access enabled",
    resetPassword: "Reset Password",
    suspendAccess: "Suspend Access",
    sendPortalInvite: "Send Portal Invite",

    orderAssignmentSubStep: "A. Order Assignment Interface",
    assignmentScreenshotTitle: "Assign Orders to Delivery Personnel",
    assignDeliveryOrders: "Assign Delivery Orders",

    readyForAssignment: "Ready for Assignment ({count} orders)",
    highPriority: "High Priority",
    standard: "Standard",
    b2b: "B2B",
    availablePersonnel: "Available Personnel",
    currentLoad: "Current load: {count} orders",
    assignBtn: "Assign",
    assignLaterBtn: "Assign Later",
    assignmentSettings: "Assignment Settings",
    enableAutoAssign: "Enable auto-assignment",
    prioritizeProximity: "Prioritize proximity",
    balanceWorkload: "Balance workload",
    considerRatings: "Consider customer ratings",
    maxOrdersPerPerson: "Max orders per person",
    bulkAssign: "Bulk Assign",
    smartAutoAssign: "Smart Auto-Assign",
    ordersSelected: "{count} orders selected for assignment",

    trackingSubStep: "B. Real-Time Delivery Tracking",
    trackingScreenshotTitle: "In-Transit Orders Tracking",
    ordersInTransit: "Orders In Transit",
    deliveryBy: "Delivery by:",
    customerLabel: "Customer:",
    started: "Started:",
    distance: "Distance:",
    eta: "ETA:",
    inTransitStatus: "In Transit",
    paymentOnline: "Payment: Online",
    currentLocation: "Current Location:",
    trackLive: "Track Live",
    lastUpdate: "Last update: {time} ago",
    deliveryProgress: "Delivery Progress:",
    pickedUp: "Picked Up",
    deliveredStatus: "Delivered",
    deliveryFailed: "Delivery Failed",
    customerNotAvailable: "Customer not available",
    retryScheduled: "Retry Scheduled",
    contactCustomer: "Contact Customer",
    issueReported: "Issue reported:",

    codCollectionSubStep: "C. COD Collection Management",
    codScreenshotTitle: "Cash on Delivery Collection Tracking",
    codReconciliation: "COD Collection & Reconciliation",
    todaysCollections: "Today's Collections",
    fromCodDeliveries: "From {count} COD deliveries",
    pendingHandover: "Pending Handover",
    withDeliveryPersonnel: "With delivery personnel",
    reconciled: "Reconciled",
    depositedToStore: "Deposited to store",
    codCollectionsByPersonnel: "COD Collections by Personnel",
    pendingHandoverLabel: "{amount} pending handover",
    fullyReconciled: "✓ Fully reconciled",
    collectBtn: "Collect",
    completeStatus: "Complete",
    codReconciliationProcess: "COD Reconciliation Process",
    collectionStep: "1. Collection",
    collectionDesc: "Personnel collects COD from customers during delivery",
    handoverStep: "2. Handover",
    handoverDesc: "Daily handover of collected amounts to store management",
    reconciliationStep: "3. Reconciliation",
    reconciliationDesc: "Final deposit and reconciliation with order records",

    agencyDashboardSubStep: "A. Courier Agency Dashboard",
    agencyScreenshotTitle: "Courier Agency Management Interface",
    courierPartners: "Courier Agency Partners",
    activeAgencies: "{count} active agencies",
    outstandingPayments: "• ₹{amount} outstanding payments",
    addAgency: "Add Agency",
    premiumPartner: "Premium Partner",
    costEffective: "Cost Effective",
    limitedCapacity: "Limited Capacity",
    trialPeriod: "Trial Period",

    assignOrders: "Assign Orders",
    agencyPerformanceSubStep: "B. Agency Performance Analytics",
    agencyPerformanceScreenshotTitle: "Courier Agency Performance Metrics",
    agencyPerformanceDashboard: "Agency Performance Dashboard",
    thisWeek: "This week",
    thisMonth: "This month",
    deliveryVolumeByAgency: "Delivery Volume by Agency",
    costAnalysis: "Cost Analysis",
    totalAgencyCost: "Total Agency Cost:",
    performanceComparison: "Performance Comparison",
    agency: "Agency",
    deliveries: "Deliveries",
    avgTime: "Avg Time",
    costPerDelivery: "Cost/Delivery",

    agencyPaymentSubStep: "C. Agency Payment and Reconciliation",
    agencyPaymentScreenshotTitle: "Courier Agency Payment Management",
    agencyPaymentProcessing: "Agency Payment Processing",
    paymentDue: "Payment due:",
    payNow: "Pay Now",
    processAllPayments: "Process All Payments",
    recentPayments: "Recent Payments",
    paidStatus: "Paid",
  },
  kn: {
    pageTitle: "ಕೊನೆಯ ಮೈಲಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಯಶಸ್ವಿ ಕೊನೆಯ ಮೈಲಿ ವಿತರಣೆಗಾಗಿ ವಿತರಣಾ ಸಿಬ್ಬಂದಿ, ಕೊರಿಯರ್ ಏಜೆನ್ಸಿಗಳು, ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್ ಮತ್ತು ಅಂತ್ಯದಿಂದ ಕೊನೆಯವರೆಗಿನ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ನಿರ್ವಹಿಸುವ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ.",
    step1Title: "ಕೊನೆಯ ಮೈಲಿ ವಿತರಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    step1Intro: "ಕೊನೆಯ ಮೈಲಿ ವಿತರಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಸಿಬ್ಬಂದಿ ನಿರ್ವಹಣೆ, ವಾಹನ ಟ್ರ್ಯಾಕಿಂಗ್, ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್ ಮತ್ತು ವಿತರಣಾ ಕಾರ್ಯಕ್ಷಮತೆಯ ವಿಶ್ಲೇಷಣೆ ಸೇರಿದಂತೆ ಎಲ್ಲಾ ವಿತರಣಾ ಕಾರ್ಯಾಚರಣೆಗಳ ಮೇಲೆ ಸಮಗ್ರ ನಿಯಂತ್ರಣವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step2Title: "ವಿತರಣಾ ಸಿಬ್ಬಂದಿಯನ್ನು ಸೇರಿಸುವುದು ಮತ್ತು ನಿರ್ವಹಿಸುವುದು",
    step2Intro: "ದಕ್ಷ ವಿತರಣಾ ಕಾರ್ಯಾಚರಣೆಗಳು ಸರಿಯಾಗಿ ಆನ್‌ಬೋರ್ಡ್ ಮಾಡಿದ ಮತ್ತು ನಿರ್ವಹಿಸಿದ ಸಿಬ್ಬಂದಿಯೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ. ಹೊಸ ವಿತರಣಾ ಸಿಬ್ಬಂದಿಯನ್ನು ಸೇರಿಸಲು, ಅವರ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು, ವಾಹನಗಳನ್ನು ನಿಯೋಜಿಸಲು ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಸಿಸ್ಟಮ್ ಸಮಗ್ರ ಸಾಧನಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step3Title: "ಆರ್ಡರ್ ನಿಯೋಜನೆ ಮತ್ತು ವಿತರಣಾ ಟ್ರ್ಯಾಕಿಂಗ್",
    step3Intro: "ಆರ್ಡರ್‌ಗಳು ರವಾನೆಗೆ ಸಿದ್ಧವಾದ ನಂತರ, ಅವುಗಳನ್ನು ಲಭ್ಯವಿರುವ ವಿತರಣಾ ಸಿಬ್ಬಂದಿಗೆ ಸಮರ್ಥವಾಗಿ ನಿಯೋಜಿಸಬೇಕಾಗುತ್ತದೆ. ಸಿಸ್ಟಮ್ ಬುದ್ಧಿವಂತ ನಿಯೋಜನೆ ಅಲ್ಗಾರಿದಮ್‌ಗಳು, ನೈಜ-ಸಮಯದ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸಮಗ್ರ ವಿತರಣಾ ನಿರ್ವಹಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step4Title: "ಕೊರಿಯರ್ ಏಜೆನ್ಸಿ ನಿರ್ವಹಣೆ",
    step4Intro: "ವಿಸ್ತೃತ ವಿತರಣಾ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ವ್ಯಾಪ್ತಿಗಾಗಿ, RetailOS ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಕೊರಿಯರ್ ಏಜೆನ್ಸಿಗಳೊಂದಿಗೆ ಸಂಯೋಜನೆಗೊಳ್ಳುತ್ತದೆ. ಈ ವ್ಯವಸ್ಥೆಯು ಏಜೆನ್ಸಿ ಪಾಲುದಾರಿಕೆಗಳು, ಸೇವಾ ಮಟ್ಟದ ಒಪ್ಪಂದಗಳು, ಕಾರ್ಯಕ್ಷಮತೆ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ವೆಚ್ಚ ಆಪ್ಟಿಮೈಸೇಶನ್ ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.",
    nextStepsTitle: "ಕೊನೆಯ ಮೈಲಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಪಾಂಡಿತ್ಯ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನೀವು ಸಿಬ್ಬಂದಿ ನಿರ್ವಹಣೆ, ವಾಹನ ಸಮನ್ವಯ, ನೈಜ-ಸಮಯದ ಟ್ರ್ಯಾಕಿಂಗ್, ಸಿಒಡಿ ಸಂಗ್ರಹಣೆಗಳು ಮತ್ತು ಕೊರಿಯರ್ ಏಜೆನ್ಸಿ ಪಾಲುದಾರಿಕೆಗಳು ಸೇರಿದಂತೆ ಸಂಪೂರ್ಣ ಕೊನೆಯ ಮೈಲಿ ವಿತರಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಕರಗತ ಮಾಡಿಕೊಂಡಿದ್ದೀರಿ. ನಿಮ್ಮ ವಿತರಣಾ ಕಾರ್ಯಾಚರಣೆಗಳು ಈಗ ದಕ್ಷತೆ ಮತ್ತು ಗ್ರಾಹಕರ ತೃಪ್ತಿಗಾಗಿ ಸಂಪೂರ್ಣವಾಗಿ ಹೊಂದುವಂತೆ ಮಾಡಲಾಗಿದೆ.",
    nextStepsButton: "ಖರ್ಚು ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
    openDashboard: "ವಿತರಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ",

    // Screenshot translations
    dashboardScreenshotTitle: "ಕೊನೆಯ ಮೈಲಿ ವಿತರಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ - ಮುಖ್ಯ ಇಂಟರ್ಫೇಸ್",
    lastMileManagement: "ಕೊನೆಯ ಮೈಲಿ ವಿತರಣಾ ನಿರ್ವಹಣೆ",
    opsControlCenter: "ಸಮಗ್ರ ವಿತರಣಾ ಕಾರ್ಯಾಚರಣೆಗಳ ನಿಯಂತ್ರಣ ಕೇಂದ್ರ",
    addPersonnel: "ಸಿಬ್ಬಂದಿ ಸೇರಿಸಿ",
    routePlanner: "ಮಾರ್ಗ ಯೋಜಕ",
    activePersonnel: "ಸಕ್ರಿಯ ಸಿಬ್ಬಂದಿ",
    availableVehicles: "ಲಭ್ಯವಿರುವ ವಾಹನಗಳು",
    outForDelivery: "ವಿತರಣೆಗೆ ಹೊರಟಿದೆ",
    deliveredToday: "ಇಂದು ವಿತರಿಸಲಾಗಿದೆ",
    pendingPickups: "ಬಾಕಿ ಇರುವ ಪಿಕಪ್‌ಗಳು",
    dailyPerformance: "ದೈನಂದಿನ ಕಾರ್ಯಕ್ಷಮತೆ ಸಾರಾಂಶ",
    todaysMetrics: "ಇಂದಿನ ವಿತರಣಾ ಮೆಟ್ರಿಕ್ಸ್ ಮತ್ತು ದಕ್ಷತೆಯ ಸೂಚಕಗಳು",
    onTimeDelivery: "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ವಿತರಣೆ",
    avgDeliveryTime: "ಸರಾಸರಿ ವಿತರಣಾ ಸಮಯ",
    customerRating: "ಗ್ರಾಹಕ ರೇಟಿಂಗ್",
    dashboardProvides: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರಮುಖ ಕಾರ್ಯಕ್ಷಮತೆ ಸೂಚಕಗಳೊಂದಿಗೆ ಎಲ್ಲಾ ವಿತರಣಾ ಕಾರ್ಯಾಚರಣೆಗಳಲ್ಲಿ ನೈಜ-ಸಮಯದ ಗೋಚರತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",

    addPersonnelSubStep: "ಎ. ಹೊಸ ವಿತರಣಾ ಸಿಬ್ಬಂದಿ ಸೇರಿಸುವ ಫಾರ್ಮ್",
    addPersonnelScreenshotTitle: "ಹೊಸ ವಿತರಣಾ ಸಿಬ್ಬಂದಿಯನ್ನು ಸೇರಿಸಿ",
    onboardNewPersonnel: "ಹೊಸ ವಿತರಣಾ ಸಿಬ್ಬಂದಿಯನ್ನು ಆನ್‌ಬೋರ್ಡ್ ಮಾಡಿ",
    addStaffWithVerification: "ಸಂಪೂರ್ಣ ಪ್ರೊಫೈಲ್ ಮತ್ತು ದಾಖಲೆ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಹೊಸ ವಿತರಣಾ ಸಿಬ್ಬಂದಿಯನ್ನು ಸೇರಿಸಿ",
    personalInfo: "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ",
    fullName: "ಪೂರ್ಣ ಹೆಸರು *",
    enterFullName: "ಪೂರ್ಣ ಹೆಸರು ನಮೂದಿಸಿ",
    phoneNumber: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ *",
    emailAddress: "ಇಮೇಲ್ ವಿಳಾಸ",
    drivingLicense: "ಚಾಲನಾ ಪರವಾನಗಿ ಸಂಖ್ಯೆ *",
    addressInfo: "ವಿಳಾಸ ಮಾಹಿತಿ",
    streetAddress: "ಬೀದಿ ವಿಳಾಸ",
    city: "ನಗರ",
    pinCode: "ಪಿನ್ ಕೋಡ್",
    emergencyContact: "ತುರ್ತು ಸಂಪರ್ಕ",
    contactName: "ಸಂಪರ್ಕ ಹೆಸರು",
    relationship: "ಸಂಬಂಧ",
    selectRelationship: "ಸಂಬಂಧವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    father: "ತಂದೆ",
    mother: "ತಾಯಿ",
    spouse: "ಸಂಗಾತಿ",
    sibling: "ಸಹೋದರ/ಸಹೋದರಿ",
    other: "ಇತರೆ",
    vehicleAssignment: "ವಾಹನ ನಿಯೋಜನೆ",
    assignVehicle: "ವಾಹನ ನಿಯೋಜಿಸಿ",
    selectVehicle: "ಲಭ್ಯವಿರುವ ವಾಹನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    hasOwnVehicle: "ಸ್ವಂತ ವಾಹನವಿದೆ",
    ownVehicleNumber: "ಸ್ವಂತ ವಾಹನ ಸಂಖ್ಯೆ",
    documentUpload: "ಡಾಕ್ಯುಮೆಂಟ್ ಅಪ್‌ಲೋಡ್",
    profilePhoto: "ಪ್ರೊಫೈಲ್ ಫೋಟೋ",
    uploadPhoto: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    idProof: "ಗುರುತಿನ ಚೀಟಿ (ಆಧಾರ್)",
    uploadIdProof: "ಗುರುತಿನ ಚೀಟಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    addressProof: "ವಿಳಾಸ ಪುರಾವೆ",
    uploadAddressProof: "ವಿಳಾಸ ಪುರಾವೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    cancel: "ರದ್ದುಮಾಡಿ",
    addPersonnelBtn: "ಸಿಬ್ಬಂದಿ ಸೇರಿಸಿ",
    personnelProfileSubStep: "ಬಿ. ಸಿಬ್ಬಂದಿ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆ",
    profileScreenshotTitle: "ವಿವರವಾದ ಸಿಬ್ಬಂದಿ ಪ್ರೊಫೈಲ್",
    personnelProfileName: "ಸಿಬ್ಬಂದಿ ಪ್ರೊಫೈಲ್: ಅರ್ಜುನ್ ಸಿಂಗ್",
    basicInfo: "ಮೂಲ ಮಾಹಿತಿ",
    joined: "ಸೇರ್ಪಡೆಗೊಂಡ ದಿನಾಂಕ:",
    statusLabel: "ಸ್ಥಿತಿ:",
    activeStatus: "ಸಕ್ರಿಯ",
    performanceMetrics: "ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್",
    totalDeliveries: "ಒಟ್ಟು ವಿತರಣೆಗಳು:",
    successRate: "ಯಶಸ್ಸಿನ ಪ್ರಮಾಣ:",
    avgRating: "ಸರಾಸರಿ ರೇಟಿಂಗ್:",
    codCollected: "ಸಿಒಡಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ:",
    onTimePercent: "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ %:",
    recentDeliveryHistory: "ಇತ್ತೀಚಿನ ವಿತರಣಾ ಇತಿಹಾಸ",
    date: "ದಿನಾಂಕ",
    orderId: "ಆರ್ಡರ್ ಐಡಿ",
    codAmount: "ಸಿಒಡಿ ಮೊತ್ತ",
    rating: "ರೇಟಿಂಗ್",
    delivered: "ವಿತರಿಸಲಾಗಿದೆ",
    paymentAndEarnings: "ಪಾವತಿ ಮತ್ತು ಗಳಿಕೆಗಳು",
    currentBalance: "ಪ್ರಸ್ತುತ ಬಾಕಿ",
    thisMonthEarnings: "ಈ ತಿಂಗಳು",
    deliveriesCount: "ವಿತರಣೆಗಳು",
    avgPerDay: "ಸರಾಸರಿ/ದಿನ",
    processPayment: "ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿ",
    viewStatement: "ಹೇಳಿಕೆ ವೀಕ್ಷಿಸಿ",
    portalAccessSubStep: "ಸಿ. ಸಿಬ್ಬಂದಿ ಪೋರ್ಟಲ್ ಪ್ರವೇಶ",
    portalSetupScreenshotTitle: "ವಿತರಣಾ ಸಿಬ್ಬಂದಿ ಪೋರ್ಟಲ್ ಸೆಟಪ್",
    portalAccessManagement: "ಪೋರ್ಟಲ್ ಪ್ರವೇಶ ನಿರ್ವಹಣೆ",
    deliveryPersonnelPortal: "ವಿತರಣಾ ಸಿಬ್ಬಂದಿ ಪೋರ್ಟಲ್",
    portalDesc: "ಆರ್ಡರ್ ನಿರ್ವಹಣೆ, ಗಳಿಕೆಗಳ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸಂವಹನಕ್ಕಾಗಿ ವಿತರಣಾ ಸಿಬ್ಬಂದಿಗೆ ಅವರ ಮೀಸಲಾದ ಪೋರ್ಟಲ್‌ಗೆ ಪ್ರವೇಶವನ್ನು ಒದಗಿಸಿ.",
    portalStatusFor: "ಅರ್ಜುನ್ ಸಿಂಗ್‌ಗೆ ಪೋರ್ಟಲ್ ಸ್ಥಿತಿ:",
    lastLogin: "ಕೊನೆಯ ಲಾಗಿನ್:",
    portalFeatures: "ಪೋರ್ಟಲ್ ವೈಶಿಷ್ಟ್ಯಗಳು:",
    portalFeaturesAvailable: "ಲಭ್ಯವಿರುವ ಪೋರ್ಟಲ್ ವೈಶಿಷ್ಟ್ಯಗಳು",
    viewAssignedOrders: "ನಿಯೋಜಿಸಲಾದ ವಿತರಣಾ ಆರ್ಡರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    updateStatusRealtime: "ನೈಜ ಸಮಯದಲ್ಲಿ ವಿತರಣಾ ಸ್ಥಿತಿಯನ್ನು ನವೀಕರಿಸಿ",
    trackEarnings: "ದೈನಂದಿನ ಮತ್ತು ಮಾಸಿಕ ಗಳಿಕೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    viewPerformance: "ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್ ಮತ್ತು ರೇಟಿಂಗ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    reportIssues: "ವಿತರಣಾ ಸಮಸ್ಯೆಗಳನ್ನು ಅಥವಾ ತೊಂದರೆಗಳನ್ನು ವರದಿ ಮಾಡಿ",
    accountManagement: "ಖಾತೆ ನಿರ್ವಹಣೆ",
    loginEmail: "ಲಾಗಿನ್ ಇಮೇಲ್",
    portalRole: "ಪೋರ್ಟಲ್ ಪಾತ್ರ",
    deliveryPersonnelRole: "ವಿತರಣಾ ಸಿಬ್ಬಂದಿ",
    seniorDeliveryPersonnelRole: "ಹಿರಿಯ ವಿತರಣಾ ಸಿಬ್ಬಂದಿ",
    mobileAppAccess: "ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಪ್ರವೇಶ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
    resetPassword: "ಗುಪ್ತಪದವನ್ನು ಪುನರ್ಹೊಂದಿಸಿ",
    suspendAccess: "ಪ್ರವೇಶವನ್ನು ಅಮಾನತುಗೊಳಿಸಿ",
    sendPortalInvite: "ಪೋರ್ಟಲ್ ಆಹ್ವಾನವನ್ನು ಕಳುಹಿಸಿ",

    orderAssignmentSubStep: "ಎ. ಆರ್ಡರ್ ನಿಯೋಜನೆ ಇಂಟರ್ಫೇಸ್",
    assignmentScreenshotTitle: "ವಿತರಣಾ ಸಿಬ್ಬಂದಿಗೆ ಆರ್ಡರ್‌ಗಳನ್ನು ನಿಯೋಜಿಸಿ",
    assignDeliveryOrders: "ವಿತರಣಾ ಆರ್ಡರ್‌ಗಳನ್ನು ನಿಯೋಜಿಸಿ",
    readyForAssignment: "ನಿಯೋಜನೆಗೆ ಸಿದ್ಧವಿದೆ ({count} ಆರ್ಡರ್‌ಗಳು)",
    highPriority: "ಹೆಚ್ಚಿನ ಆದ್ಯತೆ",
    standard: "ಪ್ರಮಾಣಿತ",
    b2b: "ಬಿ2ಬಿ",
    availablePersonnel: "ಲಭ್ಯವಿರುವ ಸಿಬ್ಬಂದಿ",
    currentLoad: "ಪ್ರಸ್ತುತ ಲೋಡ್: {count} ಆರ್ಡರ್‌ಗಳು",
    assignBtn: "ನಿಯೋಜಿಸಿ",
    assignLaterBtn: "ನಂತರ ನಿಯೋಜಿಸಿ",
    assignmentSettings: "ನಿಯೋಜನೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    enableAutoAssign: "ಸ್ವಯಂ-ನಿಯೋಜನೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
    prioritizeProximity: "ಸಾಮೀಪ್ಯಕ್ಕೆ ಆದ್ಯತೆ ನೀಡಿ",
    balanceWorkload: "ಕೆಲಸದ ಹೊರೆಯನ್ನು ಸಮತೋಲನಗೊಳಿಸಿ",
    considerRatings: "ಗ್ರಾಹಕರ ರೇಟಿಂಗ್‌ಗಳನ್ನು ಪರಿಗಣಿಸಿ",
    maxOrdersPerPerson: "ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ ಗರಿಷ್ಠ ಆರ್ಡರ್‌ಗಳು",
    bulkAssign: "ಬೃಹತ್ ನಿಯೋಜನೆ",
    smartAutoAssign: "ಸ್ಮಾರ್ಟ್ ಸ್ವಯಂ-ನಿಯೋಜನೆ",
    ordersSelected: "{count} ಆರ್ಡರ್‌ಗಳನ್ನು ನಿಯೋಜನೆಗಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ",

    trackingSubStep: "ಬಿ. ನೈಜ-ಸಮಯದ ವಿತರಣಾ ಟ್ರ್ಯಾಕಿಂಗ್",
    trackingScreenshotTitle: "ಸಾಗಣೆಯಲ್ಲಿರುವ ಆರ್ಡರ್‌ಗಳ ಟ್ರ್ಯಾಕಿಂಗ್",
    ordersInTransit: "ಸಾಗಣೆಯಲ್ಲಿರುವ ಆರ್ಡರ್‌ಗಳು",
    deliveryBy: "ವಿತರಣೆ:",
    customerLabel: "ಗ್ರಾಹಕ:",
    started: "ಪ್ರಾರಂಭ:",
    distance: "ದೂರ:",
    eta: "ಇಟಿಎ:",
    inTransitStatus: "ಸಾಗಣೆಯಲ್ಲಿದೆ",
    paymentOnline: "ಪಾವತಿ: ಆನ್‌ಲೈನ್",
    currentLocation: "ಪ್ರಸ್ತುತ ಸ್ಥಳ:",
    trackLive: "ಲೈವ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    lastUpdate: "ಕೊನೆಯ ನವೀಕರಣ: {time} ಹಿಂದೆ",
    deliveryProgress: "ವಿತರಣಾ ಪ್ರಗತಿ:",
    pickedUp: "ಪಿಕಪ್ ಮಾಡಲಾಗಿದೆ",
    deliveredStatus: "ವಿತರಿಸಲಾಗಿದೆ",
    deliveryFailed: "ವಿತರಣೆ ವಿಫಲವಾಗಿದೆ",
    customerNotAvailable: "ಗ್ರಾಹಕರು ಲಭ್ಯವಿಲ್ಲ",
    retryScheduled: "ಮರುಪ್ರಯತ್ನ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ",
    contactCustomer: "ಗ್ರಾಹಕರನ್ನು ಸಂಪರ್ಕಿಸಿ",
    issueReported: "ಸಮಸ್ಯೆ ವರದಿಯಾಗಿದೆ:",

    codCollectionSubStep: "ಸಿ. ಸಿಒಡಿ ಸಂಗ್ರಹಣೆ ನಿರ್ವಹಣೆ",
    codScreenshotTitle: "ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ ಸಂಗ್ರಹಣೆ ಟ್ರ್ಯಾಕಿಂಗ್",
    codReconciliation: "ಸಿಒಡಿ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಸಮನ್ವಯ",
    todaysCollections: "ಇಂದಿನ ಸಂಗ್ರಹಣೆಗಳು",
    fromCodDeliveries: "{count} ಸಿಒಡಿ ವಿತರಣೆಗಳಿಂದ",
    pendingHandover: "ಬಾಕಿ ಇರುವ ಹಸ್ತಾಂತರ",
    withDeliveryPersonnel: "ವಿತರಣಾ ಸಿಬ್ಬಂದಿಯೊಂದಿಗೆ",
    reconciled: "ಸಮನ್ವಯಗೊಳಿಸಲಾಗಿದೆ",
    depositedToStore: "ಅಂಗಡಿಗೆ ಜಮೆ ಮಾಡಲಾಗಿದೆ",
    codCollectionsByPersonnel: "ಸಿಬ್ಬಂದಿ ಮೂಲಕ ಸಿಒಡಿ ಸಂಗ್ರಹಣೆಗಳು",
    pendingHandoverLabel: "₹{amount} ಬಾಕಿ ಇರುವ ಹಸ್ತಾಂತರ",
    fullyReconciled: "✓ ಸಂಪೂರ್ಣವಾಗಿ ಸಮನ್ವಯಗೊಳಿಸಲಾಗಿದೆ",
    collectBtn: "ಸಂಗ್ರಹಿಸಿ",
    completeStatus: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    codReconciliationProcess: "ಸಿಒಡಿ ಸಮನ್ವಯ ಪ್ರಕ್ರಿಯೆ",
    collectionStep: "1. ಸಂಗ್ರಹಣೆ",
    collectionDesc: "ವಿತರಣೆಯ ಸಮಯದಲ್ಲಿ ಸಿಬ್ಬಂದಿ ಗ್ರಾಹಕರಿಂದ ಸಿಒಡಿ ಸಂಗ್ರಹಿಸುತ್ತಾರೆ",
    handoverStep: "2. ಹಸ್ತಾಂತರ",
    handoverDesc: "ಸಂಗ್ರಹಿಸಿದ ಮೊತ್ತವನ್ನು ಅಂಗಡಿ ನಿರ್ವಹಣೆಗೆ ದೈನಂದಿನ ಹಸ್ತಾಂತರ",
    reconciliationStep: "3. ಸಮನ್ವಯ",
    reconciliationDesc: "ಅಂತಿಮ ಠೇವಣಿ ಮತ್ತು ಆರ್ಡರ್ ದಾಖಲೆಗಳೊಂದಿಗೆ ಸಮನ್ವಯ",
    
    agencyDashboardSubStep: "ಎ. ಕೊರಿಯರ್ ಏಜೆನ್ಸಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    agencyScreenshotTitle: "ಕೊರಿಯರ್ ಏಜೆನ್ಸಿ ನಿರ್ವಹಣಾ ಇಂಟರ್ಫೇಸ್",
    courierPartners: "ಕೊರಿಯರ್ ಏಜೆನ್ಸಿ ಪಾಲುದಾರರು",
    activeAgencies: "{count} ಸಕ್ರಿಯ ಏಜೆನ್ಸಿಗಳು",
    outstandingPayments: "• ₹{amount} ಬಾಕಿ ಪಾವತಿಗಳು",
    addAgency: "ಏಜೆನ್ಸಿ ಸೇರಿಸಿ",
    premiumPartner: "ಪ್ರೀಮಿಯಂ ಪಾಲುದಾರ",
    costEffective: "ವೆಚ್ಚ ಪರಿಣಾಮಕಾರಿ",
    limitedCapacity: "ಸೀಮಿತ ಸಾಮರ್ಥ್ಯ",
    trialPeriod: "ಪ್ರಯೋಗ ಅವಧಿ",
    assignOrders: "ಆರ್ಡರ್‌ಗಳನ್ನು ನಿಯೋಜಿಸಿ",
    agencyPerformanceSubStep: "ಬಿ. ಏಜೆನ್ಸಿ ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ",
    agencyPerformanceScreenshotTitle: "ಕೊರಿಯರ್ ಏಜೆನ್ಸಿ ಕಾರ್ಯಕ್ಷಮತೆ ಮೆಟ್ರಿಕ್ಸ್",
    agencyPerformanceDashboard: "ಏಜೆನ್ಸಿ ಕಾರ್ಯಕ್ಷಮತೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    thisWeek: "ಈ ವಾರ",
    thisMonth: "ಈ ತಿಂಗಳು",
    deliveryVolumeByAgency: "ಏಜೆನ್ಸಿ ಮೂಲಕ ವಿತರಣಾ ಪ್ರಮಾಣ",
    costAnalysis: "ವೆಚ್ಚ ವಿಶ್ಲೇಷಣೆ",
    totalAgencyCost: "ಒಟ್ಟು ಏಜೆನ್ಸಿ ವೆಚ್ಚ:",
    performanceComparison: "ಕಾರ್ಯಕ್ಷಮತೆ ಹೋಲಿಕೆ",
    agency: "ಏಜೆನ್ಸಿ",
    deliveries: "ವಿತರಣೆಗಳು",
    avgTime: "ಸರಾಸರಿ ಸಮಯ",
    costPerDelivery: "ಪ್ರತಿ ವಿತರಣೆಗೆ ವೆಚ್ಚ",

    agencyPaymentSubStep: "ಸಿ. ಏಜೆನ್ಸಿ ಪಾವತಿ ಮತ್ತು ಸಮನ್ವಯ",
    agencyPaymentScreenshotTitle: "ಕೊರಿಯರ್ ಏಜೆನ್ಸಿ ಪಾವತಿ ನಿರ್ವಹಣೆ",
    agencyPaymentProcessing: "ಏಜೆನ್ಸಿ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆ",
    paymentDue: "ಪಾವತಿ ಬಾಕಿ:",
    payNow: "ಈಗ ಪಾವತಿಸಿ",
    processAllPayments: "ಎಲ್ಲಾ ಪಾವತಿಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿ",
    recentPayments: "ಇತ್ತೀಚಿನ ಪಾವತಿಗಳು",
    paidStatus: "ಪಾವತಿಸಲಾಗಿದೆ",
  },
  te: {
    "pageTitle": "చివరి మైలు లాజిస్టిక్స్ మాన్యువల్",
    "backToManual": "మాన్యువల్‌కి తిరిగి వెళ్లు",
    "description": "డెలివరీ సిబ్బంది, కొరియర్ ఏజెన్సీలు, మార్గాల ఆప్టిమైజేషన్, మరియు విజయవంతమైన చివరి-మైలు డెలివరీ కోసం పూర్తి లాజిస్టిక్స్ కార్యకలాపాలను నిర్వహించడానికి పూర్తి మార్గదర్శిని.",
    "step1Title": "చివరి మైలు డెలివరీ డాష్‌బోర్డ్",
    "step1Intro": "చివరి మైలు డెలివరీ డాష్‌బోర్డ్ అన్ని డెలివరీ కార్యకలాపాలపై పూర్తి నియంత్రణను అందిస్తుంది, ఇందులో సిబ్బంది నిర్వహణ, వాహన ట్రాకింగ్, మార్గాల ఆప్టిమైజేషన్ మరియు డెలివరీ పనితీరు విశ్లేషణలు ఉంటాయి.",
    "step2Title": "డెలివరీ సిబ్బందిని జోడించడం మరియు నిర్వహించడం",
    "step2Intro": "సమర్థవంతమైన డెలివరీ కార్యకలాపాలు సరిగ్గా నియమించుకున్న మరియు నిర్వహించబడిన సిబ్బందితో ప్రారంభమవుతాయి. కొత్త డెలివరీ సిబ్బందిని జోడించడానికి, వారి పత్రాలను నిర్వహించడానికి, వాహనాలను కేటాయించడానికి మరియు పనితీరును ట్రాక్ చేయడానికి సిస్టమ్ సమగ్ర సాధనాలను అందిస్తుంది.",
    "step3Title": "ఆర్డర్ కేటాయింపు మరియు డెలివరీ ట్రాకింగ్",
    "step3Intro": "ఆర్డర్లు పంపించడానికి సిద్ధంగా ఉన్న తర్వాత, వాటిని అందుబాటులో ఉన్న డెలివరీ సిబ్బందికి సమర్థవంతంగా కేటాయించాలి. సిస్టమ్ తెలివైన కేటాయింపు అల్గోరిథమ్‌లు, నిజ-సమయ ట్రాకింగ్ మరియు సమగ్ర డెలివరీ నిర్వహణను అందిస్తుంది.",
    "step4Title": "కొరియర్ ఏజెన్సీ నిర్వహణ",
    "step4Intro": "పెరిగిన డెలివరీ సామర్థ్యం మరియు కవరేజ్ కోసం, RetailOS మూడవ-పక్ష కొరియర్ ఏజెన్సీలతో అనుసంధానిస్తుంది. ఈ సిస్టమ్ ఏజెన్సీ భాగస్వామ్యాలు, సేవా స్థాయి ఒప్పందాలు, పనితీరు ట్రాకింగ్ మరియు ఖర్చు ఆప్టిమైజేషన్‌ను నిర్వహిస్తుంది.",
    "nextStepsTitle": "చివరి-మైలు లాజిస్టిక్స్ ప్రావీణ్యం పూర్తయింది!",
    "nextStepsDescription": "మీరు సిబ్బంది నిర్వహణ, వాహన సమన్వయం, నిజ-సమయ ట్రాకింగ్, COD వసూళ్లు మరియు కొరియర్ ఏజెన్సీ భాగస్వామ్యాలతో సహా పూర్తి చివరి-మైలు డెలివరీ వ్యవస్థను విజయవంతంగా నేర్చుకున్నారు. మీ డెలివరీ కార్యకలాపాలు ఇప్పుడు సమర్థత మరియు కస్టమర్ సంతృప్తి కోసం పూర్తిగా ఆప్టిమైజ్ చేయబడ్డాయి.",
    "nextStepsButton": "ఖర్చు నిర్వహణకు కొనసాగండి",
    "openDashboard": "డెలివరీ డాష్‌బోర్డ్ తెరవండి",

    // Screenshot content
    "dashboardScreenshotTitle": "చివరి మైలు డెలివరీ డాష్‌బోర్డ్ - ప్రధాన ఇంటర్‌ఫేస్",
    "lastMileManagement": "చివరి మైలు డెలివరీ నిర్వహణ",
    "opsControlCenter": "సమగ్ర డెలివరీ కార్యకలాపాల నియంత్రణ కేంద్రం",
    "addPersonnel": "సిబ్బందిని జోడించండి",
    "routePlanner": "మార్గ ప్రణాళిక",
    "activePersonnel": "సక్రియ సిబ్బంది",
    "availableVehicles": "అందుబాటులో ఉన్న వాహనాలు",
    "outForDelivery": "డెలివరీకి వెళ్లినవి",
    "deliveredToday": "ఈరోజు డెలివరీ చేయబడినవి",
    "pendingPickups": "పెండింగ్ పికప్స్",
    "dailyPerformance": "రోజువారీ పనితీరు సారాంశం",
    "todaysMetrics": "ఈరోజు డెలివరీ మెట్రిక్స్ మరియు సామర్థ్య సూచికలు",
    "onTimeDelivery": "సమయానికి డెలివరీ",
    "avgDeliveryTime": "సగటు డెలివరీ సమయం",
    "customerRating": "కస్టమర్ రేటింగ్",
    "dashboardProvides": "కీలక పనితీరు సూచికలతో అన్ని డెలివరీ కార్యకలాపాలలో డాష్‌బోర్డ్ నిజ-సమయ దృశ్యమానతను అందిస్తుంది.",

    "addPersonnelSubStep": "A. కొత్త డెలివరీ సిబ్బంది ఫారంను జోడించండి",
    "addPersonnelScreenshotTitle": "కొత్త డెలివరీ సిబ్బందిని జోడించండి",
    "onboardNewPersonnel": "కొత్త డెలివరీ సిబ్బందిని నియమించుకోండి",
    "addStaffWithVerification": "పూర్తి ప్రొఫైల్ మరియు పత్రాల ధృవీకరణతో కొత్త డెలివరీ సిబ్బందిని జోడించండి",
    "personalInfo": "వ్యక్తిగత సమాచారం",
    "fullName": "పూర్తి పేరు *",
    "enterFullName": "పూర్తి పేరును నమోదు చేయండి",
    "phoneNumber": "ఫోన్ నంబర్ *",
    "emailAddress": "ఇమెయిల్ చిరునామా",
    "drivingLicense": "డ్రైవింగ్ లైసెన్స్ నంబర్ *",
    "addressInfo": "చిరునామా సమాచారం",
    "streetAddress": "వీధి చిరునామా",
    "city": "నగరం",
    "pinCode": "పిన్ కోడ్",
    "emergencyContact": "అత్యవసర సంప్రదింపు",
    "contactName": "సంప్రదింపు పేరు",
    "relationship": "సంబంధం",
    "selectRelationship": "సంబంధాన్ని ఎంచుకోండి",
    "father": "తండ్రి",
    "mother": "తల్లి",
    "spouse": "జీవిత భాగస్వామి",
    "sibling": "సహోదరి/సహోదరుడు",
    "other": "ఇతర",
    "vehicleAssignment": "వాహన కేటాయింపు",
    "assignVehicle": "వాహనాన్ని కేటాయించండి",
    "selectVehicle": "అందుబాటులో ఉన్న వాహనాన్ని ఎంచుకోండి",
    "hasOwnVehicle": "సొంత వాహనం ఉంది",
    "ownVehicleNumber": "సొంత వాహనం నంబర్",
    "documentUpload": "పత్రం అప్‌లోడ్",
    "profilePhoto": "ప్రొఫైల్ ఫోటో",
    "uploadPhoto": "ఫోటోను అప్‌లోడ్ చేయండి",
    "idProof": "ID రుజువు (ఆధార్)",
    "uploadIdProof": "ID రుజువును అప్‌లోడ్ చేయండి",
    "addressProof": "చిరునామా రుజువు",
    "uploadAddressProof": "చిరునామా రుజువును అప్‌లోడ్ చేయండి",
    "cancel": "రద్దు చేయండి",
    "addPersonnelBtn": "సిబ్బందిని జోడించండి",
    "personnelProfileSubStep": "B. సిబ్బంది ప్రొఫైల్ మరియు పనితీరు",
    "profileScreenshotTitle": "వివరణాత్మక సిబ్బంది ప్రొఫైల్",
    "personnelProfileName": "సిబ్బంది ప్రొఫైల్: అర్జున్ సింగ్",
    "basicInfo": "ప్రాథమిక సమాచారం",
    "joined": "చేరినది:",
    "statusLabel": "స్థితి:",
    "activeStatus": "సక్రియం",
    "performanceMetrics": "పనితీరు మెట్రిక్స్",
    "totalDeliveries": "మొత్తం డెలివరీలు:",
    "successRate": "విజయం రేటు:",
    "avgRating": "సగటు రేటింగ్:",
    "codCollected": "COD వసూలు చేసినది:",
    "onTimePercent": "సమయానికి %:",
    "recentDeliveryHistory": "తాజా డెలివరీ చరిత్ర",
    "date": "తేదీ",
    "orderId": "ఆర్డర్ ID",
    "codAmount": "COD మొత్తం",
    "rating": "రేటింగ్",
    "delivered": "డెలివరీ చేయబడినది",
    "paymentAndEarnings": "చెల్లింపు & సంపాదనలు",
    "currentBalance": "ప్రస్తుత బ్యాలెన్స్",
    "thisMonthEarnings": "ఈ నెల",
    "deliveriesCount": "డెలివరీలు",
    "avgPerDay": "సగటు/రోజు",
    "processPayment": "చెల్లింపును ప్రాసెస్ చేయండి",
    "viewStatement": "స్టేట్‌మెంట్‌ను చూడండి",
    "portalAccessSubStep": "C. సిబ్బంది పోర్టల్ యాక్సెస్",
    "portalSetupScreenshotTitle": "డెలివరీ సిబ్బంది పోర్టల్ సెటప్",
    "portalAccessManagement": "పోర్టల్ యాక్సెస్ నిర్వహణ",
    "deliveryPersonnelPortal": "డెలివరీ సిబ్బంది పోర్టల్",
    "portalDesc": "ఆర్డర్ నిర్వహణ, సంపాదనల ట్రాకింగ్ మరియు కమ్యూనికేషన్ కోసం డెలివరీ సిబ్బందికి వారి ప్రత్యేక పోర్టల్‌కు యాక్సెస్‌ను అందించండి.",
    "portalStatusFor": "అర్జున్ సింగ్ కోసం పోర్టల్ స్థితి:",
    "lastLogin": "చివరి లాగిన్:",
    "portalFeatures": "పోర్టల్ ఫీచర్లు:",
    "portalFeaturesAvailable": "అందుబాటులో ఉన్న పోర్టల్ ఫీచర్లు",

    "viewAssignedOrders": "కేటాయించిన డెలివరీ ఆర్డర్లను చూడండి",
    "updateStatusRealtime": "నిజ-సమయంలో డెలివరీ స్థితిని అప్‌డేట్ చేయండి",
    "trackEarnings": "రోజువారీ మరియు నెలవారీ సంపాదనలను ట్రాక్ చేయండి",
    "viewPerformance": "పనితీరు మెట్రిక్స్ మరియు రేటింగ్‌లను చూడండి",
    "reportIssues": "డెలివరీ సమస్యలు లేదా ఇబ్బందులను నివేదించండి",
    "accountManagement": "ఖాతా నిర్వహణ",
    "loginEmail": "లాగిన్ ఇమెయిల్",
    "portalRole": "పోర్టల్ పాత్ర",
    "deliveryPersonnelRole": "డెలివరీ సిబ్బంది",
    "seniorDeliveryPersonnelRole": "సీనియర్ డెలివరీ సిబ్బంది",
    "mobileAppAccess": "మొబైల్ యాప్ యాక్సెస్ ప్రారంభించబడింది",
    "resetPassword": "పాస్‌వర్డ్‌ను రీసెట్ చేయండి",
    "suspendAccess": "యాక్సెస్‌ను నిలిపివేయండి",
    "sendPortalInvite": "పోర్టల్ ఆహ్వానాన్ని పంపండి",

    "orderAssignmentSubStep": "A. ఆర్డర్ కేటాయింపు ఇంటర్‌ఫేస్",
    "assignmentScreenshotTitle": "డెలివరీ సిబ్బందికి ఆర్డర్లను కేటాయించండి",
    "assignDeliveryOrders": "డెలివరీ ఆర్డర్లను కేటాయించండి",

    "readyForAssignment": "కేటాయింపుకు సిద్ధంగా ఉంది ({count} ఆర్డర్లు)",
    "highPriority": "అధిక ప్రాధాన్యత",
    "standard": "ప్రామాణికం",
    "b2b": "B2B",
    "availablePersonnel": "అందుబాటులో ఉన్న సిబ్బంది",
    "currentLoad": "ప్రస్తుత లోడ్: {count} ఆర్డర్లు",
    "assignBtn": "కేటాయించండి",
    "assignLaterBtn": "తర్వాత కేటాయించండి",
    "assignmentSettings": "కేటాయింపు సెట్టింగ్‌లు",
    "enableAutoAssign": "ఆటో-కేటాయింపును ప్రారంభించండి",
    "prioritizeProximity": "సామీప్యాన్ని ప్రాధాన్యత ఇవ్వండి",
    "balanceWorkload": "పనిభారాన్ని సమతుల్యం చేయండి",
    "considerRatings": "కస్టమర్ రేటింగ్‌లను పరిగణించండి",
    "maxOrdersPerPerson": "ఒక వ్యక్తికి గరిష్ట ఆర్డర్లు",
    "bulkAssign": "బల్క్ కేటాయించండి",
    "smartAutoAssign": "స్మార్ట్ ఆటో-కేటాయింపు",
    "ordersSelected": "{count} ఆర్డర్లు కేటాయింపు కోసం ఎంపిక చేయబడ్డాయి",

    "trackingSubStep": "B. నిజ-సమయ డెలివరీ ట్రాకింగ్",
    "trackingScreenshotTitle": "ప్రయాణంలో ఉన్న ఆర్డర్ల ట్రాకింగ్",
    "ordersInTransit": "ప్రయాణంలో ఉన్న ఆర్డర్లు",
    "deliveryBy": "డెలివరీ చేసేవారు:",
    "customerLabel": "కస్టమర్:",
    "started": "ప్రారంభించినది:",
    "distance": "దూరం:",
    "eta": "ETA:",
    "inTransitStatus": "ప్రయాణంలో",
    "paymentOnline": "చెల్లింపు: ఆన్‌లైన్",
    "currentLocation": "ప్రస్తుత స్థానం:",
    "trackLive": "లైవ్ ట్రాక్ చేయండి",
    "lastUpdate": "చివరి అప్‌డేట్: {time} క్రితం",
    "deliveryProgress": "డెలివరీ పురోగతి:",
    "pickedUp": "పికప్ చేయబడినది",
    "deliveredStatus": "డెలివరీ చేయబడినది",
    "deliveryFailed": "డెలివరీ విఫలమైంది",
    "customerNotAvailable": "కస్టమర్ అందుబాటులో లేరు",
    "retryScheduled": "మళ్లీ ప్రయత్నించడానికి షెడ్యూల్ చేయబడింది",
    "contactCustomer": "కస్టమర్‌ను సంప్రదించండి",
    "issueReported": "సమస్య నివేదించబడింది:",

    "codCollectionSubStep": "C. COD వసూలు నిర్వహణ",
    "codScreenshotTitle": "క్యాష్ ఆన్ డెలివరీ వసూలు ట్రాకింగ్",
    "codReconciliation": "COD వసూలు & సర్దుబాటు",
    "todaysCollections": "ఈరోజు వసూళ్లు",
    "fromCodDeliveries": "{count} COD డెలివరీల నుండి",
    "pendingHandover": "పెండింగ్ హ్యాండోవర్",
    "withDeliveryPersonnel": "డెలివరీ సిబ్బందితో ఉంది",
    "reconciled": "సర్దుబాటు చేయబడింది",
    "depositedToStore": "స్టోర్‌కు జమ చేయబడింది",
    "codCollectionsByPersonnel": "సిబ్బంది ద్వారా COD వసూళ్లు",
    "pendingHandoverLabel": "{amount} పెండింగ్ హ్యాండోవర్",
    "fullyReconciled": "✓ పూర్తిగా సర్దుబాటు చేయబడింది",
    "collectBtn": "వసూలు చేయండి",
    "completeStatus": "పూర్తి",
    "codReconciliationProcess": "COD సర్దుబాటు ప్రక్రియ",
    "collectionStep": "1. వసూలు",
    "collectionDesc": "డెలివరీ సమయంలో సిబ్బంది కస్టమర్ల నుండి COD వసూలు చేస్తారు",
    "handoverStep": "2. హ్యాండోవర్",
    "handoverDesc": "వసూలు చేసిన మొత్తాలను రోజువారీగా స్టోర్ నిర్వహణకు అప్పగించడం",
    "reconciliationStep": "3. సర్దుబాటు",
    "reconciliationDesc": "తుది డిపాజిట్ మరియు ఆర్డర్ రికార్డులతో సర్దుబాటు",

    "agencyDashboardSubStep": "A. కొరియర్ ఏజెన్సీ డాష్‌బోర్డ్",
    "agencyScreenshotTitle": "కొరియర్ ఏజెన్సీ నిర్వహణ ఇంటర్‌ఫేస్",
    "courierPartners": "కొరియర్ ఏజెన్సీ భాగస్వాములు",
    "activeAgencies": "{count} సక్రియ ఏజెన్సీలు",
    "outstandingPayments": "• ₹{amount} బకాయి ఉన్న చెల్లింపులు",
    "addAgency": "ఏజెన్సీని జోడించండి",
    "premiumPartner": "ప్రీమియం భాగస్వామి",
    "costEffective": "ఖర్చు-ప్రభావితం",
    "limitedCapacity": "పరిమిత సామర్థ్యం",
    "trialPeriod": "ట్రయల్ వ్యవధి",

    "assignOrders": "ఆర్డర్లను కేటాయించండి",
    "agencyPerformanceSubStep": "B. ఏజెన్సీ పనితీరు విశ్లేషణలు",
    "agencyPerformanceScreenshotTitle": "కొరియర్ ఏజెన్సీ పనితీరు మెట్రిక్స్",
    "agencyPerformanceDashboard": "ఏజెన్సీ పనితీరు డాష్‌బోర్డ్",
    "thisWeek": "ఈ వారం",
    "thisMonth": "ఈ నెల",
    "deliveryVolumeByAgency": "ఏజెన్సీ ద్వారా డెలివరీ వాల్యూమ్",
    "costAnalysis": "ఖర్చు విశ్లేషణ",
    "totalAgencyCost": "మొత్తం ఏజెన్సీ ఖర్చు:",
    "performanceComparison": "పనితీరు పోలిక",
    "agency": "ఏజెన్సీ",
    "deliveries": "డెలివరీలు",
    "avgTime": "సగటు సమయం",
    "costPerDelivery": "ఒక డెలివరీకి ఖర్చు",

    "agencyPaymentSubStep": "C. ఏజెన్సీ చెల్లింపు మరియు సర్దుబాటు",
    "agencyPaymentScreenshotTitle": "కొరియర్ ఏజెన్సీ చెల్లింపు నిర్వహణ",
    "agencyPaymentProcessing": "ఏజెన్సీ చెల్లింపు ప్రాసెసింగ్",
    "paymentDue": "చెల్లించవలసిన చెల్లింపు:",
    "payNow": "ఇప్పుడు చెల్లించండి",
    "processAllPayments": "అన్ని చెల్లింపులను ప్రాసెస్ చేయండి",
    "recentPayments": "తాజా చెల్లింపులు",
    "paidStatus": "చెల్లించబడింది"
  },
  ta: {
    "pageTitle": "கடைசி மைல் லாஜிஸ்டிக்ஸ் கையேடு",
    "backToManual": "கையேட்டிற்குத் திரும்பு",
    "description": "டெலிவரி பணியாளர்கள், கூரியர் ஏஜென்சிகள், வழித்தட மேம்படுத்துதல் மற்றும் வெற்றிகரமான கடைசி-மைல் டெலிவரிக்கான முழுமையான லாஜிஸ்டிக்ஸ் செயல்பாடுகளை நிர்வகிப்பதற்கான முழுமையான வழிகாட்டி.",
    "step1Title": "கடைசி மைல் டெலிவரி டாஷ்போர்டு",
    "step1Intro": "கடைசி மைல் டெலிவரி டாஷ்போர்டு, பணியாளர் மேலாண்மை, வாகன கண்காணிப்பு, வழித்தட மேம்படுத்துதல் மற்றும் டெலிவரி செயல்திறன் பகுப்பாய்வு உட்பட அனைத்து டெலிவரி செயல்பாடுகளின் மீதும் முழுமையான கட்டுப்பாட்டை வழங்குகிறது.",
    "step2Title": "டெலிவரி பணியாளர்களைச் சேர்த்தல் மற்றும் நிர்வகித்தல்",
    "step2Intro": "சீரான டெலிவரி செயல்பாடுகள், முறையாக நியமிக்கப்பட்ட மற்றும் நிர்வகிக்கப்பட்ட பணியாளர்களிடமிருந்து தொடங்குகின்றன. புதிய டெலிவரி ஊழியர்களைச் சேர்ப்பதற்கும், அவர்களின் ஆவணங்களை நிர்வகிப்பதற்கும், வாகனங்களை ஒதுக்குவதற்கும், செயல்திறனைக் கண்காணிப்பதற்கும் இந்த அமைப்பு விரிவான கருவிகளை வழங்குகிறது.",
    "step3Title": "ஆர்டர் ஒதுக்குதல் மற்றும் டெலிவரி கண்காணிப்பு",
    "step3Intro": "ஆர்டர்கள் அனுப்பத் தயாரானதும், அவை திறமையாகக் கிடைக்கக்கூடிய டெலிவரி பணியாளர்களுக்கு ஒதுக்கப்பட வேண்டும். இந்த அமைப்பு நுண்ணறிவுள்ள ஒதுக்கீட்டு வழிமுறைகள், நிகழ்நேர கண்காணிப்பு மற்றும் விரிவான டெலிவரி நிர்வாகத்தை வழங்குகிறது.",
    "step4Title": "கூரியர் ஏஜென்சி மேலாண்மை",
    "step4Intro": "விரிவாக்கப்பட்ட டெலிவரி திறன் மற்றும் கவரேஜ்ஜிற்காக, RetailOS மூன்றாம் தரப்பு கூரியர் ஏஜென்சிகளுடன் ஒருங்கிணைக்கிறது. இந்த அமைப்பு ஏஜென்சி கூட்டாண்மைகள், சேவை நிலை ஒப்பந்தங்கள், செயல்திறன் கண்காணிப்பு மற்றும் செலவு மேம்படுத்துதல் ஆகியவற்றை நிர்வகிக்கிறது.",
    "nextStepsTitle": "கடைசி மைல் லாஜிஸ்டிக்ஸ் தேர்ச்சி நிறைவடைந்தது!",
    "nextStepsDescription": "பணியாளர் மேலாண்மை, வாகன ஒருங்கிணைப்பு, நிகழ்நேர கண்காணிப்பு, COD வசூல் மற்றும் கூரியர் ஏஜென்சி கூட்டாண்மைகள் உட்பட முழுமையான கடைசி மைல் டெலிவரி அமைப்பில் நீங்கள் வெற்றிகரமாக தேர்ச்சி பெற்றுள்ளீர்கள். உங்கள் டெலிவரி செயல்பாடுகள் இப்போது செயல்திறன் மற்றும் வாடிக்கையாளர் திருப்திக்காக முழுமையாக மேம்படுத்தப்பட்டுள்ளன.",
    "nextStepsButton": "செலவு நிர்வாகத்திற்குத் தொடரவும்",
    "openDashboard": "டெலிவரி டாஷ்போர்டைத் திறக்கவும்",

    // Screenshot content
    "dashboardScreenshotTitle": "கடைசி மைல் டெலிவரி டாஷ்போர்டு - முக்கிய இடைமுகம்",
    "lastMileManagement": "கடைசி மைல் டெலிவரி மேலாண்மை",
    "opsControlCenter": "விரிவான டெலிவரி செயல்பாடுகள் கட்டுப்பாட்டு மையம்",
    "addPersonnel": "பணியாளர்களைச் சேர்க்கவும்",
    "routePlanner": "வழித்தட திட்டமிடுபவர்",
    "activePersonnel": "செயலில் உள்ள பணியாளர்கள்",
    "availableVehicles": "கிடைக்கக்கூடிய வாகனங்கள்",
    "outForDelivery": "டெலிவரிக்கு வெளியே",
    "deliveredToday": "இன்று டெலிவரி செய்யப்பட்டது",
    "pendingPickups": "நிலுவையில் உள்ள பிக்கப்கள்",
    "dailyPerformance": "தினசரி செயல்திறன் சுருக்கம்",
    "todaysMetrics": "இன்றைய டெலிவரி அளவீடுகள் மற்றும் செயல்திறன் குறிகாட்டிகள்",
    "onTimeDelivery": "சரியான நேரத்தில் டெலிவரி",
    "avgDeliveryTime": "சராசரி டெலிவரி நேரம்",
    "customerRating": "வாடிக்கையாளர் மதிப்பீடு",
    "dashboardProvides": "முக்கிய செயல்திறன் குறிகாட்டிகளுடன் அனைத்து டெலிவரி செயல்பாடுகளிலும் டாஷ்போர்டு நிகழ்நேரத் தெரிவுநிலையை வழங்குகிறது.",

    "addPersonnelSubStep": "A. புதிய டெலிவரி பணியாளர் படிவத்தைச் சேர்க்கவும்",
    "addPersonnelScreenshotTitle": "புதிய டெலிவரி பணியாளர்களைச் சேர்க்கவும்",
    "onboardNewPersonnel": "புதிய டெலிவரி பணியாளர்களை நியமிக்கவும்",
    "addStaffWithVerification": "முழுமையான சுயவிவரம் மற்றும் ஆவண சரிபார்ப்புடன் புதிய டெலிவரி ஊழியர்களைச் சேர்க்கவும்",
    "personalInfo": "தனிப்பட்ட தகவல்",
    "fullName": "முழு பெயர் *",
    "enterFullName": "முழுப் பெயரை உள்ளிடவும்",
    "phoneNumber": "தொலைபேசி எண் *",
    "emailAddress": "மின்னஞ்சல் முகவரி",
    "drivingLicense": "ஓட்டுநர் உரிம எண் *",
    "addressInfo": "முகவரி தகவல்",
    "streetAddress": "தெரு முகவரி",
    "city": "நகரம்",
    "pinCode": "PIN குறியீடு",
    "emergencyContact": "அவசரகால தொடர்பு",
    "contactName": "தொடர்பு பெயர்",
    "relationship": "உறவு",
    "selectRelationship": "உறவைத் தேர்ந்தெடுக்கவும்",
    "father": "தந்தை",
    "mother": "தாய்",
    "spouse": "துணை",
    "sibling": "சகோதரர்/சகோதரி",
    "other": "மற்றவை",
    "vehicleAssignment": "வாகனம் ஒதுக்குதல்",
    "assignVehicle": "வாகனத்தை ஒதுக்கு",
    "selectVehicle": "கிடைக்கக்கூடிய வாகனத்தைத் தேர்ந்தெடுக்கவும்",
    "hasOwnVehicle": "சொந்த வாகனம் உள்ளது",
    "ownVehicleNumber": "சொந்த வாகன எண்",
    "documentUpload": "ஆவண பதிவேற்றம்",
    "profilePhoto": "சுயவிவரப் படம்",
    "uploadPhoto": "படத்தைப் பதிவேற்றவும்",
    "idProof": "அடையாள அட்டை சான்று (ஆதார்)",
    "uploadIdProof": "அடையாள அட்டை சான்றைப் பதிவேற்றவும்",
    "addressProof": "முகவரி சான்று",
    "uploadAddressProof": "முகவரி சான்றைப் பதிவேற்றவும்",
    "cancel": "ரத்துசெய்",
    "addPersonnelBtn": "பணியாளர்களைச் சேர்",
    "personnelProfileSubStep": "B. பணியாளர் சுயவிவரம் மற்றும் செயல்திறன்",
    "profileScreenshotTitle": "விரிவான பணியாளர் சுயவிவரம்",
    "personnelProfileName": "பணியாளர் சுயவிவரம்: அர்ஜுன் சிங்",
    "basicInfo": "அடிப்படை தகவல்",
    "joined": "சேர்ந்தது:",
    "statusLabel": "நிலை:",
    "activeStatus": "செயலில் உள்ளது",
    "performanceMetrics": "செயல்திறன் அளவீடுகள்",
    "totalDeliveries": "மொத்த டெலிவரிகள்:",
    "successRate": "வெற்றி விகிதம்:",
    "avgRating": "சராசரி மதிப்பீடு:",
    "codCollected": "COD வசூல் செய்யப்பட்டது:",
    "onTimePercent": "சரியான நேரத்தில் %:",
    "recentDeliveryHistory": "சமீபத்திய டெலிவரி வரலாறு",
    "date": "தேதி",
    "orderId": "ஆர்டர் ஐடி",
    "codAmount": "COD தொகை",
    "rating": "மதிப்பீடு",
    "delivered": "டெலிவரி செய்யப்பட்டது",
    "paymentAndEarnings": "கட்டணம் மற்றும் வருமானம்",
    "currentBalance": "தற்போதைய இருப்பு",
    "thisMonthEarnings": "இந்த மாதம்",
    "deliveriesCount": "டெலிவரிகள்",
    "avgPerDay": "சராசரி/நாள்",
    "processPayment": "கட்டணத்தைச் செயல்படுத்து",
    "viewStatement": "அறிக்கையைக் காண்க",
    "portalAccessSubStep": "C. பணியாளர் போர்டல் அணுகல்",
    "portalSetupScreenshotTitle": "டெலிவரி பணியாளர் போர்டல் அமைப்பு",
    "portalAccessManagement": "போர்டல் அணுகல் மேலாண்மை",
    "deliveryPersonnelPortal": "டெலிவரி பணியாளர் போர்டல்",
    "portalDesc": "டெலிவரி ஊழியர்களுக்கு ஆர்டர் மேலாண்மை, வருமானத்தைக் கண்காணித்தல் மற்றும் தொடர்பு கொள்ளுதல் ஆகியவற்றுக்கான அவர்களின் பிரத்யேக போர்ட்டலுக்கு அணுகலை வழங்கவும்.",
    "portalStatusFor": "அர்ஜுன் சிங்கிற்கான போர்டல் நிலை:",
    "lastLogin": "கடைசி உள்நுழைவு:",
    "portalFeatures": "போர்டல் அம்சங்கள்:",
    "portalFeaturesAvailable": "கிடைக்கக்கூடிய போர்டல் அம்சங்கள்",

    "viewAssignedOrders": "ஒதுக்கப்பட்ட டெலிவரி ஆர்டர்களைக் காண்க",
    "updateStatusRealtime": "நிகழ்நேரத்தில் டெலிவரி நிலையை புதுப்பிக்கவும்",
    "trackEarnings": "தினசரி மற்றும் மாத வருமானத்தைக் கண்காணிக்கவும்",
    "viewPerformance": "செயல்திறன் அளவீடுகள் மற்றும் மதிப்பீடுகளைக் காண்க",
    "reportIssues": "டெலிவரி சிக்கல்கள் அல்லது பிரச்சனைகளைப் புகாரளிக்கவும்",
    "accountManagement": "கணக்கு மேலாண்மை",
    "loginEmail": "உள்நுழைவு மின்னஞ்சல்",
    "portalRole": "போர்டல் பங்கு",
    "deliveryPersonnelRole": "டெலிவரி பணியாளர்",
    "seniorDeliveryPersonnelRole": "மூத்த டெலிவரி பணியாளர்",
    "mobileAppAccess": "மொபைல் ஆப் அணுகல் செயல்படுத்தப்பட்டது",
    "resetPassword": "கடவுச்சொல்லை மீட்டமை",
    "suspendAccess": "அணுகலை நிறுத்திவை",
    "sendPortalInvite": "போர்டல் அழைப்பை அனுப்பு",

    "orderAssignmentSubStep": "A. ஆர்டர் ஒதுக்கீட்டு இடைமுகம்",
    "assignmentScreenshotTitle": "டெலிவரி பணியாளர்களுக்கு ஆர்டர்களை ஒதுக்கு",
    "assignDeliveryOrders": "டெலிவரி ஆர்டர்களை ஒதுக்கு",

    "readyForAssignment": "ஒதுக்க தயாராக உள்ளது ({count} ஆர்டர்கள்)",
    "highPriority": "உயர் முன்னுரிமை",
    "standard": "தரநிலை",
    "b2b": "B2B",
    "availablePersonnel": "கிடைக்கக்கூடிய பணியாளர்கள்",
    "currentLoad": "தற்போதைய சுமை: {count} ஆர்டர்கள்",
    "assignBtn": "ஒதுக்கு",
    "assignLaterBtn": "பின்னர் ஒதுக்கு",
    "assignmentSettings": "ஒதுக்கீட்டு அமைப்புகள்",
    "enableAutoAssign": "தானியங்கு ஒதுக்கீட்டை இயக்கு",
    "prioritizeProximity": "அருகாமையை முன்னுரிமைப்படுத்து",
    "balanceWorkload": "வேலைப்பளுவை சமநிலைப்படுத்து",
    "considerRatings": "வாடிக்கையாளர் மதிப்பீடுகளைப் பரிசீலி",
    "maxOrdersPerPerson": "ஒரு நபருக்கு அதிகபட்ச ஆர்டர்கள்",
    "bulkAssign": "மொத்தமாக ஒதுக்கு",
    "smartAutoAssign": "ஸ்மார்ட் தானியங்கு-ஒதுக்குதல்",
    "ordersSelected": "{count} ஆர்டர்கள் ஒதுக்கீட்டிற்காகத் தேர்ந்தெடுக்கப்பட்டன",

    "trackingSubStep": "B. நிகழ்நேர டெலிவரி கண்காணிப்பு",
    "trackingScreenshotTitle": "பயணத்தில் உள்ள ஆர்டர்கள் கண்காணிப்பு",
    "ordersInTransit": "பயணத்தில் உள்ள ஆர்டர்கள்",
    "deliveryBy": "டெலிவரி செய்பவர்:",
    "customerLabel": "வாடிக்கையாளர்:",
    "started": "தொடங்கியது:",
    "distance": "தூரம்:",
    "eta": "ETA:",
    "inTransitStatus": "பயணத்தில்",
    "paymentOnline": "கட்டணம்: ஆன்லைன்",
    "currentLocation": "தற்போதைய இருப்பிடம்:",
    "trackLive": "நேரலை கண்காணிப்பு",
    "lastUpdate": "கடைசி புதுப்பிப்பு: {time} க்கு முன்",
    "deliveryProgress": "டெலிவரி முன்னேற்றம்:",
    "pickedUp": "எடுத்துக்கொள்ளப்பட்டது",
    "deliveredStatus": "டெலிவரி செய்யப்பட்டது",
    "deliveryFailed": "டெலிவரி தோல்வியடைந்தது",
    "customerNotAvailable": "வாடிக்கையாளர் இல்லை",
    "retryScheduled": "மீண்டும் முயற்சி செய்ய அட்டவணைப்படுத்தப்பட்டது",
    "contactCustomer": "வாடிக்கையாளரைத் தொடர்பு கொள்ளவும்",
    "issueReported": "சிக்கல் புகார்:",

    "codCollectionSubStep": "C. COD வசூல் மேலாண்மை",
    "codScreenshotTitle": "கேஷ் ஆன் டெலிவரி வசூல் கண்காணிப்பு",
    "codReconciliation": "COD வசூல் மற்றும் சமரசம்",
    "todaysCollections": "இன்றைய வசூல்",
    "fromCodDeliveries": "{count} COD டெலிவரிகளிலிருந்து",
    "pendingHandover": "நிலுவையில் உள்ள ஒப்படைப்பு",
    "withDeliveryPersonnel": "டெலிவரி பணியாளர்களுடன்",
    "reconciled": "சமரசம் செய்யப்பட்டது",
    "depositedToStore": "கடைக்கு செலுத்தப்பட்டது",
    "codCollectionsByPersonnel": "பணியாளர்களால் COD வசூல்",
    "pendingHandoverLabel": "{amount} நிலுவையில் உள்ள ஒப்படைப்பு",
    "fullyReconciled": "✓ முழுமையாக சமரசம் செய்யப்பட்டது",
    "collectBtn": "வசூல் செய்",
    "completeStatus": "முழுமையானது",
    "codReconciliationProcess": "COD சமரச செயல்முறை",
    "collectionStep": "1. வசூல்",
    "collectionDesc": "டெலிவரி பணியாளர் டெலிவரி நேரத்தில் வாடிக்கையாளர்களிடமிருந்து COD வசூல் செய்வார்",
    "handoverStep": "2. ஒப்படைப்பு",
    "handoverDesc": "வசூல் செய்யப்பட்ட தொகையை தினசரி கடை நிர்வாகத்திடம் ஒப்படைத்தல்",
    "reconciliationStep": "3. சமரசம்",
    "reconciliationDesc": "இறுதி வைப்பு மற்றும் ஆர்டர் பதிவுகளுடன் சமரசம்",

    "agencyDashboardSubStep": "A. கூரியர் ஏஜென்சி டாஷ்போர்டு",
    "agencyScreenshotTitle": "கூரியர் ஏஜென்சி மேலாண்மை இடைமுகம்",
    "courierPartners": "கூரியர் ஏஜென்சி கூட்டாளர்கள்",
    "activeAgencies": "{count} செயலில் உள்ள ஏஜென்சிகள்",
    "outstandingPayments": "• ₹{amount} நிலுவையில் உள்ள கட்டணங்கள்",
    "addAgency": "ஏஜென்சியைச் சேர்",
    "premiumPartner": "பிரீமியம் கூட்டாளர்",
    "costEffective": "செலவு குறைந்த",
    "limitedCapacity": "வரையறுக்கப்பட்ட திறன்",
    "trialPeriod": "சோதனை காலம்",

    "assignOrders": "ஆர்டர்களை ஒதுக்கு",
    "agencyPerformanceSubStep": "B. ஏஜென்சி செயல்திறன் பகுப்பாய்வு",
    "agencyPerformanceScreenshotTitle": "கூரியர் ஏஜென்சி செயல்திறன் அளவீடுகள்",
    "agencyPerformanceDashboard": "ஏஜென்சி செயல்திறன் டாஷ்போர்டு",
    "thisWeek": "இந்த வாரம்",
    "thisMonth": "இந்த மாதம்",
    "deliveryVolumeByAgency": "ஏஜென்சி மூலம் டெலிவரி அளவு",
    "costAnalysis": "செலவு பகுப்பாய்வு",
    "totalAgencyCost": "மொத்த ஏஜென்சி செலவு:",
    "performanceComparison": "செயல்திறன் ஒப்பீடு",
    "agency": "ஏஜென்சி",
    "deliveries": "டெலிவரிகள்",
    "avgTime": "சராசரி நேரம்",
    "costPerDelivery": "டெலிவரிக்கு செலவு",

    "agencyPaymentSubStep": "C. ஏஜென்சி கட்டணம் மற்றும் சமரசம்",
    "agencyPaymentScreenshotTitle": "கூரியர் ஏஜென்சி கட்டண மேலாண்மை",
    "agencyPaymentProcessing": "ஏஜென்சி கட்டணச் செயலாக்கம்",
    "paymentDue": "செலுத்த வேண்டிய கட்டணம்:",
    "payNow": "இப்போது செலுத்து",
    "processAllPayments": "அனைத்து கட்டணங்களையும் செயல்படுத்து",
    "recentPayments": "சமீபத்திய கட்டணங்கள்",
    "paidStatus": "செலுத்தப்பட்டது"
  },
  hi: {
    "pageTitle": "लास्ट माइल लॉजिस्टिक्स मैनुअल",
    "backToManual": "मैनुअल पर वापस जाएं",
    "description": "सफल लास्ट-माइल डिलीवरी के लिए डिलीवरी कर्मियों, कूरियर एजेंसियों, रूट ऑप्टिमाइजेशन और एंड-टू-एंड लॉजिस्टिक्स संचालन के प्रबंधन के लिए पूरी गाइड।",
    "step1Title": "लास्ट माइल डिलीवरी डैशबोर्ड",
    "step1Intro": "लास्ट माइल डिलीवरी डैशबोर्ड सभी डिलीवरी ऑपरेशंस पर व्यापक नियंत्रण प्रदान करता है, जिसमें कर्मियों का प्रबंधन, वाहन ट्रैकिंग, रूट ऑप्टिमाइजेशन और डिलीवरी प्रदर्शन विश्लेषण शामिल हैं।",
    "step2Title": "डिलीवरी कर्मियों को जोड़ना और प्रबंधित करना",
    "step2Intro": "कुशल डिलीवरी संचालन ठीक से ऑनबोर्ड किए गए और प्रबंधित कर्मियों के साथ शुरू होते हैं। सिस्टम नए डिलीवरी स्टाफ को जोड़ने, उनके दस्तावेजों का प्रबंधन करने, वाहनों को असाइन करने और प्रदर्शन को ट्रैक करने के लिए व्यापक उपकरण प्रदान करता है।",
    "step3Title": "ऑर्डर असाइनमेंट और डिलीवरी ट्रैकिंग",
    "step3Intro": "एक बार जब ऑर्डर डिस्पैच के लिए तैयार हो जाते हैं, तो उन्हें उपलब्ध डिलीवरी कर्मियों को कुशलता से असाइन करने की आवश्यकता होती है। सिस्टम बुद्धिमान असाइनमेंट एल्गोरिदम, रीयल-टाइम ट्रैकिंग और व्यापक डिलीवरी प्रबंधन प्रदान करता है।",
    "step4Title": "कूरियर एजेंसी प्रबंधन",
    "step4Intro": "विस्तारित डिलीवरी क्षमता और कवरेज के लिए, RetailOS थर्ड-पार्टी कूरियर एजेंसियों के साथ एकीकृत होता है। यह सिस्टम एजेंसी पार्टनरशिप, सेवा स्तर के समझौतों, प्रदर्शन ट्रैकिंग और लागत ऑप्टिमाइजेशन का प्रबंधन करता है।",
    "nextStepsTitle": "लास्ट-माइल लॉजिस्टिक्स मास्टरी पूरी हुई!",
    "nextStepsDescription": "आपने कर्मियों के प्रबंधन, वाहन समन्वय, रीयल-टाइम ट्रैकिंग, सीओडी संग्रह और कूरियर एजेंसी भागीदारी सहित संपूर्ण लास्ट-माइल डिलीवरी सिस्टम में सफलतापूर्वक महारत हासिल कर ली है। आपके डिलीवरी ऑपरेशन अब दक्षता और ग्राहक संतुष्टि के लिए पूरी तरह से अनुकूलित हैं।",
    "nextStepsButton": "व्यय प्रबंधन के लिए जारी रखें",
    "openDashboard": "डिलीवरी डैशबोर्ड खोलें",

    // Screenshot content
    "dashboardScreenshotTitle": "लास्ट माइल डिलीवरी डैशबोर्ड - मुख्य इंटरफ़ेस",
    "lastMileManagement": "लास्ट माइल डिलीवरी प्रबंधन",
    "opsControlCenter": "व्यापक डिलीवरी संचालन नियंत्रण केंद्र",
    "addPersonnel": "कर्मियों को जोड़ें",
    "routePlanner": "रूट प्लानर",
    "activePersonnel": "सक्रिय कर्मी",
    "availableVehicles": "उपलब्ध वाहन",
    "outForDelivery": "डिलीवरी के लिए बाहर",
    "deliveredToday": "आज डिलीवर किया गया",
    "pendingPickups": "लंबित पिकअप",
    "dailyPerformance": "दैनिक प्रदर्शन सारांश",
    "todaysMetrics": "आज के डिलीवरी मेट्रिक्स और दक्षता संकेतक",
    "onTimeDelivery": "समय पर डिलीवरी",
    "avgDeliveryTime": "औसत डिलीवरी समय",
    "customerRating": "ग्राहक रेटिंग",
    "dashboardProvides": "डैशबोर्ड प्रमुख प्रदर्शन संकेतकों के साथ सभी डिलीवरी ऑपरेशंस में रीयल-टाइम दृश्यता प्रदान करता है।",

    "addPersonnelSubStep": "A. नया डिलीवरी कर्मी फॉर्म जोड़ें",
    "addPersonnelScreenshotTitle": "नए डिलीवरी कर्मियों को जोड़ें",
    "onboardNewPersonnel": "नए डिलीवरी कर्मियों को ऑनबोर्ड करें",
    "addStaffWithVerification": "पूर्ण प्रोफ़ाइल और दस्तावेज़ सत्यापन के साथ नए डिलीवरी स्टाफ को जोड़ें",
    "personalInfo": "व्यक्तिगत जानकारी",
    "fullName": "पूरा नाम *",
    "enterFullName": "पूरा नाम दर्ज करें",
    "phoneNumber": "फ़ोन नंबर *",
    "emailAddress": "ईमेल पता",
    "drivingLicense": "ड्राइविंग लाइसेंस नंबर *",
    "addressInfo": "पते की जानकारी",
    "streetAddress": "सड़क का पता",
    "city": "शहर",
    "pinCode": "पिन कोड",
    "emergencyContact": "आपातकालीन संपर्क",
    "contactName": "संपर्क का नाम",
    "relationship": "संबंध",
    "selectRelationship": "संबंध चुनें",
    "father": "पिता",
    "mother": "माता",
    "spouse": "पति/पत्नी",
    "sibling": "भाई/बहन",
    "other": "अन्य",
    "vehicleAssignment": "वाहन असाइनमेंट",
    "assignVehicle": "वाहन असाइन करें",
    "selectVehicle": "उपलब्ध वाहन चुनें",
    "hasOwnVehicle": "अपना वाहन है",
    "ownVehicleNumber": "अपना वाहन नंबर",
    "documentUpload": "दस्तावेज़ अपलोड",
    "profilePhoto": "प्रोफ़ाइल फोटो",
    "uploadPhoto": "फोटो अपलोड करें",
    "idProof": "आईडी प्रूफ (आधार)",
    "uploadIdProof": "आईडी प्रूफ अपलोड करें",
    "addressProof": "पते का प्रमाण",
    "uploadAddressProof": "पते का प्रमाण अपलोड करें",
    "cancel": "रद्द करें",
    "addPersonnelBtn": "कर्मी जोड़ें",
    "personnelProfileSubStep": "B. कार्मिक प्रोफ़ाइल और प्रदर्शन",
    "profileScreenshotTitle": "विस्तृत कार्मिक प्रोफ़ाइल",
    "personnelProfileName": "कार्मिक प्रोफ़ाइल: अर्जुन सिंह",
    "basicInfo": "मूलभूत जानकारी",
    "joined": "शामिल हुआ:",
    "statusLabel": "स्थिति:",
    "activeStatus": "सक्रिय",
    "performanceMetrics": "प्रदर्शन मेट्रिक्स",
    "totalDeliveries": "कुल डिलीवरी:",
    "successRate": "सफलता दर:",
    "avgRating": "औसत रेटिंग:",
    "codCollected": "सीओडी एकत्र किया गया:",
    "onTimePercent": "समय पर %:",
    "recentDeliveryHistory": "हाल का डिलीवरी इतिहास",
    "date": "दिनांक",
    "orderId": "ऑर्डर आईडी",
    "codAmount": "सीओडी राशि",
    "rating": "रेटिंग",
    "delivered": "डिलीवर किया गया",
    "paymentAndEarnings": "भुगतान और कमाई",
    "currentBalance": "वर्तमान शेष",
    "thisMonthEarnings": "इस महीने",
    "deliveriesCount": "डिलीवरी",
    "avgPerDay": "औसत/दिन",
    "processPayment": "भुगतान संसाधित करें",
    "viewStatement": "विवरण देखें",
    "portalAccessSubStep": "C. कार्मिक पोर्टल एक्सेस",
    "portalSetupScreenshotTitle": "डिलीवरी कार्मिक पोर्टल सेटअप",
    "portalAccessManagement": "पोर्टल एक्सेस प्रबंधन",
    "deliveryPersonnelPortal": "डिलीवरी कार्मिक पोर्टल",
    "portalDesc": "डिलीवरी स्टाफ को ऑर्डर प्रबंधन, कमाई ट्रैकिंग और संचार के लिए उनके समर्पित पोर्टल तक पहुंच प्रदान करें।",
    "portalStatusFor": "अर्जुन सिंह के लिए पोर्टल की स्थिति:",
    "lastLogin": "अंतिम लॉगिन:",
    "portalFeatures": "पोर्टल सुविधाएँ:",
    "portalFeaturesAvailable": "उपलब्ध पोर्टल सुविधाएँ",

    "viewAssignedOrders": "असाइन किए गए डिलीवरी ऑर्डर देखें",
    "updateStatusRealtime": "रीयल-टाइम में डिलीवरी की स्थिति अपडेट करें",
    "trackEarnings": "दैनिक और मासिक कमाई को ट्रैक करें",
    "viewPerformance": "प्रदर्शन मेट्रिक्स और रेटिंग देखें",
    "reportIssues": "डिलीवरी के मुद्दों या समस्याओं की रिपोर्ट करें",
    "accountManagement": "खाता प्रबंधन",
    "loginEmail": "लॉगिन ईमेल",
    "portalRole": "पोर्टल भूमिका",
    "deliveryPersonnelRole": "डिलीवरी कर्मी",
    "seniorDeliveryPersonnelRole": "वरिष्ठ डिलीवरी कर्मी",
    "mobileAppAccess": "मोबाइल ऐप एक्सेस सक्षम",
    "resetPassword": "पासवर्ड रीसेट करें",
    "suspendAccess": "एक्सेस निलंबित करें",
    "sendPortalInvite": "पोर्टल आमंत्रण भेजें",

    "orderAssignmentSubStep": "A. ऑर्डर असाइनमेंट इंटरफ़ेस",
    "assignmentScreenshotTitle": "डिलीवरी कर्मियों को ऑर्डर असाइन करें",
    "assignDeliveryOrders": "डिलीवरी ऑर्डर असाइन करें",

    "readyForAssignment": "असाइनमेंट के लिए तैयार ({count} ऑर्डर)",
    "highPriority": "उच्च प्राथमिकता",
    "standard": "मानक",
    "b2b": "बी2बी",
    "availablePersonnel": "उपलब्ध कर्मी",
    "currentLoad": "वर्तमान भार: {count} ऑर्डर",
    "assignBtn": "असाइन करें",
    "assignLaterBtn": "बाद में असाइन करें",
    "assignmentSettings": "असाइनमेंट सेटिंग्स",
    "enableAutoAssign": "ऑटो-असाइनमेंट सक्षम करें",
    "prioritizeProximity": "निकटता को प्राथमिकता दें",
    "balanceWorkload": "कार्यभार संतुलित करें",
    "considerRatings": "ग्राहक रेटिंग पर विचार करें",
    "maxOrdersPerPerson": "प्रति व्यक्ति अधिकतम ऑर्डर",
    "bulkAssign": "बल्क असाइन करें",
    "smartAutoAssign": "स्मार्ट ऑटो-असाइन",
    "ordersSelected": "{count} ऑर्डर असाइनमेंट के लिए चुने गए",

    "trackingSubStep": "B. रीयल-टाइम डिलीवरी ट्रैकिंग",
    "trackingScreenshotTitle": "इन-ट्रांजिट ऑर्डर ट्रैकिंग",
    "ordersInTransit": "इन-ट्रांजिट ऑर्डर",
    "deliveryBy": "द्वारा डिलीवरी:",
    "customerLabel": "ग्राहक:",
    "started": "शुरू हुआ:",
    "distance": "दूरी:",
    "eta": "ईटीए:",
    "inTransitStatus": "इन-ट्रांजिट",
    "paymentOnline": "भुगतान: ऑनलाइन",
    "currentLocation": "वर्तमान स्थान:",
    "trackLive": "लाइव ट्रैक करें",
    "lastUpdate": "अंतिम अपडेट: {time} पहले",
    "deliveryProgress": "डिलीवरी प्रगति:",
    "pickedUp": "पिकअप किया गया",
    "deliveredStatus": "डिलीवर किया गया",
    "deliveryFailed": "डिलीवरी विफल",
    "customerNotAvailable": "ग्राहक उपलब्ध नहीं है",
    "retryScheduled": "पुन: प्रयास निर्धारित",
    "contactCustomer": "ग्राहक से संपर्क करें",
    "issueReported": "रिपोर्ट किया गया मुद्दा:",

    "codCollectionSubStep": "C. सीओडी संग्रह प्रबंधन",
    "codScreenshotTitle": "कैश ऑन डिलीवरी कलेक्शन ट्रैकिंग",
    "codReconciliation": "सीओडी संग्रह और सुलह",
    "todaysCollections": "आज का संग्रह",
    "fromCodDeliveries": "{count} सीओडी डिलीवरी से",
    "pendingHandover": "लंबित हैंडओवर",
    "withDeliveryPersonnel": "डिलीवरी कर्मियों के साथ",
    "reconciled": "सुलह",
    "depositedToStore": "स्टोर में जमा किया गया",
    "codCollectionsByPersonnel": "कर्मियों द्वारा सीओडी संग्रह",
    "pendingHandoverLabel": "{amount} लंबित हैंडओवर",
    "fullyReconciled": "✓ पूरी तरह से सुलह",
    "collectBtn": "संग्रह करें",
    "completeStatus": "पूरा",
    "codReconciliationProcess": "सीओडी सुलह प्रक्रिया",
    "collectionStep": "1. संग्रह",
    "collectionDesc": "कर्मी डिलीवरी के दौरान ग्राहकों से सीओडी एकत्र करता है",
    "handoverStep": "2. हैंडओवर",
    "handoverDesc": "एकत्रित राशियों का दैनिक हैंडओवर स्टोर प्रबंधन को",
    "reconciliationStep": "3. सुलह",
    "reconciliationDesc": "अंतिम जमा और ऑर्डर रिकॉर्ड के साथ सुलह",

    "agencyDashboardSubStep": "A. कूरियर एजेंसी डैशबोर्ड",
    "agencyScreenshotTitle": "कूरियर एजेंसी प्रबंधन इंटरफ़ेस",
    "courierPartners": "कूरियर एजेंसी पार्टनर",
    "activeAgencies": "{count} सक्रिय एजेंसियां",
    "outstandingPayments": "• ₹{amount} बकाया भुगतान",
    "addAgency": "एजेंसी जोड़ें",
    "premiumPartner": "प्रीमियम पार्टनर",
    "costEffective": "लागत प्रभावी",
    "limitedCapacity": "सीमित क्षमता",
    "trialPeriod": "परीक्षण अवधि",

    "assignOrders": "ऑर्डर असाइन करें",
    "agencyPerformanceSubStep": "B. एजेंसी प्रदर्शन विश्लेषण",
    "agencyPerformanceScreenshotTitle": "कूरियर एजेंसी प्रदर्शन मेट्रिक्स",
    "agencyPerformanceDashboard": "एजेंसी प्रदर्शन डैशबोर्ड",
    "thisWeek": "इस सप्ताह",
    "thisMonth": "इस महीने",
    "deliveryVolumeByAgency": "एजेंसी द्वारा डिलीवरी वॉल्यूम",
    "costAnalysis": "लागत विश्लेषण",
    "totalAgencyCost": "कुल एजेंसी लागत:",
    "performanceComparison": "प्रदर्शन तुलना",
    "agency": "एजेंसी",
    "deliveries": "डिलीवरी",
    "avgTime": "औसत समय",
    "costPerDelivery": "लागत/डिलीवरी",

    "agencyPaymentSubStep": "C. एजेंसी भुगतान और सुलह",
    "agencyPaymentScreenshotTitle": "कूरियर एजेंसी भुगतान प्रबंधन",
    "agencyPaymentProcessing": "एजेंसी भुगतान प्रसंस्करण",
    "paymentDue": "भुगतान देय:",
    "payNow": "अभी भुगतान करें",
    "processAllPayments": "सभी भुगतानों को संसाधित करें",
    "recentPayments": "हाल के भुगतान",
    "paidStatus": "भुगतान किया गया"
  },
  ml: {
    "pageTitle": "ലാസ്റ്റ് മൈൽ ലോജിസ്റ്റിക്സ് മാനുവൽ",
    "backToManual": "മാനുവലിലേക്ക് തിരികെ പോകുക",
    "description": "വിജയകരമായ ലാസ്റ്റ്-മൈൽ ഡെലിവറിക്കായി ഡെലിവറി പേഴ്സണൽ, കൊറിയർ ഏജൻസികൾ, റൂട്ട് ഒപ്റ്റിമൈസേഷൻ, എൻഡ്-ടു-എൻഡ് ലോജിസ്റ്റിക്സ് പ്രവർത്തനങ്ങൾ എന്നിവ കൈകാര്യം ചെയ്യുന്നതിനുള്ള ഒരു സമ്പൂർണ്ണ ഗൈഡ്.",
    "step1Title": "ലാസ്റ്റ് മൈൽ ഡെലിവറി ഡാഷ്ബോർഡ്",
    "step1Intro": "ഡെലിവറി പേഴ്സണൽ മാനേജ്മെന്റ്, വാഹന ട്രാക്കിംഗ്, റൂട്ട് ഒപ്റ്റിമൈസേഷൻ, ഡെലിവറി പെർഫോമൻസ് അനലിറ്റിക്സ് എന്നിവയുൾപ്പെടെ എല്ലാ ഡെലിവറി പ്രവർത്തനങ്ങൾക്കും ലാസ്റ്റ് മൈൽ ഡെലിവറി ഡാഷ്ബോർഡ് സമഗ്രമായ നിയന്ത്രണം നൽകുന്നു.",
    "step2Title": "ഡെലിവറി പേഴ്സണലിനെ ചേർക്കുന്നതും കൈകാര്യം ചെയ്യുന്നതും",
    "step2Intro": "കാര്യക്ഷമമായ ഡെലിവറി പ്രവർത്തനങ്ങൾ ശരിയായ രീതിയിൽ ഓൺബോർഡ് ചെയ്യുകയും കൈകാര്യം ചെയ്യുകയും ചെയ്യുന്ന പേഴ്സണലിൽ നിന്ന് ആരംഭിക്കുന്നു. പുതിയ ഡെലിവറി സ്റ്റാഫിനെ ചേർക്കുന്നതിനും, അവരുടെ രേഖകൾ കൈകാര്യം ചെയ്യുന്നതിനും, വാഹനങ്ങൾ അസൈൻ ചെയ്യുന്നതിനും, പ്രകടനം ട്രാക്ക് ചെയ്യുന്നതിനും സിസ്റ്റം സമഗ്രമായ ടൂളുകൾ നൽകുന്നു.",
    "step3Title": "ഓർഡർ അസൈൻമെന്റും ഡെലിവറി ട്രാക്കിംഗും",
    "step3Intro": "ഓർഡറുകൾ അയയ്ക്കാൻ തയ്യാറായാൽ, അവ ലഭ്യമായ ഡെലിവറി പേഴ്സണലിന് കാര്യക്ഷമമായി അസൈൻ ചെയ്യേണ്ടതുണ്ട്. സിസ്റ്റം ഇന്റലിജന്റ് അസൈൻമെന്റ് അൽഗോരിതങ്ങൾ, തത്സമയ ട്രാക്കിംഗ്, സമഗ്രമായ ഡെലിവറി മാനേജ്മെന്റ് എന്നിവ നൽകുന്നു.",
    "step4Title": "കൊറിയർ ഏജൻസി മാനേജ്മെന്റ്",
    "step4Intro": "വിപുലീകരിച്ച ഡെലിവറി കപ്പാസിറ്റിക്കും കവറേജിനും വേണ്ടി, റീട്ടെയിൽ ഒഎസ് മൂന്നാം കക്ഷി കൊറിയർ ഏജൻസികളുമായി സംയോജിക്കുന്നു. ഈ സിസ്റ്റം ഏജൻസി പങ്കാളിത്തം, സേവന നിലവാര കരാറുകൾ, പ്രകടന ട്രാക്കിംഗ്, ചെലവ് ഒപ്റ്റിമൈസേഷൻ എന്നിവ കൈകാര്യം ചെയ്യുന്നു.",
    "nextStepsTitle": "ലാസ്റ്റ്-മൈൽ ലോജിസ്റ്റിക്സ് മാസ്റ്ററി പൂർത്തിയായി!",
    "nextStepsDescription": "പേഴ്സണൽ മാനേജ്മെന്റ്, വാഹന കോർഡിനേഷൻ, തത്സമയ ട്രാക്കിംഗ്, സിഒഡി കളക്ഷൻ, കൊറിയർ ഏജൻസി പങ്കാളിത്തം എന്നിവ ഉൾപ്പെടുന്ന സമ്പൂർണ്ണ ലാസ്റ്റ്-മൈൽ ഡെലിവറി സിസ്റ്റത്തിൽ നിങ്ങൾ വിജയകരമായി പ്രാവീണ്യം നേടിയിരിക്കുന്നു. നിങ്ങളുടെ ഡെലിവറി പ്രവർത്തനങ്ങൾ ഇപ്പോൾ കാര്യക്ഷമതയ്ക്കും ഉപഭോക്തൃ സംതൃപ്തിക്കും വേണ്ടി പൂർണ്ണമായും ഒപ്റ്റിമൈസ് ചെയ്യപ്പെട്ടിരിക്കുന്നു.",
    "nextStepsButton": "എക്സ്പെൻസ് മാനേജ്മെന്റിലേക്ക് തുടരുക",
    "openDashboard": "ഡെലിവറി ഡാഷ്ബോർഡ് തുറക്കുക",

    // Screenshot content
    "dashboardScreenshotTitle": "ലാസ്റ്റ് മൈൽ ഡെലിവറി ഡാഷ്ബോർഡ് - പ്രധാന ഇന്റർഫേസ്",
    "lastMileManagement": "ലാസ്റ്റ് മൈൽ ഡെലിവറി മാനേജ്മെന്റ്",
    "opsControlCenter": "സമഗ്രമായ ഡെലിവറി പ്രവർത്തന നിയന്ത്രണ കേന്ദ്രം",
    "addPersonnel": "പേഴ്സണലിനെ ചേർക്കുക",
    "routePlanner": "റൂട്ട് പ്ലാനർ",
    "activePersonnel": "സജീവ പേഴ്സണൽ",
    "availableVehicles": "ലഭ്യമായ വാഹനങ്ങൾ",
    "outForDelivery": "ഡെലിവറിക്കായി പുറത്ത്",
    "deliveredToday": "ഇന്ന് ഡെലിവറി ചെയ്തവ",
    "pendingPickups": "തീർപ്പാക്കാത്ത പിക്കപ്പുകൾ",
    "dailyPerformance": "പ്രതിദിന പ്രകടന സംഗ്രഹം",
    "todaysMetrics": "ഇന്നത്തെ ഡെലിവറി മെട്രിക്സും കാര്യക്ഷമത സൂചകങ്ങളും",
    "onTimeDelivery": "സമയബന്ധിത ഡെലിവറി",
    "avgDeliveryTime": "ശരാശരി ഡെലിവറി സമയം",
    "customerRating": "ഉപഭോക്തൃ റേറ്റിംഗ്",
    "dashboardProvides": "പ്രധാന പ്രകടന സൂചകങ്ങൾ ഉപയോഗിച്ച് എല്ലാ ഡെലിവറി പ്രവർത്തനങ്ങളിലും ഡാഷ്ബോർഡ് തത്സമയ ദൃശ്യപരത നൽകുന്നു.",

    "addPersonnelSubStep": "A. പുതിയ ഡെലിവറി പേഴ്സണൽ ഫോം ചേർക്കുക",
    "addPersonnelScreenshotTitle": "പുതിയ ഡെലിവറി പേഴ്സണലിനെ ചേർക്കുക",
    "onboardNewPersonnel": "പുതിയ ഡെലിവറി പേഴ്സണലിനെ ഓൺബോർഡ് ചെയ്യുക",
    "addStaffWithVerification": "പൂർണ്ണമായ പ്രൊഫൈലും രേഖാ പരിശോധനയുമുള്ള പുതിയ ഡെലിവറി സ്റ്റാഫിനെ ചേർക്കുക",
    "personalInfo": "വ്യക്തിഗത വിവരങ്ങൾ",
    "fullName": "പൂർണ്ണമായ പേര് *",
    "enterFullName": "പൂർണ്ണമായ പേര് നൽകുക",
    "phoneNumber": "ഫോൺ നമ്പർ *",
    "emailAddress": "ഇമെയിൽ വിലാസം",
    "drivingLicense": "ഡ്രൈവിംഗ് ലൈസൻസ് നമ്പർ *",
    "addressInfo": "വിലാസം വിവരങ്ങൾ",
    "streetAddress": "തെരുവ് വിലാസം",
    "city": "നഗരം",
    "pinCode": "പിൻ കോഡ്",
    "emergencyContact": "അടിയന്തര കോൺടാക്റ്റ്",
    "contactName": "കോൺടാക്റ്റ് പേര്",
    "relationship": "ബന്ധം",
    "selectRelationship": "ബന്ധം തിരഞ്ഞെടുക്കുക",
    "father": "അച്ഛൻ",
    "mother": "അമ്മ",
    "spouse": "പങ്കാളി",
    "sibling": "സഹോദരൻ/സഹോദരി",
    "other": "മറ്റുള്ളവ",
    "vehicleAssignment": "വാഹനം അസൈൻമെന്റ്",
    "assignVehicle": "വാഹനം അസൈൻ ചെയ്യുക",
    "selectVehicle": "ലഭ്യമായ വാഹനം തിരഞ്ഞെടുക്കുക",
    "hasOwnVehicle": "സ്വന്തമായി വാഹനം ഉണ്ട്",
    "ownVehicleNumber": "സ്വന്തം വാഹന നമ്പർ",
    "documentUpload": "രേഖകൾ അപ്ലോഡ് ചെയ്യുക",
    "profilePhoto": "പ്രൊഫൈൽ ഫോട്ടോ",
    "uploadPhoto": "ഫോട്ടോ അപ്ലോഡ് ചെയ്യുക",
    "idProof": "ഐഡി പ്രൂഫ് (ആധാർ)",
    "uploadIdProof": "ഐഡി പ്രൂഫ് അപ്ലോഡ് ചെയ്യുക",
    "addressProof": "വിലാസ രേഖ",
    "uploadAddressProof": "വിലാസ രേഖ അപ്ലോഡ് ചെയ്യുക",
    "cancel": "റദ്ദാക്കുക",
    "addPersonnelBtn": "പേഴ്സണലിനെ ചേർക്കുക",
    "personnelProfileSubStep": "B. പേഴ്സണൽ പ്രൊഫൈലും പ്രകടനവും",
    "profileScreenshotTitle": "വിശദമായ പേഴ്സണൽ പ്രൊഫൈൽ",
    "personnelProfileName": "പേഴ്സണൽ പ്രൊഫൈൽ: അർജുൻ സിംഗ്",
    "basicInfo": "അടിസ്ഥാന വിവരങ്ങൾ",
    "joined": "ചേർന്നത്:",
    "statusLabel": "നില:",
    "activeStatus": "സജീവം",
    "performanceMetrics": "പ്രകടന മെട്രിക്സ്",
    "totalDeliveries": "മൊത്തം ഡെലിവറികൾ:",
    "successRate": "വിജയ നിരക്ക്:",
    "avgRating": "ശരാശരി റേറ്റിംഗ്:",
    "codCollected": "സിഒഡി ശേഖരിച്ചത്:",
    "onTimePercent": "സമയബന്ധിത %:",
    "recentDeliveryHistory": "ഏറ്റവും പുതിയ ഡെലിവറി ചരിത്രം",
    "date": "തീയതി",
    "orderId": "ഓർഡർ ഐഡി",
    "codAmount": "സിഒഡി തുക",
    "rating": "റേറ്റിംഗ്",
    "delivered": "ഡെലിവറി ചെയ്തു",
    "paymentAndEarnings": "പേയ്മെന്റും വരുമാനവും",
    "currentBalance": "നിലവിലെ ബാലൻസ്",
    "thisMonthEarnings": "ഈ മാസം",
    "deliveriesCount": "ഡെലിവറികൾ",
    "avgPerDay": "ശരാശരി/ദിവസം",
    "processPayment": "പേയ്മെന്റ് പ്രോസസ്സ് ചെയ്യുക",
    "viewStatement": "സ്റ്റേറ്റ്മെന്റ് കാണുക",
    "portalAccessSubStep": "C. പേഴ്സണൽ പോർട്ടൽ ആക്സസ്",
    "portalSetupScreenshotTitle": "ഡെലിവറി പേഴ്സണൽ പോർട്ടൽ സജ്ജീകരണം",
    "portalAccessManagement": "പോർട്ടൽ ആക്സസ് മാനേജ്മെന്റ്",
    "deliveryPersonnelPortal": "ഡെലിവറി പേഴ്സണൽ പോർട്ടൽ",
    "portalDesc": "ഓർഡർ മാനേജ്മെന്റ്, വരുമാനം ട്രാക്കിംഗ്, ആശയവിനിമയം എന്നിവയ്ക്കായി ഡെലിവറി സ്റ്റാഫിന് അവരുടെ പ്രത്യേക പോർട്ടലിലേക്ക് ആക്സസ് നൽകുക.",
    "portalStatusFor": "അർജുൻ സിംഗിനായുള്ള പോർട്ടൽ നില:",
    "lastLogin": "അവസാനമായി ലോഗിൻ ചെയ്തത്:",
    "portalFeatures": "പോർട്ടൽ സവിശേഷതകൾ:",
    "portalFeaturesAvailable": "ലഭ്യമായ പോർട്ടൽ സവിശേഷതകൾ",

    "viewAssignedOrders": "അസൈൻ ചെയ്ത ഡെലിവറി ഓർഡറുകൾ കാണുക",
    "updateStatusRealtime": "തത്സമയം ഡെലിവറി നില അപ്ഡേറ്റ് ചെയ്യുക",
    "trackEarnings": "പ്രതിദിന, പ്രതിമാസ വരുമാനം ട്രാക്ക് ചെയ്യുക",
    "viewPerformance": "പ്രകടന മെട്രിക്സും റേറ്റിംഗുകളും കാണുക",
    "reportIssues": "ഡെലിവറി പ്രശ്നങ്ങൾ അല്ലെങ്കിൽ പ്രശ്നങ്ങൾ റിപ്പോർട്ട് ചെയ്യുക",
    "accountManagement": "അക്കൗണ്ട് മാനേജ്മെന്റ്",
    "loginEmail": "ലോഗിൻ ഇമെയിൽ",
    "portalRole": "പോർട്ടൽ റോൾ",
    "deliveryPersonnelRole": "ഡെലിവറി പേഴ്സണൽ",
    "seniorDeliveryPersonnelRole": "സീനിയർ ഡെലിവറി പേഴ്സണൽ",
    "mobileAppAccess": "മൊബൈൽ ആപ്പ് ആക്സസ് പ്രവർത്തനക്ഷമമാക്കി",
    "resetPassword": "പാസ്വേഡ് റീസെറ്റ് ചെയ്യുക",
    "suspendAccess": "ആക്സസ് സസ്പെൻഡ് ചെയ്യുക",
    "sendPortalInvite": "പോർട്ടൽ ഇൻവൈറ്റ് അയയ്ക്കുക",

    "orderAssignmentSubStep": "A. ഓർഡർ അസൈൻമെന്റ് ഇന്റർഫേസ്",
    "assignmentScreenshotTitle": "ഡെലിവറി പേഴ്സണലിന് ഓർഡറുകൾ അസൈൻ ചെയ്യുക",
    "assignDeliveryOrders": "ഡെലിവറി ഓർഡറുകൾ അസൈൻ ചെയ്യുക",

    "readyForAssignment": "അസൈൻമെന്റിനായി തയ്യാറാണ് ({count} ഓർഡറുകൾ)",
    "highPriority": "ഉയർന്ന മുൻഗണന",
    "standard": "സ്റ്റാൻഡേർഡ്",
    "b2b": "ബി2ബി",
    "availablePersonnel": "ലഭ്യമായ പേഴ്സണൽ",
    "currentLoad": "നിലവിലെ ലോഡ്: {count} ഓർഡറുകൾ",
    "assignBtn": "അസൈൻ ചെയ്യുക",
    "assignLaterBtn": "പിന്നീട് അസൈൻ ചെയ്യുക",
    "assignmentSettings": "അസൈൻമെന്റ് ക്രമീകരണങ്ങൾ",
    "enableAutoAssign": "ഓട്ടോ-അസൈൻമെന്റ് പ്രവർത്തനക്ഷമമാക്കുക",
    "prioritizeProximity": "അടുപ്പത്തിന് മുൻഗണന നൽകുക",
    "balanceWorkload": "ജോലിഭാരം തുലനം ചെയ്യുക",
    "considerRatings": "ഉപഭോക്തൃ റേറ്റിംഗുകൾ പരിഗണിക്കുക",
    "maxOrdersPerPerson": "ഒരു വ്യക്തിക്ക് പരമാവധി ഓർഡറുകൾ",
    "bulkAssign": "ബൾക്ക് അസൈൻ ചെയ്യുക",
    "smartAutoAssign": "സ്മാർട്ട് ഓട്ടോ-അസൈൻ",
    "ordersSelected": "{count} ഓർഡറുകൾ അസൈൻമെന്റിനായി തിരഞ്ഞെടുത്തു",

    "trackingSubStep": "B. തത്സമയ ഡെലിവറി ട്രാക്കിംഗ്",
    "trackingScreenshotTitle": "ട്രാൻസിറ്റിലുള്ള ഓർഡറുകൾ ട്രാക്ക് ചെയ്യുന്നു",
    "ordersInTransit": "ട്രാൻസിറ്റിലുള്ള ഓർഡറുകൾ",
    "deliveryBy": "ഡെലിവറി ചെയ്യുന്നത്:",
    "customerLabel": "ഉപഭോക്താവ്:",
    "started": "ആരംഭിച്ചത്:",
    "distance": "ദൂരം:",
    "eta": "ETA:",
    "inTransitStatus": "ട്രാൻസിറ്റിൽ",
    "paymentOnline": "പേയ്മെന്റ്: ഓൺലൈൻ",
    "currentLocation": "നിലവിലെ സ്ഥലം:",
    "trackLive": "തത്സമയം ട്രാക്ക് ചെയ്യുക",
    "lastUpdate": "അവസാനമായി അപ്ഡേറ്റ് ചെയ്തത്: {time} മുമ്പ്",
    "deliveryProgress": "ഡെലിവറി പുരോഗതി:",
    "pickedUp": "പിക്കപ്പ് ചെയ്തു",
    "deliveredStatus": "ഡെലിവറി ചെയ്തു",
    "deliveryFailed": "ഡെലിവറി പരാജയപ്പെട്ടു",
    "customerNotAvailable": "ഉപഭോക്താവിനെ ലഭ്യമല്ല",
    "retryScheduled": "റീട്രൈ ഷെഡ്യൂൾ ചെയ്തു",
    "contactCustomer": "ഉപഭോക്താവിനെ ബന്ധപ്പെടുക",
    "issueReported": "റിപ്പോർട്ട് ചെയ്ത പ്രശ്നം:",

    "codCollectionSubStep": "C. സിഒഡി കളക്ഷൻ മാനേജ്മെന്റ്",
    "codScreenshotTitle": "ക്യാഷ് ഓൺ ഡെലിവറി കളക്ഷൻ ട്രാക്കിംഗ്",
    "codReconciliation": "സിഒഡി കളക്ഷൻ & റീകൺസിലിയേഷൻ",
    "todaysCollections": "ഇന്നത്തെ കളക്ഷനുകൾ",
    "fromCodDeliveries": "{count} സിഒഡി ഡെലിവറികളിൽ നിന്ന്",
    "pendingHandover": "തീർപ്പാക്കാത്ത കൈമാറ്റം",
    "withDeliveryPersonnel": "ഡെലിവറി പേഴ്സണലിനൊപ്പം",
    "reconciled": "റീകൺസൈൽ ചെയ്തു",
    "depositedToStore": "സ്റ്റോറിൽ നിക്ഷേപിച്ചു",
    "codCollectionsByPersonnel": "പേഴ്സണൽ വഴി സിഒഡി കളക്ഷനുകൾ",
    "pendingHandoverLabel": "{amount} തീർപ്പാക്കാത്ത കൈമാറ്റം",
    "fullyReconciled": "✓ പൂർണ്ണമായും റീകൺസൈൽ ചെയ്തു",
    "collectBtn": "ശേഖരിക്കുക",
    "completeStatus": "പൂർത്തിയായി",
    "codReconciliationProcess": "സിഒഡി റീകൺസിലിയേഷൻ പ്രോസസ്",
    "collectionStep": "1. കളക്ഷൻ",
    "collectionDesc": "ഡെലിവറി സമയത്ത് പേഴ്സണൽ ഉപഭോക്താക്കളിൽ നിന്ന് സിഒഡി ശേഖരിക്കുന്നു",
    "handoverStep": "2. കൈമാറ്റം",
    "handoverDesc": "ശേഖരിച്ച തുകകൾ സ്റ്റോർ മാനേജ്മെന്റിന് ദിവസവും കൈമാറുന്നു",
    "reconciliationStep": "3. റീകൺസിലിയേഷൻ",
    "reconciliationDesc": "അവസാനത്തെ നിക്ഷേപവും ഓർഡർ രേഖകളുമായി റീകൺസിലിയേഷനും",

    "agencyDashboardSubStep": "A. കൊറിയർ ഏജൻസി ഡാഷ്ബോർഡ്",
    "agencyScreenshotTitle": "കൊറിയർ ഏജൻസി മാനേജ്മെന്റ് ഇന്റർഫേസ്",
    "courierPartners": "കൊറിയർ ഏജൻസി പങ്കാളികൾ",
    "activeAgencies": "{count} സജീവ ഏജൻസികൾ",
    "outstandingPayments": "• ₹{amount} തീർപ്പാക്കാത്ത പേയ്മെന്റുകൾ",
    "addAgency": "ഏജൻസി ചേർക്കുക",
    "premiumPartner": "പ്രീമിയം പങ്കാളി",
    "costEffective": "ചെലവ് കുറഞ്ഞ",
    "limitedCapacity": "പരിമിതമായ ശേഷി",
    "trialPeriod": "ട്രയൽ പിരീഡ്",

    "assignOrders": "ഓർഡറുകൾ അസൈൻ ചെയ്യുക",
    "agencyPerformanceSubStep": "B. ഏജൻസി പ്രകടന അനലിറ്റിക്സ്",
    "agencyPerformanceScreenshotTitle": "കൊറിയർ ഏജൻസി പ്രകടന മെട്രിക്സ്",
    "agencyPerformanceDashboard": "ഏജൻസി പ്രകടന ഡാഷ്ബോർഡ്",
    "thisWeek": "ഈ ആഴ്ച",
    "thisMonth": "ഈ മാസം",
    "deliveryVolumeByAgency": "ഏജൻസി വഴിയുള്ള ഡെലിവറി വോളിയം",
    "costAnalysis": "ചെലവ് വിശകലനം",
    "totalAgencyCost": "മൊത്തം ഏജൻസി ചെലവ്:",
    "performanceComparison": "പ്രകടന താരതമ്യം",
    "agency": "ഏജൻസി",
    "deliveries": "ഡെലിവറികൾ",
    "avgTime": "ശരാശരി സമയം",
    "costPerDelivery": "ഡെലിവറിക്ക് ചെലവ്",

    "agencyPaymentSubStep": "C. ഏജൻസി പേയ്മെന്റും റീകൺസിലിയേഷനും",
    "agencyPaymentScreenshotTitle": "കൊറിയർ ഏജൻസി പേയ്മെന്റ് മാനേജ്മെന്റ്",
    "agencyPaymentProcessing": "ഏജൻസി പേയ്മെന്റ് പ്രോസസ്സിംഗ്",
    "paymentDue": "ഡ്യൂ പേയ്മെന്റ്:",
    "payNow": "ഇപ്പോൾ പണം നൽകുക",
    "processAllPayments": "എല്ലാ പേയ്മെന്റുകളും പ്രോസസ്സ് ചെയ്യുക",
    "recentPayments": "ഏറ്റവും പുതിയ പേയ്മെന്റുകൾ",
    "paidStatus": "പണം നൽകിയത്"
  }
};

export default function ManualLogistics() {
  const [language, setLanguage] = useManualLanguage();
  
  const t = (key, params) => {
    let text = translations[language]?.[key] || translations['en']?.[key] || key;
    if (params) {
      Object.keys(params).forEach(pKey => {
        text = text.replace(`{${pKey}}`, params[pKey]);
      });
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
          <LanguageSelector language={language} setLanguage={setLanguage} readOnly />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Navigation className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-10">
              <Step number="1" title={t('step1Title')}>
                <p>{t('step1Intro')}</p>
                <Screenshot title={t('dashboardScreenshotTitle')}>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center flex-col sm:flex-row gap-4 sm:gap-0">
                      <div>
                        <h2 className="text-xl font-bold text-slate-800">{t('lastMileManagement')}</h2>
                        <p className="text-sm text-slate-600">{t('opsControlCenter')}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          <Plus className="w-4 h-4 mr-2" />
                          {t('addPersonnel')}
                        </Button>
                        <Button variant="outline">
                          <MapPin className="w-4 h-4 mr-2" />
                          {t('routePlanner')}
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">12</div>
                        <div className="text-sm text-slate-600">{t('activePersonnel')}</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">8</div>
                        <div className="text-sm text-slate-600">{t('availableVehicles')}</div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                        <Package className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-600">45</div>
                        <div className="text-sm text-slate-600">{t('outForDelivery')}</div>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                        <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-emerald-600">128</div>
                        <div className="text-sm text-slate-600">{t('deliveredToday')}</div>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                        <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-orange-600">3</div>
                        <div className="text-sm text-slate-600">{t('pendingPickups')}</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200">
                      <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
                        <div>
                          <h3 className="font-semibold text-teal-800">{t('dailyPerformance')}</h3>
                          <p className="text-sm text-teal-700">{t('todaysMetrics')}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-xl font-bold text-teal-800">94.2%</div>
                            <div className="text-xs text-teal-600">{t('onTimeDelivery')}</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-teal-800">28 min</div>
                            <div className="text-xs text-teal-600">{t('avgDeliveryTime')}</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-teal-800">4.8/5</div>
                            <div className="text-xs text-teal-600">{t('customerRating')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{t('dashboardProvides')}</p>
                  </div>
                </Screenshot>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>{t('step2Intro')}</p>
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('addPersonnelSubStep')}</h6>
                <Screenshot title={t('addPersonnelScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">{t('onboardNewPersonnel')}</h3>
                    <p className="text-sm text-slate-500 mb-6">{t('addStaffWithVerification')}</p>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-800 mb-3">{t('personalInfo')}</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('fullName')}</label>
                                <Input placeholder={t('enterFullName')} />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('phoneNumber')}</label>
                                <Input placeholder="+91 9876543210" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('emailAddress')}</label>
                                <Input type="email" placeholder="email@example.com" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('drivingLicense')}</label>
                                <Input placeholder="KA-1420230012345" />
                              </div>
                            </div>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h4 className="font-medium text-green-800 mb-3">{t('addressInfo')}</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('streetAddress')}</label>
                                <Input placeholder={t('streetAddress')} />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('city')}</label>
                                  <Input placeholder="Bangalore" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('pinCode')}</label>
                                  <Input placeholder="560001" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <h4 className="font-medium text-purple-800 mb-3">{t('emergencyContact')}</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contactName')}</label>
                                <Input placeholder="Next of kin name" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('relationship')}</label>
                                <select className="w-full p-2 border border-slate-300 rounded-md">
                                  <option>{t('selectRelationship')}</option>
                                  <option>{t('father')}</option>
                                  <option>{t('mother')}</option>
                                  <option>{t('spouse')}</option>
                                  <option>{t('sibling')}</option>
                                  <option>{t('other')}</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('phoneNumber')}</label>
                                <Input placeholder="+91 9876543210" />
                              </div>
                            </div>
                          </div>
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <h4 className="font-medium text-amber-800 mb-3">{t('vehicleAssignment')}</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('assignVehicle')}</label>
                                <select className="w-full p-2 border border-slate-300 rounded-md">
                                  <option>{t('selectVehicle')}</option>
                                  <option>KA 01 AB 1234 (Bike - Available)</option>
                                </select>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                  <input type="checkbox" id="has-own-vehicle" className="rounded" />
                                  <label htmlFor="has-own-vehicle" className="text-sm">{t('hasOwnVehicle')}</label>
                                </div>
                                <div>
                                  <Input placeholder={t('ownVehicleNumber')} className="text-sm" disabled />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <h4 className="font-medium text-slate-700 mb-3">{t('documentUpload')}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('profilePhoto')}</label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                              <Camera className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                              <p className="text-xs text-slate-500">{t('uploadPhoto')}</p>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('idProof')}</label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                              <FileText className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                              <p className="text-xs text-slate-500">{t('uploadIdProof')}</p>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('addressProof')}</label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                              <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                              <p className="text-xs text-slate-500">{t('uploadAddressProof')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-3">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-orange-600 hover:bg-orange-700">
                          <UserPlus className="w-4 h-4 mr-2" />
                          {t('addPersonnelBtn')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>
                
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('personnelProfileSubStep')}</h6>
                <Screenshot title={t('profileScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('personnelProfileName')}</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-medium text-blue-800 mb-3">{t('basicInfo')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span className="text-blue-700">{t('fullName')}:</span><span className="font-medium">Arjun Singh</span></div>
                            <div className="flex justify-between"><span className="text-blue-700">{t('phoneNumber')}:</span><span className="font-medium">+91 9876543210</span></div>
                            <div className="flex justify-between"><span className="text-blue-700">{t('drivingLicense')}:</span><span className="font-medium">KA-1420230012345</span></div>
                            <div className="flex justify-between"><span className="text-blue-700">{t('joined')}</span><span className="font-medium">January 15, 2024</span></div>
                            <div className="flex justify-between"><span className="text-blue-700">{t('statusLabel')}</span><Badge className="bg-green-100 text-green-800">{t('activeStatus')}</Badge></div>
                          </div>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-medium text-green-800 mb-3">{t('performanceMetrics')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span className="text-green-700">{t('totalDeliveries')}</span><span className="font-bold text-green-800">1,247</span></div>
                            <div className="flex justify-between"><span className="text-green-700">{t('successRate')}</span><span className="font-bold text-green-600">98.5%</span></div>
                            <div className="flex justify-between"><span className="text-green-700">{t('avgRating')}</span><div className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /><span className="font-bold text-green-600">4.8</span></div></div>
                            <div className="flex justify-between"><span className="text-green-700">{t('codCollected')}</span><span className="font-bold text-green-800">₹2,45,680</span></div>
                            <div className="flex justify-between"><span className="text-green-700">{t('onTimePercent')}</span><span className="font-bold text-green-600">96.2%</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h4 className="font-medium text-purple-800 mb-3">{t('recentDeliveryHistory')}</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead className="bg-purple-100">
                              <tr>
                                <th className="px-3 py-2 text-left">{t('date')}</th>
                                <th className="px-3 py-2 text-left">{t('orderId')}</th>
                                <th className="px-3 py-2 text-center">{t('statusLabel')}</th>
                                <th className="px-3 py-2 text-right">{t('codAmount')}</th>
                                <th className="px-3 py-2 text-center">{t('rating')}</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-3 py-2">May 21, 2024</td>
                                    <td className="px-3 py-2 font-mono text-xs">#ORD-052101</td>
                                    <td className="px-3 py-2 text-center"><Badge className="bg-green-100 text-green-800">{t('delivered')}</Badge></td>
                                    <td className="px-3 py-2 text-right">₹0.00</td>
                                    <td className="px-3 py-2 text-center"><div className="flex items-center justify-center gap-1"><Star className="w-3 h-3 text-yellow-500" /><span>5</span></div></td>
                                </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-800 mb-3">{t('paymentAndEarnings')}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center">
                          <div><div className="text-lg font-bold text-amber-600">₹8,240</div><div className="text-amber-700">{t('currentBalance')}</div></div>
                          <div><div className="text-lg font-bold text-green-600">₹45,680</div><div className="text-amber-700">{t('thisMonthEarnings')}</div></div>
                          <div><div className="text-lg font-bold text-blue-600">156</div><div className="text-amber-700">{t('deliveriesCount')}</div></div>
                          <div><div className="text-lg font-bold text-purple-600">₹292</div><div className="text-amber-700">{t('avgPerDay')}</div></div>
                        </div>
                        <div className="mt-3 flex  flex-col sm:flex-row gap-2 ">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700"><DollarSign className="w-4 h-4 mr-1" />{t('processPayment')}</Button>
                          <Button size="sm" variant="outline">{t('viewStatement')}</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('portalAccessSubStep')}</h6>
                <Screenshot title={t('portalSetupScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('portalAccessManagement')}</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <User className="w-6 h-6 text-blue-600 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-medium text-blue-800">{t('deliveryPersonnelPortal')}</h4>
                            <p className="text-sm text-blue-700 mt-1">{t('portalDesc')}</p>
                            <div className="mt-3 space-y-2">
                              <div className="flex items-center justify-between"><span className="text-sm text-blue-700">{t('portalStatusFor')}</span><Badge className="bg-green-100 text-green-800">{t('activeStatus')}</Badge></div>
                              <div className="flex items-center justify-between"><span className="text-sm text-blue-700">{t('lastLogin')}</span><span className="text-sm font-medium">Today at 8:30 AM</span></div>
                              <div className="flex items-center justify-between"><span className="text-sm text-blue-700">{t('portalFeatures')}</span><span className="text-sm">✓ Orders • ✓ Earnings • ✓ Performance</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-medium text-green-800 mb-3">{t('portalFeaturesAvailable')}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /><span>{t('viewAssignedOrders')}</span></div>
                            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /><span>{t('updateStatusRealtime')}</span></div>
                            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /><span>{t('trackEarnings')}</span></div>
                            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /><span>{t('viewPerformance')}</span></div>
                            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /><span>{t('reportIssues')}</span></div>
                          </div>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <h4 className="font-medium text-amber-800 mb-3">{t('accountManagement')}</h4>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('loginEmail')}</label>
                              <Input value="arjun.singh@retailos.com" readOnly className="bg-slate-100" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('portalRole')}</label>
                              <select className="w-full p-2 border border-slate-300 rounded-md text-sm">
                                <option>{t('deliveryPersonnelRole')}</option>
                                <option>{t('seniorDeliveryPersonnelRole')}</option>
                              </select>
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="mobile-app" className="rounded" defaultChecked />
                              <label htmlFor="mobile-app" className="text-sm">{t('mobileAppAccess')}</label>
                            </div>
                            <Button size="sm" variant="outline" className="w-full">{t('resetPassword')}</Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-3">
                        <Button variant="outline">{t('suspendAccess')}</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">{t('sendPortalInvite')}</Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>
              
              <Step number="3" title={t('step3Title')}>
                <p>{t('step3Intro')}</p>
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('orderAssignmentSubStep')}</h6>
                <Screenshot title={t('assignmentScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('assignDeliveryOrders')}</h3>
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-800 mb-3">{t('readyForAssignment', {count: 8})}</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <div className="flex items-center justify-between w-full">
                              <div><span className="font-medium text-slate-800">#ORD-2024-0521-001</span><span className="text-sm text-slate-500 ml-2">Arjun Sharma • MG Road • ₹1,206</span></div>
                              <div className="text-xs"><Badge className="bg-red-100 text-red-800 mr-1">{t('highPriority')}</Badge><span className="text-slate-500">3.2 km</span></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <div className="flex items-center justify-between w-full">
                              <div><span className="font-medium text-slate-800">#B2B-2024-0521-005</span><span className="text-sm text-slate-500 ml-2">Fresh Mart • Commercial St • ₹24,680</span></div>
                              <div className="text-xs"><Badge className="bg-purple-100 text-purple-800 mr-1">{t('b2b')}</Badge><span className="text-slate-500">2.1 km</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-medium text-green-800 mb-3">{t('availablePersonnel')}</h4>
                          <div className="flex items-center justify-between p-3 bg-white rounded border">
                            <div>
                                <div className="font-medium text-slate-800">Arjun Singh</div>
                                <div className="text-xs text-slate-500">{t('currentLoad', {count: 2})} • {t('activeStatus')}</div>
                            </div>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">{t('assignBtn')}</Button>
                          </div>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <h4 className="font-medium text-amber-800 mb-3">{t('assignmentSettings')}</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2"><input type="checkbox" id="auto-assign" className="rounded" defaultChecked /><label htmlFor="auto-assign">{t('enableAutoAssign')}</label></div>
                            <div className="flex items-center gap-2"><input type="checkbox" id="proximity" className="rounded" defaultChecked /><label htmlFor="proximity">{t('prioritizeProximity')}</label></div>
                            <div className="flex items-center gap-2"><input type="checkbox" id="load-balance" className="rounded" /><label htmlFor="load-balance">{t('balanceWorkload')}</label></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center flex-col sm:flex-row gap-4 sm:gap-0">
                        <div className="text-sm text-slate-500">{t('ordersSelected', {count: 3})}</div>
                        <div className="flex gap-3 flex-col sm:flex-row gap-4 "><Button variant="outline">{t('bulkAssign')}</Button><Button className="bg-orange-600 hover:bg-orange-700">{t('smartAutoAssign')}</Button></div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
                
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('trackingSubStep')}</h6>
                <Screenshot title={t('trackingScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('ordersInTransit')}</h3>
                    <div className="space-y-4">
                      <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                        <div className="flex items-start justify-between flex-col sm:flex-row gap-4 sm:gap-0">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-amber-600" /></div>
                            <div>
                              <h4 className="font-semibold text-amber-900">Order #ORD-2024-0521-001</h4>
                              <p className="text-sm text-amber-700 mt-1">{t('deliveryBy')} Arjun Singh • {t('customerLabel')} Arjun Sharma</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-amber-600">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{t('started')} 1:20 PM</span>
                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{t('distance')} 3.2 km</span>
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{t('eta')} 3:30 PM</span>
                              </div>
                              <div className="mt-3"><Badge className="bg-amber-100 text-amber-800 mr-2">{t('inTransitStatus')}</Badge><Badge className="bg-blue-100 text-blue-800">{t('paymentOnline')}</Badge></div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-600 mb-2">{t('currentLocation')}<br />Near Forum Mall</div>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 mb-1">{t('trackLive')}</Button>
                            <div className="text-xs text-slate-500">{t('lastUpdate', {time: '2 min'})}</div>
                          </div>
                        </div>
                        <div className="mt-4 bg-white border border-amber-200 rounded p-3">
                          <h5 className="font-medium text-amber-800 mb-2">{t('deliveryProgress')}:</h5>
                          <div className="flex items-center justify-between text-xs">
                            <div className="text-center"><div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-1 flex items-center justify-center"><CheckCircle className="w-4 h-4 text-white" /></div><div className="text-green-600 font-medium">{t('pickedUp')}</div></div>
                            <div className="flex-1 h-px bg-green-300 mx-2"></div>
                            <div className="text-center"><div className="w-6 h-6 bg-amber-500 rounded-full mx-auto mb-1 flex items-center justify-center animate-pulse"><Clock className="w-4 h-4 text-white" /></div><div className="text-amber-600 font-medium">{t('inTransitStatus')}</div></div>
                            <div className="flex-1 h-px bg-slate-300 mx-2"></div>
                            <div className="text-center"><div className="w-6 h-6 bg-slate-300 rounded-full mx-auto mb-1"></div><div className="text-slate-500">{t('deliveredStatus')}</div></div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                        <div className="flex items-start justify-between flex-col sm:flex-row gap-4 sm:gap-0">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center"><AlertTriangle className="w-6 h-6 text-red-600" /></div>
                                <div>
                                    <h4 className="font-semibold text-red-900">Order #ORD-2024-0521-023</h4>
                                    <p className="text-sm text-red-700 mt-1">{t('deliveryBy')} Rohit Sharma • {t('customerLabel')} Meera Agarwal</p>
                                    <div className="mt-2 flex items-center gap-4 text-xs text-red-600">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{t('issueReported')} 3:15 PM</span>
                                        <span className="flex items-center gap-1"><AlertTriangle className="w-3 h-3" />{t('customerNotAvailable')}</span>
                                    </div>
                                    <div className="mt-3"><Badge className="bg-red-100 text-red-800 mr-2">{t('deliveryFailed')}</Badge><Badge className="bg-amber-100 text-amber-800">{t('retryScheduled')}</Badge></div>
                                </div>
                            </div>
                            <div className="text-right">
                                <Button size="sm" className="bg-red-600 text-white hover:bg-red-700 mb-1">{t('contactCustomer')}</Button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('codCollectionSubStep')}</h6>
                <Screenshot title={t('codScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('codReconciliation')}</h3>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-emerald-600">₹18,450</div>
                                <div className="text-sm text-emerald-700">{t('todaysCollections')}</div>
                                <div className="text-xs text-emerald-500 mt-1">{t('fromCodDeliveries', {count: 45})}</div>
                            </div>
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-amber-600">₹8,240</div>
                                <div className="text-sm text-amber-700">{t('pendingHandover')}</div>
                                <div className="text-xs text-amber-500 mt-1">{t('withDeliveryPersonnel')}</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-blue-600">₹10,210</div>
                                <div className="text-sm text-blue-700">{t('reconciled')}</div>
                                <div className="text-xs text-blue-500 mt-1">{t('depositedToStore')}</div>
                            </div>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h4 className="font-medium text-green-800 mb-3">{t('codCollectionsByPersonnel')}</h4>
                            <div className="flex items-center justify-between p-3 bg-white rounded border ">
                                <div><div className="font-medium text-slate-800">Arjun Singh</div></div>
                                <div className="text-right">
                                    <div className="font-bold text-green-600">₹3,450</div>
                                    <div className="text-xs text-amber-600">{t('pendingHandoverLabel', {amount: '₹1,240'})}</div>
                                </div>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">{t('collectBtn')}</Button>
                            </div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-800 mb-3">{t('codReconciliationProcess')}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-center">
                                <div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2"><span className="font-bold text-blue-600">1</span></div>
                                    <div className="font-medium text-blue-800">{t('collectionStep')}</div>
                                    <div className="text-blue-600 mt-1">{t('collectionDesc')}</div>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2"><span className="font-bold text-amber-600">2</span></div>
                                    <div className="font-medium text-blue-800">{t('handoverStep')}</div>
                                    <div className="text-blue-600 mt-1">{t('handoverDesc')}</div>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2"><span className="font-bold text-green-600">3</span></div>
                                    <div className="font-medium text-blue-800">{t('reconciliationStep')}</div>
                                    <div className="text-blue-600 mt-1">{t('reconciliationDesc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>{t('step4Intro')}</p>
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('agencyDashboardSubStep')}</h6>
                <Screenshot title={t('agencyScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('courierPartners')}</h3>
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-slate-600">{t('activeAgencies', {count: 3})} {t('outstandingPayments', {amount: '4,680'})}</div>
                        <Button className="bg-orange-600 hover:bg-orange-700"><Building2 className="w-4 h-4 mr-2" />{t('addAgency')}</Button>
                    </div>
                    <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="font-semibold text-blue-900">Express Delivery Services</h4>
                                <div className="mt-3 flex items-center gap-2"><Badge className="bg-green-100 text-green-800">{t('activeStatus')}</Badge><Badge className="bg-blue-100 text-blue-800">{t('premiumPartner')}</Badge></div>
                            </div>
                            <div className="text-right">
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 mb-1">{t('assignOrders')}</Button>
                            </div>
                        </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('agencyPerformanceSubStep')}</h6>
                <Screenshot title={t('agencyPerformanceScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('agencyPerformanceDashboard')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">142</div><div className="text-sm text-blue-700">{t('totalDeliveries')}</div><div className="text-xs text-blue-500 mt-1">{t('deliveredToday')}</div>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">94.2%</div><div className="text-sm text-green-700">{t('successRate')}</div><div className="text-xs text-green-500 mt-1">{t('thisWeek')}</div>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-600">28 min</div><div className="text-sm text-purple-700">{t('avgDeliveryTime')}</div><div className="text-xs text-purple-500 mt-1">{t('thisMonth')}</div>
                        </div>
                    </div>
                  </div>
                </Screenshot>
                
                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('agencyPaymentSubStep')}</h6>
                <Screenshot title={t('agencyPaymentScreenshotTitle')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('agencyPaymentProcessing')}</h3>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <h4 className="font-medium text-amber-800 mb-3">{t('outstandingPayments', {amount: '4,145.00'})}</h4>
                        <div className="flex items-center justify-between p-3 bg-white rounded border flex-col sm:flex-row gap-4 sm:gap-0">
                            <div><div className="font-medium text-slate-800">Express Delivery Services</div><div className="text-xs text-slate-400">{t('paymentDue')} May 25, 2024</div></div>
                            <div className="text-right"><div className="font-bold text-amber-600">₹2,345.00</div></div>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700"><DollarSign className="w-4 h-4 mr-1" />{t('payNow')}</Button>
                        </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <div className="mt-12 p-6 bg-teal-50 border border-teal-200 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-800 mb-2">🚚 {t('nextStepsTitle')}</h3>
                <p className="text-teal-700 mb-4">{t('nextStepsDescription')}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={createPageUrl('ManualExpenses')}>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto">
                      {t('nextStepsButton')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl('LastMileDeliveryDashboard')}>
                    <Button variant="outline" className="w-full sm:w-auto">{t('openDashboard')}</Button>
                  </Link>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
