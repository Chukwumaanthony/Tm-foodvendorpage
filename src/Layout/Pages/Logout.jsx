import React, { useState } from "react";

function App() {
  const entriesPerPage = 10;
  const totalPages = Math.ceil(100 / entriesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  const renderEntries = () => {
    const entries = [];
    const start = (currentPage - 1) * entriesPerPage + 1;
    const end = Math.min(currentPage * entriesPerPage, 100);

    for (let i = start; i <= end; i++) {
      entries.push(<div key={i}>Entry {i}</div>);
    }

    return entries;
  };

  return (
    <div>
      <div className="entries">{renderEntries()}</div>
      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        {renderPagination()}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [extras, setExtras] = useState([]);
//   const [extraCount, setExtraCount] = useState(1);

//   const addExtra = () => {
//     setExtraCount(extraCount + 1);
//     setExtras([...extras, extraCount]);
//   };

//   return (
//     <div>
//       {extras.map((extra, index) => (
//         <div className="con" key={index}>
//           <input type="checkbox" />
//           <label>Extra {extra}:</label>
//           <input type="text" />
//         </div>
//       ))}
//       <button onClick={addExtra}>New Extra</button>
//     </div>
//   );
// }

// export default App;
