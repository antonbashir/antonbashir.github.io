import Rive from '@rive-app/react-canvas';
import { useRive } from '@rive-app/react-canvas';

type Properties = {}

export const CatAnimation = (props: Properties) => {
  const { rive, RiveComponent } = useRive({
    src: '/cat.riv',
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return <RiveComponent style={{ height: "150px", width: "200px" }} />
}