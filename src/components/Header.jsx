import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
const Header = () => {
  // navigate kurulumu
  const navigate = useNavigate();

  //form gönderme işlemi
  const handleSubmit = (e) => {
    e.preventDefault();
    /// aratılan metne erisme
    const text = e.target[0].value;

    // kullanıcıyı results sayfasına yönlendir
    navigate(`/results?search_query= ${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="text-2xl max-sm:hidden font-mono">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex group border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          className="w-[500px] px-5 py-2 bg-black text-white outline-none focus:border-blue-500 focus:border"
          type="search"
          placeholder="Recherche sur Youtube"
        />
        <button className="border-l bg-zinc-800 px-4 text-2xl hover:bg-gray-800">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex text-xl cursor-pointer gap-4">
        <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
        <IoVideocam className="hover:text-gray-400 transition duration-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]" />
      </div>
    </div>
  );
};

export default Header;
