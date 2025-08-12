
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, DollarSign, Users, Building2, TrendingUp, History, Calculator, 
  Target, BarChart3, AlertTriangle, CheckCircle, ArrowUpDown, Edit, 
  Filter, Search, Plus, Eye, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';
import { navigateTo } from '../services/NavigationServic';

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
    <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base break-words -ml-12 sm:ml-0">
        {children}
      </div>
    </div>
  </div>
);

const TabSection = ({ icon, title, children, color = "slate" }) => (
  <div className={`border-l-4 border-${color}-500 pl-6 py-6 my-8`}>
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h5 className="text-xl font-semibold text-slate-800">{title}</h5>
    </div>
    <div className="text-sm sm:text-base text-slate-700 space-y-4">
      {children}
    </div>
  </div>
);

const translations = {
  en: {
    pageTitle: "Price Management Manual",
    backToManual: "Back to Manual",
    description: "Master dynamic pricing strategies, margin optimization, and comprehensive price management for both B2C and B2B customers with detailed analytics and audit trails.",
    step1Title: "Price Management Dashboard Overview",
    step1Intro: "The Price Management system provides comprehensive tools for setting, monitoring, and optimizing your product pricing strategies. It offers real-time analytics, margin tracking, and intelligent pricing recommendations.",
    step1Description: "Navigate to the Price Management Dashboard to access powerful pricing tools, competitive analysis, and margin optimization features.",
    step2Title: "Individual Product Price Management",
    step2Intro: "RetailOS provides sophisticated dual-pricing capabilities for B2C (retail) and B2B (wholesale) customers. Each product can have different pricing strategies with margin calculations and competitive analysis.",
    step2Description: "The individual product pricing interface allows you to set separate prices for B2C and B2B customers, calculate margins, and track price history.",
    step3Title: "Bulk Price Management Operations",
    step3Intro: "When you need to update prices for multiple products simultaneously, the bulk price management system provides powerful tools for category-based, brand-based, or custom selection criteria with preview capabilities.",
    step3Description: "Use bulk pricing tools to efficiently update prices across multiple products, with filters and preview capabilities to ensure accuracy before applying changes.",
    nextStepsTitle: "Pricing Strategy Complete!",
    nextStepsDescription: "You now have comprehensive understanding of RetailOS price management capabilities. With dynamic pricing, margin optimization, and detailed audit trails, you can maintain competitive positioning while maximizing profitability.",
    nextStepsButton: "Continue to Order Management",
    openDashboard: "Open Price Management Dashboard",
    // Screenshot content
    accessingPriceManagement: "Accessing Price Management from Sidebar",
    analytics: "Analytics",
    priceManagement: "Price Management",
    inventory: "Inventory",
    clickToAccess: "Click on 'Price Management' from the sidebar to access the pricing dashboard.",
    mainDashboard: "Price Management Main Dashboard",
    monitorPerformance: "Monitor pricing performance and manage product prices",
    bulkUpdate: "Bulk Price Update",
    totalInventoryValue: "Total Inventory Value",
    thisMonth: "this month",
    avgB2CMargin: "Average B2C Margin",
    target: "Target",
    avgB2BMargin: "Average B2B Margin",
    priceChangesToday: "Price Changes Today",
    pendingApproval: "pending approval",
    comprehensiveAnalytics: "Comprehensive Price Analytics",
    marginPerformance: "Margin Performance by Category",
    dairyProducts: "Dairy Products",
    productsValue: "{count} products • ₹{value} value",
    snacksBeverages: "Snacks & Beverages",
    personalCare: "Personal Care",
    priceAlerts: "Price Monitoring Alerts",
    lowMarginAlert: "Low Margin Alert",
    lowMarginDesc: "{count} products have margins below 15% threshold and need price adjustment review.",
    reviewProducts: "Review Products",
    marketPriceVariance: "Market Price Variance",
    marketVarianceDesc: "{count} products show significant variance from market average pricing.",
    aboveMarket: "{percentage}% above market average",
    belowMarket: "{percentage}% below market average",
    individualPricingForm: "Individual Product Pricing Form",
    pricingFor: "Pricing: {productName}",
    costPrice: "Cost Price",
    costPriceDesc: "Your purchase cost per unit",
    lastPurchase: "Last Purchase",
    avgCost30d: "Average Cost (30d)",
    b2cPriceRetail: "B2C Price (Retail)",
    margin: "Margin",
    profitPerUnit: "Profit: ₹{amount} per unit",
    marketAverage: "Market Average",
    b2bPriceWholesale: "B2B Price (Wholesale)",
    minB2BPrice: "Min B2B Price",
    pricingRecommendations: "Pricing Recommendations",
    b2cOptimization: "B2C Optimization",
    priceBelowMarket: "Current price is {percentage}% below market average",
    considerIncreasing: "Consider increasing to ₹{price} for better margin",
    priceElasticity: "Price elasticity: Low (essential item)",
    b2bOptimization: "B2B Optimization",
    competitiveWithMarket: "Competitive with wholesale market",
    volumeDiscountAvailable: "Volume discount tier available at 100+ units",
    regularCustomerDiscount: "Regular customer gets additional 2% discount",
    resetToDefaults: "Reset to Defaults",
    savePricing: "Save Pricing",
    priceHistoryTimeline: "Product Price History Timeline",
    priceHistoryFor: "Price History: {productName}",
    b2cPriceChanges: "B2C Price Changes",
    increase: "increase",
    byUser: "By: {email}",
    reason: "Reason",
    marketAdjustmentReason: "Market price adjustment + margin optimization",
    costIncreaseReason: "Cost price increase from vendor",
    b2bPriceChanges: "B2B Price Changes",
    maintainMarginReason: "Maintain B2B margin alignment",
    priceImpactSummary: "Price Impact Summary",
    totalB2CIncrease: "Total B2C Increase",
    overMonths: "Over {count} months",
    totalB2BIncrease: "Total B2B Increase",
    revenueImpact: "Revenue Impact",
    estimatedMonthly: "Estimated monthly",
    marketPriceComparison: "Market Price Comparison",
    marketIntelligence: "Market Price Intelligence",
    yourPricingPosition: "Your Pricing Position",
    aboveMarketAverage: "Above Market Average",
    atMarketAverage: "At Market Average",
    belowMarketAverage: "Below Market Average",
    pricingOpportunities: "Pricing Opportunities",
    canIncreasePrice: "Can Increase Price",
    potentialRevenue: "Potential Revenue",
    riskLevel: "Risk Level",
    lowRisk: "Low",
    topRecommendations: "Top Price Adjustment Recommendations",
    yourPrice: "Your price",
    marketAvg: "Market avg",
    lowRiskIncrease: "Low risk increase",
    mediumRiskIncrease: "Medium risk increase",
    bulkUpdateInterface: "Bulk Price Update Interface",
    bulkPriceUpdate: "Bulk Price Update",
    applyChanges: "Apply pricing changes to multiple products simultaneously",
    selectionCriteria: "Selection Criteria",
    filterByCategory: "Filter by Category",
    allCategories: "All Categories",
    filterByBrand: "Filter by Brand",
    allBrands: "All Brands",
    marginRange: "Margin Range",
    min: "Min",
    max: "Max",
    priceAdjustment: "Price Adjustment",
    adjustmentType: "Adjustment Type",
    percentageIncrease: "Percentage Increase",
    percentageDecrease: "Percentage Decrease",
    fixedIncrease: "Fixed Amount Increase",
    fixedDecrease: "Fixed Amount Decrease",
    setTargetMargin: "Set Target Margin",
    value: "Value",
    applyB2C: "Apply to B2C prices",
    applyB2B: "Apply to B2B prices",
    maintainMargin: "Maintain relative margin difference",
    bulkUpdatePreview: "Preview Changes Before Applying",
    previewAffected: "Preview: Affected Products ({count} items)",
    product: "Product",
    currentB2C: "Current B2C",
    newB2C: "New B2C",
    currentB2B: "Current B2B",
    newB2B: "New B2B",
    impact: "Impact",
    showingOf: "Showing {shown} of {total} products. Total value impact: +₹{value} inventory value increase",
    approvalSystem: "Price Change Approval System",
    pendingApprovals: "Pending Price Change Approvals",
    bulkUpdateRequest: "Bulk Price Update Request",
    bulkUpdateDesc: "{category} category - {percentage}% price increase across {count} products",
    requestedBy: "Requested by",
    requestedOn: "Requested on",
    expectedRevenueImpact: "Expected revenue impact",
    reject: "Reject",
    approve: "Approve",
    justification: "Justification",
    justificationText: "Vendor cost increased by 3.2%, maintaining margin requires price adjustment",
    marketAnalysis: "Market Analysis",
    marketAnalysisText: "Competitors increased prices by 4-6% in last 30 days",
    riskAssessment: "Risk Assessment",
    riskAssessmentText: "Low - Essential products with inelastic demand",
    individualUpdateRequest: "Individual Product Update",
    individualUpdateDesc: "{productName} - B2C: ₹{oldPrice} → ₹{newPrice} (+{percentage}%)",
    expectedMarginIncrease: "Expected margin increase",
    // Product names
    organicBasmatiRice: "Organic Basmati Rice 1kg",
    wholeWheatFlour: "Whole Wheat Flour 2kg",
    sunflowerOil: "Sunflower Oil 1L",
    premiumTeaBags: "Premium Tea Bags",
    cocaCola: "Coca Cola 330ml",
    laysClassic: "Lays Classic 50g",
    premiumOliveOil: "Premium Olive Oil 500ml",
    dairyProducts: "Dairy Products",
    snacksBeverages: "Snacks & Beverages",
    personalCare: "Personal Care"
  },
  kn: {
    pageTitle: "ಬೆಲೆ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ವಿವರವಾದ ಅನ್ಯಾಲಿಟಿಕ್ಸ್ ಮತ್ತು ಆಡಿಟ್ ಟ್ರೇಲ್‌ಗಳೊಂದಿಗೆ B2C ಮತ್ತು B2B ಗ್ರಾಹಕರಿಗಾಗಿ ಡೈನಾಮಿಕ್ ಪ್ರೈಸಿಂಗ್ ತಂತ್ರಗಳು, ಮಾರ್ಜಿನ್ ಆಪ್ಟಿಮೈಸೇಶನ್ ಮತ್ತು ಸಮಗ್ರ ಬೆಲೆ ನಿರ್ವಹಣೆಯನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    step1Title: "ಬೆಲೆ ನಿರ್ವಹಣಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ಬೆಲೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯು ನಿಮ್ಮ ಉತ್ಪನ್ನ ಬೆಲೆ ತಂತ್ರಗಳನ್ನು ಹೊಂದಿಸಲು, ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಮತ್ತು ಅತ್ಯುತ್ತಮಗೊಳಿಸಲು ಸಮಗ್ರ ಪರಿಕರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ।",
    step1Description: "ಶಕ್ತಿಶಾಲಿ ಬೆಲೆ ಸಾಧನಗಳು, ಸ್ಪರ್ಧಾತ್ಮಕ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಮಾರ್ಜಿನ್ ಆಪ್ಟಿಮೈಸೇಶನ್ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಪ್ರೈಸ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.",
    step2Title: "ವೈಯಕ್ತಿಕ ಉತ್ಪನ್ನ ಬೆಲೆ ನಿರ್ವಹಣೆ",
    step2Intro: "RetailOS B2C (ಚಿಲ್ಲರೆ) ಮತ್ತು B2B (ಸಗಟು) ಗ್ರಾಹಕರಿಗೆ ಅತ್ಯಾಧುನಿಕ ದ್ವಿ-ಬೆಲೆ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step2Description: "ವೈಯಕ್ತಿಕ ಉತ್ಪನ್ನ ಬೆಲೆ ಇಂಟರ್‌ಫೇಸ್ ನಿಮಗೆ B2C ಮತ್ತು B2B ಗ್ರಾಹಕರಿಗೆ ಪ್ರತ್ಯೇಕ ಬೆಲೆಗಳನ್ನು ಹೊಂದಿಸಲು, ಮಾರ್ಜಿನ್‌ಗಳನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ಮತ್ತು ಬೆಲೆ ಇತಿಹಾಸವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ.",
    step3Title: "ಬಲ್ಕ್ ಪ್ರೈಸ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಆಪರೇಷನ್ಸ್",
    step3Intro: "ಏಕಕಾಲದಲ್ಲಿ ಅನೇಕ ಉತ್ಪನ್ನಗಳಿಗೆ ಬೆಲೆಗಳನ್ನು ಅಪ್‌ಡೇಟ್ ಮಾಡಬೇಕಾದಾಗ, ಬಲ್ಕ್ ಪ್ರೈಸ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಸಿಸ್ಟಮ್ ವರ್ಗ-ಆಧಾರಿತ, ಬ್ರಾಂಡ್-ಆಧಾರಿತ ಅಥವಾ ಕಸ್ಟಮ್ ಆಯ್ಕೆ ಮಾನದಂಡಗಳೊಂದಿಗೆ ಪೂರ್ವವೀಕ್ಷಣೆ ಸಾಮರ್ಥ್ಯಗಳೊಂದಿಗೆ ಶಕ್ತಿಶಾಲಿ ಸಾಧನಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step3Description: "ಬದಲಾವಣೆಗಳನ್ನು ಅನ್ವಯಿಸುವ ಮೊದಲು ನಿಖರತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಫಿಲ್ಟರ್‌ಗಳು ಮತ್ತು ಪೂರ್ವವೀಕ್ಷಣೆ ಸಾಮರ್ಥ್ಯಗಳೊಂದಿಗೆ ಅನೇಕ ಉತ್ಪನ್ನಗಳಲ್ಲಿ ಬೆಲೆಗಳನ್ನು ದಕ್ಷತೆಯಿಂದ ಅಪ್‌ಡೇಟ್ ಮಾಡಲು ಬಲ್ಕ್ ಪ್ರೈಸಿಂಗ್ ಸಾಧನಗಳನ್ನು ಬಳಸಿ.",
    nextStepsTitle: "ಬೆಲೆ ತಂತ್ರ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನೀವು ಈಗ RetailOS ಬೆಲೆ ನಿರ್ವಹಣಾ ಸಾಮರ್ಥ್ಯಗಳ ಸಮಗ್ರ ತಿಳುವಳಿಕೆಯನ್ನು ಹೊಂದಿದ್ದೀರಿ। ಡೈನಾಮಿಕ್ ಪ್ರೈಸಿಂಗ್, ಮಾರ್ಜಿನ್ ಆಪ್ಟಿಮೈಸೇಶನ್ ಮತ್ತು ವಿವರವಾದ ಆಡಿಟ್ ಟ್ರೇಲ್‌ಗಳೊಂದಿಗೆ, ನೀವು ಲಾಭದಾಯಕತೆಯನ್ನು ಗರಿಷ್ಠಗೊಳಿಸುವಾಗ ಸ್ಪರ್ಧಾತ್ಮಕ ಸ್ಥಾನವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಬಹುದು.",
    nextStepsButton: "ಆರ್ಡರ್ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
    openDashboard: "ಬೆಲೆ ನಿರ್ವಹಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ",
    // Screenshot content
    accessingPriceManagement: "ಬೆಲೆ ನಿರ್ವಹಣೆಯನ್ನು ಸೈಡ್‌ಬಾರ್‌ನಿಂದ ಪ್ರವೇಶಿಸುವುದು",
    analytics: "ಅನ್ಯಾಲಿಟಿಕ್ಸ್",
    priceManagement: "ಬೆಲೆ ನಿರ್ವಹಣೆ",
    inventory: "ದಾಸ್ತಾನು",
    clickToAccess: "ಬೆಲೆ ನಿಗದಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಲು ಸೈಡ್‌ಬಾರ್‌ನಿಂದ 'ಬೆಲೆ ನಿರ್ವಹಣೆ' ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    mainDashboard: "ಬೆಲೆ ನಿರ್ವಹಣೆ ಮುಖ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    monitorPerformance: "ಬೆಲೆ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮತ್ತು ಉತ್ಪನ್ನ ಬೆಲೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    bulkUpdate: "ಬೃಹತ್ ಬೆಲೆ ಅಪ್‌ಡೇಟ್",
    totalInventoryValue: "ಒಟ್ಟು ದಾಸ್ತಾನು ಮೌಲ್ಯ",
    thisMonth: "ಈ ತಿಂಗಳು",
    avgB2CMargin: "ಸರಾಸರಿ B2C ಮಾರ್ಜಿನ್",
    target: "ಗುರಿ",
    avgB2BMargin: "ಸರಾಸರಿ B2B ಮಾರ್ಜಿನ್",
    priceChangesToday: "ಇಂದು ಬೆಲೆ ಬದಲಾವಣೆಗಳು",
    pendingApproval: "ಬಾಕಿ ಉಳಿದಿರುವ ಅನುಮೋದನೆ",
    comprehensiveAnalytics: "ಸಮಗ್ರ ಬೆಲೆ ಅನ್ಯಾಲಿಟಿಕ್ಸ್",
    marginPerformance: "ವರ್ಗದ ಪ್ರಕಾರ ಮಾರ್ಜಿನ್ ಕಾರ್ಯಕ್ಷಮತೆ",
    dairyProducts: "ಡೈರಿ ಉತ್ಪನ್ನಗಳು",
    productsValue: "{count} ಉತ್ಪನ್ನಗಳು • ₹{value} ಮೌಲ್ಯ",
    snacksBeverages: "ತಿಂಡಿಗಳು ಮತ್ತು ಪಾನೀಯಗಳು",
    personalCare: "ವೈಯಕ್ತಿಕ ಆರೈಕೆ",
    priceAlerts: "ಬೆಲೆ ಮೇಲ್ವಿಚಾರಣೆ ಎಚ್ಚರಿಕೆಗಳು",
    lowMarginAlert: "ಕಡಿಮೆ ಮಾರ್ಜಿನ್ ಎಚ್ಚರಿಕೆ",
    lowMarginDesc: "{count} ಉತ್ಪನ್ನಗಳು 15% ಮಿತಿಗಿಂತ ಕಡಿಮೆ ಮಾರ್ಜಿನ್‌ಗಳನ್ನು ಹೊಂದಿವೆ ಮತ್ತು ಬೆಲೆ ಹೊಂದಾಣಿಕೆ ವಿಮರ್ಶೆ ಅಗತ್ಯವಿದೆ.",
    reviewProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    marketPriceVariance: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ವ್ಯತ್ಯಾಸ",
    marketVarianceDesc: "{count} ಉತ್ಪನ್ನಗಳು ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿ ಬೆಲೆಯಿಂದ ಗಮನಾರ್ಹ ವ್ಯತ್ಯಾಸವನ್ನು ತೋರಿಸುತ್ತವೆ.",
    aboveMarket: "{percentage}% ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿಗಿಂತ ಹೆಚ್ಚು",
    belowMarket: "{percentage}% ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿಗಿಂತ ಕಡಿಮೆ",
    individualPricingForm: "ವೈಯಕ್ತಿಕ ಉತ್ಪನ್ನ ಬೆಲೆ ನಮೂನೆ",
    pricingFor: "ಬೆಲೆ: {productName}",
    costPrice: "ಖರೀದಿ ಬೆಲೆ",
    costPriceDesc: "ನಿಮ್ಮ ಪ್ರತಿ ಘಟಕದ ಖರೀದಿ ವೆಚ್ಚ",
    lastPurchase: "ಕೊನೆಯ ಖರೀದಿ",
    avgCost30d: "ಸರಾಸರಿ ವೆಚ್ಚ (30ದಿನ)",
    b2cPriceRetail: "B2C ಬೆಲೆ (ಚಿಲ್ಲರೆ)",
    margin: "ಮಾರ್ಜಿನ್",
    profitPerUnit: "ಲಾಭ: ಪ್ರತಿ ಘಟಕಕ್ಕೆ ₹{amount}",
    marketAverage: "ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿ",
    b2bPriceWholesale: "B2B ಬೆಲೆ (ಸಗಟು)",
    minB2BPrice: "ಕನಿಷ್ಠ B2B ಬೆಲೆ",
    pricingRecommendations: "ಬೆಲೆ ಶಿಫಾರಸುಗಳು",
    b2cOptimization: "B2C ಆಪ್ಟಿಮೈಸೇಶನ್",
    priceBelowMarket: "ಪ್ರಸ್ತುತ ಬೆಲೆ ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿಗಿಂತ {percentage}% ಕಡಿಮೆಯಾಗಿದೆ",
    considerIncreasing: "ಉತ್ತಮ ಮಾರ್ಜಿನ್‌ಗಾಗಿ ₹{price} ಗೆ ಹೆಚ್ಚಿಸಲು ಪರಿಗಣಿಸಿ",
    priceElasticity: "ಬೆಲೆ ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವ: ಕಡಿಮೆ (ಅಗತ್ಯ ವಸ್ತು)",
    b2bOptimization: "B2B ಆಪ್ಟಿಮೈಸೇಶನ್",
    competitiveWithMarket: "ಸಗಟು ಮಾರುಕಟ್ಟೆಯೊಂದಿಗೆ ಸ್ಪರ್ಧಾತ್ಮಕ",
    volumeDiscountAvailable: "100+ ಘಟಕಗಳಲ್ಲಿ ವಾಲ್ಯೂಮ್ ಡಿಸ್ಕೌಂಟ್ ಶ್ರೇಣಿ ಲಭ್ಯವಿದೆ",
    regularCustomerDiscount: "ನಿಯಮಿತ ಗ್ರಾಹಕರಿಗೆ ಹೆಚ್ಚುವರಿ 2% ರಿಯಾಯಿತಿ ಸಿಗುತ್ತದೆ",
    resetToDefaults: "ಡೀಫಾಲ್ಟ್‌ಗಳಿಗೆ ಮರುಹೊಂದಿಸಿ",
    savePricing: "ಬೆಲೆ ಉಳಿಸಿ",
    priceHistoryTimeline: "ಉತ್ಪನ್ನ ಬೆಲೆ ಇತಿಹಾಸ ಟೈಮ್‌ಲೈನ್",
    priceHistoryFor: "ಬೆಲೆ ಇತಿಹಾಸ: {productName}",
    b2cPriceChanges: "B2C ಬೆಲೆ ಬದಲಾವಣೆಗಳು",
    increase: "ಹೆಚ್ಚಳ",
    byUser: "ಮೂಲಕ: {email}",
    reason: "ಕಾರಣ",
    marketAdjustmentReason: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಹೊಂದಾಣಿಕೆ + ಮಾರ್ಜಿನ್ ಆಪ್ಟಿಮೈಸೇಶನ್",
    costIncreaseReason: "ಮಾರಾಟಗಾರರಿಂದ ಖರೀದಿ ಬೆಲೆ ಹೆಚ್ಚಳ",
    b2bPriceChanges: "B2B ಬೆಲೆ ಬದಲಾವಣೆಗಳು",
    maintainMarginReason: "B2B ಮಾರ್ಜಿನ್ ಹೊಂದಾಣಿಕೆ ನಿರ್ವಹಿಸಿ",
    priceImpactSummary: "ಬೆಲೆ ಪರಿಣಾಮ ಸಾರಾಂಶ",
    totalB2CIncrease: "ಒಟ್ಟು B2C ಹೆಚ್ಚಳ",
    overMonths: "{count} ತಿಂಗಳುಗಳಲ್ಲಿ",
    totalB2BIncrease: "ಒಟ್ಟು B2B ಹೆಚ್ಚಳ",
    revenueImpact: "ಆದಾಯದ ಮೇಲೆ ಪರಿಣಾಮ",
    estimatedMonthly: "ಅಂದಾಜು ಮಾಸಿಕ",
    marketPriceComparison: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಹೋಲಿಕೆ",
    marketIntelligence: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಬುದ್ಧಿವಂತಿಕೆ",
    yourPricingPosition: "ನಿಮ್ಮ ಬೆಲೆ ಸ್ಥಾನ",
    aboveMarketAverage: "ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿಗಿಂತ ಹೆಚ್ಚು",
    atMarketAverage: "ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿಯಲ್ಲಿ",
    belowMarketAverage: "ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿಗಿಂತ ಕಡಿಮೆ",
    pricingOpportunities: "ಬೆಲೆ ಅವಕಾಶಗಳು",
    canIncreasePrice: "ಬೆಲೆ ಹೆಚ್ಚಿಸಬಹುದು",
    potentialRevenue: "ಸಂಭಾವ್ಯ ಆದಾಯ",
    riskLevel: "ಅಪಾಯದ ಮಟ್ಟ",
    lowRisk: "ಕಡಿಮೆ",
    topRecommendations: "ಉನ್ನತ ಬೆಲೆ ಹೊಂದಾಣಿಕೆ ಶಿಫಾರಸುಗಳು",
    yourPrice: "ನಿಮ್ಮ ಬೆಲೆ",
    marketAvg: "ಮಾರುಕಟ್ಟೆ ಸರಾಸರಿ",
    lowRiskIncrease: "ಕಡಿಮೆ ಅಪಾಯದ ಹೆಚ್ಚಳ",
    mediumRiskIncrease: "ಮಧ್ಯಮ ಅಪಾಯದ ಹೆಚ್ಚಳ",
    bulkUpdateInterface: "ಬೃಹತ್ ಬೆಲೆ ಅಪ್‌ಡೇಟ್ ಇಂಟರ್ಫೇಸ್",
    bulkPriceUpdate: "ಬೃಹತ್ ಬೆಲೆ ಅಪ್‌ಡೇಟ್",
    applyChanges: "ಏಕಕಾಲದಲ್ಲಿ ಅನೇಕ ಉತ್ಪನ್ನಗಳಿಗೆ ಬೆಲೆ ಬದಲಾವಣೆಗಳನ್ನು ಅನ್ವಯಿಸಿ",
    selectionCriteria: "ಆಯ್ಕೆ ಮಾನದಂಡ",
    filterByCategory: "ವರ್ಗದಿಂದ ಫಿಲ್ಟರ್ ಮಾಡಿ",
    allCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
    filterByBrand: "ಬ್ರಾಂಡ್‌ನಿಂದ ಫಿಲ್ಟರ್ ಮಾಡಿ",
    allBrands: "ಎಲ್ಲಾ ಬ್ರಾಂಡ್‌ಗಳು",
    marginRange: "ಮಾರ್ಜಿನ್ ಶ್ರೇಣಿ",
    min: "ಕನಿಷ್ಠ",
    max: "ಗರಿಷ್ಠ",
    priceAdjustment: "ಬೆಲೆ ಹೊಂದಾಣಿಕೆ",
    adjustmentType: "ಹೊಂದಾಣಿಕೆ ಪ್ರಕಾರ",
    percentageIncrease: "ಶೇಕಡಾವಾರು ಹೆಚ್ಚಳ",
    percentageDecrease: "ಶೇಕಡಾವಾರು ಇಳಿಕೆ",
    fixedIncrease: "ನಿಗದಿತ ಮೊತ್ತದ ಹೆಚ್ಚಳ",
    fixedDecrease: "ನಿಗದಿತ ಮೊತ್ತದ ಇಳಿಕೆ",
    setTargetMargin: "ಗುರಿ ಮಾರ್ಜಿನ್ ಹೊಂದಿಸಿ",
    value: "ಮೌಲ್ಯ",
    applyB2C: "B2C ಬೆಲೆಗಳಿಗೆ ಅನ್ವಯಿಸಿ",
    applyB2B: "B2B ಬೆಲೆಗಳಿಗೆ ಅನ್ವಯಿಸಿ",
    maintainMargin: "ಸಾಪೇಕ್ಷ ಮಾರ್ಜಿನ್ ವ್ಯತ್ಯಾಸವನ್ನು ನಿರ್ವಹಿಸಿ",
    bulkUpdatePreview: "ಅನ್ವಯಿಸುವ ಮೊದಲು ಬದಲಾವಣೆಗಳನ್ನು ಪೂರ್ವವೀಕ್ಷಿಸಿ",
    previewAffected: "ಪೂರ್ವವೀಕ್ಷಣೆ: ಪರಿಣಾಮ ಬೀರುವ ಉತ್ಪನ್ನಗಳು ({count} ಐಟಂಗಳು)",
    product: "ಉತ್ಪನ್ನ",
    currentB2C: "ಪ್ರಸ್ತುತ B2C",
    newB2C: "ಹೊಸ B2C",
    currentB2B: "ಪ್ರಸ್ತುತ B2B",
    newB2B: "ಹೊಸ B2B",
    impact: "ಪರಿಣಾಮ",
    showingOf: "{total} ಉತ್ಪನ್ನಗಳಲ್ಲಿ {shown} ತೋರಿಸಲಾಗುತ್ತಿದೆ. ಒಟ್ಟು ಮೌಲ್ಯ ಪರಿಣಾಮ: +₹{value} ದಾಸ್ತಾನು ಮೌಲ್ಯ ಹೆಚ್ಚಳ",
    approvalSystem: "ಬೆಲೆ ಬದಲಾವಣೆ ಅನುಮೋದನೆ ವ್ಯವಸ್ಥೆ",
    pendingApprovals: "ಬಾಕಿ ಇರುವ ಬೆಲೆ ಬದಲಾವಣೆ ಅನುಮೋದನೆಗಳು",
    bulkUpdateRequest: "ಬೃಹತ್ ಬೆಲೆ ಅಪ್‌ಡೇಟ್ ವಿನಂತಿ",
    bulkUpdateDesc: "{category} ವರ್ಗ - {percentage}% ಬೆಲೆ ಹೆಚ್ಚಳ {count} ಉತ್ಪನ್ನಗಳಲ್ಲಿ",
    requestedBy: "ವಿನಂತಿಸಿದವರು",
    requestedOn: "ವಿನಂತಿಸಿದ ದಿನಾಂಕ",
    expectedRevenueImpact: "ನಿರೀಕ್ಷಿತ ಆದಾಯದ ಪರಿಣಾಮ",
    reject: "ತಿರಸ್ಕರಿಸಿ",
    approve: "ಅನುಮೋದಿಸಿ",
    justification: "ಸಮರ್ಥನೆ",
    justificationText: "ಮಾರಾಟಗಾರರ ವೆಚ್ಚ 3.2% ರಷ್ಟು ಹೆಚ್ಚಾಗಿದೆ, ಮಾರ್ಜಿನ್ ನಿರ್ವಹಣೆಗೆ ಬೆಲೆ ಹೊಂದಾಣಿಕೆ ಅಗತ್ಯ",
    marketAnalysis: "ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಣೆ",
    marketAnalysisText: "ಸ್ಪರ್ಧಿಗಳು ಕಳೆದ 30 ದಿನಗಳಲ್ಲಿ 4-6% ರಷ್ಟು ಬೆಲೆಗಳನ್ನು ಹೆಚ್ಚಿಸಿದ್ದಾರೆ",
    riskAssessment: "ಅಪಾಯದ ಮೌಲ್ಯಮಾಪನ",
    riskAssessmentText: "ಕಡಿಮೆ - ಸ್ಥಿತಿಸ್ಥಾಪಕವಲ್ಲದ ಬೇಡಿಕೆಯೊಂದಿಗೆ ಅಗತ್ಯ ಉತ್ಪನ್ನಗಳು",
    individualUpdateRequest: "ವೈಯಕ್ತಿಕ ಉತ್ಪನ್ನ ಅಪ್‌ಡೇಟ್",
    individualUpdateDesc: "{productName} - B2C: ₹{oldPrice} → ₹{newPrice} (+{percentage}%)",
    expectedMarginIncrease: "ನಿರೀಕ್ಷಿತ ಮಾರ್ಜಿನ್ ಹೆಚ್ಚಳ",
    // Product names
    organicBasmatiRice: "ಸಾವಯವ ಬಾಸಮತಿ ಅಕ್ಕಿ 1kg",
    wholeWheatFlour: "ಪೂರ್ಣ ಗೋಧಿ ಹಿಟ್ಟು 2kg",
    sunflowerOil: "ಸೂರ್ಯಕಾಂತಿ ಎಣ್ಣೆ 1L",
    premiumTeaBags: "ಪ್ರೀಮಿಯಂ ಟೀ ಚೀಲಗಳು",
    cocaCola: "ಕೋಕಾ ಕೋಲಾ 330ml",
    laysClassic: "ಲೇಸ್ ಕ್ಲಾಸಿಕ್ 50g",
    premiumOliveOil: "ಪ್ರೀಮಿಯಂ ಆಲಿವ್ ಎಣ್ಣೆ 500ml",
    dairyProducts: "ಡೈರಿ ಉತ್ಪನ್ನಗಳು",
    snacksBeverages: "ತಿಂಡಿಗಳು ಮತ್ತು ಪಾನೀಯಗಳು",
    personalCare: "ವೈಯಕ್ತಿಕ ಆರೈಕೆ"
  },
  te: {
    pageTitle: "ధర నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కి తిరిగి వెళ్ళండి",
    description: "వివరమైన అనాలిటిక్స్ మరియు ఆడిట్ ట్రేల్‌లతో B2C మరియు B2B కస్టమర్ల కోసం డైనమిక్ ధర నిర్ధారణ వ్యూహాలు, మార్జిన్ ఆప్టిమైజేషన్ మరియు సమగ్ర ధర నిర్వహణను నేర్చుకోండి.",
    step1Title: "ధర నిర్వహణ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "ధర నిర్వహణ వ్యవస్థ మీ ఉత్పత్తి ధర వ్యూహాలను సెట్ చేయడానికి, పర్యవేక్షించడానికి మరియు ఆప్టిమైజ్ చేయడానికి సమగ్ర సాధనాలను అందిస్తుంది.",
    step1Description: "శక్తివంతమైన ధర సాధనాలు, పోటీ విశ్లేషణ మరియు మార్జిన్ ఆప్టిమైజేషన్ లక్షణాలను యాక్సెస్ చేయడానికి ధర నిర్వహణ డాష్‌బోర్డ్‌కి నావిగేట్ చేయండి.",
    step2Title: "వ్యక్తిగత ఉత్పత్తి ధర నిర్వహణ",
    step2Intro: "RetailOS B2C (రిటైల్) మరియు B2B (వోల్సేల్) కస్టమర్ల కోసం అధునాతన ద్వి-ధర సామర్థ్యాలను అందిస్తుంది.",
    step2Description: "వ్యక్తిగత ఉత్పత్తి ధర ఇంటర్ఫేస్ మీకు B2C మరియు B2B కస్టమర్ల కోసం వేర్వేరు ధరలను సెట్ చేయడానికి, మార్జిన్‌లను లెక్కించడానికి మరియు ధర చరిత్రను ట్రాక్ చేయడానికి అనుమతిస్తుంది.",
    step3Title: "బల్క్ ధర నిర్వహణ కార్యకలాపాలు",
    step3Intro: "అనేక ఉత్పత్తులకు ఏకకాలంలో ధరలను అప్‌డేట్ చేయాల్సినప్పుడు, బల్క్ ధర నిర్వహణ వ్యవస్థ వర్గ-ఆధారిత, బ్రాండ్-ఆధారిత లేదా కస్టమ్ ఎంపిక ప్రమాణాలతో ప్రివ్యూ సామర్థ్యాలతో శక్తివంతమైన సాధనాలను అందిస్తుంది.",
    step3Description: "అనేక ఉత్పత్తులలో ధరలను సమర్థవంతంగా అప్‌డేట్ చేయడానికి బల్క్ ధర నిర్ధారణ సాధనాలను ఉపయోగించండి, మార్పులను వర్తించే ముందు ఖచ్చితత్వాన్ని నిర్ధారించడానికి ఫిల్టర్లు మరియు ప్రివ్యూ సామర్థ్యాలతో.",
    nextStepsTitle: "ధర వ్యూహం పూర్తయింది!",
    nextStepsDescription: "మీకు ఇప్పుడు RetailOS ధర నిర్వహణ సామర్థ్యాల గురించి సమగ్ర అవగాహన ఉంది. డైనమిక్ ధర నిర్ధారణ, మార్జిన్ ఆప్టిమైజేషన్ మరియు వివరమైన ఆడిట్ ట్రేల్‌లతో, మీరు లాభదాయకతను గరిష్టం చేసేటప్పుడు పోటీ స్థానాన్ని నిర్వహించవచ్చు.",
    nextStepsButton: "ఆర్డర్ నిర్వహణకు కొనసాగండి",
    openDashboard: "ధర నిర్వహణ డాష్‌బోర్డ్‌ని తెరవండి",
    accessingPriceManagement: "సైడ్‌బార్ నుండి ధర నిర్వహణను యాక్సెస్ చేయడం",
    analytics: "విశ్లేషణ",
    priceManagement: "ధర నిర్వహణ",
    inventory: "ఇన్వెంటరీ",
    clickToAccess: "ధర నిర్ధారణ డాష్‌బోర్డ్‌ని యాక్సెస్ చేయడానికి సైడ్‌బార్ నుండి 'ధర నిర్వహణ'పై క్లిక్ చేయండి.",
    mainDashboard: "ధర నిర్వహణ ప్రధాన డాష్‌బోర్డ్",
    monitorPerformance: "ధర పనితీరును పర్యవేక్షించండి మరియు ఉత్పత్తి ధరలను నిర్వహించండి",
    bulkUpdate: "బల్క్ ధర అప్‌డేట్",
    totalInventoryValue: "మొత్తం ఇన్వెంటరీ విలువ",
    thisMonth: "ఈ నెల",
    avgB2CMargin: "సగటు B2C మార్జిన్",
    target: "లక్ష్యం",
    avgB2BMargin: "సగటు B2B మార్జిన్",
    priceChangesToday: "నేడు ధర మార్పులు",
    pendingApproval: "అనుమోదన పెండింగ్‌లో ఉంది",
    comprehensiveAnalytics: "సమగ్ర ధర విశ్లేషణ",
    marginPerformance: "వర్గం ప్రకారం మార్జిన్ పనితీరు",
    dairyProducts: "పాల ఉత్పత్తులు",
    productsValue: "{count} ఉత్పత్తులు • ₹{value} విలువ",
    snacksBeverages: "స్నాక్స్ & పానీయాలు",
    personalCare: "వ్యక్తిగత సంరక్షణ",
    priceAlerts: "ధర పర్యవేక్షణ హెచ్చరికలు",
    lowMarginAlert: "తక్కువ మార్జిన్ హెచ్చరిక",
    lowMarginDesc: "{count} ఉత్పత్తులు 15% మితి కంటే తక్కువ మార్జిన్‌లను కలిగి ఉన్నాయి మరియు ధర సర్దుబాటు సమీక్ష అవసరం.",
    reviewProducts: "ఉత్పత్తులను సమీక్షించండి",
    marketPriceVariance: "మార్కెట్ ధర వ్యత్యాసం",
    marketVarianceDesc: "{count} ఉత్పత్తులు మార్కెట్ సగటు ధర నుండి గణనీయమైన వ్యత్యాసాన్ని చూపిస్తున్నాయి.",
    aboveMarket: "{percentage}% మార్కెట్ సగటు కంటే ఎక్కువ",
    belowMarket: "{percentage}% మార్కెట్ సగటు కంటే తక్కువ",
    individualPricingForm: "వ్యక్తిగత ఉత్పత్తి ధర ఫారం",
    pricingFor: "ధర: {productName}",
    costPrice: "ఖర్చు ధర",
    costPriceDesc: "యూనిట్‌కు మీ కొనుగోలు ఖర్చు",
    lastPurchase: "చివరి కొనుగోలు",
    avgCost30d: "సగటు ఖర్చు (30రోజులు)",
    b2cPriceRetail: "B2C ధర (రిటైల్)",
    margin: "మార్జిన్",
    profitPerUnit: "లాభం: యూనిట్‌కు ₹{amount}",
    marketAverage: "మార్కెట్ సగటు",
    b2bPriceWholesale: "B2B ధర (వోల్సేల్)",
    minB2BPrice: "కనీస B2B ధర",
    pricingRecommendations: "ధర సిఫార్సులు",
    b2cOptimization: "B2C ఆప్టిమైజేషన్",
    priceBelowMarket: "ప్రస్తుత ధర మార్కెట్ సగటు కంటే {percentage}% తక్కువగా ఉంది",
    considerIncreasing: "మెరుగైన మార్జిన్ కోసం ₹{price}కి పెంచడాన్ని పరిగణించండి",
    priceElasticity: "ధర స్థితిస్థాపకత: తక్కువ (అవసరమైన వస్తువు)",
    b2bOptimization: "B2B ఆప్టిమైజేషన్",
    competitiveWithMarket: "వోల్సేల్ మార్కెట్‌తో పోటీ",
    volumeDiscountAvailable: "100+ యూనిట్ల వద్ద వాల్యూమ్ డిస్కౌంట్ టైర్ అందుబాటులో ఉంది",
    regularCustomerDiscount: "రెగ్యులర్ కస్టమర్‌కు అదనపు 2% డిస్కౌంట్ లభిస్తుంది",
    resetToDefaults: "డిఫాల్ట్‌లకు రీసెట్ చేయండి",
    savePricing: "ధరను సేవ్ చేయండి",
    priceHistoryTimeline: "ఉత్పత్తి ధర చరిత్ర టైమ్‌లైన్",
    priceHistoryFor: "ధర చరిత్ర: {productName}",
    b2cPriceChanges: "B2C ధర మార్పులు",
    increase: "పెంపు",
    byUser: "ద్వారా: {email}",
    reason: "కారణం",
    marketAdjustmentReason: "మార్కెట్ ధర సర్దుబాటు + మార్జిన్ ఆప్టిమైజేషన్",
    costIncreaseReason: "వెండర్ నుండి ఖర్చు ధర పెంపు",
    b2bPriceChanges: "B2B ధర మార్పులు",
    maintainMarginReason: "B2B మార్జిన్ సమలేఖనం నిర్వహించండి",
    priceImpactSummary: "ధర ప్రభావ సారాంశం",
    totalB2CIncrease: "మొత్తం B2C పెంపు",
    overMonths: "{count} నెలలలో",
    totalB2BIncrease: "మొత్తం B2B పెంపు",
    revenueImpact: "రెవెన్యూ ప్రభావం",
    estimatedMonthly: "అంచనా నెలవారీ",
    marketPriceComparison: "మార్కెట్ ధర పోలిక",
    marketIntelligence: "మార్కెట్ ధర నిర్దేశం",
    yourPricingPosition: "మీ ధర స్థానం",
    aboveMarketAverage: "మార్కెట్ సగటు కంటే ఎక్కువ",
    atMarketAverage: "మార్కెట్ సగటు వద్ద",
    belowMarketAverage: "మార్కెట్ సగటు కంటే తక్కువ",
    pricingOpportunities: "ధర అవకాశాలు",
    canIncreasePrice: "ధరను పెంచవచ్చు",
    potentialRevenue: "సంభావ్య రెవెన్యూ",
    riskLevel: "రిస్క్ స్థాయి",
    lowRisk: "తక్కువ",
    topRecommendations: "టాప్ ధర సర్దుబాటు సిఫార్సులు",
    yourPrice: "మీ ధర",
    marketAvg: "మార్కెట్ సగటు",
    lowRiskIncrease: "తక్కువ రిస్క్ పెంపు",
    mediumRiskIncrease: "మధ్యస్థ రిస్క్ పెంపు",
    bulkUpdateInterface: "బల్క్ ధర అప్‌డేట్ ఇంటర్ఫేస్",
    bulkPriceUpdate: "బల్క్ ధర అప్‌డేట్",
    applyChanges: "ఏకకాలంలో అనేక ఉత్పత్తులకు ధర మార్పులను వర్తించండి",
    selectionCriteria: "ఎంపిక ప్రమాణాలు",
    filterByCategory: "వర్గం ద్వారా ఫిల్టర్ చేయండి",
    allCategories: "అన్ని వర్గాలు",
    filterByBrand: "బ్రాండ్ ద్వారా ఫిల్టర్ చేయండి",
    allBrands: "అన్ని బ్రాండ్లు",
    marginRange: "మార్జిన్ పరిధి",
    min: "కనీసం",
    max: "గరిష్టం",
    priceAdjustment: "ధర సర్దుబాటు",
    adjustmentType: "సర్దుబాటు రకం",
    percentageIncrease: "శాతం పెంపు",
    percentageDecrease: "శాతం తగ్గుదల",
    fixedIncrease: "నిర్దిష్ట మొత్తం పెంపు",
    fixedDecrease: "నిర్దిష్ట మొత్తం తగ్గుదల",
    setTargetMargin: "లక్ష్య మార్జిన్ సెట్ చేయండి",
    value: "విలువ",
    applyB2C: "B2C ధరలకు వర్తించండి",
    applyB2B: "B2B ధరలకు వర్తించండి",
    maintainMargin: "సాపేక్ష మార్జిన్ వ్యత్యాసాన్ని నిర్వహించండి",
    bulkUpdatePreview: "వర్తించే ముందు మార్పులను ప్రివ్యూ చేయండి",
    previewAffected: "ప్రివ్యూ: ప్రభావిత ఉత్పత్తులు ({count} వస్తువులు)",
    product: "ఉత్పత్తి",
    currentB2C: "ప్రస్తుత B2C",
    newB2C: "కొత్త B2C",
    currentB2B: "ప్రస్తుత B2B",
    newB2B: "కొత్త B2B",
    impact: "ప్రభావం",
    showingOf: "{total} ఉత్పత్తులలో {shown} చూపిస్తున్నారు. మొత్తం విలువ ప్రభావం: +₹{value} ఇన్వెంటరీ విలువ పెంపు",
    approvalSystem: "ధర మార్పు అనుమోదన వ్యవస్థ",
    pendingApprovals: "పెండింగ్ ధర మార్పు అనుమోదనలు",
    bulkUpdateRequest: "బల్క్ ధర అప్‌డేట్ అభ్యర్థన",
    bulkUpdateDesc: "{category} వర్గం - {percentage}% ధర పెంపు {count} ఉత్పత్తులలో",
    requestedBy: "అభ్యర్థించినవారు",
    requestedOn: "అభ్యర్థించిన తేదీ",
    expectedRevenueImpact: "అంచనా రెవెన్యూ ప్రభావం",
    reject: "తిరస్కరించండి",
    approve: "అనుమోదించండి",
    justification: "సమర్థన",
    justificationText: "వెండర్ ఖర్చు 3.2% పెరిగింది, మార్జిన్ నిర్వహణకు ధర సర్దుబాటు అవసరం",
    marketAnalysis: "మార్కెట్ విశ్లేషణ",
    marketAnalysisText: "పోటీదారులు గత 30 రోజుల్లో 4-6% ధరలను పెంచారు",
    riskAssessment: "రిస్క్ అంచనా",
    riskAssessmentText: "తక్కువ - అవసరమైన వస్తువులు స్థితిస్థాపకత లేని డిమాండ్‌తో",
    individualUpdateRequest: "వ్యక్తిగత ఉత్పత్తి అప్‌డేట్",
    individualUpdateDesc: "{productName} - B2C: ₹{oldPrice} → ₹{newPrice} (+{percentage}%)",
    expectedMarginIncrease: "అంచనా మార్జిన్ పెంపు",
    // Product names
    organicBasmatiRice: "సేంద్రీయ బాస్మతి బియ్యం 1kg",
    wholeWheatFlour: "పూర్తి గోధుమ పిండి 2kg",
    sunflowerOil: "పొద్దుతిరుగుడు నూనె 1L",
    premiumTeaBags: "ప్రీమియం టీ బ్యాగ్స్",
    cocaCola: "కోకా కోలా 330ml",
    laysClassic: "లేస్ క్లాసిక్ 50g",
    premiumOliveOil: "ప్రీమియం ఆలివ్ నూనె 500ml",
    dairyProducts: "పాల ఉత్పత్తులు",
    snacksBeverages: "స్నాక్స్ & పానీయాలు",
    personalCare: "వ్యక్తిగత సంరక్షణ"
  },
  ta: {
    pageTitle: "விலை நிர்வாக கையேடு",
    backToManual: "கையேட்டிற்கு திரும்பு",
    description: "விரிவான பகுப்பாய்வு மற்றும் தணிக்கை தடங்களுடன் B2C மற்றும் B2B வாடிக்கையாளர்களுக்கான மாறும் விலை நிர்ணய முறைகள், வரம்பு உகந்தமயமாக்கல் மற்றும் முழுமையான விலை நிர்வாகத்தை கற்றுக்கொள்ளுங்கள்.",
    step1Title: "விலை நிர்வாக டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "விலை நிர்வாக அமைப்பு உங்கள் பொருள் விலை முறைகளை அமைக்க, கண்காணிக்க மற்றும் உகந்தமயமாக்க விரிவான கருவிகளை வழங்குகிறது.",
    step1Description: "சக்திவாய்ந்த விலை கருவிகள், போட்டி பகுப்பாய்வு மற்றும் வரம்பு உகந்தமயமாக்கல் அம்சங்களை அணுக விலை நிர்வாக டாஷ்போர்டுக்கு செல்லுங்கள்.",
    step2Title: "தனிப்பட்ட பொருள் விலை நிர்வாகம்",
    step2Intro: "RetailOS B2C (சில்லறை) மற்றும் B2B (மொத்த) வாடிக்கையாளர்களுக்கு மேம்பட்ட இரட்டை-விலை திறன்களை வழங்குகிறது.",
    step2Description: "தனிப்பட்ட பொருள் விலை இடைமுகம் B2C மற்றும் B2B வாடிக்கையாளர்களுக்கு தனித்தனி விலைகளை அமைக்க, வரம்புகளை கணக்கிட மற்றும் விலை வரலாற்றை கண்காணிக்க உங்களை அனுமதிக்கிறது.",
    step3Title: "மொத்த விலை நிர்வாக செயல்பாடுகள்",
    step3Intro: "பல பொருட்களுக்கு ஒரே நேரத்தில் விலைகளை புதுப்பிக்க வேண்டிய போது, மொத்த விலை நிர்வாக அமைப்பு வகை-அடிப்படையிலான, பிராண்டு-அடிப்படையிலான அல்லது தனிப்பட்ட தேர்வு அளவுகோல்களுடன் முன்னோட்ட திறன்களுடன் சக்திவாய்ந்த கருவிகளை வழங்குகிறது.",
    step3Description: "பல பொருட்களில் விலைகளை திறமையாக புதுப்பிக்க மொத்த விலை நிர்ணய கருவிகளைப் பயன்படுத்துங்கள், மாற்றங்களைப் பயன்படுத்துவதற்கு முன் துல்லியத்தை உறுதிப்படுத்த வடிப்பான்கள் மற்றும் முன்னோட்ட திறன்களுடன்.",
    nextStepsTitle: "விலை முறை முடிந்தது!",
    nextStepsDescription: "நீங்கள் இப்போது RetailOS விலை நிர்வாக திறன்களைப் பற்றி முழுமையான புரிதலைக் கொண்டுள்ளீர்கள். மாறும் விலை நிர்ணயம், வரம்பு உகந்தமயமாக்கல் மற்றும் விரிவான தணிக்கை தடங்களுடன், நீங்கள் லாபத்தை அதிகரிக்கும் போது போட்டி நிலையை பராமரிக்க முடியும்.",
    nextStepsButton: "ஆர்டர் நிர்வாகத்திற்கு தொடரவும்",
    openDashboard: "விலை நிர்வாக டாஷ்போர்டைத் திறக்கவும்",
    accessingPriceManagement: "பக்கப்பட்டியில் இருந்து விலை நிர்வாகத்தை அணுகுதல்",
    analytics: "பகுப்பாய்வு",
    priceManagement: "விலை நிர்வாகம்",
    inventory: "சரக்கு",
    clickToAccess: "விலை நிர்ணய டாஷ்போர்டை அணுக பக்கப்பட்டியில் இருந்து 'விலை நிர்வாகம்'ஐக் கிளிக் செய்யவும்.",
    mainDashboard: "விலை நிர்வாக முதன்மை டாஷ்போர்டு",
    monitorPerformance: "விலை செயல்திறனை கண்காணித்து பொருள் விலைகளை நிர்வகிக்கவும்",
    bulkUpdate: "மொத்த விலை புதுப்பிப்பு",
    totalInventoryValue: "மொத்த சரக்கு மதிப்பு",
    thisMonth: "இந்த மாதம்",
    avgB2CMargin: "சராசரி B2C வரம்பு",
    target: "இலக்கு",
    avgB2BMargin: "சராசரி B2B வரம்பு",
    priceChangesToday: "இன்று விலை மாற்றங்கள்",
    pendingApproval: "ஒப்புதலுக்கு காத்திருக்கிறது",
    comprehensiveAnalytics: "முழுமையான விலை பகுப்பாய்வு",
    marginPerformance: "வகை வாரியாக வரம்பு செயல்திறன்",
    dairyProducts: "பால் பொருட்கள்",
    productsValue: "{count} பொருட்கள் • ₹{value} மதிப்பு",
    snacksBeverages: "சிற்றுண்டிகள் & பானங்கள்",
    personalCare: "தனிப்பட்ட பராமரிப்பு",
    priceAlerts: "விலை கண்காணிப்பு எச்சரிக்கைகள்",
    lowMarginAlert: "குறைந்த வரம்பு எச்சரிக்கை",
    lowMarginDesc: "{count} பொருட்கள் 15% வரம்புக்கு கீழே வரம்புகளைக் கொண்டுள்ளன மற்றும் விலை சரிசெய்தல் மதிப்பாய்வு தேவை.",
    reviewProducts: "பொருட்களை மதிப்பாய்வு செய்யவும்",
    marketPriceVariance: "சந்தை விலை மாறுபாடு",
    marketVarianceDesc: "{count} பொருட்கள் சந்தை சராசரி விலையிலிருந்து குறிப்பிடத்தக்க மாறுபாட்டைக் காட்டுகின்றன.",
    aboveMarket: "{percentage}% சந்தை சராசரிக்கு மேல்",
    belowMarket: "{percentage}% சந்தை சராசரிக்கு கீழே",
    individualPricingForm: "தனிப்பட்ட பொருள் விலை படிவம்",
    pricingFor: "விலை: {productName}",
    costPrice: "செலவு விலை",
    costPriceDesc: "அலகுக்கு உங்கள் கொள்முதல் செலவு",
    lastPurchase: "கடைசி கொள்முதல்",
    avgCost30d: "சராசரி செலவு (30 நாட்கள்)",
    b2cPriceRetail: "B2C விலை (சில்லறை)",
    margin: "வரம்பு",
    profitPerUnit: "லாபம்: அலகுக்கு ₹{amount}",
    marketAverage: "சந்தை சராசரி",
    b2bPriceWholesale: "B2B விலை (மொத்த)",
    minB2BPrice: "குறைந்தபட்ச B2B விலை",
    pricingRecommendations: "விலை பரிந்துரைகள்",
    b2cOptimization: "B2C உகந்தமயமாக்கல்",
    priceBelowMarket: "தற்போதைய விலை சந்தை சராசரிக்கு {percentage}% கீழே உள்ளது",
    considerIncreasing: "சிறந்த வரம்புக்காக ₹{price}க்கு உயர்த்துவதைக் கவனியுங்கள்",
    priceElasticity: "விலை நெகிழ்வுத்தன்மை: குறைந்த (தேவையான பொருள்)",
    b2bOptimization: "B2B உகந்தமயமாக்கல்",
    competitiveWithMarket: "மொத்த சந்தையுடன் போட்டியிடும்",
    volumeDiscountAvailable: "100+ அலகுகளில் அளவு தள்ளுபடி படி கிடைக்கிறது",
    regularCustomerDiscount: "வழக்கமான வாடிக்கையாளருக்கு கூடுதல் 2% தள்ளுபடி கிடைக்கிறது",
    resetToDefaults: "இயல்புநிலைகளுக்கு மீட்டமைக்கவும்",
    savePricing: "விலையை சேமிக்கவும்",
    priceHistoryTimeline: "பொருள் விலை வரலாறு காலவரிசை",
    priceHistoryFor: "விலை வரலாறு: {productName}",
    b2cPriceChanges: "B2C விலை மாற்றங்கள்",
    increase: "அதிகரிப்பு",
    byUser: "பயனர்: {email}",
    reason: "காரணம்",
    marketAdjustmentReason: "சந்தை விலை சரிசெய்தல் + வரம்பு உகந்தமயமாக்கல்",
    costIncreaseReason: "விற்பனையாளரிடமிருந்து செலவு விலை அதிகரிப்பு",
    b2bPriceChanges: "B2B விலை மாற்றங்கள்",
    maintainMarginReason: "B2B வரம்பு சீரமைப்பை பராமரிக்கவும்",
    priceImpactSummary: "விலை தாக்கம் சுருக்கம்",
    totalB2CIncrease: "மொத்த B2C அதிகரிப்பு",
    overMonths: "{count} மாதங்களில்",
    totalB2BIncrease: "மொத்த B2B அதிகரிப்பு",
    revenueImpact: "வருவாய் தாக்கம்",
    estimatedMonthly: "மதிப்பிடப்பட்ட மாதாந்திர",
    marketPriceComparison: "சந்தை விலை ஒப்பீடு",
    marketIntelligence: "சந்தை விலை நுண்ணறிவு",
    yourPricingPosition: "உங்கள் விலை நிலை",
    aboveMarketAverage: "சந்தை சராசரிக்கு மேல்",
    atMarketAverage: "சந்தை சராசரியில்",
    belowMarketAverage: "சந்தை சராசரிக்கு கீழே",
    pricingOpportunities: "விலை வாய்ப்புகள்",
    canIncreasePrice: "விலையை உயர்த்தலாம்",
    potentialRevenue: "சாத்தியமான வருவாய்",
    riskLevel: "ஆபத்து நிலை",
    lowRisk: "குறைந்த",
    topRecommendations: "சிறந்த விலை சரிசெய்தல் பரிந்துரைகள்",
    yourPrice: "உங்கள் விலை",
    marketAvg: "சந்தை சராசரி",
    lowRiskIncrease: "குறைந்த ஆபத்து அதிகரிப்பு",
    mediumRiskIncrease: "நடுத்தர ஆபத்து அதிகரிப்பு",
    bulkUpdateInterface: "மொத்த விலை புதுப்பிப்பு இடைமுகம்",
    bulkPriceUpdate: "மொத்த விலை புதுப்பிப்பு",
    applyChanges: "பல பொருட்களுக்கு ஒரே நேரத்தில் விலை மாற்றங்களைப் பயன்படுத்தவும்",
    selectionCriteria: "தேர்வு அளவுகோல்கள்",
    filterByCategory: "வகையால் வடிக்கவும்",
    allCategories: "அனைத்து வகைகளும்",
    filterByBrand: "பிராண்டால் வடிக்கவும்",
    allBrands: "அனைத்து பிராண்டுகளும்",
    marginRange: "வரம்பு வரம்பு",
    min: "குறைந்தபட்சம்",
    max: "அதிகபட்சம்",
    priceAdjustment: "விலை சரிசெய்தல்",
    adjustmentType: "சரிசெய்தல் வகை",
    percentageIncrease: "சதவீத அதிகரிப்பு",
    percentageDecrease: "சதவீத குறைப்பு",
    fixedIncrease: "நிலையான தொகை அதிகரிப்பு",
    fixedDecrease: "நிலையான தொகை குறைப்பு",
    setTargetMargin: "இலக்கு வரம்பை அமைக்கவும்",
    value: "மதிப்பு",
    applyB2C: "B2C விலைகளுக்கு பயன்படுத்தவும்",
    applyB2B: "B2B விலைகளுக்கு பயன்படுத்தவும்",
    maintainMargin: "தொடர்புடைய வரம்பு வேறுபாட்டை பராமரிக்கவும்",
    bulkUpdatePreview: "பயன்படுத்துவதற்கு முன் மாற்றங்களை முன்னோட்டமாக காணவும்",
    previewAffected: "முன்னோட்டம்: பாதிக்கப்பட்ட பொருட்கள் ({count} பொருட்கள்)",
    product: "பொருள்",
    currentB2C: "தற்போதைய B2C",
    newB2C: "புதிய B2C",
    currentB2B: "தற்போதைய B2B",
    newB2B: "புதிய B2B",
    impact: "தாக்கம்",
    showingOf: "{total} பொருட்களில் {shown} காட்டப்படுகிறது. மொத்த மதிப்பு தாக்கம்: +₹{value} சரக்கு மதிப்பு அதிகரிப்பு",
    approvalSystem: "விலை மாற்றம் ஒப்புதல் அமைப்பு",
    pendingApprovals: "விலை மாற்றம் ஒப்புதல்கள் நிலுவையில்",
    bulkUpdateRequest: "மொத்த விலை புதுப்பிப்பு கோரிக்கை",
    bulkUpdateDesc: "{category} வகை - {percentage}% விலை அதிகரிப்பு {count} பொருட்களில்",
    requestedBy: "கோரியவர்",
    requestedOn: "கோரப்பட்ட தேதி",
    expectedRevenueImpact: "எதிர்பார்க்கப்படும் வருவாய் தாக்கம்",
    reject: "நிராகரிக்கவும்",
    approve: "ஒப்புக்கொள்ளவும்",
    justification: "நியாயப்படுத்தல்",
    justificationText: "விற்பனையாளர் செலவு 3.2% அதிகரித்துள்ளது, வரம்பை பராமரிக்க விலை சரிசெய்தல் தேவை",
    marketAnalysis: "சந்தை பகுப்பாய்வு",
    marketAnalysisText: "போட்டியாளர்கள் கடந்த 30 நாட்களில் 4-6% விலைகளை உயர்த்தியுள்ளனர்",
    riskAssessment: "ஆபத்து மதிப்பீடு",
    riskAssessmentText: "குறைந்த - நெகிழ்வற்ற தேவையுடன் தேவையான பொருட்கள்",
    individualUpdateRequest: "தனிப்பட்ட பொருள் புதுப்பிப்பு",
    individualUpdateDesc: "{productName} - B2C: ₹{oldPrice} → ₹{newPrice} (+{percentage}%)",
    expectedMarginIncrease: "எதிர்பார்க்கப்படும் வரம்பு அதிகரிப்பு",
    // Product names
    organicBasmatiRice: "கரிம பாஸ்மதி அரிசி 1kg",
    wholeWheatFlour: "முழு கோதுமை மாவு 2kg",
    sunflowerOil: "சூரியகாந்தி எண்ணெய் 1L",
    premiumTeaBags: "பிரீமியம் தேநீர் பைகள்",
    cocaCola: "கோகா கோலா 330ml",
    laysClassic: "லேஸ் கிளாசிக் 50g",
    premiumOliveOil: "பிரீமியம் ஆலிவ் எண்ணெய் 500ml",
    dairyProducts: "பால் பொருட்கள்",
    snacksBeverages: "சிற்றுண்டிகள் & பானங்கள்",
    personalCare: "தனிப்பட்ட பராமரிப்பு"
  },
  hi: {
    pageTitle: "मूल्य प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "B2C और B2B ग्राहकों के लिए विस्तृत विश्लेषण और ऑडिट ट्रेल्स के साथ डायनामिक मूल्य निर्धारण रणनीतियों, मार्जिन अनुकूलन और व्यापक मूल्य प्रबंधन में महारत हासिल करें।",
    step1Title: "मूल्य प्रबंधन डैशबोर्ड अवलोकन",
    step1Intro: "मूल्य प्रबंधन प्रणाली आपकी उत्पाद मूल्य रणनीतियों को सेट करने, निगरानी करने और अनुकूलित करने के लिए व्यापक उपकरण प्रदान करती है।",
    step1Description: "शक्तिशाली मूल्य उपकरणों, प्रतिस्पर्धी विश्लेषण और मार्जिन अनुकूलन सुविधाओं तक पहुंचने के लिए मूल्य प्रबंधन डैशबोर्ड पर नेविगेट करें।",
    step2Title: "व्यक्तिगत उत्पाद मूल्य प्रबंधन",
    step2Intro: "RetailOS B2C (खुदरा) और B2B (थोक) ग्राहकों के लिए उन्नत दोहरे-मूल्य क्षमताएं प्रदान करता है।",
    step2Description: "व्यक्तिगत उत्पाद मूल्य इंटरफेस आपको B2C और B2B ग्राहकों के लिए अलग-अलग मूल्य सेट करने, मार्जिन की गणना करने और मूल्य इतिहास को ट्रैक करने की अनुमति देता है।",
    step3Title: "बल्क मूल्य प्रबंधन संचालन",
    step3Intro: "जब आपको एक साथ कई उत्पादों के लिए मूल्य अपडेट करने की आवश्यकता होती है, तो बल्क मूल्य प्रबंधन प्रणाली श्रेणी-आधारित, ब्रांड-आधारित या कस्टम चयन मानदंडों के साथ पूर्वावलोकन क्षमताओं के साथ शक्तिशाली उपकरण प्रदान करती है।",
    step3Description: "कई उत्पादों में मूल्यों को कुशलतापूर्वक अपडेट करने के लिए बल्क मूल्य निर्धारण उपकरणों का उपयोग करें, परिवर्तन लागू करने से पहले सटीकता सुनिश्चित करने के लिए फ़िल्टर और पूर्वावलोकन क्षमताओं के साथ।",
    nextStepsTitle: "मूल्य रणनीति पूरी हुई!",
    nextStepsDescription: "अब आपके पास RetailOS मूल्य प्रबंधन क्षमताओं की व्यापक समझ है। डायनामिक मूल्य निर्धारण, मार्जिन अनुकूलन और विस्तृत ऑडिट ट्रेल्स के साथ, आप लाभप्रदता को अधिकतम करते हुए प्रतिस्पर्धी स्थिति बनाए रख सकते हैं।",
    nextStepsButton: "ऑर्डर प्रबंधन पर जारी रखें",
    openDashboard: "मूल्य प्रबंधन डैशबोर्ड खोलें",
    accessingPriceManagement: "साइडबार से मूल्य प्रबंधन तक पहुंचना",
    analytics: "विश्लेषण",
    priceManagement: "मूल्य प्रबंधन",
    inventory: "इन्वेंटरी",
    clickToAccess: "मूल्य निर्धारण डैशबोर्ड तक पहुंचने के लिए साइडबार से 'मूल्य प्रबंधन' पर क्लिक करें।",
    mainDashboard: "मूल्य प्रबंधन मुख्य डैशबोर्ड",
    monitorPerformance: "मूल्य प्रदर्शन की निगरानी करें और उत्पाद मूल्यों का प्रबंधन करें",
    bulkUpdate: "बल्क मूल्य अपडेट",
    totalInventoryValue: "कुल इन्वेंटरी मूल्य",
    thisMonth: "इस महीने",
    avgB2CMargin: "औसत B2C मार्जिन",
    target: "लक्ष्य",
    avgB2BMargin: "औसत B2B मार्जिन",
    priceChangesToday: "आज मूल्य परिवर्तन",
    pendingApproval: "अनुमोदन की प्रतीक्षा में",
    comprehensiveAnalytics: "व्यापक मूल्य विश्लेषण",
    marginPerformance: "श्रेणी द्वारा मार्जिन प्रदर्शन",
    dairyProducts: "डेयरी उत्पाद",
    productsValue: "{count} उत्पाद • ₹{value} मूल्य",
    snacksBeverages: "स्नैक्स और पेय",
    personalCare: "व्यक्तिगत देखभाल",
    priceAlerts: "मूल्य निगरानी अलर्ट",
    lowMarginAlert: "कम मार्जिन अलर्ट",
    lowMarginDesc: "{count} उत्पादों में 15% सीमा से कम मार्जिन हैं और मूल्य समायोजन समीक्षा की आवश्यकता है।",
    reviewProducts: "उत्पादों की समीक्षा करें",
    marketPriceVariance: "बाजार मूल्य विचरण",
    marketVarianceDesc: "{count} उत्पाद बाजार औसत मूल्य से महत्वपूर्ण विचरण दिखाते हैं।",
    aboveMarket: "{percentage}% बाजार औसत से ऊपर",
    belowMarket: "{percentage}% बाजार औसत से नीचे",
    individualPricingForm: "व्यक्तिगत उत्पाद मूल्य फॉर्म",
    pricingFor: "मूल्य: {productName}",
    costPrice: "लागत मूल्य",
    costPriceDesc: "प्रति इकाई आपकी खरीद लागत",
    lastPurchase: "अंतिम खरीद",
    avgCost30d: "औसत लागत (30 दिन)",
    b2cPriceRetail: "B2C मूल्य (खुदरा)",
    margin: "मार्जिन",
    profitPerUnit: "लाभ: प्रति इकाई ₹{amount}",
    marketAverage: "बाजार औसत",
    b2bPriceWholesale: "B2B मूल्य (थोक)",
    minB2BPrice: "न्यूनतम B2B मूल्य",
    pricingRecommendations: "मूल्य सिफारिशें",
    b2cOptimization: "B2C अनुकूलन",
    priceBelowMarket: "वर्तमान मूल्य बाजार औसत से {percentage}% नीचे है",
    considerIncreasing: "बेहतर मार्जिन के लिए ₹{price} तक बढ़ाने पर विचार करें",
    priceElasticity: "मूल्य लोच: कम (आवश्यक वस्तु)",
    b2bOptimization: "B2B अनुकूलन",
    competitiveWithMarket: "थोक बाजार के साथ प्रतिस्पर्धी",
    volumeDiscountAvailable: "100+ इकाइयों पर मात्रा छूट स्तर उपलब्ध है",
    regularCustomerDiscount: "नियमित ग्राहक को अतिरिक्त 2% छूट मिलती है",
    resetToDefaults: "डिफ़ॉल्ट पर रीसेट करें",
    savePricing: "मूल्य सहेजें",
    priceHistoryTimeline: "उत्पाद मूल्य इतिहास टाइमलाइन",
    priceHistoryFor: "मूल्य इतिहास: {productName}",
    b2cPriceChanges: "B2C मूल्य परिवर्तन",
    increase: "वृद्धि",
    byUser: "द्वारा: {email}",
    reason: "कारण",
    marketAdjustmentReason: "बाजार मूल्य समायोजन + मार्जिन अनुकूलन",
    costIncreaseReason: "विक्रेता से लागत मूल्य वृद्धि",
    b2bPriceChanges: "B2B मूल्य परिवर्तन",
    maintainMarginReason: "B2B मार्जिन संरेखण बनाए रखें",
    priceImpactSummary: "मूल्य प्रभाव सारांश",
    totalB2CIncrease: "कुल B2C वृद्धि",
    overMonths: "{count} महीनों में",
    totalB2BIncrease: "कुल B2B वृद्धि",
    revenueImpact: "राजस्व प्रभाव",
    estimatedMonthly: "अनुमानित मासिक",
    marketPriceComparison: "बाजार मूल्य तुलना",
    marketIntelligence: "बाजार मूल्य खुफिया",
    yourPricingPosition: "आपकी मूल्य स्थिति",
    aboveMarketAverage: "बाजार औसत से ऊपर",
    atMarketAverage: "बाजार औसत पर",
    belowMarketAverage: "बाजार औसत से नीचे",
    pricingOpportunities: "मूल्य अवसर",
    canIncreasePrice: "मूल्य बढ़ा सकते हैं",
    potentialRevenue: "संभावित राजस्व",
    riskLevel: "जोखिम स्तर",
    lowRisk: "कम",
    topRecommendations: "शीर्ष मूल्य समायोजन सिफारिशें",
    yourPrice: "आपकी कीमत",
    marketAvg: "बाजार औसत",
    lowRiskIncrease: "कम जोखिम वृद्धि",
    mediumRiskIncrease: "मध्यम जोखिम वृद्धि",
    bulkUpdateInterface: "बल्क मूल्य अपडेट इंटरफेस",
    bulkPriceUpdate: "बल्क मूल्य अपडेट",
    applyChanges: "एक साथ कई उत्पादों पर मूल्य परिवर्तन लागू करें",
    selectionCriteria: "चयन मानदंड",
    filterByCategory: "श्रेणी द्वारा फ़िल्टर करें",
    allCategories: "सभी श्रेणियां",
    filterByBrand: "ब्रांड द्वारा फ़िल्टर करें",
    allBrands: "सभी ब्रांड",
    marginRange: "मार्जिन सीमा",
    min: "न्यूनतम",
    max: "अधिकतम",
    priceAdjustment: "मूल्य समायोजन",
    adjustmentType: "समायोजन प्रकार",
    percentageIncrease: "प्रतिशत वृद्धि",
    percentageDecrease: "प्रतिशत कमी",
    fixedIncrease: "निश्चित राशि वृद्धि",
    fixedDecrease: "निश्चित राशि कमी",
    setTargetMargin: "लक्ष्य मार्जिन सेट करें",
    value: "मूल्य",
    applyB2C: "B2C मूल्यों पर लागू करें",
    applyB2B: "B2B मूल्यों पर लागू करें",
    maintainMargin: "सापेक्ष मार्जिन अंतर बनाए रखें",
    bulkUpdatePreview: "लागू करने से पहले परिवर्तनों का पूर्वावलोकन करें",
    previewAffected: "पूर्वावलोकन: प्रभावित उत्पाद ({count} आइटम)",
    product: "उत्पाद",
    currentB2C: "वर्तमान B2C",
    newB2C: "नया B2C",
    currentB2B: "वर्तमान B2B",
    newB2B: "नया B2B",
    impact: "प्रभाव",
    showingOf: "{total} उत्पादों में से {shown} दिखा रहा है। कुल मूल्य प्रभाव: +₹{value} इन्वेंटरी मूल्य वृद्धि",
    approvalSystem: "मूल्य परिवर्तन अनुमोदन प्रणाली",
    pendingApprovals: "लंबित मूल्य परिवर्तन अनुमोदन",
    bulkUpdateRequest: "बल्क मूल्य अपडेट अनुरोध",
    bulkUpdateDesc: "{category} श्रेणी - {percentage}% मूल्य वृद्धि {count} उत्पादों में",
    requestedBy: "द्वारा अनुरोधित",
    requestedOn: "अनुरोधित तिथि",
    expectedRevenueImpact: "अपेक्षित राजस्व प्रभाव",
    reject: "अस्वीकार करें",
    approve: "अनुमोदित करें",
    justification: "औचित्य",
    justificationText: "विक्रेता लागत 3.2% बढ़ गई है, मार्जिन बनाए रखने के लिए मूल्य समायोजन आवश्यक है",
    marketAnalysis: "बाजार विश्लेषण",
    marketAnalysisText: "प्रतिस्पर्धियों ने पिछले 30 दिनों में 4-6% मूल्य बढ़ाए हैं",
    riskAssessment: "जोखिम मूल्यांकन",
    riskAssessmentText: "कम - आवश्यक उत्पाद अप्रत्यास्थ मांग के साथ",
    individualUpdateRequest: "व्यक्तिगत उत्पाद अपडेट",
    individualUpdateDesc: "{productName} - B2C: ₹{oldPrice} → ₹{newPrice} (+{percentage}%)",
    expectedMarginIncrease: "अपेक्षित मार्जिन वृद्धि",
    // Product names
    organicBasmatiRice: "ऑर्गेनिक बासमती चावल 1kg",
    wholeWheatFlour: "साबुत गेहूं का आटा 2kg",
    sunflowerOil: "सूरजमुखी तेल 1L",
    premiumTeaBags: "प्रीमियम चाय बैग्स",
    dairyProducts: "डेयरी उत्पाद",
    snacksBeverages: "स्नैक्स और पेय",
    personalCare: "व्यक्तिगत देखभाल"
  },
  ml: {
    pageTitle: "വില നിര്‍വഹണ മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് തിരികെ പോകുക",
    description: "വിശദമായ വിശകലനങ്ങളും ഓഡിറ്റ് ട്രെയിലുകളും ഉപയോഗിച്ച് B2C, B2B ഉപഭോക്താക്കൾക്കുള്ള ഡൈനാമിക് വില നിര്‍ണ്ണയ തന്ത്രങ്ങൾ, മാർജിൻ ഒപ്റ്റിമൈസേഷൻ, സമഗ്ര വില നിര്‍വഹണം എന്നിവ പഠിക്കുക.",
    step1Title: "വില നിര്‍വഹണ ഡാഷ്‌ബോർഡ് അവലോകനം",
    step1Intro: "വില നിര്‍വഹണ സിസ്റ്റം നിങ്ങളുടെ ഉത്പന്ന വില തന്ത്രങ്ങൾ സെറ്റ് ചെയ്യാനും നിരീക്ഷിക്കാനും ഒപ്റ്റിമൈസ് ചെയ്യാനും സമഗ്ര ഉപകരണങ്ങൾ നൽകുന്നു.",
    step1Description: "ശക്തമായ വില ഉപകരണങ്ങൾ, മത്സര വിശകലനം, മാർജിൻ ഒപ്റ്റിമൈസേഷൻ സവിശേഷതകൾ എന്നിവ ലഭിക്കാൻ വില നിര്‍വഹണ ഡാഷ്‌ബോർഡിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക.",
    step2Title: "വ്യക്തിഗത ഉത്പന്ന വില നിര്‍വഹണം",
    step2Intro: "RetailOS B2C (റീട്ടെയിൽ) ഉപഭോക്താക്കൾക്കും B2B (വോൾസേൽ) ഉപഭോക്താക്കൾക്കും വിപുലമായ ഇരട്ട-വില കഴിവുകൾ നൽകുന്നു.",
    step2Description: "വ്യക്തിഗത ഉത്പന്ന വില ഇന്റർഫേസ് B2C, B2B ഉപഭോക്താക്കൾക്ക് വ്യത്യസ്ത വിലകൾ സെറ്റ് ചെയ്യാനും മാർജിനുകൾ കണക്കാക്കാനും വില ചരിത്രം ട്രാക്ക് ചെയ്യാനും അനുവദിക്കുന്നു.",
    step3Title: "ബൾക്ക് വില നിര്‍വഹണ പ്രവർത്തനങ്ങൾ",
    step3Intro: "നിരവധി ഉത്പന്നങ്ങൾക്ക് ഒരേ സമയത്ത് വിലകൾ അപ്‌ഡേറ്റ് ചെയ്യേണ്ടതുണ്ടെങ്കിൽ, ബൾക്ക് വില നിര്‍വഹണ സിസ്റ്റം വിഭാഗ-ആധാരിത, ബ്രാൻഡ്-ആധാരിത അല്ലെങ്കിൽ കസ്റ്റം തിരഞ്ഞെടുപ്പ് മാനദണ്ഡങ്ങളോടെ പ്രിവ്യൂ കഴിവുകളോടെ ശക്തമായ ഉപകരണങ്ങൾ നൽകുന്നു.",
    step3Description: "നിരവധി ഉത്പന്നങ്ങളിൽ വിലകൾ കാര്യക്ഷമമായി അപ്‌ഡേറ്റ് ചെയ്യാൻ ബൾക്ക് വില നിര്‍ണ്ണയ ഉപകരണങ്ങൾ ഉപയോഗിക്കുക, മാറ്റങ്ങൾ പ്രയോഗിക്കുന്നതിന് മുമ്പ് കൃത്യത ഉറപ്പാക്കാൻ ഫിൽറ്ററുകളും പ്രിവ്യൂ കഴിവുകളും ഉപയോഗിച്ച്.",
    nextStepsTitle: "വില തന്ത്രം പൂർത്തിയായി!",
    nextStepsDescription: "നിങ്ങൾക്ക് ഇപ്പോൾ RetailOS വില നിര്‍വഹണ കഴിവുകളെക്കുറിച്ച് സമഗ്രമായ ധാരണയുണ്ട്. ഡൈനാമിക് വില നിര്‍ണ്ണയം, മാർജിൻ ഒപ്റ്റിമൈസേഷൻ, വിശദമായ ഓഡിറ്റ് ട്രെയിലുകൾ എന്നിവയോടെ, നിങ്ങൾക്ക് ലാഭക്ഷമത പരമാവധി ആക്കുമ്പോൾ മത്സര സ്ഥാനം നിലനിർത്താം.",
    nextStepsButton: "ഓർഡർ നിര്‍വഹണത്തിലേക്ക് തുടരുക",
    openDashboard: "വില നിര്‍വഹണ ഡാഷ്‌ബോർഡ് തുറക്കുക",
    accessingPriceManagement: "സൈഡ്‌ബാറിൽ നിന്ന് വില നിര്‍വഹണം ആക്സസ് ചെയ്യുന്നത്",
    analytics: "വിശകലനം",
    priceManagement: "വില നിര്‍വഹണം",
    inventory: "ഇൻവെന്ററി",
    clickToAccess: "വില നിര്‍ണ്ണയ ഡാഷ്‌ബോർഡ് ആക്സസ് ചെയ്യാൻ സൈഡ്‌ബാറിൽ നിന്ന് 'വില നിര്‍വഹണം' ക്ലിക്ക് ചെയ്യുക.",
    mainDashboard: "വില നിര്‍വഹണ പ്രധാന ഡാഷ്‌ബോർഡ്",
    monitorPerformance: "വില പ്രകടനം നിരീക്ഷിക്കുകയും ഉത്പന്ന വിലകൾ നിര്‍വഹിക്കുകയും ചെയ്യുക",
    bulkUpdate: "ബൾക്ക് വില അപ്‌ഡേറ്റ്",
    totalInventoryValue: "ആകെ ഇൻവെന്ററി മൂല്യം",
    thisMonth: "ഈ മാസം",
    avgB2CMargin: "ശരാശരി B2C മാർജിൻ",
    target: "ലക്ഷ്യം",
    avgB2BMargin: "ശരാശരി B2B മാർജിൻ",
    priceChangesToday: "ഇന്ന് വില മാറ്റങ്ങൾ",
    pendingApproval: "അനുമതിക്കായി കാത്തിരിക്കുന്നു",
    comprehensiveAnalytics: "സമഗ്ര വില വിശകലനം",
    marginPerformance: "വിഭാഗം അനുസരിച്ച് മാർജിൻ പ്രകടനം",
    dairyProducts: "പാൽ ഉത്പന്നങ്ങൾ",
    productsValue: "{count} ഉത്പന്നങ്ങൾ • ₹{value} മൂല്യം",
    snacksBeverages: "സ്നാക്സ് & പാനീയങ്ങൾ",
    personalCare: "വ്യക്തിഗത സംരക്ഷണം",
    priceAlerts: "വില നിരീക്ഷണ അലേർട്ടുകൾ",
    lowMarginAlert: "കുറഞ്ഞ മാർജിൻ അലേർട്ട്",
    lowMarginDesc: "{count} ഉത്പന്നങ്ങൾക്ക് 15% പരിധിക്ക് താഴെ മാർജിനുകൾ ഉണ്ട്, വില ക്രമീകരണ അവലോകനം ആവശ്യമാണ്.",
    reviewProducts: "ഉത്പന്നങ്ങൾ അവലോകനം ചെയ്യുക",
    marketPriceVariance: "വിപണി വില വ്യത്യാസം",
    marketVarianceDesc: "{count} ഉത്പന്നങ്ങൾ വിപണി ശരാശരി വിലയിൽ നിന്ന് ഗണനീയമായ വ്യത്യാസം കാണിക്കുന്നു.",
    aboveMarket: "{percentage}% വിപണി ശരാശരിക്ക് മുകളിൽ",
    belowMarket: "{percentage}% വിപണി ശരാശരിക്ക് താഴെ",
    individualPricingForm: "വ്യക്തിഗത ഉത്പന്ന വില ഫോം",
    pricingFor: "വില: {productName}",
    costPrice: "ചെലവ് വില",
    costPriceDesc: "യൂണിറ്റിന് നിങ്ങളുടെ വാങ്ങൽ ചെലവ്",
    lastPurchase: "അവസാന വാങ്ങൽ",
    avgCost30d: "ശരാശരി ചെലവ് (30 ദിവസം)",
    b2cPriceRetail: "B2C വില (റീട്ടെയിൽ)",
    margin: "മാർജിൻ",
    profitPerUnit: "ലാഭം: യൂണിറ്റിന് ₹{amount}",
    marketAverage: "വിപണി ശരാശരി",
    b2bPriceWholesale: "B2B വില (വോൾസേൽ)",
    minB2BPrice: "കുറഞ്ഞ B2B വില",
    pricingRecommendations: "വില ശുപാർശകൾ",
    b2cOptimization: "B2C ഒപ്റ്റിമൈസേഷൻ",
    priceBelowMarket: "നിലവിലെ വില വിപണി ശരാശരിക്ക് {percentage}% താഴെയാണ്",
    considerIncreasing: "മികച്ച മാർജിനിനായി ₹{price} ആയി ഉയർത്തുന്നത് പരിഗണിക്കുക",
    priceElasticity: "വില സാമർത്ഥ്യം: കുറവ് (ആവശ്യമായ ഉത്പന്നം)",
    b2bOptimization: "B2B ഒപ്റ്റിമൈസേഷൻ",
    competitiveWithMarket: "വോൾസേൽ വിപണിയുമായി മത്സരിക്കുന്നു",
    volumeDiscountAvailable: "100+ യൂണിറ്റുകളിൽ വോള്യം ഡിസ്കൗണ്ട് ടയർ ലഭ്യമാണ്",
    regularCustomerDiscount: "നിരന്തര ഉപഭോക്താവിന് അധിക 2% ഡിസ്കൗണ്ട് ലഭിക്കുന്നു",
    resetToDefaults: "ഡിഫോൾട്ടുകളിലേക്ക് റീസെറ്റ് ചെയ്യുക",
    savePricing: "വില സേവ് ചെയ്യുക",
    priceHistoryTimeline: "ഉത്പന്ന വില ചരിത്ര ടൈംലൈൻ",
    priceHistoryFor: "വില ചരിത്രം: {productName}",
    b2cPriceChanges: "B2C വില മാറ്റങ്ങൾ",
    increase: "വർദ്ധനവ്",
    byUser: "ഉപയോക്താവ്: {email}",
    reason: "കാരണം",
    marketAdjustmentReason: "വിപണി വില ക്രമീകരണം + മാർജിൻ ഒപ്റ്റിമൈസേഷൻ",
    costIncreaseReason: "വെണ്ടറിൽ നിന്ന് ചെലവ് വില വർദ്ധനവ്",
    b2bPriceChanges: "B2B വില മാറ്റങ്ങൾ",
    maintainMarginReason: "B2B മാർജിൻ ക്രമീകരണം നിലനിർത്തുക",
    priceImpactSummary: "വില സ്വാധീന സംഗ്രഹം",
    totalB2CIncrease: "ആകെ B2C വർദ്ധനവ്",
    overMonths: "{count} മാസങ്ങളിൽ",
    totalB2BIncrease: "ആകെ B2B വർദ്ധനവ്",
    revenueImpact: "വരുമാന സ്വാധീനം",
    estimatedMonthly: "അനുമാനിച്ച മാസിക",
    marketPriceComparison: "വിപണി വില താരതമ്യം",
    marketIntelligence: "വിപണി വില ബുദ്ധി",
    yourPricingPosition: "നിങ്ങളുടെ വില സ്ഥാനം",
    aboveMarketAverage: "വിപണി ശരാശരിക്ക് മുകളിൽ",
    atMarketAverage: "വിപണി ശരാശരിയിൽ",
    belowMarketAverage: "വിപണി ശരാശരിക്ക് താഴെ",
    pricingOpportunities: "വില അവസരങ്ങൾ",
    canIncreasePrice: "വില ഉയർത്താം",
    potentialRevenue: "സാധ്യതയുള്ള വരുമാനം",
    riskLevel: "അപകട നില",
    lowRisk: "കുറവ്",
    topRecommendations: "മികച്ച വില ക്രമീകരണ ശുപാർശകൾ",
    yourPrice: "നിങ്ങളുടെ വില",
    marketAvg: "വിപണി ശരാശരി",
    lowRiskIncrease: "കുറഞ്ഞ അപകട വർദ്ധനവ്",
    mediumRiskIncrease: "ഇടത്തരം അപകട വർദ്ധനവ്",
    bulkUpdateInterface: "ബൾക്ക് വില അപ്‌ഡേറ്റ് ഇന്റർഫേസ്",
    bulkPriceUpdate: "ബൾക്ക് വില അപ്‌ഡേറ്റ്",
    applyChanges: "നിരവധി ഉത്പന്നങ്ങൾക്ക് ഒരേ സമയത്ത് വില മാറ്റങ്ങൾ പ്രയോഗിക്കുക",
    selectionCriteria: "തിരഞ്ഞെടുപ്പ് മാനദണ്ഡങ്ങൾ",
    filterByCategory: "വിഭാഗം അനുസരിച്ച് ഫിൽറ്റർ ചെയ്യുക",
    allCategories: "എല്ലാ വിഭാഗങ്ങളും",
    filterByBrand: "ബ്രാൻഡ് അനുസരിച്ച് ഫിൽറ്റർ ചെയ്യുക",
    allBrands: "എല്ലാ ബ്രാൻഡുകളും",
    marginRange: "മാർജിൻ ശ്രേണി",
    min: "കുറഞ്ഞത്",
    max: "കൂടിയത്",
    priceAdjustment: "വില ക്രമീകരണം",
    adjustmentType: "ക്രമീകരണ തരം",
    percentageIncrease: "ശതമാന വർദ്ധനവ്",
    percentageDecrease: "ശതമാന കുറവ്",
    fixedIncrease: "നിശ്ചിത തുക വർദ്ധനവ്",
    fixedDecrease: "നിശ്ചിത തുക കുറവ്",
    setTargetMargin: "ലക്ഷ്യ മാർജിൻ സെറ്റ് ചെയ്യുക",
    value: "മൂല്യം",
    applyB2C: "B2C വിലകൾക്ക് പ്രയോഗിക്കുക",
    applyB2B: "B2B വിലകൾക്ക് പ്രയോഗിക്കുക",
    maintainMargin: "ആപേക്ഷിക മാർജിൻ വ്യത്യാസം നിലനിർത്തുക",
    bulkUpdatePreview: "പ്രയോഗിക്കുന്നതിന് മുമ്പ് മാറ്റങ്ങൾ പ്രിവ്യൂ ചെയ്യുക",
    previewAffected: "പ്രിവ്യൂ: ബാധിച്ച ഉത്പന്നങ്ങൾ ({count} ഇനങ്ങൾ)",
    product: "ഉത്പന്നം",
    currentB2C: "നിലവിലെ B2C",
    newB2C: "പുതിയ B2C",
    currentB2B: "നിലവിലെ B2B",
    newB2B: "പുതിയ B2B",
    impact: "സ്വാധീനം",
    showingOf: "{total} ഉത്പന്നങ്ങളിൽ {shown} കാണിക്കുന്നു. ആകെ മൂല്യ സ്വാധീനം: +₹{value} ഇൻവെന്ററി മൂല്യ വർദ്ധനവ്",
    approvalSystem: "വില മാറ്റം അനുമതി സിസ്റ്റം",
    pendingApprovals: "വില മാറ്റം അനുമതികൾ നിലവിൽ",
    bulkUpdateRequest: "ബൾക്ക് വില അപ്‌ഡേറ്റ് അഭ്യർത്ഥന",
    bulkUpdateDesc: "{category} വിഭാഗം - {percentage}% വില വർദ്ധനവ് {count} ഉത്പന്നങ്ങളിൽ",
    requestedBy: "അഭ്യർത്ഥിച്ചത്",
    requestedOn: "അഭ്യർത്ഥിച്ച തീയതി",
    expectedRevenueImpact: "അനുഭവപ്പെടാവുന്ന വരുമാന സ്വാധീനം",
    reject: "നിരസിക്കുക",
    approve: "അനുമതിക്കുക",
    justification: "ന്യായീകരണം",
    justificationText: "വെണ്ടർ ചെലവ് 3.2% വർദ്ധിച്ചു, മാർജിൻ നിലനിർത്താൻ വില ക്രമീകരണം ആവശ്യമാണ്",
    marketAnalysis: "വിപണി വിശകലനം",
    marketAnalysisText: "മത്സരാധിപന്മാർ കഴിഞ്ഞ 30 ദിവസങ്ങളിൽ 4-6% വിലകൾ ഉയർത്തി",
    riskAssessment: "അപകട മൂല്യനിർണ്ണയം",
    riskAssessmentText: "കുറവ് - ആവശ്യമായ ഉത്പന്നങ്ങൾ അസ്ഥിരമായ ആവശ്യകതയോടെ",
    individualUpdateRequest: "വ്യക്തിഗത ഉത്പന്ന അപ്‌ഡേറ്റ്",
    individualUpdateDesc: "{productName} - B2C: ₹{oldPrice} → ₹{newPrice} (+{percentage}%)",
    expectedMarginIncrease: "അനുഭവപ്പെടാവുന്ന മാർജിൻ വർദ്ധനവ്",
    // Product names
    organicBasmatiRice: "ഓർഗാനിക് ബാസ്മതി അരി 1kg",
    wholeWheatFlour: "പൂർണ്ണ ഗോതമ്പ് മാവ് 2kg",
    sunflowerOil: "സൂര്യകാന്തി എണ്ണ 1L",
    premiumTeaBags: "പ്രീമിയം ചായ ബാഗുകൾ",
    dairyProducts: "പാൽ ഉത്പന്നങ്ങൾ",
    snacksBeverages: "സ്നാക്സ് & പാനീയങ്ങൾ",
    personalCare: "വ്യക്തിഗത സംരക്ഷണം"
  },
};

