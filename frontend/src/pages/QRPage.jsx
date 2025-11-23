// src/pages/QRPage.jsx
import { useEffect, useState } from "react";
import GradientCard from "../components/GradientCard";
import { api } from "../api/client";

const QRPage = () => {
  const [qrData, setQrData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genLoading, setGenLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQr = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await api.get("/qr");
      setQrData(res.data.data);
    } catch (err) {
      if (err?.response?.status === 404) {
        setQrData(null);
      } else {
        setError("Failed to load QR.");
      }
    } finally {
      setLoading(false);
    }
  };

  const generateQr = async () => {
    try {
      setGenLoading(true);
      setError("");
      const res = await api.post("/qr/generate");
      setQrData(res.data.data);
    } catch (err) {
      setError("Failed to generate QR. Try again.");
    } finally {
      setGenLoading(false);
    }
  };

  useEffect(() => {
    fetchQr();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-xl mx-auto px-4 py-6 space-y-4">
        <GradientCard>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">
            QR Code for Your Menu
          </h2>
          <p className="text-sm text-slate-500">
            Customers can scan this QR to open your digital menu.
          </p>
        </GradientCard>

        <GradientCard className="flex flex-col items-center justify-center gap-4">
          {error && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-3 py-2 w-full">
              {error}
            </p>
          )}

          {loading ? (
            <p className="text-sm text-slate-600">Loading QR...</p>
          ) : qrData ? (
            <>
              <img
                src={qrData.qrUrl}
                alt="Menu QR Code"
                className="w-56 h-56 bg-white rounded-3xl shadow-md border border-slate-100"
              />
              <p className="text-xs text-slate-500 text-center">
                Tip: Save this image or print it and stick it on your stall.
              </p>
            </>
          ) : (
            <p className="text-sm text-slate-600 text-center">
              No QR generated yet. Click below to create one.
            </p>
          )}

          <button
            onClick={generateQr}
            disabled={genLoading}
            className="mt-2 px-6 py-2 rounded-2xl bg-purple-400 text-white text-sm font-semibold shadow-md hover:bg-purple-500 disabled:opacity-60"
          >
            {genLoading
              ? "Generating..."
              : qrData
              ? "Regenerate QR"
              : "Generate QR"}
          </button>
        </GradientCard>
      </div>
    </div>
  );
};

export default QRPage;
