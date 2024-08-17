import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import ReactPlayer from "react-player";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../components/StringArea";
import VideoCard from "../components/VideoCard";
import Loader from "./../components/Loader";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);

  //arama parametresine erişim
  const [searchParams] = useSearchParams();

  //url den "v" isimli parametreyi getir"

  const id = searchParams.get("v");

  //id si bilinene videonun bilgisini al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);

  return (
    <div className="detail-page h-screen overflow-auto p-[20px] md:p-[40px] lg:px-[50px] xl:px-[100px]">
      {/* video içeriği */}
      <div className="">
        <div className="h-[30vh] md:h-[50vh] lg:h-[60vh]">
          <ReactPlayer
            controls
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {!video ? (
          <p>Chargement...</p>
        ) : (
          <>
            {/*baslık */}
            <h1 className="my-3 text-xl font-bol">{video.title}</h1>

            {/* kanal bilgileri */}
            <div className="flex justify-between">
              {/* sol taraf */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle} </h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                  S abonner
                </button>
              </div>
              {/* sag taraf */}
              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-4 py-2 px-4 border-r">
                  <AiFillLike />
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>

            {/* video bilgileri */}
            <div
              className="bg-[#272727] rounded p-2 mt-4 cursor-pointer 
            hover:bg-opacity-80"
            >
              <div>
                <p>{millify(video.viewCount)} Vues </p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
          </>
        )}
      </div>

      {/* ilgili videolar alani  */}
      <div className="flex flex-col gap-5 p-1 max-md:mt-6 md:p-6 ">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard video={item} isRow={true} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
