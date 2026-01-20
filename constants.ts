import { Grievance, GrievanceStatus } from './types';

export const MOCK_GRIEVANCES: Grievance[] = [
  {
    id: "HRG-2025-001",
    subject: "Water Supply Disruption in Gurugram Sector 45",
    description: "The water supply in Sector 45, Gurugram has been irregular for the past week. We are only receiving water for 30 minutes in the morning. This is causing severe inconvenience to residents.",
    location: "Sector 45, Gurugram",
    district: "Gurugram",
    category: "Water Supply",
    dateFiled: "2025-01-10",
    status: GrievanceStatus.UNDER_REVIEW,
    files: ["water_complaint.jpg"],
    lastUpdated: "2025-01-12",
    isAnonymized: false,
    assignedOfficer: "Sh. Vikram Singh (Executive Engineer, Public Health Department)",
    timeline: [
      { label: "Grievance Filed", date: "2025-01-10", status: "completed" },
      { label: "Assigned to Department", date: "2025-01-11", status: "completed" },
      { label: "Under Review", date: "2025-01-12", status: "current" }
    ],
    replies: []
  },
  {
    id: "HRG-2025-002",
    subject: "Road Pothole Complaint in Karnal",
    description: "There are multiple deep potholes on the main road near Sector 12, Karnal. These potholes are causing accidents and damage to vehicles. Immediate repair is required.",
    location: "Sector 12 Main Road, Karnal",
    district: "Karnal",
    category: "Road & Infrastructure",
    dateFiled: "2025-01-08",
    status: GrievanceStatus.IN_PROGRESS,
    files: ["pothole_photo1.jpg", "pothole_photo2.jpg"],
    lastUpdated: "2025-01-14",
    isAnonymized: false,
    assignedOfficer: "Sh. Amit Kumar (Junior Engineer, PWD Haryana)",
    timeline: [
      { label: "Grievance Filed", date: "2025-01-08", status: "completed" },
      { label: "Under Review", date: "2025-01-09", status: "completed" },
      { label: "Work In Progress", date: "2025-01-14", status: "current" }
    ],
    replies: [
      { author: "Nodal Officer", message: "Road repair work has been scheduled. Expected completion within 5 days.", date: "2025-01-14" }
    ]
  },
  {
    id: "HRG-2025-003",
    subject: "Electricity Outage in Faridabad",
    description: "Frequent power cuts in Sector 21, Faridabad for the last 3 days. Power goes off for 4-5 hours daily without any prior notice. This is affecting work from home employees and students.",
    location: "Sector 21, Faridabad",
    district: "Faridabad",
    category: "Electricity",
    dateFiled: "2025-01-05",
    status: GrievanceStatus.CLOSED,
    files: [],
    atr: "Issue resolved.",
    lastUpdated: "2025-01-09",
    isAnonymized: false,
    resolution: "Faulty transformer in the area has been replaced. Power supply has been restored and stabilized. Regular monitoring is being done.",
    closingOfficer: "Smt. Sunita Devi (Assistant Engineer, DHBVN)",
    timeline: [
      { label: "Grievance Filed", date: "2025-01-05", status: "completed" },
      { label: "Under Review", date: "2025-01-06", status: "completed" },
      { label: "Resolved", date: "2025-01-09", status: "completed" }
    ],
    replies: [
      { author: "Nodal Officer", message: "Our team is investigating the issue. We apologize for the inconvenience.", date: "2025-01-06" },
      { author: "Nodal Officer", message: "Faulty transformer identified. Replacement work started.", date: "2025-01-08" }
    ]
  },
  {
    id: "HRG-2025-004",
    subject: "Property Tax Issue in Rohtak",
    description: "I have received an incorrect property tax bill for my house in Model Town, Rohtak. The assessed area mentioned is incorrect and the tax amount is inflated. Request for reassessment.",
    location: "Model Town, Rohtak",
    district: "Rohtak",
    category: "Municipal Services",
    dateFiled: "2025-01-12",
    status: GrievanceStatus.SUBMITTED,
    files: ["tax_bill.pdf", "property_documents.pdf"],
    lastUpdated: "2025-01-12",
    isAnonymized: false,
    timeline: [
      { label: "Grievance Filed", date: "2025-01-12", status: "current" }
    ],
    replies: []
  },
  {
    id: "HRG-2025-005",
    subject: "Ration Card Update Request in Hisar",
    description: "I need to add my newborn child's name to the ration card. I have submitted the application at the local office 2 months ago but there is no update. Request expedited processing.",
    location: "Ward 15, Hisar City",
    district: "Hisar",
    category: "Public Distribution System (Ration)",
    dateFiled: "2025-01-03",
    status: GrievanceStatus.RESOLVED,
    files: ["birth_certificate.pdf"],
    lastUpdated: "2025-01-15",
    isAnonymized: false,
    resolution: "Ration card has been updated with the new family member. Updated card can be collected from the local distribution office.",
    closingOfficer: "Sh. Ramesh Chandra (District Food & Supply Officer)",
    timeline: [
      { label: "Grievance Filed", date: "2025-01-03", status: "completed" },
      { label: "Under Review", date: "2025-01-05", status: "completed" },
      { label: "Resolved", date: "2025-01-15", status: "completed" }
    ],
    replies: [
      { author: "Nodal Officer", message: "Your application has been located. Processing initiated.", date: "2025-01-05" }
    ]
  },
  {
    id: "HRG-2025-006",
    subject: "Garbage Collection Issue in Panipat",
    description: "Garbage has not been collected from our colony for the past 10 days. The pile of garbage near the community park is causing health hazards and foul smell.",
    location: "Ansal Sushant City, Panipat",
    district: "Panipat",
    category: "Municipal Services",
    dateFiled: "2025-01-14",
    status: GrievanceStatus.UNDER_REVIEW,
    files: ["garbage_photo.jpg"],
    lastUpdated: "2025-01-15",
    isAnonymized: true,
    assignedOfficer: "Sh. Deepak Sharma (Sanitary Inspector, Municipal Corporation Panipat)",
    timeline: [
      { label: "Grievance Filed", date: "2025-01-14", status: "completed" },
      { label: "Assigned to Department", date: "2025-01-15", status: "completed" },
      { label: "Under Review", date: "2025-01-15", status: "current" }
    ],
    replies: []
  },
  {
    id: "HRG-2025-007",
    subject: "Health Center Staff Absence in Ambala",
    description: "The Primary Health Center in Village Kesri, Ambala district has been without a doctor for the past month. Villagers have to travel 15 km for basic medical care.",
    location: "Village Kesri, Ambala",
    district: "Ambala",
    category: "Health Services",
    dateFiled: "2025-01-07",
    status: GrievanceStatus.IN_PROGRESS,
    files: [],
    lastUpdated: "2025-01-13",
    isAnonymized: false,
    assignedOfficer: "Dr. Priya Verma (CMO Office, Ambala)",
    timeline: [
      { label: "Grievance Filed", date: "2025-01-07", status: "completed" },
      { label: "Under Review", date: "2025-01-09", status: "completed" },
      { label: "Action In Progress", date: "2025-01-13", status: "current" }
    ],
    replies: [
      { author: "Nodal Officer", message: "Doctor posting order has been issued. Doctor will join within a week.", date: "2025-01-13" }
    ]
  },
  {
    id: "HRG-2025-008",
    subject: "Land Record Correction in Sonipat",
    description: "There is an error in my land records (Jamabandi). The area mentioned is incorrect. I have submitted application for correction but no action has been taken for 3 months.",
    location: "Village Barwasni, Sonipat",
    district: "Sonipat",
    category: "Revenue / Land Records",
    dateFiled: "2025-01-11",
    status: GrievanceStatus.SUBMITTED,
    files: ["jamabandi_copy.pdf", "application_receipt.pdf"],
    lastUpdated: "2025-01-11",
    isAnonymized: false,
    timeline: [
      { label: "Grievance Filed", date: "2025-01-11", status: "current" }
    ],
    replies: []
  }
];

export const DISTRICTS = [
  "Gurugram",
  "Faridabad",
  "Panipat",
  "Karnal",
  "Hisar",
  "Rohtak",
  "Ambala",
  "Yamunanagar",
  "Sonipat",
  "Bhiwani"
];

export const CATEGORIES = [
  "Water Supply",
  "Electricity",
  "Road & Infrastructure",
  "Police & Law Order",
  "Municipal Services",
  "Agriculture",
  "Health Services",
  "Education",
  "Revenue / Land Records",
  "Public Distribution System (Ration)"
];
