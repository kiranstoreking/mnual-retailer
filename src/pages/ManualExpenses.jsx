import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft, DollarSign, Plus, Eye, Edit, Trash2,
  CheckCircle, Clock, XCircle, Search, Filter, BarChart3,
  Calendar, Upload, List
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
    <div className="flex-shrink-0 w-8 h-8 bg-stone-600 text-white rounded-full flex items-center justify-center font-bold text-sm">{number}</div>
    <div className="flex-grow">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base">
        {children}
      </div>
    </div>
  </div>
);

const translations = {
  en: {
    pageTitle: "Expense Management Manual",
    backToManual: "Back to Manual",
    description: "A comprehensive guide to tracking and managing all business-related expenses, from creating expense claims to approval workflows, payment processing, and financial analytics.",
    step1Title: "Expense Dashboard Overview",
    step1Intro: "The Expense Dashboard is your central hub for monitoring all company expenditures. It provides key statistics, a list of recent expenses, and access to all management functions.",
    step2Title: "Creating and Submitting an Expense",
    step2Intro: "This section walks you through the process of adding a new expense, including filling out details, selecting a category, and attaching a receipt for verification.",
    step3Title: "Expense Approval Workflow",
    step3Intro: "All submitted expenses go through an approval process. Authorized managers can review, approve, or reject expense claims, ensuring proper financial controls.",
    step4Title: "Managing Expense Categories",
    step4Intro: "Organizing expenses into categories is crucial for accurate financial reporting and analysis. You can create, edit, and manage custom expense categories to fit your business needs.",
    step5Title: "Expense Analytics",
    step5Intro: "The Analytics tab provides valuable insights into your company's spending patterns, helping you identify areas for cost savings and better budget management.",
    nextStepsTitle: "Expense Management Complete!",
    nextStepsDescription: "You have now mastered the RetailOS expense management system. This is the final core module in the setup guide. You can return to the main manual to review any section.",
    nextStepsButton: "Return to Main Manual",
    
    // Screenshot Keys
    expenseDashboard: "Expense Dashboard",
    dashboardDesc: "Track and manage all operational expenses and reimbursements.",
    addExpense: "Add Expense",
    totalExpenses: "Total Expenses (30d)",
    pendingApproval: "Pending Approval",
    totalPaid: "Total Paid (30d)",
    overview: "Overview",
    categories: "Categories",
    analytics: "Analytics",
    recentExpenses: "Recent Expenses",
    searchExpenses: "Search expenses by title or recipient...",
    allStatuses: "All Statuses",
    pending: "Pending",
    approved: "Approved",
    paid: "Paid",
    rejected: "Rejected",
    expense: "Expense",
    category: "Category",
    date: "Date",
    amount: "Amount",
    status: "Status",
    actions: "Actions",
    officeSupplies: "Office Supplies",
    travel: "Travel",
    rent: "Rent",
    utilities: "Utilities",
    marketing: "Marketing",
    logistics: "Logistics",
    
    addNewExpense: "Add New Expense",
    expenseDetails: "Enter the details of the expense below.",
    title: "Title",
    expenseCategory: "Expense Category",
    selectCategory: "Select a category",
    expenseDate: "Expense Date",
    vendorRecipient: "Vendor / Recipient",
    descriptionField: "Description",
    receipt: "Receipt",
    uploadPrompt: "Click to upload or drag and drop",
    fileTypes: "PNG, JPG, or PDF (MAX. 5MB)",
    saveExpense: "Save Expense",
    
    approvalModal: "Expense Approval",
    reviewExpense: "Review and approve/reject the expense for",
    submittedBy: "Submitted by:",
    approve: "Approve",
    reject: "Reject",
    
    expenseCategories: "Expense Categories",
    addCategory: "Add Category",
    categoryName: "Category Name",
    edit: "Edit",
    delete: "Delete",
    
    expenseAnalytics: "Expense Analytics",
    expensesByCategory: "Expenses by Category (Last 30d)",
    monthlySpend: "Monthly Spend",
    highestExpense: "Highest Expense (30d)",
    avgExpenseValue: "Avg. Expense Value",
  },
  kn: {
    pageTitle: "ವೆಚ್ಚ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ಖರ್ಚು ಕ್ಲೈಮ್‌ಗಳನ್ನು ರಚಿಸುವುದರಿಂದ ಹಿಡಿದು ಅನುಮೋದನೆ ಕೆಲಸದ ಹರಿವುಗಳು, ಪಾವತಿ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಹಣಕಾಸು ವಿಶ್ಲೇಷಣೆವರೆಗೆ ಎಲ್ಲಾ ವ್ಯವಹಾರ-ಸಂಬಂಧಿತ ವೆಚ್ಚಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಒಂದು ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ.",
    step1Title: "ವೆಚ್ಚ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    step1Intro: "ವೆಚ್ಚ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನಿಮ್ಮ ಕಂಪನಿಯ ಎಲ್ಲಾ ಖರ್ಚುಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ನಿಮ್ಮ ಕೇಂದ್ರ ಕೇಂದ್ರವಾಗಿದೆ. ಇದು ಪ್ರಮುಖ ಅಂಕಿಅಂಶಗಳು, ಇತ್ತೀಚಿನ ವೆಚ್ಚಗಳ ಪಟ್ಟಿ ಮತ್ತು ಎಲ್ಲಾ ನಿರ್ವಹಣಾ ಕಾರ್ಯಗಳಿಗೆ ಪ್ರವೇಶವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step2Title: "ವೆಚ್ಚವನ್ನು ರಚಿಸುವುದು ಮತ್ತು ಸಲ್ಲಿಸುವುದು",
    step2Intro: "ಈ ವಿಭಾಗವು ಹೊಸ ವೆಚ್ಚವನ್ನು ಸೇರಿಸುವ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಕರೆದೊಯ್ಯುತ್ತದೆ, ಇದರಲ್ಲಿ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡುವುದು, ವರ್ಗವನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದು ಮತ್ತು ಪರಿಶೀಲನೆಗಾಗಿ ರಶೀದಿಯನ್ನು ಲಗತ್ತಿಸುವುದು ಸೇರಿದೆ.",
    step3Title: "ವೆಚ್ಚ ಅನುಮೋದನೆ ಕೆಲಸದ ಹರಿವು",
    step3Intro: "ಸಲ್ಲಿಸಿದ ಎಲ್ಲಾ ವೆಚ್ಚಗಳು ಅನುಮೋದನೆ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ಹೋಗುತ್ತವೆ. ಅಧಿಕೃತ ವ್ಯವಸ್ಥಾಪಕರು ಖರ್ಚು ಕ್ಲೈಮ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಬಹುದು, ಅನುಮೋದಿಸಬಹುದು ಅಥವಾ ತಿರಸ್ಕರಿಸಬಹುದು, ಸರಿಯಾದ ಹಣಕಾಸು ನಿಯಂತ್ರಣಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಬಹುದು.",
    step4Title: "ವೆಚ್ಚ ವರ್ಗಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು",
    step4Intro: "ಸರಿಯಾದ ಹಣಕಾಸು ವರದಿ ಮತ್ತು ವಿಶ್ಲೇಷಣೆಗಾಗಿ ವೆಚ್ಚಗಳನ್ನು ವರ್ಗಗಳಾಗಿ ಸಂಘಟಿಸುವುದು ನಿರ್ಣಾಯಕವಾಗಿದೆ. ನಿಮ್ಮ ವ್ಯವಹಾರದ ಅಗತ್ಯಗಳಿಗೆ ಸರಿಹೊಂದುವಂತೆ ನೀವು ಕಸ್ಟಮ್ ವೆಚ್ಚ ವರ್ಗಗಳನ್ನು ರಚಿಸಬಹುದು, ಸಂಪಾದಿಸಬಹುದು ಮತ್ತು ನಿರ್ವಹಿಸಬಹುದು.",
    step5Title: "ವೆಚ್ಚ ವಿಶ್ಲೇಷಣೆ",
    step5Intro: "ವಿಶ್ಲೇಷಣೆ ಟ್ಯಾಬ್ ನಿಮ್ಮ ಕಂಪನಿಯ ಖರ್ಚು ಮಾದರಿಗಳ ಬಗ್ಗೆ ಮೌಲ್ಯಯುತ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ, ವೆಚ್ಚ ಉಳಿತಾಯಕ್ಕಾಗಿ ಪ್ರದೇಶಗಳನ್ನು ಗುರುತಿಸಲು ಮತ್ತು ಉತ್ತಮ ಬಜೆಟ್ ನಿರ್ವಹಣೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    nextStepsTitle: "ವೆಚ್ಚ ನಿರ್ವಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನೀವು ಈಗ RetailOS ವೆಚ್ಚ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಕರಗತ ಮಾಡಿಕೊಂಡಿದ್ದೀರಿ. ಇದು ಸೆಟಪ್ ಗೈಡ್‌ನಲ್ಲಿನ ಅಂತಿಮ ಕೋರ್ ಮಾಡ್ಯೂಲ್ ಆಗಿದೆ. ಯಾವುದೇ ವಿಭಾಗವನ್ನು ಪರಿಶೀಲಿಸಲು ನೀವು ಮುಖ್ಯ ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಬಹುದು.",
    nextStepsButton: "ಮುಖ್ಯ ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    
    expenseDashboard: "ವೆಚ್ಚ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    dashboardDesc: "ಎಲ್ಲಾ ಕಾರ್ಯಾಚರಣೆಯ ವೆಚ್ಚಗಳು ಮತ್ತು ಮರುಪಾವತಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
    addExpense: "ವೆಚ್ಚವನ್ನು ಸೇರಿಸಿ",
    totalExpenses: "ಒಟ್ಟು ವೆಚ್ಚಗಳು (30ದಿ)",
    pendingApproval: "ಅನುಮೋದನೆ ಬಾಕಿ ಇದೆ",
    totalPaid: "ಒಟ್ಟು ಪಾವತಿಸಲಾಗಿದೆ (30ದಿ)",
    overview: "ಅವಲೋಕನ",
    categories: "ವರ್ಗಗಳು",
    analytics: "ವಿಶ್ಲೇಷಣೆ",
    recentExpenses: "ಇತ್ತೀಚಿನ ವೆಚ್ಚಗಳು",
    searchExpenses: "ಶೀರ್ಷಿಕೆ ಅಥವಾ ಸ್ವೀಕರಿಸುವವರ ಮೂಲಕ ವೆಚ್ಚಗಳನ್ನು ಹುಡುಕಿ...",
    allStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
    pending: "ಬಾಕಿ ಇದೆ",
    approved: "ಅನುಮೋದಿಸಲಾಗಿದೆ",
    paid: "ಪಾವತಿಸಲಾಗಿದೆ",
    rejected: "ತಿರಸ್ಕರಿಸಲಾಗಿದೆ",
    expense: "ವೆಚ್ಚ",
    category: "ವರ್ಗ",
    date: "ದಿನಾಂಕ",
    amount: "ಮೊತ್ತ",
    status: "ಸ್ಥಿತಿ",
    actions: "ಕ್ರಿಯೆಗಳು",
    officeSupplies: "ಕಚೇರಿ ಸರಬರಾಜು",
    travel: "ಪ್ರಯಾಣ",
    rent: "ಬಾಡಿಗೆ",
    utilities: "ಸೌಲಭ್ಯಗಳು",
    marketing: "ಮಾರ್ಕೆಟಿಂಗ್",
    logistics: "ಲಾಜಿಸ್ಟಿಕ್ಸ್",
    
    addNewExpense: "ಹೊಸ ವೆಚ್ಚವನ್ನು ಸೇರಿಸಿ",
    expenseDetails: "ಕೆಳಗೆ ವೆಚ್ಚದ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
    title: "ಶೀರ್ಷಿಕೆ",
    expenseCategory: "ವೆಚ್ಚ ವರ್ಗ",
    selectCategory: "ಒಂದು ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    expenseDate: "ವೆಚ್ಚದ ದಿನಾಂಕ",
    vendorRecipient: "ಮಾರಾಟಗಾರ / ಸ್ವೀಕರಿಸುವವರು",
    descriptionField: "ವಿವರಣೆ",
    receipt: "ರಶೀದಿ",
    uploadPrompt: "ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಡ್ರ್ಯಾಗ್ ಮತ್ತು ಡ್ರಾಪ್ ಮಾಡಿ",
    fileTypes: "PNG, JPG, ಅಥವಾ PDF (ಗರಿಷ್ಠ. 5MB)",
    saveExpense: "ವೆಚ್ಚವನ್ನು ಉಳಿಸಿ",
    
    approvalModal: "ವೆಚ್ಚ ಅನುಮೋದನೆ",
    reviewExpense: "ವೆಚ್ಚವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಅನುಮೋದಿಸಿ/ತಿರಸ್ಕರಿಸಿ",
    submittedBy: "ಸಲ್ಲಿಸಿದವರು:",
    approve: "ಅನುಮೋದಿಸಿ",
    reject: "ತಿರಸ್ಕರಿಸಿ",
    
    expenseCategories: "ವೆಚ್ಚ ವರ್ಗಗಳು",
    addCategory: "ವರ್ಗವನ್ನು ಸೇರಿಸಿ",
    categoryName: "ವರ್ಗದ ಹೆಸರು",
    edit: "ಸಂಪಾದಿಸಿ",
    delete: "ಅಳಿಸಿ",
    
    expenseAnalytics: "ವೆಚ್ಚ ವಿಶ್ಲೇಷಣೆ",
    expensesByCategory: "ವರ್ಗದ ಪ್ರಕಾರ ವೆಚ್ಚಗಳು (ಕಳೆದ 30 ದಿನಗಳು)",
    monthlySpend: "ಮಾಸಿಕ ಖರ್ಚು",
    highestExpense: "ಅತಿ ಹೆಚ್ಚು ವೆಚ್ಚ (30ದಿ)",
    avgExpenseValue: "ಸರಾಸರಿ ವೆಚ್ಚ ಮೌಲ್ಯ",
  },
  te: {
    pageTitle: "వ్యయ నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కు తిరిగి వెళ్ళు",
    description: "వ్యయ క్లెయిమ్‌లను సృష్టించడం నుండి ఆమోదం వర్క్‌ఫ్లోలు, చెల్లింపు ప్రాసెసింగ్ మరియు ఆర్థిక విశ్లేషణల వరకు అన్ని వ్యాపార-సంబంధిత వ్యయాలను ట్రాక్ చేయడానికి మరియు నిర్వహించడానికి ఒక సమగ్ర గైడ్.",
    step1Title: "వ్యయ డాష్‌బోర్డ్ అవలోకనం",
    step1Intro: "వ్యయ డాష్‌బోర్డ్ మీ కంపెనీ అన్ని ఖర్చులను పర్యవేక్షించడానికి మీ కేంద్ర కేంద్రం. ఇది కీలక గణాంకాలు, ఇటీవలి వ్యయాల జాబితా మరియు అన్ని నిర్వహణ విధులకు ప్రాప్యతను అందిస్తుంది.",
    step2Title: "వ్యయాన్ని సృష్టించడం మరియు సమర్పించడం",
    step2Intro: "ఈ విభాగం మిమ్మల్ని కొత్త వ్యయాన్ని జోడించే ప్రక్రియ ద్వారా నడిపిస్తుంది, ఇందులో వివరాలను పూరించడం, వర్గాన్ని ఎంచుకోవడం మరియు ధృవీకరణ కోసం రసీదును జతచేయడం వంటివి ఉంటాయి.",
    step3Title: "వ్యయ ఆమోదం వర్క్‌ఫ్లో",
    step3Intro: "సమర్పించిన అన్ని వ్యయాలు ఆమోదం ప్రక్రియ ద్వారా వెళతాయి. అధీకృత నిర్వాహకులు వ్యయ క్లెయిమ్‌లను సమీక్షించవచ్చు, ఆమోదించవచ్చు లేదా తిరస్కరించవచ్చు, సరైన ఆర్థిక నియంత్రణలను నిర్ధారిస్తుంది.",
    step4Title: "వ్యయ వర్గాలను నిర్వహించడం",
    step4Intro: "సరైన ఆర్థిక రిపోర్టింగ్ మరియు విశ్లేషణ కోసం వ్యయాలను వర్గాలుగా నిర్వహించడం చాలా ముఖ్యం. మీ వ్యాపార అవసరాలకు సరిపోయేలా మీరు కస్టమ్ వ్యయ వర్గాలను సృష్టించవచ్చు, సవరించవచ్చు మరియు నిర్వహించవచ్చు.",
    step5Title: "వ్యయ విశ్లేషణలు",
    step5Intro: "విశ్లేషణల ట్యాబ్ మీ కంపెనీ ఖర్చు విధానాల గురించి విలువైన అంతర్దృష్టులను అందిస్తుంది, వ్యయ ఆదా కోసం ప్రాంతాలను గుర్తించడానికి మరియు మెరుగైన బడ్జెట్ నిర్వహణకు సహాయపడుతుంది.",
    nextStepsTitle: "వ్యయ నిర్వహణ పూర్తయింది!",
    nextStepsDescription: "మీరు ఇప్పుడు RetailOS వ్యయ నిర్వహణ వ్యవస్థను స్వాధీనం చేసుకున్నారు. ఇది సెటప్ గైడ్‌లోని చివరి కోర్ మాడ్యూల్. ఏదైనా విభాగాన్ని సమీక్షించడానికి మీరు ప్రధాన మాన్యువల్‌కు తిరిగి రావచ్చు.",
    nextStepsButton: "ప్రధాన మాన్యువల్‌కు తిరిగి వెళ్ళు",

    expenseDashboard: "వ్యయ డాష్‌బోర్డ్",
    dashboardDesc: "అన్ని కార్యాచరణ వ్యయాలు మరియు రీయింబర్స్‌మెంట్‌లను ట్రాక్ చేయండి మరియు నిర్వహించండి.",
    addExpense: "వ్యయాన్ని జోడించు",
    totalExpenses: "మొత్తం వ్యయాలు (30రోజులు)",
    pendingApproval: "ఆమోదం పెండింగ్‌లో ఉంది",
    totalPaid: "మొత్తం చెల్లించబడింది (30రోజులు)",
    overview: "అవలోకనం",
    categories: "వర్గాలు",
    analytics: "విశ్లేషణలు",
    recentExpenses: "ఇటీవలి వ్యయాలు",
    searchExpenses: "శీర్షిక లేదా గ్రహీత ద్వారా వ్యయాలను శోధించండి...",
    allStatuses: "అన్ని స్థితిలు",
    pending: "పెండింగ్‌లో ఉంది",
    approved: "ఆమోదించబడింది",
    paid: "చెల్లించబడింది",
    rejected: "తిరస్కరించబడింది",
    expense: "వ్యయం",
    category: "వర్గం",
    date: "తేదీ",
    amount: "మొత్తం",
    status: "స్థితి",
    actions: "చర్యలు",
    officeSupplies: "కార్యాలయ సామాగ్రి",
    travel: "ప్రయాణం",
    rent: "అద్దె",
    utilities: "యుటిలిటీలు",
    marketing: "మార్కెటింగ్",
    logistics: "లాజిస్టిక్స్",

    addNewExpense: "కొత్త వ్యయాన్ని జోడించు",
    expenseDetails: "క్రింద వ్యయం వివరాలను నమోదు చేయండి.",
    title: "శీర్షిక",
    expenseCategory: "వ్యయ వర్గం",
    selectCategory: "ఒక వర్గాన్ని ఎంచుకోండి",
    expenseDate: "వ్యయ తేదీ",
    vendorRecipient: "విక్రేత / గ్రహీత",
    descriptionField: "వివరణ",
    receipt: "రసీదు",
    uploadPrompt: "అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి లేదా డ్రాగ్ మరియు డ్రాప్ చేయండి",
    fileTypes: "PNG, JPG, లేదా PDF (గరిష్టం. 5MB)",
    saveExpense: "వ్యయాన్ని సేవ్ చేయండి",

    approvalModal: "వ్యయ ఆమోదం",
    reviewExpense: "వ్యయాన్ని సమీక్షించి ఆమోదించండి/తిరస్కరించండి",
    submittedBy: "సమర్పించిన వారు:",
    approve: "ఆమోదించండి",
    reject: "తిరస్కరించండి",

    expenseCategories: "వ్యయ వర్గాలు",
    addCategory: "వర్గాన్ని జోడించు",
    categoryName: "వర్గం పేరు",
    edit: "సవరించండి",
    delete: "తొలగించు",

    expenseAnalytics: "వ్యయ విశ్లేషణలు",
    expensesByCategory: "వర్గం ప్రకారం వ్యయాలు (గత 30 రోజులు)",
    monthlySpend: "నెలవారీ ఖర్చు",
    highestExpense: "అత్యధిక వ్యయం (30రోజులు)",
    avgExpenseValue: "సగటు వ్యయ విలువ",
  },
  ta: {
    pageTitle: "செலவு மேலாண்மை கையேடு",
    backToManual: "கையேட்டிற்குத் திரும்பு",
    description: "செலவு கோரிக்கைகளை உருவாக்குவது முதல் ஒப்புதல் பணிப்பாய்வுகள், கட்டண செயலாக்கம் மற்றும் நிதி பகுப்பாய்வு வரை அனைத்து வணிகம் தொடர்பான செலவுகளையும் கண்காணிப்பதற்கும் நிர்வகிப்பதற்கும் ஒரு விரிவான வழிகாட்டி.",
    step1Title: "செலவு டாஷ்போர்டு கண்ணோட்டம்",
    step1Intro: "செலவு டாஷ்போர்டு உங்கள் நிறுவனத்தின் அனைத்து செலவினங்களையும் கண்காணிப்பதற்கான உங்கள் மைய மையமாகும். இது முக்கிய புள்ளிவிவரங்கள், சமீபத்திய செலவுகளின் பட்டியல் மற்றும் அனைத்து மேலாண்மை செயல்பாடுகளுக்கான அணுகலை வழங்குகிறது.",
    step2Title: "ஒரு செலவை உருவாக்கி சமர்ப்பித்தல்",
    step2Intro: "இந்த பகுதி ஒரு புதிய செலவைச் சேர்க்கும் செயல்முறையின் மூலம் உங்களை அழைத்துச் செல்கிறது, இதில் விவரங்களை நிரப்புதல், ஒரு வகையைத் தேர்ந்தெடுப்பது மற்றும் சரிபார்ப்பதற்காக ஒரு ரசீதை இணைப்பது ஆகியவை அடங்கும்.",
    step3Title: "செலவு ஒப்புதல் பணிப்பாய்வு",
    step3Intro: "சமர்ப்பிக்கப்பட்ட அனைத்து செலவுகளும் ஒரு ஒப்புதல் செயல்முறைக்கு உட்படுகின்றன. அங்கீகரிக்கப்பட்ட மேலாளர்கள் செலவு கோரிக்கைகளை மதிப்பாய்வு செய்யலாம், அங்கீகரிக்கலாம் அல்லது நிராகரிக்கலாம், சரியான நிதி கட்டுப்பாடுகளை உறுதி செய்யலாம்.",
    step4Title: "செலவு வகைகளை நிர்வகித்தல்",
    step4Intro: "சரியான நிதி அறிக்கை மற்றும் பகுப்பாய்விற்கு செலவுகளை வகைகளாக ஒழுங்கமைப்பது மிகவும் முக்கியமானது. உங்கள் வணிகத் தேவைகளுக்கு ஏற்ப தனிப்பயன் செலவு வகைகளை உருவாக்கலாம், திருத்தலாம் மற்றும் நிர்வகிக்கலாம்.",
    step5Title: "செலவு பகுப்பாய்வு",
    step5Intro: "பகுப்பாய்வு தாவல் உங்கள் நிறுவனத்தின் செலவு முறைகள் பற்றிய மதிப்புமிக்க நுண்ணறிவுகளை வழங்குகிறது, செலவு சேமிப்புக்கான பகுதிகளை அடையாளம் காணவும் சிறந்த பட்ஜெட் நிர்வாகத்திற்கும் உதவுகிறது.",
    nextStepsTitle: "செலவு மேலாண்மை முடிந்தது!",
    nextStepsDescription: "நீங்கள் இப்போது RetailOS செலவு மேலாண்மை அமைப்பில் தேர்ச்சி பெற்றுள்ளீர்கள். இது அமைவு வழிகாட்டியில் இறுதி மைய தொகுதி ஆகும். எந்தவொரு பகுதியையும் மதிப்பாய்வு செய்ய நீங்கள் முக்கிய கையேட்டிற்கு திரும்பலாம்.",
    nextStepsButton: "முக்கிய கையேட்டிற்குத் திரும்பு",

    expenseDashboard: "செலவு டாஷ்போர்டு",
    dashboardDesc: "அனைத்து செயல்பாட்டு செலவுகள் மற்றும் திருப்பிச் செலுத்துதல்களைக் கண்காணித்து நிர்வகிக்கவும்.",
    addExpense: "செலவைச் சேர்",
    totalExpenses: "மொத்த செலவுகள் (30நாட்கள்)",
    pendingApproval: "ஒப்புதல் நிலுவையில் உள்ளது",
    totalPaid: "மொத்தம் செலுத்தப்பட்டது (30நாட்கள்)",
    overview: "கண்ணோட்டம்",
    categories: "வகைகள்",
    analytics: "பகுப்பாய்வு",
    recentExpenses: "சமீபத்திய செலவுகள்",
    searchExpenses: "தலைப்பு அல்லது பெறுநர் மூலம் செலவுகளைத் தேடுங்கள்...",
    allStatuses: "அனைத்து நிலைகளும்",
    pending: "நிலுவையில்",
    approved: "ஒப்புதல் அளிக்கப்பட்டது",
    paid: "செலுத்தப்பட்டது",
    rejected: "நிராகரிக்கப்பட்டது",
    expense: "செலவு",
    category: "வகை",
    date: "தேதி",
    amount: "தொகை",
    status: "நிலை",
    actions: "செயல்கள்",
    officeSupplies: "அலுவலகப் பொருட்கள்",
    travel: "பயணம்",
    rent: "வாடகை",
    utilities: "பயன்பாடுகள்",
    marketing: "சந்தைப்படுத்தல்",
    logistics: "தளவாடங்கள்",

    addNewExpense: "புதிய செலவைச் சேர்",
    expenseDetails: "கீழே செலவு விவரங்களை உள்ளிடவும்.",
    title: "தலைப்பு",
    expenseCategory: "செலவு வகை",
    selectCategory: "ஒரு வகையைத் தேர்ந்தெடுக்கவும்",
    expenseDate: "செலவு தேதி",
    vendorRecipient: "விற்பனையாளர் / பெறுநர்",
    descriptionField: "விளக்கம்",
    receipt: "ரசீது",
    uploadPrompt: "பதிவேற்ற கிளிக் செய்யவும் அல்லது இழுத்து விடவும்",
    fileTypes: "PNG, JPG, அல்லது PDF (அதிகபட்சம் 5MB)",
    saveExpense: "செலவைச் சேமி",

    approvalModal: "செலவு ஒப்புதல்",
    reviewExpense: "செலவை மதிப்பாய்வு செய்து அங்கீகரிக்கவும்/நிராகரிக்கவும்",
    submittedBy: "சமர்ப்பித்தவர்:",
    approve: "ஒப்புதல்",
    reject: "நிராகரி",

    expenseCategories: "செலவு வகைகள்",
    addCategory: "வகையைச் சேர்",
    categoryName: "வகை பெயர்",
    edit: "திருத்து",
    delete: "நீக்கு",

    expenseAnalytics: "செலவு பகுப்பாய்வு",
    expensesByCategory: "வகை வாரியாக செலவுகள் (கடைசி 30 நாட்கள்)",
    monthlySpend: "மாதாந்திர செலவு",
    highestExpense: "அதிகபட்ச செலவு (30நாட்கள்)",
    avgExpenseValue: "சராசரி செலவு மதிப்பு",
  },
  hi: {
    pageTitle: "व्यय प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "व्यय दावों के निर्माण से लेकर अनुमोदन वर्कफ़्लो, भुगतान प्रसंस्करण और वित्तीय विश्लेषण तक सभी व्यावसायिक-संबंधित व्ययों पर नज़र रखने और उनके प्रबंधन के लिए एक व्यापक गाइड।",
    step1Title: "व्यय डैशबोर्ड अवलोकन",
    step1Intro: "व्यय डैशबोर्ड आपकी कंपनी के सभी व्ययों की निगरानी के लिए आपका केंद्रीय केंद्र है। यह प्रमुख आँकड़े, हाल के खर्चों की सूची और सभी प्रबंधन कार्यों तक पहुँच प्रदान करता है।",
    step2Title: "व्यय बनाना और जमा करना",
    step2Intro: "यह अनुभाग आपको एक नया व्यय जोड़ने की प्रक्रिया के माध्यम से ले जाता है, जिसमें विवरण भरना, एक श्रेणी का चयन करना और सत्यापन के लिए एक रसीद संलग्न करना शामिल है।",
    step3Title: "व्यय अनुमोदन वर्कफ़्लो",
    step3Intro: "सभी प्रस्तुत व्यय एक अनुमोदन प्रक्रिया से गुजरते हैं। अधिकृत प्रबंधक व्यय दावों की समीक्षा, अनुमोदन या अस्वीकृति कर सकते हैं, जिससे उचित वित्तीय नियंत्रण सुनिश्चित होता है।",
    step4Title: "व्यय श्रेणियों का प्रबंधन",
    step4Intro: "सटीक वित्तीय रिपोर्टिंग और विश्लेषण के लिए व्ययों को श्रेणियों में व्यवस्थित करना महत्वपूर्ण है। आप अपनी व्यावसायिक आवश्यकताओं के अनुरूप कस्टम व्यय श्रेणियां बना, संपादित और प्रबंधित कर सकते हैं।",
    step5Title: "व्यय विश्लेषण",
    step5Intro: "विश्लेषण टैब आपकी कंपनी के खर्च पैटर्न में मूल्यवान अंतर्दृष्टि प्रदान करता है, जिससे आपको लागत बचत के क्षेत्रों की पहचान करने और बेहतर बजट प्रबंधन में मदद मिलती है।",
    nextStepsTitle: "व्यय प्रबंधन पूर्ण!",
    nextStepsDescription: "अब आपने RetailOS व्यय प्रबंधन प्रणाली में महारत हासिल कर ली है। यह सेटअप गाइड में अंतिम कोर मॉड्यूल है। आप किसी भी अनुभाग की समीक्षा के लिए मुख्य मैनुअल पर लौट सकते हैं।",
    nextStepsButton: "मुख्य मैनुअल पर लौटें",

    expenseDashboard: "व्यय डैशबोर्ड",
    dashboardDesc: "सभी परिचालन व्ययों और प्रतिपूर्ति पर नज़र रखें और उनका प्रबंधन करें।",
    addExpense: "व्यय जोड़ें",
    totalExpenses: "कुल व्यय (30 दिन)",
    pendingApproval: "अनुमोदन लंबित",
    totalPaid: "कुल भुगतान (30 दिन)",
    overview: "अवलोकन",
    categories: "श्रेणियाँ",
    analytics: "विश्लेषण",
    recentExpenses: "हाल के व्यय",
    searchExpenses: "शीर्षक या प्राप्तकर्ता द्वारा व्यय खोजें...",
    allStatuses: "सभी स्थितियाँ",
    pending: "लंबित",
    approved: "अनुमोदित",
    paid: "भुगतान किया गया",
    rejected: "अस्वीकृत",
    expense: "व्यय",
    category: "श्रेणी",
    date: "दिनांक",
    amount: "राशि",
    status: "स्थिति",
    actions: "कार्रवाइयाँ",
    officeSupplies: "कार्यालय की आपूर्ति",
    travel: "यात्रा",
    rent: "किराया",
    utilities: "सुविधाएं",
    marketing: "विपणन",
    logistics: "लॉजिस्टिक्स",

    addNewExpense: "नया व्यय जोड़ें",
    expenseDetails: "नीचे व्यय का विवरण दर्ज करें।",
    title: "शीर्षक",
    expenseCategory: "व्यय श्रेणी",
    selectCategory: "एक श्रेणी चुनें",
    expenseDate: "व्यय की तारीख",
    vendorRecipient: "विक्रेता / प्राप्तकर्ता",
    descriptionField: "विवरण",
    receipt: "रसीद",
    uploadPrompt: "अपलोड करने के लिए क्लिक करें या खींचें और छोड़ें",
    fileTypes: "PNG, JPG, या PDF (अधिकतम 5MB)",
    saveExpense: "व्यय सहेजें",

    approvalModal: "व्यय अनुमोदन",
    reviewExpense: "के लिए व्यय की समीक्षा करें और उसे स्वीकृत/अस्वीकृत करें",
    submittedBy: "द्वारा प्रस्तुत:",
    approve: "स्वीकृत करें",
    reject: "अस्वीकार करें",

    expenseCategories: "व्यय श्रेणियाँ",
    addCategory: "श्रेणी जोड़ें",
    categoryName: "श्रेणी का नाम",
    edit: "संपादित करें",
    delete: "हटाएं",

    expenseAnalytics: "व्यय विश्लेषण",
    expensesByCategory: "श्रेणी के अनुसार व्यय (पिछले 30 दिन)",
    monthlySpend: "मासिक खर्च",
    highestExpense: "उच्चतम व्यय (30 दिन)",
    avgExpenseValue: "औसत व्यय मूल्य",
  },
  ml: {
    pageTitle: "ചെലവ് മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "ചെലവ് ക്ലെയിമുകൾ സൃഷ്ടിക്കുന്നത് മുതൽ അംഗീകാര വർക്ക്ഫ്ലോകൾ, പേയ്മെന്റ് പ്രോസസ്സിംഗ്, സാമ്പത്തിക വിശകലനം എന്നിവ വരെയുള്ള എല്ലാ ബിസിനസ്സ് സംബന്ധമായ ചെലവുകളും ട്രാക്ക് ചെയ്യുന്നതിനും കൈകാര്യം ചെയ്യുന്നതിനുമുള്ള ഒരു സമഗ്രമായ ഗൈഡ്.",
    step1Title: "ചെലവ് ഡാഷ്ബോർഡ് അവലോകനം",
    step1Intro: "നിങ്ങളുടെ കമ്പനിയുടെ എല്ലാ ചെലവുകളും നിരീക്ഷിക്കുന്നതിനുള്ള നിങ്ങളുടെ കേന്ദ്രമാണ് ചെലവ് ഡാഷ്ബോർഡ്. ഇത് പ്രധാന സ്ഥിതിവിവരക്കണക്കുകൾ, സമീപകാല ചെലവുകളുടെ ഒരു ലിസ്റ്റ്, എല്ലാ മാനേജ്മെന്റ് പ്രവർത്തനങ്ങളിലേക്കും പ്രവേശനം നൽകുന്നു.",
    step2Title: "ഒരു ചെലവ് സൃഷ്ടിക്കുകയും സമർപ്പിക്കുകയും ചെയ്യുന്നു",
    step2Intro: "വിശദാംശങ്ങൾ പൂരിപ്പിക്കുക, ഒരു വിഭാഗം തിരഞ്ഞെടുക്കുക, സ്ഥിരീകരണത്തിനായി ഒരു രസീത് അറ്റാച്ചുചെയ്യുക എന്നിവയുൾപ്പെടെ ഒരു പുതിയ ചെലവ് ചേർക്കുന്ന പ്രക്രിയയിലൂടെ ഈ വിഭാഗം നിങ്ങളെ കൊണ്ടുപോകുന്നു.",
    step3Title: "ചെലവ് അംഗീകാര വർക്ക്ഫ്ലോ",
    step3Intro: "സമർപ്പിച്ച എല്ലാ ചെലവുകളും ഒരു അംഗീകാര പ്രക്രിയയിലൂടെ കടന്നുപോകുന്നു. ശരിയായ സാമ്പത്തിക നിയന്ത്രണങ്ങൾ ഉറപ്പാക്കിക്കൊണ്ട്, അംഗീകൃത മാനേജർമാർക്ക് ചെലവ് ക്ലെയിമുകൾ അവലോകനം ചെയ്യാനും അംഗീകരിക്കാനും നിരസിക്കാനും കഴിയും.",
    step4Title: "ചെലവ് വിഭാഗങ്ങൾ കൈകാര്യം ചെയ്യുന്നു",
    step4Intro: "കൃത്യമായ സാമ്പത്തിക റിപ്പോർട്ടിംഗിനും വിശകലനത്തിനും ചെലവുകൾ വിഭാഗങ്ങളായി സംഘടിപ്പിക്കുന്നത് നിർണായകമാണ്. നിങ്ങളുടെ ബിസിനസ്സ് ആവശ്യങ്ങൾക്ക് അനുയോജ്യമായ രീതിയിൽ ഇഷ്ടാനുസൃത ചെലവ് വിഭാഗങ്ങൾ സൃഷ്ടിക്കാനും എഡിറ്റുചെയ്യാനും കൈകാര്യം ചെയ്യാനും നിങ്ങൾക്ക് കഴിയും.",
    step5Title: "ചെലവ് വിശകലനം",
    step5Intro: "വിശകലന ടാബ് നിങ്ങളുടെ കമ്പനിയുടെ ചെലവ് രീതികളെക്കുറിച്ചുള്ള വിലയേറിയ ഉൾക്കാഴ്ചകൾ നൽകുന്നു, ചെലവ് ലാഭിക്കാനുള്ള മേഖലകൾ തിരിച്ചറിയാനും മികച്ച ബജറ്റ് മാനേജ്മെന്റിനും സഹായിക്കുന്നു.",
    nextStepsTitle: "ചെലവ് മാനേജ്മെന്റ് പൂർത്തിയായി!",
    nextStepsDescription: "നിങ്ങൾ ഇപ്പോൾ RetailOS ചെലവ് മാനേജ്മെന്റ് സിസ്റ്റത്തിൽ പ്രാവീണ്യം നേടിയിരിക്കുന്നു. ഇത് സജ്ജീകരണ ഗൈഡിലെ അവസാന കോർ മൊഡ്യൂളാണ്. ഏത് വിഭാഗവും അവലോകനം ചെയ്യാൻ നിങ്ങൾക്ക് പ്രധാന മാനുവലിലേക്ക് മടങ്ങാം.",
    nextStepsButton: "പ്രധാന മാനുവലിലേക്ക് മടങ്ങുക",

    expenseDashboard: "ചെലവ് ഡാഷ്ബോർഡ്",
    dashboardDesc: "എല്ലാ പ്രവർത്തന ചെലവുകളും റീഇംബേഴ്സ്മെന്റുകളും ട്രാക്ക് ചെയ്യുകയും നിയന്ത്രിക്കുകയും ചെയ്യുക.",
    addExpense: "ചെലവ് ചേർക്കുക",
    totalExpenses: "ആകെ ചെലവുകൾ (30 ദിവസം)",
    pendingApproval: "അംഗീകാരം തീർപ്പുകൽപ്പിച്ചിട്ടില്ല",
    totalPaid: "ആകെ അടച്ചത് (30 ദിവസം)",
    overview: "അവലോകനം",
    categories: "വിഭാഗങ്ങൾ",
    analytics: "വിശകലനം",
    recentExpenses: "സമീപകാല ചെലവുകൾ",
    searchExpenses: "ശീർഷകം അല്ലെങ്കിൽ സ്വീകർത്താവ് ഉപയോഗിച്ച് ചെലവുകൾ തിരയുക...",
    allStatuses: "എല്ലാ സ്റ്റാറ്റസുകളും",
    pending: "തീരുമാനമാകാത്തത്",
    approved: "അംഗീകരിച്ചു",
    paid: "അടച്ചു",
    rejected: "നിരസിച്ചു",
    expense: "ചെലവ്",
    category: "വിഭാഗം",
    date: "തീയതി",
    amount: "തുക",
    status: "നില",
    actions: "പ്രവർത്തനങ്ങൾ",
    officeSupplies: "ഓഫീസ് സാധനങ്ങൾ",
    travel: "യാത്ര",
    rent: "വാടക",
    utilities: "സൗകര്യങ്ങൾ",
    marketing: "മാർക്കറ്റിംഗ്",
    logistics: "ലോജിസ്റ്റിക്സ്",

    addNewExpense: "പുതിയ ചെലവ് ചേർക്കുക",
    expenseDetails: "ചുവടെ ചെലവിന്റെ വിശദാംശങ്ങൾ നൽകുക.",
    title: "തലക്കെട്ട്",
    expenseCategory: "ചെലവ് വിഭാഗം",
    selectCategory: "ഒരു വിഭാഗം തിരഞ്ഞെടുക്കുക",
    expenseDate: "ചെലവ് തീയതി",
    vendorRecipient: "വെണ്ടർ / സ്വീകർത്താവ്",
    descriptionField: "വിവരണം",
    receipt: "രസീത്",
    uploadPrompt: "അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്കുചെയ്യുക അല്ലെങ്കിൽ വലിച്ചിടുക",
    fileTypes: "PNG, JPG, അല്ലെങ്കിൽ PDF (പരമാവധി 5MB)",
    saveExpense: "ചെലവ് സംരക്ഷിക്കുക",

    approvalModal: "ചെലവ് അംഗീകാരം",
    reviewExpense: "ചെലവ് അവലോകനം ചെയ്ത് അംഗീകരിക്കുക/നിരസിക്കുക",
    submittedBy: "സമർപ്പിച്ചത്:",
    approve: "അംഗീകരിക്കുക",
    reject: "നിരസിക്കുക",

    expenseCategories: "ചെലവ് വിഭാഗങ്ങൾ",
    addCategory: "വിഭാഗം ചേർക്കുക",
    categoryName: "വിഭാഗത്തിന്റെ പേര്",
    edit: "എഡിറ്റുചെയ്യുക",
    delete: "ഇല്ലാതാക്കുക",

    expenseAnalytics: "ചെലവ് വിശകലനം",
    expensesByCategory: "വിഭാഗം അനുസരിച്ചുള്ള ചെലവുകൾ (കഴിഞ്ഞ 30 ദിവസം)",
    monthlySpend: "പ്രതിമാസ ചെലവ്",
    highestExpense: "ഏറ്റവും ഉയർന്ന ചെലവ് (30 ദിവസം)",
    avgExpenseValue: "ശരാശരി ചെലവ് മൂല്യം",
  }
};

