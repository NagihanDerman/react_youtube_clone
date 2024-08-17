import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  if (video.type !== "video") return;

  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow ? "row" : ""} cursor-pointer`}
    >
      {/* resim alanı */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt=""
        />
      </div>
      {/* video alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className=" w-14 h-14 rounded-full c-pic"
          src={video.channelThumbnail[0].url}
          alt="image de la chaine"
        />
        <div>
          <h4
            className={`${isRow ? "line-clamp-1" : "line-clamp-2"} font-bold`}
          >
            {video.title}{" "}
          </h4>
          <p>{video.channelTitle} </p>
          <div className="detail flex gap-3">
            <p className="flex gap-1">
              <span>{millify(video.viewCount)}</span>
              <span className="text">Vues</span>
            </p>

            <p className="whitespace-nowrap text-[14px]">
              {video.publishedTimeText}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
