import { useState } from "react";

const StringArea = ({ text }) => {
  const [expand, setExpand] = useState(false);

  let shortText = text;

  //yazı uzunsa kes ve sonuna ... ekle, daha fazla yaz
  if (!expand && text.length > 300) {
    shortText = text.slice(0, 300) + "...plus";
  }
  return (
    <div onClick={() => setExpand(!expand)}>
      {shortText.split("\n").map((line) => (
        <span>
          {line} <br />
        </span>
      ))}
    </div>
  );
};

export default StringArea;
