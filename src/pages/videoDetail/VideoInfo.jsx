import millify from "millify";
import { useState } from "react";

const VideoInfo = ({ video }) => {
  const [isFull, setIsFull] = useState(false);
  /* tarih formatlama */
  const date = new Date(vide.video.publishDate).toLocaleDateString("tr", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const text = isFull
    ? video.video.description
    : video.video.description.slice(0, 150) + "..daha fazla";
  return (
    <div
      onClick={() => setIsFull(!isFull)}
      className="bg-zinc-700 rounded-lg p-2 mt-4 cursor-pointer hover:bg-opacity-80"
    >
      <div className="flex gap-4 mb-2 font-bold">
        <p> {millify(video.video.viewCount)}vues</p>
        <p>{date}</p>
      </div>
      <p>
        {text.split("\n").map((line, key) => (
          <span key={key}>
            {line} <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default VideoInfo;
