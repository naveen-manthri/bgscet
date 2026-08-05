import type { HostelData } from "../types/hostel";
import HostelImage from "../assets/images/hostel/Hostel-1.jpeg";

export const hostelData: HostelData = {
  aboutHostel: {
    title: "About Hostel",

    images: [
      {
        id: 1,
        src: HostelImage,
        alt: "BGSCET hostel",
      },
    ],

    description: [
      "The BGSCET has two separate hostels, one each for boys and girls, in its campus to cater to the needs of students from various parts of the country. Both hostel are provided with common kitchen and dining areas and is supported by a team of well experienced cooks. The hostel premises are cleanly maintained by a team of maintenance staff. Problems if any are attended immediately by the respective Wardens.",

      "All rooms are provided with necessary furniture for comfortable living of students. Vegetarian food and snacks are served and the menu is prepared by the students themselves. Hostel committee under the guidance of the Principal, and senior professors monitor hostel discipline, policies and other issues related to hostels. Leaving the hostel without prior permission from concerned authorities and late entry are not entertained and the parents are informed immediately.",
    ],
  },

  hostelCommittee: {
    title: "Hostel Committee Members",

    table: {
      columns: [
        { key: "slNo", label: "Sl.No" },
        { key: "member", label: "Committee Members" },
        { key: "designation", label: "Designation" },
        { key: "department", label: "Department" },
        { key: "inCharge", label: "In-Charge" },
        { key: "contact", label: "Contact Details" },
      ],

      rows: [
        {
          slNo: "1",
          member: "Dr. Ravikumar GK",
          designation: "Principal",
          department: "-",
          inCharge: "-",
          contact: "9964897207\nprincipal@bgscet.ac.in",
        },
        {
          slNo: "2",
          member: "Dr. Sangeetha S",
          designation: "Assistant Professor",
          department: "Chemistry",
          inCharge: "Girls Hostel Warden",
          contact: "9538414113\nSangeetha.chem@bgscet.ac.in",
        },
        {
          slNo: "3",
          member: "Mr. Chethan H V",
          designation: "Assistant Professor",
          department: "CS&E",
          inCharge: "Boys Hostel Warden",
          contact: "7795788309\nchethan.cse@bgscet.ac.in",
        },
      ],
    },
  },

  messTimings: {
    title: "Mess Timings",

    table: {
      columns: [
        { key: "meal", label: "Meal" },
        { key: "time", label: "Time" },
      ],

      rows: [
        {
          meal: "Breakfast",
          time: "7:30 AM - 8:30 AM",
        },
        {
          meal: "Lunch",
          time: "1:00 PM - 1:45 PM",
        },
        {
          meal: "Snack",
          time: "4:30 PM - 5:30 PM",
        },
        {
          meal: "Dinner",
          time: "7:30 PM - 8:30 PM",
        },
      ],
    },
  },

  hostelCommitteeResponsibilities: {
    title: "R & R Of Hostel Committee",

    points: [
    "To plan and monitor the maintenance of all infrastructure facilities associated with the hostel.",
    "To supervise hostel facilities and amenities, ensure their proper upkeep, receive students' complaints, and redress grievances.",
    "To monitor and counsel students regarding their conduct in the hostel and oversee their study schedules and discipline.",
    "To plan and recommend additional infrastructure facilities as and when required.",
    "To ensure the proper maintenance of boarding and lodging facilities and the smooth functioning of the hostel.",
    "To manage and oversee the receipts and payments related to hostel administration.",
  ],
  },

  hostelSOP: {
    title: "Standard Operating Procedure (SOP) for Hostel",

    points: [
      "Inmates should attend daily prayer at the temple at 7:00 PM along with the Warden.",
      "Ragging in any form is strictly prohibited. Those who indulge in such activities will be punished as per Government/University rules.",
      "Day scholars and other unauthorized students are not allowed inside the hostel.",
      "Inmates are not permitted to stay in the hostel during college working hours without prior permission from the Warden.",
      "Cases of illness or sickness should be reported immediately to the Resident Warden/Warden.",
      "All inmates must be in their rooms by 8:00 PM. Attendance will be taken at the same time.",
      "No inmate is allowed to stay in another student's room or disturb others after 8:00 PM.",
      "Inmates shall not organize any function, meeting, or gathering within the hostel premises.",
      "Students are responsible for the proper use of hostel furniture, buildings, and other facilities. Any damage will be recovered from the responsible inmate(s).",
      "Students shall not paste posters, stick papers, or write on hostel walls.",
      "The hostel management is not responsible for the loss of personal belongings due to negligence or unlocked rooms.",
      "Personal electrical appliances such as immersion heaters and hot plates are strictly prohibited. Personal computers may be used only with prior permission.",
      "Students must keep their belongings under lock and key and lock their rooms whenever they leave.",
      "Furniture and other hostel property shall not be moved from their designated places.",
      "Wilful damage to furniture, electrical fittings, or other hostel property will be recovered at double the cost from the individual or collectively from the inmates concerned.",
      "Possession of firecrackers, explosives, dangerous weapons, or any harmful instruments is strictly prohibited.",
      "Smoking, consuming or possessing alcoholic beverages, gambling, and similar activities are strictly prohibited in the hostel.",
      "Private collection of funds inside the hostel is not permitted under any circumstances.",
      "Group complaints or representations are not allowed. Individual representations may be submitted only to the Warden.",
      "Students shall not indulge in politics, violence, riots, communal activities, or maintain unauthorized dealings with outside organizations within the hostel premises.",
      "The Warden has the authority to impose disciplinary action, including fines, suspension, or expulsion, for violations of hostel rules.",
      "Strict discipline must be maintained in the dining hall and all common areas of the hostel.",
      "Students securing less than 80% attendance in a semester/year may not be permitted to continue hostel accommodation.",
      "Misconduct, violation of hostel rules, or any activity that brings disrepute to the institution may result in severe disciplinary action, including expulsion from the hostel.",
      "Any additional rules issued by the Principal or Warden from time to time shall be strictly followed by all inmates.",
    ],
  },

  hostelFacility: {
    title: "Hostel Facility",

    introductoryPoints: [
      "The hostels are provided with all basic facilities including water purifier and Wi-Fi.",
      "Concession will be given in the mess bill in case a student has taken long leave due to medical reasons.",
    ],

    description:
      "BGSCET Campus has separate Boys and Girls hostels with facilities like RO drinking water, laundry service, hot water, power backup, Wi-Fi, first-aid, round-the-clock security and many more.",

    facilityPoints: [
      "Application for hostel admission must be submitted in the prescribed form before the commencement of the academic session.",
      "Preference for hostel accommodation is given to outstation students.",
      "Students must provide two references along with their addresses, one of whom should be the parent/guardian.",
      "Students are permitted to meet their parents/guardians only in the visitors' lounge after obtaining permission from the Warden.",
      "Visiting hours are restricted to weekends and holidays from 9:00 AM to 6:00 PM.",
      "Visitors are not permitted on working days.",
      "Students admitted to the hostel must strictly abide by all hostel rules and regulations prescribed by the Management.",
      "Students must submit a written undertaking, duly endorsed by their parent/guardian, agreeing to comply with all hostel rules and regulations.",
      "Any violation of hostel rules may result in disciplinary action, including cancellation of hostel accommodation.",
      "Any matter not specifically covered by the hostel rules shall be decided by the Management.",
      "The hostel fee is approximately ₹75,000–₹85,000 per year, including boarding and lodging.",
    ],
  },
};
