import type { ReactNode } from 'react'

type Properties = {
  name: string
  description: string
  documentation?: string
  code?: string
  todo?: boolean
  tags?: ReactNode
}

const ProjectCard = (props: Properties) =>
  <div className="card bg-base-200">
    <div className="card-body">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="card-title text-2xl font-bold">{props.name}</h1>
        <div className={`${props.todo && 'flex place-items-center h-full w-full'}`}>
          <p className={`py-4 text-xl ${props.todo && 'text-center'}`}>
            {props.description}
          </p>
        </div>
        <div>{props.tags}</div>
      </div>
      {!props.todo && <div className="divider"></div>}
      <div className="card-actions mt-2">
        {props.documentation &&
          <a className="btn btn-primary max-w-none text-center inline-flex items-center" href={props.documentation} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
              <path d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z M 8 12 L 8 14 L 16 14 L 16 12 L 8 12 z M 8 16 L 8 18 L 16 18 L 16 16 L 8 16 z"></path>
            </svg>
            Documentation
          </a>
        }
        {props.code &&
          <a className="btn btn-primary max-w-none text-center inline-flex items-center" href={props.code} target="_blank">
            <svg className="mr-2 -ml-1 w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            Source Code
          </a>
        }
      </div>
    </div>
  </div >

export const ProjectList = () => <>
  <ProjectCard
    name="ART"
    description="Make art, not code"
    code="https://github.com/art-community"
    tags={
      <>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg badge-outline">Java</div>
          <div className="badge badge-lg badge-outline">Kotlin</div>
          <div className="badge badge-lg badge-outline">Gradle</div>
          <div className="badge badge-lg badge-outline">ReactJS</div>
          <div className="badge badge-lg badge-outline">Typescript</div>
          <div className="badge badge-lg badge-outline">Rocks DB</div>
          <div className="badge badge-lg badge-outline">Tarantool DB</div>
          <div className="badge badge-lg badge-outline">Kafka</div>
          <div className="badge badge-lg badge-outline">Prometheus</div>
          <div className="badge badge-lg badge-outline">Logging</div>
          <div className="badge badge-lg badge-outline">Monitoring</div>
          <div className="badge badge-lg badge-outline">K8S API</div>
          <div className="badge badge-lg badge-outline">OKD API</div>
          <div className="badge badge-lg badge-outline">Gradle Plugins</div>
          <div className="badge badge-lg badge-outline">Java Code Generation</div>
          <div className="badge badge-lg badge-outline">Kotlin Code Generation</div>
          <div className="badge badge-lg badge-outline">Annotation processing</div>
        </div>
      </>
    }
  />
  <ProjectCard
    name="Dart Linux Interactor"
    description="Dart ❤️ Linux"
    documentation="https://antonbashir.github.io/dart-linux-interactor/"
    code="https://github.com/antonbashir/dart-linux-interactor/"
    tags={
      <>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg badge-outline">Dart</div>
          <div className="badge badge-lg badge-outline">IO Uring</div>
          <div className="badge badge-lg badge-outline">Dart Isolates</div>
          <div className="badge badge-lg badge-outline">Memory pools</div>
          <div className="badge badge-lg badge-outline">Memory buffers</div>
          <div className="badge badge-lg badge-outline">Event Loop</div>
        </div>
      </>
    }
  />
  <ProjectCard
    name="Dart Reactive Transport"
    description="Dart ❤️ Rsocket"
    documentation="https://antonbashir.github.io/dart-reactive-transport/"
    code="https://github.com/antonbashir/dart-reactive-transport/"
    tags={
      <>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg badge-outline">Dart</div>
          <div className="badge badge-lg badge-outline">IO Uring</div>
          <div className="badge badge-lg badge-outline">Reactive programming</div>
          <div className="badge badge-lg badge-outline">RSocket specification</div>
        </div>
      </>
    }
  />
  <ProjectCard
    name="Dart IOUring Transport"
    description="Dart ❤️ IOUring"
    documentation="https://antonbashir.github.io/dart-iouring-transport/"
    code="https://github.com/antonbashir/dart-iouring-transport/"
    tags={
      <>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg badge-outline">Dart</div>
          <div className="badge badge-lg badge-outline">IO Uring</div>
          <div className="badge badge-lg badge-outline">Dart Isolates</div>
          <div className="badge badge-lg badge-outline">Memory pools</div>
          <div className="badge badge-lg badge-outline">Memory buffers</div>
          <div className="badge badge-lg badge-outline">Event Loop</div>
        </div>
      </>
    }
  />
  <ProjectCard
    name="Dart Tarantool Storage"
    description="Dart ❤️ Tarantool"
    documentation="https://antonbashir.github.io/dart-tarantool-storage/"
    code="https://github.com/antonbashir/dart-tarantool-storage/"
    tags={
      <>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg badge-outline">Dart</div>
          <div className="badge badge-lg badge-outline">IO Uring</div>
          <div className="badge badge-lg badge-outline">Dart Isolates</div>
          <div className="badge badge-lg badge-outline">Memory pools</div>
          <div className="badge badge-lg badge-outline">Memory buffers</div>
          <div className="badge badge-lg badge-outline">Event Loop</div>
          <div className="badge badge-lg badge-outline">Tarantool DB</div>
          <div className="badge badge-lg badge-outline">Tarantool fibers</div>
          <div className="badge badge-lg badge-outline">Tarantool event loop</div>
          <div className="badge badge-lg badge-outline">Tarantool memory management</div>
        </div>
      </>
    }
  />
  <ProjectCard
    name="Dart Coroutines"
    description="Dart ❤️ Coroutines"
    documentation="https://antonbashir.github.io/dart-fibers/"
    code="https://github.com/antonbashir/dart-fibers/"
    tags={
      <>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg badge-outline">Dart</div>
          <div className="badge badge-lg badge-outline">Dart Stubs</div>
          <div className="badge badge-lg badge-outline">Dart Internals</div>
          <div className="badge badge-lg badge-outline">Fibers</div>
          <div className="badge badge-lg badge-outline">Coroutines</div>
          <div className="badge badge-lg badge-outline">ASM</div>
        </div>
      </>
    }
  />
  <ProjectCard
    name="Personal Site"
    description="This site"
    code="https://github.com/antonbashir/antonbashir.github.io"
    tags={
      <>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg badge-outline">Astro</div>
          <div className="badge badge-lg badge-outline">React</div>
          <div className="badge badge-lg badge-outline">TypeScript</div>
          <div className="badge badge-lg badge-outline">JavaScript</div>
          <div className="badge badge-lg badge-outline">Tailwind</div>
          <div className="badge badge-lg badge-outline">Framer Motion</div>
          <div className="badge badge-lg badge-outline">SVG</div>
          <div className="badge badge-lg badge-outline">Inkscape</div>
          <div className="badge badge-lg badge-outline">JS animations</div>
          <div className="badge badge-lg badge-outline">Lottie</div>
          <div className="badge badge-lg badge-outline">Rive</div>
        </div>
      </>
    }
  />
  <ProjectCard
    name="Design Framework"
    description="Flutter Material alternative"
    code="https://github.com/antonbashir/source"
    tags={
      <>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg badge-outline">Dart</div>
          <div className="badge badge-lg badge-outline">Flutter</div>
          <div className="badge badge-lg badge-outline">Material</div>
          <div className="badge badge-lg badge-outline">Design</div>
          <div className="badge badge-lg badge-outline">UI/UX</div>
        </div>
      </>
    }
  />
  <ProjectCard name="Evolution" description="TODO" todo />
</>