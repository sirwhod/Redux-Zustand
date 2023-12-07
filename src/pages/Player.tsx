import { ChevronDown, MessageCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { Module } from '../components/Module';
import { useEffect } from 'react';
import { useCurrentLesson, useStore } from '../zustandStore';

export function Player() {
  const { course, isLoading, load } = useStore()

  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    load()
  },[])

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson]);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 border-l absolute top-0 bottom-0 right-0 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900">
            {isLoading && (
              <>
                <div className="flex animate-pulse w-full items-center gap-3 bg-zinc-800 p-4">
                  <div className="flex h-10 w-14 rounded-full bg-zinc-950/25" />
                  <div className="flex flex-col w-full gap-1">
                    <div className="h-6 w-full bg-zinc-600/25 rounded" />
                    <div className="h-3 w-full bg-zinc-700/25 rounded"/>
                  </div>
                  <ChevronDown className="w-5 h-5 ml-auto text-zinc-500/25" />
                </div>
                <div className="flex animate-pulse w-full items-center gap-3 bg-zinc-800 p-4">
                  <div className="flex h-10 w-14 rounded-full bg-zinc-950/25" />
                  <div className="flex flex-col w-full gap-1">
                    <div className="h-6 w-full bg-zinc-600/25 rounded" />
                    <div className="h-3 w-full bg-zinc-700/25 rounded"/>
                  </div>
                  <ChevronDown className="w-5 h-5 ml-auto text-zinc-500/25" />
                </div>
                <div className="flex animate-pulse w-full items-center gap-3 bg-zinc-800 p-4">
                  <div className="flex h-10 w-14 rounded-full bg-zinc-950/25" />
                  <div className="flex flex-col w-full gap-1">
                    <div className="h-6 w-full bg-zinc-600/25 rounded" />
                    <div className="h-3 w-full bg-zinc-700/25 rounded"/>
                  </div>
                  <ChevronDown className="w-5 h-5 ml-auto text-zinc-500/25" />
                </div>
                <div className="flex animate-pulse w-full items-center gap-3 bg-zinc-800 p-4">
                  <div className="flex h-10 w-14 rounded-full bg-zinc-950/25" />
                  <div className="flex flex-col w-full gap-1">
                    <div className="h-6 w-full bg-zinc-600/25 rounded" />
                    <div className="h-3 w-full bg-zinc-700/25 rounded"/>
                  </div>
                  <ChevronDown className="w-5 h-5 ml-auto text-zinc-500/25" />
                </div>
              </>
            )}
            {course?.modules && course?.modules.map((module, index) => {
              return (
                <Module 
                  key={module.id} 
                  moduleIndex={index} 
                  title={module.title} 
                  amountOfLessons={module.lessons.length} 
                />
              );
            })}
          </aside>
        </main>
        <div className="flex items-center justify-between">
          {/*HEADER*/}
          <Header />

          <button
            disabled={isLoading} 
            className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 disabled:bg-violet-500/50 disabled:cursor-not-allowed"
          >
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>

        </div>
      </div>
    </div>
  );
}
