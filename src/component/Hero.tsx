import { RestApi } from "../Routes/Api";
import CardVideo from "./CardVideo";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

const Hero = () => {
  const [news, setNews] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await RestApi.GetNews();
        setNews(response.data.articles);
        console.log(news);
        
      } catch (error) {
        setLoading(!loading)
        console.log({ error });
      }
    };

    fetchNews();
  }, []);

  console.log({loading});

  return (
    <>
      <div className="w-screen h-full p-5 my-10">
        <div className="w-screen">
          <div className="w-full flex justify-center items-center text-5xl font-bold mb-10">
            INI ADALAH PORTAL BERITA TERKINI
          </div>
          {loading ? (
            <NotFound />
          ) : (
            <div className="w-full flex flex-wrap justify-center gap-5">
              {news.map((item: any, index: number) => (
                <CardVideo
                  key={index}
                  thumbnail={item.urlToImage}
                  judul={item.title}
                  deskripsi={item.description}
                  author={item.author}
                  url={item.url}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
