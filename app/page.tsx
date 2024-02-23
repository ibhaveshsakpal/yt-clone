"use client";

import { homeData } from "@/yt-data/home";
import { Avatar, Card, CardHeader, LinearProgress } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [homePageData, setHomePageData]: any = useState(null);

  useEffect(() => {
    setHomePageData(homeData?.contents);
  }, []);

  // console.log(homePageData && homePageData[0]?.video?.title);

  return (
    <div className="flex flex-col text-white">
      {!homePageData ? (
        <LinearProgress color="error" />
      ) : (
        <>
          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
            {homePageData &&
              homePageData.map((home: any, key: number) => (
                <div key={key} className="flex flex-col justify-center w-full">
                  <div className="ml-5">
                    <div className="my-3">
                      <Image
                        className="shadow-2xl rounded-2xl"
                        src={home?.video?.thumbnails[0]?.url}
                        width={380}
                        height={200}
                        alt={home?.video?.thumbnails[0]?.url}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="test">
                      <CardHeader
                        className="px-2"
                        avatar={
                          home.video?.author?.avatar &&
                          home.video.author.avatar.map((author: any) => (
                            <Avatar key={author.url} src={author.url} />
                          ))
                        }
                      ></CardHeader>
                    </div>
                    {home.video?.author?.title && (
                      <div className="">
                        <h3 className="py-3 font-bold">
                          {home.video?.title && home.video?.title}
                        </h3>
                        <span className="text-gray-300">
                          {home.video?.author?.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
