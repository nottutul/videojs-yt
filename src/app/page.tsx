'use client';

import { Suspense } from 'react';
import { VideoPlayer } from '@videojs/react/video';
import { YouTubeVideo } from '@videojs/react/media/youtube-video';
import { VideoSkin } from '@/components/videojs/video/skin';

export default function Page() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <div className="w-full max-w-4xl"> 
        <Suspense fallback={<div className="aspect-video w-full rounded-xl bg-muted animate-pulse" />}>
          <VideoPlayer>
            <VideoSkin
              className="aspect-video w-full [&_iframe]:pointer-events-none [&_iframe]:select-none" 
              onContextMenu={(e) => e.preventDefault()}
            >
              <YouTubeVideo
                src="https://www.youtube.com/watch?v=CncYIz9XRL0"
              />
            </VideoSkin>
          </VideoPlayer>
        </Suspense>
      </div>
    </div>
  );
} 


