

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Home, BookOpen, Warehouse, Package, Users, Truck, ShoppingCart, Settings, Navigation, DollarSign,
  ArrowRight, ChevronRight, CheckCircle, Building, User, Banknote, Shield, PlusCircle, Building2, Receipt,
  Network, Wallet, RotateCcw, Menu, X // Import Menu and X icons
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import LanguageSelector from '../components/shared/LanguageSelector';
import useManualLanguage from '../components/shared/useManualLanguage';

const sectionDetails = [
    // ... your sectionDetails array
    { id: 'onboarding', icon: Home, page: 'ManualOnboarding' },
    { id: 'warehouse', icon: Warehouse, page: 'ManualWarehouse' },
    { id: 'product-content', icon: Package, page: 'ManualProductContent' },
    { id: 'inventory', icon: Settings, page: 'ManualInventory' },
    { id: 'pricing', icon: DollarSign, page: 'ManualPricing' },
    { id: 'vendor-management', icon: Building2, page: 'ManualVendorManagement' },
    { id: 'vendor-portal', icon: Users, page: 'ManualVendorPortal' },
    { id: 'network-management', icon: Network, page: 'ManualNetworkManagement' },
    { id: 'orders', icon: ShoppingCart, page: 'ManualOrders' },
    { id: 'fulfillment', icon: Truck, page: 'ManualFulfillment' },
    { id: 'logistics', icon: Navigation, page: 'ManualLogistics' },
    { id: 'purchase-orders', icon: Receipt, page: 'ManualPurchaseOrders' },
    { id: 'return-management', icon: RotateCcw, page: 'ManualReturnManagement' },
    { id: 'pay-later', icon: Wallet, page: 'ManualPayLater' },
    { id: 'expenses', icon: DollarSign, page: 'ManualExpenses' }
];

