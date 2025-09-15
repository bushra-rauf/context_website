"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react"

const BackArrow =() => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 mb-5 rounded shadow transition'>
      <ArrowLeft size={20} weight="bold" />
    </button>
  );
}

export default BackArrow