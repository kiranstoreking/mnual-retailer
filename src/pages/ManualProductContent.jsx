import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Package, Plus, Search, Star, Gift, Tag, Users, Building2, Grid, List, Eye, Edit, Filter, ArrowUpDown, Calendar, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';

const translations = {
  en: {
    pageTitle: "Product & Content Management Manual",
    backToManual: "Back to Manual",
    description: "Master product catalog management, deal creation, brand organization, and content optimization to drive sales and improve customer experience.",
    step1Title: "Content Management Dashboard Overview",
    step1Intro: "The Content Management Dashboard is your central hub for managing all product-related content, deals, brands, and categories. It provides comprehensive tools for catalog management and promotional content creation.",
    step1Description: "Navigate to the Content Management Dashboard to access all product-related management tools. This dashboard serves as your control center for catalog management, promotional content, and deal creation.",
    step2Title: "Product Catalog Management",
    step2Intro: "Managing your product catalog is fundamental to your retail operations. The system provides both list and card views with comprehensive filtering and search capabilities.",
    step2Description: "The Product Catalog tab gives you complete control over your inventory listings. You can view products in both table and card formats, with advanced filtering and search capabilities.",
    step3Title: "Deal Management System",
    step3Intro: "Create and manage product deals including normal bundles and BOGO (Buy One Get One) offers. The deal system helps increase average order value and customer satisfaction.",
    step3Description: "The Deal Management tab allows you to create compelling product bundles and promotional offers. You can set up normal deals or BOGO (Buy One Get One) promotions.",
    step4Title: "Brand and Category Organization",
    step4Intro: "Proper organization of brands and categories improves navigation, filtering, and creates better customer experience. The system supports hierarchical category structures.",
    step4Description: "Organize your products effectively using the brand and category management tools. This helps with navigation, filtering, and creating a better shopping experience.",
    step5Title: "Product Approval Workflow",
    step5Intro: "For businesses working with vendors, the product approval system ensures quality control and proper vetting of new products before they go live.",
    step5Description: "The Product Approval tab manages vendor-submitted products, ensuring quality control before products become available to customers.",
    nextStepsTitle: "Content Management Complete!",
    nextStepsDescription: "With your product catalog and deals set up, you can now move to Inventory Management to start managing stock levels, vendors, and purchase orders.",
    nextStepsButton: "Continue to Inventory Management",
    // UI Elements
    analytics: "Analytics",
    addProduct: "Add Product",
    filters: "Filters",
    searchProducts: "Search products...",
    edit: "Edit",
    review: "Review",
    approve: "Approve",
    active: "Active",
    pending: "Pending",
    createNewDeal: "Create New Deal",
    activeDeals: "Active Deals",
    bundleDeal: "Bundle Deal",
    products: "Products",
    bogoDeal: "BOGO Deal",
    snacksCategory: "Snacks Category",
    validUntil: "Valid until",
    brandManagement: "Brand Management",
    categoryManagement: "Category Management",
    pendingApprovals: "Pending Approvals",
    contentManagement: "Content Management",
    manageProductsDeals: "Manage products, deals, brands, and promotional content",
    freshFruitBundle: "Fresh Fruit Bundle",
    buy2Get1Free: "Buy 2 Get 1 Free - Chips",
    freshFarm: "Fresh Farm",
    organicValley: "Organic Valley",
    fruitsVegetables: "Fruits & Vegetables",
    dairyProducts: "Dairy Products",
    premiumHoney: "Premium Honey",
    goldenHarvestFoods: "Golden Harvest Foods",
    condimentsSauces: "Condiments & Sauces",
    // Table Headers
    product: "Product",
    brand: "Brand",
    category: "Category",
    b2cPrice: "B2C Price",
    stock: "Stock",
    status: "Status",
    actions: "Actions",
    // Additional UI text
    sku: "SKU",
    organicApples: "Organic Apples",
    freshFarmBrand: "Fresh Farm",
    fruitsCategory: "Fruits",
    price: "₹120.00",
    stockCount: "45",
    bundleDeal3Products: "Bundle Deal • 3 Products",
    b2cPriceLabel: "B2C Price: ",
    originalPrice: "₹350",
    dealPrice: "₹299",
    validUntilLabel: "Valid until: ",
    validUntilDate: "Dec 31, 2024",
    productsCount: "products",
    submittedBy: "Submitted by: ",
    categoryLabel: "Category: ",
  },
  kn: {
    pageTitle: "ಉತ್ಪನ್ನ ಮತ್ತು ವಿಷಯ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಮಾರಾಟವನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಗ್ರಾಹಕರ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ನಿರ್ವಹಣೆ, ಡೀಲ್ ರಚನೆ, ಬ್ರಾಂಡ್ ಸಂಘಟನೆ ಮತ್ತು ವಿಷಯ ಆಪ್ಟಿಮೈಸೇಶನ್ ಅನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    step1Title: "ವಿಷಯ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ವಿಷಯ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಎಲ್ಲಾ ಉತ್ಪನ್ನ-ಸಂಬಂಧಿತ ವಿಷಯ, ಡೀಲ್‌ಗಳು, ಬ್ರಾಂಡ್‌ಗಳು ಮತ್ತು ವರ್ಗಗಳನ್ನು ನಿರ್ವಹಿಸುವ ನಿಮ್ಮ ಕೇಂದ್ರ ಕೇಂದ್ರವಾಗಿದೆ.",
    step1Description: "ಎಲ್ಲಾ ಉತ್ಪನ್ನ-ಸಂಬಂಧಿತ ನಿರ್ವಹಣಾ ಸಾಧನಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ವಿಷಯ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",
    step2Title: "ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ನಿರ್ವಹಣೆ",
    step2Intro: "ನಿಮ್ಮ ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ನಿರ್ವಹಿಸುವುದು ನಿಮ್ಮ ಚಿಲ್ಲರೆ ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಮೂಲಭೂತವಾಗಿದೆ.",
    step2Description: "ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಟ್ಯಾಬ್ ನಿಮ್ಮ ಇನ್ವೆಂಟರಿ ಪಟ್ಟಿಗಳ ಮೇಲೆ ಸಂಪೂರ್ಣ ನಿಯಂತ್ರಣವನ್ನು ನೀಡುತ್ತದೆ.",
    step3Title: "ಡೀಲ್ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
    step3Intro: "ಸಾಮಾನ್ಯ ಬಂಡಲ್‌ಗಳು ಮತ್ತು BOGO (ಒಂದನ್ನು ಖರೀದಿಸಿ ಒಂದನ್ನು ಪಡೆಯಿರಿ) ಆಫರ್‌ಗಳು ಸೇರಿದಂತೆ ಉತ್ಪನ್ನ ಡೀಲ್‌ಗಳನ್ನು ರಚಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
    step3Description: "ಡೀಲ್ ನಿರ್ವಹಣಾ ಟ್ಯಾಬ್ ನಿಮಗೆ ಆಕರ್ಷಕ ಉತ್ಪನ್ನ ಬಂಡಲ್‌ಗಳು ಮತ್ತು ಪ್ರಚಾರದ ಆಫರ್‌ಗಳನ್ನು ರಚಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.",
    step4Title: "ಬ್ರಾಂಡ್ ಮತ್ತು ವರ್ಗ ಸಂಘಟನೆ",
    step4Intro: "ಬ್ರಾಂಡ್‌ಗಳು ಮತ್ತು ವರ್ಗಗಳ ಸರಿಯಾದ ಸಂಘಟನೆಯು ನ್ಯಾವಿಗೇಶನ್, ಫಿಲ್ಟರಿಂಗ್ ಅನ್ನು ಸುಧಾರಿಸುತ್ತದೆ ಮತ್ತು ಉತ್ತಮ ಗ್ರಾಹಕ ಅನುಭವವನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ.",
    step4Description: "ಬ್ರಾಂಡ್ ಮತ್ತು ವರ್ಗ ನಿರ್ವಹಣಾ ಸಾಧನಗಳನ್ನು ಬಳಸಿಕೊಂಡು ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಸಂಘಟಿಸಿ.",
    step5Title: "ಉತ್ಪನ್ನ ಅನುಮೋದನೆ ಕೆಲಸದ ಹರಿವು",
    step5Intro: "ಮಾರಾಟಗಾರರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವ ವ್ಯವಹಾರಗಳಿಗೆ, ಉತ್ಪನ್ನ ಅನುಮೋದನೆ ವ್ಯವಸ್ಥೆಯು ಉತ್ಪನ್ನಗಳು ಲೈವ್ ಆಗುವ ಮೊದಲು ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ ಮತ್ತು ಸರಿಯಾದ ಪರೀಕ್ಷೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
    step5Description: "ಉತ್ಪನ್ನ ಅನುಮೋದನೆ ಟ್ಯಾಬ್ ಮಾರಾಟಗಾರರು ಸಲ್ಲಿಸಿದ ಉತ್ಪನ್ನಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.",
    nextStepsTitle: "ವಿಷಯ ನಿರ್ವಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನಿಮ್ಮ ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಮತ್ತು ಡೀಲ್‌ಗಳನ್ನು ಹೊಂದಿಸಿದ ನಂತರ, ನೀವು ಈಗ ಸ್ಟಾಕ್ ಮಟ್ಟಗಳು, ಮಾರಾಟಗಾರರು ಮತ್ತು ಖರೀದಿ ಆದೇಶಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಪ್ರಾರಂಭಿಸಲು ಇನ್ವೆಂಟರಿ ನಿರ್ವಹಣೆಗೆ ತೆರಳಬಹುದು.",
    nextStepsButton: "ಇನ್ವೆಂಟರಿ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
    // UI Elements
    analytics: "ವಿಶ್ಲೇಷಣೆ",
    addProduct: "ಉತ್ಪನ್ನ ಸೇರಿಸಿ",
    filters: "ಫಿಲ್ಟರ್‌ಗಳು",
    searchProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...",
    edit: "ಸಂಪಾದಿಸಿ",
    review: "ಪರಿಶೀಲಿಸಿ",
    approve: "ಅನುಮೋದಿಸಿ",
    active: "ಸಕ್ರಿಯ",
    pending: "ಬಾಕಿ",
    createNewDeal: "ಹೊಸ ಡೀಲ್ ರಚಿಸಿ",
    activeDeals: "ಸಕ್ರಿಯ ಡೀಲ್‌ಗಳು",
    bundleDeal: "ಬಂಡಲ್ ಡೀಲ್",
    products: "ಉತ್ಪನ್ನಗಳು",
    bogoDeal: "BOGO ಡೀಲ್",
    snacksCategory: "ಸ್ನ್ಯಾಕ್‌ಗಳ ವರ್ಗ",
    validUntil: "ಮಾನ್ಯವಾಗಿರುವವರೆಗೆ",
    brandManagement: "ಬ್ರಾಂಡ್ ನಿರ್ವಹಣೆ",
    categoryManagement: "ವರ್ಗ ನಿರ್ವಹಣೆ",
    pendingApprovals: "ಬಾಕಿ ಅನುಮೋದನೆಗಳು",
    contentManagement: "ವಿಷಯ ನಿರ್ವಹಣೆ",
    manageProductsDeals: "ಉತ್ಪನ್ನಗಳು, ಡೀಲ್‌ಗಳು, ಬ್ರಾಂಡ್‌ಗಳು ಮತ್ತು ಪ್ರಚಾರದ ವಿಷಯವನ್ನು ನಿರ್ವಹಿಸಿ",
    freshFruitBundle: "ತಾಜಾ ಹಣ್ಣಿನ ಬಂಡಲ್",
    buy2Get1Free: "2 ಕೊಳ್ಳಿ 1 ಉಚಿತ - ಚಿಪ್‌ಗಳು",
    freshFarm: "ತಾಜಾ ಕೃಷಿ",
    organicValley: "ಜೈವಿಕ ಕಣಿವೆ",
    fruitsVegetables: "ಹಣ್ಣುಗಳು & ತರಕಾರಿಗಳು",
    dairyProducts: "ದುಗ್ಧ ಉತ್ಪನ್ನಗಳು",
    premiumHoney: "ಪ್ರೀಮಿಯಂ ಜೇನು",
    goldenHarvestFoods: "ಗೋಲ್ಡನ್ ಹಾರ್ವೆಸ್ಟ್ ಫುಡ್ಸ್",
    condimentsSauces: "ಮಸಾಲೆಗಳು & ಸಾಸ್‌ಗಳು",
    // Table Headers
    product: "ಉತ್ಪನ್ನ",
    brand: "ಬ್ರಾಂಡ್",
    category: "ವರ್ಗ",
    b2cPrice: "B2C ಬೆಲೆ",
    stock: "ಸ್ಟಾಕ್",
    status: "ಸ್ಥಿತಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    // Additional UI text
    sku: "SKU",
    organicApples: "ಜೈವಿಕ ಸೇಬುಗಳು",
    freshFarmBrand: "ತಾಜಾ ಕೃಷಿ",
    fruitsCategory: "ಹಣ್ಣುಗಳು",
    price: "₹120.00",
    stockCount: "45",
    bundleDeal3Products: "ಬಂಡಲ್ ಡೀಲ್ • 3 ಉತ್ಪನ್ನಗಳು",
    b2cPriceLabel: "B2C ಬೆಲೆ: ",
    originalPrice: "₹350",
    dealPrice: "₹299",
    validUntilLabel: "ಮಾನ್ಯವಾಗಿರುವವರೆಗೆ: ",
    validUntilDate: "ಡಿಸೆಂಬರ್ 31, 2024",
    productsCount: "ಉತ್ಪನ್ನಗಳು",
    submittedBy: "ಸಲ್ಲಿಸಿದವರು: ",
    categoryLabel: "ವರ್ಗ: ",
  },
  te: {
    pageTitle: "ఉత్పత్తి & కంటెంట్ నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కి తిరిగి వెళ్ళండి",
    description: "అమ్మకాలను పెంచడానికి మరియు కస్టమర్ అనుభవాన్ని మెరుగుపరచడానికి ఉత్పత్తి కేటలాగ్ నిర్వహణ, డీల్ సృష్టి, బ్రాండ్ సంఘటన మరియు కంటెంట్ ఆప్టిమైజేషన్‌ను నేర్చుకోండి.",
    step1Title: "కంటెంట్ నిర్వహణ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "కంటెంట్ నిర్వహణ డాష్‌బోర్డ్ అనేది మీ ఉత్పత్తి-సంబంధిత కంటెంట్, డీల్‌లు, బ్రాండ్‌లు మరియు వర్గాలను నిర్వహించడానికి మీ కేంద్ర కేంద్రం.",
    step1Description: "అన్ని ఉత్పత్తి-సంబంధిత నిర్వహణ సాధనాలకు ప్రాప్యత పొందడానికి కంటెంట్ నిర్వహణ డాష్‌బోర్డ్‌కి నావిగేట్ చేయండి.",
    step2Title: "ఉత్పత్తి కేటలాగ్ నిర్వహణ",
    step2Intro: "మీ ఉత్పత్తి కేటలాగ్‌ను నిర్వహించడం మీ రిటైల్ కార్యకలాపాలకు ప్రాథమికమైనది.",
    step2Description: "ఉత్పత్తి కేటలాగ్ ట్యాబ్ మీ ఇన్వెంటరీ జాబితాలపై పూర్తి నియంత్రణను ఇస్తుంది.",
    step3Title: "డీల్ నిర్వహణ వ్యవస్థ",
    step3Intro: "సాధారణ బండిల్‌లు మరియు BOGO (ఒకటి కొనండి ఒకటి పొందండి) ఆఫర్‌లతో సహా ఉత్పత్తి డీల్‌లను సృష్టించండి మరియు నిర్వహించండి.",
    step3Description: "డీల్ నిర్వహణ ట్యాబ్ మీకు ఆకర్షణీయమైన ఉత్పత్తి బండిల్‌లు మరియు ప్రచార ఆఫర్‌లను సృష్టించడానికి అనుమతిస్తుంది.",
    step4Title: "బ్రాండ్ మరియు వర్గ సంఘటన",
    step4Intro: "బ్రాండ్‌లు మరియు వర్గాల సరైన సంఘటన నావిగేషన్, ఫిల్టరింగ్‌ను మెరుగుపరుస్తుంది మరియు మెరుగైన కస్టమర్ అనుభవాన్ని సృష్టిస్తుంది.",
    step4Description: "బ్రాండ్ మరియు వర్గ నిర్వహణ సాధనాలను ఉపయోగించి మీ ఉత్పత్తులను సమర్థవంతంగా నిర్వహించండి.",
    step5Title: "ఉత్పత్తి ఆమోదం వర్క్‌ఫ్లో",
    step5Intro: "వెండర్‌లతో పనిచేసే వ్యాపారాల కోసం, ఉత్పత్తి ఆమోద వ్యవస్థ నాణ్యత నియంత్రణ మరియు ఉత్పత్తులు లైవ్‌లోకి వచ్చే ముందు సరైన పరీక్షను నిర్ధారిస్తుంది.",
    step5Description: "ఉత్పత్తి ఆమోద ట్యాబ్ వెండర్‌లు సమర్పించిన ఉత్పత్తులను నిర్వహిస్తుంది.",
    nextStepsTitle: "కంటెంట్ నిర్వహణ పూర్తయింది!",
    nextStepsDescription: "మీ ఉత్పత్తి కేటలాగ్ మరియు డీల్‌లు సెటప్ చేయబడిన తర్వాత, మీరు ఇప్పుడు స్టాక్ స్థాయిలు, వెండర్‌లు మరియు కొనుగోలు ఆర్డర్‌లు నిర్వహించడం ప్రారంభించడానికి ఇన్వెంటరీ నిర్వహణకు వెళ్లవచ్చు.",
    nextStepsButton: "ఇన్వెంటరీ నిర్వహణకు కొనసాగండి",
    // UI Elements
    analytics: "విశ్లేషణ",
    addProduct: "ఉత్పత్తి జోడించండి",
    filters: "ఫిల్టర్లు",
    searchProducts: "ఉత్పత్తులను వెతకండి...",
    edit: "సవరించండి",
    review: "సమీక్షించండి",
    approve: "ఆమోదించండి",
    active: "క్రియాశీల",
    pending: "పెండింగ్",
    createNewDeal: "కొత్త డీల్ సృష్టించండి",
    activeDeals: "క్రియాశీల డీల్లు",
    bundleDeal: "బండిల్ డీల్",
    products: "ఉత్పత్తులు",
    bogoDeal: "BOGO డీల్",
    snacksCategory: "స్నాక్స్ వర్గం",
    validUntil: "వరకు చెల్లుబాటు",
    brandManagement: "బ్రాండ్ నిర్వహణ",
    categoryManagement: "వర్గ నిర్వహణ",
    pendingApprovals: "పెండింగ్ ఆమోదాలు",
    contentManagement: "కంటెంట్ నిర్వహణ",
    manageProductsDeals: "ఉత్పత్తులు, డీల్లు, బ్రాండ్లు మరియు ప్రచార కంటెంట్‌ను నిర్వహించండి",
    freshFruitBundle: "తాజా పండ్ల బండిల్",
    buy2Get1Free: "2 కొనండి 1 ఉచితం - చిప్స్",
    freshFarm: "తాజా పొలం",
    organicValley: "జైవిక లోయ",
    fruitsVegetables: "పండ్లు & కూరగాయలు",
    dairyProducts: "పాల ఉత్పత్తులు",
    premiumHoney: "ప్రీమియం తేనె",
    goldenHarvestFoods: "గోల్డెన్ హార్వెస్ట్ ఫుడ్స్",
    condimentsSauces: "మసాలాలు & సాసులు",
    // Table Headers
    product: "ఉత్పత్తి",
    brand: "బ్రాండ్",
    category: "వర్గం",
    b2cPrice: "B2C ధర",
    stock: "స్టాక్",
    status: "స్థితి",
    actions: "చర్యలు",
    // Additional UI text
    sku: "SKU",
    organicApples: "జైవిక ఆపిల్లు",
    freshFarmBrand: "తాజా పొలం",
    fruitsCategory: "పండ్లు",
    price: "₹120.00",
    stockCount: "45",
    bundleDeal3Products: "బండిల్ డీల్ • 3 ఉత్పత్తులు",
    b2cPriceLabel: "B2C ధర: ",
    originalPrice: "₹350",
    dealPrice: "₹299",
    validUntilLabel: "వరకు చెల్లుబాటు: ",
    validUntilDate: "డిసెంబర్ 31, 2024",
    productsCount: "ఉత్పత్తులు",
    submittedBy: "సమర్పించినవారు: ",
    categoryLabel: "వర్గం: ",
  },
  ta: {
    pageTitle: "தயாரிப்பு & உள்ளடக்க மேலாண்மை கையேடு",
    backToManual: "கையேட்டிற்கு திரும்பு",
    description: "விற்பனையை அதிகரிக்கவும் வாடிக்கையாளர் அனுபவத்தை மேம்படுத்தவும் தயாரிப்பு பட்டியல் மேலாண்மை, ஒப்பந்த உருவாக்கம், பிராண்ட் அமைப்பு மற்றும் உள்ளடக்க உகந்தமயமாக்கலை மாஸ்டர் செய்யுங்கள்.",
    step1Title: "உள்ளடக்க மேலாண்மை டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "உள்ளடக்க மேலாண்மை டாஷ்போர்டு என்பது அனைத்து தயாரிப்பு-தொடர்பான உள்ளடக்கம், ஒப்பந்தங்கள், பிராண்டுகள் மற்றும் வகைகளை நிர்வகிப்பதற்கான உங்கள் மைய மையமாகும்.",
    step1Description: "அனைத்து தயாரிப்பு-தொடர்பான மேலாண்மை கருவிகளுக்கான அணுகலைப் பெற உள்ளடக்க மேலாண்மை டாஷ்போர்டுக்கு செல்லுங்கள்.",
    step2Title: "தயாரிப்பு பட்டியல் மேலாண்மை",
    step2Intro: "உங்கள் தயாரிப்பு பட்டியலை நிர்வகிப்பது உங்கள் சில்லறை வணிக நடவடிக்கைகளுக்கு அடிப்படையானது.",
    step2Description: "தயாரிப்பு பட்டியல் டேப் உங்கள் சரக்கு பட்டியல்களில் முழுமையான கட்டுப்பாட்டை வழங்குகிறது.",
    step3Title: "ஒப்பந்த மேலாண்மை அமைப்பு",
    step3Intro: "சாதாரண தொகுப்புகள் மற்றும் BOGO (ஒன்று வாங்கி ஒன்று பெறுங்கள்) சலுகைகள் உட்பட தயாரிப்பு ஒப்பந்தங்களை உருவாக்கி நிர்வகிக்கவும்.",
    step3Description: "ஒப்பந்த மேலாண்மை டேப் உங்களை கவர்ச்சிகரமான தயாரிப்பு தொகுப்புகள் மற்றும் விளம்பர சலுகைகளை உருவாக்க அனுமதிக்கிறது.",
    step4Title: "பிராண்ட் மற்றும் வகை அமைப்பு",
    step4Intro: "பிராண்ட்கள் மற்றும் வகைகளின் சரியான அமைப்பு வழிசெலுத்தல், வடிப்பதை மேம்படுத்துகிறது மற்றும் சிறந்த வாடிக்கையாளர் அனுபவத்தை உருவாக்குகிறது.",
    step4Description: "பிராண்ட் மற்றும் வகை மேலாண்மை கருவிகளைப் பயன்படுத்தி உங்கள் தயாரிப்புகளை திறம்பட நிர்வகிக்கவும்.",
    step5Title: "தயாரிப்பு ஒப்புதலின் வேலைப்பாய்வு",
    step5Intro: "விற்பனையாளர்களுடன் பணிபுரியும் வணிகங்களுக்கு, தயாரிப்பு ஒப்புதல் அமைப்பு தயாரிப்புகள் நேரலைக்கு வருவதற்கு முன் தரக் கட்டுப்பாடு மற்றும் சரியான சோதனையை உறுதி செய்கிறது.",
    step5Description: "தயாரிப்பு ஒப்புதல் டேப் விற்பனையாளர்கள் சமர்ப்பித்த தயாரிப்புகளை நிர்வகிக்கிறது.",
    nextStepsTitle: "உள்ளடக்க மேலாண்மை முடிந்தது!",
    nextStepsDescription: "உங்கள் தயாரிப்பு பட்டியல் மற்றும் ஒப்பந்தங்கள் அமைக்கப்பட்டதால், நீங்கள் இப்போது சரக்கு நிலைகள், விற்பனையாளர்கள் மற்றும் கொள்முதல் ஆர்டர்களை நிர்வகிக்கத் தொடங்குவதற்கு சரக்கு மேலாண்மைக்கு செல்லலாம்.",
    nextStepsButton: "சரக்கு மேலாண்மைக்கு தொடரவும்",
    // UI Elements
    analytics: "பகுப்பாய்வு",
    addProduct: "தயாரிப்பு சேர்க்கவும்",
    filters: "வடிப்பான்கள்",
    searchProducts: "தயாரிப்புகளைத் தேடுங்கள்...",
    edit: "திருத்து",
    review: "மதிப்பாய்வு",
    approve: "ஒப்புக்கொள்",
    active: "செயலில்",
    pending: "நிலுவையில்",
    createNewDeal: "புதிய ஒப்பந்தத்தை உருவாக்கு",
    activeDeals: "செயலில் உள்ள ஒப்பந்தங்கள்",
    bundleDeal: "தொகுப்பு ஒப்பந்தம்",
    products: "தயாரிப்புகள்",
    bogoDeal: "BOGO ஒப்பந்தம்",
    snacksCategory: "சிற்றுண்டிகள் வகை",
    validUntil: "செல்லுபடியாகும் வரை",
    brandManagement: "பிராண்ட் மேலாண்மை",
    categoryManagement: "வகை மேலாண்மை",
    pendingApprovals: "நிலுவையில் உள்ள ஒப்புக்கொள்கள்",
    contentManagement: "உள்ளடக்க மேலாண்மை",
    manageProductsDeals: "தயாரிப்புகள், ஒப்பந்தங்கள், பிராண்ட்கள் மற்றும் விளம்பர உள்ளடக்கத்தை நிர்வகிக்கவும்",
    freshFruitBundle: "புதிய பழங்களின் தொகுப்பு",
    buy2Get1Free: "2 வாங்க 1 இலவசம் - சிப்ஸ்",
    freshFarm: "புதிய பண்ணை",
    organicValley: "கரிம பள்ளத்தாக்கு",
    fruitsVegetables: "பழங்கள் & காய்கறிகள்",
    dairyProducts: "பால் பொருட்கள்",
    premiumHoney: "பிரீமியம் தேன்",
    goldenHarvestFoods: "கோல்டன் ஹார்வெஸ்ட் ஃபுட்ஸ்",
    condimentsSauces: "மசாலாப் பொருட்கள் & சாஸ்கள்",
    // Table Headers
    product: "தயாரிப்பு",
    brand: "பிராண்ட்",
    category: "வகை",
    b2cPrice: "B2C விலை",
    stock: "சரக்கு",
    status: "நிலை",
    actions: "செயல்கள்",
    // Additional UI text
    sku: "SKU",
    organicApples: "கரிம ஆப்பிள்கள்",
    freshFarmBrand: "புதிய பண்ணை",
    fruitsCategory: "பழங்கள்",
    price: "₹120.00",
    stockCount: "45",
    bundleDeal3Products: "தொகுப்பு ஒப்பந்தம் • 3 தயாரிப்புகள்",
    b2cPriceLabel: "B2C விலை: ",
    originalPrice: "₹350",
    dealPrice: "₹299",
    validUntilLabel: "செல்லுபடியாகும் வரை: ",
    validUntilDate: "டிசம்பர் 31, 2024",
    productsCount: "தயாரிப்புகள்",
    submittedBy: "சமர்ப்பித்தவர்: ",
    categoryLabel: "வகை: ",
  },
  hi: {
    pageTitle: "उत्पाद और सामग्री प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "बिक्री बढ़ाने और ग्राहक अनुभव में सुधार के लिए उत्पाद कैटलॉग प्रबंधन, डील निर्माण, ब्रांड संगठन और सामग्री अनुकूलन में महारत हासिल करें।",
    step1Title: "सामग्री प्रबंधन डैशबोर्ड अवलोकन",
    step1Intro: "सामग्री प्रबंधन डैशबोर्ड आपका केंद्रीय केंद्र है जो सभी उत्पाद-संबंधित सामग्री, डील, ब्रांड और श्रेणियों का प्रबंधन करता है।",
    step1Description: "सभी उत्पाद-संबंधित प्रबंधन उपकरणों तक पहुंचने के लिए सामग्री प्रबंधन डैशबोर्ड पर नेविगेट करें।",
    step2Title: "उत्पाद कैटलॉग प्रबंधन",
    step2Intro: "आपके उत्पाद कैटलॉग का प्रबंधन आपके खुदरा संचालन के लिए मौलिक है।",
    step2Description: "उत्पाद कैटलॉग टैब आपको अपनी इन्वेंटरी सूचियों पर पूर्ण नियंत्रण देता है।",
    step3Title: "डील प्रबंधन प्रणाली",
    step3Intro: "सामान्य बंडल और BOGO (एक खरीदें एक मुफ्त) ऑफर सहित उत्पाद डील बनाएं और प्रबंधित करें।",
    step3Description: "डील प्रबंधन टैब आपको आकर्षक उत्पाद बंडल और प्रचार ऑफर बनाने की अनुमति देता है।",
    step4Title: "ब्रांड और श्रेणी संगठन",
    step4Intro: "ब्रांड और श्रेणियों का उचित संगठन नेविगेशन, फ़िल्टरिंग में सुधार करता है और बेहतर ग्राहक अनुभव बनाता है।",
    step4Description: "ब्रांड और श्रेणी प्रबंधन उपकरणों का उपयोग करके अपने उत्पादों को प्रभावी ढंग से व्यवस्थित करें।",
    step5Title: "उत्पाद अनुमोदन कार्यप्रवाह",
    step5Intro: "विक्रेताओं के साथ काम करने वाले व्यवसायों के लिए, उत्पाद अनुमोदन प्रणाली उत्पादों के लाइव होने से पहले गुणवत्ता नियंत्रण और उचित जांच सुनिश्चित करती है।",
    step5Description: "उत्पाद अनुमोदन टैब विक्रेता-प्रस्तुत उत्पादों का प्रबंधन करता है।",
    nextStepsTitle: "सामग्री प्रबंधन पूरा हुआ!",
    nextStepsDescription: "अपने उत्पाद कैटलॉग और डील सेटअप के साथ, आप अब स्टॉक स्तर, विक्रेताओं और खरीद आदेशों का प्रबंधन शुरू करने के लिए इन्वेंटरी प्रबंधन पर जा सकते हैं।",
    nextStepsButton: "इन्वेंटरी प्रबंधन पर जारी रखें",
    // UI Elements
    analytics: "विश्लेषण",
    addProduct: "उत्पाद जोड़ें",
    filters: "फ़िल्टर",
    searchProducts: "उत्पाद खोजें...",
    edit: "संपादित करें",
    review: "समीक्षा करें",
    approve: "स्वीकृत करें",
    active: "सक्रिय",
    pending: "लंबित",
    createNewDeal: "नया डील बनाएं",
    activeDeals: "सक्रिय डील",
    bundleDeal: "बंडल डील",
    products: "उत्पाद",
    bogoDeal: "BOGO डील",
    snacksCategory: "स्नैक्स श्रेणी",
    validUntil: "मान्य तक",
    brandManagement: "ब्रांड प्रबंधन",
    categoryManagement: "श्रेणी प्रबंधन",
    pendingApprovals: "लंबित स्वीकृतियां",
    contentManagement: "सामग्री प्रबंधन",
    manageProductsDeals: "उत्पाद, डील, ब्रांड और प्रचार सामग्री प्रबंधित करें",
    freshFruitBundle: "ताजे फलों का बंडल",
    buy2Get1Free: "2 खरीदें 1 मुफ्त - चिप्स",
    freshFarm: "ताजा फार्म",
    organicValley: "ऑर्गेनिक वैली",
    fruitsVegetables: "फल और सब्जियां",
    dairyProducts: "डेयरी उत्पाद",
    premiumHoney: "प्रीमियम शहद",
    goldenHarvestFoods: "गोल्डन हार्वेस्ट फूड्स",
    condimentsSauces: "मसाले और सॉस",
    // Table Headers
    product: "उत्पाद",
    brand: "ब्रांड",
    category: "श्रेणी",
    b2cPrice: "B2C मूल्य",
    stock: "स्टॉक",
    status: "स्थिति",
    actions: "कार्रवाई",
    // Additional UI text
    sku: "SKU",
    organicApples: "ऑर्गेनिक सेब",
    freshFarmBrand: "ताजा फार्म",
    fruitsCategory: "फल",
    price: "₹120.00",
    stockCount: "45",
    bundleDeal3Products: "बंडल डील • 3 उत्पाद",
    b2cPriceLabel: "B2C मूल्य: ",
    originalPrice: "₹350",
    dealPrice: "₹299",
    validUntilLabel: "मान्य तक: ",
    validUntilDate: "31 दिसंबर, 2024",
    productsCount: "उत्पाद",
    submittedBy: "द्वारा प्रस्तुत: ",
    categoryLabel: "श्रेणी: ",
  },
  ml: {
    pageTitle: "ഉൽപ്പന്ന & ഉള്ളടക്ക മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് തിരികെ പോകുക",
    description: "വിൽപ്പന വർദ്ധിപ്പിക്കാനും ഉപഭോക്തൃ അനുഭവം മെരുക്കാനും ഉൽപ്പന്ന കാറ്റലോഗ് മാനേജ്മെന്റ്, ഡീൽ സൃഷ്ടി, ബ്രാൻഡ് ഓർഗനൈസേഷൻ, ഉള്ളടക്ക ഒപ്റ്റിമൈസേഷൻ എന്നിവയിൽ മാസ്റ്റർ ആകുക.",
    step1Title: "ഉള്ളടക്ക മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡ് അവലോകനം",
    step1Intro: "ഉള്ളടക്ക മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡ് എന്നത് നിങ്ങളുടെ എല്ലാ ഉൽപ്പന്ന-ബന്ധപ്പെട്ട ഉള്ളടക്കം, ഡീലുകൾ, ബ്രാൻഡുകൾ, വിഭാഗങ്ങൾ എന്നിവ നിയന്ത്രിക്കാനുള്ള കേന്ദ്ര കേന്ദ്രമാണ്.",
    step1Description: "എല്ലാ ഉൽപ്പന്ന-ബന്ധപ്പെട്ട മാനേജ്മെന്റ് ഉപകരണങ്ങളിലേക്ക് ആക്സസ് ചെയ്യാൻ ഉള്ളടക്ക മാനേജ്മെന്റ് ഡാഷ്‌ബോർഡിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക.",
    step2Title: "ഉൽപ്പന്ന കാറ്റലോഗ് മാനേജ്മെന്റ്",
    step2Intro: "നിങ്ങളുടെ ഉൽപ്പന്ന കാറ്റലോഗ് നിയന്ത്രിക്കുന്നത് നിങ്ങളുടെ റീട്ടെയിൽ പ്രവർത്തനങ്ങൾക്ക് അടിസ്ഥാനമാണ്.",
    step2Description: "ഉൽപ്പന്ന കാറ്റലോഗ് ടാബ് നിങ്ങളുടെ ഇൻവെന്ററി ലിസ്റ്റിംഗുകളിൽ പൂർണ്ണ നിയന്ത്രണം നൽകുന്നു.",
    step3Title: "ഡീൽ മാനേജ്മെന്റ് സിസ്റ്റം",
    step3Intro: "സാധാരണ ബണ്ടിലുകൾ, BOGO (ഒന്ന് വാങ്ങി ഒന്ന് സൗജന്യം) ഓഫറുകൾ എന്നിവ ഉൾപ്പെടെ ഉൽപ്പന്ന ഡീലുകൾ സൃഷ്ടിക്കുകയും നിയന്ത്രിക്കുകയും ചെയ്യുക.",
    step3Description: "ഡീൽ മാനേജ്മെന്റ് ടാബ് നിങ്ങളെ ആകർഷകമായ ഉൽപ്പന്ന ബണ്ടിലുകളും പ്രചാര ഓഫറുകളും സൃഷ്ടിക്കാൻ അനുവദിക്കുന്നു.",
    step4Title: "ബ്രാൻഡ്, വിഭാഗ ഓർഗനൈസേഷൻ",
    step4Intro: "ബ്രാൻഡുകളുടെയും വിഭാഗങ്ങളുടെയും ശരിയായ ഓർഗനൈസേഷൻ നാവിഗേഷൻ, ഫിൽട്ടറിംഗ് മെരുക്കുകയും മികച്ച ഉപഭോക്തൃ അനുഭവം സൃഷ്ടിക്കുകയും ചെയ്യുന്നു.",
    step4Description: "ബ്രാൻഡ്, വിഭാഗ മാനേജ്മെന്റ് ഉപകരണങ്ങൾ ഉപയോഗിച്ച് നിങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ ഫലപ്രദമായി ഓർഗനൈസ് ചെയ്യുക.",
    step5Title: "ഉൽപ്പന്ന അനുമതി വർക്ക്ഫ്ലോ",
    step5Intro: "വെണ്ടർമാരുമായി പ്രവർത്തിക്കുന്ന ബിസിനസുകൾക്ക്, ഉൽപ്പന്ന അനുമതി സിസ്റ്റം ഉൽപ്പന്നങ്ങൾ ലൈവ്‌ലോക് വരുന്നതിന് മുമ്പ് ഗുണനിലവാര നിയന്ത്രണവും ശരിയായ പരിശോധനയും ഉറപ്പാക്കുന്നു.",
    step5Description: "ഉൽപ്പന്ന അനുമതി ടാബ് വെണ്ടർ സമർപ്പിച്ച ഉൽപ്പന്നങ്ങൾ നിയന്ത്രിക്കുന്നു.",
    nextStepsTitle: "ഉള്ളടക്ക മാനേജ്മെന്റ് പൂർത്തിയായി!",
    nextStepsDescription: "നിങ്ങളുടെ ഉൽപ്പന്ന കാറ്റലോഗും ഡീലുകളും സെറ്റപ്പ് ചെയ്തതിനാൽ, നിങ്ങൾക്ക് ഇപ്പോൾ സ്റ്റോക്ക് ലെവലുകൾ, വെണ്ടർമാർ, വാങ്ങൽ ഓർഡറുകൾ എന്നിവ നിയന്ത്രിക്കാൻ ആരംഭിക്കാൻ ഇൻവെന്ററി മാനേജ്മെന്റിലേക്ക് പോകാം.",
    nextStepsButton: "ഇൻവെന്ററി മാനേജ്മെന്റിലേക്ക് തുടരുക",
    // UI Elements
    analytics: "വിശകലനം",
    addProduct: "ഉൽപ്പന്നം ചേർക്കുക",
    filters: "ഫിൽട്ടറുകൾ",
    searchProducts: "ഉൽപ്പന്നങ്ങൾ തിരയുക...",
    edit: "എഡിറ്റ് ചെയ്യുക",
    review: "അവലോകനം ചെയ്യുക",
    approve: "അനുവദിക്കുക",
    active: "സജീവം",
    pending: "തീരുമാനിക്കാത്തത്",
    createNewDeal: "പുതിയ ഡീൽ സൃഷ്ടിക്കുക",
    activeDeals: "സജീവമായ ഡീലുകൾ",
    bundleDeal: "ബണ്ടിൽ ഡീൽ",
    products: "ഉൽപ്പന്നങ്ങൾ",
    bogoDeal: "BOGO ഡീൽ",
    snacksCategory: "സ്നാക്സ് വിഭാഗം",
    validUntil: "സാധുതയുള്ളത്",
    brandManagement: "ബ്രാൻഡ് മാനേജ്മെന്റ്",
    categoryManagement: "വിഭാഗ മാനേജ്മെന്റ്",
    pendingApprovals: "തീരുമാനിക്കാത്ത അനുമതികൾ",
    contentManagement: "ഉള്ളടക്ക മാനേജ്മെന്റ്",
    manageProductsDeals: "ഉൽപ്പന്നങ്ങൾ, ഡീലുകൾ, ബ്രാൻഡുകൾ, പ്രചാര ഉള്ളടക്കം എന്നിവ നിയന്ത്രിക്കുക",
    freshFruitBundle: "പുതിയ പഴങ്ങളുടെ ബണ്ടിൽ",
    buy2Get1Free: "2 വാങ്ങൂ 1 സൗജന്യം - ചിപ്പുകൾ",
    freshFarm: "പുതിയ ഫാം",
    organicValley: "ഓർഗാനിക് താഴ്വര",
    fruitsVegetables: "പഴങ്ങളും പച്ചക്കറികളും",
    dairyProducts: "പാൽ ഉൽപ്പന്നങ്ങൾ",
    premiumHoney: "പ്രീമിയം തേൻ",
    goldenHarvestFoods: "ഗോൾഡൻ ഹാർവെസ്റ്റ് ഫുഡ്സ്",
    condimentsSauces: "താളിക്കുകയും സോസുകളും",
    // Table Headers
    product: "ഉൽപ്പന്നം",
    brand: "ബ്രാൻഡ്",
    category: "വിഭാഗം",
    b2cPrice: "B2C വില",
    stock: "സ്റ്റോക്ക്",
    status: "നില",
    actions: "പ്രവർത്തനങ്ങൾ",
    // Additional UI text
    sku: "SKU",
    organicApples: "ഓർഗാനിക് ആപ്പിൾ",
    freshFarmBrand: "പുതിയ ഫാം",
    fruitsCategory: "പഴങ്ങൾ",
    price: "₹120.00",
    stockCount: "45",
    bundleDeal3Products: "ബണ്ടിൽ ഡീൽ • 3 ഉൽപ്പന്നങ്ങൾ",
    b2cPriceLabel: "B2C വില: ",
    originalPrice: "₹350",
    dealPrice: "₹299",
    validUntilLabel: "സാധുതയുള്ളത്: ",
    validUntilDate: "ഡിസംബർ 31, 2024",
    productsCount: "ഉൽപ്പന്നങ്ങൾ",
    submittedBy: "സമർപ്പിച്ചത്: ",
    categoryLabel: "വിഭാഗം: ",
  },
};

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
  <div className="flex items-start gap-4 mt-8  w-full">
    <div className="flex-shrink-0 w-8 h-8  bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base -ml-12 sm:ml-0">
        {children}
      </div>
    </div>
  </div>
);

