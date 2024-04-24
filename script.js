// Sample lab data (replace it with your actual lab data)
const labs = [
    { name: "Hydraulics & Hydraulic machinery Lab", location: "C V RAMAN BLOCK,basement" },
    { name: "Fluid Mechanics lab", location: "C V RAMAN BLOCK,basement" },
    { name: "Basic material testing lab", location: "C V RAMAN BLOCK,basement" },
    { name: "Research labs (MEL04)", location: "C V RAMAN BLOCK,basement" },
    { name: "Energy conversion lab", location: "C V RAMAN BLOCK,basement" },

    { name: "Heat Transfer Lab", location: "C V RAMAN BLOCK,1st floor" },

    { name: "Department of Computer Engineering", location: "C V RAMAN BLOCK,5th floor" },
    { name: "Department of Humanities", location: "C V RAMAN BLOCK,5th floor" },
    { name: "Department of E & C Engineering - PG & Research lab", location: "C V RAMAN BLOCK,5th floor" },
    { name: "Subhashini language lab", location: "C V RAMAN BLOCK,5th floor" },
    { name: "UPS ROOM", location: "C V RAMAN BLOCK,5th floor" },
    { name: "Computer Programming Lab(CCP)", location: "C V RAMAN BLOCK,5th floor" },
    { name: "Department of Mechanical Engineering", location: "C V RAMAN BLOCK,5th floor" },
    { name: "Computer Aided Engineering Graphic Lab", location: "C V RAMAN BLOCK,5th floor" },
    { name: "Department of civil Engineering-Computer Aided design lab ", location: "C V RAMAN BLOCK,5th floor" },
    { name: "Department of E&E Engineering- Computer Lab", location: "C V RAMAN BLOCK,5th floor" },

    { name: "Environmental Engineering lab", location: "SIR M V BLOCK,Ground floor" },
    { name: "Geotechnical Engineering lab ", location: "SIR M V BLOCK,Ground floor" },
    { name: "Head of the dept. Civil Engineering", location: "SIR M V BLOCK,Ground floor" },
    { name: "RS & GIS Lab ", location: "SIR M V BLOCK,Ground floor" },
    { name: "Applied Engineering Geology lab ", location: "SIR M V BLOCK,Ground floor" },
    
    { name: "Head of the dept./Dept. office- EEE ", location: "SIR M V BLOCK,2nd floor" },

    { name: "Dept. library and E-learning center- EEE ", location: "SIR M V BLOCK,3rd floor" },
    { name: "NCL31- Logic design/Microcontroller lab ", location: "SIR M V BLOCK,3rd floor" },
    { name: "NCL32- Analog/Power Electronics lab", location: "SIR M V BLOCK,3rd floor" },
    { name: "NCL33- BEE lab", location: "SIR M V BLOCK,3rd floor" },
    { name: "NCL37- PG/ Reasearch lab", location: "SIR M V BLOCK,3rd floor" },

    { name: "Dept. of Computer and Communication Engineering", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL41", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL42", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL43", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL44", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL45", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL46", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL47 / IT Skills lab", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL48 Electric Vehicle (EV) lab", location: "SIR M V BLOCK,4th floor" },
    { name: "NCL49- MATLAB", location: "SIR M V BLOCK,4th floor" },

    { name: "Dept. of Artificial Intelligence and machine learning (AIML)", location: "SIR M V BLOCK,5th floor" },
    { name: "NCL51 / SMVL51", location: "SIR M V BLOCK,5th floor" },
    { name: "NCL52 / SMVL52", location: "SIR M V BLOCK,5th floor" },
    { name: "NCL53 / SMVL53", location: "SIR M V BLOCK,5th floor" },
    { name: "NCL54 / SMVL54", location: "SIR M V BLOCK,5th floor" },
    { name: "NCL55 / SMVL55 ", location: "SIR M V BLOCK,5th floor" },
    { name: "NCL56 / SMVL56- AI Skills lab", location: "SIR M V BLOCK,5th floor" },

    { name: "Dept. of Artificial Intelligence and Data Science (AIDS)", location: "SIR M V BLOCK,6th floor" },
    { name: "ADL01", location: "SIR M V BLOCK,6th floor" },
    { name: "ADL02 /Nitte-NIDEC Center of Excellence", location: "SIR M V BLOCK,6th floor" },
    { name: "ADL03", location: "SIR M V BLOCK,6th floor" },
    { name: "ADL04", location: "SIR M V BLOCK,6th floor" },

    { name: "Abhyuday", location: "RAMANUJAN BLOCK, Ground floor" },
    { name: "NCC Office", location: "RAMANUJAN BLOCK, Ground floor" },
    { name: "Dept of conselling & student welfare(training & placement)", location: "RAMANUJAN BLOCK, Ground floor" },
    { name: "Security Office", location: "RAMANUJAN BLOCK, Ground floor" },
    { name: "Special Officer", location: "RAMANUJAN BLOCK, Ground floor" },
    { name: "Examination room", location: "RAMANUJAN BLOCK, Ground floor" },
    { name: "Student Counselling & Placement cell", location: "RAMANUJAN BLOCK, Ground floor" },
    { name: "Reception", location: "RAMANUJAN BLOCK, Ground floor" },
    { name: "Sambram Auditorium", location: "RAMANUJAN BLOCK, Ground floor" },

    { name: "Physics Lab", location: "RAMANUJAN BLOCK, 1st floor" },
    { name: "Chemistry Lab", location: "RAMANUJAN BLOCK, 1st floor" },

    { name: "Nitte Japanese Techno Cultural Center", location: "RAMANUJAN BLOCK, 2nd floor" },
    { name: "CAD/CAE/CFD Lab", location: "RAMANUJAN BLOCK, 2nd floor" },
    { name: "Reasearch Lab on Condition Monitoring and Advanced Machining Studies", location: "RAMANUJAN BLOCK, 2nd floor" },
    { name: "Mechanical Department Library", location: "RAMANUJAN BLOCK, 2nd floor" },
    { name: "Phalguni Seminar Hall", location: "RAMANUJAN BLOCK, 2nd floor" },

    { name: "Digital Electronics Lab", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "Analog Electronics Lab", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "Project Lab", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "Communication and Microwave Lab", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "E & C Dept office ", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "E & C Dept Library", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "Microcontroller / DSP Lab", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "VHDL Lab", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "Power And Industrial Electronics Lab", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "VLSI Lab", location: "RAMANUJAN BLOCK, 3rd floor" },
    { name: "ARM Lab", location: "RAMANUJAN BLOCK, 3rd floor" },

    { name: "ISL 05", location: "RAMANUJAN BLOCK, 4th floor" },
    { name: "ISL 06", location: "RAMANUJAN BLOCK, 4th floor" },
    { name: "M.Tech (Cyber Security) Lab", location: "RAMANUJAN BLOCK, 4th floor" },
    { name: "NI'NADA", location: "RAMANUJAN BLOCK, 4th floor" },
    { name: "KOBAYASHI create Nitte Center of Excellence", location: "RAMANUJAN BLOCK, 4th floor" },
    { name: "Dept od Master of Computer Applications", location: "RAMANUJAN BLOCK, 4th floor" },
    { name: "VGST Sponsored Lab", location: "RAMANUJAN BLOCK, 4th floor" },

    { name: "Stores and purchase section", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Administration section", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Office Automation Cell", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Hostel Office", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Academics & Exam Sectiion", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Accounts Section", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Electrical Machine lab", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "High Voltage lab", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Control System lab", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Circuits & Measurements lab", location: "APJ KALAM BLOCK, lower ground floor" },
    { name: "Computer lab- E & E", location: "APJ KALAM BLOCK, lower ground floor" },

    { name: "President", location: "APJ KALAM BLOCK, ground floor" },
    { name: "Principal", location: "APJ KALAM BLOCK, ground floor" },
    { name: "Board room", location: "APJ KALAM BLOCK, ground floor" },
    { name: "Registrar ", location: "APJ KALAM BLOCK, ground floor" },
    { name: "Vice - Principal", location: "APJ KALAM BLOCK, ground floor" },
    { name: "Dean (Academics)", location: "APJ KALAM BLOCK, ground floor" },
    { name: "First Year Coordinator", location: "APJ KALAM BLOCK, ground floor" },
    { name: "Power Electronics lab", location: "APJ KALAM BLOCK, ground floor" },
    { name: "Digital Electronics lab ", location: "APJ KALAM BLOCK, ground floor" },
    { name: "Analog Electronics lab", location: "APJ KALAM BLOCK, ground floor" },

    { name: "Seminar Hall - Shambhavi", location: "APJ KALAM BLOCK, 1st floor" },
    { name: "Bio - Inf0rmatics Lab", location: "APJ KALAM BLOCK, 1st floor" },
    { name: "Unit Operation Lab", location: "APJ KALAM BLOCK, 1st floor" },
    { name: "Down Stream Bio Processing Lab", location: "APJ KALAM BLOCK, 1st floor" },
    { name: "Bio Process Control & Instrumentation Lab", location: "APJ KALAM BLOCK, 1st floor" },
    { name: "Momentum Transfe Lab ", location: "APJ KALAM BLOCK, 1st floor" },
    { name: "Bio Chemistry Lab ", location: "APJ KALAM BLOCK, 1st floor" },

    { name: "Cad Lab", location: "APJ KALAM BLOCK, 2nd floor" },
    { name: "HOD - Bio Tech", location: "APJ KALAM BLOCK, 2nd floor" },
    { name: "Dept. Library- Bio Tech", location: "APJ KALAM BLOCK, 2nd floor" },
    { name: "Bio Kinetics Lab", location: "APJ KALAM BLOCK, 2nd floor" },
    { name: "Instrumentation Lab", location: "APJ KALAM BLOCK, 2nd floor" },
    { name: "Growth Lab ", location: "APJ KALAM BLOCK, 2nd floor" },

    { name: "Analog Electronics Lab", location: "APJ KALAM BLOCK, 3rd floor" },

    { name: "HOD - C.S ", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "Computer Programming Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "Data Structures Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "Networking Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "Java & CGI lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "Micro Processor Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "File Structures Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "System Software Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "Internet Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "Project Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "PG/Research Lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "VLSI lab", location: "APJ KALAM BLOCK, 4th floor" },
    { name: "Battery/Server Room", location: "APJ KALAM BLOCK, 4th floor" },

    { name: "HOD - I.S.", location: "APJ KALAM BLOCK, 5th floor" },
    { name: "Logic Design Lab", location: "APJ KALAM BLOCK, 5th floor" },
    { name: "Dept. Library", location: "APJ KALAM BLOCK, 5th floor" },


    // Add more lab data as needed
];

document.addEventListener("click", function (event) {
    const searchInput = document.getElementById("searchInput");
    const searchResultsContainer = document.getElementById("searchResults");

    // Check if the click is outside the search bar and results container
    if (event.target !== searchInput && event.target !== searchResultsContainer) {
        searchResultsContainer.innerHTML = ""; // Clear results when outside is clicked
    }
});

function searchLabs() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous results

    const matchingLabs = labs.filter(lab => lab.name.toLowerCase().includes(searchInput) || lab.location.toLowerCase().includes(searchInput));

    matchingLabs.forEach(lab => {
        const listItem = document.createElement("li");
        listItem.textContent = `${lab.name} - ${lab.location}`;
        listItem.addEventListener("click", () => displayLabDetails(lab));
        searchResultsContainer.appendChild(listItem);
    });
}

function displayLabDetails(lab) {
    // Implement logic to display detailed information about the selected lab
    console.log(`Lab Name: ${lab.name}, Location: ${lab.location}`);
}
