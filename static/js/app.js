//Use the D3 library to read in samples.json.
// Fetch the JSON data and console log it
d3.json("data/samples.json")
  console.log(data);
// let layout = { title: 'Top 10 OTUs Bar Chart'};
// Plotly.newplot('barplot', data, layout);
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");


//Use sample_values as the values for the bar chart.

//Use otu_ids as the labels for the bar chart.

//Use otu_labels as the hovertext for the chart