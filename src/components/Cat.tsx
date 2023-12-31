import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

type Properties = {}

export const CatAnimation = (props: Properties) => {
  const { rive, RiveComponent } = useRive({
    src: '/cat.riv',
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.ScaleDown,
      alignment: Alignment.TopLeft
    })
  });
  return <div className="w-20 h-20">
    <RiveComponent />
  </div>
}