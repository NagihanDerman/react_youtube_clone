import { useContext } from "react";
import SideBar from "./../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { VideoContext } from "../context/VideoContext";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);
  return (
    <div className="flex">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          videos.map((item) => <VideoCard key={item.videoId} video={item} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
