import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string
  duration: string
  isCurrent: boolean
  onPlay: () => void
}

export function Lesson({title, duration, isCurrent = false,onPlay}: LessonProps) {
  return (
    <button 
      onClick={onPlay} 
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-violet-500 enabled:hover:text-zinc-100"
    >
      {
        isCurrent ? (
          <PlayCircle className="w-4 h-4 text-violet-500" />
        ) : (
          <Video className="w-4 h-4 text-zinc-500" />
        )
      }
      
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}