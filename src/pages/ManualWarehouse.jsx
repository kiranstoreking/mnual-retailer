
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Warehouse, MapPin, Grid, Package, AlertTriangle, CheckCircle, Plus, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import useManualLanguage from '../components/shared/useManualLanguage';
import LanguageSelector from '../components/shared/LanguageSelector';

const translations = {
  en: {
    pageTitle: "Warehouse Management Manual",
    backToManual: "Back to Manual",
    description: "Configure your physical warehouse layout for efficient inventory tracking, optimize product placement, and manage bin locations to streamline your operations.",
    step1Title: "Understanding the Warehouse Location System",
    step1P1: "RetailOS uses a hierarchical Rack-Shelf-Bin system for precise location management. This system allows you to track exactly where each product is stored in your warehouse, making picking and inventory management highly efficient.",
    step1Li1: "Racks: Main storage structures labeled A, B, C, etc.",
    step1Li2: "Shelves: Horizontal levels within each rack, numbered 1, 2, 3, etc.",
    step1Li3: "Bins: Individual storage compartments, numbered 01, 02, 03, etc.",
    step1P2_part1: "A complete location would look like ",
    step1P2_part2: ", meaning Rack A, Shelf 2, Bin 5.",
    step1H6A: "A. Visual Warehouse Layout Example",
    screenshot1Title: "Warehouse Layout Structure",
    screenshot1H3: "Physical Warehouse Layout",
    screenshot1P: "Rack-Shelf-Bin hierarchy visualization",
    rackA: "RACK A",
    rackB: "RACK B",
    shelf3: "Shelf 3",
    empty: "Empty",
    shelf2: "Shelf 2",
    available: "Available",
    shelf1: "Shelf 1",
    nearlyFull: "Nearly Full",
    legend: "Legend",
    emptyRange: "Empty (0-25%)",
    availableRange: "Available (26-80%)",
    nearlyFullRange: "Nearly Full (81-95%)",
    atCapacityRange: "At Capacity (96-100%)",
    atCapacityBadge: "At Capacity", // For the badge itself

    step2Title: "Accessing Warehouse Location Dashboard",
    step2P1: "Navigate to the Warehouse Location section from the main sidebar. This dashboard provides a visual overview of your entire warehouse layout and current stock distribution.",
    step2H6A: "A. Dashboard Overview",
    screenshot2Title: "Warehouse Location Dashboard Interface",
    screenshot2H2: "Warehouse Location Management",
    screenshot2P: "Visual overview of your warehouse storage locations",
    addLocation: "Add Location",
    layoutView: "Layout View",
    totalBins: "Total Bins",
    occupiedBins: "Occupied Bins",
    nearlyFullStat: "Nearly Full",
    availableStat: "Available",
    warehouseLayout: "Warehouse Layout",
    availableBadge: "Available",
    nearlyFullBadge: "Nearly Full",
    rackC: "Rack C",

    step2H6B: "B. Understanding Color Coding System",
    screenshot3Title: "Bin Status Color Guide",
    capacityStatusColors: "Capacity Status Colors",
    emptyBin: "Empty (0-25%)",
    readyForNewStock: "Ready for new stock allocation",
    availableBin: "Available (26-80%)",
    optimalStockLevel: "Optimal stock level, can accept more",
    nearlyFullBin: "Nearly Full (81-95%)",
    limitedSpaceRemaining: "Limited space remaining",
    atCapacityBin: "At Capacity (96-100%)",
    noAdditionalSpace: "No additional space available",
    operationalGuidelines: "Operational Guidelines",
    bestPractices: "🎯 Best Practices",
    bpLi1: "• Keep bins at 70-85% capacity for optimal efficiency",
    bpLi2: "• Reserve some bins for quick stock movements",
    bpLi3: "• Group similar products in nearby bins",
    warnings: "⚠️ Warnings",
    wLi1: "• Yellow bins need attention for reorganization",
    wLi2: "• Red bins block new stock allocation",
    wLi3: "• Empty bins may indicate demand issues",

    step3Title: "Creating and Managing Bin Locations",
    step3P1: "Adding new bin locations is essential when expanding your warehouse or optimizing storage efficiency. The system guides you through the process while maintaining the hierarchical structure.",
    step3H6A: "A. Add New Location Form",
    screenshot4Title: "Create New Warehouse Location",
    createNewLocation: "Create New Location",
    defineNewStorage: "Define a new storage bin within your warehouse hierarchy.",
    rackId: "Rack ID *",
    rackIdPlaceholder: "e.g., A, B, C",
    rackIdHint: "Use letters A-Z for rack identification",
    shelfNumber: "Shelf Number *",
    shelfNumberPlaceholder: "e.g., 1, 2, 3",
    shelfNumberHint: "Shelf levels from bottom (1) to top",
    binNumber: "Bin Number *",
    binNumberPlaceholder: "e.g., 01, 02, 03",
    binNumberHint: "Use 2-digit format (01, 02, etc.)",
    binCapacity: "Bin Capacity (units) *",
    binCapacityPlaceholder: "e.g., 100, 150, 200",
    binCapacityHint: "Maximum units this bin can hold",
    locationType: "Location Type",
    standardStorage: "Standard Storage",
    coldStorage: "Cold Storage",
    highSecurity: "High Security",
    quarantine: "Quarantine",
    locationPreview: "Location Preview",
    generatedLocation: "Generated Location: A-2-05",
    locationDetails: "Rack A, Shelf 2, Bin 5 • Capacity: 150 units",
    cancel: "Cancel",
    createLocation: "Create Location",

    step3H6B: "B. Location Validation and Constraints",
    screenshot5Title: "Validation Rules and Error Handling",
    validLocationConfig: "Valid Location Configuration",
    locationAvailable: "Location A-2-05 is available and follows naming conventions.",
    vlcLi1: "✓ Rack ID format is correct (single letter)",
    vlcLi2: "✓ Shelf number is within range (1-10)",
    vlcLi3: "✓ Bin number follows 2-digit format",
    vlcLi4: "✓ No duplicate location exists",
    locationCreationErrors: "Location Creation Errors",
    lceLi1: "• Location B-3-02 already exists in the system",
    lceLi2: "• Rack ID must be a single letter (A-Z)",
    lceLi3: "• Bin capacity must be greater than 0",
    lceLi4: "• Shelf number cannot exceed 10 levels",
    namingBestPractices: "Naming Best Practices",
    nbpLi1: "• Use logical rack naming (A-Z) based on physical layout",
    nbpLi2: "• Number shelves from bottom (1) to top for consistency",
    nbpLi3: "• Reserve some letters/numbers for future expansion",
    nbpLi4: "• Consider product categories when assigning racks",

    step3H6C: "C. Bulk Location Creation",
    screenshot6Title: "Bulk Create Multiple Locations",
    bulkCreateLocations: "Bulk Create Locations",
    createMultipleBins: "Create multiple bin locations at once for new racks or shelves.",
    rackRange: "Rack Range",
    from: "From",
    fromPlaceholder: "From (e.g., A)",
    fromNumberPlaceholder: "From (e.g., 1)",
    to: "to",
    toPlaceholder: "To (e.g., C)",
    toNumberPlaceholder: "To (e.g., 3)",
    shelfRange: "Shelf Range",
    binsPerShelf: "Bins per Shelf",
    binsPerShelfPlaceholder: "e.g., 5",
    defaultCapacity: "Default Capacity",
    defaultCapacityPlaceholder: "e.g., 100",
    preview: "Preview: Locations to Create",
    totalLocations: "Total: 45 locations",
    andMore: "... and 25 more",
    createLocations: "Create 45 Locations",

    step4Title: "Product Allocation and Movement",
    step4P1: "Once your warehouse locations are set up, you need to understand how products are allocated to bins and how to move stock between locations efficiently.",
    step4H6A: "A. Automatic Product Allocation",
    screenshot7Title: "Auto-Allocation System",
    autoAllocationFeature: "Auto-Allocation Feature",
    autoAllocationDesc: "When receiving new stock, RetailOS can automatically suggest optimal bin locations based on:",
    aAfLi1: "• Available bin capacity",
    aAfLi2: "• Product category grouping",
    aAfLi3: "• Picking efficiency (popular items in accessible locations)",
    aAfLi4: "• FIFO compliance for expiry management",
    allocationSuggestions: "Allocation Suggestions for: Organic Rice 1kg (50 units)",
    recommended: " (Recommended)",
    bestMatch: "Best Match",
    alternative: " (Alternative)",
    goodOption: "Good Option",
    availableSugg: " (Available)",
    lastResort: "Last Resort",
    manualSelection: "Manual Selection",
    acceptRecommendation: "Accept Recommendation",

    step4H6B: "B. Manual Stock Movement",
    screenshot8Title: "Move Stock Between Locations",
    moveStock: "Move Stock",
    transferProducts: "Transfer products between warehouse locations for optimization or reorganization.",
    sourceLocation: "Source Location",
    product: "Product:",
    currentStock: "Current Stock:",
    binCapacityLabel: "Bin Capacity:",
    quantityToMove: "Quantity to Move",
    enterQuantity: "Enter quantity",
    destinationLocation: "Destination Location",
    selectDestination: "Select Destination",
    searchLocation: "Search location (e.g., A-1-04)",
    movementSummary: "Movement Summary",
    moving: "Moving:",
    fromTo: "From: A-2-03 → To: A-1-04",
    reason: "Reason: Optimize shelf space utilization",
    cancelMovement: "Cancel Movement",
    confirmMovement: "Confirm Stock Movement",

    nextStepsTitle: "Warehouse Setup Complete!",
    nextStepsDescription: "Your warehouse is now organized and ready for efficient operations. Next, learn how to add products and create attractive deals for your customers.",
    nextStepsButton: "Continue to Product & Content Management",
    organicRiceSection: "Organic Rice Section",
    organicBasmatiRice: "Organic Basmati Rice 1kg",
    sameProductCategory: "Same product category • 45 units available space",
    similarProductsNearby: "Similar products nearby • 60 units available space",
    emptyBinHigherShelf: "Empty bin • Higher shelf level",
    fortyUnitsAvailable: "40 units available space",
    eightyFiveUnitsAvailable: "85 units available space",
  },
  kn: {
    pageTitle: "ವೇರ್‌ಹೌಸ್ ನಿರ್ವಹಣೆ ಕೈಪಿಡಿ",
    backToManual: "ಕೈಪಿಡಿಗೆ ಹಿಂತಿರುಗಿ",
    description: "ದಕ್ಷ ದಾಸ್ತಾನು ಟ್ರ್ಯಾಕಿಂಗ್‌ಗಾಗಿ ನಿಮ್ಮ ಭೌತಿಕ ಗೋದಾಮಿನ ವಿನ್ಯಾಸವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ, ಉತ್ಪನ್ನ ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಅನ್ನು ಅತ್ಯುತ್ತಮಗೊಳಿಸಿ, ಮತ್ತು ನಿಮ್ಮ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಸುಗಮಗೊಳಿಸಲು ಬಿನ್ ಸ್ಥಳಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    step1Title: "ವೇರ್‌ಹೌಸ್ ಸ್ಥಳ ವ್ಯವಸ್ಥೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    step1P1: "RetailOS ನಿಖರವಾದ ಸ್ಥಳ ನಿರ್ವಹಣೆಗಾಗಿ ಶ್ರೇಣೀಕೃತ ರ್ಯಾಕ್-ಶೆಲ್ಫ್-ಬಿನ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಳಸುತ್ತದೆ. ಈ ವ್ಯವಸ್ಥೆಯು ನಿಮ್ಮ ಗೋದಾಮಿನಲ್ಲಿ ಪ್ರತಿ ಉತ್ಪನ್ನವನ್ನು ಎಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ ಎಂಬುದನ್ನು ನಿಖರವಾಗಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ನಿಮಗೆ ಅನುಮತಿಸುತ್ತದೆ, ಇದು ಆಯ್ದ ಮತ್ತು ದಾಸ್ತಾನು ನಿರ್ವಹಣೆಯನ್ನು ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಮಾಡುತ್ತದೆ.",
    step1Li1: "ರ್ಯಾಕ್‌ಗಳು: A, B, C, ಇತ್ಯಾದಿ ಎಂದು ಲೇಬಲ್ ಮಾಡಲಾದ ಮುಖ್ಯ ಶೇಖರಣಾ ರಚನೆಗಳು.",
    step1Li2: "ಶೆಲ್ಫ್‌ಗಳು: ಪ್ರತಿ ರ್ಯಾಕ್‌ನಲ್ಲಿನ ಅಡ್ಡ ಮಟ್ಟಗಳು, 1, 2, 3, ಇತ್ಯಾದಿ ಎಂದು ಸಂಖ್ಯೆ ಮಾಡಲಾಗಿದೆ.",
    step1Li3: "ಬಿನ್‌ಗಳು: ವೈಯಕ್ತಿಕ ಶೇಖರಣಾ ವಿಭಾಗಗಳು, 01, 02, 03, ಇತ್ಯಾದಿ ಎಂದು ಸಂಖ್ಯೆ ಮಾಡಲಾಗಿದೆ.",
    step1P2_part1: "ಸಂಪೂರ್ಣ ಸ್ಥಳವು ",
    step1P2_part2: " ಎಂದು ಕಾಣುತ್ತದೆ, ಅಂದರೆ ರ್ಯಾಕ್ A, ಶೆಲ್ಫ್ 2, ಬಿನ್ 5.",
    step1H6A: "A. ದೃಶ್ಯ ವೇರ್‌ಹೌಸ್ ವಿನ್ಯಾಸ ಉದಾಹರಣೆ",
    screenshot1Title: "ವೇರ್‌ಹೌಸ್ ವಿನ್ಯಾಸ ರಚನೆ",
    screenshot1H3: "ಭೌತಿಕ ವೇರ್‌ಹೌಸ್ ವಿನ್ಯಾಸ",
    screenshot1P: "ರ್ಯಾಕ್-ಶೆಲ್ಫ್-ಬಿನ್ ಶ್ರೇಣಿಬದ್ಧ ದೃಶ್ಯೀಕರಣ",
    rackA: "ರ್ಯಾಕ್ A",
    rackB: "ರ್ಯಾಕ್ B",
    shelf3: "ಶೆಲ್ಫ್ 3",
    empty: "ಖಾಲಿ",
    shelf2: "ಶೆಲ್ಫ್ 2",
    available: "ಲಭ್ಯವಿದೆ",
    shelf1: "ಶೆಲ್ಫ್ 1",
    nearlyFull: "ಬಹುತೇಕ ಭರ್ತಿ",
    legend: "ದಂತಕಥೆ",
    emptyRange: "ಖಾಲಿ (0-25%)",
    availableRange: "ಲಭ್ಯವಿದೆ (26-80%)",
    nearlyFullRange: "ಬಹುತೇಕ ಭರ್ತಿ (81-95%)",
    atCapacityRange: "ಸಾಮರ್ಥ್ಯದಲ್ಲಿ (96-100%)",
    atCapacityBadge: "ಸಾಮರ್ಥ್ಯದಲ್ಲಿ",

    step2Title: "ವೇರ್‌ಹೌಸ್ ಸ್ಥಳ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸುವುದು",
    step2P1: "ಮುಖ್ಯ ಸೈಡ್‌ಬಾರ್‌ನಿಂದ ವೇರ್‌ಹೌಸ್ ಸ್ಥಳ ವಿಭಾಗಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ. ಈ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನಿಮ್ಮ ಸಂಪೂರ್ಣ ವೇರ್‌ಹೌಸ್ ವಿನ್ಯಾಸ ಮತ್ತು ಪ್ರಸ್ತುತ ಸ್ಟಾಕ್ ವಿತರಣೆಯ ದೃಶ್ಯ ಅವಲೋಕನವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    step2H6A: "A. ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅವಲೋಕನ",
    screenshot2Title: "ವೇರ್‌ಹೌಸ್ ಸ್ಥಳ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಇಂಟರ್‌ಫೇಸ್",
    screenshot2H2: "ವೇರ್‌ಹೌಸ್ ಸ್ಥಳ ನಿರ್ವಹಣೆ",
    screenshot2P: "ನಿಮ್ಮ ವೇರ್‌ಹೌಸ್ ಶೇಖರಣಾ ಸ್ಥಳಗಳ ದೃಶ್ಯ ಅವಲೋಕನ",
    addLocation: "ಸ್ಥಳ ಸೇರಿಸಿ",
    layoutView: "ವಿನ್ಯಾಸ ವೀಕ್ಷಣೆ",
    totalBins: "ಒಟ್ಟು ಬಿನ್‌ಗಳು",
    occupiedBins: "ಆಕ್ರಮಿಸಿಕೊಂಡಿರುವ ಬಿನ್‌ಗಳು",
    nearlyFullStat: "ಬಹುತೇಕ ಭರ್ತಿ",
    availableStat: "ಲಭ್ಯವಿದೆ",
    warehouseLayout: "ವೇರ್‌ಹೌಸ್ ವಿನ್ಯಾಸ",
    availableBadge: "ಲಭ್ಯವಿದೆ",
    nearlyFullBadge: "ಬಹುತೇಕ ಭರ್ತಿ",
    rackC: "ರ್ಯಾಕ್ C",

    step2H6B: "B. ಬಣ್ಣದ ಕೋಡಿಂಗ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    screenshot3Title: "ಬಿನ್ ಸ್ಥಿತಿ ಬಣ್ಣ ಮಾರ್ಗದರ್ಶಿ",
    capacityStatusColors: "ಸಾಮರ್ಥ್ಯ ಸ್ಥಿತಿ ಬಣ್ಣಗಳು",
    emptyBin: "ಖಾಲಿ (0-25%)",
    readyForNewStock: "ಹೊಸ ಸ್ಟಾಕ್ ಹಂಚಿಕೆಗೆ ಸಿದ್ಧವಾಗಿದೆ",
    availableBin: "ಲಭ್ಯವಿದೆ (26-80%)",
    optimalStockLevel: "ಉತ್ತಮ ಸ್ಟಾಕ್ ಮಟ್ಟ, ಹೆಚ್ಚು ಸ್ವೀಕರಿಸಬಹುದು",
    nearlyFullBin: "ಬಹುತೇಕ ಭರ್ತಿ (81-95%)",
    limitedSpaceRemaining: "ಸೀಮಿತ ಸ್ಥಳ ಉಳಿದಿದೆ",
    atCapacityBin: "ಸಾಮರ್ಥ್ಯದಲ್ಲಿ (96-100%)",
    noAdditionalSpace: "ಹೆಚ್ಚುವರಿ ಸ್ಥಳ ಲಭ್ಯವಿಲ್ಲ",
    operationalGuidelines: "ಕಾರ್ಯಾಚರಣೆಯ ಮಾರ್ಗಸೂಚಿಗಳು",
    bestPractices: "🎯 ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸಗಳು",
    bpLi1: "• ಅತ್ಯುತ್ತಮ ದಕ್ಷತೆಗಾಗಿ ಬಿನ್‌ಗಳನ್ನು 70-85% ಸಾಮರ್ಥ್ಯದಲ್ಲಿ ಇರಿಸಿ",
    bpLi2: "• ತ್ವರಿತ ಸ್ಟಾಕ್ ಚಲನೆಗಳಿಗಾಗಿ ಕೆಲವು ಬಿನ್‌ಗಳನ್ನು ಕಾಯ್ದಿರಿಸಿ",
    bpLi3: "• ಒಂದೇ ರೀತಿಯ ಉತ್ಪನ್ನಗಳನ್ನು ಹತ್ತಿರದ ಬಿನ್‌ಗಳಲ್ಲಿ ಗುಂಪು ಮಾಡಿ",
    warnings: "⚠️ ಎಚ್ಚರಿಕೆಗಳು",
    wLi1: "• ಹಳದಿ ಬಿನ್‌ಗಳಿಗೆ ಮರುಸಂಘಟನೆಗೆ ಗಮನ ಬೇಕು",
    wLi2: "• ಕೆಂಪು ಬಿನ್‌ಗಳು ಹೊಸ ಸ್ಟಾಕ್ ಹಂಚಿಕೆಯನ್ನು ನಿರ್ಬಂಧಿಸುತ್ತವೆ",
    wLi3: "• ಖಾಲಿ ಬಿನ್‌ಗಳು ಬೇಡಿಕೆಯ ಸಮಸ್ಯೆಗಳನ್ನು ಸೂಚಿಸಬಹುದು",

    step3Title: "ಬಿನ್ ಸ್ಥಳಗಳನ್ನು ರಚಿಸುವುದು ಮತ್ತು ನಿರ್ವಹಿಸುವುದು",
    step3P1: "ನಿಮ್ಮ ವೇರ್‌ಹೌಸ್ ಅನ್ನು ವಿಸ್ತರಿಸುವಾಗ ಅಥವಾ ಶೇಖರಣಾ ದಕ್ಷತೆಯನ್ನು ಉತ್ತಮಗೊಳಿಸುವಾಗ ಹೊಸ ಬಿನ್ ಸ್ಥಳಗಳನ್ನು ಸೇರಿಸುವುದು ಅತ್ಯಗತ್ಯ. ಶ್ರೇಣಿಬದ್ಧ ರಚನೆಯನ್ನು ನಿರ್ವಹಿಸುವಾಗ ವ್ಯವಸ್ಥೆಯು ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.",
    step3H6A: "A. ಹೊಸ ಸ್ಥಳ ಫಾರ್ಮ್ ಸೇರಿಸಿ",
    screenshot4Title: "ಹೊಸ ವೇರ್‌ಹೌಸ್ ಸ್ಥಳವನ್ನು ರಚಿಸಿ",
    createNewLocation: "ಹೊಸ ಸ್ಥಳವನ್ನು ರಚಿಸಿ",
    defineNewStorage: "ನಿಮ್ಮ ವೇರ್‌ಹೌಸ್ ಶ್ರೇಣಿಯೊಳಗೆ ಹೊಸ ಶೇಖರಣಾ ಬಿನ್ ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿ.",
    rackId: "ರ್ಯಾಕ್ ID *",
    rackIdPlaceholder: "ಉದಾ, A, B, C",
    rackIdHint: "ರ್ಯಾಕ್ ಗುರುತಿಸುವಿಕೆಗಾಗಿ A-Z ಅಕ್ಷರಗಳನ್ನು ಬಳಸಿ",
    shelfNumber: "ಶೆಲ್ಫ್ ಸಂಖ್ಯೆ *",
    shelfNumberPlaceholder: "ಉದಾ, 1, 2, 3",
    shelfNumberHint: "ಕೆಳಗಿನಿಂದ (1) ಮೇಲಕ್ಕೆ ಶೆಲ್ಫ್ ಮಟ್ಟಗಳು",
    binNumber: "ಬಿನ್ ಸಂಖ್ಯೆ *",
    binNumberPlaceholder: "ಉದಾ, 01, 02, 03",
    binNumberHint: "2-ಅಂಕಿಯ ಸ್ವರೂಪವನ್ನು ಬಳಸಿ (01, 02, ಇತ್ಯಾದಿ)",
    binCapacity: "ಬಿನ್ ಸಾಮರ್ಥ್ಯ (ಘಟಕಗಳು) *",
    binCapacityPlaceholder: "ಉದಾ, 100, 150, 200",
    binCapacityHint: "ಈ ಬಿನ್ ಹಿಡಿದಿಡಬಹುದಾದ ಗರಿಷ್ಠ ಘಟಕಗಳು",
    locationType: "ಸ್ಥಳ ಪ್ರಕಾರ",
    standardStorage: "ಪ್ರಮಾಣಿತ ಸಂಗ್ರಹ",
    coldStorage: "ಶೀತಲ ಸಂಗ್ರಹ",
    highSecurity: "ಅತ್ಯಂತ ಸುರಕ್ಷಿತ",
    quarantine: "ಕ್ವಾರಂಟೈನ್",
    locationPreview: "ಸ್ಥಳ ಪೂರ್ವವೀಕ್ಷಣೆ",
    generatedLocation: "ರಚಿಸಿದ ಸ್ಥಳ: A-2-05",
    locationDetails: "ರ್ಯಾಕ್ A, ಶೆಲ್ಫ್ 2, ಬಿನ್ 5 • ಸಾಮರ್ಥ್ಯ: 150 ಘಟಕಗಳು",
    cancel: "ರದ್ದುಮಾಡಿ",
    createLocation: "ಸ್ಥಳವನ್ನು ರಚಿಸಿ",

    step3H6B: "B. ಸ್ಥಳ ಮೌಲ್ಯೀಕರಣ ಮತ್ತು ನಿರ್ಬಂಧಗಳು",
    screenshot5Title: "ಮೌಲ್ಯೀಕರಣ ನಿಯಮಗಳು ಮತ್ತು ದೋಷ ನಿರ್ವಹಣೆ",
    validLocationConfig: "ಮಾನ್ಯ ಸ್ಥಳ ಸಂರಚನೆ",
    locationAvailable: "ಸ್ಥಳ A-2-05 ಲಭ್ಯವಿದೆ ಮತ್ತು ಹೆಸರಿಸುವ ಸಂಪ್ರದಾಯಗಳನ್ನು ಅನುಸರಿಸುತ್ತದೆ.",
    vlcLi1: "✓ ರ್ಯಾಕ್ ID ಸ್ವರೂಪ ಸರಿಯಾಗಿದೆ (ಒಂದೇ ಅಕ್ಷರ)",
    vlcLi2: "✓ ಶೆಲ್ಫ್ ಸಂಖ್ಯೆ ವ್ಯಾಪ್ತಿಯಲ್ಲಿದೆ (1-10)",
    vlcLi3: "✓ ಬಿನ್ ಸಂಖ್ಯೆ 2-ಅಂಕಿಯ ಸ್ವರೂಪವನ್ನು ಅನುಸರಿಸುತ್ತದೆ",
    vlcLi4: "✓ ಯಾವುದೇ ನಕಲಿ ಸ್ಥಳ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ",
    locationCreationErrors: "ಸ್ಥಳ ರಚನೆ ದೋಷಗಳು",
    lceLi1: "• ಸ್ಥಳ B-3-02 ಈಗಾಗಲೇ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ",
    lceLi2: "• ರ್ಯಾಕ್ ID ಒಂದೇ ಅಕ್ಷರವಾಗಿರಬೇಕು (A-Z)",
    lceLi3: "• ಬಿನ್ ಸಾಮರ್ಥ್ಯ 0 ಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿರಬೇಕು",
    lceLi4: "• ಶೆಲ್ಫ್ ಸಂಖ್ಯೆ 10 ಮಟ್ಟಗಳನ್ನು ಮೀರಬಾರದು",
    namingBestPractices: "ಹೆಸರಿಸುವ ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸಗಳು",
    nbpLi1: "• ಭೌತಿಕ ವಿನ್ಯಾಸದ ಆಧಾರದ ಮೇಲೆ ತಾರ್ಕಿಕ ರ್ಯಾಕ್ ಹೆಸರಿಸುವಿಕೆಯನ್ನು (A-Z) ಬಳಸಿ",
    nbpLi2: "• ಸ್ಥಿರತೆಗಾಗಿ ಕೆಳಗಿನಿಂದ (1) ಮೇಲಕ್ಕೆ ಶೆಲ್ಫ್‌ಗಳನ್ನು ಸಂಖ್ಯೆ ಮಾಡಿ",
    nbpLi3: "• ಭವಿಷ್ಯದ ವಿಸ್ತರಣೆಗಾಗಿ ಕೆಲವು ಅಕ್ಷರಗಳು/ಸಂಖ್ಯೆಗಳನ್ನು ಕಾಯ್ದಿರಿಸಿ",
    nbpLi4: "• ರ್ಯಾಕ್‌ಗಳನ್ನು ನಿಯೋಜಿಸುವಾಗ ಉತ್ಪನ್ನ ವರ್ಗಗಳನ್ನು ಪರಿಗಣಿಸಿ",

    step3H6C: "C. ಬೃಹತ್ ಸ್ಥಳ ರಚನೆ",
    screenshot6Title: "ಅನೇಕ ಸ್ಥಳಗಳನ್ನು ಬೃಹತ್ ಪ್ರಮಾಣದಲ್ಲಿ ರಚಿಸಿ",
    bulkCreateLocations: "ಬೃಹತ್ ಪ್ರಮಾಣದಲ್ಲಿ ಸ್ಥಳಗಳನ್ನು ರಚಿಸಿ",
    createMultipleBins: "ಹೊಸ ರ್ಯಾಕ್‌ಗಳು ಅಥವಾ ಶೆಲ್ಫ್‌ಗಳಿಗಾಗಿ ಏಕಕಾಲದಲ್ಲಿ ಅನೇಕ ಬಿನ್ ಸ್ಥಳಗಳನ್ನು ರಚಿಸಿ.",
    rackRange: "ರ್ಯಾಕ್ ವ್ಯಾಪ್ತಿ",
    from: "ಇಂದ",
    fromPlaceholder: "ಇಂದ (ಉದಾ, A)",
    fromNumberPlaceholder: "ಇಂದ (ಉದಾ, 1)",
    to: "ಗೆ",
    toPlaceholder: "ಗೆ (ಉದಾ, C)",
    toNumberPlaceholder: "ಗೆ (ಉದಾ, 3)",
    shelfRange: "ಶೆಲ್ಫ್ ವ್ಯಾಪ್ತಿ",
    binsPerShelf: "ಪ್ರತಿ ಶೆಲ್ಫ್‌ಗೆ ಬಿನ್‌ಗಳು",
    binsPerShelfPlaceholder: "ಉದಾ, 5",
    defaultCapacity: "ಡೀಫಾಲ್ಟ್ ಸಾಮರ್ಥ್ಯ",
    defaultCapacityPlaceholder: "ಉದಾ, 100",
    preview: "ಪೂರ್ವವೀಕ್ಷಣೆ: ರಚಿಸಬೇಕಾದ ಸ್ಥಳಗಳು",
    totalLocations: "ಒಟ್ಟು: 45 ಸ್ಥಳಗಳು",
    andMore: "... ಮತ್ತು 25 ಹೆಚ್ಚು",
    createLocations: "45 ಸ್ಥಳಗಳನ್ನು ರಚಿಸಿ",

    step4Title: "ಉತ್ಪನ್ನ ಹಂಚಿಕೆ ಮತ್ತು ಚಲನೆ",
    step4P1: "ನಿಮ್ಮ ವೇರ್‌ಹೌಸ್ ಸ್ಥಳಗಳನ್ನು ಸ್ಥಾಪಿಸಿದ ನಂತರ, ಉತ್ಪನ್ನಗಳನ್ನು ಬಿನ್‌ಗಳಿಗೆ ಹೇಗೆ ಹಂಚಲಾಗುತ್ತದೆ ಮತ್ತು ಸ್ಥಳಗಳ ನಡುವೆ ಸ್ಟಾಕ್ ಅನ್ನು ಹೇಗೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಸರಿಸುವುದು ಎಂಬುದನ್ನು ನೀವು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕು.",
    step4H6A: "A. ಸ್ವಯಂಚಾಲಿತ ಉತ್ಪನ್ನ ಹಂಚಿಕೆ",
    screenshot7Title: "ಸ್ವಯಂ-ಹಂಚಿಕೆ ವ್ಯವಸ್ಥೆ",
    autoAllocationFeature: "ಸ್ವಯಂ-ಹಂಚಿಕೆ ವೈಶಿಷ್ಟ್ಯ",
    autoAllocationDesc: "ಹೊಸ ಸ್ಟಾಕ್ ಸ್ವೀಕರಿಸುವಾಗ, RetailOS ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅತ್ಯುತ್ತಮ ಬಿನ್ ಸ್ಥಳಗಳನ್ನು ಸೂಚಿಸಬಹುದು, ಇದು ಆಧರಿಸಿದೆ:",
    aAfLi1: "• ಲಭ್ಯವಿರುವ ಬಿನ್ ಸಾಮರ್ಥ್ಯ",
    aAfLi2: "• ಉತ್ಪನ್ನ ವರ್ಗ ಗುಂಪನ್ನು ಮಾಡುವುದು",
    aAfLi3: "• ಆಯ್ದ ದಕ್ಷತೆ (ಸುಲಭವಾಗಿ ಪ್ರವೇಶಿಸಬಹುದಾದ ಸ್ಥಳಗಳಲ್ಲಿ ಜನಪ್ರಿಯ ವಸ್ತುಗಳು)",
    aAfLi4: "• ಅವಧಿ ಮುಗಿಯುವ ನಿರ್ವಹಣೆಗಾಗಿ FIFO ಅನುಸರಣೆ",
    allocationSuggestions: "ಹಂಚಿಕೆ ಸಲಹೆಗಳು: ಸಾವಯವ ಅಕ್ಕಿ 1kg (50 ಘಟಕಗಳು)",
    recommended: " (ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ)",
    bestMatch: "ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆ",
    alternative: " (ಪರ್ಯಾಯ)",
    goodOption: "ಉತ್ತಮ ಆಯ್ಕೆ",
    availableSugg: " (ಲಭ್ಯವಿದೆ)",
    lastResort: "ಕೊನೆಯ ಉಪಾಯ",
    manualSelection: "ಹಸ್ತಚಾಲಿತ ಆಯ್ಕೆ",
    acceptRecommendation: "ಶಿಫಾರಸು ಸ್ವೀಕರಿಸಿ",

    step4H6B: "B. ಹಸ್ತಚಾಲಿತ ಸ್ಟಾಕ್ ಚಲನೆ",
    screenshot8Title: "ಸ್ಥಳಗಳ ನಡುವೆ ಸ್ಟಾಕ್ ಸರಿಸಿ",
    moveStock: "ಸ್ಟಾಕ್ ಸರಿಸಿ",
    transferProducts: "ಉತ್ತಮಗೊಳಿಸುವಿಕೆ ಅಥವಾ ಮರುಸಂಘಟನೆಗಾಗಿ ವೇರ್‌ಹೌಸ್ ಸ್ಥಳಗಳ ನಡುವೆ ಉತ್ಪನ್ನಗಳನ್ನು ವರ್ಗಾಯಿಸಿ.",
    sourceLocation: "ಮೂಲ ಸ್ಥಳ",
    product: "ಉತ್ಪನ್ನ:",
    currentStock: "ಪ್ರಸ್ತುತ ಸ್ಟಾಕ್:",
    binCapacityLabel: "ಬಿನ್ ಸಾಮರ್ಥ್ಯ:",
    quantityToMove: "ಸರಿಸಬೇಕಾದ ಪ್ರಮಾಣ",
    enterQuantity: "ಪ್ರಮಾಣ ನಮೂದಿಸಿ",
    destinationLocation: "ಗಮ್ಯಸ್ಥಾನ ಸ್ಥಳ",
    selectDestination: "ಗಮ್ಯಸ್ಥಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    searchLocation: "ಸ್ಥಳವನ್ನು ಹುಡುಕಿ (ಉದಾ, A-1-04)",
    movementSummary: "ಚಲನೆಯ ಸಾರಾಂಶ",
    moving: "ಚಲಿಸಲಾಗುತ್ತಿದೆ:",
    fromTo: "ಇಂದ: A-2-03 → ಗೆ: A-1-04",
    reason: "ಕಾರಣ: ಶೆಲ್ಫ್ ಸ್ಥಳ ಬಳಕೆಯನ್ನು ಉತ್ತಮಗೊಳಿಸಿ",
    cancelMovement: "ಚಲನೆಯನ್ನು ರದ್ದುಮಾಡಿ",
    confirmMovement: "ಸ್ಟಾಕ್ ಚಲನೆಯನ್ನು ದೃಢೀಕರಿಸಿ",

    nextStepsTitle: "ವೇರ್‌ಹೌಸ್ ಸೆಟಪ್ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    nextStepsDescription: "ನಿಮ್ಮ ಗೋದಾಮು ಈಗ ಸಂಘಟಿತವಾಗಿದೆ ಮತ್ತು ದಕ್ಷ ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಸಿದ್ಧವಾಗಿದೆ. ಮುಂದೆ, ಉತ್ಪನ್ನಗಳನ್ನು ಸೇರಿಸುವುದು ಮತ್ತು ನಿಮ್ಮ ಗ್ರಾಹಕರಿಗೆ ಆಕರ್ಷಕ ಡೀಲ್‌ಗಳನ್ನು ರಚಿಸುವುದು ಹೇಗೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.",
    nextStepsButton: "ಉತ್ಪನ್ನ ಮತ್ತು ವಿಷಯ ನಿರ್ವಹಣೆಗೆ ಮುಂದುವರಿಯಿರಿ",
    organicRiceSection: "ಸಾವಯವ ಅಕ್ಕಿ ವಿಭಾಗ",
    organicBasmatiRice: "ಸಾವಯವ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ 1kg",
    sameProductCategory: "ಒಂದೇ ಉತ್ಪನ್ನ ವರ್ಗ • 45 ಘಟಕಗಳು ಲಭ್ಯವಿರುವ ಸ್ಥಳ",
    similarProductsNearby: "ಹತ್ತಿರದ ಒಂದೇ ರೀತಿಯ ಉತ್ಪನ್ನಗಳು • 60 ಘಟಕಗಳು ಲಭ್ಯವಿರುವ ಸ್ಥಳ",
    emptyBinHigherShelf: "ಖಾಲಿ ಬಿನ್ • ಹೆಚ್ಚಿನ ಶೆಲ್ಫ್ ಮಟ್ಟ",
    fortyUnitsAvailable: "40 ಘಟಕಗಳು ಲಭ್ಯವಿರುವ ಸ್ಥಳ",
    eightyFiveUnitsAvailable: "85 ಘಟಕಗಳು ಲಭ್ಯವಿರುವ ಸ್ಥಳ",
  },
  te: {
    pageTitle: "గిడ్డంగి నిర్వహణ మాన్యువల్",
    backToManual: "మాన్యువల్‌కు తిరిగి వెళ్ళు",
    description: "ర్యాక్-షెల్ఫ్-బిన్ సిస్టమ్‌ను ఉపయోగించి సరైన ఇన్వెంటరీ ట్రాకింగ్ మరియు సమర్థవంతమైన ఆర్డర్ నెరవేర్చడం కోసం మీ భౌతిక గిడ్డంగి స్థానాలను ఎలా సెటప్ చేయాలో మరియు నిర్వహించాలో తెలుసుకోండి.",
    step1Title: "గిడ్డంగి స్థాన వ్యవస్థను అర్థం చేసుకోవడం",
    step1P1: "ఖచ్చితమైన స్థాన నిర్వహణ కోసం రిటైల్OS ఒక క్రమానుగత ర్యాక్-షెల్ఫ్-బిన్ సిస్టమ్‌ను ఉపయోగిస్తుంది. ఈ వ్యవస్థ మీ గిడ్డంగిలో ప్రతి ఉత్పత్తి ఎక్కడ నిల్వ చేయబడిందో ఖచ్చితంగా ట్రాక్ చేయడానికి మిమ్మల్ని అనుమతిస్తుంది, ఇది ఎంపిక మరియు ఇన్వెంటరీ నిర్వహణను అత్యంత సమర్థవంతంగా చేస్తుంది.",
    step1Li1: "ర్యాక్‌లు: A, B, C, మొదలైనవిగా లేబుల్ చేయబడిన ప్రధాన నిల్వ నిర్మాణాలు.",
    step1Li2: "షెల్ఫ్‌లు: ప్రతి ర్యాక్‌లో క్షితిజ సమాంతర స్థాయిలు, 1, 2, 3, మొదలైనవిగా సంఖ్య చేయబడ్డాయి.",
    step1Li3: "బిన్‌లు: వ్యక్తిగత నిల్వ కంపార్ట్‌మెంట్‌లు, 01, 02, 03, మొదలైనవిగా సంఖ్య చేయబడ్డాయి.",
    step1P2_part1: "పూర్తి స్థానం ",
    step1P2_part2: " లాగా ఉంటుంది, అంటే ర్యాక్ A, షెల్ఫ్ 2, బిన్ 5.",
    step1H6A: "A. విజువల్ గిడ్డంగి లేఅవుట్ ఉదాహరణ",
    screenshot1Title: "గిడ్డంగి లేఅవుట్ నిర్మాణం",
    screenshot1H3: "భౌతిక గిడ్డంగి లేఅవుట్",
    screenshot1P: "ర్యాక్-షెల్ఫ్-బిన్ శ్రేణి దృశ్యమానం",
    rackA: "ర్యాక్ A",
    rackB: "ర్యాక్ B",
    shelf3: "షెల్ఫ్ 3",
    empty: "ఖాళీ",
    shelf2: "షెల్ఫ్ 2",
    available: "అందుబాటులో ఉంది",
    shelf1: "షెల్ఫ్ 1",
    nearlyFull: "దాదాపు నిండి ఉంది",
    legend: "లెజెండ్",
    emptyRange: "ఖాళీ (0-25%)",
    availableRange: "అందుబాటులో ఉంది (26-80%)",
    nearlyFullRange: "దాదాపు నిండి ఉంది (81-95%)",
    atCapacityRange: "సామర్థ్యం వద్ద (96-100%)",
    atCapacityBadge: "సామర్థ్యం వద్ద",

    step2Title: "గిడ్డంగి స్థాన డాష్‌బోర్డ్‌ను యాక్సెస్ చేయడం",
    step2P1: "ప్రధాన సైడ్‌బార్ నుండి గిడ్డంగి స్థాన విభాగానికి వెళ్ళండి. ఈ డాష్‌బోర్డ్ మీ మొత్తం గిడ్డంగి లేఅవుట్ మరియు ప్రస్తుత స్టాక్ పంపిణీ యొక్క దృశ్య స్థూలదృష్టిని అందిస్తుంది.",
    step2H6A: "A. డాష్‌బోర్డ్ అవలోకనం",
    screenshot2Title: "గిడ్డంగి స్థాన డాష్‌బోర్డ్ ఇంటర్‌ఫేస్",
    screenshot2H2: "గిడ్డంగి స్థాన నిర్వహణ",
    screenshot2P: "మీ గిడ్డంగి నిల్వ స్థానాల దృశ్య స్థూలదృష్టి",
    addLocation: "స్థానాన్ని జోడించు",
    layoutView: "లేఅవుట్ వీక్షణ",
    totalBins: "మొత్తం బిన్‌లు",
    occupiedBins: "ఆక్రమిత బిన్‌లు",
    nearlyFullStat: "దాదాపు నిండి ఉంది",
    availableStat: "అందుబాటులో ఉంది",
    warehouseLayout: "గిడ్డంగి లేఅవుట్",
    availableBadge: "అందుబాటులో ఉంది",
    nearlyFullBadge: "దాదాపు నిండి ఉంది",
    rackC: "ర్యాక్ C",

    step2H6B: "B. కలర్ కోడింగ్ సిస్టమ్‌ను అర్థం చేసుకోవడం",
    screenshot3Title: "బిన్ స్థితి రంగు గైడ్",
    capacityStatusColors: "సామర్థ్య స్థితి రంగులు",
    emptyBin: "ఖాళీ (0-25%)",
    readyForNewStock: "కొత్త స్టాక్ కేటాయింపునకు సిద్ధంగా ఉంది",
    availableBin: "అందుబాటులో ఉంది (26-80%)",
    optimalStockLevel: "అత్యుత్తమ స్టాక్ స్థాయి, ఎక్కువ స్వీకరించవచ్చు",
    nearlyFullBin: "దాదాపు నిండి ఉంది (81-95%)",
    limitedSpaceRemaining: "పరిమిత స్థలం మిగిలి ఉంది",
    atCapacityBin: "సామర్థ్యం వద్ద (96-100%)",
    noAdditionalSpace: "అదనపు స్థలం అందుబాటులో లేదు",
    operationalGuidelines: "కార్యాచరణ మార్గదర్శకాలు",
    bestPractices: "🎯 ఉత్తమ అభ్యాసాలు",
    bpLi1: "• సరైన సామర్థ్యం కోసం బిన్‌లను 70-85% సామర్థ్యం వద్ద ఉంచండి",
    bpLi2: "• త్వరిత స్టాక్ కదలికల కోసం కొన్ని బిన్‌లను రిజర్వ్ చేయండి",
    bpLi3: "• ఒకే రకమైన ఉత్పత్తులను సమీప బిన్‌లలో సమూహపరచండి",
    warnings: "⚠️ హెచ్చరికలు",
    wLi1: "• పసుపు బిన్‌లకు పునర్వ్యవస్థీకరణ కోసం శ్రద్ధ అవసరం",
    wLi2: "• ఎరుపు బిన్‌లు కొత్త స్టాక్ కేటాయింపును నిరోధిస్తాయి",
    wLi3: "• ఖాళీ బిన్‌లు డిమాండ్ సమస్యలను సూచించవచ్చు",

    step3Title: "బిన్ స్థానాలను సృష్టించడం మరియు నిర్వహించడం",
    step3P1: "మీ గిడ్డంగిని విస్తరించినప్పుడు లేదా నిల్వ సామర్థ్యాన్ని ఆప్టిమైజ్ చేసినప్పుడు కొత్త బిన్ స్థానాలను జోడించడం అవసరం. క్రమానుగత నిర్మాణాన్ని నిర్వహించేటప్పుడు సిస్టమ్ ప్రక్రియ ద్వారా మీకు మార్గనిర్దేశం చేస్తుంది.",
    step3H6A: "A. కొత్త స్థానం ఫారం జోడించండి",
    screenshot4Title: "కొత్త గిడ్డంగి స్థానాన్ని సృష్టించండి",
    createNewLocation: "కొత్త స్థానాన్ని సృష్టించండి",
    defineNewStorage: "మీ గిడ్డంగి శ్రేణిలో కొత్త నిల్వ బిన్‌ను నిర్వచించండి.",
    rackId: "ర్యాక్ ID *",
    rackIdPlaceholder: "ఉదా, A, B, C",
    rackIdHint: "ర్యాక్ గుర్తింపు కోసం A-Z అక్షరాలను ఉపయోగించండి",
    shelfNumber: "షెల్ఫ్ సంఖ్య *",
    shelfNumberPlaceholder: "ఉదా, 1, 2, 3",
    shelfNumberHint: "దిగువ నుండి (1) పైకి షెల్ఫ్ స్థాయిలు",
    binNumber: "బిన్ సంఖ్య *",
    binNumberPlaceholder: "ఉదా, 01, 02, 03",
    binNumberHint: "2-అంకెల ఆకృతిని ఉపయోగించండి (01, 02, మొదలైనవి)",
    binCapacity: "బిన్ సామర్థ్యం (యూనిట్లు) *",
    binCapacityPlaceholder: "ఉదా, 100, 150, 200",
    binCapacityHint: "ఈ బిన్ నిల్వ చేయగల గరిష్ట యూనిట్లు",
    locationType: "స్థాన రకం",
    standardStorage: "ప్రామాణిక నిల్వ",
    coldStorage: "శీతల నిల్వ",
    highSecurity: "అధిక భద్రత",
    quarantine: "క్వారంటైన్",
    locationPreview: "స్థాన ప్రివ్యూ",
    generatedLocation: "ఉత్పత్తి చేయబడిన స్థానం: A-2-05",
    locationDetails: "ర్యాక్ A, షెల్ఫ్ 2, బిన్ 5 • సామర్థ్యం: 150 యూనిట్లు",
    cancel: "రద్దు చేయి",
    createLocation: "స్థానాన్ని సృష్టించు",

    step3H6B: "B. స్థాన ధృవీకరణ మరియు పరిమితులు",
    screenshot5Title: "ధృవీకరణ నియమాలు మరియు ఎర్రర్ హ్యాండ్లింగ్",
    validLocationConfig: "చెల్లుబాటు అయ్యే స్థాన కాన్ఫిగరేషన్",
    locationAvailable: "స్థానం A-2-05 అందుబాటులో ఉంది మరియు నామకరణ సంప్రదాయాలను అనుసరిస్తుంది.",
    vlcLi1: "✓ ర్యాక్ ID ఆకృతి సరైనది (ఒక అక్షరం)",
    vlcLi2: "✓ షెల్ఫ్ సంఖ్య పరిధిలో ఉంది (1-10)",
    vlcLi3: "✓ బిన్ సంఖ్య 2-అంకెల ఆకృతిని అనుసరిస్తుంది",
    vlcLi4: "✓ నకిలీ స్థానం లేదు",
    locationCreationErrors: "స్థాన సృష్టి లోపాలు",
    lceLi1: "• స్థానం B-3-02 ఇప్పటికే సిస్టమ్‌లో ఉంది",
    lceLi2: "• ర్యాక్ ID ఒకే అక్షరం (A-Z) అయి ఉండాలి",
    lceLi3: "• బిన్ సామర్థ్యం 0 కంటే ఎక్కువగా ఉండాలి",
    lceLi4: "• షెల్ఫ్ సంఖ్య 10 స్థాయిలను మించకూడదు",
    namingBestPractices: "పేరు పెట్టే ఉత్తమ పద్ధతులు",
    nbpLi1: "• భౌతిక లేఅవుట్ ఆధారంగా తార్కిక ర్యాక్ నామకరణాన్ని (A-Z) ఉపయోగించండి",
    nbpLi2: "• స్థిరత్వం కోసం దిగువ నుండి (1) పైకి షెల్ఫ్‌లను సంఖ్య చేయండి",
    nbpLi3: "• భవిష్యత్ విస్తరణೆಗಾಗಿ ಕೆಲವು ಅಕ್ಷరాలు/ಸಂಖ್ಯೆಗಳನ್ನು రిజర్వ్ చేయండి",
    nbpLi4: "• ర్యాక్‌లను కేటాయించేటప్పుడు ఉత్పత్తి వర్గాలను పరిగణించండి",

    step3H6C: "C. బల్క్ స్థాన సృష్టి",
    screenshot6Title: "బహుళ స్థానాలను బల్క్‌లో సృష్టించండి",
    bulkCreateLocations: "బల్క్‌లో స్థానాలను సృష్టించండి",
    createMultipleBins: "కొత్త ర్యాక్‌లు లేదా షెల్ఫ్‌ల కోసం ఒకేసారి బహుళ బిన్ స్థానాలను సృష్టించండి.",
    rackRange: "ర్యాక్ పరిధి",
    from: "నుండి",
    fromPlaceholder: "నుండి (ఉదా, A)",
    fromNumberPlaceholder: "నుండి (ఉదా, 1)",
    to: "వరకు",
    toPlaceholder: "వరకు (ఉదా, C)",
    toNumberPlaceholder: "వరకు (ఉదా, 3)",
    shelfRange: "షెల్ఫ్ పరిధి",
    binsPerShelf: "ప్రతి షెల్ఫ్‌కు బిన్‌లు",
    binsPerShelfPlaceholder: "ఉదా, 5",
    defaultCapacity: "డిఫాల్ట్ సామర్థ్యం",
    defaultCapacityPlaceholder: "ఉదా, 100",
    preview: "ప్రివ్యూ: సృష్టించాల్సిన స్థానాలు",
    totalLocations: "మొత్తం: 45 స్థానాలు",
    andMore: "... మరియు 25 మరిన్ని",
    createLocations: "45 స్థానాలను సృష్టించండి",

    step4Title: "ఉత్పత్తి కేటాయింపు మరియు కదలిక",
    step4P1: "మీ గిడ్డంగి స్థానాలను సెటప్ చేసిన తర్వాత, ఉత్పత్తులు బిన్‌లకు ఎలా కేటాయించబడతాయి మరియు స్థానాల మధ్య స్టాక్‌ను ఎలా సమర్థవంతంగా తరలించాలో మీరు అర్థం చేసుకోవాలి.",
    step4H6A: "A. ఆటోమేటిక్ ఉత్పత్తి కేటాయింపు",
    screenshot7Title: "ఆటో-కేటాయింపు సిస్టమ్",
    autoAllocationFeature: "ఆటో-కేటాయింపు ఫీచర్",
    autoAllocationDesc: "కొత్త స్టాక్‌ను స్వీకరించినప్పుడు, రిటైల్OS స్వయంచాలకంగా సరైన బిన్ స్థానాలను సూచించగలదు, ఇది ఆధారపడి ఉంటుంది:",
    aAfLi1: "• అందుబాటులో ఉన్న బిన్ సామర్థ్యం",
    aAfLi2: "• ఉత్పత్తి వర్గం సమూహం",
    aAfLi3: "• పికింగ్ సామర్థ్యం (సులభంగా అందుబాటులో ఉన్న ప్రదేశాలలో ప్రసిద్ధ వస్తువులు)",
    aAfLi4: "• గడువు నిర్వహణ కోసం FIFO సమ్మతి",
    allocationSuggestions: "కేటాయింపు సూచనలు: ఆర్గానిక్ రైస్ 1kg (50 యూనిట్లు)",
    recommended: " (సిఫార్సు చేయబడింది)",
    bestMatch: "ఉత్తమ సరిపోలిక",
    alternative: " (ప్రత్యామ్నాయం)",
    goodOption: "మంచి ఎంపిక",
    availableSugg: " (అందుబాటులో ఉంది)",
    lastResort: "చివరి పరిష్కారం",
    manualSelection: "మాన్యువల్ ఎంపిక",
    acceptRecommendation: "సిఫార్సును అంగీకరించండి",

    step4H6B: "B. మాన్యువల్ స్టాక్ కదలిక",
    screenshot8Title: "స్థానాల మధ్య స్టాక్‌ను తరలించు",
    moveStock: "స్టాక్‌ను తరలించు",
    transferProducts: "ఆప్టిమైజేషన్ లేదా పునర్వ్యవస్థీకరణ కోసం గిడ్డంగి స్థానాల మధ్య ఉత్పత్తులను బదిలీ చేయండి.",
    sourceLocation: "మూల స్థానం",
    product: "ఉత్పత్తి:",
    currentStock: "ప్రస్తుత స్టాక్:",
    binCapacityLabel: "బిన్ సామర్థ్యం:",
    quantityToMove: "తరలించాల్సిన పరిమాణం",
    enterQuantity: "పరిమాణం నమోదు చేయండి",
    destinationLocation: "గమ్యం స్థానం",
    selectDestination: "గమ్యాన్ని ఎంచుకోండి",
    searchLocation: "స్థానాన్ని శోధించండి (ఉదా, A-1-04)",
    movementSummary: "కదలిక సారాంశం",
    moving: "తరలించబడుతోంది:",
    fromTo: "నుండి: A-2-03 → వరకు: A-1-04",
    reason: "కారణం: షెల్ఫ్ స్థల వినియోగాన్ని ఆప్టిమైజ్ చేయండి",
    cancelMovement: "కదలికను రద్దు చేయి",
    confirmMovement: "స్టాక్ కదలికను నిర్ధారించండి",

    nextStepsTitle: "గిడ్డంగి సెటప్ పూర్తయింది!",
    nextStepsDescription: "మీ గిడ్డంగి ఇప్పుడు వ్యవస్థీకృతమై, సమర్థవంతమైన కార్యకలాపాలకు సిద్ధంగా ఉంది. తరువాత, ఉత్పత్తులను ఎలా జోడించాలో మరియు మీ కస్టమర్‌ల కోసం ఆకర్షణీయమైన డీల్‌లను ఎలా సృష్టించాలో తెలుసుకోండి.",
    nextStepsButton: "ఉత్పత్తి మరియు కంటెంట్ నిర్వహణకు కొనసాగండి",
    organicRiceSection: "ఆర్గానిక్ రైస్ విభాగం",
    organicBasmatiRice: "ఆర్గానిక్ బాస్మతి రైస్ 1kg",
    sameProductCategory: "ఒకే ఉత్పత్తి వర్గం • 45 యూనిట్లు అందుబాటులో ఉన్న స్థలం",
    similarProductsNearby: "సమీపంలో ఒకే రకమైన ఉత్పత్తులు • 60 యూనిట్లు అందుబాటులో ఉన్న స్థలం",
    emptyBinHigherShelf: "ఖాళీ బిన్ • ఎక్కువ షెల్ఫ్ స్థాయి",
  },
  ta: {
    pageTitle: "கிடங்கு மேலாண்மை கையேடு",
    backToManual: "கையேட்டுக்கு திரும்பு",
    description: "ரேக்-ஷெல்ஃப்-பின் அமைப்பைப் பயன்படுத்தி உகந்த சரக்கு கண்காணிப்பு மற்றும் திறமையான ஆர்டர் நிறைவேற்றத்திற்காக உங்கள் உடல் கிடங்கு இடங்களை எவ்வாறு அமைப்பது மற்றும் நிர்வகிப்பது என்பதைக் கற்றுக்கொள்ளுங்கள்.",
    step1Title: "கிடங்கு இருப்பிட அமைப்பைப் புரிந்துகொள்வது",
    step1P1: "RetailOS ஆனது துல்லியமான இருப்பிட நிர்வாகத்திற்காக ஒரு வரிசைப்படுத்தப்பட்ட ரேக்-ஷெல்ஃப்-பின் அமைப்பைப் பயன்படுத்துகிறது. இந்த அமைப்பு உங்கள் கிடங்கில் ஒவ்வொரு தயாரிப்பும் எங்கு சேமிக்கப்பட்டு உள்ளது என்பதை துல்லியமாக கண்காணிக்க உங்களை அனுமதிக்கிறது, இது பொருட்கள் எடுப்பதையும், சரக்கு நிர்வாகத்தையும் மிகவும் திறமையாக செய்கிறது.",
    step1Li1: "ரேக்குகள்: A, B, C, போன்ற பிரதான சேமிப்பு கட்டமைப்புகள்.",
    step1Li2: "அடுக்குகள்: ஒவ்வொரு ரேக்கிலும் உள்ள கிடைமட்ட அடுக்குகளின் எண்கள், 1, 2, 3, போன்ற எண்கள்.",
    step1Li3: "தொட்டிகள்: தனிப்பட்ட சேமிப்பு பெட்டிகள், 01, 02, 03, போன்ற எண்கள்.",
    step1P2_part1: "ஒரு முழுமையான இடம் ",
    step1P2_part2: " என்று இருக்கும், அதாவது ரேக் A, ஷெல்ஃப் 2, தொட்டி 5.",
    step1H6A: "A. காட்சி கிடங்கு அமைவு எடுத்துக்காட்டு",
    screenshot1Title: "கிடங்கு அமைவு அமைப்பு",
    screenshot1H3: "உடல் கிடங்கு அமைவு",
    screenshot1P: "ரேக்-ஷெல்ஃப்-பின் படிநிலை காட்சிப்படுத்தல்",
    rackA: "ரேக் A",
    rackB: "ரேக் B",
    shelf3: "ஷெல்ஃப் 3",
    empty: "காலியானது",
    shelf2: "ஷெல்ஃப் 2",
    available: "கிடைக்கிறது",
    shelf1: "ஷெல்ஃப் 1",
    nearlyFull: "கிட்டத்தட்ட முழுமையானது",
    legend: "விளக்கம்",
    emptyRange: "காலியானது (0-25%)",
    availableRange: "கிடைக்கிறது (26-80%)",
    nearlyFullRange: "கிட்டத்தட்ட முழுமையானது (81-95%)",
    atCapacityRange: "திறனில் (96-100%)",
    atCapacityBadge: "திறனில்",

    step2Title: "கிடங்கு இருப்பிட டாஷ்போர்டை அணுகுதல்",
    step2P1: "பிரதான பக்கப்பட்டியில் இருந்து கிடங்கு இருப்பிடப் பகுதிக்கு செல்லவும். இந்த டாஷ்போர்டு உங்கள் முழு கிடங்கு அமைவு மற்றும் தற்போதைய பங்கு விநியோகத்தின் காட்சி மேலோட்டத்தை வழங்குகிறது.",
    step2H6A: "A. டாஷ்போர்டு மேலோட்டம்",
    screenshot2Title: "கிடங்கு இருப்பிட டாஷ்போர்டு இடைமுகம்",
    screenshot2H2: "கிடங்கு இருப்பிட மேலாண்மை",
    screenshot2P: "உங்கள் கிடங்கு சேமிப்பு இடங்களின் காட்சி மேலோட்டம்",
    addLocation: "இருப்பிடத்தைச் சேர்",
    layoutView: "அமைவு காட்சி",
    totalBins: "மொத்த தொட்டிகள்",
    occupiedBins: "நிரப்பப்பட்ட தொட்டிகள்",
    nearlyFullStat: "கிட்டத்தட்ட முழுமையானது",
    availableStat: "கிடைக்கிறது",
    warehouseLayout: "கிடங்கு அமைவு",
    availableBadge: "கிடைக்கிறது",
    nearlyFullBadge: "கிட்டத்தட்ட முழுமையானது",
    rackC: "ரேக் C",

    step2H6B: "B. வண்ண குறியீட்டு முறையைப் புரிந்துகொள்வது",
    screenshot3Title: "தொட்டி நிலை வண்ண வழிகாட்டி",
    capacityStatusColors: "திறன் நிலை வண்ணங்கள்",
    emptyBin: "காலியானது (0-25%)",
    readyForNewStock: "புதிய பங்கு ஒதுக்கீட்டிற்கு தயாராக உள்ளது",
    availableBin: "கிடைக்கிறது (26-80%)",
    optimalStockLevel: "உகந்த பங்கு நிலை, மேலும் ஏற்றுக்கொள்ள முடியும்",
    nearlyFullBin: "கிட்டத்தட்ட முழுமையானது (81-95%)",
    limitedSpaceRemaining: "வரையறுக்கப்பட்ட இடம் மீதமுள்ளது",
    atCapacityBin: "திறனில் (96-100%)",
    noAdditionalSpace: "கூடுதல் இடம் இல்லை",
    operationalGuidelines: "செயல்பாட்டு வழிகாட்டுதல்கள்",
    bestPractices: "🎯 சிறந்த நடைமுறைகள்",
    bpLi1: "• உகந்த செயல்திறனுக்காக தொட்டிகளை 70-85% திறனில் வைத்திருங்கள்",
    bpLi2: "• விரைவான பங்கு நகர்வுகளுக்காக சில தொட்டிகளை ஒதுக்கி வைக்கவும்",
    bpLi3: "• ஒரே மாதிரியான தயாரிப்புகளை அருகிலுள்ள தொட்டிகளில் குழுவாக்கவும்",
    warnings: "⚠️ எச்சரிக்கைகள்",
    wLi1: "• மஞ்சள் தொட்டிகளுக்கு மறுசீரமைப்புக்கு கவனம் தேவை",
    wLi2: "• சிவப்பு தொட்டிகள் புதிய பங்கு ஒதுக்கீட்டைத் தடுக்கின்றன",
    wLi3: "• காலியான தொட்டிகள் தேவை பிரச்சனைகளை குறிக்கலாம்",

    step3Title: "தொட்டி இருப்பிடங்களை உருவாக்குதல் மற்றும் நிர்வகித்தல்",
    step3P1: "உங்கள் கிடங்கை விரிவுபடுத்தும்போது அல்லது சேமிப்பு திறனை மேம்படுத்தும்போது புதிய தொட்டி இருப்பிடங்களைச் சேர்ப்பது அவசியம். இந்த அமைப்பு படிநிலை அமைப்பை பராமரிக்கும் போது செயல்முறை மூலம் உங்களுக்கு வழிகாட்டும்.",
    step3H6A: "A. புதிய இருப்பிட படிவத்தைச் சேர்",
    screenshot4Title: "புதிய கிடங்கு இருப்பிடத்தை உருவாக்கு",
    createNewLocation: "புதிய இருப்பிடத்தை உருவாக்கு",
    defineNewStorage: "உங்கள் கிடங்கு வரிசையில் ஒரு புதிய சேமிப்பு தொட்டியை வரையறுக்கவும்.",
    rackId: "ரேக் ஐடி *",
    rackIdPlaceholder: "எ.கா., A, B, C",
    rackIdHint: "ரேக் அடையாளத்திற்காக A-Z எழுத்துக்களைப் பயன்படுத்தவும்",
    shelfNumber: "ஷெல்ஃப் எண் *",
    shelfNumberPlaceholder: "எ.கா., 1, 2, 3",
    shelfNumberHint: "கீழிருந்து (1) மேலிருந்து கீழாக ஷெல்ஃப் நிலைகள்",
    binNumber: "தொட்டி எண் *",
    binNumberPlaceholder: "எ.கா., 01, 02, 03",
    binNumberHint: "2-இலக்க வடிவத்தைப் பயன்படுத்தவும் (01, 02, போன்றவை)",
    binCapacity: "தொட்டி கொள்ளளவு (அலகுகள்) *",
    binCapacityPlaceholder: "எ.கா., 100, 150, 200",
    binCapacityHint: "இந்த தொட்டி வைத்திருக்கக்கூடிய அதிகபட்ச அலகுகள்",
    locationType: "இருப்பிட வகை",
    standardStorage: "நிலையான சேமிப்பு",
    coldStorage: "குளிர் சேமிப்பு",
    highSecurity: "உயர் பாதுகாப்பு",
    quarantine: "தனிமைப்படுத்தல்",
    locationPreview: "இருப்பிட முன்னோட்டம்",
    generatedLocation: "உருவாக்கப்பட்ட இடம்: A-2-05",
    locationDetails: "ரேக் A, ஷெல்ஃப் 2, தொட்டி 5 • கொள்ளளவு: 150 அலகுகள்",
    cancel: "ரத்து செய்",
    createLocation: "இருப்பிடத்தை உருவாக்கு",

    step3H6B: "B. இருப்பிட சரிபார்ப்பு மற்றும் கட்டுப்பாடுகள்",
    screenshot5Title: "சரிபார்ப்பு விதிகள் மற்றும் பிழை கையாளுதல்",
    validLocationConfig: "செல்லுபடியாகும் இருப்பிட உள்ளமைவு",
    locationAvailable: "இருப்பிடம் A-2-05 கிடைக்கிறது மற்றும் பெயரிடும் மரபுகளைப் பின்பற்றுகிறது.",
    vlcLi1: "✓ ரேக் ஐடி வடிவம் சரியானது (ஒற்றை எழுத்து)",
    vlcLi2: "✓ ஷெல்ஃப் எண் வரம்பிற்குள் உள்ளது (1-10)",
    vlcLi3: "✓ தொட்டி எண் 2-இலக்க வடிவத்தைப் பின்பற்றுகிறது",
    vlcLi4: "✓ நகல் இருப்பிடம் இல்லை",
    locationCreationErrors: "இருப்பிட உருவாக்க பிழைகள்",
    lceLi1: "• இருப்பிடம் B-3-02 ஏற்கனவே கணினியில் உள்ளது",
    lceLi2: "• ரேக் ஐடி ஒரு ஒற்றை எழுத்து (A-Z) ஆக இருக்க வேண்டும்",
    lceLi3: "• தொட்டி கொள்ளளவு 0 ஐ விட அதிகமாக இருக்க வேண்டும்",
    lceLi4: "• ஷெல்ஃப் எண் 10 நிலைகளை விட அதிகமாக இருக்கக்கூடாது",
    namingBestPractices: "பெயரிடும் சிறந்த நடைமுறைகள்",
    nbpLi1: "• இயற்பியல் அமைவு அடிப்படையில் தர்க்கரீதியான ரேக் பெயரிடலைப் பயன்படுத்தவும் (A-Z)",
    nbpLi2: "• நிலைத்தன்மைக்காக கீழிருந்து (1) மேலிருந்து கீழாக அடுக்குகள் எண் இடவும்",
    nbpLi3: "• எதிர்கால விரிவாக்கத்திற்காக சில எழுத்துக்கள்/எண்களை ஒதுக்கி வைக்கவும்",
    nbpLi4: "• ரேக்குகளை ஒதுக்கும்போது தயாரிப்பு வகைகளைக் கருத்தில் கொள்ளவும்",

    step3H6C: "C. மொத்த இருப்பிட உருவாக்கம்",
    screenshot6Title: "பல இருப்பிடங்களை மொத்தமாக உருவாக்கு",
    bulkCreateLocations: "மொத்தமாக இருப்பிடங்களை உருவாக்கு",
    createMultipleBins: "புதிய ரேக்குகள் அல்லது அலமாரிகளுக்காக ஒரே நேரத்தில் பல தொட்டி இருப்பிடங்களை உருவாக்கவும்.",
    rackRange: "ரேக் வரம்பு",
    from: "இருந்து",
    fromPlaceholder: "இருந்து (எ.கா., A)",
    fromNumberPlaceholder: "இருந்து (எ.கா., 1)",
    to: "வரை",
    toPlaceholder: "வரை (எ.கா., C)",
    toNumberPlaceholder: "வரை (எ.கா., 3)",
    shelfRange: "ஷெல்ஃப் வரம்பு",
    binsPerShelf: "ஒரு ஷெல்ஃப்க்கு தொட்டிகள்",
    binsPerShelfPlaceholder: "எ.கா., 5",
    defaultCapacity: "இயல்புநிலை கொள்ளளவு",
    defaultCapacityPlaceholder: "எ.கா., 100",
    preview: "முன்னோட்டம்: உருவாக்க வேண்டிய இடங்கள்",
    totalLocations: "மொத்தம்: 45 இடங்கள்",
    andMore: "... மற்றும் 25 மேலும்",
    createLocations: "45 இடங்களை உருவாக்கு",

    step4Title: "தயாரிப்பு ஒதுக்கீடு மற்றும் இயக்கம்",
    step4P1: "உங்கள் கிடங்கு இடங்கள் அமைக்கப்பட்டவுடன், தயாரிப்புகள் எவ்வாறு தொட்டிகளுக்கு ஒதுக்கப்படுகின்றன என்பதையும், இடங்களுக்கு இடையில் பங்குகளை எவ்வாறு திறமையாக நகர்த்துவது என்பதையும் நீங்கள் புரிந்து கொள்ள வேண்டும்.",
    step4H6A: "A. தானியங்கி தயாரிப்பு ஒதுக்கீடு",
    screenshot7Title: "தானியங்கி ஒதுக்கீட்டு அமைப்பு",
    autoAllocationFeature: "தானியங்கி ஒதுக்கீட்டு அம்சம்",
    autoAllocationDesc: "புதிய பங்கு பெறும்போது, RetailOS தானாகவே உகந்த தொட்டி இடங்களை பரிந்துரைக்க முடியும்:",
    aAfLi1: "• கிடைக்கும் தொட்டி கொள்ளளவு",
    aAfLi2: "• தயாரிப்பு வகை குழு",
    aAfLi3: "• எடுக்கும் திறன் (அணுகக்கூடிய இடங்களில் பிரபலமான பொருட்கள்)",
    aAfLi4: "• காலாவதி நிர்வாகத்திற்கான FIFO இணக்கம்",
    allocationSuggestions: "ஒதுக்கீடு பரிந்துரைகள்: ஆர்கானிக் அரிசி 1kg (50 அலகுகள்)",
    recommended: " (பரிந்துரைக்கப்பட்டது)",
    bestMatch: "சிறந்த பொருத்தம்",
    alternative: " (மாற்று)",
    goodOption: "நல்ல விருப்பம்",
    availableSugg: " (கிடைக்கிறது)",
    lastResort: "கடைசி வழி",
    manualSelection: "கையேடு தேர்வு",
    acceptRecommendation: "பரிந்துரையை ஏற்கவும்",

    step4H6B: "B. கையேடு பங்கு இயக்கம்",
    screenshot8Title: "இடங்களுக்கு இடையில் பங்குகளை நகர்த்தவும்",
    moveStock: "பங்குகளை நகர்த்து",
    transferProducts: "மேம்படுத்துதல் அல்லது மறுசீரமைப்புக்காக கிடங்கு இடங்களுக்கு இடையில் தயாரிப்புகளை மாற்றவும்.",
    sourceLocation: "ஆதாரம் இருப்பிடம்",
    product: "தயாரிப்பு:",
    currentStock: "தற்போதைய பங்கு:",
    binCapacityLabel: "தொட்டி கொள்ளளவு:",
    quantityToMove: "நகர்த்த வேண்டிய அளவு",
    enterQuantity: "அளவை உள்ளிடு",
    destinationLocation: "சேருமிடம்",
    selectDestination: "சேருமிடத்தைத் தேர்ந்தெடு",
    searchLocation: "இருப்பிடத்தைத் தேடு (எ.கா., A-1-04)",
    movementSummary: "இயக்க சுருக்கம்",
    moving: "நகர்கிறது:",
    fromTo: "இருந்து: A-2-03 → வரை: A-1-04",
    reason: "காரணம்: ஷெல்ஃப் இடத்தை மேம்படுத்து",
    cancelMovement: "இயக்கத்தை ரத்து செய்",
    confirmMovement: "பங்கு இயக்கத்தை உறுதிப்படுத்து",

    nextStepsTitle: "கிடங்கு அமைப்பு முடிந்தது!",
    nextStepsDescription: "உங்கள் கிடங்கு இப்போது ஒழுங்கமைக்கப்பட்டுள்ளது மற்றும் திறமையான செயல்பாடுகளுக்கு தயாராக உள்ளது. அடுத்து, தயாரிப்புகளை எவ்வாறு சேர்ப்பது மற்றும் உங்கள் வாடிக்கையாளர்களுக்கு கவர்ச்சிகரமான ஒப்பந்தங்களை எவ்வாறு உருவாக்குவது என்பதைக் கற்றுக்கொள்ளுங்கள்.",
    nextStepsButton: "தயாரிப்பு மற்றும் உள்ளடக்க நிர்வாகத்திற்கு தொடரவும்",
    organicRiceSection: "கரிம அரிசி பிரிவு",
    organicBasmatiRice: "கரிம பாஸ்மதி அரிசி 1kg",
    sameProductCategory: "ஒரே தயாரிப்பு வகை • 45 அலகுகள் கிடைக்கும் இடம்",
    similarProductsNearby: "அருகிலுள்ள ஒரே மாதிரியான தயாரிப்புகள் • 60 அலகுகள் கிடைக்கும் இடம்",
    emptyBinHigherShelf: "காலியான தொட்டி • உயர்ந்த அலமாரி நிலை",
  },
  hi: {
    pageTitle: "वेयरहाउस प्रबंधन मैनुअल",
    backToManual: "मैनुअल पर वापस जाएं",
    description: "रैक-शेल्फ-बिन सिस्टम का उपयोग करके इष्टतम इन्वेंट्री ट्रैकिंग और कुशल ऑर्डर पूर्ति के लिए अपने भौतिक गोदाम स्थानों को स्थापित करने और प्रबंधित करने का तरीका जानें।",
    step1Title: "वेयरहाउस स्थान प्रणाली को समझना",
    step1P1: "रिटेलओएस सटीक स्थान प्रबंधन के लिए एक पदानुक्रमित रैक-शेल्फ-बिन प्रणाली का उपयोग करता है। यह प्रणाली आपको यह ट्रैक करने की अनुमति देती है कि आपके गोदाम में प्रत्येक उत्पाद कहाँ संग्रहीत है, जिससे पिकिंग और इन्वेंट्री प्रबंधन अत्यधिक कुशल हो जाता है।",
    step1Li1: "रैक: मुख्य भंडारण संरचनाएं जिन पर A, B, C, आदि का लेबल लगा होता है।",
    step1Li2: "शेल्फ: प्रत्येक रैक के भीतर क्षैतिज स्तर, जिनकी संख्या 1, 2, 3, आदि होती है।",
    step1Li3: "बिन: व्यक्तिगत भंडारण डिब्बे, जिनकी संख्या 01, 02, 03, आदि होती है।",
    step1P2_part1: "एक पूर्ण स्थान ",
    step1P2_part2: " जैसा दिखेगा, जिसका अर्थ है रैक A, शेल्फ 2, बिन 5।",
    step1H6A: "A. दृश्य वेयरहाउस लेआउट उदाहरण",
    screenshot1Title: "वेयरहाउस लेआउट संरचना",
    screenshot1H3: "भौतिक वेयरहाउस लेआउट",
    screenshot1P: "रैक-शेल्फ-बिन पदानुक्रम विज़ुअलाइज़ेशन",
    rackA: "रैक A",
    rackB: "रैक B",
    shelf3: "शेल्फ 3",
    empty: "खाली",
    shelf2: "शेल्फ 2",
    available: "उपलब्ध",
    shelf1: "शेल्फ 1",
    nearlyFull: "लगभग भरा हुआ",
    legend: "लेजेंड",
    emptyRange: "खाली (0-25%)",
    availableRange: "उपलब्ध (26-80%)",
    nearlyFullRange: "लगभग भरा हुआ (81-95%)",
    atCapacityRange: "क्षमता पर (96-100%)",
    atCapacityBadge: "क्षमता पर",

    step2Title: "वेयरहाउस स्थान डैशबोर्ड तक पहुँचना",
    step2P1: "मुख्य साइडबार से वेयरहाउस स्थान अनुभाग पर नेविगेट करें। यह डैशबोर्ड आपके पूरे वेयरहाउस लेआउट और वर्तमान स्टॉक वितरण का एक दृश्य अवलोकन प्रदान करता है।",
    step2H6A: "A. डैशबोर्ड अवलोकन",
    screenshot2Title: "वेयरहाउस स्थान डैशबोर्ड इंटरफ़ेस",
    screenshot2H2: "वेयरहाउस स्थान प्रबंधन",
    screenshot2P: "आपके वेयरहाउस भंडारण स्थानों का दृश्य अवलोकन",
    addLocation: "स्थान जोड़ें",
    layoutView: "लेआउट दृश्य",
    totalBins: "कुल बिन",
    occupiedBins: "अधिकृत बिन",
    nearlyFullStat: "लगभग भरा हुआ",
    availableStat: "उपलब्ध",
    warehouseLayout: "वेयरहाउस लेआउट",
    availableBadge: "उपलब्ध",
    nearlyFullBadge: "लगभग भरा हुआ",
    rackC: "रैक C",

    step2H6B: "B. कलर कोडिंग सिस्टम को समझना",
    screenshot3Title: "बिन स्थिति रंग गाइड",
    capacityStatusColors: "क्षमता स्थिति रंग",
    emptyBin: "खाली (0-25%)",
    readyForNewStock: "नए स्टॉक आवंटन के लिए तैयार",
    availableBin: "उपलब्ध (26-80%)",
    optimalStockLevel: "इष्टतम स्टॉक स्तर, अधिक स्वीकार कर सकता है",
    nearlyFullBin: "लगभग भरा हुआ (81-95%)",
    limitedSpaceRemaining: "सीमित स्थान शेष",
    atCapacityBin: "क्षमता पर (96-100%)",
    noAdditionalSpace: "कोई अतिरिक्त स्थान उपलब्ध नहीं",
    operationalGuidelines: "परिचालन दिशानिर्देश",
    bestPractices: "🎯 सर्वोत्तम अभ्यास",
    bpLi1: "• इष्टतम दक्षता के लिए बिन को 70-85% क्षमता पर रखें",
    bpLi2: "• त्वरित स्टॉक गतिविधियों के लिए कुछ बिन आरक्षित करें",
    bpLi3: "• समान उत्पादों को पास के बिन में समूहित करें",
    warnings: "⚠️ चेतावनी",
    wLi1: "• पीले बिन को पुनर्गठन के लिए ध्यान देने की आवश्यकता है",
    wLi2: "• लाल बिन नए स्टॉक आवंटन को अवरुद्ध करते हैं",
    wLi3: "• खाली बिन मांग के मुद्दों का संकेत दे सकते हैं",

    step3Title: "बिन स्थान बनाना और प्रबंधित करना",
    step3P1: "जब आप अपने गोदाम का विस्तार कर रहे हों या भंडारण दक्षता को अनुकूलित कर रहे हों तो नए बिन स्थान जोड़ना आवश्यक है। सिस्टम पदानुक्रमित संरचना को बनाए रखते हुए प्रक्रिया के माध्यम से आपका मार्गदर्शन करता है।",
    step3H6A: "A. नया स्थान फ़ॉर्म जोड़ें",
    screenshot4Title: "नया वेयरहाउस स्थान बनाएं",
    createNewLocation: "नया स्थान बनाएं",
    defineNewStorage: "अपनी वेयरहाउस पदानुक्रम के भीतर एक नया भंडारण बिन परिभाषित करें।",
    rackId: "रैक आईडी *",
    rackIdPlaceholder: "उदा., A, B, C",
    rackIdHint: "रैक पहचान के लिए A-Z अक्षरों का प्रयोग करें",
    shelfNumber: "शेल्फ संख्या *",
    shelfNumberPlaceholder: "उदा., 1, 2, 3",
    shelfNumberHint: "शेल्फ स्तर नीचे से (1) ऊपर तक",
    binNumber: "बिन संख्या *",
    binNumberPlaceholder: "उदा., 01, 02, 03",
    binNumberHint: "2-अंकीय प्रारूप का प्रयोग करें (01, 02, आदि)",
    binCapacity: "बिन क्षमता (इकाइयां) *",
    binCapacityPlaceholder: "उदा., 100, 150, 200",
    binCapacityHint: "यह बिन अधिकतम कितनी इकाइयां धारण कर सकता है",
    locationType: "स्थान प्रकार",
    standardStorage: "मानक भंडारण",
    coldStorage: "शीत भंडारण",
    highSecurity: "उच्च सुरक्षा",
    quarantine: "संगरोध",
    locationPreview: "स्थान पूर्वावलोकन",
    generatedLocation: "उत्पन्न स्थान: A-2-05",
    locationDetails: "रैक A, शेल्फ 2, बिन 5 • क्षमता: 150 इकाइयां",
    cancel: "रद्द करें",
    createLocation: "स्थान बनाएं",

    step3H6B: "B. स्थान सत्यापन और बाधाएं",
    screenshot5Title: "सत्यापन नियम और त्रुटि प्रबंधन",
    validLocationConfig: "मान्य स्थान कॉन्फ़िगरेशन",
    locationAvailable: "स्थान A-2-05 उपलब्ध है और नामकरण परंपराओं का पालन करता है।",
    vlcLi1: "✓ रैक आईडी प्रारूप सही है (एकल अक्षर)",
    vlcLi2: "✓ शेल्फ संख्या सीमा के भीतर है (1-10)",
    vlcLi3: "✓ बिन संख्या 2-अंकीय प्रारूप का पालन करती है",
    vlcLi4: "✓ कोई डुप्लिकेट स्थान मौजूद नहीं है",
    locationCreationErrors: "स्थान निर्माण त्रुटियां",
    lceLi1: "• स्थान B-3-02 पहले से ही सिस्टम में मौजूद है",
    lceLi2: "• रैक आईडी एक एकल अक्षर (A-Z) होना चाहिए",
    lceLi3: "• बिन क्षमता 0 से अधिक होनी चाहिए",
    lceLi4: "• शेल्फ संख्या 10 स्तरों से अधिक नहीं हो सकती है",
    namingBestPractices: "नामकरण सर्वोत्तम अभ्यास",
    nbpLi1: "• भौतिक लेआउट के आधार पर तार्किक रैक नामकरण (A-Z) का उपयोग करें",
    nbpLi2: "• स्थिरता के लिए शेल्फ को नीचे से (1) ऊपर तक नंबर दें",
    nbpLi3: "• भविष्य के विस्तार के लिए कुछ अक्षर/संख्याएं आरक्षित करें",
    nbpLi4: "• रैक असाइन करते समय उत्पाद श्रेणियों पर विचार करें",

    step3H6C: "C. थोक स्थान निर्माण",
    screenshot6Title: "थोक में कई स्थान बनाएं",
    bulkCreateLocations: "थोक में स्थान बनाएं",
    createMultipleBins: "नए रैक या अलमारियों के लिए एक बार में कई बिन स्थान बनाएं।",
    rackRange: "रैक रेंज",
    from: "से",
    fromPlaceholder: "से (उदा., A)",
    fromNumberPlaceholder: "से (उदा., 1)",
    to: "तक",
    toPlaceholder: "तक (उदा., C)",
    toNumberPlaceholder: "तक (उदा., 3)",
    shelfRange: "शेल्फ रेंज",
    binsPerShelf: "प्रति शेल्फ बिन",
    binsPerShelfPlaceholder: "उदा., 5",
    defaultCapacity: "डिफ़ॉल्ट क्षमता",
    defaultCapacityPlaceholder: "उदा., 100",
    preview: "पूर्वावलोकन: बनाने के लिए स्थान",
    totalLocations: "कुल: 45 स्थान",
    andMore: "... और 25 और",
    createLocations: "45 स्थान बनाएं",

    step4Title: "उत्पाद आवंटन और आवाजाही",
    step4P1: "एक बार जब आपके गोदाम के स्थान स्थापित हो जाते हैं, तो आपको यह समझना होगा कि उत्पादों को बिन में कैसे आवंटित किया जाता है और स्टॉक को स्थानों के बीच कुशलता से कैसे ले जाया जाता है।",
    step4H6A: "A. स्वचालित उत्पाद आवंटन",
    screenshot7Title: "ऑटो-आवंटन प्रणाली",
    autoAllocationFeature: "ऑटो-आवंटन सुविधा",
    autoAllocationDesc: "नया स्टॉक प्राप्त करते समय, रिटेलओएस स्वचालित रूप से इष्टतम बिन स्थानों का सुझाव दे सकता है, जो इस पर आधारित है:",
    aAfLi1: "• उपलब्ध बिन क्षमता",
    aAfLi2: "• उत्पाद श्रेणी समूहीकरण",
    aAfLi3: "• पिकिंग दक्षता (सुलभ स्थानों में लोकप्रिय वस्तुएं)",
    aAfLi4: "• समाप्ति प्रबंधन के लिए FIFO अनुपालन",
    allocationSuggestions: "आवंटन सुझाव: जैविक चावल 1kg (50 इकाइयां)",
    recommended: " (अनुशंसित)",
    bestMatch: "सर्वोत्तम मिलान",
    alternative: " (विकल्प)",
    goodOption: "अच्छा विकल्प",
    availableSugg: " (उपलब्ध)",
    lastResort: "अंतिम उपाय",
    manualSelection: "मैनुअल चयन",
    acceptRecommendation: "सिफारिश स्वीकार करें",

    step4H6B: "B. मैनुअल स्टॉक आवाजाही",
    screenshot8Title: "स्थानों के बीच स्टॉक ले जाएं",
    moveStock: "स्टॉक ले जाएं",
    transferProducts: "अनुकूलन या पुनर्गठन के लिए गोदाम स्थानों के बीच उत्पादों को स्थानांतरित करें।",
    sourceLocation: "स्रोत स्थान",
    product: "उत्पाद:",
    currentStock: "वर्तमान स्टॉक:",
    binCapacityLabel: "बिन क्षमता:",
    quantityToMove: "स्थानांतरित करने की मात्रा",
    enterQuantity: "मात्रा दर्ज करें",
    destinationLocation: "गंतव्य स्थान",
    selectDestination: "गंतव्य का चयन करें",
    searchLocation: "स्थान खोजें (उदा., A-1-04)",
    movementSummary: "आवाजाही सारांश",
    moving: "चल रहा है:",
    fromTo: "से: A-2-03 → को: A-1-04",
    reason: "कारण: शेल्फ स्थान उपयोग को अनुकूलित करें",
    cancelMovement: "आवाजाही रद्द करें",
    confirmMovement: "स्टॉक आवाजाही की पुष्टि करें",

    nextStepsTitle: "गोदाम सेटअप पूर्ण!",
    nextStepsDescription: "आपका गोदाम अब व्यवस्थित है और कुशल संचालन के लिए तैयार है। अगला, अपने ग्राहकों के लिए उत्पाद जोड़ने और आकर्षक डील बनाने का तरीका सीखें।",
    nextStepsButton: "उत्पाद और सामग्री प्रबंधन पर जारी रखें",
    organicRiceSection: "जैविक चावल खंड",
    organicBasmatiRice: "जैविक बासमती चावल 1kg",
    sameProductCategory: "समान उत्पाद श्रेणी • 45 इकाइयां उपलब्ध स्थान",
    similarProductsNearby: "आस-पास समान उत्पाद • 60 इकाइयां उपलब्ध स्थान",
    emptyBinHigherShelf: "खाली बिन • उच्च शेल्फ स्तर",
  },
  ml: {
    pageTitle: "വെയർഹൗസ് മാനേജ്മെന്റ് മാനുവൽ",
    backToManual: "മാനുവലിലേക്ക് മടങ്ങുക",
    description: "റാക്ക്-ഷെൽഫ്-ബിൻ സിസ്റ്റം ഉപയോഗിച്ച് ഒപ്റ്റിമൽ ഇൻവെന്ററി ട്രാക്കിംഗിനും കാര്യക്ഷമമായ ഓർഡർ പൂർത്തീകരണത്തിനുമായി നിങ്ങളുടെ ഫിസിക്കൽ വെയർഹൗസ് ലൊക്കേഷനുകൾ എങ്ങനെ സെറ്റപ്പ് ചെയ്യാമെന്നും മാനേജ് ചെയ്യാമെന്നും പഠിക്കുക.",
    step1Title: "വെയർഹൗസ് ലൊക്കേഷൻ സിസ്റ്റം മനസ്സിലാക്കുക",
    step1P1: "കൃത്യമായ ലൊക്കേഷൻ മാനേജ്മെന്റിനായി RetailOS ഒരു ഹൈറാർക്കിക്കൽ റാക്ക്-ഷെൽഫ്-ബിൻ സിസ്റ്റം ഉപയോഗിക്കുന്നു. ഈ സിസ്റ്റം നിങ്ങളുടെ വെയർഹൗസിൽ ഓരോ ഉൽപ്പന്നവും എവിടെയാണ് സൂക്ഷിച്ചിരിക്കുന്നത് എന്ന് കൃത്യമായി ട്രാക്ക് ചെയ്യാൻ നിങ്ങളെ അനുവദിക്കുന്നു, ഇത് തിരഞ്ഞെടുക്കലും ഇൻവെന്ററി മാനേജ്മെന്റും കൂടുതൽ കാര്യക്ഷമമാക്കുന്നു.",
    step1Li1: "റാക്കുകൾ: A, B, C, തുടങ്ങിയ ലേബലുള്ള പ്രധാന സംഭരണ ​​ഘടനകൾ.",
    step1Li2: "ഷെൽഫുകൾ: ഓരോ റാക്കിലുമുള്ള തിരശ്ചീന തലങ്ങൾ, 1, 2, 3, തുടങ്ങിയ നമ്പറുകൾ.",
    step1Li3: "ബിന്നുകൾ: വ്യക്തിഗത സംഭരണ ​​കമ്പാർട്ട്‌മെന്റുകൾ, 01, 02, 03, തുടങ്ങിയ നമ്പറുകൾ.",
    step1P2_part1: "ഒരു പൂർണ്ണമായ ലൊക്കേഷൻ ",
    step1P2_part2: " എന്ന് കാണപ്പെടും, അതായത് റാക്ക് A, ഷെൽഫ് 2, ബിൻ 5.",
    step1H6A: "A. വിഷ്വൽ വെയർഹൗസ് ലേഔട്ട് ഉദാഹരണം",
    screenshot1Title: "വെയർഹൗസ് ലേഔട്ട് ഘടന",
    screenshot1H3: "ഫിസിക്കൽ വെയർഹൗസ് ലേഔട്ട്",
    screenshot1P: "റാക്ക്-ഷെൽഫ്-ബിൻ ഹൈറാർക്കി വിഷ്വലൈസേഷൻ",
    rackA: "റാക്ക് A",
    rackB: "റാക്ക് B",
    shelf3: "ഷെൽഫ് 3",
    empty: "ഒഴിഞ്ഞത്",
    shelf2: "ഷെൽഫ് 2",
    available: "ലഭ്യം",
    shelf1: "ഷെൽഫ് 1",
    nearlyFull: "ഏകദേശം നിറഞ്ഞു",
    legend: "ലെജൻഡ്",
    emptyRange: "ഒഴിഞ്ഞത് (0-25%)",
    availableRange: "ലഭ്യം (26-80%)",
    nearlyFullRange: "ഏകദേശം നിറഞ്ഞു (81-95%)",
    atCapacityRange: "ശേഷിയിൽ (96-100%)",
    atCapacityBadge: "ശേഷിയിൽ",

    step2Title: "വെയർഹൗസ് ലൊക്കേഷൻ ഡാഷ്‌ബോർഡ് ആക്‌സസ് ചെയ്യുക",
    step2P1: "പ്രധാന സൈഡ്‌ബാറിൽ നിന്ന് വെയർഹൗസ് ലൊക്കേഷൻ വിഭാഗത്തിലേക്ക് പോകുക. ഈ ഡാഷ്‌ബോർഡ് നിങ്ങളുടെ മുഴുവൻ വെയർഹൗസ് ലേഔട്ടിന്റെയും നിലവിലെ സ്റ്റോക്ക് വിതരണത്തിന്റെയും ഒരു വിഷ്വൽ അവലോകനം നൽകുന്നു.",
    step2H6A: "A. ഡാഷ്‌ബോർഡ് അവലോകനം",
    screenshot2Title: "വെയർഹൗസ് ലൊക്കേഷൻ ഡാഷ്‌ബോർഡ് ഇന്റർഫേസ്",
    screenshot2H2: "വെയർഹൗസ് ലൊക്കേഷൻ മാനേജ്മെന്റ്",
    screenshot2P: "നിങ്ങളുടെ വെയർഹൗസ് സംഭരണ ​​ലൊക്കേഷനുകളുടെ വിഷ്വൽ അവലോകനം",
    addLocation: "സ്ഥലം ചേർക്കുക",
    layoutView: "ലേഔട്ട് കാഴ്ച",
    totalBins: "മൊത്തം ബിന്നുകൾ",
    occupiedBins: "ഒഴിഞ്ഞുപോയ ബിന്നുകൾ",
    nearlyFullStat: "ഏകദേശം നിറഞ്ഞു",
    availableStat: "ലഭ്യം",
    warehouseLayout: "വെയർഹൗസ് ലേഔട്ട്",
    availableBadge: "ലഭ്യം",
    nearlyFullBadge: "ഏകദേശം നിറഞ്ഞു",
    rackC: "റാക്ക് C",

    step2H6B: "B. കളർ കോഡിംഗ് സിസ്റ്റം മനസ്സിലാക്കുക",
    screenshot3Title: "ബിൻ സ്റ്റാറ്റസ് കളർ ഗൈഡ്",
    capacityStatusColors: "ശേഷി നില കളറുകൾ",
    emptyBin: "ഒഴിഞ്ഞത് (0-25%)",
    readyForNewStock: "പുതിയ സ്റ്റോക്ക് അലോക്കേഷന് തയ്യാറാണ്",
    availableBin: "ലഭ്യം (26-80%)",
    optimalStockLevel: "ഒപ്റ്റിമൽ സ്റ്റോക്ക് ലെവൽ, കൂടുതൽ സ്വീകരിക്കാം",
    nearlyFullBin: "ഏകദേശം നിറഞ്ഞു (81-95%)",
    limitedSpaceRemaining: "പരിമിതമായ സ്ഥലം ശേഷിക്കുന്നു",
    atCapacityBin: "ശേഷിയിൽ (96-100%)",
    noAdditionalSpace: "കൂടുതൽ സ്ഥലം ലഭ്യമല്ല",
    operationalGuidelines: "പ്രവർത്തനപരമായ മാർഗ്ഗനിർദ്ദേശങ്ങൾ",
    bestPractices: "🎯 മികച്ച സമ്പ്രദായങ്ങൾ",
    bpLi1: "• ഒപ്റ്റിമൽ കാര്യക്ഷമതയ്ക്കായി ബിന്നുകൾ 70-85% ശേഷിയിൽ നിലനിർത്തുക",
    bpLi2: "• പെട്ടെന്നുള്ള സ്റ്റോക്ക് ചലനങ്ങൾക്ക് ചില ബിന്നുകൾ മാറ്റിവയ്ക്കുക",
    bpLi3: "• സമാന ഉൽപ്പന്നങ്ങളെ അടുത്തുള്ള ബിന്നുകളിൽ ഗ്രൂപ്പ് ചെയ്യുക",
    warnings: "⚠️ മുന്നറിയിപ്പുകൾ",
    wLi1: "• മഞ്ഞ ബിന്നുകൾക്ക് പുനഃസംഘടനയ്ക്കായി ശ്രദ്ധ ആവശ്യമാണ്",
    wLi2: "• ചുവന്ന ബിന്നുകൾ പുതിയ സ്റ്റോക്ക് അലോക്കേഷനെ തടയുന്നു",
    wLi3: "• ഒഴിഞ്ഞ ബിന്നുകൾ ആവശ്യകത പ്രശ്നങ്ങളെ സൂചിപ്പിക്കാം",

    step3Title: "ബിൻ ലൊക്കേഷനുകൾ സൃഷ്ടിക്കുകയും കൈകാര്യം ചെയ്യുകയും ചെയ്യുക",
    step3P1: "നിങ്ങളുടെ വെയർഹൗസ് വികസിപ്പിക്കുമ്പോഴോ സംഭരണ ​​കാര്യക്ഷമത ഒപ്റ്റിമൈസ് ചെയ്യുമ്പോഴോ പുതിയ ബിൻ ലൊക്കേഷനുകൾ ചേർക്കേണ്ടത് അത്യാവശ്യമാണ്. ഹൈറാർക്കിക്കൽ ഘടന നിലനിർത്തിക്കൊണ്ട് സിസ്റ്റം പ്രക്രിയയിലൂടെ നിങ്ങളെ നയിക്കുന്നു.",
    step3H6A: "A. പുതിയ ലൊക്കേഷൻ ഫോം ചേർക്കുക",
    screenshot4Title: "പുതിയ വെയർഹൗസ് ലൊക്കേഷൻ സൃഷ്ടിക്കുക",
    createNewLocation: "പുതിയ ലൊക്കേഷൻ സൃഷ്ടിക്കുക",
    defineNewStorage: "നിങ്ങളുടെ വെയർഹൗസ് ഹൈറാർക്കിയിൽ ഒരു പുതിയ സംഭരണ ​​ബിൻ നിർവചിക്കുക.",
    rackId: "റാക്ക് ID *",
    rackIdPlaceholder: "ഉദാ, A, B, C",
    rackIdHint: "റാക്ക് തിരിച്ചറിയലിനായി A-Z അക്ഷരങ്ങൾ ഉപയോഗിക്കുക",
    shelfNumber: "ഷെൽഫ് നമ്പർ *",
    shelfNumberPlaceholder: "ഉദാ, 1, 2, 3",
    shelfNumberHint: "താഴെ നിന്ന് (1) മുകളിലേക്ക് ഷെൽഫ് നിലകൾ",
    binNumber: "ബിൻ നമ്പർ *",
    binNumberPlaceholder: "ഉദാ, 01, 02, 03",
    binNumberHint: "2-അക്ക ഫോർമാറ്റ് ഉപയോഗിക്കുക (01, 02, etc.)",
    binCapacity: "ബിൻ ശേഷി (യൂണിറ്റുകൾ) *",
    binCapacityPlaceholder: "ഉദാ, 100, 150, 200",
    binCapacityHint: "ഈ ബിന്നിന് എത്ര യൂണിറ്റുകൾ വരെ ഉൾക്കൊള്ളാൻ കഴിയും",
    locationType: "ലൊക്കേഷൻ തരം",
    standardStorage: "സാധാരണ സംഭരണം",
    coldStorage: "ശീതീകരിച്ച സംഭരണം",
    highSecurity: "ഉയർന്ന സുരക്ഷ",
    quarantine: "ക്വാറന്റൈൻ",
    locationPreview: "ലൊക്കേഷൻ പ്രിവ്യൂ",
    generatedLocation: "സൃഷ്ടിച്ച ലൊക്കേഷൻ: A-2-05",
    locationDetails: "റാക്ക് A, ഷെൽഫ് 2, ബിൻ 5 • ശേഷി: 150 യൂണിറ്റുകൾ",
    cancel: "റദ്ദാക്കുക",
    createLocation: "ലൊക്കേഷൻ സൃഷ്ടിക്കുക",

    step3H6B: "B. ലൊക്കേഷൻ വാലിഡേഷൻ ആൻഡ് കൺസ്ട്രെയ്ന്റ്സ്",
    screenshot5Title: "വാലിഡേഷൻ നിയമങ്ങളും പിശക് കൈകാര്യം ചെയ്യലും",
    validLocationConfig: "സാധുവായ ലൊക്കേഷൻ കോൺഫിഗറേഷൻ",
    locationAvailable: "ലൊക്കേഷൻ A-2-05 ലഭ്യമാണ്, കൂടാതെ നാമകരണ കൺവെൻഷനുകൾ പിന്തുടരുന്നു.",
    vlcLi1: "✓ റാക്ക് ID ഫോർമാറ്റ് ശരിയാണ് (ഒറ്റ അക്ഷരം)",
    vlcLi2: "✓ ഷെൽഫ് നമ്പർ പരിധിയിലാണ് (1-10)",
    vlcLi3: "✓ ബിൻ നമ്പർ 2-അക്ക ഫോർമാറ്റ് പിന്തുടരുന്നു",
    vlcLi4: "✓ തനിപ്പകർപ്പ് ലൊക്കേഷൻ നിലവിലില്ല",
    locationCreationErrors: "ലൊക്കേഷൻ സൃഷ്ടിക്കൽ പിശകുകൾ",
    lceLi1: "• ലൊക്കേഷൻ B-3-02 സിസ്റ്റത്തിൽ ഇതിനകം നിലവിലുണ്ട്",
    lceLi2: "• റാക്ക് ID ഒരു ഒറ്റ അക്ഷരം (A-Z) ആയിരിക്കണം",
    lceLi3: "• ബിൻ ശേഷി 0-നേക്കാൾ വലുതായിരിക്കണം",
    lceLi4: "• ഷെൽഫ് നമ്പർ 10 ലെവലുകൾ കവിയാൻ പാടില്ല",
    namingBestPractices: "നാമകരണ മികച്ച സമ്പ്രദായങ്ങൾ",
    nbpLi1: "• ഫിസിക്കൽ ലേഔട്ടിന്റെ അടിസ്ഥാനത്തിൽ ലോജിക്കൽ റാക്ക് നാമകരണം (A-Z) ഉപയോഗിക്കുക",
    nbpLi2: "• സ്ഥിരതയ്ക്കായി ഷെൽഫുകൾ താഴെ നിന്ന് (1) മുകളിലേക്ക് നമ്പർ ചെയ്യുക",
    nbpLi3: "• ഭാവി വികസനത്തിനായി ചില അക്ഷരങ്ങൾ/നമ്പറുകൾ മാറ്റിവയ്ക്കുക",
    nbpLi4: "• റാക്കുകൾ അസൈൻ ചെയ്യുമ്പോൾ ഉൽപ്പന്ന വിഭാഗങ്ങൾ പരിഗണിക്കുക",

    step3H6C: "C. ബൾക്ക് ലൊക്കേഷൻ സൃഷ്ടിക്കൽ",
    screenshot6Title: "ഒന്നിലധികം ലൊക്കേഷനുകൾ ബൾക്ക് ആയി സൃഷ്ടിക്കുക",
    bulkCreateLocations: "ബൾക്ക് ആയി ലൊക്കേഷനുകൾ സൃഷ്ടിക്കുക",
    createMultipleBins: "പുതിയ റാക്കുകൾക്കോ ഷെൽഫുകൾക്കോ വേണ്ടി ഒരേസമയം ഒന്നിലധികം ബിൻ ലൊക്കേഷനുകൾ സൃഷ്ടിക്കുക.",
    rackRange: "റാക്ക് ശ്രേണി",
    from: "മുതൽ",
    fromPlaceholder: "മുതൽ (ഉദാ, A)",
    fromNumberPlaceholder: "മുതൽ (ഉദാ, 1)",
    to: "വരെ",
    toPlaceholder: "വരെ (ഉദാ, C)",
    toNumberPlaceholder: "വരെ (ഉദാ, 3)",
    shelfRange: "ഷെൽഫ് ശ്രേണി",
    binsPerShelf: "ഓരോ ഷെൽഫിലും ബിന്നുകൾ",
    binsPerShelfPlaceholder: "ഉദാ, 5",
    defaultCapacity: "സ്ഥിരസ്ഥിതി ശേഷി",
    defaultCapacityPlaceholder: "ഉദാ, 100",
    preview: "പ്രിവ്യൂ: സൃഷ്ടിക്കേണ്ട ലൊക്കേഷനുകൾ",
    totalLocations: "മൊത്തം: 45 ലൊക്കേഷനുകൾ",
    andMore: "... കൂടാതെ 25 എണ്ണം കൂടി",
    createLocations: "45 ലൊക്കേഷനുകൾ സൃഷ്ടിക്കുക",

    step4Title: "ഉൽപ്പന്ന അലോക്കേഷനും ചലനവും",
    step4P1: "നിങ്ങളുടെ വെയർഹൗസ് ലൊക്കേഷനുകൾ സജ്ജീകരിച്ചുകഴിഞ്ഞാൽ, ഉൽപ്പന്നങ്ങൾ ബിന്നുകളിൽ എങ്ങനെ അലോക്കേറ്റ് ചെയ്യുന്നുവെന്നും ലൊക്കേഷനുകൾക്കിടയിൽ സ്റ്റോക്ക് എങ്ങനെ കാര്യക്ഷമമായി നീക്കാമെന്നും നിങ്ങൾ മനസ്സിലാക്കണം.",
    step4H6A: "A. ഓട്ടോമാറ്റിക് ഉൽപ്പന്ന അലോക്കേഷൻ",
    screenshot7Title: "ഓട്ടോ-അലോക്കേഷൻ സിസ്റ്റം",
    autoAllocationFeature: "ഓട്ടോ-അലോക്കേഷൻ ഫീച്ചർ",
    autoAllocationDesc: "പുതിയ സ്റ്റോക്ക് ലഭിക്കുമ്പോൾ, RetailOS ഓട്ടോമാറ്റിക്കായി ഒപ്റ്റിമൽ ബിൻ ലൊക്കേഷനുകൾ നിർദ്ദേശിക്കാൻ കഴിയും, ഇത് അടിസ്ഥാനമാക്കി:",
    aAfLi1: "• ലഭ്യമായ ബിൻ ശേഷി",
    aAfLi2: "• ഉൽപ്പന്ന വിഭാഗം ഗ്രൂപ്പിംഗ്",
    aAfLi3: "• പിക്ക് ചെയ്യാനുള്ള കാര്യക്ഷമത (എളുപ്പത്തിൽ ലഭ്യമാകുന്ന സ്ഥലങ്ങളിൽ പ്രിയപ്പെട്ട ഇനങ്ങൾ)",
    aAfLi4: "• കാലഹരണപ്പെടൽ മാനേജ്മെന്റിനായുള്ള FIFO അനുവാദം",
    allocationSuggestions: "അലോക്കേഷൻ നിർദ്ദേശങ്ങൾ: ഓർഗാനിക് അരി 1kg (50 യൂണിറ്റുകൾ)",
    recommended: " (ശുപാർശ ചെയ്തത്)",
    bestMatch: "മികച്ച പൊരുത്തം",
    alternative: " (പകരമായി)",
    goodOption: "നല്ല ഓപ്ഷൻ",
    availableSugg: " (ലഭ്യം)",
    lastResort: "അവസാന ആശ്രയം",
    manualSelection: "മാനുവൽ തിരഞ്ഞെടുക്കൽ",
    acceptRecommendation: "നിർദ്ദേശം അംഗീകരിക്കുക",

    step4H6B: "B. മാനുവൽ സ്റ്റോക്ക് ചലനം",
    screenshot8Title: "ലൊക്കേഷനുകൾക്കിടയിൽ സ്റ്റോക്ക് നീക്കുക",
    moveStock: "സ്റ്റോക്ക് നീക്കുക",
    transferProducts: "ഒപ്റ്റിമൈസേഷൻ അല്ലെങ്കിൽ പുനഃസംഘടനയ്ക്കായി വെയർഹൗസ് ലൊക്കേഷനുകൾക്കിടയിൽ ഉൽപ്പന്നങ്ങൾ കൈമാറുക.",
    sourceLocation: "ഉറവിട ലൊക്കേഷൻ",
    product: "ഉൽപ്പന്നം:",
    currentStock: "നിലവിലെ സ്റ്റോക്ക്:",
    binCapacityLabel: "ബിൻ ശേഷി:",
    quantityToMove: "നീക്കേണ്ട അളവ്",
    enterQuantity: "അളവ് നൽകുക",
    destinationLocation: "ലക്ഷ്യസ്ഥാന ലൊക്കേഷൻ",
    selectDestination: "ലക്ഷ്യസ്ഥാനം തിരഞ്ഞെടുക്കുക",
    searchLocation: "ലൊക്കേഷൻ തിരയുക (ഉദാ, A-1-04)",
    movementSummary: "ചലന സംഗ്രഹം",
    moving: "നീങ്ങുന്നു:",
    fromTo: "മുതൽ: A-2-03 → വരെ: A-1-04",
    reason: "കാരണം: ഷെൽഫ് സ്ഥല ഉപയോഗം ഒപ്റ്റിമൈസ് ചെയ്യുക",
    cancelMovement: "ചലനം റദ്ദാക്കുക",
    confirmMovement: "സ്റ്റോക്ക് ചലനം സ്ഥിരീകരിക്കുക",

    nextStepsTitle: "വെയർഹൗസ് സെറ്റപ്പ് പൂർത്തിയായി!",
    nextStepsDescription: "നിങ്ങളുടെ വെയർഹൗസ് ഇപ്പോൾ ഓർഗനൈസ് ചെയ്തിരിക്കുന്നു, കാര്യക്ഷമമായ പ്രവർത്തനങ്ങൾക്ക് തയ്യാറാണ്. അടുത്തതായി, ഉത്പന്നങ്ങൾ എങ്ങനെ ചേർക്കാം, നിങ്ങളുടെ ഉപഭോക്താക്കൾക്ക് ആകർഷകമായ ഡീലുകൾ എങ്ങനെ സൃഷ്ടിക്കാം എന്നത് പഠിക്കുക.",
    nextStepsButton: "ഉത്പന്ന & ഉള്ളടക്ക നിര್ವഹണത്തിലേക്ക് തുടരുക",
    organicRiceSection: "ഓർഗാനിക് അരി വിഭാഗം",
    organicBasmatiRice: "ഓർഗാനിക് ബാസ്മതി അരി 1kg",
    sameProductCategory: "ഒരേ ഉൽപ്പന്ന വിഭാഗം • 45 യൂണിറ്റുകൾ ലഭ്യമായ സ്ഥലം",
    similarProductsNearby: "അടുത്തുള്ള സമാന ഉൽപ്പന്നങ്ങൾ • 60 യൂണിറ്റുകൾ ലഭ്യമായ സ്ഥലം",
    emptyBinHigherShelf: "ഒഴിഞ്ഞ ബിൻ • ഉയർന്ന ഷെൽഫ് ലെവൽ",
  }
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
  <div className="flex items-start gap-4 mt-6 w-full">
    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">{number}</div>
    <div className="flex-grow min-w-0">
      <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-6 sm:mb-2">{title}</h4>
      <div className="prose prose-slate max-w-none text-sm sm:text-base -ml-12 sm:ml-0">
        {children}
      </div>
    </div>
  </div>
);

