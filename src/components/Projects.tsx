
type Properties = {

}

export const ProjectCard = (props: Properties) => {
  return (
    <div className="card mx-4 elevation-5">
      <div className="card-body">
        <div>
          <h1 className="card-title text-2xl font-bold">Dart Linux Interactor</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}