const translations = {
  en: {
    pageTitle: "RetailOS Manual",
    welcome: "Welcome to RetailOS",
    description: "This comprehensive manual will guide you through setting up and operating your supermarket using the RetailOS platform. Each section covers a specific aspect of the system with detailed steps and visual guides.",
    gettingStarted: "Getting Started",
    gettingStartedDesc: "Follow these sections in order for the best onboarding experience. Each section builds on the previous one to ensure a smooth setup process.",
    viewGuide: "Click to view detailed guide",
    detailedGuide: "Detailed Guide",
    sections: {
      onboarding: { title: 'Supermarket Onboarding', description: 'Set up your store profile and user accounts to get started with RetailOS.' },
      warehouse: { title: 'Warehouse Management', description: 'Configure your physical warehouse layout for efficient inventory tracking.' },
      'product-content': { title: 'Product & Content Management', description: 'Add products to your catalog and create attractive deals for customers.' },
      inventory: { title: 'Inventory Management', description: 'Manage stock levels, vendors, and purchase orders effectively.' },
      pricing: { title: 'Price Management', description: 'Set up pricing strategies for both B2C and B2B customers.' },
      orders: { title: 'Order Management', description: 'Process customer orders through the POS system with various payment options.' },
      fulfillment: { title: 'Fulfillment Process', description: 'Learn the complete order fulfillment workflow from pick to ship.' },
      logistics: { title: 'Last Mile Logistics', description: 'Manage delivery personnel and last-mile logistics operations.' },
      'purchase-orders': { title: 'Purchase Orders', description: 'Manage and track all incoming purchase orders from vendors.' },
      'return-management': { title: 'Return Management', description: 'Handle product returns to vendors, manage damaged goods, and process vendor returns with complete audit trails.' },
      'vendor-management': { title: 'Vendor Management', description: 'Streamline relationships with suppliers, from onboarding to performance tracking.' },
      'vendor-portal': { title: 'Vendor Portal', description: 'Manage your relationships with suppliers, track orders, and collaborate efficiently.' },
      'network-management': { title: 'Network Management', description: 'Manage B2C customers, B2B retailers, and multi-level referral relationships.' },
      'pay-later': { title: 'Pay Later Wallet Management', description: 'Configure and manage credit limits, KYC processes, and payment tracking for customers.' },
      expenses: { title: 'Expense Management', description: 'Track and manage all business expenses and operational costs.' }
    }
  },
  // NOTE: Other language translations are placeholders with English text.
  kn: {
    pageTitle: "RetailOS ಕೈಪಿಡಿ (Manual)",
    welcome: "RetailOS ಗೆ ಸುಸ್ವಾಗತ (Welcome)",
    description: "ಈ ಸಮಗ್ರ ಕೈಪಿಡಿಯು RetailOS ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಬಳಸಿ ನಿಮ್ಮ ಸೂಪರ್‌ಮಾರ್ಕೆಟ್ ಅನ್ನು ಸ್ಥಾಪಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಪ್ರತಿಯೊಂದು ವಿಭಾಗವು ವಿವರವಾದ ಹಂತಗಳು ಮತ್ತು ದೃಶ್ಯ ಮಾರ್ಗದರ್ಶಿಗಳೊಂದಿಗೆ ವ್ಯವಸ್ಥೆಯ ನಿರ್ದಿಷ್ಟ ಅಂಶವನ್ನು ಒಳಗೊಂಡಿದೆ.",
    gettingStarted: "ಪ್ರಾರಂಭಿಸುವುದು (Getting Started)",
    gettingStartedDesc: "ಉತ್ತಮ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಅನುಭವಕ್ಕಾಗಿ ಈ ವಿಭಾಗಗಳನ್ನು ಅನುಸರಿಸಿ. ಪ್ರತಿಯೊಂದು ವಿಭಾಗವು ಸುಗಮ ಸೆಟಪ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಹಿಂದಿನದನ್ನು ಆಧರಿಸಿದೆ.",
    viewGuide: "ವಿವರವಾದ ಮಾರ್ಗದರ್ಶಿ ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    detailedGuide: "ವಿವರವಾದ ಮಾರ್ಗದರ್ಶಿ",
    sections: {
      onboarding: { title: 'ಸೂಪರ್ಮಾರ್ಕೆಟ್ ಆನ್‌ಬೋರ್ಡಿಂಗ್', description: 'RetailOS ನೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ಸ್ಟೋರ್ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಬಳಕೆದಾರ ಖಾತೆಗಳನ್ನು ಹೊಂದಿಸಿ.' },
      warehouse: { title: 'ವೇರ್‌ಹೌಸ್ ನಿರ್ವಹಣೆ', description: 'ದಕ್ಷ ದಾಸ್ತಾನು ಟ್ರ್ಯಾಕಿಂಗ್‌ಗಾಗಿ ನಿಮ್ಮ ಭೌತಿಕ ಗೋದಾಮಿನ ವಿನ್ಯಾಸವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ.' },
      'product-content': { title: 'ಉತ್ಪನ್ನ ಮತ್ತು ವಿಷಯ ನಿರ್ವಹಣೆ', description: 'ನಿಮ್ಮ ಕ್ಯಾಟಲಾಗ್‌ಗೆ ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸಿ ಮತ್ತು ಗ್ರಾಹಕರಿಗೆ ಆಕರ್ಷಕ ಡೀಲ್‌ಗಳನ್ನು ರಚಿಸಿ.' },
      inventory: { title: 'ದಾಸ್ತಾನು ನಿರ್ವಹಣೆ', description: 'ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು, ಮಾರಾಟಗಾರರು ಮತ್ತು ಖರೀದಿ ಆದೇಶಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನಿರ್ವಹಿಸಿ.' },
      pricing: { title: 'ಬೆಲೆ ನಿರ್ವಹಣೆ', description: 'B2C ಮತ್ತು B2B ಗ್ರಾಹಕರಿಗೆ ಬೆಲೆ ತಂತ್ರಗಳನ್ನು ಹೊಂದಿಸಿ.' },
      orders: { title: 'ಆರ್ಡರ್ ನಿರ್ವಹಣೆ', description: 'ವಿವಿಧ ಪಾವತಿ ಆಯ್ಕೆಗಳೊಂದಿಗೆ POS ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ ಗ್ರಾಹಕರ ಆದೇಶಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಿ.' },
      fulfillment: { title: 'ನೆರವೇರಿಕೆ ಪ್ರಕ್ರಿಯೆ', description: 'ಪಿಕ್‌ನಿಂದ ಸಾಗಣೆಗೆ ಸಂಪೂರ್ಣ ಆರ್ಡರ್ ಪೂರೈಸುವ ಕೆಲಸದ ಹರಿವನ್ನು ತಿಳಿಯಿರಿ.' },
      logistics: { title: 'ಕೊನೆಯ ಮೈಲಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್', description: 'ವಿತರಣಾ ಸಿಬ್ಬಂದಿ ಮತ್ತು ಕೊನೆಯ ಮೈಲಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.' },
      'purchase-orders': { title: 'ಖರೀದಿ ಆದೇಶಗಳು', description: 'ಮಾರಾಟಗಾರರಿಂದ ಬರುವ ಎಲ್ಲಾ ಖರೀದಿ ಆದೇಶಗಳನ್ನು ನಿರ್ವಹಿಸಿ ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.' },
      'return-management': { title: 'ರಿಟರ್ನ್ ನಿರ್ವಹಣೆ', description: 'ಮಾರಾಟಗಾರರಿಗೆ ಉತ್ಪನ್ನ ರಿಟರ್ನ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಹಾನಿಗೊಳಗಾದ ಸರಕುಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಮತ್ತು ಸಂಪೂರ್ಣ ಆಡಿಟ್ ಟ್ರೇಲ್‌ಗಳೊಂದಿಗೆ ವೆಂಡರ್ ರಿಟರ್ನ್‌ಗಳನ್ನು ಪ್ರೊಸೆಸ್ ಮಾಡಿ.' },
      'vendor-management': { title: 'ಮಾರಾಟಗಾರರ ನಿರ್ವಹಣೆ', description: 'ಆನ್‌ಬೋರ್ಡಿಂಗ್‌ನಿಂದ ಕಾರ್ಯಕ್ಷಮತೆ ಟ್ರ್ಯಾಕಿಂಗ್‌ವರೆಗೆ ಪೂರೈಕೆದಾರರೊಂದಿಗೆ ಸಂಬಂಧಗಳನ್ನು ಸುಗಮಗೊಳಿಸಿ.' },
      'vendor-portal': { title: 'ಮಾರಾಟಗಾರರ ಪೋರ್ಟಲ್', description: 'ಪೂರೈಕೆದಾರರೊಂದಿಗೆ ನಿಮ್ಮ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಆದೇಶಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ, ಮತ್ತು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಸಹಕರಿಸಿ.' },
      'network-management': { title: 'ನೆಟ್‌ವರ್ಕ್ ನಿರ್ವಹಣೆ', description: 'B2C ಗ್ರಾಹಕರು, B2B ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ಬಹು-ಹಂತದ ರೆಫರಲ್ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ವಹಿಸಿ.' },
      'pay-later': { title: 'ಪೇ ಲೇಟರ್ ವಾಲೆಟ್ ನಿರ್ವಹಣೆ', description: 'ಗ್ರಾಹಕರಿಗೆ ಕ್ರೆಡಿಟ್ ಮಿತಿಗಳು, KYC ಪ್ರಕ್ರಿಯೆಗಳು ಮತ್ತು ಪಾವತಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.' },
      expenses: { title: 'ವೆಚ್ಚ ನಿರ್ವಹಣೆ', description: 'ಎಲ್ಲಾ ವ್ಯವಹಾರ ವೆಚ್ಚಗಳು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ವೆಚ್ಚಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.' }
    }
  },
  te: {
    pageTitle: "RetailOS మాన్యువల్ (Manual)",
    welcome: "RetailOS కు స్వాగతం (Welcome)",
    description: "ఈ సమగ్ర మాన్యువల్ RetailOS ప్లాట్‌ఫారమ్‌ను ఉపయోగించి మీ సూపర్‌మార్కెట్‌ను ఏర్పాటు చేయడానికి మరియు నిర్వహించడానికి మీకు మార్గనిర్దేశం చేస్తుంది. ప్రతి విభాగం వివరణాత్మక దశలు మరియు దృశ్య మార్గదర్శకాలతో సిస్టమ్ యొక్క ఒక నిర్దిష్ట అంశాన్ని కవర్ చేస్తుంది.",
    gettingStarted: "ప్రారంభించడం (Getting Started)",
    gettingStartedDesc: "ఉత్తమ ఆన్‌బోర్డింగ్ అనుభవం కోసం ఈ విభాగాలను క్రమంలో అనుసరించండి. ప్రతి విభాగం సున్నితమైన సెటప్ ప్రಕ್ರಿಯೆಯನ್ನು నిర్ధారించడానికి మునుపటి దానిపై ఆధారపడి ఉంటుంది.",
    viewGuide: "వివరణాత్మక గైడ్‌ను వీక్షించడానికి క్లిక్ చేయండి",
    detailedGuide: "వివరణాత్మక గైడ్",
    sections: {
      onboarding: { title: 'సూపర్‌మార్కెట్ ఆన్‌బోర్డింగ్', description: 'RetailOSతో ప్రారంభించడానికి మీ స్టోర్ ప్రొఫైల్ మరియు వినియోగదారు ఖాతాలను సెటప్ చేయండి.' },
      warehouse: { title: 'గిడ్డంగి నిర్వహణ', description: 'సమర్థవంతమైన ఇన్వెంటరీ ట్రాకింగ్ కోసం మీ భౌతిక గిడ్డంగి లేఅవుట్‌ను కాన్ఫిగర్ చేయండి.' },
      'product-content': { title: 'ఉత్పత్తి & కంటెంట్ నిర్వహణ', description: 'మీ కేటలాగ్‌కు ఉత్పత్తులను జోడించండి మరియు కస్టమర్‌ల కోసం ఆకర్షణీయమైన డీల్‌లను సృష్టించండి.' },
      inventory: { title: 'ఇన్వెంటరీ నిర్వహణ', description: 'స్టాక్ స్థాయిలు, విక్రేతలు మరియు కొనుగోలు ఆర్డర్‌లను సమర్థవంతంగా నిర్వహించండి.' },
      pricing: { title: 'ధరల నిర్వహణ', description: 'B2C మరియు B2B కస్టమర్ల కోసం ధరల వ్యూహాలను సెటప్ చేయండి.' },
      orders: { title: 'ఆర్డర్ నిర్వహణ', description: 'వివిధ చెల్లింపు ఎంపికలతో POS సిస్టమ్ ద్వారా కస్టమర్ ఆర్డర్‌లను ప్రాసెస్ చేయండి.' },
      fulfillment: { title: 'ఫుల్ఫిల్మెంట్ ప్రాసెస్', description: 'పిక్ నుండి షిప్ వరకు పూర్తి ఆర్డర్ ఫుల్ఫిల్మెంట్ వర్క్‌ఫ్లోను తెలుసుకోండి.' },
      logistics: { title: 'చివరి మైలు లాజిస్టిక్స్', description: 'డెలివరీ సిబ్బందిని మరియు చివరి మైలు లాజిస్టిక్స్ కార్యకలాపాలను నిర్వహించండి.' },
      'purchase-orders': { title: 'కొనుగోలు ఆర్డర్లు', description: 'విక్రేతల నుండి వచ్చే అన్ని కొనుగోలు ఆర్డర్‌లను నిర్వహించండి మరియు ట్రాక్ చేయండి.' },
      'return-management': { title: 'రిటర్న్ నిర్వహణ', description: 'విక్రేతలకు ఉత్పత్తి రిటర్న్లను నిర్వహించండి, దెబ్బతిన్న వస్తువులను నిర్వహించండి మరియు పూర్తి ఆడిట్ ట్రెయిల్స్‌తో వెండర్ రిటర్న్లను ప్రాసెస్ చేయండి.' },
      'vendor-management': { title: 'విక్రేత నిర్వహణ', description: 'ఆన్‌బోర్డింగ్ నుండి పనితీరు ట్రాకింగ్ వరకు సరఫరాదారులతో సంబంధాలను క్రమబద్ధీకరించండి.' },
      'vendor-portal': { title: 'విక్రేత పోర్టల్', description: 'సరఫరాదారులతో మీ సంబంధాలను నిర్వహించండి, ఆర్డర్‌లను ట్రాక్ చేయండి మరియు సమర్థవంతంగా సహకరించండి.' },
      'network-management': { title: 'నెట్‌వర్క్ నిర్వహణ', description: 'B2C కస్టమర్‌లు, B2B రిటైలర్లు మరియు బహుళ-స్థాయి రెఫరల్ సంబంధాలను నిర్వహించండి.' },
      'pay-later': { title: 'పే లేటర్ వాలెట్ నిర్వహణ', description: 'కస్టమర్ల కోసం క్రెడిట్ పరిమితులు, KYC ప్రక్రియలు మరియు చెల్లింపు ట్రాకింగ్‌ను కాన్ఫిగర్ చేయండి మరియు నిర్వహించండి.' },
      expenses: { title: 'ఖర్చుల నిర్వహణ', description: 'అన్ని వ్యాపార ఖర్చులు మరియు కార్యాచరణ ఖర్చులను ట్రాక్ చేయండి మరియు నిర్వహించండి.' }
    }
  },
  ta: {
    pageTitle: "RetailOS கையேடு (Manual)",
    welcome: "RetailOS க்கு வரவேற்கிறோம் (Welcome)",
    description: "இந்த விரிவான கையேடு RetailOS தளத்தைப் பயன்படுத்தி உங்கள் பல்பொருள் அங்காடியை அமைப்பதற்கும் இயக்குவதற்கும் உங்களுக்கு வழிகாட்டும். ஒவ்வொரு பகுதியும் கணினியின் ஒரு குறிப்பிட்ட அம்சத்தை விரிவான படிகள் மற்றும் காட்சி வழிகாட்டிகளுடன் உள்ளடக்கியது.",
    gettingStarted: "தொடங்குதல் (Getting Started)",
    gettingStartedDesc: "சிறந்த ஆன்போர்டிங் அனுபவத்திற்கு இந்த பிரிவுகளை வரிசையாகப் பின்பற்றவும். ஒவ்வொரு பகுதியும் ஒரு மென்மையான அமைவு செயல்முறையை உறுதிப்படுத்த முந்தைய ஒன்றை அடிப்படையாகக் கொண்டது.",
    viewGuide: "விரிவான வழிகாட்டியைப் பார்க்க கிளிக் செய்க",
    detailedGuide: "விரிவான வழிகாட்டி",
    sections: {
      onboarding: { title: 'பல்பொருள் அங்காடி ஆன்போர்டிங்', description: 'RetailOS உடன் தொடங்க உங்கள் கடை சுயவிவரம் மற்றும் பயனர் கணக்குகளை அமைக்கவும்.' },
      warehouse: { title: 'கிடங்கு மேலாண்மை', description: 'திறமையான சரக்கு கண்காணிப்புக்கு உங்கள் கிடங்கு தளவமைப்பை உள்ளமைக்கவும்.' },
      'product-content': { title: 'தயாரிப்பு & உள்ளடக்க மேலாண்மை', description: 'உங்கள் பட்டியலಿನಲ್ಲಿ தயாரிப்புகளைச் சேர்த்து வாடிக்கையாளர்களுக்கு கவர்ச்சிகரமான ஒப்பந்தங்களை உருவாக்கவும்.' },
      inventory: { title: 'சரக்கு மேலாண்மை', description: 'பங்கு நிலைகள், விற்பனையாளர்கள் மற்றும் கொள்முதல் ஆர்டர்களை திறம்பட நிர்வகிக்கவும்.' },
      pricing: { title: 'விலை மேலாண்மை', description: 'B2C மற்றும் B2B வாடிக்கையாளர்களுக்கு விலை நிர்ணய உத்திகளை அமைக்கவும்.' },
      orders: { title: 'ஆர்டர் மேலாண்மை', description: 'பல்வேறு கட்டண விருப்பங்களுடன் POS அமைப்பு மூலம் வாடிக்கையாளர் ஆர்டர்களைச் செயல்படுத்தவும்.' },
      fulfillment: { title: 'நிறைவேற்ற செயல்முறை', description: 'தேர்விலிருந்து அனுப்புவதற்கான முழுமையான ஆர்டர் நிறைவேற்றும் பணிப்பாய்வைக் கற்றுக்கொள்ளுங்கள்.' },
      logistics: { title: 'கடைசி மைல் தளவாடங்கள்', description: 'டெலிவரி பணியாளர்கள் மற்றும் கடைசி மைல் தளவாட நடவடிக்கைகளை நிர்வகிக்கவும்.' },
      'purchase-orders': { title: 'கொள்முதல் ஆணைகள்', description: 'விற்பனையாளர்களிடமிருந்து வரும் அனைத்து கொள்முதல் ஆர்டர்களையும் நிர்வகிக்கவும் மற்றும் கண்காணிக்கவும்.' },
      'return-management': { title: 'திரும்பப்பெறுதல் மேலாண்மை', description: 'விற்பனையாளர்களுக்கு பொருள் திரும்பப்பெறுதல்களை நிர்வகிக்கவும், சேதமடைந்த பொருட்களை நிர்வகிக்கவும் மற்றும் முழுமையான தணிக்கை தடங்களுடன் விற்பனையாளர் திரும்பப்பெறுதல்களை செயலாக்கவும்.' },
      'vendor-management': { title: 'விற்பனையாளர் மேலாண்மை', description: 'ஆன்போர்டிங்கிலிருந்து செயல்திறன் கண்காணிப்பு வரை சப்ளையர்களுடனான உறவுகளை நெறிப்படுத்தவும்.' },
      'vendor-portal': { title: 'விற்பனையாளர் போர்டல்', description: 'சப்ளையர்களுடனான உங்கள் உறவுகளை நிர்வகிக்கவும், ஆர்டர்களைக் கண்காணிக்கவும் மற்றும் திறமையாக ஒத்துழைக்கவும்.' },
      'network-management': { title: 'நெட்வொர்க் மேலாண்மை', description: 'B2C வாடிக்கையாளர்கள், B2B சில்லறை விற்பனையாளர்கள் மற்றும் பல-நிலை பரிந்துரை உறவுகளை நிர்வகிக்கவும்.' },
      'pay-later': { title: 'பே லேட்டர் வாலட் மேலாண்மை', description: 'வாடிக்கையாளர்களுக்கான கடன் வரம்புகள், KYC செயல்முறைகள் மற்றும் கட்டண கண்காணிப்பை உள்ளமைத்து நிர்வகிக்கவும்.' },
      expenses: { title: 'செலவு மேலாண்மை', description: 'அனைத்து வணிக செலவுகள் மற்றும் செயல்பாட்டு செலவுகளைக் கண்காணித்து நிர்வகிக்கவும்.' }
    }
  },
  hi: {
    pageTitle: "RetailOS मैनुअल (Manual)",
    welcome: "RetailOS में आपका स्वागत है (Welcome)",
    description: "यह व्यापक मैनुअल आपको RetailOS प्लेटफॉर्म का उपयोग करके अपने सुपरमार्केट को स्थापित करने और संचालित करने में मार्गदर्शन करेगा। प्रत्येक अनुभाग विस्तृत चरणों और दृश्य गाइड के साथ सिस्टम के एक विशिष्ट पहलू को कवर करता है।",
    gettingStarted: "शुरुआत (Getting Started)",
    gettingStartedDesc: "सर्वश्रेष्ठ ऑनबोर्डिंग अनुभव के लिए इन अनुभागों का क्रम में पालन करें। प्रत्येक अनुभाग एक सहज सेटअप प्रक्रिया सुनिश्चित करने के लिए पिछले वाले पर आधारित है।",
    viewGuide: "विस्तृत गाइड देखने के लिए क्लिक करें",
    detailedGuide: "विस्तृत गाइड",
    sections: {
      onboarding: { title: 'सुपरमार्केट ऑनबोर्डिंग', description: 'RetailOS के साथ आरंभ करने के लिए अपनी स्टोर प्रोफ़ाइल और उपयोगकर्ता खाते सेट करें।' },
      warehouse: { title: 'वेयरहाउस प्रबंधन', description: 'कुशल इन्वेंट्री ट्रैकिंग के लिए अपने भौतिक गोदाम लेआउट को कॉन्फ़िगर करें।' },
      'product-content': { title: 'उत्पाद और सामग्री प्रबंधन', description: 'अपने कैटलॉग में उत्पाद जोड़ें और ग्राहकों के लिए आकर्षक सौदे बनाएं।' },
      inventory: { title: 'इन्वेंट्री प्रबंधन', description: 'स्टॉक स्तर, विक्रेताओं और खरीद आदेशों को प्रभावी ढंग से प्रबंधित करें।' },
      pricing: { title: 'मूल्य प्रबंधन', description: 'B2C और B2B दोनों ग्राहकों के लिए मूल्य निर्धारण रणनीतियाँ सेट करें।' },
      orders: { title: 'ऑर्डर प्रबंधन', description: 'विभिन्न भुगतान विकल्पों के साथ POS सिस्टम के माध्यम से ग्राहक ऑर्डर संसाधित करें।' },
      fulfillment: { title: 'पूर्ति प्रक्रिया', description: 'पिक से शिप तक पूरी ऑर्डर पूर्ति वर्कफ़्लो सीखें।' },
      logistics: { title: 'अंतिम मील लॉजिस्टिक्स', description: 'डिलीवरी कर्मियों और अंतिम मील लॉजिस्टिक्स संचालन का प्रबंधन करें।' },
      'purchase-orders': { title: 'खरीद आदेश', description: 'विक्रेताओं से आने वाले सभी खरीद आदेशों का प्रबंधन और ट्रैक करें।' },
      'return-management': { title: 'रिटर्न प्रबंधन', description: 'विक्रेताओं को उत्पाद रिटर्न संभालें, क्षतिग्रस्त वस्तुओं का प्रबंधन करें और पूर्ण ऑडिट ट्रेल्स के साथ विक्रेता रिटर्न प्रोसेस करें।' },
      'vendor-management': { title: 'विक्रेता प्रबंधन', description: 'ऑनबोर्डिंग से प्रदर्शन ट्रैकिंग तक आपूर्तिकर्ताओं के साथ संबंधों को सुव्यवस्थित करें।' },
      'vendor-portal': { title: 'विक्रेता पोर्टल', description: 'आपूर्तिकर्ताओं के साथ अपने संबंधों का प्रबंधन करें, आदेशों को ट्रैक करें, और कुशलता से सहयोग करें।' },
      'network-management': { title: 'नेटवर्क प्रबंधन', description: 'B2C ग्राहकों, B2B खुदरा विक्रेताओं और बहु-स्तरीय रेफरल संबंधों का प्रबंधन करें.' },
      'pay-later': { title: 'पे लेटर वॉलेट प्रबंधन', description: 'ग्राहकों के लिए क्रेडिट सीमा, KYC प्रक्रियाओं और भुगतान ट्रैकिंग को कॉन्फ़िगर और प्रबंधित करें।' },
      expenses: { title: 'व्यय प्रबंधन', description: 'सभी व्यावसायिक व्ययों और परिचालन लागतों को ट्रैक और प्रबंधित करें।' }
    }
  },
  ml: {
    pageTitle: "RetailOS മാനുവൽ (Manual)",
    welcome: "RetailOS-ലേക്ക് സ്വാഗതം (Welcome)",
    description: "ഈ സമഗ്രമായ മാനുവൽ RetailOS പ്ലാറ്റ്ഫോം ഉപയോഗിച്ച് നിങ്ങളുടെ സൂപ്പർമാർക്കറ്റ് സജ്ജീകരിക്കുന്നതിനും പ്രവർത്തിപ്പിക്കുന്നതിനും നിങ്ങളെ നയിക്കും. ഓരോ വിഭാഗവും വിശദമായ ഘട്ടങ്ങളും ദൃശ്യ ഗൈഡുകളും ഉപയോഗിച്ച് സിസ്റ്റത്തിന്റെ ഒരു പ്രത്യേക വശം ഉൾക്കൊള്ളുന്നു.",
    gettingStarted: "തുടങ്ങുന്നു (Getting Started)",
    gettingStartedDesc: "മികച്ച ഓൺബോർഡിംഗ് അനുഭവത്തിനായി ഈ വിഭാഗങ്ങൾ ക്രമത്തിൽ പിന്തുടരുക. ഓരോ വിഭാഗവും സുഗമമായ സജ്ജീകരണ പ്രക്രിയ ഉറപ്പാക്കാൻ മുമ്പത്തേതിനെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്.",
    viewGuide: "വിശദമായ ഗൈഡ് കാണാൻ ക്ലിക്ക് ചെയ്യുക",
    detailedGuide: "വിശദമായ ഗൈഡ്",
    sections: {
      onboarding: { title: 'സൂപ്പർമാർക്കറ്റ് ഓൺബോർഡിംഗ്', description: 'RetailOS ഉപയോഗിച്ച് ആരംഭിക്കുന്നതിന് നിങ്ങളുടെ സ്റ്റോർ പ്രൊഫൈലും ഉപയോക്തൃ അക്കൗണ്ടുകളും സജ്ജമാക്കുക.' },
      warehouse: { title: 'വെയർഹൗസ് മാനേജ്മെന്റ്', description: 'കാര്യക്ഷമമായ ഇൻവെന്ററി ട്രാക്കിംഗിനായി നിങ്ങളുടെ ഭൗതിക വെയർഹൗസ് ലേഔട്ട് കോൺഫിഗർ ചെയ്യുക.' },
      'product-content': { title: 'ഉൽപ്പന്ന & ഉള്ളടക്ക മാനേജ്മെന്റ്', description: 'നിങ്ങളുടെ കാറ്റലോഗിലേക്ക് ഉൽപ്പന്നങ്ങൾ ചേർക്കുകയും ഉപഭോക്താക്കൾക്കായി ആകർഷകമായ ഡീലുകൾ സൃഷ്ടിക്കുകയും ചെയ്യുക.' },
      inventory: { title: 'ഇൻവെന്ററി മാനേജ്മെന്റ്', description: 'സ്റ്റോക്ക് ലെവലുകൾ, വെണ്ടർമാർ, கொள்முதல் ഓർഡറുകൾ എന്നിവ കാര്യക്ഷമമായി കൈകാര്യം ചെയ്യുക.' },
      pricing: { title: 'വില മാനേജ്മെന്റ്', description: 'B2C, B2B ഉപഭോക്താക്കൾക്കായി വിലനിർണ്ണയ തന്ത്രങ്ങൾ സജ്ജമാക്കുക.' },
      orders: { title: 'ഓർഡർ മാനേജ്മെന്റ്', description: 'വിവിധ പേയ്‌മെന്റ് ഓപ്ഷനുകളുള്ള POS സിസ്റ്റം വഴി ഉപഭോക്തൃ ഓർഡറുകൾ പ്രോസസ്സ് ചെയ്യുക.' },
      fulfillment: { title: 'പൂർത്തീകരണ പ്രക്രിയ', description: 'പിക്ക് മുതൽ ഷിപ്പ് വരെയുള്ള സമ്പൂർണ്ണ ഓർഡർ പൂർത്തീകരണ വർക്ക്ഫ്ലോ പഠിക്കുക.' },
      logistics: { title: 'അവസാന മൈൽ ലോജിസ്റ്റിക്സ്', description: 'ഡെലിവറി ഉദ്യോഗസ്ഥരെയും അവസാന മൈൽ ലോജിസ്റ്റിക്സ് പ്രവർത്തനങ്ങളെയും നിയന്ത്രിക്കുക.' },
      'purchase-orders': { title: 'കൊൾമുദൽ आदेशങ്ങൾ', description: 'വെണ്ടർമാരിൽ നിന്നുള്ള എല്ലാ കൊൾമുദൽ ഓർഡറുകളും കൈകാര്യം ചെയ്യുകയും ട്രാക്ക് ചെയ്യുകയും ചെയ്യുക.' },
      'return-management': { title: 'റിട്ടേൺ മാനേജ്മെന്റ്', description: 'വെണ്ടർമാർക്ക് ഉത്പന്ന റിട്ടേണുകൾ കൈകാര്യം ചെയ്യുക, കേടുപാടുകൾ സംഭവിച്ച വസ്തുക്കൾ നിര്‍വഹിക്കുക, പൂർണ്ണമായ ഓഡിറ്റ് ട്രെയിലുകളോടെ വെണ്ടർ റിട്ടേണുകൾ പ്രോസസ്സ് ചെയ്യുക.' },
      'vendor-management': { title: 'വെണ്ടർ മാനേജ്മെന്റ്', description: 'ഓൺബോർഡിംഗ് മുതൽ പ്രകടന ട്രാക്കിംഗ് വരെ വിതരണക്കാരുമായി ബന്ധം കാര്യക്ഷമമാക്കുക.' },
      'vendor-portal': { title: 'വെണ്ടർ പോർട്ടൽ', description: 'വിതരണക്കാരുമായി നിങ്ങളുടെ ബന്ധങ്ങൾ നിയന്ത്രിക്കുക, ഓർഡറുകൾ ട്രാക്ക് ചെയ്യുക, കാര്യക്ഷമമായി സഹകരിക്കുക.' },
      'network-management': { title: 'നെറ്റ്‌വർക്ക് മാനേജ്മെന്റ്', description: 'B2C ഉപഭോക്താക്കളെയും B2B റീട്ടെയിലർമാരെയും മൾട്ടി-ലെവൽ റഫറൽ ബന്ധങ്ങളെയും നിയന്ത്രിക്കുക.' },
      'pay-later': { title: 'പേ ലേറ്റർ വാലറ്റ് മാനേജ്മെന്റ്', description: 'ഉപഭോക്താക്കൾക്കായി ക്രെഡിറ്റ് പരിധികൾ, KYC പ്രക്രിയകൾ, പേയ്‌മെന്റ് ട്രാക്കിംഗ് എന്നിവ കോൺഫിഗർ ചെയ്യുകയും നിയന്ത്രിക്കുകയും ചെയ്യുക.' },
      expenses: { title: 'ചെലവ് മാനേജ്മെന്റ്', description: 'എല്ലാ ബിസിനസ്സ് ചെലവുകളും പ്രവർത്തന ചെലവുകളും ട്രാക്ക് ചെയ്യുകയും നിയന്ത്രിക്കുകയും ചെയ്യുക.' }
    }
  }
};


