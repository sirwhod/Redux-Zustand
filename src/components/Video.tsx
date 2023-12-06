import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className="w-ful bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=RLO9zbQAq2A&t=714s"
      />
    </div>
  )
}