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

const Technologies = (properties: Properties) => {
  return <Swiper
    loop
    freeMode
    className='swiper-container'
    slidesPerView={
      window.innerWidth > 768 ? properties.slidesPerView : 3
    }
    speed={3000}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    spaceBetween={properties.spaceBetween}
    modules={[Grid, Autoplay, Pagination]}>
    {properties.technologies.map((technology) => <SwiperSlide key={technology}>
      {properties.mode == TechnologyMode.languages
        ? <div className='flex place-content-center p-8 rounded-3xl bg-base-200'>
          <p className="text-lg font-bold ">{technology}</p>
        </div>
        : <div className='flex place-content-center p-8 rounded-3xl bg-white'>
          <p className="text-lg font-bold text-black">{technology}</p>
        </div>}
    </SwiperSlide>)}
  </Swiper>;
}

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