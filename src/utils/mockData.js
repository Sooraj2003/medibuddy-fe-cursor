export const mockBookings = [
  {
    id: 1,
    patientName: "Mr. Suresh Gaikwad",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "03 Nov'22",
    day: "Wednesday",
    time: "09:30-10:30AM",
    serviceType: "Home Sample Collection",
    testCount: "03",
    status: "confirmed"
  },
  {
    id: 2,
    patientName: "Mrs. Priya Sharma",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "04 Nov'22",
    day: "Thursday",
    time: "11:00-12:00PM",
    serviceType: "Home Sample Collection",
    testCount: "02",
    status: "confirmed"
  },
  {
    id: 3,
    patientName: "Mr. Rahul Patel",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    date: "05 Nov'22",
    day: "Friday",
    time: "02:30-03:30PM",
    serviceType: "Home Sample Collection",
    testCount: "04",
    status: "confirmed"
  },
  {
    id: 4,
    patientName: "Ms. Anjali Desai",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    date: "06 Nov'22",
    day: "Saturday",
    time: "10:00-11:00AM",
    serviceType: "Home Sample Collection",
    testCount: "01",
    status: "confirmed"
  }
];

export const mockLabTests = [
  {
    id: 1,
    name: "Complete Blood Count (CBC)",
    tags: ["For Amazon Employees"],
    location: "Home",
    type: "Lab",
    originalPrice: 800,
    price: 360,
    discount: 55,
    reportTime: "10-12 hrs"
  },
  {
    id: 2,
    name: "Thyroid Profile Total (T3, T4 & TSH)",
    tags: ["Health Screening"],
    location: "Home",
    type: "Lab",
    originalPrice: 1200,
    price: 480,
    discount: 60,
    reportTime: "24 hrs"
  },
  {
    id: 3,
    name: "HbA1c (Glycated Haemoglobin)",
    tags: ["Diabetes"],
    location: "Lab",
    type: "Lab",
    originalPrice: 600,
    price: 300,
    discount: 50,
    reportTime: "12 hrs"
  },
  {
    id: 4,
    name: "Lipid Profile Test",
    tags: ["Health Screening", "Center Visit"],
    location: "Home",
    type: "Lab",
    originalPrice: 900,
    price: 405,
    discount: 55,
    reportTime: "12-24 hrs"
  },
  {
    id: 5,
    name: "Comprehensive Full Body Checkup",
    tags: ["Full Body Checkup"],
    location: "Lab",
    type: "Lab",
    originalPrice: 4999,
    price: 1999,
    discount: 60,
    reportTime: "48 hrs"
  },
  {
    id: 6,
    name: "Vitamin D, B12 & Calcium Profile",
    tags: ["Health Screening"],
    location: "Home",
    type: "Lab",
    originalPrice: 2500,
    price: 1125,
    discount: 55,
    reportTime: "24 hrs"
  }
]; 