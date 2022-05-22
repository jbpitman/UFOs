//This is the code that build the html table and fills it with data from data.js file  (#11.2.1)
// 11.2.4 import the data from data.js
const tableData = data;

// Reference the HTML table using d3
let tbody = d3.select("tbody");

// Functions can call other functions
function doubleAddition(c, d) {
    let total = addition(c, d) * 2;
    return total;
}
//11.5.2 create function to build table
function buildTable(data) {
    tbody.html("");
    //#Loop through each object in data 
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");
        //Loop through each field in the dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

//11.5.3 adding filters using D3)
function handleClick() {
    let date = d3.select("#datetime").property("value");

    //table for filtered table tableData is the original data as imported from our data.js file.
    let filteredData = tableData;

    //11.5.4 if statement
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);