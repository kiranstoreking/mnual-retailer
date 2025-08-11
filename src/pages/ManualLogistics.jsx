
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
