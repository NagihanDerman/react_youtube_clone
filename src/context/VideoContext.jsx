import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

//1 contexte yapisinin temeli ve  abone olma
export const VideoContext = createContext();

//2 hangi categorinin secilecegi saglayici bileseni olusturma
export const VideoProvider = ({ children }) => {
  //kapyasıcı bileseni tamamlama
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  //kategori her dğiştiğinde api dan verileri al
  useEffect(() => {
    //menü type i secildiyse fonksiyonu durdur
    if (selectedCategory.type === "menu") return;

    //önceki kategorinni ver,ilerini temizle
    setVideos(null);

    //type home ise home a istek at
    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
    }
    //type trending ise  trending endpointine istek at
    if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
    }
    //type i category ise categorye istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </VideoContext.Provider>
  );
};
