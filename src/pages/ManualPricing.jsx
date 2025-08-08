
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
    <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base">
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
    expectedMarginIncrease: "Expected margin increase"
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
    expectedMarginIncrease: "ನಿರೀಕ್ಷಿತ ಮಾರ್ಜಿನ್ ಹೆಚ್ಚಳ"
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
                      <div className="flex gap-2">
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
                          <Button size="sm" className="mt-3 bg-red-600 hover:bg-red-700">{t('reviewProducts')}</Button>
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
                            <div className="text-xs text-amber-600">• Organic Rice 1kg - {t('aboveMarket', { percentage: '15' })}</div>
                            <div className="text-xs text-amber-600">• Sunflower Oil 1L - {t('belowMarket', { percentage: '8' })}</div>
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
                        {t('pricingFor', { productName: 'Organic Basmati Rice 1kg' })}
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
                      
                      <div className="flex justify-end gap-3 mt-6">
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
                      {t('priceHistoryFor', { productName: 'Organic Basmati Rice 1kg' })}
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
                              <div className="font-medium text-slate-800">Sunflower Oil 1L</div>
                              <div className="text-sm text-slate-500">{t('yourPrice')}: ₹85.00 • {t('marketAvg')}: ₹92.50</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600">+8.8%</div>
                              <div className="text-xs text-green-500">{t('lowRiskIncrease')}</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
                            <div>
                              <div className="font-medium text-slate-800">Premium Tea Bags</div>
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
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <h4 className="font-medium text-slate-700 mb-3">{t('previewAffected', { count: 24 })}</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
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
                            <td className="px-3 py-2">Organic Basmati Rice 1kg</td>
                            <td className="px-3 py-2 text-right">₹35.00</td>
                            <td className="px-3 py-2 text-right font-medium text-green-600">₹36.75</td>
                            <td className="px-3 py-2 text-right">₹32.00</td>
                            <td className="px-3 py-2 text-right font-medium text-green-600">₹33.60</td>
                            <td className="px-3 py-2 text-center">
                              <Badge className="bg-green-100 text-green-800">+5%</Badge>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2">Whole Wheat Flour 1kg</td>
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
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">C. {t('approvalSystem')}</h6>
                <Screenshot title={t('approvalSystem')}>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-700 mb-4">{t('pendingApprovals')}</h3>
                    <div className="space-y-4">
                      <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                        <div className="flex items-start justify-between">
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
                        <div className="flex items-start justify-between">
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
                  <Link to={createPageUrl('PriceManagement')} className="inline-block">
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
