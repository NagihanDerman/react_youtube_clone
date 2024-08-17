import axios from "axios";

//istek için gerekli ayarlar
const options = {
  headers: {
    "x-rapidapi-key": "9e13f939c6mshec3979ba5839793p1cd636jsnf537eb604fd2",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
  params: {
    geo: "FR",
    lang: "fr",
  },
};

//isteklerin baslangıc kısmı
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (endpoint) => {
  try {
    const res = await axios.get(endpoint, options);

    return res.data;
  } catch (err) {
    console.log("verileri çekerken sorun olustu", err);
  }
};
