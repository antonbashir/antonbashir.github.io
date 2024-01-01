import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

type Properties = {}

export const CatAnimation = (props: Properties) => {
  const { rive, RiveComponent } = useRive({
    src: '/cat.riv',
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return <div className="fixed -left-10 -top-16 h-64 w-64">
    <a href="/">
      <RiveComponent />
    </a>
  </div>
}