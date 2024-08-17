import { useSearchParams } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const SearchResult = () => {
  const [results, setResults] = useState(null);
  //url den artılan kelimeyi al
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  //aratılan kelimeye uygyn videoları al
  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((res) => setResults(res));
  }, [searchParams]);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex items-center gap-10 flex-col flex-1 px-4 h-screen overflow-auto">
        <div className="flex gap-10 flex-col max-w-[1000px]">
          <p className="flex gap-2 text-lg">
            <span className="font-bold">{query} </span>
            <span>Résultats</span>
          </p>
          {/* //eğer sonuclar gelmediyse loader basalım */}
          {!results ? (
            <Loader />
          ) : (
            results.data.map(
              (item) =>
                item.type === "video" && (
                  <VideoCard key={item.videoId} video={item} isRow={true} />
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
