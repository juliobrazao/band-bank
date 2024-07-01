import { ContainerCentered } from "../components/Containers";
import MusicianCreate from "../components/MusicianCreate";
import MusiciansTable from "../components/MusiciansTable";

export default function Musicians() {
  return (
    <ContainerCentered>
      <MusicianCreate />
      <MusiciansTable />
    </ContainerCentered>
  );
}