export default function ManualPricing() {
  const [language] = useManualLanguage();
  
  const t = (key, params = {}) => {
    let translation = translations[language]?.[key] || translations['en']?.[key] || key;
    for (const param in params) {
      translation = translation.replace(`{${param}}`, params[param]);
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
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
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

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. {t('accessingPriceManagement')}</h6>
                <Screenshot title={t('accessingPriceManagement')}>
                  <div className="space-y-4">
                    <div className="w-64 bg-white border rounded-lg shadow-sm">
                      <div className="p-2 space-y-1">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">
                          <BarChart3 className="w-4 h-4" />
                          <span className="text-sm">{t('analytics')}</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-pink-50 text-pink-600 border border-pink-200">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-sm font-medium">{t('priceManagement')}</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">
                          <Settings className="w-4 h-4" />
                          <span className="text-sm">{t('inventory')}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{t('clickToAccess')}</p>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. {t('mainDashboard').split(':')[0]}</h6>
                <Screenshot title={t('mainDashboard')}>
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h2 className="text-xl font-bold text-slate-800">{t('priceManagement')}</h2>
                        <p className="text-sm text-slate-500">{t('monitorPerformance')}</p>
                      </div>
                      <div className="flex gap-2 flex-col sm:flex-row">
                        <Button className="bg-pink-600 hover:bg-pink-700">
                          <Target className="w-4 h-4 mr-2" />
                          {t('bulkUpdate')}
                        </Button>
                        <Button variant="outline">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          {t('analytics')}
                        </Button>
                      </div>
                    </div>

                    {/* Pricing Statistics */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">₹2.3L</div>
                        <div className="text-sm text-blue-700">{t('totalInventoryValue')}</div>
                        <div className="text-xs text-blue-500 mt-1">+8.2% {t('thisMonth')}</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">22.5%</div>
                        <div className="text-sm text-green-700">{t('avgB2CMargin')}</div>
                        <div className="text-xs text-green-500 mt-1">{t('target')}: 25%</div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-amber-600">15.8%</div>
                        <div className="text-sm text-amber-700">{t('avgB2BMargin')}</div>
                        <div className="text-xs text-amber-500 mt-1">{t('target')}: 18%</div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">47</div>
                        <div className="text-sm text-purple-700">{t('priceChangesToday')}</div>
                        <div className="text-xs text-purple-500 mt-1">12 {t('pendingApproval')}</div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">C. {t('comprehensiveAnalytics')}</h6>
                <Screenshot title={t('comprehensiveAnalytics')}>
                  <div className="space-y-4">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h3 className="font-semibold text-slate-700 mb-4">{t('marginPerformance')}</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">🥛</div>
                            <div>
                              <div className="font-medium text-slate-800">{t('dairyProducts')}</div>
                              <div className="text-sm text-slate-500">{t('productsValue', { count: 28, value: '45,200' })}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">28.5%</div>
                            <div className="text-xs text-green-500">{t('avgB2CMargin')}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">🍿</div>
                            <div>
                              <div className="font-medium text-slate-800">{t('snacksBeverages')}</div>
                              <div className="text-sm text-slate-500">{t('productsValue', { count: 45, value: '67,800' })}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-amber-600">18.2%</div>
                            <div className="text-xs text-amber-500">{t('avgB2CMargin')}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">🧴</div>
                            <div>
                              <div className="font-medium text-slate-800">{t('personalCare')}</div>
                              <div className="text-sm text-slate-500">{t('productsValue', { count: 32, value: '52,400' })}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">31.8%</div>
                            <div className="text-xs text-blue-500">{t('avgB2CMargin')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">D. {t('priceAlerts')}</h6>
                <Screenshot title={t('priceAlerts')}>
                  <div className="space-y-4">
                    <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-red-800">{t('lowMarginAlert')}</h5>
                          <p className="text-sm text-red-700 mt-1">
                            {t('lowMarginDesc', { count: 8 })}
                          </p>
                          <div className="mt-3 space-y-1">
                            <div className="text-xs text-red-600">• Coca Cola 330ml - {t('margin')}: 12.5%</div>
                            <div className="text-xs text-red-600">• Lays Classic 50g - {t('margin')}: 11.8%</div>
                            <div className="text-xs text-red-600">• Maggi Noodles - {t('margin')}: 14.2%</div>
                          </div>
                          <Button size="sm" className="mt-3 bg-red-600 text-white hover:bg-red-700">{t('reviewProducts')}</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-amber-600 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-amber-800">{t('marketPriceVariance')}</h5>
                          <p className="text-sm text-amber-700 mt-1">
                            {t('marketVarianceDesc', { count: 3 })}
                          </p>
                          <div className="mt-3 space-y-1">
                            <div className="text-xs text-amber-600">• {t('organicBasmatiRice')} - {t('aboveMarket', { percentage: '15' })}</div>
                            <div className="text-xs text-amber-600">• {t('sunflowerOil')} - {t('belowMarket', { percentage: '8' })}</div>
                          </div>
                        </div>
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

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. {t('individualPricingForm')}</h6>
                <Screenshot title={t('individualPricingForm')}>
                  <div className="space-y-6">
                    <div className="border border-slate-200 rounded-lg p-6">
                      <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-blue-600"/>
                        {t('pricingFor', { productName: t('organicBasmatiRice') })}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                          <div className="text-center">
                            <label className="text-sm font-medium text-slate-600">{t('costPrice')}</label>
                            <div className="text-2xl font-bold text-slate-700 mt-1">₹28.00</div>
                            <p className="text-xs text-slate-500 mt-1">{t('costPriceDesc')}</p>
                            <div className="mt-3 p-2 bg-slate-100 rounded">
                              <div className="text-xs text-slate-600">
                                <div>{t('lastPurchase')}: ₹28.50</div>
                                <div>{t('avgCost30d')}: ₹28.20</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                          <div className="text-center">
                            <label className="text-sm font-medium text-blue-700">{t('b2cPriceRetail')}</label>
                            <div className="mt-2">
                              <Input 
                                defaultValue="35.00" 
                                className="text-xl font-bold text-center bg-white border-blue-300"
                                type="number"
                                step="0.01"
                              />
                            </div>
                            <div className="mt-3 space-y-1">
                              <div className="text-lg font-bold text-blue-600">{t('margin')}: 25.0%</div>
                              <div className="text-xs text-blue-600">{t('profitPerUnit', { amount: '7.00' })}</div>
                              <div className="text-xs text-slate-500">{t('marketAverage')}: ₹36.50</div>
                            </div>
                          </div>
                        </div>

                        <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50">
                          <div className="text-center">
                            <label className="text-sm font-medium text-emerald-700">{t('b2bPriceWholesale')}</label>
                            <div className="mt-2">
                              <Input 
                                defaultValue="32.00" 
                                className="text-xl font-bold text-center bg-white border-emerald-300"
                                type="number"
                                step="0.01"
                              />
                            </div>
                            <div className="mt-3 space-y-1">
                              <div className="text-lg font-bold text-emerald-600">{t('margin')}: 14.3%</div>
                              <div className="text-xs text-emerald-600">{t('profitPerUnit', { amount: '4.00' })}</div>
                              <div className="text-xs text-slate-500">{t('minB2BPrice')}: ₹30.00</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium text-blue-800 mb-2">{t('pricingRecommendations')}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-medium text-blue-700">{t('b2cOptimization')}</div>
                            <ul className="text-blue-600 space-y-1 mt-1">
                              <li>• {t('priceBelowMarket', { percentage: '4.1' })}</li>
                              <li>• {t('considerIncreasing', { price: '36.00' })}</li>
                              <li>• {t('priceElasticity')}</li>
                            </ul>
                          </div>
                          <div>
                            <div className="font-medium text-blue-700">{t('b2bOptimization')}</div>
                            <ul className="text-blue-600 space-y-1 mt-1">
                              <li>• {t('competitiveWithMarket')}</li>
                              <li>• {t('volumeDiscountAvailable')}</li>
                              <li>• {t('regularCustomerDiscount')}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-3 mt-6 flex-col sm:flex-row">
                        <Button variant="outline">{t('resetToDefaults')}</Button>
                        <Button className="bg-pink-600 hover:bg-pink-700">{t('savePricing')}</Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. {t('priceHistoryTimeline')}</h6>
                <Screenshot title={t('priceHistoryTimeline')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                      <History className="w-5 h-5 text-purple-600"/>
                                              {t('priceHistoryFor', { productName: t('organicBasmatiRice') })}
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-slate-700 mb-3">{t('b2cPriceChanges')}</h4>
                        <div className="space-y-3">
                          <div className="border border-green-200 bg-green-50 rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium text-green-800">₹32.00 → ₹35.00</div>
                                <div className="text-sm text-green-600">+9.4% {t('increase')}</div>
                                <div className="text-xs text-slate-500 mt-1">May 15, 2024 at 10:30 AM</div>
                                <div className="text-xs text-slate-600">{t('byUser', { email: 'admin@retailos.com' })}</div>
                              </div>
                              <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="mt-2 text-xs text-green-700">
                              {t('reason')}: {t('marketAdjustmentReason')}
                            </div>
                          </div>

                          <div className="border border-blue-200 bg-blue-50 rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium text-blue-800">₹30.00 → ₹32.00</div>
                                <div className="text-sm text-blue-600">+6.7% {t('increase')}</div>
                                <div className="text-xs text-slate-500 mt-1">Apr 28, 2024 at 2:15 PM</div>
                                <div className="text-xs text-slate-600">{t('byUser', { email: 'inventory@retailos.com' })}</div>
                              </div>
                              <TrendingUp className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="mt-2 text-xs text-blue-700">
                              {t('reason')}: {t('costIncreaseReason')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-slate-700 mb-3">{t('b2bPriceChanges')}</h4>
                        <div className="space-y-3">
                          <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium text-emerald-800">₹29.00 → ₹32.00</div>
                                <div className="text-sm text-emerald-600">+10.3% {t('increase')}</div>
                                <div className="text-xs text-slate-500 mt-1">May 15, 2024 at 10:30 AM</div>
                                <div className="text-xs text-slate-600">{t('byUser', { email: 'admin@retailos.com' })}</div>
                              </div>
                              <TrendingUp className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div className="mt-2 text-xs text-emerald-700">
                              {t('reason')}: {t('maintainMarginReason')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-800 mb-2">{t('priceImpactSummary')}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-blue-700 font-medium">{t('totalB2CIncrease')}</div>
                          <div className="text-lg font-bold text-blue-800">16.7%</div>
                          <div className="text-xs text-blue-600">{t('overMonths', { count: 2 })}</div>
                        </div>
                        <div>
                          <div className="text-blue-700 font-medium">{t('totalB2BIncrease')}</div>
                          <div className="text-lg font-bold text-blue-800">10.3%</div>
                          <div className="text-xs text-blue-600">{t('overMonths', { count: 2 })}</div>
                        </div>
                        <div>
                          <div className="text-blue-700 font-medium">{t('revenueImpact')}</div>
                          <div className="text-lg font-bold text-green-600">+₹1,240</div>
                          <div className="text-xs text-green-600">{t('estimatedMonthly')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">C. {t('marketPriceComparison')}</h6>
                <Screenshot title={t('marketPriceComparison')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('marketIntelligence')}</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-medium text-blue-800 mb-3">{t('yourPricingPosition')}</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{t('aboveMarketAverage')}:</span>
                              <span className="font-medium text-red-600">23 {t('product', { count: 23 })}s</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>{t('atMarketAverage')}:</span>
                              <span className="font-medium text-green-600">45 {t('product', { count: 45 })}s</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>{t('belowMarketAverage')}:</span>
                              <span className="font-medium text-blue-600">67 {t('product', { count: 67 })}s</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                          <h4 className="font-medium text-emerald-800 mb-3">{t('pricingOpportunities')}</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{t('canIncreasePrice')}:</span>
                              <span className="font-medium text-emerald-600">34 {t('product', { count: 34 })}s</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>{t('potentialRevenue')}:</span>
                              <span className="font-medium text-emerald-600">+₹8,450/{t('thisMonth')}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>{t('riskLevel')}:</span>
                              <span className="font-medium text-green-600">{t('lowRisk')}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <h4 className="font-medium text-slate-700 mb-3">{t('topRecommendations')}</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
                            <div>
                              <div className="font-medium text-slate-800">{t('sunflowerOil')}</div>
                              <div className="text-sm text-slate-500">{t('yourPrice')}: ₹85.00 • {t('marketAvg')}: ₹92.50</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600">+8.8%</div>
                              <div className="text-xs text-green-500">{t('lowRiskIncrease')}</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
                            <div>
                              <div className="font-medium text-slate-800">{t('premiumTeaBags')}</div>
                              <div className="text-sm text-slate-500">{t('yourPrice')}: ₹45.00 • {t('marketAvg')}: ₹48.00</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-blue-600">+6.7%</div>
                              <div className="text-xs text-blue-500">{t('mediumRiskIncrease')}</div>
                            </div>
                          </div>
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

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">A. {t('bulkUpdateInterface')}</h6>
                <Screenshot title={t('bulkUpdateInterface')}>
                  <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">{t('bulkPriceUpdate')}</h3>
                    <p className="text-sm text-slate-500 mb-6">{t('applyChanges')}</p>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium text-slate-700">{t('selectionCriteria')}</h4>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('filterByCategory')}</label>
                            <select className="w-full p-2 border border-slate-300 rounded-md">
                              <option>{t('allCategories')}</option>
                              <option>{t('dairyProducts')}</option>
                              <option>{t('snacksBeverages')}</option>
                              <option>{t('personalCare')}</option>
                              <option>Household Items</option> {/* Not translated in outline */}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('filterByBrand')}</label>
                            <select className="w-full p-2 border border-slate-300 rounded-md">
                              <option>{t('allBrands')}</option>
                              <option>Nestle</option> {/* Not translated in outline */}
                              <option>Hindustan Unilever</option> {/* Not translated in outline */}
                              <option>ITC</option> {/* Not translated in outline */}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t('marginRange')}</label>
                            <div className="flex items-center gap-2">
                              <Input type="number" placeholder={`${t('min')} %`} className="flex-1" />
                              <span className="text-slate-500">to</span>
                              <Input type="number" placeholder={`${t('max')} %`} className="flex-1" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-medium text-slate-700">{t('priceAdjustment')}</h4>
                          <div className="flex gap-2">
                            <div className="flex-1">
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('adjustmentType')}</label>
                              <select className="w-full p-2 border border-slate-300 rounded-md">
                                <option>{t('percentageIncrease')}</option>
                                <option>{t('percentageDecrease')}</option>
                                <option>{t('fixedIncrease')}</option>
                                <option>{t('fixedDecrease')}</option>
                                <option>{t('setTargetMargin')}</option>
                              </select>
                            </div>
                            <div className="w-24">
                              <label className="block text-sm font-medium text-slate-700 mb-1">{t('value')}</label>
                              <Input type="number" placeholder="5" className="w-full" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="apply-b2c" className="rounded" defaultChecked />
                              <label htmlFor="apply-b2c" className="text-sm text-slate-700">{t('applyB2C')}</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="apply-b2b" className="rounded" defaultChecked />
                              <label htmlFor="apply-b2b" className="text-sm text-slate-700">{t('applyB2B')}</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" id="maintain-margin" className="rounded" />
                              <label htmlFor="maintain-margin" className="text-sm text-slate-700">{t('maintainMargin')}</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">B. {t('bulkUpdatePreview')}</h6>
                <Screenshot title={t('bulkUpdatePreview')}>
                  {/* <div className="bg-slate-50 border border-slate-200 rounded-lg p-4"> */}
                    {/* <h4 className="font-medium text-slate-700 mb-3">{t('previewAffected', { count: 24 })}</h4> */}
                    <div className="overflow-x-auto">
                    <table className="min-w-full border border-slate-200 rounded-lg">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="px-3 py-2 text-left">{t('product')}</th>
                            <th className="px-3 py-2 text-right">{t('currentB2C')}</th>
                            <th className="px-3 py-2 text-right">{t('newB2C')}</th>
                            <th className="px-3 py-2 text-right">{t('currentB2B')}</th>
                            <th className="px-3 py-2 text-right">{t('newB2B')}</th>
                            <th className="px-3 py-2 text-center">{t('impact')}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr>
                            <td className="px-3 py-2">{t('organicBasmatiRice')}</td>
                            <td className="px-3 py-2 text-right">₹35.00</td>
                            <td className="px-3 py-2 text-right font-medium text-green-600">₹36.75</td>
                            <td className="px-3 py-2 text-right">₹32.00</td>
                            <td className="px-3 py-2 text-right font-medium text-green-600">₹33.60</td>
                            <td className="px-3 py-2 text-center">
                              <Badge className="bg-green-100 text-green-800">+5%</Badge>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2">{t('wholeWheatFlour')}</td>
                            <td className="px-3 py-2 text-right">₹42.00</td>
                            <td className="px-3 py-2 text-right font-medium text-green-600">₹44.10</td>
                            <td className="px-3 py-2 text-right">₹38.00</td>
                            <td className="px-3 py-2 text-right font-medium text-green-600">₹39.90</td>
                            <td className="px-3 py-2 text-center">
                              <Badge className="bg-green-100 text-green-800">+5%</Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    <div className="mt-3 text-xs text-slate-500">
                      {t('showingOf', { shown: 2, total: 24, value: '2,340' })}
                    </div>
                  {/* </div> */}
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">C. {t('approvalSystem')}</h6>
                <Screenshot title={t('approvalSystem')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('pendingApprovals')}</h3>
                    <div className="space-y-4">
                      <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                        <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                          <div>
                            <h4 className="font-medium text-amber-800">{t('bulkUpdateRequest')}</h4>
                            <p className="text-sm text-amber-700 mt-1">
                              {t('bulkUpdateDesc', { category: t('dairyProducts'), percentage: 5, count: 28 })}
                            </p>
                            <div className="mt-2 text-xs text-slate-600">
                              <div>{t('requestedBy')}: inventory@retailos.com</div>
                              <div>{t('requestedOn')}: May 20, 2024 at 3:45 PM</div>
                              <div>{t('expectedRevenueImpact')}: +₹3,200/{t('thisMonth')}</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-red-600 border-red-300">
                              {t('reject')}
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              {t('approve')}
                            </Button>
                          </div>
                        </div>
                        <div className="mt-3 p-3 bg-white rounded border">
                          <div className="text-xs text-slate-600 space-y-1">
                            <div><strong>{t('justification')}:</strong> {t('justificationText')}</div>
                            <div><strong>{t('marketAnalysis')}:</strong> {t('marketAnalysisText')}</div>
                            <div><strong>{t('riskAssessment')}:</strong> {t('riskAssessmentText')}</div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                        <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                          <div>
                            <h4 className="font-medium text-blue-800">{t('individualUpdateRequest')}</h4>
                            <p className="text-sm text-blue-700 mt-1">
                              {t('individualUpdateDesc', { productName: 'Premium Olive Oil 500ml', oldPrice: '120', newPrice: '135', percentage: '12.5' })}
                            </p>
                            <div className="mt-2 text-xs text-slate-600">
                              <div>{t('requestedBy')}: manager@retailos.com</div>
                              <div>{t('requestedOn')}: May 20, 2024 at 11:20 AM</div>
                              <div>{t('expectedMarginIncrease')}: 18.5% → 22.2%</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-red-600 border-red-300">
                              {t('reject')}
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

              <div className="mt-12 p-6 bg-pink-50 border border-pink-200 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-pink-700 mb-4">
                  {t('nextStepsDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={createPageUrl('ManualOrders')} className="inline-block">
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      {t('nextStepsButton')}
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </Button>
                  </Link>
                  <Link  onClick={()=>navigateTo('priceManagement')} className="inline-block">
                    <Button variant="outline">
                      {t('openDashboard')}
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