export default function ManualExpenses() {
  const [language] = useManualLanguage();
  
  const t = (key, variables = {}) => {
    let translation = translations[language]?.[key] || translations['en']?.[key] || key;
    // Replace placeholders like {count}
    for (const varName in variables) {
      translation = translation.replace(new RegExp(`\\{${varName}\\}`, 'g'), variables[varName]);
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
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-stone-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-10">
              {/* Step 1: Dashboard Overview */}
              <Step number="1" title={t('step1Title')}>
                <p>{t('step1Intro')}</p>
                <Screenshot title={t('expenseDashboard')}>
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                          <DollarSign className="w-6 h-6 text-stone-600" /> {t('expenseDashboard')}
                        </h2>
                        <p className="text-slate-500 mt-1">{t('dashboardDesc')}</p>
                      </div>
                      <Button size="sm"><Plus className="w-4 h-4 mr-2" />{t('addExpense')}</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card><CardHeader><CardTitle className="text-sm font-medium text-slate-500">{t('totalExpenses')}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">₹1,25,400</p></CardContent></Card>
                      <Card><CardHeader><CardTitle className="text-sm font-medium text-slate-500">{t('pendingApproval')}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold text-yellow-600">3</p></CardContent></Card>
                      <Card><CardHeader><CardTitle className="text-sm font-medium text-slate-500">{t('totalPaid')}</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold text-green-600">₹98,600</p></CardContent></Card>
                    </div>
                    <div className="border rounded-lg bg-white">
                       <div className="flex space-x-1 bg-slate-100 p-1 rounded-t-lg border-b">
                        <button className="px-3 py-1.5 bg-white rounded-md shadow-sm text-sm font-medium flex items-center gap-2"><List className="w-4 h-4"/>{t('overview')}</button>
                        <button className="px-3 py-1.5 text-slate-600 text-sm font-medium flex items-center gap-2"><List className="w-4 h-4"/>{t('categories')}</button>
                        <button className="px-3 py-1.5 text-slate-600 text-sm font-medium flex items-center gap-2"><BarChart3 className="w-4 h-4"/>{t('analytics')}</button>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-3">{t('recentExpenses')}</h3>
                         <div className="overflow-x-auto border rounded-lg">
                           <table className="min-w-full text-sm">
                              <thead className="bg-slate-50"><tr className="border-b"><th className="p-2 text-left">{t('expense')}</th><th className="p-2 text-left">{t('category')}</th><th className="p-2 text-left">{t('date')}</th><th className="p-2 text-right">{t('amount')}</th><th className="p-2 text-center">{t('status')}</th><th className="p-2 text-right">{t('actions')}</th></tr></thead>
                              <tbody>
                                <tr className="border-b"><td className="p-2">{t('officeSupplies')}</td><td className="p-2">{t('utilities')}</td><td className="p-2">20/07/2024</td><td className="p-2 text-right">₹5,200</td><td className="p-2 text-center"><Badge className="bg-green-100 text-green-800">{t('paid')}</Badge></td><td className="p-2 flex justify-end gap-1"><Button variant="ghost" size="xs"><Eye/></Button></td></tr>
                                <tr className="border-b"><td className="p-2">{t('travel')}</td><td className="p-2">{t('travel')}</td><td className="p-2">18/07/2024</td><td className="p-2 text-right">₹12,000</td><td className="p-2 text-center"><Badge className="bg-yellow-100 text-yellow-800">{t('pending')}</Badge></td><td className="p-2 flex justify-end gap-1"><Button variant="ghost" size="xs"><Eye/></Button><Button variant="ghost" size="xs"><Edit/></Button></td></tr>
                                <tr className="border-b"><td className="p-2">{t('rent')}</td><td className="p-2">{t('rent')}</td><td className="p-2">05/07/2024</td><td className="p-2 text-right">₹50,000</td><td className="p-2 text-center"><Badge className="bg-red-100 text-red-800">{t('rejected')}</Badge></td><td className="p-2 flex justify-end gap-1"><Button variant="ghost" size="xs"><Eye/></Button></td></tr>
                              </tbody>
                           </table>
                         </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              {/* Step 2: Creating an Expense */}
              <Step number="2" title={t('step2Title')}>
                <p>{t('step2Intro')}</p>
                <Screenshot title={t('addNewExpense')}>
                   <div className="max-w-xl mx-auto p-6 bg-white border rounded-lg shadow-xl">
                      <h3 className="text-xl font-bold">{t('addNewExpense')}</h3>
                      <p className="text-sm text-slate-500 mt-1">{t('expenseDetails')}</p>
                      <div className="space-y-4 mt-6">
                        <div><label className="text-sm font-medium">{t('title')}</label><Input placeholder={t('officeSupplies')} /></div>
                        <div className="grid grid-cols-2 gap-4">
                           <div><label className="text-sm font-medium">{t('amount')}</label><Input placeholder="5200.00" /></div>
                           <div><label className="text-sm font-medium">{t('expenseCategory')}</label><select className="w-full border rounded-md p-2 bg-white"><option>{t('selectCategory')}</option><option selected>{t('utilities')}</option></select></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="text-sm font-medium">{t('expenseDate')}</label><Input type="date" /></div>
                            <div><label className="text-sm font-medium">{t('vendorRecipient')}</label><Input placeholder="Local Stationers Inc." /></div>
                        </div>
                        <div><label className="text-sm font-medium">{t('descriptionField')}</label><textarea className="w-full border rounded-md p-2" rows="3"></textarea></div>
                        <div>
                            <label className="text-sm font-medium">{t('receipt')}</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                               <div className="space-y-1 text-center"><Upload className="mx-auto h-12 w-12 text-slate-400"/><p className="text-sm text-slate-600">{t('uploadPrompt')}</p><p className="text-xs text-slate-500">{t('fileTypes')}</p></div>
                            </div>
                        </div>
                        <div className="flex justify-end"><Button className="bg-stone-600 hover:bg-stone-700">{t('saveExpense')}</Button></div>
                      </div>
                   </div>
                </Screenshot>
              </Step>

              {/* Step 3: Approval Workflow */}
              <Step number="3" title={t('step3Title')}>
                <p>{t('step3Intro')}</p>
                <Screenshot title={t('approvalModal')}>
                     <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-xl">
                        <h3 className="text-lg font-bold">{t('approvalModal')}</h3>
                        <p className="text-sm text-slate-500 mt-1">{t('reviewExpense')} <strong>{t('travel')}</strong></p>
                        <Card className="my-4"><CardContent className="p-3"><p className="text-sm"><strong>{t('amount')}:</strong> ₹12,000</p><p className="text-sm"><strong>{t('submittedBy')}:</strong> sales.manager@example.com</p><p className="text-sm"><strong>{t('descriptionField')}:</strong> Trip to attend conference in Delhi.</p></CardContent></Card>
                        <div className="flex justify-end gap-2"><Button variant="destructive">{t('reject')}</Button><Button className="bg-green-600 hover:bg-green-700">{t('approve')}</Button></div>
                     </div>
                </Screenshot>
              </Step>

              {/* Step 4: Category Management */}
              <Step number="4" title={t('step4Title')}>
                <p>{t('step4Intro')}</p>
                <Screenshot title={t('expenseCategories')}>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center">
                         <h3 className="font-semibold text-lg">{t('expenseCategories')}</h3>
                         <Button size="sm"><Plus className="w-4 h-4 mr-2"/>{t('addCategory')}</Button>
                      </div>
                      <div className="border rounded-lg divide-y">
                         <div className="flex justify-between items-center p-3"><p className="font-medium">{t('logistics')}</p><div className="flex gap-1"><Button variant="ghost" size="xs"><Edit/></Button><Button variant="ghost" size="xs" className="text-red-500"><Trash2/></Button></div></div>
                         <div className="flex justify-between items-center p-3"><p className="font-medium">{t('marketing')}</p><div className="flex gap-1"><Button variant="ghost" size="xs"><Edit/></Button><Button variant="ghost" size="xs" className="text-red-500"><Trash2/></Button></div></div>
                         <div className="flex justify-between items-center p-3"><p className="font-medium">{t('utilities')}</p><div className="flex gap-1"><Button variant="ghost" size="xs"><Edit/></Button><Button variant="ghost" size="xs" className="text-red-500"><Trash2/></Button></div></div>
                      </div>
                   </div>
                </Screenshot>
              </Step>

              {/* Step 5: Analytics */}
              <Step number="5" title={t('step5Title')}>
                <p>{t('step5Intro')}</p>
                <Screenshot title={t('expenseAnalytics')}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="md:col-span-2 border rounded-lg p-4 bg-white">
                        <h4 className="font-semibold">{t('expensesByCategory')}</h4>
                        <div className="h-64 bg-gray-200 mt-2 rounded flex items-center justify-center"><p className="text-xs text-slate-500">Bar Chart</p></div>
                     </div>
                     <div className="space-y-4">
                        <Card><CardHeader><CardTitle className="text-sm font-medium">{t('monthlySpend')}</CardTitle></CardHeader><CardContent><p className="text-xl font-bold">₹1,25,400</p></CardContent></Card>
                        <Card><CardHeader><CardTitle className="text-sm font-medium">{t('highestExpense')}</CardTitle></CardHeader><CardContent><p className="text-xl font-bold">₹50,000</p><p className="text-xs text-slate-500">{t('rent')}</p></CardContent></Card>
                        <Card><CardHeader><CardTitle className="text-sm font-medium">{t('avgExpenseValue')}</CardTitle></CardHeader><CardContent><p className="text-xl font-bold">₹8,957</p></CardContent></Card>
                     </div>
                  </div>
                </Screenshot>
              </Step>
              
              <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-blue-700 mb-4">{t('nextStepsDescription')}</p>
                <Link to={createPageUrl('Manual')} className="inline-block">
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