export default function ManualProductContent() {
  const [language] = useManualLanguage();

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
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
          <LanguageSelector language={language} setLanguage={() => { }} readOnly />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
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
                <p>
                  {t('step1Description')}
                </p>

                <Screenshot title={t('contentManagement')}>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{t('contentManagement')}</h2>
                        <p className="text-slate-600">{t('manageProductsDeals')}</p>
                      </div>
                      <div className="flex gap-3 flex-col sm:flex-row">
                        <Button variant="outline">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          {t('analytics')}
                        </Button>
                        <Button>
                          <Plus className="w-4 h-4 mr-2" />
                          {t('addProduct')}
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <Package className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <h3 className="font-semibold">{t('products')}</h3>
                        <p className="text-2xl font-bold text-blue-600">1,247</p>
                      </div>
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <Gift className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <h3 className="font-semibold">{t('activeDeals')}</h3>
                        <p className="text-2xl font-bold text-green-600">23</p>
                      </div>
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <Building2 className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <h3 className="font-semibold">{t('brand')}</h3>
                        <p className="text-2xl font-bold text-purple-600">89</p>
                      </div>
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <Tag className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                        <h3 className="font-semibold">{t('category')}</h3>
                        <p className="text-2xl font-bold text-orange-600">34</p>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>{t('step2Intro')}</p>
                <p>{t('step2Description')}</p>

                <Screenshot title={t('step2Title')}>
                  <div className='overflow-x-auto  [-webkit-overflow-scrolling:touch]'>
                    <div className="space-y-4">
                      {/* Filters & Actions */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                          <Input placeholder={t('searchProducts')} className="pl-9" />
                        </div>
                        <Button variant="outline">
                          <Filter className="w-4 h-4 mr-2" />
                          {t('filters')}
                        </Button>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <List className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Grid className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Table wrapper - only this scrolls */}
                      <div className="border rounded-lg">
                        <div className="overflow-x-auto sm:overflow-x-visible">
                          <table className="min-w-[800px] w-full">
                            <thead className="bg-slate-50">
                              <tr>
                                <th className="text-left p-3 font-medium">{t('product')}</th>
                                <th className="text-left p-3 font-medium">{t('brand')}</th>
                                <th className="text-left p-3 font-medium">{t('category')}</th>
                                <th className="text-right p-3 font-medium">{t('b2cPrice')}</th>
                                <th className="text-right p-3 font-medium">{t('stock')}</th>
                                <th className="text-center p-3 font-medium">{t('status')}</th>
                                <th className="text-center p-3 font-medium">{t('actions')}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t">
                                <td className="p-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-100 rounded"></div>
                                    <div>
                                      <p className="font-medium">{t('organicApples')}</p>
                                      <p className="text-sm text-slate-500">{t('sku')}: APL-001</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3">{t('freshFarmBrand')}</td>
                                <td className="p-3">{t('fruitsCategory')}</td>
                                <td className="p-3 text-right">{t('price')}</td>
                                <td className="p-3 text-right">{t('stockCount')}</td>
                                <td className="p-3 text-center">
                                  <Badge variant="secondary" className="bg-green-100 text-green-800">{t('active')}</Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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

                <Screenshot title={t('step3Title')}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{t('activeDeals')}</h3>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        {t('createNewDeal')}
                      </Button>
                    </div>

                    <div className="grid gap-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{t('freshFruitBundle')}</h4>
                            <p className="text-sm text-slate-500">{t('bundleDeal3Products')}</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">{t('active')}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-slate-500">{t('b2cPriceLabel')}</span>
                            <span className="font-medium">{t('dealPrice')}</span>
                            <span className="text-slate-400 line-through ml-2">{t('originalPrice')}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-1" />
                            {t('edit')}
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{t('buy2Get1Free')}</h4>
                            <p className="text-sm text-slate-500">{t('bogoDeal')} • {t('snacksCategory')}</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800">{t('active')}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-slate-500">{t('validUntilLabel')}</span>
                            <span className="font-medium">{t('validUntilDate')}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <BarChart3 className="w-4 h-4 mr-1" />
                            {t('analytics')}
                          </Button>
                        </div>
                      </div>
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

                <Screenshot title={t('step4Title')}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{t('brandManagement')}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded"></div>
                            <span className="font-medium">{t('freshFarm')}</span>
                          </div>
                          <span className="text-sm text-slate-500">234 {t('productsCount')}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded"></div>
                            <span className="font-medium">{t('organicValley')}</span>
                          </div>
                          <span className="text-sm text-slate-500">89 {t('productsCount')}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">{t('categoryManagement')}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Tag className="w-5 h-5 text-orange-600" />
                            <span className="font-medium">{t('fruitsVegetables')}</span>
                          </div>
                          <span className="text-sm text-slate-500">456 {t('productsCount')}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Tag className="w-5 h-5 text-purple-600" />
                            <span className="font-medium">{t('dairyProducts')}</span>
                          </div>
                          <span className="text-sm text-slate-500">123 {t('productsCount')}</span>
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

                <Screenshot title={t('step5Title')}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{t('pendingApprovals')}</h3>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">3 {t('pending')}</Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{t('premiumHoney')}</h4>
                            <p className="text-sm text-slate-500">{t('submittedBy')} {t('goldenHarvestFoods')}</p>
                            <p className="text-sm text-slate-500">{t('categoryLabel')} {t('condimentsSauces')}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              {t('review')}
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              {t('approve')}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <div className="mt-12 p-6 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-purple-700 mb-4">
                  {t('nextStepsDescription')}
                </p>
                <Link to={createPageUrl('ManualInventory')} className="inline-block">
                  <Button className="bg-purple-600 hover:bg-purple-700">
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