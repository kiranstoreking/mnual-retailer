import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, Home, Building, User, Banknote, Shield, PlusCircle, Users,
  MapPin, Upload, Camera, FileText, CheckCircle, Clock, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';

const translations = {
  en: {
    pageTitle: "Supermarket Onboarding Manual",
    backToManual: "Back to Manual",
    description: "Get started with RetailOS by setting up your store profile, configuring user accounts, and preparing your supermarket for efficient operations.",
    nextStepsTitle: "Onboarding Complete!",
    nextStepsDescription: "Your supermarket is now set up and ready for operations. Next, configure your warehouse layout for efficient inventory management.",
    nextStepsButton: "Continue to Warehouse Management",
    
    // Step 1 - Accessing Supermarket Profile
    step1Title: "Accessing Supermarket Profile",
    step1Description: "Your first step is to navigate to the Supermarket Profile section. This is where you'll configure all the essential business information that will be used throughout the system for invoices, purchase orders, and customer communications.",
    navigationToProfile: "A. Navigation to Profile",
    accessingProfileSidebar: "Accessing Supermarket Profile from Sidebar",
    clickSupermarketProfile: "Click on \"Supermarket Profile\" in the main sidebar to access your store configuration.",
    profileDashboardOverview: "B. Profile Dashboard Overview",
    supermarketProfile: "Supermarket Profile",
    manageStoreBusinessInfo: "Manage all your store and business information",
    saveChanges: "Save Changes",
    reset: "Reset",
    profileCompletion: "Profile Completion",
    completeBankDetails: "Complete your bank details to reach 100%",
    
    // Step 2 - Store Information Setup
    step2Title: "Store Information Setup",
    step2Description: "The Store Information section contains your business identity details. This information appears on all generated documents including invoices, purchase orders, and official communications.",
    basicStoreDetails: "A. Basic Store Details Form",
    storeInformation: "Store Information",
    storeName: "Store Name *",
    legalBusinessName: "Legal Business Name *",
    gstNumber: "GST Number *",
    panNumber: "PAN Number",
    fssaiLicense: "FSSAI License",
    establishmentYear: "Establishment Year",
    contactInformation: "B. Contact Information",
    storeContactDetails: "Store Contact Details",
    primaryPhone: "Primary Phone *",
    businessEmail: "Business Email *",
    storeSize: "Store Size (sq ft)",
    validationErrorHandling: "C. Validation and Error Handling",
    formValidationMessages: "Form Validation Messages",
    validationErrors: "Validation Errors",
    gstFormatInvalid: "• GST Number format is invalid (should be 15 characters)",
    businessEmailRequired: "• Business Email is required",
    panNumberLength: "• PAN Number should be 10 characters",
    storeInfoSaved: "Store information saved successfully!",
    
    // Step 3 - Address and Location Configuration
    step3Title: "Address and Location Configuration",
    step3Description: "Accurate address and location data is crucial for delivery logistics, vendor communications, and regulatory compliance. The system supports precise geolocation for optimal delivery routing.",
    physicalAddressEntry: "A. Physical Address Entry",
    storeAddressLocation: "Store Address & Location",
    streetAddress: "Street Address *",
    city: "City *",
    district: "District",
    state: "State *",
    zipCode: "ZIP Code *",
    country: "Country",
    gpsCoordinatesMap: "B. GPS Coordinates and Map Integration",
    locationCoordinatesMap: "Location Coordinates and Map",
    gpsCoordinates: "GPS Coordinates",
    latitude: "Latitude",
    longitude: "Longitude",
    autoDetectLocation: "Auto-detect Location",
    mapPreview: "Map Preview",
    interactiveMapAppear: "Interactive map will appear here",
    showingKingsMarket: "Showing: King's Supermarket, Bangalore",
    preciseLocationHelps: "Precise location helps with delivery route optimization and vendor logistics.",
    
    // Step 4 - Document and Photo Upload
    step4Title: "Document and Photo Upload",
    step4Description: "RetailOS requires specific documents for legal compliance and business verification. Upload clear, high-quality images of all required documents for faster processing and verification.",
    storePhotosSection: "A. Store Photos Section",
    storePhotosDocuments: "Store Photos & Documents",
    storeFrontView: "Store Front View *",
    clickUploadDragDrop: "Click to upload or drag and drop",
    pngJpgUpTo5MB: "PNG, JPG up to 5MB",
    interiorView: "Interior View",
    uploadedSuccessfully: "Uploaded successfully",
    remove: "Remove",
    legalDocumentsUpload: "B. Legal Documents Upload",
    legalDocumentsSection: "Legal Documents Section",
    requiredLegalDocuments: "Required Legal Documents",
    gstCertificate: "GST Certificate *",
    verified: "Verified",
    uploadPanCard: "Upload PAN Card",
    documentUploadTips: "Document Upload Tips",
    ensureDocumentsClear: "• Ensure documents are clear and all text is readable",
    uploadOriginalDocuments: "• Upload original documents, not photocopies when possible",
    fileSizeUnder5MB: "• File size should be under 5MB for faster processing",
    supportedFormats: "• Supported formats: PNG, JPG, PDF",
    
    // Step 5 - Owner and Nominee Information
    step5Title: "Owner and Nominee Information",
    step5Description: "Complete owner details and nominee information are essential for business continuity, legal compliance, and emergency contact procedures.",
    ownerDetailsForm: "A. Owner Details Form",
    ownerInformation: "Owner Information",
    ownerFullName: "Owner Full Name *",
    ownerPhone: "Owner Phone *",
    ownerEmail: "Owner Email *",
    ownerPhoto: "Owner Photo",
    nomineeEmergencyContact: "B. Nominee and Emergency Contact",
    nomineeDetails: "Nominee Details",
    nomineeName: "Nominee Name *",
    relationship: "Relationship *",
    nomineePhone: "Nominee Phone *",
    aadharCard: "Aadhar Card",
    uploadAadharCard: "Upload Aadhar Card",
    
    // Step 6 - Bank Account Configuration
    step6Title: "Bank Account Configuration",
    step6Description: "Banking information is crucial for payment processing, vendor payments, and financial tracking. Ensure all bank details are accurate to avoid payment delays.",
    bankDetailsForm: "A. Bank Details Form",
    bankAccountDetails: "Bank Account Details",
    bankName: "Bank Name *",
    accountHolderName: "Account Holder Name *",
    accountNumber: "Account Number *",
    accountNumberEncrypted: "Account number is encrypted for security",
    ifscCode: "IFSC Code *",
    cancelledCheque: "Cancelled Cheque",
    uploaded: "Uploaded",
    bankVerificationStatus: "B. Bank Verification Status",
    bankAccountVerification: "Bank Account Verification",
    bankAccountVerified: "Bank Account Verified",
    bankAccountVerifiedDesc: "Your bank account has been successfully verified. You can now receive payments and make vendor payments through the system.",
    accountHolderVerified: "Account holder name verified",
    ifscCodeValidated: "IFSC code validated",
    accountNumberFormatChecked: "Account number format checked",
    cancelledChequeReviewed: "Cancelled cheque reviewed",
    securityInformation: "Security Information",
    securityInfoDesc: "All banking information is encrypted using bank-grade security. Your account details are never stored in plain text and are accessible only to authorized personnel for payment processing.",
    
    // Step 7 - User Management Setup
    step7Title: "User Management Setup",
    step7Description: "Setting up user accounts with proper roles and permissions ensures secure access control and operational efficiency. Each user should have access only to the features they need for their job function.",
    accessingUserManagement: "A. Accessing User Management",
    userManagement: "User Management",
    manageStaffAccess: "Manage staff access and roles for your supermarket",
    addNewUser: "Add New User",
    totalUsers: "Total Users",
    activeUsers: "Active Users",
    pendingInvites: "Pending Invites",
    roleTemplates: "Role Templates",
    creatingNewUser: "B. Creating a New User",
    addNewUserForm: "Add New User Form",
    fullName: "Full Name *",
    enterFullName: "Enter full name",
    emailAddress: "Email Address *",
    phoneNumber: "Phone Number *",
    department: "Department",
    selectDepartment: "Select Department",
    operations: "Operations",
    inventory: "Inventory",
    sales: "Sales",
    management: "Management",
    roleTemplate: "Role Template *",
    selectRoleTemplate: "Select Role Template",
    storeManager: "Store Manager",
    inventoryManager: "Inventory Manager",
    cashier: "Cashier",
    fulfillmentStaff: "Fulfillment Staff",
    roleTemplatesPermissions: "C. Role Templates and Permissions",
    permissionManagementInterface: "Permission Management Interface",
    roleTemplateInventoryManager: "Role Template: Inventory Manager",
    inventoryPermissions: "Inventory Permissions",
    viewInventoryDashboard: "View Inventory Dashboard",
    manageProducts: "Manage Products",
    createPurchaseOrders: "Create Purchase Orders",
    warehouseManagement: "Warehouse Management",
    otherPermissions: "Other Permissions",
    posDashboard: "POS Dashboard",
    orderManagement: "Order Management",
    financialReports: "Financial Reports",
    userManagementPerm: "User Management",
    fullAccess: "Full Access",
    readOnly: "Read Only",
    noAccess: "No Access",
    roleTemplateBenefits: "Role Template Benefits:",
    roleTemplateBenefitsDesc: "Using pre-configured role templates ensures consistent permissions across similar positions and reduces setup time for new users.",
    userStatusActivity: "D. User Status and Activity Tracking",
    userListStatusIndicators: "User List with Status Indicators",
    active: "Active",
    pendingInvite: "Pending Invite",
    lastLogin: "Last Login",
    actions: "Actions",
    edit: "Edit",
    resendInvite: "Resend Invite",
    never: "Never",
    inviteSentDaysAgo: "Invite sent 2 days ago",
    
    // Common UI elements
    retailOS: "RetailOS",
    supermarketManagement: "Supermarket Management",
    inventory: "Inventory",
    userManagement: "User Management",
    profileCompletionPercent: "75%",
    kingsSupermarket: "King's Supermarket",
    kingsRetailPvtLtd: "King's Retail Pvt. Ltd.",
    gstExample: "29AABCU9567M1Z5",
    panExample: "AABCU9567M",
    fssaiExample: "12345678901234",
    establishmentYearExample: "2018",
    phoneExample: "+91 98765 43210",
    emailExample: "contact@kingsmarket.com",
    storeSizeExample: "2500",
    streetExample: "123 Commercial Street, Market Area",
    cityExample: "Bangalore",
    districtExample: "Bangalore Urban",
    stateExample: "Karnataka",
    zipExample: "560001",
    countryExample: "India",
    latitudeExample: "12.9716",
    longitudeExample: "77.5946",
    storeInteriorJpg: "store_interior.jpg",
    mbUploadedSuccessfully: "2.3 MB • Uploaded successfully",
    gstCertificatePdf: "gst_certificate.pdf",
    mbVerified: "1.8 MB • Verified ✓",
    cancelledChequePdf: "cancelled_cheque.pdf",
    kbUploaded: "956 KB • Uploaded",
    ownerPhotoJpg: "owner_photo.jpg",
    mb: "1.2 MB",
    rajeshKumarSingh: "Rajesh Kumar Singh",
    rajeshEmail: "rajesh@kingsmarket.com",
    priyaSingh: "Priya Singh",
    spouse: "Spouse",
    priyaPhone: "+91 98765 43211",
    hdfcBank: "HDFC Bank",
    accountNumberExample: "1234567890123456",
    ifscExample: "HDFC0001234",
    rajeshSingh: "Rajesh Singh",
    rajeshEmailShort: "rajesh@kingsmarket.com",
    priyaSharma: "Priya Sharma",
    priyaEmail: "priya@kingsmarket.com",
    hoursAgo: "2 hours ago",
    today: "Today, 10:30 AM",
    inviteSentDaysAgo: "Invite sent 2 days ago",
    
    // Table headers and UI elements
    user: "User",
    role: "Role",
    status: "Status",
    lastLogin: "Last Login",
    actions: "Actions",
  },
  te: {
    pageTitle: "సూపర్‌మార్కెట్ ఆన్‌బోర్డింగ్ మాన్యువల్",
    backToManual: "మాన్యువల్‌కి తిరిగి వెళ్ళండి",
    description: "మీ స్టోర్ ప్రొఫైల్‌ని సెటప్ చేయడం, యూజర్ ఖాతాలను కాన్ఫిగర్ చేయడం మరియు సమర్థవంతమైన కార్యకలాపాల కోసం మీ సూపర్‌మార్కెట్‌ని సిద్ధం చేయడం ద్వారా RetailOS తో ప్రారంభించండి.",
    nextStepsTitle: "ఆన్‌బోర్డింగ్ పూర్తయింది!",
    nextStepsDescription: "మీ సూపర్‌మార్కెట్ ఇప్పుడు సెటప్ చేయబడింది మరియు కార్యకలాపాల కోసం సిద్ధంగా ఉంది. తదుపరి, సమర్థవంతమైన ఇన్వెంటరీ నిర్వహణ కోసం మీ వేర్‌హౌస్ లేఅవుట్‌ని కాన్ఫిగర్ చేయండి.",
    nextStepsButton: "వేర్‌హౌస్ నిర్వహణకు కొనసాగండి",
    
    // Step 1 - Accessing Supermarket Profile
    step1Title: "సూపర్‌మార్కెట్ ప్రొఫైల్‌ని యాక్సెస్ చేయడం",
    step1Description: "మీ మొదటి అడుగు సూపర్‌మార్కెట్ ప్రొఫైల్ విభాగానికి నావిగేట్ చేయడం. ఇక్కడ మీరు ఇన్‌వాయిస్‌లు, పర్చేస్ ఆర్డర్లు మరియు కస్టమర్ కమ్యూనికేషన్ల కోసం సిస్టమ్ అంతటా ఉపయోగించబడే అన్ని ముఖ్యమైన వ్యాపార సమాచారాన్ని కాన్ఫిగర్ చేస్తారు.",
    navigationToProfile: "ఎ. ప్రొఫైల్‌కి నావిగేషన్",
    accessingProfileSidebar: "సైడ్‌బార్ నుండి సూపర్‌మార్కెట్ ప్రొఫైల్‌ని యాక్సెస్ చేయడం",
    clickSupermarketProfile: "మీ స్టోర్ కాన్ఫిగరేషన్‌ని యాక్సెస్ చేయడానికి ప్రధాన సైడ్‌బార్‌లో \"సూపర్‌మార్కెట్ ప్రొఫైల్\"పై క్లిక్ చేయండి.",
    profileDashboardOverview: "బి. ప్రొఫైల్ డాష్‌బోర్డ్ అవలోకనం",
    supermarketProfile: "సూపర్‌మార్కెట్ ప్రొఫైల్",
    manageStoreBusinessInfo: "మీ అన్ని స్టోర్ మరియు వ్యాపార సమాచారాన్ని నిర్వహించండి",
    saveChanges: "మార్పులను సేవ్ చేయండి",
    reset: "రీసెట్",
    profileCompletion: "ప్రొఫైల్ పూర్తి",
    completeBankDetails: "100% చేరుకోవడానికి మీ బ్యాంక్ వివరాలను పూర్తి చేయండి",
    
    // Step 2 - Store Information Setup
    step2Title: "స్టోర్ సమాచార సెటప్",
    step2Description: "స్టోర్ సమాచార విభాగంలో మీ వ్యాపార గుర్తింపు వివరాలు ఉంటాయి. ఈ సమాచారం ఇన్‌వాయిస్‌లు, పర్చేస్ ఆర్డర్లు మరియు అధికారిక కమ్యూనికేషన్లతో సహా అన్ని రూపొందించబడిన పత్రాలలో కనిపిస్తుంది.",
    basicStoreDetails: "ఎ. ప్రాథమిక స్టోర్ వివరాలు ఫారం",
    storeInformation: "స్టోర్ సమాచారం",
    storeName: "స్టోర్ పేరు *",
    legalBusinessName: "చట్టబద్ధమైన వ్యాపార పేరు *",
    gstNumber: "GST సంఖ్య *",
    panNumber: "PAN సంఖ్య",
    fssaiLicense: "FSSAI లైసెన్స్",
    establishmentYear: "స్థాపన సంవత్సరం",
    contactInformation: "బి. సంప్రదింపు సమాచారం",
    storeContactDetails: "స్టోర్ సంప్రదింపు వివరాలు",
    primaryPhone: "ప్రాథమిక ఫోన్ *",
    businessEmail: "వ్యాపార ఇమెయిల్ *",
    storeSize: "స్టోర్ పరిమాణం (చదరపు అడుగులు)",
    validationErrorHandling: "సి. ధృవీకరణ మరియు ఎర్రర్ నిర్వహణ",
    formValidationMessages: "ఫారం ధృవీకరణ సందేశాలు",
    validationErrors: "ధృవీకరణ లోపాలు",
    gstFormatInvalid: "• GST సంఖ్య ఫార్మాట్ చెల్లదు (15 అక్షరాలు ఉండాలి)",
    businessEmailRequired: "• వ్యాపార ఇమెయిల్ అవసరం",
    panNumberLength: "• PAN సంఖ్య 10 అక్షరాలు ఉండాలి",
    storeInfoSaved: "స్టోర్ సమాచారం విజయవంతంగా సేవ్ చేయబడింది!",
    
    // Step 3 - Address and Location Configuration
    step3Title: "చిరునామా మరియు స్థాన కాన్ఫిగరేషన్",
    step3Description: "ఖచ్చితమైన చిరునామా మరియు స్థాన డేటా డెలివరీ లాజిస్టిక్స్, వెండర్ కమ్యూనికేషన్లు మరియు నిర్వహణా అనుసరణ కోసం కీలకం. సిస్టమ్ సరైన డెలివరీ రూటింగ్ కోసం ఖచ్చితమైన జియోలొకేషన్‌ని మద్దతు ఇస్తుంది.",
    physicalAddressEntry: "ఎ. భౌతిక చిరునామా నమోదు",
    storeAddressLocation: "స్టోర్ చిరునామా & స్థానం",
    streetAddress: "వీధి చిరునామా *",
    city: "నగరం *",
    district: "జిల్లా",
    state: "రాష్ట్రం *",
    zipCode: "ZIP కోడ్ *",
    country: "దేశం",
    gpsCoordinatesMap: "బి. GPS కోఆర్డినేట్లు మరియు మ్యాప్ ఇంటిగ్రేషన్",
    locationCoordinatesMap: "స్థాన కోఆర్డినేట్లు మరియు మ్యాప్",
    gpsCoordinates: "GPS కోఆర్డినేట్లు",
    latitude: "అక్షాంశం",
    longitude: "రేఖాంశం",
    autoDetectLocation: "స్థానాన్ని ఆటో-డిటెక్ట్ చేయండి",
    mapPreview: "మ్యాప్ ప్రివ్యూ",
    interactiveMapAppear: "ఇంటరాక్టివ్ మ్యాప్ ఇక్కడ కనిపిస్తుంది",
    showingKingsMarket: "చూపించబడుతోంది: కింగ్‌స్ సూపర్‌మార్కెట్, బెంగళూరు",
    preciseLocationHelps: "ఖచ్చితమైన స్థానం డెలివరీ రూట్ ఆప్టిమైజేషన్ మరియు వెండర్ లాజిస్టిక్స్‌కు సహాయపడుతుంది.",
    
    // Step 4 - Document and Photo Upload
    step4Title: "పత్రం మరియు ఫోటో అప్‌లోడ్",
    step4Description: "RetailOS కి చట్టబద్ధమైన అనుసరణ మరియు వ్యాపార ధృవీకరణ కోసం నిర్దిష్ట పత్రాలు అవసరం. వేగవంతమైన ప్రాసెసింగ్ మరియు ధృవీకరణ కోసం అన్ని అవసరమైన పత్రాల స్పష్టమైన, ఉత్తమ నాణ్యత చిత్రాలను అప్‌లోడ్ చేయండి.",
    storePhotosSection: "ఎ. స్టోర్ ఫోటోల విభాగం",
    storePhotosDocuments: "స్టోర్ ఫోటోలు & పత్రాలు",
    storeFrontView: "స్టోర్ ముందరి వీక్షణ *",
    clickUploadDragDrop: "అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి లేదా డ్రాగ్ & డ్రాప్ చేయండి",
    pngJpgUpTo5MB: "PNG, JPG 5MB వరకు",
    interiorView: "లోపలి వీక్షణ",
    uploadedSuccessfully: "విజయవంతంగా అప్‌లోడ్ చేయబడింది",
    remove: "తొలగించండి",
    legalDocumentsUpload: "బి. చట్టబద్ధమైన పత్రాల అప్‌లోడ్",
    legalDocumentsSection: "చట్టబద్ధమైన పత్రాల విభాగం",
    requiredLegalDocuments: "అవసరమైన చట్టబద్ధమైన పత్రాలు",
    gstCertificate: "GST సర్టిఫికేట్ *",
    verified: "ధృవీకరించబడింది",
    uploadPanCard: "PAN కార్డ్ అప్‌లోడ్ చేయండి",
    documentUploadTips: "పత్రం అప్‌లోడ్ చిట్కాలు",
    ensureDocumentsClear: "• పత్రాలు స్పష్టంగా ఉన్నాయి మరియు అన్ని టెక్స్ట్ చదవదగినది అని నిర్ధారించుకోండి",
    uploadOriginalDocuments: "• సాధ్యమైనప్పుడు మూల పత్రాలను అప్‌లోడ్ చేయండి, ఫోటోకాపీలను కాదు",
    fileSizeUnder5MB: "• వేగవంతమైన ప్రాసెసింగ్ కోసం ఫైల్ పరిమాణం 5MB కంటే తక్కువగా ఉండాలి",
    supportedFormats: "• మద్దతు ఫార్మాట్లు: PNG, JPG, PDF",
    
    // Step 5 - Owner and Nominee Information
    step5Title: "యజమాని మరియు నామినీ సమాచారం",
    step5Description: "పూర్తి యజమాని వివరాలు మరియు నామినీ సమాచారం వ్యాపార నిరంతరత, చట్టబద్ధమైన అనుసరణ మరియు అత్యవసర సంప్రదింపు విధానాల కోసం అవసరం.",
    ownerDetailsForm: "ఎ. యజమాని వివరాల ఫారం",
    ownerInformation: "యజమాని సమాచారం",
    ownerFullName: "యజమాని పూర్తి పేరు *",
    ownerPhone: "యజమాని ఫోన్ *",
    ownerEmail: "యజమాని ఇమెయిల్ *",
    ownerPhoto: "యజమాని ఫోటో",
    nomineeEmergencyContact: "బి. నామినీ మరియు అత్యవసర సంప్రదింపు",
    nomineeDetails: "నామినీ వివరాలు",
    nomineeName: "నామినీ పేరు *",
    relationship: "సంబంధం *",
    nomineePhone: "నామినీ ఫోన్ *",
    aadharCard: "ఆధార్ కార్డ్",
    uploadAadharCard: "ఆధార్ కార్డ్ అప్‌లోడ్ చేయండి",
    
    // Step 6 - Bank Account Configuration
    step6Title: "బ్యాంక్ ఖాతా కాన్ఫిగరేషన్",
    step6Description: "బ్యాంకింగ్ సమాచారం చెల్లింపు ప్రాసెసింగ్, వెండర్ చెల్లింపులు మరియు ఆర్థిక ట్రాకింగ్ కోసం కీలకం. చెల్లింపు ఆలస్యాలను నివారించడానికి అన్ని బ్యాంక్ వివరాలు ఖచ్చితంగా ఉన్నాయని నిర్ధారించుకోండి.",
    bankDetailsForm: "ఎ. బ్యాంక్ వివరాల ఫారం",
    bankAccountDetails: "బ్యాంక్ ఖాతా వివరాలు",
    bankName: "బ్యాంక్ పేరు *",
    accountHolderName: "ఖాతా హోల్డర్ పేరు *",
    accountNumber: "ఖాతా సంఖ్య *",
    accountNumberEncrypted: "ఖాతా సంఖ్య భద్రత కోసం ఎన్‌క్రిప్ట్ చేయబడింది",
    ifscCode: "IFSC కోడ్ *",
    cancelledCheque: "రద్దు చేసిన చెక్",
    uploaded: "అప్‌లోడ్ చేయబడింది",
    bankVerificationStatus: "బి. బ్యాంక్ ధృవీకరణ స్థితి",
    bankAccountVerification: "బ్యాంక్ ఖాతా ధృవీకరణ",
    bankAccountVerified: "బ్యాంక్ ఖాతా ధృవీకరించబడింది",
    bankAccountVerifiedDesc: "మీ బ్యాంక్ ఖాతా విజయవంతంగా ధృవీకరించబడింది. మీరు ఇప్పుడు సిస్టమ్ ద్వారా చెల్లింపులను స్వీకరించవచ్చు మరియు వెండర్ చెల్లింపులు చేయవచ్చు.",
    accountHolderVerified: "ఖాతా హోల్డర్ పేరు ధృవీకరించబడింది",
    ifscCodeValidated: "IFSC కోడ్ ధృవీకరించబడింది",
    accountNumberFormatChecked: "ఖాతా సంఖ్య ఫార్మాట్ తనిఖీ చేయబడింది",
    cancelledChequeReviewed: "రద్దు చేసిన చెక్ సమీక్షించబడింది",
    securityInformation: "భద్రత సమాచారం",
    securityInfoDesc: "అన్ని బ్యాంకింగ్ సమాచారం బ్యాంక్-గ్రేడ్ భద్రతతో ఎన్‌క్రిప్ట్ చేయబడింది. మీ ఖాతా వివరాలు ఎప్పుడూ సాదా టెక్స్ట్‌లో నిల్వ చేయబడవు మరియు చెల్లింపు ప్రాసెసింగ్ కోసం అధికారిక సిబ్బందికి మాత్రమే అందుబాటులో ఉంటాయి.",
    
    // Step 7 - User Management Setup
    step7Title: "యూజర్ నిర్వహణ సెటప్",
    step7Description: "సరైన పాత్రలు మరియు అనుమతులతో యూజర్ ఖాతాలను సెటప్ చేయడం సురక్షితమైన యాక్సెస్ నియంత్రణ మరియు కార్యకలాప సమర్థతను నిర్ధారిస్తుంది. ప్రతి యూజర్ తమ ఉద్యోగ విధికి అవసరమైన లక్షణాలకు మాత్రమే యాక్సెస్‌ని కలిగి ఉండాలి.",
    accessingUserManagement: "ఎ. యూజర్ నిర్వహణను యాక్సెస్ చేయడం",
    userManagement: "యూజర్ నిర్వహణ",
    manageStaffAccess: "మీ సూపర్‌మార్కెట్ కోసం సిబ్బంది యాక్సెస్ మరియు పాత్రలను నిర్వహించండి",
    addNewUser: "కొత్త యూజర్‌ని జోడించండి",
    totalUsers: "మొత్తం యూజర్లు",
    activeUsers: "క్రియాశీల యూజర్లు",
    pendingInvites: "పెండింగ్ ఆమంత్రణలు",
    roleTemplates: "పాత్ర టెంప్లేట్లు",
    creatingNewUser: "బి. కొత్త యూజర్‌ని సృష్టించడం",
    addNewUserForm: "కొత్త యూజర్‌ని జోడించే ఫారం",
    fullName: "పూర్తి పేరు *",
    enterFullName: "పూర్తి పేరును నమోదు చేయండి",
    emailAddress: "ఇమెయిల్ చిరునామా *",
    phoneNumber: "ఫోన్ సంఖ్య *",
    department: "విభాగం",
    selectDepartment: "విభాగాన్ని ఎంచుకోండి",
    operations: "కార్యకలాపాలు",
    inventory: "ఇన్వెంటరీ",
    sales: "అమ్మకాలు",
    management: "నిర్వహణ",
    roleTemplate: "పాత్ర టెంప్లేట్ *",
    selectRoleTemplate: "పాత్ర టెంప్లేట్‌ని ఎంచుకోండి",
    storeManager: "స్టోర్ మేనేజర్",
    inventoryManager: "ఇన్వెంటరీ మేనేజర్",
    cashier: "క్యాషియర్",
    fulfillmentStaff: "పూర్తి చేసే సిబ్బంది",
    roleTemplatesPermissions: "సి. పాత్ర టెంప్లేట్లు మరియు అనుమతులు",
    permissionManagementInterface: "అనుమతి నిర్వహణ ఇంటర్ఫేస్",
    roleTemplateInventoryManager: "పాత్ర టెంప్లేట్: ఇన్వెంటరీ మేనేజర్",
    inventoryPermissions: "ఇన్వెంటరీ అనుమతులు",
    viewInventoryDashboard: "ఇన్వెంటరీ డాష్‌బోర్డ్‌ని వీక్షించండి",
    manageProducts: "ఉత్పత్తులను నిర్వహించండి",
    createPurchaseOrders: "పర్చేస్ ఆర్డర్లను సృష్టించండి",
    warehouseManagement: "వేర్‌హౌస్ నిర్వహణ",
    otherPermissions: "ఇతర అనుమతులు",
    posDashboard: "POS డాష్‌బోర్డ్",
    orderManagement: "ఆర్డర్ నిర్వహణ",
    financialReports: "ఆర్థిక నివేదికలు",
    userManagementPerm: "యూజర్ నిర్వహణ",
    fullAccess: "పూర్తి యాక్సెస్",
    readOnly: "చదవడానికి మాత్రమే",
    noAccess: "యాక్సెస్ లేదు",
    roleTemplateBenefits: "పాత్ర టెంప్లేట్ ప్రయోజనాలు:",
    roleTemplateBenefitsDesc: "ముందుగా కాన్ఫిగర్ చేసిన పాత్ర టెంప్లేట్లను ఉపయోగించడం ఒకే రకమైన స్థానాలలో స్థిరమైన అనుమతులను నిర్ధారిస్తుంది మరియు కొత్త యూజర్ల కోసం సెటప్ సమయాన్ని తగ్గిస్తుంది.",
    userStatusActivity: "డి. యూజర్ స్థితి మరియు కార్యకలాప ట్రాకింగ్",
    userListStatusIndicators: "స్థితి సూచకాలతో యూజర్ జాబితా",
    active: "క్రియాశీల",
    pendingInvite: "పెండింగ్ ఆమంత్రణ",
    lastLogin: "చివరి లాగిన్",
    actions: "చర్యలు",
    edit: "సవరించండి",
    resendInvite: "ఆమంత్రణను మళ్లీ పంపండి",
    never: "ఎప్పుడూ లేదు",
    inviteSentDaysAgo: "2 రోజుల క్రితం ఆమంత్రణ పంపబడింది",
    
    // Common UI elements
    retailOS: "RetailOS",
    supermarketManagement: "సూపర్‌మార్కెట్ నిర్వహణ",
    inventory: "ఇన్వెంటరీ",
    userManagement: "యూజర్ నిర్వహణ",
    profileCompletionPercent: "75%",
    kingsSupermarket: "కింగ్‌స్ సూపర్‌మార్కెట్",
    kingsRetailPvtLtd: "కింగ్‌స్ రిటైల్ ప్రైవేట్ లిమిటెడ్",
    gstExample: "29AABCU9567M1Z5",
    panExample: "AABCU9567M",
    fssaiExample: "12345678901234",
    establishmentYearExample: "2018",
    phoneExample: "+91 98765 43210",
    emailExample: "contact@kingsmarket.com",
    storeSizeExample: "2500",
    streetExample: "123 కమర్షియల్ స్ట్రీట్, మార్కెట్ ప్రాంతం",
    cityExample: "బెంగళూరు",
    districtExample: "బెంగళూరు నగరం",
    stateExample: "కర్ణాటక",
    zipExample: "560001",
    countryExample: "భారతదేశం",
    latitudeExample: "12.9716",
    longitudeExample: "77.5946",
    storeInteriorJpg: "store_interior.jpg",
    mbUploadedSuccessfully: "2.3 MB • విజయవంతంగా అప్‌లోడ్ చేయబడింది",
    gstCertificatePdf: "gst_certificate.pdf",
    mbVerified: "1.8 MB • ధృవీకరించబడింది ✓",
    cancelledChequePdf: "cancelled_cheque.pdf",
    kbUploaded: "956 KB • అప్‌లోడ్ చేయబడింది",
    ownerPhotoJpg: "owner_photo.jpg",
    mb: "1.2 MB",
    rajeshKumarSingh: "రాజేష్ కుమార్ సింగ్",
    rajeshEmail: "rajesh@kingsmarket.com",
    priyaSingh: "ప్రియా సింగ్",
    spouse: "భార్య/భర్త",
    priyaPhone: "+91 98765 43211",
    hdfcBank: "HDFC బ్యాంక్",
    accountNumberExample: "1234567890123456",
    ifscExample: "HDFC0001234",
    rajeshSingh: "రాజేష్ సింగ్",
    rajeshEmailShort: "rajesh@kingsmarket.com",
    priyaSharma: "ప్రియా శర్మ",
    priyaEmail: "priya@kingsmarket.com",
    hoursAgo: "2 గంటల క్రితం",
    today: "ఈరోజు, 10:30 AM",
    inviteSentDaysAgo: "2 రోజుల క్రితం ఆమంత్రణ పంపబడింది",
    
    // Table headers and UI elements
    user: "యూజర్",
    role: "పాత్ర",
    status: "స్థితి",
    lastLogin: "చివరి లాగిన్",
    actions: "చర్యలు",
  },
  ta: {
    pageTitle: "சூப்பர்மார்க்கெட் ஆன்போர்டிங் கையேடு",
    backToManual: "கையேட்டிற்கு திரும்பு",
    description: "உங்கள் கடை சுயவிவரத்தை அமைப்பதன் மூலம், பயனர் கணக்குகளை கட்டமைப்பதன் மூலம், மற்றும் திறமையான செயல்பாடுகளுக்காக உங்கள் சூப்பர்மார்க்கெட்டை தயார்படுத்துவதன் மூலம் RetailOS உடன் தொடங்குங்கள்.",
    nextStepsTitle: "ஆன்போர்டிங் முடிந்தது!",
    nextStepsDescription: "உங்கள் சூப்பர்மார்க்கெட் இப்போது அமைக்கப்பட்டுள்ளது மற்றும் செயல்பாடுகளுக்கு தயாராக உள்ளது. அடுத்து, திறமையான சரக்கு மேலாண்மைக்காக உங்கள் கிடங்கு தளவமைப்பை கட்டமைக்கவும்.",
    nextStepsButton: "கிடங்கு மேலாண்மைக்கு தொடரவும்",
    
    // Step 1 - Accessing Supermarket Profile
    step1Title: "சூப்பர்மார்க்கெட் சுயவிவரத்தை அணுகுதல்",
    step1Description: "உங்கள் முதல் படி சூப்பர்மார்க்கெட் சுயவிவர பிரிவுக்கு செல்வதாகும். இங்கே நீங்கள் விலைப்பட்டியல்கள், கொள்முதல் ஆணைகள் மற்றும் வாடிக்கையாளர் தொடர்புகளுக்காக கணினி முழுவதும் பயன்படுத்தப்படும் அனைத்து முக்கிய வணிக தகவல்களையும் கட்டமைப்பீர்கள்.",
    navigationToProfile: "அ. சுயவிவரத்திற்கு செல்வழி",
    accessingProfileSidebar: "பக்கப்பட்டியில் இருந்து சூப்பர்மார்க்கெட் சுயவிவரத்தை அணுகுதல்",
    clickSupermarketProfile: "உங்கள் கடை கட்டமைப்பை அணுக முதன்மை பக்கப்பட்டியில் \"சூப்பர்மார்க்கெட் சுயவிவரம்\"ஐ கிளிக் செய்யவும்.",
    profileDashboardOverview: "ஆ. சுயவிவர டாஷ்போர்டு கண்ணோட்டம்",
    supermarketProfile: "சூப்பர்மார்க்கெட் சுயவிவரம்",
    manageStoreBusinessInfo: "உங்கள் அனைத்து கடை மற்றும் வணிக தகவல்களையும் நிர்வகிக்கவும்",
    saveChanges: "மாற்றங்களை சேமிக்கவும்",
    reset: "மீட்டமைக்கவும்",
    profileCompletion: "சுயவிவர முடிவு",
    completeBankDetails: "100% அடைய உங்கள் வங்கி விவரங்களை முடிக்கவும்",
    
    // Step 2 - Store Information Setup
    step2Title: "கடை தகவல் அமைப்பு",
    step2Description: "கடை தகவல் பிரிவில் உங்கள் வணிக அடையாள விவரங்கள் உள்ளன. இந்த தகவல் விலைப்பட்டியல்கள், கொள்முதல் ஆணைகள் மற்றும் அதிகாரப்பூர்வ தொடர்புகள் உட்பட அனைத்து உருவாக்கப்பட்ட ஆவணங்களிலும் தோன்றும்.",
    basicStoreDetails: "அ. அடிப்படை கடை விவரங்கள் படிவம்",
    storeInformation: "கடை தகவல்",
    storeName: "கடை பெயர் *",
    legalBusinessName: "சட்டப்பூர்வ வணிக பெயர் *",
    gstNumber: "GST எண் *",
    panNumber: "PAN எண்",
    fssaiLicense: "FSSAI உரிமம்",
    establishmentYear: "நிறுவப்பட்ட ஆண்டு",
    contactInformation: "ஆ. தொடர்பு தகவல்",
    storeContactDetails: "கடை தொடர்பு விவரங்கள்",
    primaryPhone: "முதன்மை தொலைபேசி *",
    businessEmail: "வணிக மின்னஞ்சல் *",
    storeSize: "கடை அளவு (சதுர அடி)",
    validationErrorHandling: "இ. சரிபார்ப்பு மற்றும் பிழை நிர்வாகம்",
    formValidationMessages: "படிவ சரிபார்ப்பு செய்திகள்",
    validationErrors: "சரிபார்ப்பு பிழைகள்",
    gstFormatInvalid: "• GST எண் வடிவம் தவறானது (15 எழுத்துகள் இருக்க வேண்டும்)",
    businessEmailRequired: "• வணிக மின்னஞ்சல் தேவை",
    panNumberLength: "• PAN எண் 10 எழுத்துகள் இருக்க வேண்டும்",
    storeInfoSaved: "கடை தகவல் வெற்றிகரமாக சேமிக்கப்பட்டது!",
    
    // Step 3 - Address and Location Configuration
    step3Title: "முகவரி மற்றும் இருப்பிட கட்டமைப்பு",
    step3Description: "துல்லியமான முகவரி மற்றும் இருப்பிட தரவு விநியோக லாஜிஸ்டிக்ஸ், விற்பனையாளர் தொடர்புகள் மற்றும் ஒழுங்குமுறை இணக்கத்திற்கு முக்கியமானது. கணினி உகந்த விநியோக வழித்தடத்திற்காக துல்லியமான புவியியல் இருப்பிடத்தை ஆதரிக்கிறது.",
    physicalAddressEntry: "அ. உடல் முகவரி நுழைவு",
    storeAddressLocation: "கடை முகவரி & இருப்பிடம்",
    streetAddress: "தெரு முகவரி *",
    city: "நகரம் *",
    district: "மாவட்டம்",
    state: "மாநிலம் *",
    zipCode: "ZIP குறியீடு *",
    country: "நாடு",
    gpsCoordinatesMap: "ஆ. GPS ஆயங்கள் மற்றும் வரைபட ஒருங்கிணைப்பு",
    locationCoordinatesMap: "இருப்பிட ஆயங்கள் மற்றும் வரைபடம்",
    gpsCoordinates: "GPS ஆயங்கள்",
    latitude: "அட்சரேகை",
    longitude: "தீர்க்கரேகை",
    autoDetectLocation: "இருப்பிடத்தை தானாக கண்டறியவும்",
    mapPreview: "வரைபட முன்னோட்டம்",
    interactiveMapAppear: "ஊடாடும் வரைபடம் இங்கே தோன்றும்",
    showingKingsMarket: "காட்டப்படுகிறது: கிங்ஸ் சூப்பர்மார்க்கெட், பெங்களூரு",
    preciseLocationHelps: "துல்லியமான இருப்பிடம் விநியோக வழித்தட உகந்தமயமாக்கல் மற்றும் விற்பனையாளர் லாஜிஸ்டிக்ஸுக்கு உதவுகிறது.",
    
    // Step 4 - Document and Photo Upload
    step4Title: "ஆவணம் மற்றும் புகைப்பட பதிவேற்றம்",
    step4Description: "RetailOS க்கு சட்டப்பூர்வ இணக்கம் மற்றும் வணிக சரிபார்ப்புக்காக குறிப்பிட்ட ஆவணங்கள் தேவை. வேகமான செயலாக்கம் மற்றும் சரிபார்ப்புக்காக அனைத்து தேவையான ஆவணங்களின் தெளிவான, உயர்தர படங்களை பதிவேற்றவும்.",
    storePhotosSection: "அ. கடை புகைப்படங்கள் பிரிவு",
    storePhotosDocuments: "கடை புகைப்படங்கள் & ஆவணங்கள்",
    storeFrontView: "கடை முன் காட்சி *",
    clickUploadDragDrop: "பதிவேற்ற கிளிக் செய்யவும் அல்லது இழுத்து விடவும்",
    pngJpgUpTo5MB: "PNG, JPG 5MB வரை",
    interiorView: "உள்ளே காட்சி",
    uploadedSuccessfully: "வெற்றிகரமாக பதிவேற்றப்பட்டது",
    remove: "அகற்று",
    legalDocumentsUpload: "ஆ. சட்டப்பூர்வ ஆவணங்கள் பதிவேற்றம்",
    legalDocumentsSection: "சட்டப்பூர்வ ஆவணங்கள் பிரிவு",
    requiredLegalDocuments: "தேவையான சட்டப்பூர்வ ஆவணங்கள்",
    gstCertificate: "GST சான்றிதழ் *",
    verified: "சரிபார்க்கப்பட்டது",
    uploadPanCard: "PAN அட்டை பதிவேற்றவும்",
    documentUploadTips: "ஆவண பதிவேற்ற குறிப்புகள்",
    ensureDocumentsClear: "• ஆவணங்கள் தெளிவாக உள்ளன மற்றும் அனைத்து உரையும் படிக்கக்கூடியது என்பதை உறுதிப்படுத்தவும்",
    uploadOriginalDocuments: "• சாத்தியமானபோது மூல ஆவணங்களை பதிவேற்றவும், புகைப்பட நகல்களை அல்ல",
    fileSizeUnder5MB: "• வேகமான செயலாக்கத்திற்காக கோப்பு அளவு 5MB க்கு கீழே இருக்க வேண்டும்",
    supportedFormats: "• ஆதரிக்கப்படும் வடிவங்கள்: PNG, JPG, PDF",
    
    // Step 5 - Owner and Nominee Information
    step5Title: "உரிமையாளர் மற்றும் பரிந்துரைப்பாளர் தகவல்",
    step5Description: "முழுமையான உரிமையாளர் விவரங்கள் மற்றும் பரிந்துரைப்பாளர் தகவல் வணிக தொடர்ச்சி, சட்டப்பூர்வ இணக்கம் மற்றும் அவசர தொடர்பு நடைமுறைகளுக்கு அவசியம்.",
    ownerDetailsForm: "அ. உரிமையாளர் விவரங்கள் படிவம்",
    ownerInformation: "உரிமையாளர் தகவல்",
    ownerFullName: "உரிமையாளர் முழு பெயர் *",
    ownerPhone: "உரிமையாளர் தொலைபேசி *",
    ownerEmail: "உரிமையாளர் மின்னஞ்சல் *",
    ownerPhoto: "உரிமையாளர் புகைப்படம்",
    nomineeEmergencyContact: "ஆ. பரிந்துரைப்பாளர் மற்றும் அவசர தொடர்பு",
    nomineeDetails: "பரிந்துரைப்பாளர் விவரங்கள்",
    nomineeName: "பரிந்துரைப்பாளர் பெயர் *",
    relationship: "உறவு *",
    nomineePhone: "பரிந்துரைப்பாளர் தொலைபேசி *",
    aadharCard: "ஆதார் அட்டை",
    uploadAadharCard: "ஆதார் அட்டை பதிவேற்றவும்",
    
    // Step 6 - Bank Account Configuration
    step6Title: "வங்கி கணக்கு கட்டமைப்பு",
    step6Description: "வங்கி தகவல் கட்டண செயலாக்கம், விற்பனையாளர் கட்டணங்கள் மற்றும் நிதி கண்காணிப்புக்கு முக்கியமானது. கட்டண தாமதங்களைத் தவிர்க்க அனைத்து வங்கி விவரங்களும் துல்லியமாக உள்ளன என்பதை உறுதிப்படுத்தவும்.",
    bankDetailsForm: "அ. வங்கி விவரங்கள் படிவம்",
    bankAccountDetails: "வங்கி கணக்கு விவரங்கள்",
    bankName: "வங்கி பெயர் *",
    accountHolderName: "கணக்கு வைத்திருப்பவர் பெயர் *",
    accountNumber: "கணக்கு எண் *",
    accountNumberEncrypted: "கணக்கு எண் பாதுகாப்புக்காக குறியாக்கம் செய்யப்பட்டுள்ளது",
    ifscCode: "IFSC குறியீடு *",
    cancelledCheque: "ரத்து செய்யப்பட்ட செக்",
    uploaded: "பதிவேற்றப்பட்டது",
    bankVerificationStatus: "ஆ. வங்கி சரிபார்ப்பு நிலை",
    bankAccountVerification: "வங்கி கணக்கு சரிபார்ப்பு",
    bankAccountVerified: "வங்கி கணக்கு சரிபார்க்கப்பட்டது",
    bankAccountVerifiedDesc: "உங்கள் வங்கி கணக்கு வெற்றிகரமாக சரிபார்க்கப்பட்டது. நீங்கள் இப்போது கணினி மூலம் கட்டணங்களை பெறலாம் மற்றும் விற்பனையாளர் கட்டணங்களை செலுத்தலாம்.",
    accountHolderVerified: "கணக்கு வைத்திருப்பவர் பெயர் சரிபார்க்கப்பட்டது",
    ifscCodeValidated: "IFSC குறியீடு சரிபார்க்கப்பட்டது",
    accountNumberFormatChecked: "கணக்கு எண் வடிவம் சரிபார்க்கப்பட்டது",
    cancelledChequeReviewed: "ரத்து செய்யப்பட்ட செக் பரிசீலிக்கப்பட்டது",
    securityInformation: "பாதுகாப்பு தகவல்",
    securityInfoDesc: "அனைத்து வங்கி தகவலும் வங்கி-தர பாதுகாப்புடன் குறியாக்கம் செய்யப்பட்டுள்ளது. உங்கள் கணக்கு விவரங்கள் எப்போதும் எளிய உரையில் சேமிக்கப்படுவதில்லை மற்றும் கட்டண செயலாக்கத்திற்காக அதிகாரப்பூர்வ பணியாளர்களுக்கு மட்டுமே அணுகக்கூடியவை.",
    
    // Step 7 - User Management Setup
    step7Title: "பயனர் மேலாண்மை அமைப்பு",
    step7Description: "சரியான பாத்திரங்கள் மற்றும் அனுமதிகளுடன் பயனர் கணக்குகளை அமைப்பது பாதுகாப்பான அணுகல் கட்டுப்பாடு மற்றும் செயல்பாட்டு திறனை உறுதிப்படுத்துகிறது. ஒவ்வொரு பயனரும் தங்கள் வேலை செயல்பாட்டிற்கு தேவையான அம்சங்களுக்கு மட்டுமே அணுகலைக் கொண்டிருக்க வேண்டும்.",
    accessingUserManagement: "அ. பயனர் மேலாண்மையை அணுகுதல்",
    userManagement: "பயனர் மேலாண்மை",
    manageStaffAccess: "உங்கள் சூப்பர்மார்க்கெட்டிற்கான ஊழியர் அணுகல் மற்றும் பாத்திரங்களை நிர்வகிக்கவும்",
    addNewUser: "புதிய பயனரை சேர்க்கவும்",
    totalUsers: "மொத்த பயனர்கள்",
    activeUsers: "செயலில் உள்ள பயனர்கள்",
    pendingInvites: "நிலுவையில் உள்ள அழைப்புகள்",
    roleTemplates: "பாத்திர வார்ப்புருக்கள்",
    creatingNewUser: "ஆ. புதிய பயனரை உருவாக்குதல்",
    addNewUserForm: "புதிய பயனரை சேர்ப்பதற்கான படிவம்",
    fullName: "முழு பெயர் *",
    enterFullName: "முழு பெயரை உள்ளிடவும்",
    emailAddress: "மின்னஞ்சல் முகவரி *",
    phoneNumber: "தொலைபேசி எண் *",
    department: "துறை",
    selectDepartment: "துறையைத் தேர்ந்தெடுக்கவும்",
    operations: "செயல்பாடுகள்",
    inventory: "சரக்கு",
    sales: "விற்பனை",
    management: "மேலாண்மை",
    roleTemplate: "பாத்திர வார்ப்புரு *",
    selectRoleTemplate: "பாத்திர வார்ப்புருவைத் தேர்ந்தெடுக்கவும்",
    storeManager: "கடை மேலாளர்",
    inventoryManager: "சரக்கு மேலாளர்",
    cashier: "பணப்பெட்டி",
    fulfillmentStaff: "நிறைவேற்றும் ஊழியர்கள்",
    roleTemplatesPermissions: "இ. பாத்திர வார்ப்புருக்கள் மற்றும் அனுமதிகள்",
    permissionManagementInterface: "அனுமதி மேலாண்மை இடைமுகம்",
    roleTemplateInventoryManager: "பாத்திர வார்ப்புரு: சரக்கு மேலாளர்",
    inventoryPermissions: "சரக்கு அனுமதிகள்",
    viewInventoryDashboard: "சரக்கு டாஷ்போர்டைக் காண்க",
    manageProducts: "தயாரிப்புகளை நிர்வகிக்கவும்",
    createPurchaseOrders: "கொள்முதல் ஆணைகளை உருவாக்கவும்",
    warehouseManagement: "கிடங்கு மேலாண்மை",
    otherPermissions: "பிற அனுமதிகள்",
    posDashboard: "POS டாஷ்போர்டு",
    orderManagement: "ஆணை மேலாண்மை",
    financialReports: "நிதி அறிக்கைகள்",
    userManagementPerm: "பயனர் மேலாண்மை",
    fullAccess: "முழு அணுகல்",
    readOnly: "படிப்பதற்கு மட்டும்",
    noAccess: "அணுகல் இல்லை",
    roleTemplateBenefits: "பாத்திர வார்ப்புரு நன்மைகள்:",
    roleTemplateBenefitsDesc: "முன்-கட்டமைக்கப்பட்ட பாத்திர வார்ப்புருக்களைப் பயன்படுத்துவது ஒரே மாதிரியான பதவிகளில் நிலையான அனுமதிகளை உறுதிப்படுத்துகிறது மற்றும் புதிய பயனர்களுக்கான அமைப்பு நேரத்தைக் குறைக்கிறது.",
    userStatusActivity: "ஈ. பயனர் நிலை மற்றும் செயல்பாட்டு கண்காணிப்பு",
    userListStatusIndicators: "நிலை குறிகாட்டிகளுடன் பயனர் பட்டியல்",
    active: "செயலில்",
    pendingInvite: "நிலுவையில் உள்ள அழைப்பு",
    lastLogin: "கடைசி உள்நுழைவு",
    actions: "செயல்கள்",
    edit: "திருத்து",
    resendInvite: "அழைப்பை மீண்டும் அனுப்பு",
    never: "ஒருபோதும்",
    inviteSentDaysAgo: "2 நாட்களுக்கு முன் அழைப்பு அனுப்பப்பட்டது",
    
    // Common UI elements
    retailOS: "RetailOS",
    supermarketManagement: "சூப்பர்மார்க்கெட் மேலாண்மை",
    inventory: "சரக்கு",
    userManagement: "பயனர் மேலாண்மை",
    profileCompletionPercent: "75%",
    kingsSupermarket: "கிங்ஸ் சூப்பர்மார்க்கெட்",
    kingsRetailPvtLtd: "கிங்ஸ் ரிடெயில் பிரைவேட் லிமிடெட்",
    gstExample: "29AABCU9567M1Z5",
    panExample: "AABCU9567M",
    fssaiExample: "12345678901234",
    establishmentYearExample: "2018",
    phoneExample: "+91 98765 43210",
    emailExample: "contact@kingsmarket.com",
    storeSizeExample: "2500",
    streetExample: "123 வணிக தெரு, சந்தை பகுதி",
    cityExample: "பெங்களூரு",
    districtExample: "பெங்களூரு நகரம்",
    stateExample: "கர்நாடகா",
    zipExample: "560001",
    countryExample: "இந்தியா",
    latitudeExample: "12.9716",
    longitudeExample: "77.5946",
    storeInteriorJpg: "store_interior.jpg",
    mbUploadedSuccessfully: "2.3 MB • வெற்றிகரமாக பதிவேற்றப்பட்டது",
    gstCertificatePdf: "gst_certificate.pdf",
    mbVerified: "1.8 MB • சரிபார்க்கப்பட்டது ✓",
    cancelledChequePdf: "cancelled_cheque.pdf",
    kbUploaded: "956 KB • பதிவேற்றப்பட்டது",
    ownerPhotoJpg: "owner_photo.jpg",
    mb: "1.2 MB",
    rajeshKumarSingh: "ராஜேஷ் குமார் சிங்",
    rajeshEmail: "rajesh@kingsmarket.com",
    priyaSingh: "பிரியா சிங்",
    spouse: "துணைவர்",
    priyaPhone: "+91 98765 43211",
    hdfcBank: "HDFC வங்கி",
    accountNumberExample: "1234567890123456",
    ifscExample: "HDFC0001234",
    rajeshSingh: "ராஜேஷ் சிங்",
    rajeshEmailShort: "rajesh@kingsmarket.com",
    priyaSharma: "பிரியா ஷர்மா",
    priyaEmail: "priya@kingsmarket.com",
    hoursAgo: "2 மணி நேரத்திற்கு முன்",
    today: "இன்று, 10:30 AM",
    inviteSentDaysAgo: "2 நாட்களுக்கு முன் அழைப்பு அனுப்பப்பட்டது",
    
    // Table headers and UI elements
    user: "பயனர்",
    role: "பாத்திரம்",
    status: "நிலை",
    lastLogin: "கடைசி உள்நுழைவு",
    actions: "செயல்கள்",
  },
  hi: {
    pageTitle: "सुपरमार्केट ऑनबोर्डिंग मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "अपने स्टोर प्रोफाइल को सेट करके, यूजर खातों को कॉन्फ़िगर करके, और कुशल संचालन के लिए अपने सुपरमार्केट को तैयार करके RetailOS के साथ शुरू करें।",
    nextStepsTitle: "ऑनबोर्डिंग पूरी हुई!",
    nextStepsDescription: "आपका सुपरमार्केट अब सेट हो गया है और संचालन के लिए तैयार है। अगला, कुशल इन्वेंटरी प्रबंधन के लिए अपने वेयरहाउस लेआउट को कॉन्फ़िगर करें।",
    nextStepsButton: "वेयरहाउस प्रबंधन पर जारी रखें",
    
    // Step 1 - Accessing Supermarket Profile
    step1Title: "सुपरमार्केट प्रोफाइल तक पहुंचना",
    step1Description: "आपका पहला कदम सुपरमार्केट प्रोफाइल खंड में नेविगेट करना है। यहां आप सभी आवश्यक व्यावसायिक जानकारी को कॉन्फ़िगर करेंगे जो चालान, खरीद आदेशों और ग्राहक संचार के लिए पूरे सिस्टम में उपयोग की जाएगी।",
    navigationToProfile: "ए. प्रोफाइल तक नेविगेशन",
    accessingProfileSidebar: "साइडबार से सुपरमार्केट प्रोफाइल तक पहुंचना",
    clickSupermarketProfile: "अपने स्टोर कॉन्फ़िगरेशन तक पहुंचने के लिए मुख्य साइडबार में \"सुपरमार्केट प्रोफाइल\" पर क्लिक करें।",
    profileDashboardOverview: "बी. प्रोफाइल डैशबोर्ड अवलोकन",
    supermarketProfile: "सुपरमार्केट प्रोफाइल",
    manageStoreBusinessInfo: "अपने सभी स्टोर और व्यावसायिक जानकारी का प्रबंधन करें",
    saveChanges: "परिवर्तन सहेजें",
    reset: "रीसेट",
    profileCompletion: "प्रोफाइल पूर्णता",
    completeBankDetails: "100% तक पहुंचने के लिए अपने बैंक विवरण पूरे करें",
    
    // Step 2 - Store Information Setup
    step2Title: "स्टोर जानकारी सेटअप",
    step2Description: "स्टोर जानकारी खंड में आपके व्यावसायिक पहचान विवरण हैं। यह जानकारी चालान, खरीद आदेशों और आधिकारिक संचार सहित सभी उत्पन्न दस्तावेजों में दिखाई देती है।",
    basicStoreDetails: "ए. बुनियादी स्टोर विवरण फॉर्म",
    storeInformation: "स्टोर जानकारी",
    storeName: "स्टोर का नाम *",
    legalBusinessName: "कानूनी व्यावसायिक नाम *",
    gstNumber: "GST संख्या *",
    panNumber: "PAN संख्या",
    fssaiLicense: "FSSAI लाइसेंस",
    establishmentYear: "स्थापना का वर्ष",
    contactInformation: "बी. संपर्क जानकारी",
    storeContactDetails: "स्टोर संपर्क विवरण",
    primaryPhone: "प्राथमिक फोन *",
    businessEmail: "व्यावसायिक ईमेल *",
    storeSize: "स्टोर का आकार (वर्ग फुट)",
    validationErrorHandling: "सी. सत्यापन और त्रुटि प्रबंधन",
    formValidationMessages: "फॉर्म सत्यापन संदेश",
    validationErrors: "सत्यापन त्रुटियां",
    gstFormatInvalid: "• GST संख्या का प्रारूप अमान्य है (15 अक्षर होने चाहिए)",
    businessEmailRequired: "• व्यावसायिक ईमेल आवश्यक है",
    panNumberLength: "• PAN संख्या 10 अक्षर होनी चाहिए",
    storeInfoSaved: "स्टोर जानकारी सफलतापूर्वक सहेजी गई!",
    
    // Step 3 - Address and Location Configuration
    step3Title: "पता और स्थान कॉन्फ़िगरेशन",
    step3Description: "सटीक पता और स्थान डेटा डिलीवरी लॉजिस्टिक्स, विक्रेता संचार और नियामक अनुपालन के लिए महत्वपूर्ण है। सिस्टम इष्टतम डिलीवरी रूटिंग के लिए सटीक भू-स्थान का समर्थन करता है।",
    physicalAddressEntry: "ए. भौतिक पता प्रविष्टि",
    storeAddressLocation: "स्टोर पता और स्थान",
    streetAddress: "सड़क का पता *",
    city: "शहर *",
    district: "जिला",
    state: "राज्य *",
    zipCode: "ZIP कोड *",
    country: "देश",
    gpsCoordinatesMap: "बी. GPS निर्देशांक और मानचित्र एकीकरण",
    locationCoordinatesMap: "स्थान निर्देशांक और मानचित्र",
    gpsCoordinates: "GPS निर्देशांक",
    latitude: "अक्षांश",
    longitude: "देशांतर",
    autoDetectLocation: "स्वचालित स्थान पता लगाएं",
    mapPreview: "मानचित्र पूर्वावलोकन",
    interactiveMapAppear: "इंटरैक्टिव मानचित्र यहां दिखाई देगा",
    showingKingsMarket: "दिखा रहा है: किंग्स सुपरमार्केट, बेंगलुरु",
    preciseLocationHelps: "सटीक स्थान डिलीवरी रूट अनुकूलन और विक्रेता लॉजिस्टिक्स में मदद करता है।",
    
    // Step 4 - Document and Photo Upload
    step4Title: "दस्तावेज और फोटो अपलोड",
    step4Description: "RetailOS को कानूनी अनुपालन और व्यावसायिक सत्यापन के लिए विशिष्ट दस्तावेजों की आवश्यकता है। तेजी से प्रसंस्करण और सत्यापन के लिए सभी आवश्यक दस्तावेजों की स्पष्ट, उच्च-गुणवत्ता वाली छवियों को अपलोड करें।",
    storePhotosSection: "ए. स्टोर फोटो खंड",
    storePhotosDocuments: "स्टोर फोटो और दस्तावेज",
    storeFrontView: "स्टोर का सामने का दृश्य *",
    clickUploadDragDrop: "अपलोड करने के लिए क्लिक करें या खींचें और छोड़ें",
    pngJpgUpTo5MB: "PNG, JPG 5MB तक",
    interiorView: "आंतरिक दृश्य",
    uploadedSuccessfully: "सफलतापूर्वक अपलोड किया गया",
    remove: "हटाएं",
    legalDocumentsUpload: "बी. कानूनी दस्तावेज अपलोड",
    legalDocumentsSection: "कानूनी दस्तावेज खंड",
    requiredLegalDocuments: "आवश्यक कानूनी दस्तावेज",
    gstCertificate: "GST प्रमाणपत्र *",
    verified: "सत्यापित",
    uploadPanCard: "PAN कार्ड अपलोड करें",
    documentUploadTips: "दस्तावेज अपलोड टिप्स",
    ensureDocumentsClear: "• सुनिश्चित करें कि दस्तावेज स्पष्ट हैं और सभी पाठ पठनीय हैं",
    uploadOriginalDocuments: "• जब संभव हो तो मूल दस्तावेज अपलोड करें, फोटोकॉपी नहीं",
    fileSizeUnder5MB: "• तेजी से प्रसंस्करण के लिए फ़ाइल का आकार 5MB से कम होना चाहिए",
    supportedFormats: "• समर्थित प्रारूप: PNG, JPG, PDF",
    
    // Step 5 - Owner and Nominee Information
    step5Title: "मालिक और नामांकित व्यक्ति की जानकारी",
    step5Description: "पूर्ण मालिक विवरण और नामांकित व्यक्ति की जानकारी व्यावसायिक निरंतरता, कानूनी अनुपालन और आपातकालीन संपर्क प्रक्रियाओं के लिए आवश्यक है।",
    ownerDetailsForm: "ए. मालिक विवरण फॉर्म",
    ownerInformation: "मालिक की जानकारी",
    ownerFullName: "मालिक का पूरा नाम *",
    ownerPhone: "मालिक का फोन *",
    ownerEmail: "मालिक का ईमेल *",
    ownerPhoto: "मालिक की फोटो",
    nomineeEmergencyContact: "बी. नामांकित व्यक्ति और आपातकालीन संपर्क",
    nomineeDetails: "नामांकित व्यक्ति के विवरण",
    nomineeName: "नामांकित व्यक्ति का नाम *",
    relationship: "संबंध *",
    nomineePhone: "नामांकित व्यक्ति का फोन *",
    aadharCard: "आधार कार्ड",
    uploadAadharCard: "आधार कार्ड अपलोड करें",
    
    // Step 6 - Bank Account Configuration
    step6Title: "बैंक खाता कॉन्फ़िगरेशन",
    step6Description: "बैंकिंग जानकारी भुगतान प्रसंस्करण, विक्रेता भुगतान और वित्तीय ट्रैकिंग के लिए महत्वपूर्ण है। भुगतान में देरी से बचने के लिए सुनिश्चित करें कि सभी बैंक विवरण सटीक हैं।",
    bankDetailsForm: "ए. बैंक विवरण फॉर्म",
    bankAccountDetails: "बैंक खाता विवरण",
    bankName: "बैंक का नाम *",
    accountHolderName: "खाता धारक का नाम *",
    accountNumber: "खाता संख्या *",
    accountNumberEncrypted: "खाता संख्या सुरक्षा के लिए एन्क्रिप्ट की गई है",
    ifscCode: "IFSC कोड *",
    cancelledCheque: "रद्द चेक",
    uploaded: "अपलोड किया गया",
    bankVerificationStatus: "बी. बैंक सत्यापन स्थिति",
    bankAccountVerification: "बैंक खाता सत्यापन",
    bankAccountVerified: "बैंक खाता सत्यापित",
    bankAccountVerifiedDesc: "आपका बैंक खाता सफलतापूर्वक सत्यापित हो गया है। अब आप सिस्टम के माध्यम से भुगतान प्राप्त कर सकते हैं और विक्रेता भुगतान कर सकते हैं।",
    accountHolderVerified: "खाता धारक का नाम सत्यापित",
    ifscCodeValidated: "IFSC कोड सत्यापित",
    accountNumberFormatChecked: "खाता संख्या प्रारूप जांचा गया",
    cancelledChequeReviewed: "रद्द चेक की समीक्षा की गई",
    securityInformation: "सुरक्षा जानकारी",
    securityInfoDesc: "सभी बैंकिंग जानकारी बैंक-ग्रेड सुरक्षा के साथ एन्क्रिप्ट की गई है। आपके खाता विवरण कभी भी सादे पाठ में संग्रहीत नहीं किए जाते और भुगतान प्रसंस्करण के लिए केवल अधिकृत कर्मियों को ही सुलभ होते हैं।",
    
    // Step 7 - User Management Setup
    step7Title: "यूजर प्रबंधन सेटअप",
    step7Description: "उचित भूमिकाओं और अनुमतियों के साथ यूजर खातों को सेट करना सुरक्षित पहुंच नियंत्रण और परिचालन दक्षता सुनिश्चित करता है। प्रत्येक यूजर को केवल उन सुविधाओं तक पहुंच होनी चाहिए जो उनके नौकरी के कार्य के लिए आवश्यक हैं।",
    accessingUserManagement: "ए. यूजर प्रबंधन तक पहुंचना",
    userManagement: "यूजर प्रबंधन",
    manageStaffAccess: "अपने सुपरमार्केट के लिए स्टाफ पहुंच और भूमिकाओं का प्रबंधन करें",
    addNewUser: "नया यूजर जोड़ें",
    totalUsers: "कुल यूजर",
    activeUsers: "सक्रिय यूजर",
    pendingInvites: "लंबित आमंत्रण",
    roleTemplates: "भूमिका टेम्पलेट",
    creatingNewUser: "बी. नया यूजर बनाना",
    addNewUserForm: "नया यूजर जोड़ने का फॉर्म",
    fullName: "पूरा नाम *",
    enterFullName: "पूरा नाम दर्ज करें",
    emailAddress: "ईमेल पता *",
    phoneNumber: "फोन नंबर *",
    department: "विभाग",
    selectDepartment: "विभाग चुनें",
    operations: "संचालन",
    inventory: "इन्वेंटरी",
    sales: "बिक्री",
    management: "प्रबंधन",
    roleTemplate: "भूमिका टेम्पलेट *",
    selectRoleTemplate: "भूमिका टेम्पलेट चुनें",
    storeManager: "स्टोर मैनेजर",
    inventoryManager: "इन्वेंटरी मैनेजर",
    cashier: "कैशियर",
    fulfillmentStaff: "पूर्ति स्टाफ",
    roleTemplatesPermissions: "सी. भूमिका टेम्पलेट और अनुमतियां",
    permissionManagementInterface: "अनुमति प्रबंधन इंटरफेस",
    roleTemplateInventoryManager: "भूमिका टेम्पलेट: इन्वेंटरी मैनेजर",
    inventoryPermissions: "इन्वेंटरी अनुमतियां",
    viewInventoryDashboard: "इन्वेंटरी डैशबोर्ड देखें",
    manageProducts: "उत्पादों का प्रबंधन करें",
    createPurchaseOrders: "खरीद आदेश बनाएं",
    warehouseManagement: "वेयरहाउस प्रबंधन",
    otherPermissions: "अन्य अनुमतियां",
    posDashboard: "POS डैशबोर्ड",
    orderManagement: "आदेश प्रबंधन",
    financialReports: "वित्तीय रिपोर्ट",
    userManagementPerm: "यूजर प्रबंधन",
    fullAccess: "पूर्ण पहुंच",
    readOnly: "केवल पढ़ने के लिए",
    noAccess: "कोई पहुंच नहीं",
    roleTemplateBenefits: "भूमिका टेम्पलेट लाभ:",
    roleTemplateBenefitsDesc: "पूर्व-कॉन्फ़िगर किए गए भूमिका टेम्पलेट का उपयोग करना समान पदों में सुसंगत अनुमतियों को सुनिश्चित करता है और नए यूजर के लिए सेटअप समय को कम करता है।",
    userStatusActivity: "डी. यूजर स्थिति और गतिविधि ट्रैकिंग",
    userListStatusIndicators: "स्थिति संकेतकों के साथ यूजर सूची",
    active: "सक्रिय",
    pendingInvite: "लंबित आमंत्रण",
    lastLogin: "अंतिम लॉगिन",
    actions: "कार्रवाई",
    edit: "संपादित करें",
    resendInvite: "आमंत्रण पुनः भेजें",
    never: "कभी नहीं",
    inviteSentDaysAgo: "2 दिन पहले आमंत्रण भेजा गया",
    
    // Common UI elements
    retailOS: "RetailOS",
    supermarketManagement: "सुपरमार्केट प्रबंधन",
    inventory: "इन्वेंटरी",
    userManagement: "यूजर प्रबंधन",
    profileCompletionPercent: "75%",
    kingsSupermarket: "किंग्स सुपरमार्केट",
    kingsRetailPvtLtd: "किंग्स रिटेल प्राइवेट लिमिटेड",
    gstExample: "29AABCU9567M1Z5",
    panExample: "AABCU9567M",
    fssaiExample: "12345678901234",
    establishmentYearExample: "2018",
    phoneExample: "+91 98765 43210",
    emailExample: "contact@kingsmarket.com",
    storeSizeExample: "2500",
    streetExample: "123 कमर्शियल स्ट्रीट, मार्केट एरिया",
    cityExample: "बेंगलुरु",
    districtExample: "बेंगलुरु शहरी",
    stateExample: "कर्नाटक",
    zipExample: "560001",
    countryExample: "भारत",
    latitudeExample: "12.9716",
    longitudeExample: "77.5946",
    storeInteriorJpg: "store_interior.jpg",
    mbUploadedSuccessfully: "2.3 MB • सफलतापूर्वक अपलोड किया गया",
    gstCertificatePdf: "gst_certificate.pdf",
    mbVerified: "1.8 MB • सत्यापित ✓",
    cancelledChequePdf: "cancelled_cheque.pdf",
    kbUploaded: "956 KB • अपलोड किया गया",
    ownerPhotoJpg: "owner_photo.jpg",
    mb: "1.2 MB",
    rajeshKumarSingh: "राजेश कुमार सिंह",
    rajeshEmail: "rajesh@kingsmarket.com",
    priyaSingh: "प्रिया सिंह",
    spouse: "पति/पत्नी",
    priyaPhone: "+91 98765 43211",
    hdfcBank: "HDFC बैंक",
    accountNumberExample: "1234567890123456",
    ifscExample: "HDFC0001234",
    rajeshSingh: "राजेश सिंह",
    rajeshEmailShort: "rajesh@kingsmarket.com",
    priyaSharma: "प्रिया शर्मा",
    priyaEmail: "priya@kingsmarket.com",
    hoursAgo: "2 घंटे पहले",
    today: "आज, 10:30 AM",
    inviteSentDaysAgo: "2 दिन पहले आमंत्रण भेजा गया",
    
    // Table headers and UI elements
    user: "यूजर",
    role: "भूमिका",
    status: "स्थिति",
    lastLogin: "अंतिम लॉगिन",
    actions: "कार्रवाई",
  },
  ml: {
    pageTitle: "സൂപ്പർമാർക്കറ്റ് ഓൺബോർഡിംഗ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് തിരികെ പോകുക",
    description: "നിങ്ങളുടെ സ്റ്റോർ പ്രൊഫൈൽ സജ്ജമാക്കുന്നതിലൂടെ, യൂസർ അക്കൗണ്ടുകൾ കോൺഫിഗർ ചെയ്യുന്നതിലൂടെ, കാര്യക്ഷമമായ പ്രവർത്തനങ്ങൾക്കായി നിങ്ങളുടെ സൂപ്പർമാർക്കറ്റ് തയ്യാറാക്കുന്നതിലൂടെ RetailOS ഉപയോഗിച്ച് ആരംഭിക്കുക.",
    nextStepsTitle: "ഓൺബോർഡിംഗ് പൂർത്തിയായി!",
    nextStepsDescription: "നിങ്ങളുടെ സൂപ്പർമാർക്കറ്റ് ഇപ്പോൾ സജ്ജമാക്കിയിരിക്കുന്നു, പ്രവർത്തനങ്ങൾക്ക് തയ്യാറാണ്. അടുത്തതായി, കാര്യക്ഷമമായ ഇൻവെന്ററി മാനേജ്മെന്റിനായി നിങ്ങളുടെ വെയർഹൗസ് ലേഔട്ട് കോൺഫിഗർ ചെയ്യുക.",
    nextStepsButton: "വെയർഹൗസ് മാനേജ്മെന്റിലേക്ക് തുടരുക",
    
    // Step 1 - Accessing Supermarket Profile
    step1Title: "സൂപ്പർമാർക്കറ്റ് പ്രൊഫൈൽ ആക്സസ് ചെയ്യുന്നത്",
    step1Description: "നിങ്ങളുടെ ആദ്യ ഘട്ടം സൂപ്പർമാർക്കറ്റ് പ്രൊഫൈൽ വിഭാഗത്തിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക എന്നതാണ്. ഇവിടെ നിങ്ങൾ ഇൻവോയ്സുകൾ, വാങ്ങൽ ഓർഡറുകൾ, ഉപഭോക്തൃ ആശയവിനിമയങ്ങൾ എന്നിവയ്ക്കായി സിസ്റ്റത്തിലുടനീളം ഉപയോഗിക്കപ്പെടുന്ന എല്ലാ അത്യാവശ്യ ബിസിനസ് വിവരങ്ങളും കോൺഫിഗർ ചെയ്യും.",
    navigationToProfile: "എ. പ്രൊഫൈലിലേക്ക് നാവിഗേഷൻ",
    accessingProfileSidebar: "സൈഡ്ബാറിൽ നിന്ന് സൂപ്പർമാർക്കറ്റ് പ്രൊഫൈൽ ആക്സസ് ചെയ്യുന്നത്",
    clickSupermarketProfile: "നിങ്ങളുടെ സ്റ്റോർ കോൺഫിഗറേഷൻ ആക്സസ് ചെയ്യാൻ പ്രധാന സൈഡ്ബാറിൽ \"സൂപ്പർമാർക്കറ്റ് പ്രൊഫൈൽ\" ക്ലിക്ക് ചെയ്യുക.",
    profileDashboardOverview: "ബി. പ്രൊഫൈൽ ഡാഷ്ബോർഡ് അവലോകനം",
    supermarketProfile: "സൂപ്പർമാർക്കറ്റ് പ്രൊഫൈൽ",
    manageStoreBusinessInfo: "നിങ്ങളുടെ എല്ലാ സ്റ്റോർ, ബിസിനസ് വിവരങ്ങളും മാനേജ് ചെയ്യുക",
    saveChanges: "മാറ്റങ്ങൾ സേവ് ചെയ്യുക",
    reset: "റീസെറ്റ്",
    profileCompletion: "പ്രൊഫൈൽ പൂർത്തീകരണം",
    completeBankDetails: "100% എത്താൻ നിങ്ങളുടെ ബാങ്ക് വിവരങ്ങൾ പൂർത്തിയാക്കുക",
    
    // Step 2 - Store Information Setup
    step2Title: "സ്റ്റോർ വിവര സജ്ജീകരണം",
    step2Description: "സ്റ്റോർ വിവര വിഭാഗത്തിൽ നിങ്ങളുടെ ബിസിനസ് ഐഡന്റിറ്റി വിവരങ്ങൾ അടങ്ങിയിരിക്കുന്നു. ഈ വിവരങ്ങൾ ഇൻവോയ്സുകൾ, വാങ്ങൽ ഓർഡറുകൾ, ഔദ്യോഗിക ആശയവിനിമയങ്ങൾ എന്നിവയുൾപ്പെടെ എല്ലാ ഉത്പാദിപ്പിക്കപ്പെട്ട രേഖകളിലും പ്രത്യക്ഷപ്പെടുന്നു.",
    basicStoreDetails: "എ. അടിസ്ഥാന സ്റ്റോർ വിവര ഫോം",
    storeInformation: "സ്റ്റോർ വിവരങ്ങൾ",
    storeName: "സ്റ്റോർ പേര് *",
    legalBusinessName: "നിയമപരമായ ബിസിനസ് പേര് *",
    gstNumber: "GST നമ്പർ *",
    panNumber: "PAN നമ്പർ",
    fssaiLicense: "FSSAI ലൈസൻസ്",
    establishmentYear: "സ്ഥാപന വർഷം",
    contactInformation: "ബി. ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
    storeContactDetails: "സ്റ്റോർ ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
    primaryPhone: "പ്രാഥമിക ഫോൺ *",
    businessEmail: "ബിസിനസ് ഇമെയിൽ *",
    storeSize: "സ്റ്റോർ വലുപ്പം (ചതുരശ്ര അടി)",
    validationErrorHandling: "സി. സാധൂകരണം, പിശക് കൈകാര്യം ചെയ്യൽ",
    formValidationMessages: "ഫോം സാധൂകരണ സന്ദേശങ്ങൾ",
    validationErrors: "സാധൂകരണ പിശകുകൾ",
    gstFormatInvalid: "• GST നമ്പർ ഫോർമാറ്റ് അസാധുവാണ് (15 അക്ഷരങ്ങൾ ആയിരിക്കണം)",
    businessEmailRequired: "• ബിസിനസ് ഇമെയിൽ ആവശ്യമാണ്",
    panNumberLength: "• PAN നമ്പർ 10 അക്ഷരങ്ങൾ ആയിരിക്കണം",
    storeInfoSaved: "സ്റ്റോർ വിവരങ്ങൾ വിജയകരമായി സേവ് ചെയ്തു!",
    
    // Step 3 - Address and Location Configuration
    step3Title: "വിലാസം, സ്ഥാന കോൺഫിഗറേഷൻ",
    step3Description: "കൃത്യമായ വിലാസം, സ്ഥാന ഡാറ്റ ഡെലിവറി ലോജിസ്റ്റിക്സ്, വെണ്ടർ ആശയവിനിമയങ്ങൾ, നിയന്ത്രണാനുയോഗ്യമായ അനുസരണം എന്നിവയ്ക്ക് നിർണായകമാണ്. സിസ്റ്റം ഒപ്റ്റിമൽ ഡെലിവറി റൂട്ടിംഗിനായി കൃത്യമായ ജിയോലൊക്കേഷൻ പിന്തുണയ്ക്കുന്നു.",
    physicalAddressEntry: "എ. ഭൗതിക വിലാസ നൽകൽ",
    storeAddressLocation: "സ്റ്റോർ വിലാസം & സ്ഥാനം",
    streetAddress: "തെരുവ് വിലാസം *",
    city: "നഗരം *",
    district: "ജില്ല",
    state: "സംസ്ഥാനം *",
    zipCode: "ZIP കോഡ് *",
    country: "രാജ്യം",
    gpsCoordinatesMap: "ബി. GPS കോർഡിനേറ്റുകൾ, മാപ്പ് സംയോജനം",
    locationCoordinatesMap: "സ്ഥാന കോർഡിനേറ്റുകൾ, മാപ്പ്",
    gpsCoordinates: "GPS കോർഡിനേറ്റുകൾ",
    latitude: "അക്ഷാംശം",
    longitude: "രേഖാംശം",
    autoDetectLocation: "സ്ഥാനം ഓട്ടോ-ഡിറ്റക്റ്റ് ചെയ്യുക",
    mapPreview: "മാപ്പ് പ്രിവ്യൂ",
    interactiveMapAppear: "ഇന്ററാക്റ്റിവ് മാപ്പ് ഇവിടെ പ്രത്യക്ഷപ്പെടും",
    showingKingsMarket: "കാണിക്കുന്നു: കിംഗ്സ് സൂപ്പർമാർക്കറ്റ്, ബെംഗളൂരു",
    preciseLocationHelps: "കൃത്യമായ സ്ഥാനം ഡെലിവറി റൂട്ട് ഒപ്റ്റിമൈസേഷൻ, വെണ്ടർ ലോജിസ്റ്റിക്സ് എന്നിവയിൽ സഹായിക്കുന്നു.",
    
    // Step 4 - Document and Photo Upload
    step4Title: "രേഖ, ഫോട്ടോ അപ്‌ലോഡ്",
    step4Description: "RetailOS-ന് നിയമപരമായ അനുസരണം, ബിസിനസ് സാധൂകരണം എന്നിവയ്ക്ക് പ്രത്യേക രേഖകൾ ആവശ്യമാണ്. വേഗതയേറിയ പ്രോസസ്സിംഗിനും സാധൂകരണത്തിനും എല്ലാ ആവശ്യമായ രേഖകളുടെയും വ്യക്തമായ, ഉയർന്ന നിലവാരമുള്ള ചിത്രങ്ങൾ അപ്‌ലോഡ് ചെയ്യുക.",
    storePhotosSection: "എ. സ്റ്റോർ ഫോട്ടോകൾ വിഭാഗം",
    storePhotosDocuments: "സ്റ്റോർ ഫോട്ടോകൾ & രേഖകൾ",
    storeFrontView: "സ്റ്റോർ മുൻഭാഗ കാഴ്ച *",
    clickUploadDragDrop: "അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക അല്ലെങ്കിൽ വലിച്ചിടുക",
    pngJpgUpTo5MB: "PNG, JPG 5MB വരെ",
    interiorView: "ഉള്ളിലെ കാഴ്ച",
    uploadedSuccessfully: "വിജയകരമായി അപ്‌ലോഡ് ചെയ്തു",
    remove: "നീക്കം ചെയ്യുക",
    legalDocumentsUpload: "ബി. നിയമപരമായ രേഖകൾ അപ്‌ലോഡ്",
    legalDocumentsSection: "നിയമപരമായ രേഖകൾ വിഭാഗം",
    requiredLegalDocuments: "ആവശ്യമായ നിയമപരമായ രേഖകൾ",
    gstCertificate: "GST സർട്ടിഫിക്കറ്റ് *",
    verified: "സാധൂകരിച്ചു",
    uploadPanCard: "PAN കാർഡ് അപ്‌ലോഡ് ചെയ്യുക",
    documentUploadTips: "രേഖ അപ്‌ലോഡ് നുറുങ്ങുകൾ",
    ensureDocumentsClear: "• രേഖകൾ വ്യക്തമാണെന്നും എല്ലാ ടെക്സ്റ്റും വായിക്കാവുന്നതാണെന്നും ഉറപ്പാക്കുക",
    uploadOriginalDocuments: "• സാധ്യമാകുമ്പോൾ ഒറിജിനൽ രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക, ഫോട്ടോകോപ്പികൾ അല്ല",
    fileSizeUnder5MB: "• വേഗതയേറിയ പ്രോസസ്സിംഗിന് ഫയൽ വലുപ്പം 5MB-ൽ താഴെ ആയിരിക്കണം",
    supportedFormats: "• പിന്തുണയ്ക്കുന്ന ഫോർമാറ്റുകൾ: PNG, JPG, PDF",
    
    // Step 5 - Owner and Nominee Information
    step5Title: "ഉടമ, നാമനിർദ്ദേശം ചെയ്തയാളുടെ വിവരങ്ങൾ",
    step5Description: "പൂർണ്ണമായ ഉടമ വിവരങ്ങൾ, നാമനിർദ്ദേശം ചെയ്തയാളുടെ വിവരങ്ങൾ ബിസിനസ് തുടർച്ച, നിയമപരമായ അനുസരണം, അടിയന്തിര ബന്ധപ്പെടാനുള്ള നടപടികൾ എന്നിവയ്ക്ക് അത്യാവശ്യമാണ്.",
    ownerDetailsForm: "എ. ഉടമ വിവര ഫോം",
    ownerInformation: "ഉടമയുടെ വിവരങ്ങൾ",
    ownerFullName: "ഉടമയുടെ പൂർണ്ണ നാമം *",
    ownerPhone: "ഉടമയുടെ ഫോൺ *",
    ownerEmail: "ഉടമയുടെ ഇമെയിൽ *",
    ownerPhoto: "ഉടമയുടെ ഫോട്ടോ",
    nomineeEmergencyContact: "ബി. നാമനിർദ്ദേശം ചെയ്തയാൾ, അടിയന്തിര ബന്ധപ്പെടാനുള്ളത്",
    nomineeDetails: "നാമനിർദ്ദേശം ചെയ്തയാളുടെ വിവരങ്ങൾ",
    nomineeName: "നാമനിർദ്ദേശം ചെയ്തയാളുടെ പേര് *",
    relationship: "ബന്ധം *",
    nomineePhone: "നാമനിർദ്ദേശം ചെയ്തയാളുടെ ഫോൺ *",
    aadharCard: "ആധാർ കാർഡ്",
    uploadAadharCard: "ആധാർ കാർഡ് അപ്‌ലോഡ് ചെയ്യുക",
    
    // Step 6 - Bank Account Configuration
    step6Title: "ബാങ്ക് അക്കൗണ്ട് കോൺഫിഗറേഷൻ",
    step6Description: "ബാങ്കിംഗ് വിവരങ്ങൾ പേയ്മെന്റ് പ്രോസസ്സിംഗ്, വെണ്ടർ പേയ്മെന്റുകൾ, ധനകാര്യ ട്രാക്കിംഗ് എന്നിവയ്ക്ക് നിർണായകമാണ്. പേയ്മെന്റ് കാര്യങ്ങളിൽ കാര്യങ്ങൾ ഒഴിവാക്കാൻ എല്ലാ ബാങ്ക് വിവരങ്ങളും കൃത്യമാണെന്ന് ഉറപ്പാക്കുക.",
    bankDetailsForm: "എ. ബാങ്ക് വിവര ഫോം",
    bankAccountDetails: "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ",
    bankName: "ബാങ്കിന്റെ പേര് *",
    accountHolderName: "അക്കൗണ്ട് ഹോൾഡറുടെ പേര് *",
    accountNumber: "അക്കൗണ്ട് നമ്പർ *",
    accountNumberEncrypted: "അക്കൗണ്ട് നമ്പർ സുരക്ഷയ്ക്കായി എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു",
    ifscCode: "IFSC കോഡ് *",
    cancelledCheque: "റദ്ദാക്കിയ ചെക്ക്",
    uploaded: "അപ്‌ലോഡ് ചെയ്തു",
    bankVerificationStatus: "ബി. ബാങ്ക് സാധൂകരണ നില",
    bankAccountVerification: "ബാങ്ക് അക്കൗണ്ട് സാധൂകരണം",
    bankAccountVerified: "ബാങ്ക് അക്കൗണ്ട് സാധൂകരിച്ചു",
    bankAccountVerifiedDesc: "നിങ്ങളുടെ ബാങ്ക് അക്കൗണ്ട് വിജയകരമായി സാധൂകരിച്ചു. നിങ്ങൾക്ക് ഇപ്പോൾ സിസ്റ്റത്തിലൂടെ പേയ്മെന്റുകൾ സ്വീകരിക്കാനും വെണ്ടർ പേയ്മെന്റുകൾ നൽകാനും കഴിയും.",
    accountHolderVerified: "അക്കൗണ്ട് ഹോൾഡറുടെ പേര് സാധൂകരിച്ചു",
    ifscCodeValidated: "IFSC കോഡ് സാധൂകരിച്ചു",
    accountNumberFormatChecked: "അക്കൗണ്ട് നമ്പർ ഫോർമാറ്റ് പരിശോധിച്ചു",
    cancelledChequeReviewed: "റദ്ദാക്കിയ ചെക്ക് അവലോകനം ചെയ്തു",
    securityInformation: "സുരക്ഷാ വിവരങ്ങൾ",
    securityInfoDesc: "എല്ലാ ബാങ്കിംഗ് വിവരങ്ങളും ബാങ്ക്-ഗ്രേഡ് സുരക്ഷയോടെ എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു. നിങ്ങളുടെ അക്കൗണ്ട് വിവരങ്ങൾ ഒരിക്കലും പ്ലെയിൻ ടെക്സ്റ്റിൽ സംഭരിക്കപ്പെടുന്നില്ല, പേയ്മെന്റ് പ്രോസസ്സിംഗിനായി അധികൃത ജീവനക്കാർക്ക് മാത്രമേ ലഭ്യമാകൂ.",
    
    // Step 7 - User Management Setup
    step7Title: "യൂസർ മാനേജ്മെന്റ് സജ്ജീകരണം",
    step7Description: "ഉചിതമായ റോളുകളും അനുമതികളും ഉപയോഗിച്ച് യൂസർ അക്കൗണ്ടുകൾ സജ്ജമാക്കുന്നത് സുരക്ഷിതമായ ആക്സസ് നിയന്ത്രണവും പ്രവർത്തന കാര്യക്ഷമതയും ഉറപ്പാക്കുന്നു. ഓരോ യൂസർക്കും അവരുടെ ജോലി ധർമ്മത്തിന് ആവശ്യമായ സവിശേഷതകൾക്ക് മാത്രമേ ആക്സസ് ഉണ്ടായിരിക്കണം.",
    accessingUserManagement: "എ. യൂസർ മാനേജ്മെന്റ് ആക്സസ് ചെയ്യുന്നത്",
    userManagement: "യൂസർ മാനേജ്മെന്റ്",
    manageStaffAccess: "നിങ്ങളുടെ സൂപ്പർമാർക്കറ്റിനുള്ള സ്റ്റാഫ് ആക്സസ്, റോളുകൾ മാനേജ് ചെയ്യുക",
    addNewUser: "പുതിയ യൂസർ ചേർക്കുക",
    totalUsers: "ആകെ യൂസർമാർ",
    activeUsers: "സജീവ യൂസർമാർ",
    pendingInvites: "തീരുമാനിക്കാത്ത ക്ഷണങ്ങൾ",
    roleTemplates: "റോൾ ടെംപ്ലേറ്റുകൾ",
    creatingNewUser: "ബി. പുതിയ യൂസർ സൃഷ്ടിക്കുന്നത്",
    addNewUserForm: "പുതിയ യൂസർ ചേർക്കാനുള്ള ഫോം",
    fullName: "പൂർണ്ണ നാമം *",
    enterFullName: "പൂർണ്ണ നാമം നൽകുക",
    emailAddress: "ഇമെയിൽ വിലാസം *",
    phoneNumber: "ഫോൺ നമ്പർ *",
    department: "വകുപ്പ്",
    selectDepartment: "വകുപ്പ് തിരഞ്ഞെടുക്കുക",
    operations: "പ്രവർത്തനങ്ങൾ",
    inventory: "ഇൻവെന്ററി",
    sales: "വിൽപ്പന",
    management: "മാനേജ്മെന്റ്",
    roleTemplate: "റോൾ ടെംപ്ലേറ്റ് *",
    selectRoleTemplate: "റോൾ ടെംപ്ലേറ്റ് തിരഞ്ഞെടുക്കുക",
    storeManager: "സ്റ്റോർ മാനേജർ",
    inventoryManager: "ഇൻവെന്ററി മാനേജർ",
    cashier: "ക്യാഷിയർ",
    fulfillmentStaff: "നിറവേറ്റൽ സ്റ്റാഫ്",
    roleTemplatesPermissions: "സി. റോൾ ടെംപ്ലേറ്റുകൾ, അനുമതികൾ",
    permissionManagementInterface: "അനുമതി മാനേജ്മെന്റ് ഇന്റർഫേസ്",
    roleTemplateInventoryManager: "റോൾ ടെംപ്ലേറ്റ്: ഇൻവെന്ററി മാനേജർ",
    inventoryPermissions: "ഇൻവെന്ററി അനുമതികൾ",
    viewInventoryDashboard: "ഇൻവെന്ററി ഡാഷ്ബോർഡ് കാണുക",
    manageProducts: "ഉത്പന്നങ്ങൾ മാനേജ് ചെയ്യുക",
    createPurchaseOrders: "വാങ്ങൽ ഓർഡറുകൾ സൃഷ്ടിക്കുക",
    warehouseManagement: "വെയർഹൗസ് മാനേജ്മെന്റ്",
    otherPermissions: "മറ്റ് അനുമതികൾ",
    posDashboard: "POS ഡാഷ്ബോർഡ്",
    orderManagement: "ഓർഡർ മാനേജ്മെന്റ്",
    financialReports: "ധനകാര്യ റിപ്പോർട്ടുകൾ",
    userManagementPerm: "യൂസർ മാനേജ്മെന്റ്",
    fullAccess: "പൂർണ്ണ ആക്സസ്",
    readOnly: "വായനയ്ക്ക് മാത്രം",
    noAccess: "ആക്സസ് ഇല്ല",
    roleTemplateBenefits: "റോൾ ടെംപ്ലേറ്റ് ആനുകൂല്യങ്ങൾ:",
    roleTemplateBenefitsDesc: "മുൻ-കോൺഫിഗർ ചെയ്ത റോൾ ടെംപ്ലേറ്റുകൾ ഉപയോഗിക്കുന്നത് സമാന സ്ഥാനങ്ങളിൽ സ്ഥിരമായ അനുമതികൾ ഉറപ്പാക്കുന്നു, പുതിയ യൂസർമാർക്കുള്ള സെറ്റപ്പ് സമയം കുറയ്ക്കുന്നു.",
    userStatusActivity: "ഡി. യൂസർ നില, പ്രവർത്തന ട്രാക്കിംഗ്",
    userListStatusIndicators: "നില സൂചകങ്ങളോടെയുള്ള യൂസർ ലിസ്റ്റ്",
    active: "സജീവം",
    pendingInvite: "തീരുമാനിക്കാത്ത ക്ഷണം",
    lastLogin: "അവസാന ലോഗിൻ",
    actions: "പ്രവർത്തനങ്ങൾ",
    edit: "എഡിറ്റ് ചെയ്യുക",
    resendInvite: "ക്ഷണം വീണ്ടും അയയ്ക്കുക",
    never: "ഒരിക്കലും",
    inviteSentDaysAgo: "2 ദിവസം മുമ്പ് ക്ഷണം അയച്ചു",
    
    // Common UI elements
    retailOS: "RetailOS",
    supermarketManagement: "സൂപ്പർമാർക്കറ്റ് മാനേജ്മെന്റ്",
    inventory: "ഇൻവെന്ററി",
    userManagement: "യൂസർ മാനേജ്മെന്റ്",
    profileCompletionPercent: "75%",
    kingsSupermarket: "കിംഗ്സ് സൂപ്പർമാർക്കറ്റ്",
    kingsRetailPvtLtd: "കിംഗ്സ് റീറ്റൈൽ പ്രൈവറ്റ് ലിമിറ്റഡ്",
    gstExample: "29AABCU9567M1Z5",
    panExample: "AABCU9567M",
    fssaiExample: "12345678901234",
    establishmentYearExample: "2018",
    phoneExample: "+91 98765 43210",
    emailExample: "contact@kingsmarket.com",
    storeSizeExample: "2500",
    streetExample: "123 കൊമർഷ്യൽ സ്ട്രീറ്റ്, മാർക്കറ്റ് ഏരിയ",
    cityExample: "ബെംഗളൂരു",
    districtExample: "ബെംഗളൂരു നഗരം",
    stateExample: "കർണാടക",
    zipExample: "560001",
    countryExample: "ഇന്ത്യ",
    latitudeExample: "12.9716",
    longitudeExample: "77.5946",
    storeInteriorJpg: "store_interior.jpg",
    mbUploadedSuccessfully: "2.3 MB • വിജയകരമായി അപ്‌ലോഡ് ചെയ്തു",
    gstCertificatePdf: "gst_certificate.pdf",
    mbVerified: "1.8 MB • സാധൂകരിച്ചു ✓",
    cancelledChequePdf: "cancelled_cheque.pdf",
    kbUploaded: "956 KB • അപ്‌ലോഡ് ചെയ്തു",
    ownerPhotoJpg: "owner_photo.jpg",
    mb: "1.2 MB",
    rajeshKumarSingh: "രാജേഷ് കുമാർ സിംഗ്",
    rajeshEmail: "rajesh@kingsmarket.com",
    priyaSingh: "പ്രിയ സിംഗ്",
    spouse: "ഭാര്യ/ഭർത്താവ്",
    priyaPhone: "+91 98765 43211",
    hdfcBank: "HDFC ബാങ്ക്",
    accountNumberExample: "1234567890123456",
    ifscExample: "HDFC0001234",
    rajeshSingh: "രാജേഷ് സിംഗ്",
    rajeshEmailShort: "rajesh@kingsmarket.com",
    priyaSharma: "പ്രിയ ശർമ്മ",
    priyaEmail: "priya@kingsmarket.com",
    hoursAgo: "2 മണിക്കൂർ മുമ്പ്",
    today: "ഇന്ന്, 10:30 AM",
    inviteSentDaysAgo: "2 ദിവസം മുമ്പ് ക്ഷണം അയച്ചു",
    
    // Table headers and UI elements
    user: "യൂസർ",
    role: "റോൾ",
    status: "നില",
    lastLogin: "അവസാന ലോഗിൻ",
    actions: "പ്രവർത്തനങ്ങൾ",
  },
  kn: {
    pageTitle: "ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ನಿಮ್ಮ ಸ್ಟೋರ್ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ, ಬಳಕೆದಾರ ಖಾತೆಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡುವ ಮೂಲಕ, ಮತ್ತು ದಕ್ಷ ಕಾರ್ಯಾಚರಣೆಗಳಿಗಾಗಿ ನಿಮ್ಮ ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಅನ್ನು ಸಿದ್ಧಪಡಿಸುವ ಮೂಲಕ RetailOS ನೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿ.",
    nextStepsTitle: "ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನಿಮ್ಮ ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಈಗ ಹೊಂದಿಸಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಸಿದ್ಧವಾಗಿದೆ. ಮುಂದೆ, ದಕ್ಷ ದಾಸ್ತಾನು ನಿರ್ವಹಣೆಗಾಗಿ ನಿಮ್ಮ ಗೋದಾಮಿನ ವಿನ್ಯಾಸವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ.",
    nextStepsButton: "ವೇರ್‌ಹೌಸ್ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
    
    // Step 1 - Accessing Supermarket Profile
    step1Title: "ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಪ್ರವೇಶಿಸುವುದು",
    step1Description: "ನಿಮ್ಮ ಮೊದಲ ಹೆಜ್ಜೆಯು ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಪ್ರೊಫೈಲ್ ವಿಭಾಗಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡುವುದು. ಇಲ್ಲಿ ನೀವು ಎಲ್ಲಾ ಅಗತ್ಯ ವ್ಯಾಪಾರ ಮಾಹಿತಿಯನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡುತ್ತಿರಿ, ಇದು ಇನ್‌ವಾಯ್ಸ್‌ಗಳು, ಖರೀದಿ ಆದೇಶಗಳು ಮತ್ತು ಗ್ರಾಹಕ ಸಂವಹನಗಳಿಗಾಗಿ ಸಿಸ್ಟಮ್‌ನಾದ್ಯಂತ ಬಳಸಲಾಗುತ್ತದೆ.",
    navigationToProfile: "ಎ. ಪ್ರೊಫೈಲ್‌ಗೆ ನ್ಯಾವಿಗೇಷನ್",
    accessingProfileSidebar: "ಸೈಡ್‌ಬಾರ್‌ನಿಂದ ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಪ್ರವೇಶಿಸುವುದು",
    clickSupermarketProfile: "ನಿಮ್ಮ ಸ್ಟೋರ್ ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ಪ್ರವೇಶಿಸಲು ಮುಖ್ಯ ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿ \"ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಪ್ರೊಫೈಲ್\" ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.",
    profileDashboardOverview: "ಬಿ. ಪ್ರೊಫೈಲ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    supermarketProfile: "ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಪ್ರೊಫೈಲ್",
    manageStoreBusinessInfo: "ನಿಮ್ಮ ಎಲ್ಲಾ ಸ್ಟೋರ್ ಮತ್ತು ವ್ಯಾಪಾರ ಮಾಹಿತಿಯನ್ನು ನಿರ್ವಹಿಸಿ",
    saveChanges: "ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ",
    reset: "ಮರುಹೊಂದಿಸಿ",
    profileCompletion: "ಪ್ರೊಫೈಲ್ ಪೂರ್ಣತೆ",
    completeBankDetails: "100% ತಲುಪಲು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ",
    
    // Step 2 - Store Information Setup
    step2Title: "ಸ್ಟೋರ್ ಮಾಹಿತಿ ಸೆಟಪ್",
    step2Description: "ಸ್ಟೋರ್ ಮಾಹಿತಿ ವಿಭಾಗದಲ್ಲಿ ನಿಮ್ಮ ವ್ಯಾಪಾರ ಗುರುತಿನ ವಿವರಗಳು ಇರುತ್ತವೆ. ಈ ಮಾಹಿತಿಯು ಇನ್‌ವಾಯ್ಸ್‌ಗಳು, ಖರೀದಿ ಆದೇಶಗಳು ಮತ್ತು ಅಧಿಕೃತ ಸಂವಹನಗಳನ್ನು ಒಳಗೊಂಡ ಎಲ್ಲಾ ರಚಿಸಲಾದ ದಾಖಲೆಗಳಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ.",
    basicStoreDetails: "ಎ. ಮೂಲ ಸ್ಟೋರ್ ವಿವರಗಳು",
    storeInformation: "ಸ್ಟೋರ್ ಮಾಹಿತಿ",
    storeName: "ಸ್ಟೋರ್ ಹೆಸರು *",
    legalBusinessName: "ಕಾನೂನುಬದ್ಧ ವ್ಯಾಪಾರ ಹೆಸರು *",
    gstNumber: "GST ಸಂಖ್ಯೆ *",
    panNumber: "PAN ಸಂಖ್ಯೆ",
    fssaiLicense: "FSSAI ಲೈಸೆನ್ಸ್",
    establishmentYear: "ಸ್ಥಾಪನೆಯ ವರ್ಷ",
    contactInformation: "ಬಿ. ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    storeContactDetails: "ಸ್ಟೋರ್ ಸಂಪರ್ಕ ವಿವರಗಳು",
    primaryPhone: "ಪ್ರಾಥಮಿಕ ಫೋನ್ *",
    businessEmail: "ವ್ಯಾಪಾರ ಇಮೇಲ್ *",
    storeSize: "ಸ್ಟೋರ್ ಗಾತ್ರ (ಚದರ ಅಡಿ)",
    validationErrorHandling: "ಸಿ. ಮೌಲ್ಯೀಕರಣ ಮತ್ತು ದೋಷ ನಿರ್ವಹಣೆ",
    formValidationMessages: "ಫಾರ್ಮ್ ಮೌಲ್ಯೀಕರಣ ಸಂದೇಶಗಳು",
    validationErrors: "ಮೌಲ್ಯೀಕರಣ ದೋಷಗಳು",
    gstFormatInvalid: "• GST ಸಂಖ್ಯೆಯ ಫಾರ್ಮ್ಯಾಟ್ ಅಮಾನ್ಯವಾಗಿದೆ (15 ಅಕ್ಷರಗಳಾಗಿರಬೇಕು)",
    businessEmailRequired: "• ವ್ಯಾಪಾರ ಇಮೇಲ್ ಅಗತ್ಯವಿದೆ",
    panNumberLength: "• PAN ಸಂಖ್ಯೆಯು 10 ಅಕ್ಷರಗಳಾಗಿರಬೇಕು",
    storeInfoSaved: "ಸ್ಟೋರ್ ಮಾಹಿತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!",
    
    // Step 3 - Address and Location Configuration
    step3Title: "ವಿಳಾಸ ಮತ್ತು ಸ್ಥಳ ಕಾನ್ಫಿಗರೇಶನ್",
    step3Description: "ನಿಖರವಾದ ವಿಳಾಸ ಮತ್ತು ಸ್ಥಳ ಡೇಟಾವು ಡೆಲಿವರಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್, ಮಾರಾಟಗಾರ ಸಂವಹನಗಳು ಮತ್ತು ನಿರ್ವಹಣಾ ಅನುಸರಣೆಗೆ ನಿರ್ಣಾಯಕವಾಗಿದೆ. ಸಿಸ್ಟಮ್‌ನು ಸೂಕ್ತ ಡೆಲಿವರಿ ರೂಟಿಂಗ್‌ಗಾಗಿ ನಿಖರವಾದ ಭೂಸ್ಥಾನವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.",
    physicalAddressEntry: "ಎ. ಭೌತಿಕ ವಿಳಾಸ ನಮೂದು",
    storeAddressLocation: "ಸ್ಟೋರ್ ವಿಳಾಸ ಮತ್ತು ಸ್ಥಳ",
    streetAddress: "ರಸ್ತೆ ವಿಳಾಸ *",
    city: "ನಗರ *",
    district: "ಜಿಲ್ಲೆ",
    state: "ರಾಜ್ಯ *",
    zipCode: "ZIP ಕೋಡ್ *",
    country: "ದೇಶ",
    gpsCoordinatesMap: "ಬಿ. GPS ನಿರ್ದೇಶಾಂಕಗಳು ಮತ್ತು ನಕ್ಷೆ ಏಕೀಕರಣ",
    locationCoordinatesMap: "ಸ್ಥಳ ನಿರ್ದೇಶಾಂಕಗಳು ಮತ್ತು ನಕ್ಷೆ",
    gpsCoordinates: "GPS ನಿರ್ದೇಶಾಂಕಗಳು",
    latitude: "ಅಕ್ಷಾಂಶ",
    longitude: "ರೇಖಾಂಶ",
    autoDetectLocation: "ಸ್ಥಳವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ",
    mapPreview: "ನಕ್ಷೆ ಮುನ್ನೋಟ",
    interactiveMapAppear: "ಅಂತರಕ್ರಿಯಾತ್ಮಕ ನಕ್ಷೆಯು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ",
    showingKingsMarket: "ತೋರಿಸಲಾಗಿದೆ: ಕಿಂಗ್‌ಸ್ ಸೂಪರ್ಮಾರ್ಕೆಟ್, ಬೆಂಗಳೂರು",
    preciseLocationHelps: "ನಿಖರವಾದ ಸ್ಥಳವು ಡೆಲಿವರಿ ರೂಟ್ ಅನುಕೂಲತೆ ಮತ್ತು ಮಾರಾಟಗಾರ ಲಾಜಿಸ್ಟಿಕ್ಸ್‌ಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    
    // Step 4 - Document and Photo Upload
    step4Title: "ದಾಖಲೆ ಮತ್ತು ಫೋಟೋ ಅಪ್‌ಲೋಡ್",
    step4Description: "RetailOS ಗೆ ಕಾನೂನುಬದ್ಧ ಅನುಸರಣೆ ಮತ್ತು ವ್ಯಾಪಾರ ಪರಿಶೀಲನೆಗಾಗಿ ನಿರ್ದಿಷ್ಟ ದಾಖಲೆಗಳು ಅಗತ್ಯವಿದೆ. ವೇಗವಾದ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಪರಿಶೀಲನೆಗಾಗಿ ಎಲ್ಲಾ ಅಗತ್ಯ ದಾಖಲೆಗಳ ಸ್ಪಷ್ಟ, ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    storePhotosSection: "ಎ. ಸ್ಟೋರ್ ಫೋಟೋಗಳ ವಿಭಾಗ",
    storePhotosDocuments: "ಸ್ಟೋರ್ ಫೋಟೋಗಳು ಮತ್ತು ದಾಖಲೆಗಳು",
    storeFrontView: "ಸ್ಟೋರ್ ಮುಂಭಾಗದ ನೋಟ *",
    clickUploadDragDrop: "ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಎಳೆದು ಬಿಡಿ",
    pngJpgUpTo5MB: "PNG, JPG 5MB ವರೆಗೆ",
    interiorView: "ಒಳಭಾಗದ ನೋಟ",
    uploadedSuccessfully: "ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ",
    remove: "ತೆಗೆದುಹಾಕಿ",
    legalDocumentsUpload: "ಬಿ. ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಗಳ ಅಪ್‌ಲೋಡ್",
    legalDocumentsSection: "ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಗಳ ವಿಭಾಗ",
    requiredLegalDocuments: "ಅಗತ್ಯ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಗಳು",
    gstCertificate: "GST ಪ್ರಮಾಣಪತ್ರ *",
    verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    uploadPanCard: "PAN ಕಾರ್ಡ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    documentUploadTips: "ದಾಖಲೆ ಅಪ್‌ಲೋಡ್ ಸಲಹೆಗಳು",
    ensureDocumentsClear: "• ದಾಖಲೆಗಳು ಸ್ಪಷ್ಟವಾಗಿವೆ ಮತ್ತು ಎಲ್ಲಾ ಪಠ್ಯವು ಓದಬಲ್ಲದಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ",
    uploadOriginalDocuments: "• ಸಾಧ್ಯವಾದಾಗ ಮೂಲ ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಫೋಟೋಕಾಪಿಗಳನ್ನು ಅಲ್ಲ",
    fileSizeUnder5MB: "• ವೇಗವಾದ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಫೈಲ್ ಗಾತ್ರವು 5MB ಕ್ಕಿಂತ ಕಡಿಮೆಯಿರಬೇಕು",
    supportedFormats: "• ಬೆಂಬಲಿತ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು: PNG, JPG, PDF",
    
    // Step 5 - Owner and Nominee Information
    step5Title: "ಮಾಲೀಕ ಮತ್ತು ನಾಮನಿರ್ದೇಶಿತ ಮಾಹಿತಿ",
    step5Description: "ಸಂಪೂರ್ಣ ಮಾಲೀಕ ವಿವರಗಳು ಮತ್ತು ನಾಮನಿರ್ದೇಶಿತ ಮಾಹಿತಿಯು ವ್ಯಾಪಾರ ನಿರಂತರತೆ, ಕಾನೂನುಬದ್ಧ ಅನುಸರಣೆ ಮತ್ತು ತುರ್ತು ಸಂಪರ್ಕ ವಿಧಾನಗಳಿಗೆ ಅಗತ್ಯವಾಗಿದೆ.",
    ownerDetailsForm: "ಎ. ಮಾಲೀಕ ವಿವರಗಳ ಫಾರ್ಮ್",
    ownerInformation: "ಮಾಲೀಕ ಮಾಹಿತಿ",
    ownerFullName: "ಮಾಲೀಕರ ಪೂರ್ಣ ಹೆಸರು *",
    ownerPhone: "ಮಾಲೀಕರ ಫೋನ್ *",
    ownerEmail: "ಮಾಲೀಕರ ಇಮೇಲ್ *",
    ownerPhoto: "ಮಾಲೀಕರ ಫೋಟೋ",
    nomineeEmergencyContact: "ಬಿ. ನಾಮನಿರ್ದೇಶಿತ ಮತ್ತು ತುರ್ತು ಸಂಪರ್ಕ",
    nomineeDetails: "ನಾಮನಿರ್ದೇಶಿತ ವಿವರಗಳು",
    nomineeName: "ನಾಮನಿರ್ದೇಶಿತ ಹೆಸರು *",
    relationship: "ಸಂಬಂಧ *",
    nomineePhone: "ನಾಮನಿರ್ದೇಶಿತ ಫೋನ್ *",
    aadharCard: "ಆಧಾರ್ ಕಾರ್ಡ್",
    uploadAadharCard: "ಆಧಾರ್ ಕಾರ್ಡ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    
    // Step 6 - Bank Account Configuration
    step6Title: "ಬ್ಯಾಂಕ್ ಖಾತೆ ಕಾನ್ಫಿಗರೇಶನ್",
    step6Description: "ಬ್ಯಾಂಕಿಂಗ್ ಮಾಹಿತಿಯು ಪಾವತಿ ಪ್ರಕ್ರಿಯೆ, ಮಾರಾಟಗಾರ ಪಾವತಿಗಳು ಮತ್ತು ಹಣಕಾಸು ಟ್ರ್ಯಾಕಿಂಗ್‌ಗೆ ನಿರ್ಣಾಯಕವಾಗಿದೆ. ಪಾವತಿ ವಿಳಂಬಗಳನ್ನು ತಪ್ಪಿಸಲು ಎಲ್ಲಾ ಬ್ಯಾಂಕ್ ವಿವರಗಳು ನಿಖರವಾಗಿವೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
    bankDetailsForm: "ಎ. ಬ್ಯಾಂಕ್ ವಿವರಗಳ ಫಾರ್ಮ್",
    bankAccountDetails: "ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರಗಳು",
    bankName: "ಬ್ಯಾಂಕ್ ಹೆಸರು *",
    accountHolderName: "ಖಾತೆ ಹೊಂದಿರುವವರ ಹೆಸರು *",
    accountNumber: "ಖಾತೆ ಸಂಖ್ಯೆ *",
    accountNumberEncrypted: "ಖಾತೆ ಸಂಖ್ಯೆಯನ್ನು ಸುರಕ್ಷತೆಗಾಗಿ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾಗಿದೆ",
    ifscCode: "IFSC ಕೋಡ್ *",
    cancelledCheque: "ರದ್ದುಮಾಡಿದ ಚೆಕ್",
    uploaded: "ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ",
    bankVerificationStatus: "ಬಿ. ಬ್ಯಾಂಕ್ ಪರಿಶೀಲನೆ ಸ್ಥಿತಿ",
    bankAccountVerification: "ಬ್ಯಾಂಕ್ ಖಾತೆ ಪರಿಶೀಲನೆ",
    bankAccountVerified: "ಬ್ಯಾಂಕ್ ಖಾತೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    bankAccountVerifiedDesc: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ. ನೀವು ಈಗ ಸಿಸ್ಟಮ್ ಮೂಲಕ ಪಾವತಿಗಳನ್ನು ಸ್ವೀಕರಿಸಬಹುದು ಮತ್ತು ಮಾರಾಟಗಾರ ಪಾವತಿಗಳನ್ನು ಮಾಡಬಹುದು.",
    accountHolderVerified: "ಖಾತೆ ಹೊಂದಿರುವವರ ಹೆಸರು ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    ifscCodeValidated: "IFSC ಕೋಡ್ ಮೌಲ್ಯೀಕರಣ ಮಾಡಲಾಗಿದೆ",
    accountNumberFormatChecked: "ಖಾತೆ ಸಂಖ್ಯೆ ಫಾರ್ಮ್ಯಾಟ್ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    cancelledChequeReviewed: "ರದ್ದುಮಾಡಿದ ಚೆಕ್ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    securityInformation: "ಸುರಕ್ಷತೆ ಮಾಹಿತಿ",
    securityInfoDesc: "ಎಲ್ಲಾ ಬ್ಯಾಂಕಿಂಗ್ ಮಾಹಿತಿಯನ್ನು ಬ್ಯಾಂಕ್-ಗ್ರೇಡ್ ಸುರಕ್ಷತೆಯೊಂದಿಗೆ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾಗಿದೆ. ನಿಮ್ಮ ಖಾತೆ ವಿವರಗಳನ್ನು ಎಂದಿಗೂ ಸರಳ ಪಠ್ಯದಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ ಮತ್ತು ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಅಧಿಕೃತ ಸಿಬ್ಬಂದಿಗೆ ಮಾತ್ರ ಪ್ರವೇಶಿಸಬಹುದು.",
    
    // Step 7 - User Management Setup
    step7Title: "ಬಳಕೆದಾರ ನಿರ್ವಹಣೆ ಸೆಟಪ್",
    step7Description: "ಸರಿಯಾದ ಪಾತ್ರಗಳು ಮತ್ತು ಅನುಮತಿಗಳೊಂದಿಗೆ ಬಳಕೆದಾರ ಖಾತೆಗಳನ್ನು ಹೊಂದಿಸುವುದು ಸುರಕ್ಷಿತ ಪ್ರವೇಶ ನಿಯಂತ್ರಣ ಮತ್ತು ಕಾರ್ಯಾಚರಣಾ ದಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ. ಪ್ರತಿ ಬಳಕೆದಾರರು ತಮ್ಮ ಕೆಲಸದ ಕಾರ್ಯಕ್ಕಾಗಿ ಅಗತ್ಯವಿರುವ ವೈಶಿಷ್ಟ್ಯಗಳಿಗೆ ಮಾತ್ರ ಪ್ರವೇಶವನ್ನು ಹೊಂದಿರಬೇಕು.",
    accessingUserManagement: "ಎ. ಬಳಕೆದಾರ ನಿರ್ವಹಣೆಯನ್ನು ಪ್ರವೇಶಿಸುವುದು",
    userManagement: "ಬಳಕೆದಾರ ನಿರ್ವಹಣೆ",
    manageStaffAccess: "ನಿಮ್ಮ ಸೂಪರ್ಮಾರ್ಕೆಟ್‌ಗಾಗಿ ಸಿಬ್ಬಂದಿ ಪ್ರವೇಶ ಮತ್ತು ಪಾತ್ರಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    addNewUser: "ಹೊಸ ಬಳಕೆದಾರರನ್ನು ಸೇರಿಸಿ",
    totalUsers: "ಒಟ್ಟು ಬಳಕೆದಾರರು",
    activeUsers: "ಸಕ್ರಿಯ ಬಳಕೆದಾರರು",
    pendingInvites: "ಬಾಕಿ ಆಮಂತ್ರಣಗಳು",
    roleTemplates: "ಪಾತ್ರ ಟೆಂಪ್ಲೇಟ್‌ಗಳು",
    creatingNewUser: "ಬಿ. ಹೊಸ ಬಳಕೆದಾರರನ್ನು ರಚಿಸುವುದು",
    addNewUserForm: "ಹೊಸ ಬಳಕೆದಾರರನ್ನು ಸೇರಿಸುವ ಫಾರ್ಮ್",
    fullName: "ಪೂರ್ಣ ಹೆಸರು *",
    enterFullName: "ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    emailAddress: "ಇಮೇಲ್ ವಿಳಾಸ *",
    phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ *",
    department: "ವಿಭಾಗ",
    selectDepartment: "ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    operations: "ಕಾರ್ಯಾಚರಣೆಗಳು",
    inventory: "ದಾಸ್ತಾನು",
    sales: "ಮಾರಾಟ",
    management: "ನಿರ್ವಹಣೆ",
    roleTemplate: "ಪಾತ್ರ ಟೆಂಪ್ಲೇಟ್ *",
    selectRoleTemplate: "ಪಾತ್ರ ಟೆಂಪ್ಲೇಟ್ ಆಯ್ಕೆಮಾಡಿ",
    storeManager: "ಸ್ಟೋರ್ ಮ್ಯಾನೇಜರ್",
    inventoryManager: "ದಾಸ್ತಾನು ಮ್ಯಾನೇಜರ್",
    cashier: "ಕ್ಯಾಷಿಯರ್",
    fulfillmentStaff: "ಪೂರೈಕೆ ಸಿಬ್ಬಂದಿ",
    roleTemplatesPermissions: "ಸಿ. ಪಾತ್ರ ಟೆಂಪ್ಲೇಟ್‌ಗಳು ಮತ್ತು ಅನುಮತಿಗಳು",
    permissionManagementInterface: "ಅನುಮತಿ ನಿರ್ವಹಣೆ ಇಂಟರ್ಫೇಸ್",
    roleTemplateInventoryManager: "ಪಾತ್ರ ಟೆಂಪ್ಲೇಟ್: ದಾಸ್ತಾನು ಮ್ಯಾನೇಜರ್",
    inventoryPermissions: "ದಾಸ್ತಾನು ಅನುಮತಿಗಳು",
    viewInventoryDashboard: "ದಾಸ್ತಾನು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ವೀಕ್ಷಿಸಿ",
    manageProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    createPurchaseOrders: "ಖರೀದಿ ಆದೇಶಗಳನ್ನು ರಚಿಸಿ",
    warehouseManagement: "ಗೋದಾಮು ನಿರ್ವಹಣೆ",
    otherPermissions: "ಇತರ ಅನುಮತಿಗಳು",
    posDashboard: "POS ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    orderManagement: "ಆದೇಶ ನಿರ್ವಹಣೆ",
    financialReports: "ಹಣಕಾಸು ವರದಿಗಳು",
    userManagementPerm: "ಬಳಕೆದಾರ ನಿರ್ವಹಣೆ",
    fullAccess: "ಪೂರ್ಣ ಪ್ರವೇಶ",
    readOnly: "ಓದಲು ಮಾತ್ರ",
    noAccess: "ಪ್ರವೇಶವಿಲ್ಲ",
    roleTemplateBenefits: "ಪಾತ್ರ ಟೆಂಪ್ಲೇಟ್ ಪ್ರಯೋಜನಗಳು:",
    roleTemplateBenefitsDesc: "ಪೂರ್ವ-ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾದ ಪಾತ್ರ ಟೆಂಪ್ಲೇಟ್‌ಗಳನ್ನು ಬಳಸುವುದು ಒಂದೇ ರೀತಿಯ ಸ್ಥಾನಗಳಲ್ಲಿ ಸ್ಥಿರ ಅನುಮತಿಗಳನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ ಮತ್ತು ಹೊಸ ಬಳಕೆದಾರರಿಗೆ ಸೆಟಪ್ ಸಮಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
    userStatusActivity: "ಡಿ. ಬಳಕೆದಾರ ಸ್ಥಿತಿ ಮತ್ತು ಚಟುವಟಿಕೆ ಟ್ರ್ಯಾಕಿಂಗ್",
    userListStatusIndicators: "ಸ್ಥಿತಿ ಸೂಚಕಗಳೊಂದಿಗೆ ಬಳಕೆದಾರರ ಪಟ್ಟಿ",
    active: "ಸಕ್ರಿಯ",
    pendingInvite: "ಬಾಕಿ ಆಮಂತ್ರಣ",
    lastLogin: "ಕೊನೆಯ ಲಾಗಿನ್",
    actions: "ಕ್ರಿಯೆಗಳು",
    edit: "ಸಂಪಾದಿಸಿ",
    resendInvite: "ಆಮಂತ್ರಣವನ್ನು ಮರುಕಳುಹಿಸಿ",
    never: "ಎಂದಿಗೂ",
    inviteSentDaysAgo: "2 ದಿನಗಳ ಹಿಂದೆ ಆಮಂತ್ರಣ ಕಳುಹಿಸಲಾಗಿದೆ",
    
    // Common UI elements
    retailOS: "RetailOS",
    supermarketManagement: "ಸೂಪರ್ಮಾರ್ಕೆಟ್ ನಿರ್ವಹಣೆ",
    inventory: "ದಾಸ್ತಾನು",
    userManagement: "ಬಳಕೆದಾರ ನಿರ್ವಹಣೆ",
    profileCompletionPercent: "75%",
    kingsSupermarket: "ಕಿಂಗ್‌ಸ್ ಸೂಪರ್ಮಾರ್ಕೆಟ್",
    kingsRetailPvtLtd: "ಕಿಂಗ್‌ಸ್ ರಿಟೈಲ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್",
    gstExample: "29AABCU9567M1Z5",
    panExample: "AABCU9567M",
    fssaiExample: "12345678901234",
    establishmentYearExample: "2018",
    phoneExample: "+91 98765 43210",
    emailExample: "contact@kingsmarket.com",
    storeSizeExample: "2500",
    streetExample: "123 ಕಮರ್ಷಿಯಲ್ ಸ್ಟ್ರೀಟ್, ಮಾರ್ಕೆಟ್ ಪ್ರದೇಶ",
    cityExample: "ಬೆಂಗಳೂರು",
    districtExample: "ಬೆಂಗಳೂರು ನಗರ",
    stateExample: "ಕರ್ನಾಟಕ",
    zipExample: "560001",
    countryExample: "ಭಾರತ",
    latitudeExample: "12.9716",
    longitudeExample: "77.5946",
    storeInteriorJpg: "store_interior.jpg",
    mbUploadedSuccessfully: "2.3 MB • ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ",
    gstCertificatePdf: "gst_certificate.pdf",
    mbVerified: "1.8 MB • ಪರಿಶೀಲಿಸಲಾಗಿದೆ ✓",
    cancelledChequePdf: "cancelled_cheque.pdf",
    kbUploaded: "956 KB • ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ",
    ownerPhotoJpg: "owner_photo.jpg",
    mb: "1.2 MB",
    rajeshKumarSingh: "ರಾಜೇಶ್ ಕುಮಾರ್ ಸಿಂಗ್",
    rajeshEmail: "rajesh@kingsmarket.com",
    priyaSingh: "ಪ್ರಿಯಾ ಸಿಂಗ್",
    spouse: "ಪತಿ/ಪತ್ನಿ",
    priyaPhone: "+91 98765 43211",
    hdfcBank: "HDFC ಬ್ಯಾಂಕ್",
    accountNumberExample: "1234567890123456",
    ifscExample: "HDFC0001234",
    rajeshSingh: "ರಾಜೇಶ್ ಸಿಂಗ್",
    rajeshEmailShort: "rajesh@kingsmarket.com",
    priyaSharma: "ಪ್ರಿಯಾ ಶರ್ಮಾ",
    priyaEmail: "priya@kingsmarket.com",
    hoursAgo: "2 ಗಂಟೆಗಳ ಹಿಂದೆ",
    today: "ಇಂದು, 10:30 AM",
    inviteSentDaysAgo: "2 ದಿನಗಳ ಹಿಂದೆ ಆಮಂತ್ರಣ ಕಳುಹಿಸಲಾಗಿದೆ",
    
    // Table headers and UI elements
    user: "ಬಳಕೆದಾರ",
    role: "ಪಾತ್ರ",
    status: "ಸ್ಥಿತಿ",
    lastLogin: "ಕೊನೆಯ ಲಾಗಿನ್",
    actions: "ಕ್ರಿಯೆಗಳು",
  },
};

