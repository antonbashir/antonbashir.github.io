type Properties = {
  reference: string
}
export const Article = (props: Properties) => <a
  className="hero rounded-x btn h-max max-w-none w-1/2 m-auto justify-start"
  href={props.reference}
>
  <div
    className="hero-content card flex flex-row"
  >
    <svg
      className="h-32 w-32 fill-current"
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
    <div className="card-body">
      <div className="card-title">Article Title</div>
      <p>Article description</p>
    </div>
  </div>
</a>