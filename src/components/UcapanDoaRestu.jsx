"use client";

import { useState } from "react";
import { FaClock } from "react-icons/fa";
import useSWR, { mutate } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UcapanDoaRestu = () => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { data, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL, fetcher, {
    refreshInterval: 60000,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://save-comment.test/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Clear the form
      setFormData({ name: "", comment: "" });

      // Revalidate SWR cache to fetch the updated list of comments
      mutate("http://save-comment.test/api/comments");
    } else {
      console.error("Failed to submit comment");
    }
  };

  const comment = data?.data;
  console.log(comment);

  return (
    <div className="bg-[#B7B1A4] py-8 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-lg font-playfair px-4 italic">Ucapan Doa Restu</h1>
        <p className="text-xs px-4 pt-8">
          Ucapkan Selamat dan Doa Restu Kepada Mempelai Untuk Hari Bahagia
          Mereka. Tekan Logo Ucapan Untuk Tampilkan atau Sembunyikan Ucapan.
        </p>
      </div>

      <div className="container mx-auto my-2 px-4 py-4 max-w-[calc(100%-32px)] bg-[#f0eeea] rounded-md border border-[#B7B1A4]">
        <form className="space-y-2" onSubmit={handleSubmit}>
          <input
            placeholder="Nama"
            onChange={handleInputChange}
            type="text"
            name="name"
            className="block w-full border border-[#B7B1A4] text-black text-xs p-2 rounded-md  placeholder:text-xs"
          />
          <textarea
            placeholder="Ucapan"
            name="comment"
            onChange={handleInputChange}
            className="block w-full border border-[#B7B1A4] text-black text-xs p-2 rounded-md placeholder:text-xs"
            id=""
          ></textarea>
          <button
            className="p-2 text-xs my-4 text-white bg-[#B7B1A4] rounded-md flex justify-center items-center gap-3"
            type="submit"
          >
            Kirim
          </button>
        </form>

        <div className="h-[200px] overflow-scroll">
          <div className="divide-y h-auto divide-[#B7B1A4] grid grid-rows-3">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              comment?.map((data) => <Comment key={data.id} data={data} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Comment = ({ data }) => {
  const formatDate = (date) => {
    const now = new Date(); // Waktu saat ini
    const seconds = Math.floor((now - date) / 1000); // Selisih dalam detik

    if (seconds < 60) {
      return `${seconds} detik yang lalu`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} menit yang lalu`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} jam yang lalu`;
    } else {
      // Tampilkan tanggal lengkap jika lebih dari 1 hari yang lalu
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("id-ID", options);
    }
  };

  return (
    <div className="py-4 px-8 text-xs text-[#999489]">
      <h1 className="font-bold text-[#b4a480] capitalize">{data?.name}</h1>
      <p className="my-1">{data?.comment}</p>
      <div className="flex gap-2 items-center">
        <FaClock />
        <p>{formatDate(new Date(data?.created_at))}</p>
      </div>
    </div>
  );
};

export default UcapanDoaRestu;