const Screenshot = ({ title, children }) => (
  <div className="my-6 border bg-slate-100 rounded-xl shadow-md overflow-hidden">
    <div className="bg-slate-200 px-4 py-2 border-b border-slate-300">
      <h5 className="font-semibold text-slate-700">{title}</h5>
    </div>
    <div className="p-4 md:p-6 bg-white overflow-x-auto">
      {children}
    </div>
  </div>
);

const Step = ({ number, title, children }) => (
  <div className="flex items-start gap-4 mt-8 w-full">
    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base -ml-12 sm:ml-0">
        {children}
      </div>
    </div>
  </div>
);

export default function ManualOnboarding() {
  const [language] = useManualLanguage();
  
  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

    return (
        <div className="bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
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
                        <Home className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                        {t('pageTitle')}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600">
                        {t('description')}
                    </p>
                </div>
                
                <section className="space-y-10">
                  <Step number="1" title={t('step1Title')}>
                    <p>
                      {t('step1Description')}
                    </p>
                    
                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('navigationToProfile')}</h6>
                    <Screenshot title={t('accessingProfileSidebar')}>
                      <div className="space-y-4">
                        <div className="w-64 bg-white border rounded-lg shadow-sm">
                          <div className="p-4 border-b">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                <Home className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-900">{t('retailOS')}</h3>
                                <p className="text-xs text-slate-500">{t('supermarketManagement')}</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-2 space-y-1">
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">
                              <Building className="w-4 h-4" />
                              <span className="text-sm">{t('inventory')}</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                              <Building className="w-4 h-4" />
                              <span className="text-sm font-medium">{t('supermarketProfile')}</span>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">
                              <Users className="w-4 h-4" />
                              <span className="text-sm">{t('userManagement')}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">{t('clickSupermarketProfile')}</p>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('profileDashboardOverview')}</h6>
                    <Screenshot title={t('supermarketProfile')}>
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <h2 className="text-xl font-bold text-slate-800">{t('supermarketProfile')}</h2>
                            <p className="text-sm text-slate-500">{t('manageStoreBusinessInfo')}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button className="bg-blue-600 hover:bg-blue-700">{t('saveChanges')}</Button>
                            <Button variant="outline">{t('reset')}</Button>
                          </div>
                        </div>
                        
                        {/* Profile completion indicator */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-800">{t('profileCompletion')}</span>
                            <span className="text-sm font-bold text-blue-600">{t('profileCompletionPercent')}</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <p className="text-xs text-blue-700 mt-2">{t('completeBankDetails')}</p>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="2" title={t('step2Title')}>
                    <p>
                      {t('step2Description')}
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('basicStoreDetails')}</h6>
                    <Screenshot title={t('storeInformation')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Building className="w-5 h-5 text-blue-600"/>
                          {t('storeInformation')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('storeName')}</label>
                            <Input defaultValue={t('kingsSupermarket')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('legalBusinessName')}</label>
                            <Input defaultValue={t('kingsRetailPvtLtd')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('gstNumber')}</label>
                            <Input defaultValue={t('gstExample')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('panNumber')}</label>
                            <Input defaultValue={t('panExample')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('fssaiLicense')}</label>
                            <Input defaultValue={t('fssaiExample')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('establishmentYear')}</label>
                            <Input defaultValue={t('establishmentYearExample')} type="number" className="w-full" />
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('contactInformation')}</h6>
                    <Screenshot title={t('storeContactDetails')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('primaryPhone')}</label>
                            <Input defaultValue={t('phoneExample')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('businessEmail')}</label>
                            <Input defaultValue={t('emailExample')} type="email" className="w-full" />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('storeSize')}</label>
                            <Input defaultValue={t('storeSizeExample')} type="number" className="w-full" />
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('validationErrorHandling')}</h6>
                    <Screenshot title={t('formValidationMessages')}>
                      <div className="space-y-4">
                        <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-red-600 mt-0.5">⚠️</div>
                            <div>
                              <h5 className="font-medium text-red-800">{t('validationErrors')}</h5>
                              <ul className="mt-2 text-sm text-red-700 space-y-1">
                                <li>{t('gstFormatInvalid')}</li>
                                <li>{t('businessEmailRequired')}</li>
                                <li>{t('panNumberLength')}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-medium text-green-800">{t('storeInfoSaved')}</span>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="3" title={t('step3Title')}>
                    <p>
                      {t('step3Description')}
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('physicalAddressEntry')}</h6>
                    <Screenshot title={t('storeAddressLocation')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-emerald-600"/>
                          {t('storeAddressLocation')}
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('streetAddress')}</label>
                            <Input defaultValue={t('streetExample')} className="w-full" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('city')}</label>
                              <Input defaultValue={t('cityExample')} className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('district')}</label>
                              <Input defaultValue={t('districtExample')} className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('state')}</label>
                              <Input defaultValue={t('stateExample')} className="w-full" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('zipCode')}</label>
                              <Input defaultValue={t('zipExample')} className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('country')}</label>
                              <Input defaultValue={t('countryExample')} disabled className="w-full bg-slate-50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('gpsCoordinatesMap')}</h6>
                    <Screenshot title={t('locationCoordinatesMap')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-slate-700 mb-3">{t('gpsCoordinates')}</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('latitude')}</label>
                                <Input defaultValue={t('latitudeExample')} type="number" step="0.0001" className="w-full" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('longitude')}</label>
                                <Input defaultValue={t('longitudeExample')} type="number" step="0.0001" className="w-full" />
                              </div>
                              <Button variant="outline" className="w-full">
                                <MapPin className="w-4 h-4 mr-2" />
                                {t('autoDetectLocation')}
                              </Button>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-700 mb-3">{t('mapPreview')}</h4>
                            <div className="w-full h-40 bg-slate-100 border rounded-lg flex items-center justify-center">
                              <div className="text-center text-slate-500">
                                <MapPin className="w-8 h-8 mx-auto mb-2" />
                                <p className="text-sm">{t('interactiveMapAppear')}</p>
                                <p className="text-xs">{t('showingKingsMarket')}</p>
                              </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">
                              {t('preciseLocationHelps')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="4" title={t('step4Title')}>
                    <p>
                      {t('step4Description')}
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('storePhotosSection')}</h6>
                    <Screenshot title={t('storePhotosDocuments')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Camera className="w-5 h-5 text-purple-600"/>
                          {t('storePhotosDocuments')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('storeFrontView')}</label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                              <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                              <p className="text-sm text-slate-600">{t('clickUploadDragDrop')}</p>
                              <p className="text-xs text-slate-500 mt-1">{t('pngJpgUpTo5MB')}</p>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('interiorView')}</label>
                            <div className="border border-slate-200 rounded-lg p-4 bg-green-50">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                  <Camera className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-green-800">{t('storeInteriorJpg')}</p>
                                  <p className="text-xs text-green-600">{t('mbUploadedSuccessfully')}</p>
                                </div>
                                <Button size="sm" variant="ghost" className="-ml-3 md:ml-0">
                                  <span className="text-red-600  ">{t('remove')}</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('legalDocumentsUpload')}</h6>
                    <Screenshot title={t('legalDocumentsSection')}>
                      <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-4">
                          <h4 className="font-medium text-slate-700 mb-3">{t('requiredLegalDocuments')}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">{t('gstCertificate')}</label>
                              <div className="border border-slate-200 rounded-lg p-3 bg-blue-50">
                                <div className="flex items-center gap-3">
                                  <FileText className="w-6 h-6 text-blue-600" />
                                  <div className="flex-1">
                                    <p className="text-sm font-medium text-blue-800">{t('gstCertificatePdf')}</p>
                                    <p className="text-xs text-blue-600">{t('mbVerified')}</p>
                                  </div>
                                  <Badge className="bg-green-100 text-green-800">{t('verified')}</Badge>
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">{t('panNumber')}</label>
                              <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                                <Upload className="w-6 h-6 mx-auto text-slate-400 mb-1" />
                                <p className="text-xs text-slate-600">{t('uploadPanCard')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-amber-600 mt-0.5">💡</div>
                            <div>
                              <h5 className="font-medium text-amber-800">{t('documentUploadTips')}</h5>
                              <ul className="mt-2 text-sm text-amber-700 space-y-1">
                                <li>{t('ensureDocumentsClear')}</li>
                                <li>{t('uploadOriginalDocuments')}</li>
                                <li>{t('fileSizeUnder5MB')}</li>
                                <li>{t('supportedFormats')}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="5" title={t('step5Title')}>
                    <p>
                      {t('step5Description')}
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('ownerDetailsForm')}</h6>
                    <Screenshot title={t('ownerInformation')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <User className="w-5 h-5 text-indigo-600"/>
                          {t('ownerInformation')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('ownerFullName')}</label>
                            <Input defaultValue={t('rajeshKumarSingh')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('ownerPhone')}</label>
                            <Input defaultValue={t('phoneExample')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('ownerEmail')}</label>
                            <Input defaultValue={t('rajeshEmail')} type="email" className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('ownerPhoto')}</label>
                            <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                                  <User className="w-5 h-5 text-slate-500" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-slate-600">{t('ownerPhotoJpg')}</p>
                                  <p className="text-xs text-slate-500">{t('mb')}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('nomineeEmergencyContact')}</h6>
                    <Screenshot title={t('nomineeDetails')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-emerald-600"/>
                          {t('nomineeDetails')}
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('nomineeName')}</label>
                              <Input defaultValue={t('priyaSingh')} className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('relationship')}</label>
                              <Input defaultValue={t('spouse')} className="w-full" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('nomineePhone')}</label>
                              <Input defaultValue={t('priyaPhone')} className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('aadharCard')}</label>
                              <div className="border-2 border-dashed border-slate-300 rounded-lg p-3 text-center">
                                <Upload className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                                <p className="text-xs text-slate-600">{t('uploadAadharCard')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="6" title={t('step6Title')}>
                    <p>
                      {t('step6Description')}
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('bankDetailsForm')}</h6>
                    <Screenshot title={t('bankAccountDetails')}>
                      <div className="border border-slate-200 rounded-lg p-3 sm:p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Banknote className="w-5 h-5 text-green-600"/>
                          {t('bankAccountDetails')}
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('bankName')}</label>
                              <Input defaultValue={t('hdfcBank')} className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('accountHolderName')}</label>
                              <Input defaultValue={t('kingsRetailPvtLtd')} className="w-full" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('accountNumber')}</label>
                              <Input defaultValue={t('accountNumberExample')} type="password" className="w-full" />
                              <p className="text-xs text-slate-500 mt-1">{t('accountNumberEncrypted')}</p>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('ifscCode')}</label>
                              <Input defaultValue={t('ifscExample')} className="w-full" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('cancelledCheque')}</label>
                            <div className="border border-slate-200 rounded-lg p-3 bg-green-50">
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <FileText className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-green-800 truncate">{t('cancelledChequePdf')}</p>
                                  <p className="text-xs text-green-600">{t('kbUploaded')}</p>
                                </div>
                                <Badge className="bg-blue-100 text-blue-800 flex-shrink-0">{t('verified')}</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('bankVerificationStatus')}</h6>
                    <Screenshot title={t('bankAccountVerification')}>
                      <div className="space-y-4">
                        <div className="border border-green-200 bg-green-50 rounded-lg p-3 sm:p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-green-800">{t('bankAccountVerified')}</h5>
                              <p className="text-sm text-green-700 mt-1">
                                {t('bankAccountVerifiedDesc')}
                              </p>
                              <div className="mt-3 grid grid-cols-1 gap-2 text-xs">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="break-words">{t('accountHolderVerified')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="break-words">{t('ifscCodeValidated')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="break-words">{t('accountNumberFormatChecked')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                  <span className="break-words">{t('cancelledChequeReviewed')}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0">🔒</div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-blue-800">{t('securityInformation')}</h5>
                              <p className="text-sm text-blue-700 mt-1 break-words">
                                {t('securityInfoDesc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <Step number="7" title={t('step7Title')}>
                    <p>
                      {t('step7Description')}
                    </p>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('accessingUserManagement')}</h6>
                    <Screenshot title={t('userManagement')}>
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <h2 className="text-xl font-bold text-slate-800">{t('userManagement')}</h2>
                            <p className="text-sm text-slate-500">{t('manageStaffAccess')}</p>
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                            <PlusCircle className="w-4 h-4" />
                            {t('addNewUser')}
                          </Button>
                        </div>

                        {/* User stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">8</div>
                            <div className="text-sm text-blue-700">{t('totalUsers')}</div>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">6</div>
                            <div className="text-sm text-green-700">{t('activeUsers')}</div>
                          </div>
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-amber-600">2</div>
                            <div className="text-sm text-amber-700">{t('pendingInvites')}</div>
                          </div>
                          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-600">4</div>
                            <div className="text-sm text-purple-700">{t('roleTemplates')}</div>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('creatingNewUser')}</h6>
                    <Screenshot title={t('addNewUserForm')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4">{t('addNewUser')}</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('fullName')}</label>
                              <Input placeholder={t('enterFullName')} className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('emailAddress')}</label>
                              <Input placeholder="user@example.com" type="email" className="w-full" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('phoneNumber')}</label>
                              <Input placeholder={t('phoneExample')} className="w-full" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('department')}</label>
                              <select className="w-full p-2 border border-slate-300 rounded-md">
                                <option>{t('selectDepartment')}</option>
                                <option>{t('operations')}</option>
                                <option>{t('inventory')}</option>
                                <option>{t('sales')}</option>
                                <option>{t('management')}</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('roleTemplate')}</label>
                            <select className="w-full p-2 border border-slate-300 rounded-md">
                              <option>{t('selectRoleTemplate')}</option>
                              <option>{t('storeManager')}</option>
                              <option>{t('inventoryManager')}</option>
                              <option>{t('cashier')}</option>
                              <option>{t('fulfillmentStaff')}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('roleTemplatesPermissions')}</h6>
                    <Screenshot title={t('permissionManagementInterface')}>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-purple-600"/>
                          {t('roleTemplateInventoryManager')}
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h4 className="font-medium text-slate-700">{t('inventoryPermissions')}</h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded border">
                                  <span className="text-sm">{t('viewInventoryDashboard')}</span>
                                  <Badge className="bg-green-100 text-green-800">{t('fullAccess')}</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded border">
                                  <span className="text-sm">{t('manageProducts')}</span>
                                  <Badge className="bg-green-100 text-green-800">{t('fullAccess')}</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded border">
                                  <span className="text-sm">{t('createPurchaseOrders')}</span>
                                  <Badge className="bg-green-100 text-green-800">{t('fullAccess')}</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-amber-50 rounded border">
                                  <span className="text-sm">{t('warehouseManagement')}</span>
                                  <Badge className="bg-amber-100 text-amber-800">{t('readOnly')}</Badge>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-medium text-slate-700">{t('otherPermissions')}</h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 bg-red-50 rounded border">
                                  <span className="text-sm">{t('posDashboard')}</span>
                                  <Badge className="bg-red-100 text-red-800">{t('noAccess')}</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-amber-50 rounded border">
                                  <span className="text-sm">{t('orderManagement')}</span>
                                  <Badge className="bg-amber-100 text-amber-800">{t('readOnly')}</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-red-50 rounded border">
                                  <span className="text-sm">{t('financialReports')}</span>
                                  <Badge className="bg-red-100 text-red-800">{t('noAccess')}</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-amber-50 rounded border">
                                  <span className="text-sm">{t('userManagementPerm')}</span>
                                  <Badge className="bg-amber-100 text-amber-800">{t('readOnly')}</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-700">
                              <strong>{t('roleTemplateBenefits')}</strong> {t('roleTemplateBenefitsDesc')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Screenshot>

                    <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('userStatusActivity')}</h6>
                    <Screenshot title={t('userListStatusIndicators')}>
                      <div className="border border-slate-200 rounded-lg">
                        {/* Mobile list view */}
                        <div className="sm:hidden divide-y divide-slate-200">
                          <div className="p-4 flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-medium text-blue-700">RS</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-medium text-slate-900 truncate">{t('rajeshSingh')}</p>
                                <Badge className="bg-purple-100 text-purple-800 text-[10px]">{t('storeManager')}</Badge>
                              </div>
                              <p className="text-xs text-slate-500 break-all">{t('rajeshEmailShort')}</p>
                              <div className="mt-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-green-700">{t('active')}</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 flex items-start gap-3">
                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-xs font-medium text-emerald-700">PS</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-medium text-slate-900 truncate">{t('priyaSharma')}</p>
                                <Badge className="bg-blue-100 text-blue-800 text-[10px]">{t('inventoryManager')}</Badge>
                              </div>
                              <p className="text-xs text-slate-500 break-all">{t('priyaEmail')}</p>
                              <div className="mt-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span className="text-xs text-amber-700">{t('pendingInvite')}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Desktop table view */}
                        <div className="w-full overflow-x-auto hidden sm:block">
                          <table className="w-full table-auto sm:text-sm text-xs">
                          <thead className="bg-slate-50 border-b">
                            <tr>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('user')}</th>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('role')}</th>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-slate-500 uppercase">{t('status')}</th>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-slate-500 uppercase hidden sm:table-cell">{t('lastLogin')}</th>
                              <th className="px-3 py-2 sm:px-4 sm:py-3 text-right text-xs font-medium text-slate-500 uppercase hidden sm:table-cell">{t('actions')}</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-slate-200">
                            <tr>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-blue-700">RS</span>
                                  </div>
                                   <div className="min-w-0">
                                    <p className="text-sm font-medium text-slate-900">{t('rajeshSingh')}</p>
                                     <p className="text-xs text-slate-500 break-all">{t('rajeshEmailShort')}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <Badge className="bg-purple-100 text-purple-800 text-[10px] sm:text-xs">{t('storeManager')}</Badge>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-sm text-green-700">{t('active')}</span>
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4 hidden sm:table-cell">
                                <div className="text-sm text-slate-600">{t('hoursAgo')}</div>
                                <div className="text-xs text-slate-500">{t('today')}</div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4 text-right hidden sm:table-cell">
                                <Button size="sm" variant="ghost">{t('edit')}</Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-emerald-700">PS</span>
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-medium text-slate-900">{t('priyaSharma')}</p>
                                    <p className="text-xs text-slate-500 break-all">{t('priyaEmail')}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <Badge className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs">{t('inventoryManager')}</Badge>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                  <span className="text-sm text-amber-700">{t('pendingInvite')}</span>
                                </div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4 hidden sm:table-cell">
                                <div className="text-sm text-slate-400">{t('never')}</div>
                                <div className="text-xs text-slate-400">{t('inviteSentDaysAgo')}</div>
                              </td>
                              <td className="px-3 py-2 sm:px-4 sm:py-4 text-right hidden sm:table-cell">
                                <Button size="sm" variant="outline">{t('resendInvite')}</Button>
                              </td>
                            </tr>
                          </tbody>
                          </table>
                        </div>
                      </div>
                    </Screenshot>
                  </Step>

                  <div className="mt-12 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">{t('nextStepsTitle')}</h3>
                    <p className="text-emerald-700 mb-4">
                      {t('nextStepsDescription')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={createPageUrl('ManualWarehouse')} className="inline-block">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          {t('nextStepsButton')}
                          <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                        </Button>
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
