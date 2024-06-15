"use client";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { useEffect, useRef } from "react";

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  function getLocalStream() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1920,
          height: 1080,
        },
        audio: false,
      })
      .then((stream) => {
        console.log(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
  }

  useEffect(() => {
    getLocalStream();
  }, []);

  return (
    <main className="h-screen w-full relative">
      <video
        className="h-full w-full flex-1 rounded-full"
        autoPlay
        muted
        ref={videoRef}
      ></video>

      <Footer className="absolute bottom-0" />
    </main>
  );
}
