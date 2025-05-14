import React, { useState } from "react";

const AllLandList = () => {
  const [lands, setLands] = useState([
    { id: 1, title: "Farm Plot", price: "2,00,000", location: "Hyderabad" },
    { id: 2, title: "Villa Plot", price: "3,50,000", location: "Bangalore" },
    { id: 3, title: "Lake View Land", price: "5,00,000", location: "Pune" },
    { id: 4, title: "Green Field", price: "1,80,000", location: "Chennai" },
    { id: 5, title: "Corner Plot", price: "2,50,000", location: "Mumbai" },
    { id: 6, title: "Mountain Base", price: "3,00,000", location: "Ooty" },
    { id: 7, title: "Eco Farm", price: "2,20,000", location: "Coimbatore" },
    { id: 8, title: "Open Space", price: "1,50,000", location: "Vizag" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDelete = (id) => {
    setLands((prevLands) => prevLands.filter((land) => land.id !== id));
  };

  const filteredLands = lands.filter(
    (land) =>
      land.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      land.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLands.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentLands = filteredLands.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl font-semibold">All Listed Lands</h2>
        <input
          type="text"
          placeholder="Search by title or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-80"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentLands.map((land) => (
              <tr key={land.id} className="border-t">
                <td className="px-4 py-2">{land.id}</td>
                <td className="px-4 py-2">{land.title}</td>
                <td className="px-4 py-2">{land.price}</td>
                <td className="px-4 py-2">{land.location}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(land.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {currentLands.length === 0 && (
              <tr>
                <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                  No lands found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllLandList;
