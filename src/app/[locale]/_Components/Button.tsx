export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-red-700 hover:bg-pink-600 cursor-pointer text-white text-lg rounded-lg mt-[8px] py-[5px] px-[10px]">
      {text}
    </button>
  );
}
