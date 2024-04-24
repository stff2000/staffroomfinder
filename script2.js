
const cabins = [
        { name: "Sandesh K", location: "APJ KALAM BLOCK-2nd Floor" },
        { name: "Louella C. Goveas", location: "APJ KALAM BLOCK-2nd Floor" },
        { name: "Harshitha M.J.", location: "APJ KALAM BLOCK-2nd Floor" },
        { name: "Vasudeva Pai", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Abhishek S. Rao", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Devidas", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Ganesh Pai", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Charishma", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Ramya Shetty", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Niju Rajan", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Kavitha S", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Shubha B", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Shankari N.", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Anusha R. Sharath", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Ashwini K.", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Chaithra K", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Bhavya K", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Santhosh Poojary", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Harshini U", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Sneha Nayak", location: "APJ KALAM BLOCK-3rd Floor" },
        { name: "Jyothi", location: "APJ KALAM BLOCK-4th Floor" },
        { name: "Radhakrishna Dodmane", location: "APJ KALAM BLOCK-4th Floor" },
        { name: "Chinmai Shetty", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Rashmi Naveen", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Anusha N", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Deepa", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Sandeep Kumar Hegde", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Prathyakshini", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Pratheeksha Hegde N", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Savitha Shetty", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Shabari Shedthi. B", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Asmita Poojary", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Pallavi KN", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Jason Elroy Martis", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Manjunatha", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Sannidhan M.S", location: "APJ KALAM BLOCK-5th Floor" },
        { name: "Shashirekha B. Rai", location: "RAMANUJAN BLOCK - 1st Floor" },
        { name: "Shobha R. Prabhu", location: "RAMANUJAN BLOCK - 1st Floor" },
        { name: "Aarti S. Bhat", location: "RAMANUJAN BLOCK - 1st Floor" },
        { name: "Ramesh Bhat", location: "RAMANUJAN BLOCK - 1st Floor" },
        { name: "Shashikantha Karinka", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "Raghavendra Pai", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "Rajath N. Rao", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "Austin Dinesh D'Souza", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "Melwyn Rajesh Castelino", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "P. Venkatesh Murthy", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "Uday D.", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "Mallikappa", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "Kumar H.S.", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "Ananthakrishna somayaji", location: "RAMANUJAN BLOCK - 2nd Floor" },
        { name: "K.V.S.SAIRAM B.E..(E&C).M.Tech., Ph.D..SMIEEE", location: "RAMANUJAN BLOCK - 3rd Floor" },
        { name: "Krishnaraja Joisa", location: "RAMANUJAN BLOCK - 3rd Floor" },
        { name: "Narasimha Bailkeri", location: "CV RAMAN BLOCK - 1st Floor" },
        { name: "SURESH SHETTY", location: "CV RAMAN BLOCK - 1st Floor" },
        { name: "Tanzila Nargis", location: "CV RAMAN BLOCK - 2nd Floor" },
        { name: "Aarti S", location: "CV RAMAN BLOCK - 2nd Floor" },
        { name: "Subrahmanya l. Bhat", location: "CV RAMAN BLOCK - 2nd Floor" },
        { name: "Ankitha A. Nayak", location: "CV RAMAN BLOCK - 2nd Floor" },
        { name: "Sonia Lobo", location: "CV RAMAN BLOCK - 2nd Floor" },
        { name: "Srinivas Nekkar", location: "CV RAMAN BLOCK - 2nd Floor" },
        { name: "Sudeeksha S Pai", location: "CV RAMAN BLOCK - 2nd Floor" },
        { name: "Shekara Poojari", location: "CV RAMAN BLOCK - 2nd Floor" },
        { name: "Joy Martin", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Sunil Kumar Aithal S", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Srikanth Bhat K", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Krishnaprasad Rao", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Santhosh SB.E. M. Tech.", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Rajashree", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Manjunath Maiya", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Anitha D. Bayar", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Smitha G. V.", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Sharmila", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Anjana Pai K.", location: "CV RAMAN BLOCK - 3rd Floor" },
        { name: "Shankar BB", location: "CV RAMAN BLOCK - 4th Floor" },
        { name: "Vasanth KR", location: "CV RAMAN BLOCK - 4th Floor" },
        { name: "Sarvajith MS", location: "CV RAMAN BLOCK - 4th Floor" },
        { name: "Rajalaxmi s Hegde", location: "CV RAMAN BLOCK - 4th Floor" },
        { name: "Shruthi M", location: "CV RAMAN BLOCK - 4th Floor" },
        { name: "Puneeth R. P.", location: "CV RAMAN BLOCK - 4th Floor" },
        { name: "Bhavya D.", location: "CV RAMAN BLOCK - 4th Floor" },
        { name: "Joylin Priya Pinto", location: "CV RAMAN BLOCK - 4th Floor" },
        { name: "Vishwanatha M.Phil, Ph.D Associate Professor & Head", location: "CV RAMAN BLOCK - 5th Floor" },
        { name: "Shyla Dafhny Mendonsa M.Com,, M.B.A. Assistant Professor Gd-ll", location: "CV RAMAN BLOCK - 5th Floor" },
        { name: "Akshatha KJ Shetty M.A.M.Phi Assistant Professor Gd-l Department of Humanities", location: "CV RAMAN BLOCK - 5th Floor" },
        { name: "Shwetha M.A., B.Ed. Assistant Professor", location: "CV RAMAN BLOCK - 5th Floor" },
        { name: "BHASKAR P.ACHARPERVISOR", location: "CV RAMAN BLOCK - 5th Floor" },
        { name: "VENUGOPALSTRUCTOR", location: "CV RAMAN BLOCK - 5th Floor" },
        { name: "SANDHYA", location: "CV RAMAN BLOCK - 5th Floor" }, 
        { name: "Bhandage A.R", location: "MV BLOCK - 1st Floor" },
        { name: "Srinath Shetty K", location: "MV BLOCK - 1st Floor" },
        { name: "Roshan Rai", location: "MV BLOCK - 1st Floor" },
        { name: "Pradeep Karanth", location: "MV BLOCK - 1st Floor" },
        { name: "Sabyath P. Shetty", location: "MV BLOCK - 1st Floor" },
        { name: "DEEKSHITHA K", location: "MV BLOCK - 1st Floor" },
        { name: "Akhila S.dAr", location: "MV BLOCK - 1st Floor" },
        { name: "Prashanthi K.S", location: "MV BLOCK - 1st Floor" },
        { name: "Girija K P", location: "MV BLOCK - 1st Floor" },
        { name: "Udayakumar G.", location: "MV BLOCK - 1st Floor" },
        { name: "Ranjith A.", location: "MV BLOCK - 1st Floor" },
        { name: "Shriram Marathe", location: "MV BLOCK - 1st Floor" },
        { name: "Bhojaraja B.E.", location: "MV BLOCK - 1st Floor" },
        { name: "I R Mithanthya", location: "MV BLOCK - 1st Floor" },
        { name: "Srinath Shetty K", location: "MV BLOCK - 1st Floor" },
        { name: "Arun Kumar Bha", location: "MV BLOCK - 1st Floor" },
        { name: "J. K. Lokesh", location: "MV BLOCK - 1st Floor" },
        { name: "Mithun B. M", location: "MV BLOCK - 1st Floor" },
    
        { name: "Swathi k", location: "MV BLOCK - 2nd Floor" },
        { name: "Md. Abdul Rahman", location: "MV BLOCK - 2nd Floor" },
        { name: "Ravikiran Rao M", location: "MV BLOCK - 2nd Floor" },
        { name: "Mahabaleshwara Sharma K", location: "MV BLOCK - 2nd Floor" },
        { name: "KrishnarRaora Pr", location: "MV BLOCK - 2nd Floor" },
        { name: "Dhananjay B", location: "MV BLOCK - 2nd Floor" },
        { name: "Gururaj K", location: "MV BLOCK - 2nd Floor" },
        { name: "Palimaru Aparna", location: "MV BLOCK - 2nd Floor" },
        { name: "Nutana Shetty", location: "MV BLOCK - 2nd Floor" },
        { name: "Anand Bhat B", location: "MV BLOCK - 2nd Floor" },
        { name: "K.Vasudeva Shettigar", location: "MV BLOCK - 2nd Floor" },
        { name: "Pradeep Kumar", location: "MV BLOCK - 2nd Floor" },
        { name: "K. Latha Shenoy", location: "MV BLOCK - 2nd Floor" },
        { name: "Naveen J", location: "MV BLOCK - 2nd Floor" },
        { name: "Rajalakshmi Samaga BL", location: "MV BLOCK - 2nd Floor" },
        { name: "Dinesh Shetty", location: "MV BLOCK - 2nd Floor" },
        { name: "Nayana Shetty", location: "MV BLOCK - 2nd Floor" },
        { name: "Anitha Marina Colaco", location: "MV BLOCK - 2nd Floor" },
    
        { name: "M. Sathyendra Kumar", location: "MV BLOCK - 3rd Floor" },
        { name: "K ASHWATH KUMAR", location: "MV BLOCK - 3rd Floor" },
        { name: "NANDAN SHETTY", location: "MV BLOCK - 3rd Floor" },
        { name: "RAVIKIRAN RAO M", location: "MV BLOCK - 3rd Floor" },
        { name: "PRADEEP K", location: "MV BLOCK - 3rd Floor" },
        { name: "K.V.S.S.S.S.S.SAIRAM B.E..(E&C).M.Tech., Ph.D..SMIEEE Professor & Head Dept. of Electronics & Communication Engineering", location: "MV BLOCK - 3rd Floor" },
        { name: "Krishnaraja Joisa", location: "MV BLOCK - 3rd Floor" },
       
           
    
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

function searchcabins() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous results

    const matchingcabins = cabins.filter(cabin => cabin.name.toLowerCase().includes(searchInput) || cabin.location.toLowerCase().includes(searchInput));

    matchingcabins.forEach(cabin => {
        const listItem = document.createElement("li");
        listItem.textContent = `${cabin.name} - ${cabin.location}`;
        listItem.addEventListener("click", () => displayLabDetails(cabin));
        searchResultsContainer.appendChild(listItem);
    });
}

function displaycabinDetails(cabin) {
    // Implement logic to display detailed information about the selected lab
    console.log(`Lab Name: ${cabin.name}, Location: ${cabin.location}`);
}
