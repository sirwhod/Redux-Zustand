import ReactPlayer from 'react-player'
import { useAppSelector } from '../store'
import { useDispatch } from 'react-redux'
import { next } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  const video = useAppSelector((state) => {
    const {currentLessonIndex, currentModuleIndex} = state.player

    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return currentLesson
  })

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-ful bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayNext}
        playing
        url={`https://www.youtube.com/watch?v=${video.id}`}
      />
    </div>
  )
}