export default function Manual() {
  const [language, setLanguage] = useManualLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add new state for mobile sidebar

  const t = (key, sectionKey) => {
    if (sectionKey) {
        return translations[language]?.sections?.[sectionKey]?.[key] || translations['en']?.sections?.[sectionKey]?.[key];
    }
    return translations[language]?.[key] || translations['en']?.[key];
  };

  const sections = sectionDetails.map(sec => ({
    ...sec,
    title: t('title', sec.id),
    description: t('description', sec.id)
  }));

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="bg-slate-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Mobile header with menu button */}
          <div className="flex items-center justify-between lg:hidden mb-4">
          <button 
              onClick={toggleSidebar} 
              className="p-2 text-slate-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded-md transition-all duration-200 ease-in-out hover:bg-slate-100"
              aria-controls="mobile-sidebar"
              aria-expanded={isSidebarOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-blue-600" />
              {t('pageTitle')}
            </h2>
           
          </div>

          {/* Desktop Sidebar (hidden on mobile) */}
          <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                {t('pageTitle')}
              </h2>
              <nav>
                <ul className="space-y-2">
                  {sections.map(section => (
                    <li key={section.id}>
                      <Link 
                        to={createPageUrl(section.page)}
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-200 ease-in-out"
                      >
                        <section.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{section.title}</span>
                        <ChevronRight className="w-3 h-3 ml-auto" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Mobile Sidebar (as an overlay) */}
          <div className={`fixed  inset-0 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div 
              className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={toggleSidebar} 
              aria-hidden="true"
            ></div>

            {/* Drawer */}
            <aside className={`absolute left-0 top-0 h-full w-80 max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    {t('pageTitle')}
                  </h2>
                  <button 
                    onClick={toggleSidebar} 
                    className="p-2 text-slate-700 hover:text-blue-600 focus:outline-none rounded-md transition-all duration-200 ease-in-out hover:bg-slate-100"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="p-4">
                  <ul className="space-y-2">
                    {sections.map(section => (
                      <li key={section.id}>
                                                  <Link 
                            to={createPageUrl(section.page)}
                            onClick={toggleSidebar} // Close sidebar on link click
                            className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all duration-200 ease-in-out"
                          >
                          <section.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{section.title}</span>
                          <ChevronRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            </div>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>{t('welcome')}</CardTitle>
                <LanguageSelector language={language} setLanguage={setLanguage} />
              </CardHeader>
              <CardContent className="p-4 sm:p-6 md:p-10">
                <div className="mb-12">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{t('welcome')}</h1>
                  <p className="text-base sm:text-lg text-slate-600 mb-6">
                    {t('description')}
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">{t('gettingStarted')}</h3>
                    <p className="text-blue-700 mb-4 text-sm sm:text-base">
                      {t('gettingStartedDesc')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sections.slice(0, 4).map((section, index) => (
                        <Link key={section.id} to={createPageUrl(section.page)}>
                          <div className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-slate-800">{section.title}</div>
                              <div className="text-xs text-slate-500">{t('viewGuide')}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sections.map(section => (
                    <Link key={section.id} to={createPageUrl(section.page)}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <section.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            {section.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 text-sm mb-4">
                            {section.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {t('detailedGuide')}
                            </Badge>
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}