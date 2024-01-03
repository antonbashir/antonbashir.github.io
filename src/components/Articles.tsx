import { getCollection } from "astro:content";
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

export const isRuArticles = atom(true);



const articles = await getCollection("blog");

type Properties = {
  title: string
  description: string
  reference: string
}

const Article = (properties: Properties) => <a
  className="hero rounded-x btn h-max max-w-none m-auto justify-start"
  href={properties.reference}
>
  <div
    className="hero-content card flex flex-row"
  >
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
      ></path>
    </svg>
    <div className="card-body place-items-start p-2">
      <div className="card-title">{properties.title}</div>
      <p>{properties.description}</p>
    </div>
  </div>
</a>

export const ArticlesLanguageSelector = () => {
  const isRu = useStore(isRuArticles);
  return <div className="flex flex-row gap-2 mx-4 place-items-center">
    <div>
      <img
        width="32"
        height="32"
        src="https://img.icons8.com/emoji/48/united-kingdom-emoji.png"
        alt="united-kingdom-emoji"
      />
    </div>
    <input type="checkbox" className="toggle toggle-md" checked={isRu} onChange={(event) => isRuArticles.set(event.target.checked)} />
    <div>
      <img
        width="32"
        height="32"
        src="https://img.icons8.com/emoji/48/russia-emoji.png"
        alt="russia-emoji"
      />
    </div>
  </div>
}

export const Articles = () => {
  const isRu = useStore(isRuArticles);
  console.log(isRu);
  return <div className="flex flex-col xl:grid xl:grid-cols-3 mx-2 gap-4">
    {
      articles
        .filter((post) =>
          isRu
            ? post.id.startsWith("ru")
            : post.id.startsWith("en"),
        )
        .map((post) => (
          <Article
            key={post.id}
            title={post.data.title}
            description={post.data.description}
            reference={post.slug}
          />
        ))
    }
  </div>
}