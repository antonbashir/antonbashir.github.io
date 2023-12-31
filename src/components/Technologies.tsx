import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/swiper.css';

enum TechnologyMode {
  languages,
  applications
}

type Properties = {
  key?: string
  spaceBetween: number
  slidesPerView: number
  technologies: Array<string>
  mode: TechnologyMode
}

const Technologies = (properties: Properties) => <Swiper
  loop
  freeMode
  className='swiper-container'
  slidesPerView={properties.slidesPerView}
  speed={3000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  spaceBetween={properties.spaceBetween}
  modules={[Grid, Autoplay, Pagination]}>
  {properties.technologies.map((technology) => <SwiperSlide key={technology}>
    {properties.mode == TechnologyMode.languages
      ? <div className="rounded-3xl p-0.5 bg-gradient-to-r from-light-blue-500 via-blue-500 to-indigo-500">
        <div className='flex place-content-center p-8 rounded-3xl bg-base-200'>
          <p className="text-lg font-bold bg-gradient-to-r from-light-blue-500 via-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">{technology}</p>
        </div>
      </div>
      : <div className="rounded-3xl p-0.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500">
        <div className='flex place-content-center p-8 rounded-3xl bg-base-200'>
          <p className="text-lg font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 inline-block text-transparent bg-clip-text">{technology}</p>
        </div>
      </div>}
  </SwiperSlide>)}
</Swiper>

export const Languages = () => <Technologies
  key="languages"
  mode={TechnologyMode.languages}
  slidesPerView={6}
  spaceBetween={16}
  technologies={[
    "Dart",
    "Java",
    "Kotlin",
    "Python",
    "TS",
    "JS",
    "C",
    "C++",
    "Scala",
    "Lua",
  ]}
/>

export const Applications = () => <Technologies
  key="applications"
  mode={TechnologyMode.applications}
  technologies={[
    "Flutter",
    "Linux",
    "IOUring",
    "RSocket",
    "Groovy",
    "E2K",
    "React",
    "Astro",
    "Tailwind",
    "CMake",
    "Tailscale",
    "OKD",
    "Ansible",
    "Langchain",
    "Gradle",
    "Kaniko",
    "FFMpeg",
    "GRPC",
    "Kurento",
    "Terraform",
    "Istio",
    "Envoy",
    "Nginx",
    "Haproxy",
    "Jenkins",
    "EFK",
    "ELK",
    "Grafana",
    "JSON",
    "MessagePack",
    "YAML",
    "HOCON",
    "Maven",
    "Ant",
    "Netty",
    "GraalVM",
    "JVM",
    "Tarantool",
    "Kafka",
    "JBoss/WF",
    "Postgres",
    "UnrealEngine",
    "Meson",
    "LXC",
    "Docker",
    "Git",
    "Vault",
    "Nexus",
    "Ktor",
    "Reindexer",
    "Spring",
    "Prometheus",
    "Rive",
    "Lottie",
  ]}
  slidesPerView={8}
  spaceBetween={16}
/>