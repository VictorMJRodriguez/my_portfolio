import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';

export default function VideoPreview() {
  // Add all your video details here
  const videos = [
    {
      title: "AutoCAD Plugin Demo1",
      file: "/video1.mp4", // Must match the file name in the public folder
      duration: "0:15",
    },
    {
      title: "Office Automation Demo1",
      file: "/video2.mp4",
      duration: "0:08",
    },
    {
      title: "Office Automation Demo2",
      file: "/video3.mp4",
      duration: "0:22",
    },
    {
      title: "Facial Recognition Demo1",
      file: "/video4.mp4",
      duration: "0:22",
    },
    {
      title: "Facial Recognition Demo2",
      file: "/video5.mp4",
      duration: "0:22",
    },
    {
      title: "Trader Demo",
      file: "/video6.mp4",
      duration: "0:22",
    },
    {
      title: "AutoCAD Plugin Demo2",
      file: "/video7.mp4",
      duration: "0:22",
    },
    {
      title: "AutoCAD Plugin Demo3",
      file: "/video8.mp4",
      duration: "0:22",
    },
    {
      title: "AutoCAD Plugin Demo4",
      file: "/video9.mp4",
      duration: "0:22",
    }
  ];

  return (
    <div className="w-full max-w-md bg-[#0f172a]/80 border border-slate-700 rounded-2xl p-5 backdrop-blur-md shadow-[0_0_30px_rgba(37,99,235,0.15)] relative z-20 flex flex-col max-h-[500px]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎬</span>
          <h3 className="text-lg font-bold text-white">Video Gallery</h3>
        </div>
        <span className="text-xs font-semibold text-blue-400 bg-blue-900/30 px-2.5 py-1 rounded-full border border-blue-800/50">
          {videos.length} Videos
        </span>
      </div>

      {/* Scrollable Video List */}
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
        {videos.map((video, index) => (
          <div 
            key={index} 
            className="group relative rounded-xl overflow-hidden border border-slate-800 bg-[#0B1120] flex-shrink-0"
          >
            {/* The Video Player */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            >
              <source src={video.file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Dark Overlay Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent pointer-events-none"></div>

            {/* Play Icon Overlay (Optional, makes it look like a video player) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FiPlayCircle className="text-white text-5xl drop-shadow-lg opacity-70" />
            </div>

            {/* Video Info at the bottom of each video */}
            <div className="absolute bottom-0 left-0 w-full p-3 flex justify-between items-end z-10">
              <h4 className="text-white font-semibold text-sm drop-shadow-md">
                {video.title}
              </h4>
              <span className="text-xs font-medium text-gray-300 bg-black/50 px-2 py-0.5 rounded">
                {video.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Hint that it's scrollable (optional) */}
      <div className="mt-3 text-center">
        <p className="text-xs text-slate-500">Scroll to see more</p>
      </div>

    </div>
  );
}