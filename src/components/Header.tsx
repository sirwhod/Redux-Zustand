import { useCurrentLesson, useStore } from "../zustandStore"

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isLoading = useStore(store => store.isLoading)

  
  if (isLoading) {
    return (
      <div className="flex animate-pulse flex-col gap-1 w-1/3">
        <div className="h-6 bg-zinc-500/25 rounded" />
        <div className="h-3 bg-zinc-700/25 rounded" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
    </div>
  )
}