import Image from "next/image";
import React, { useState } from "react";

const RSVP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby6bJ7dnPclHaNc1TUunvLFol6wTmXWi5eKx2M8r5FUP9yZCJVLUdpAkIK2GG8bw6Y/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: e.target.Nama.value,
          jumlah: e.target.Jumlah.value,
        }),
      }
    );

    setLoading(false);

    if (response.ok) {
      alert("Kirim Konfirmasi Kehadiran Berhasil");
    } else {
      setError("Gagal Mengirim Konfirmasi Kehadiran");
      alert("Gagal Mengirim Konfirmasi Kehadiran");
    }
  };

  return (
    <div className="bg-[#B7B1A4]">
      <div className="container px-4">
        <div className="h-[280px] pt-8">
          <Image
            src="/img/22.jpg"
            width={500}
            height={500}
            className="rounded-tl-[40%] rounded-br-[40%] object-cover w-full h-full"
            alt=""
          />
        </div>
        <h1 className="text-2xl text-white font-playfair italic pb-4">RSVP</h1>
        <p className="text-white text-xs">
          Kirimkan Konfirmasi Kehadiran Kepada Mempelai Melalui Form Berikut.
        </p>
        <form onSubmit={handleSubmit} className="py-8 space-y-2">
          <input
            type="text"
            name="Nama"
            className="w-full p-2 rounded"
            placeholder="Nama Lengkap"
            id=""
            required
          />
          <input
            type="number"
            name="Jumlah"
            placeholder="1"
            className="w-full p-2 rounded"
            id=""
            required
          />
          <button
            type="submit"
            className="w-full p-2 rounded border-2 border-[#eeebe4] bg-white text-[#B7B1A4]"
            disabled={loading}
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RSVP;
