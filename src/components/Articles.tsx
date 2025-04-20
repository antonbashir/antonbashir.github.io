import { getCollection } from "astro:content";
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

const isRuArticles = atom(true);
const articles = await getCollection("blog");

type Properties = {
  title: string
  description: string
  reference: string
  date: string
  time: string
  label: string
  tags?: string
}

const Article = (properties: Properties) => {
  const tags = properties.tags?.split(",")?.map((tag: string) => tag.replaceAll(/\s/g, '')) ?? [];
  return <a
    className="hero rounded-x h-max max-w-none m-auto justify-start"
    href={properties.reference}
  >
    <div
      className="hero-content card flex flex-row"
    >
      <div>
        <svg
          className="h-16 w-16 fill-current mt-4"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <path
            d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"
          />
        </svg>
      </div>
      <div className="card-body place-items-start p-2">
        <div className="card-title text-justify">
          <div>{properties.title}</div>
        </div>
        <p className="text-justify">{properties.description}</p>
        <div className="card-title flex flex-row">
          <p className="text-sm font-light text-justify">{properties.date}</p>
          <p className="text-sm font-light text-justify">{properties.time}</p>
        </div>
        <div className="flex flex-row flex-wrap items-center gap-2">{tags.map(tag => <div key={tag} className={`badge badge-primary`}>{tag}</div>)}</div>
        <div className={`badge badge-lg bg-${articleColor(properties.label)}`}>{properties.label}</div>
      </div>
    </div>
  </a>;
}

export const articleColor = (label: string) => {
  var color: string = "primary";
  switch (label.toLowerCase()) {
    case "note":
      color = "blue-500";
      break;
    case "article":
      color = "green-500";
      break;
    case "guide":
      color = "purple-500";
      break;
  }
  return color;
}

export const ArticlesLanguageSelector = () => {
  const isRu = useStore(isRuArticles);
  return <div className="flex flex-row gap-2 mx-4 place-items-center">
    <div>
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/emoji/48/united-kingdom-emoji.png"
        alt="united-kingdom-emoji"
      />
    </div>
    <input type="checkbox" className="toggle toggle-sm" checked={isRu} onChange={(event) => isRuArticles.set(event.target.checked)} />
    <div>
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/emoji/48/russia-emoji.png"
        alt="russia-emoji"
      />
    </div>
  </div>
}

export const Articles = () => {
  const isRu = useStore(isRuArticles);
  return <div className="flex flex-col mx-2 gap-4 divide-y divide-gray-800">
    {
      articles
        .filter((post) =>
          isRu
            ? post.id.startsWith("ru")
            : post.id.startsWith("en"),
        )
        .sort((first, second) => Date.parse(second.data.date) > Date.parse(first.data.date) ? 1 : -1)
        .map((post) => (
          <Article
            key={post.id}
            title={post.data.title}
            description={post.data.description}
            label={post.data.label}
            date={post.data.date}
            time={post.data.time}
            tags={post.data.tags}
            reference={post.slug}
          />
        ))
    }
  </div>
}