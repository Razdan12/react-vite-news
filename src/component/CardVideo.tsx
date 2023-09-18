import React, { FC } from "react";

export interface VideoProps {
  thumbnail?: string;
  judul: string;
  deskripsi: string;
  author: string;
  url: string
}
const CardVideo: FC<VideoProps> = ({ thumbnail, judul, deskripsi, author, url }) => {
  return (
    <div>
      <div className="card w-72 bg-base-300 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={thumbnail} alt={judul} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{judul}</h2>
          <div className="flex gap-1 justify-center items-center">
            <div className="">{deskripsi}</div>
          </div>
          <div className="badge badge-primary">{author}</div>
          <a href={url}>
            <button className="btn btn-primary">Baca Selengkapnya</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
