import React, { useEffect, useState } from "react";
import { GrStorage } from "react-icons/gr";
import { FcFolder } from "react-icons/fc";
import { PiNotePencilBold } from "react-icons/pi";
import { FcEditImage } from "react-icons/fc";
import { GrDocumentPdf } from "react-icons/gr";
import axios from "axios";

const ImportData = () => {
  const [databaseInfo, setDatabaseInfo] = useState(null);
  const [notesStats, setNotesStats] = useState({ count: 0, size: 0 });
  const [imagesStats, setImagesStats] = useState({ count: 0, size: 0 });
  const [pdfsStats, setPdfsStats] = useState({ count: 0, size: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        // Fetch database info
        const dbResponse = await axios.get("https://jotter-backend.onrender.com/database-size");
        setDatabaseInfo(dbResponse.data);

        // Fetch notes stats
        const notesResponse = await axios.get("https://jotter-backend.onrender.com/notes-stats");
        setNotesStats(notesResponse.data);

        // Fetch images stats
        const imagesResponse = await axios.get("https://jotter-backend.onrender.com/images-stats");
        setImagesStats(imagesResponse.data);

        // Fetch PDFs stats
        const pdfsResponse = await axios.get("https://jotter-backend.onrender.com/pdfs-stats");
        setPdfsStats(pdfsResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-4">
      {loading ? (
        <p className="text-blue-500 text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div>
          {/* Box 1: Database Info */}
          <div className="flex gap-3 mb-2">
            <div className="bg-slate-200 p-2 rounded-lg text-center w-3/4 box-1">
              <div className="flex mb-2 items-center justify-center">
                <div className="text-2xl font-bold">
                  <GrStorage />
                </div>
                <h3 className="font-bold text-center ml-2">
                  Total Database Size
                </h3>
              </div>
              <p>Storage usages: {databaseInfo.totalSize} MB</p>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            {/* Box 3: Notes Info */}
            <div className="bg-slate-200 gap-2 p-2 rounded-lg text-center box-3">
              <a href="/notes">
                <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                  <div className="text-2xl font-bold">
                    <PiNotePencilBold />
                  </div>
                  <h3 className="font-bold">Notes</h3>
                </div>
                <p>Items: {notesStats.count}</p>
                <p>Storage: {notesStats.size} MB</p>
              </a>
            </div>

            {/* Box 4: Images Info */}
            <div className="bg-slate-200 gap-2 p-2 rounded-lg text-center box-4">
              <a href="/images">
                <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                  <div className="text-2xl font-bold">
                    <FcEditImage />
                  </div>
                  <h3 className="font-bold">Images</h3>
                </div>
                <p>Items: {imagesStats.count}</p>
                <p>Storage: {imagesStats.size} MB</p>
              </a>
            </div>

            {/* Box 5: PDFs Info */}
            <div className="bg-slate-200 gap-2 p-2 rounded-lg text-center box-5">
              <a href="/pdfs">
                <div className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                  <div className="text-2xl font-bold">
                    <GrDocumentPdf />
                  </div>
                  <h3 className="font-bold">PDF</h3>
                </div>
                <p>Items: {pdfsStats.count}</p>
                <p>Storage: {pdfsStats.size} MB</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportData;