export default function ManualWarehouse() {
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
          <LanguageSelector language={language} setLanguage={() => {}} readOnly />
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Warehouse className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                {t('pageTitle')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600">
                {t('description')}
              </p>
            </div>

            <section className="space-y-8">
              <Step number="1" title={t('step1Title')}>
                <p>
                  {t('step1P1')}
                </p>
                <ul className="mt-4 space-y-2">
                  <li>{t('step1Li1')}</li>
                  <li>{t('step1Li2')}</li>
                  <li>{t('step1Li3')}</li>
                </ul>
                <p className="mt-4">
                  {t('step1P2_part1')} <code className="bg-slate-100 px-2 py-1 rounded">A-2-05</code>{t('step1P2_part2')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step1H6A')}</h6>
                <Screenshot title={t('screenshot1Title')}>
                  <div className="space-y-6">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-slate-800">{t('screenshot1H3')}</h3>
                      <p className="text-sm text-slate-500">{t('screenshot1P')}</p>
                    </div>
                    
                    {/* Rack A */}
                    <div className="border border-slate-300 rounded-lg p-4 bg-blue-50">
                      <h4 className="text-center font-semibold text-blue-800 mb-4">{t('rackA')}</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs text-slate-600 text-center mb-2">{t('shelf3')}</div>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map(bin => (
                              <div key={bin} className="bg-white border border-blue-300 rounded p-2 text-center">
                                <div className="text-xs font-semibold text-blue-800">A-3-0{bin}</div>
                                <div className="text-[10px] text-blue-600">{t('empty')}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-600 text-center mb-2">{t('shelf2')}</div>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map(bin => (
                              <div key={bin} className="bg-green-100 border border-green-300 rounded p-2 text-center">
                                <div className="text-xs font-semibold text-green-800">A-2-0{bin}</div>
                                <div className="text-[10px] text-green-700">75%</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-600 text-center mb-2">{t('shelf1')}</div>
                          <div className="grid  grid-cols-3 sm:grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map(bin => (
                              <div key={bin} className="bg-yellow-100 border border-yellow-300 rounded p-2 text-center">
                                <div className="text-xs font-semibold text-yellow-800">A-1-0{bin}</div>
                                <div className="text-[10px] text-yellow-700">90%</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-wrap justify-center gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-white border border-slate-300 rounded"></div>
                        <span>{t('emptyRange')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                        <span>{t('availableRange')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
                        <span>{t('nearlyFullRange')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                        <span>{t('atCapacityRange')}</span>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="2" title={t('step2Title')}>
                <p>
                  {t('step2P1')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step2H6A')}</h6>
                <Screenshot title={t('screenshot2Title')}>
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                          <h2 className="text-xl font-bold text-slate-800 break-words">{t('screenshot2H2')}</h2>
                        <p className="text-sm text-slate-500">{t('screenshot2P')}</p>
                      </div>
                        <div className="flex flex-wrap gap-2">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          <Plus className="w-4 h-4 mr-2" />
                          {t('addLocation')}
                        </Button>
                        <Button variant="outline">
                          <Grid className="w-4 h-4 mr-2" />
                          {t('layoutView')}
                        </Button>
                      </div>
                    </div>

                    {/* Warehouse Statistics */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">45</div>
                        <div className="text-sm text-blue-700">{t('totalBins')}</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">32</div>
                        <div className="text-sm text-green-700">{t('occupiedBins')}</div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-amber-600">8</div>
                        <div className="text-sm text-amber-700">{t('nearlyFullStat')}</div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-slate-600">13</div>
                        <div className="text-sm text-slate-700">{t('availableStat')}</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="font-semibold text-slate-700">{t('warehouseLayout')}</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-100 text-green-800">{t('availableBadge')}</Badge>
                          <Badge className="bg-yellow-100 text-yellow-800">{t('nearlyFullBadge')}</Badge>
                          <Badge className="bg-red-100 text-red-800">{t('atCapacityBadge')}</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Rack A */}
                        <div className="border border-slate-200 rounded-lg p-4 bg-white">
                          <h4 className="font-semibold text-center mb-4 text-slate-700">{t('rackA')}</h4>
                          <div className="space-y-3">
                            <div className="text-xs text-slate-500 text-center">{t('shelf1')}</div>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                              {[1, 2, 3, 4, 5].map(bin => (
                                <div key={bin} className="bg-green-100 border border-green-300 rounded p-2 text-center cursor-pointer hover:shadow-sm transition-shadow">
                                  <div className="text-xs font-semibold">A-1-0{bin}</div>
                                  <div className="text-[10px] text-green-700">75%</div>
                                </div>
                              ))}
                            </div>
                            <div className="text-xs text-slate-500 text-center">{t('shelf2')}</div>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                              {[1, 2, 3, 4, 5].map(bin => (
                                <div key={bin} className="bg-yellow-100 border border-yellow-300 rounded p-2 text-center cursor-pointer hover:shadow-sm transition-shadow">
                                  <div className="text-xs font-semibold">A-2-0{bin}</div>
                                  <div className="text-[10px] text-yellow-700">90%</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Rack B */}
                        <div className="border border-slate-200 rounded-lg p-4 bg-white">
                          <h4 className="font-semibold text-center mb-4 text-slate-700">{t('rackB')}</h4>
                          <div className="space-y-3">
                            <div className="text-xs text-slate-500 text-center">{t('shelf1')}</div>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                              {[1, 2, 3, 4, 5].map(bin => (
                                <div key={bin} className={`${bin <= 2 ? 'bg-red-100 border-red-300' : 'bg-green-100 border-green-300'} border rounded p-2 text-center cursor-pointer hover:shadow-sm transition-shadow`}>
                                  <div className="text-xs font-semibold">B-1-0{bin}</div>
                                  <div className={`${bin <= 2 ? 'text-red-700' : 'text-green-700'} text-[10px]`}>
                                    {bin <= 2 ? '100%' : '45%'}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Rack C */}
                        <div className="border border-slate-200 rounded-lg p-4 bg-white">
                          <h4 className="font-semibold text-center mb-4 text-slate-700">{t('rackC')}</h4>
                          <div className="space-y-3">
                            <div className="text-xs text-slate-500 text-center">{t('shelf1')}</div>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                              {[1, 2, 3, 4, 5].map(bin => (
                                <div key={bin} className="bg-slate-100 border border-slate-300 rounded p-2 text-center cursor-pointer hover:shadow-sm transition-shadow">
                                  <div className="text-xs font-semibold">C-1-0{bin}</div>
                                  <div className="text-[10px] text-slate-500">{t('empty')}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step2H6B')}</h6>
                <Screenshot title={t('screenshot3Title')}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-700">{t('capacityStatusColors')}</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <div className="w-8 h-8 bg-slate-100 border border-slate-300 rounded flex items-center justify-center">
                            <span className="text-xs">0%</span>
                          </div>
                          <div>
                            <div className="font-medium text-slate-700">{t('emptyBin')}</div>
                            <div className="text-sm text-slate-500">{t('readyForNewStock')}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-100 border border-green-300 rounded flex items-center justify-center">
                            <span className="text-xs">75%</span>
                          </div>
                          <div>
                            <div className="font-medium text-green-700">{t('availableBin')}</div>
                            <div className="text-sm text-green-600">{t('optimalStockLevel')}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <div className="w-8 h-8 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center">
                            <span className="text-xs">90%</span>
                          </div>
                          <div>
                            <div className="font-medium text-yellow-700">{t('nearlyFullBin')}</div>
                            <div className="text-sm text-yellow-600">{t('limitedSpaceRemaining')}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <div className="w-8 h-8 bg-red-100 border border-red-300 rounded flex items-center justify-center">
                            <span className="text-xs">100%</span>
                          </div>
                          <div>
                            <div className="font-medium text-red-700">{t('atCapacityBin')}</div>
                            <div className="text-sm text-red-600">{t('noAdditionalSpace')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-700">{t('operationalGuidelines')}</h4>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="font-medium text-blue-800">{t('bestPractices')}</div>
                          <ul className="mt-2 text-blue-700 space-y-1">
                            <li>{t('bpLi1')}</li>
                            <li>{t('bpLi2')}</li>
                            <li>{t('bpLi3')}</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-lg">
                          <div className="font-medium text-amber-800">{t('warnings')}</div>
                          <ul className="mt-2 text-amber-700 space-y-1">
                            <li>{t('wLi1')}</li>
                            <li>{t('wLi2')}</li>
                            <li>{t('wLi3')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="3" title={t('step3Title')}>
                <p>
                  {t('step3P1')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step3H6A')}</h6>
                <Screenshot title={t('screenshot4Title')}>
                  <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">{t('createNewLocation')}</h3>
                    <p className="text-sm text-slate-500 mb-6">{t('defineNewStorage')}</p>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('rackId')}</label>
                          <Input placeholder={t('rackIdPlaceholder')} className="w-full" />
                          <p className="text-xs text-slate-500 mt-1">{t('rackIdHint')}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('shelfNumber')}</label>
                          <Input type="number" placeholder={t('shelfNumberPlaceholder')} className="w-full" />
                          <p className="text-xs text-slate-500 mt-1">{t('shelfNumberHint')}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('binNumber')}</label>
                          <Input type="number" placeholder={t('binNumberPlaceholder')} className="w-full" />
                          <p className="text-xs text-slate-500 mt-1">{t('binNumberHint')}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('binCapacity')}</label>
                          <Input type="number" placeholder={t('binCapacityPlaceholder')} className="w-full" />
                          <p className="text-xs text-slate-500 mt-1">{t('binCapacityHint')}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">{t('locationType')}</label>
                          <select className="w-full p-2 border border-slate-300 rounded-md">
                            <option>{t('standardStorage')}</option>
                            <option>{t('coldStorage')}</option>
                            <option>{t('highSecurity')}</option>
                            <option>{t('quarantine')}</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('locationPreview')}</label>
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <div>
                              <div className="font-medium text-blue-800">{t('generatedLocation')}</div>
                              <div className="text-sm text-blue-600">{t('locationDetails')}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-end gap-3">
                        <Button variant="outline">{t('cancel')}</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {t('createLocation')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step3H6B')}</h6>
                <Screenshot title={t('screenshot5Title')}>
                  <div className="space-y-4">
                    <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-green-800">{t('validLocationConfig')}</h5>
                          <p className="text-sm text-green-700 mt-1">{t('locationAvailable')}</p>
                          <div className="mt-3 space-y-1 text-xs text-green-600">
                            <div>{t('vlcLi1')}</div>
                            <div>{t('vlcLi2')}</div>
                            <div>{t('vlcLi3')}</div>
                            <div>{t('vlcLi4')}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-red-800">{t('locationCreationErrors')}</h5>
                          <ul className="mt-2 text-sm text-red-700 space-y-1">
                            <li>{t('lceLi1')}</li>
                            <li>{t('lceLi2')}</li>
                            <li>{t('lceLi3')}</li>
                            <li>{t('lceLi4')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 text-amber-600 mt-0.5">💡</div>
                        <div>
                          <h5 className="font-medium text-amber-800">{t('namingBestPractices')}</h5>
                          <ul className="mt-2 text-sm text-amber-700 space-y-1">
                            <li>{t('nbpLi1')}</li>
                            <li>{t('nbpLi2')}</li>
                            <li>{t('nbpLi3')}</li>
                            <li>{t('nbpLi4')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step3H6C')}</h6>
                <Screenshot title={t('screenshot6Title')}>
                      <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">{t('bulkCreateLocations')}</h3>
                    <p className="text-sm text-slate-500 mb-6">{t('createMultipleBins')}</p>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('rackRange')}</label>
                            <div className="flex flex-col sm:flex-row items-stretch gap-2">
                              <Input placeholder={t('fromPlaceholder')} className="flex-1 min-w-0" />
                              <span className="text-slate-500">{t('to')}</span>
                              <Input placeholder={t('toPlaceholder')} className="flex-1 min-w-0" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('shelfRange')}</label>
                            <div className="flex flex-col sm:flex-row items-stretch gap-2">
                              <Input type="number" placeholder={t('fromNumberPlaceholder')} className="flex-1 min-w-0" />
                              <span className="text-slate-500">{t('to')}</span>
                              <Input type="number" placeholder={t('toNumberPlaceholder')} className="flex-1 min-w-0" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('binsPerShelf')}</label>
                            <Input type="number" placeholder={t('binsPerShelfPlaceholder')} className="w-full" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">{t('defaultCapacity')}</label>
                            <Input type="number" placeholder={t('defaultCapacityPlaceholder')} className="w-full" />
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium text-slate-700">{t('preview')}</h4>
                              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-h-64 overflow-y-auto overflow-x-auto">
                            <div className="space-y-1 text-sm">
                              <div className="font-medium text-slate-700 mb-2">{t('totalLocations')}</div>
                              <div className="space-y-1 text-slate-600">
                                <div>A-1-01, A-1-02, A-1-03, A-1-04, A-1-05</div>
                                <div>A-2-01, A-2-02, A-2-03, A-2-04, A-2-05</div>
                                <div>A-3-01, A-3-02, A-3-03, A-3-04, A-3-05</div>
                                <div>B-1-01, B-1-02, B-1-03, B-1-04, B-1-05</div>
                                <div className="text-slate-500">{t('andMore')}</div>
                              </div>
                            </div>
                          </div>
                              <div className="flex flex-wrap justify-end gap-3">
                            <Button variant="outline">{t('cancel')}</Button>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              {t('createLocations')}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <Step number="4" title={t('step4Title')}>
                <p>
                  {t('step4P1')}
                </p>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4H6A')}</h6>
                <Screenshot title={t('screenshot7Title')}>
                  <div className="space-y-6">
                    <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-blue-800">{t('autoAllocationFeature')}</h5>
                          <p className="text-sm text-blue-700 mt-1">
                            {t('autoAllocationDesc')}
                          </p>
                          <ul className="mt-2 text-sm text-blue-700 space-y-1">
                            <li>{t('aAfLi1')}</li>
                            <li>{t('aAfLi2')}</li>
                            <li>{t('aAfLi3')}</li>
                            <li>{t('aAfLi4')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium text-slate-700 mb-4">{t('allocationSuggestions')}</h4>
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-green-50 border border-green-200 rounded">
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium text-green-800">A-2-03{t('recommended')}</div>
                              <div className="text-sm text-green-600">{t('sameProductCategory')}</div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">{t('bestMatch')}</Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-blue-50 border border-blue-200 rounded">
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium text-blue-800">B-1-04{t('alternative')}</div>
                              <div className="text-sm text-blue-600">{t('similarProductsNearby')}</div>
                            </div>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800">{t('goodOption')}</Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-amber-50 border border-amber-200 rounded">
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                              <MapPin className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                              <div className="font-medium text-amber-800">C-3-01{t('availableSugg')}</div>
                              <div className="text-sm text-amber-600">{t('emptyBinHigherShelf')}</div>
                            </div>
                          </div>
                          <Badge className="bg-amber-100 text-amber-800">{t('lastResort')}</Badge>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap justify-end gap-3">
                        <Button variant="outline">{t('manualSelection')}</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          {t('acceptRecommendation')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>

                <h6 className="font-semibold text-slate-700 mt-6 mb-3">{t('step4H6B')}</h6>
                <Screenshot title={t('screenshot8Title')}>
                  <div className="border border-slate-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">{t('moveStock')}</h3>
                    <p className="text-sm text-slate-500 mb-6">{t('transferProducts')}</p>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-slate-700 mb-3">{t('sourceLocation')}</h4>
                          <div className="border border-slate-200 rounded-lg p-4">
                              <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                                <Package className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-medium">A-2-03</div>
                                <div className="text-sm text-slate-500">{t('organicRiceSection')}</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                                <span className="text-slate-600">{t('product')}</span>
                                <span className="font-medium break-words">{t('organicBasmatiRice')}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600">{t('currentStock')}</span>
                                <span className="font-medium">120 units</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600">{t('binCapacityLabel')}</span>
                                <span className="font-medium">150 units (80%)</span>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t('quantityToMove')}</label>
                                <Input type="number" placeholder={t('enterQuantity')} max="120" className="w-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-slate-700 mb-3">{t('destinationLocation')}</h4>
                          <div className="border border-slate-200 rounded-lg p-4">
                            <div className="mb-3">
                              <label className="block text-sm font-medium text-slate-700 mb-2">{t('selectDestination')}</label>
                              <Input placeholder={t('searchLocation')} className="w-full" />
                            </div>
                            <div className="space-y-2">
                              <div className="p-3 border border-emerald-200 bg-emerald-50 rounded cursor-pointer">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div>
                                    <div className="font-medium text-emerald-800">A-1-04</div>
                                    <div className="text-sm text-emerald-600">40 units available space</div>
                                  </div>
                                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                                </div>
                              </div>
                              <div className="p-3 border border-slate-200 rounded cursor-pointer hover:bg-slate-50">
                                <div>
                                  <div className="font-medium">B-2-01</div>
                                  <div className="text-sm text-slate-500">85 units available space</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                        <h5 className="font-medium text-blue-800 mb-2">{t('movementSummary')}</h5>
                        <div className="text-sm text-blue-700 space-y-1">
                          <div className="break-words">{t('moving')} 30 units of {t('organicBasmatiRice')}</div>
                          <div>{t('fromTo')}</div>
                          <div>{t('reason')}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap justify-end gap-3">
                        <Button variant="outline">{t('cancelMovement')}</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          {t('confirmMovement')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Screenshot>
              </Step>

              <div className="mt-12 p-4 sm:p-6 bg-amber-50 border border-amber-200 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">{t('nextStepsTitle')}</h3>
                <p className="text-amber-700 mb-4">
                  {t('nextStepsDescription')}
                </p>
                <Link to={createPageUrl('ManualProductContent')} className="inline-block w-full sm:w-auto">
                  <Button className="bg-amber-600 hover:bg-amber-700 w-full sm:w-auto text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5">
                    <span className="truncate">{t('nextStepsButton')}</span>
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180 flex-shrink-0" />
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
