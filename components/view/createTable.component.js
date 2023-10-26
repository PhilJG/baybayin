// import { oldReviewedLetters } from "../model/storage.component.js";
// import { lettersToReview } from "../controller/createReviewLetters.component.js";
// import { letters } from "../controller/renderLetters.component.js";

// document.addEventListener("DOMContentLoaded", () => {
//   // Get a reference to the grid element
//   const grid = document.querySelector(".grid");

//   // Define the array of data
//   const data = oldReviewedLetters;

//   // Create an array of cell data objects for each object in the imported array
//   const cellsData = data.map((obj) => [
//     { text: obj.reviewed, className: "cell" },
//     { text: obj.latin, className: "cell" },
//     { text: obj.baybayin, className: "cell" },
//     { text: obj.reviewDate, className: "cell" },
//     { text: obj.sequence, className: "cell" },
//   ]);

//   const columnNames = [
//     "Reviewed",
//     "Latin",
//     "Baybayin",
//     "Review Date",
//     "Sequence",
//   ];

//   // Create header row
//   const headerRow = createRow( columnNames, true
//   );
//   // const headerRow = document.createElement('div');
//   // headerRow.classList.add('header-row');

//   // Add the header row to the grid
//   grid.appendChild(headerRow);

//   // Create data rows
//   const dataRows = cellsData.map((rowData) => createRow(rowData));

//   // for (let i = 0; i < listLength.length; i++) {
//   //     for (let j = 0; j < numCols; j++) {
//   //       // Create a new cell element
//   //       const cell = document.createElement('div');
//   //       cell.classList.add('cell');

//   //       // Add content to the cell
//   //       const content = document.createTextNode(`Row ${i+1}, Column ${j+1}`);
//   //       cell.appendChild(content);

//   //       // Add the cell to the grid
//   //       grid.appendChild(cell);

//   //     }
//   //   }

//   // Add data rows to the grid
//   grid.append(...dataRows);

//   function createRow(cellsData, className = "row") {
//     const row = document.createElement("div");
//     row.className = className;
//     row.append(
//       ...cellsData.map((cellData) => {
//         const cell = document.createElement("div");
//         cell.className = cellData.className;
//         cell.textContent = cellData.text;
//         return cell;
//       })
//     );
//     return row;
//   }
// });
