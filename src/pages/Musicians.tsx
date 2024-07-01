import { ContainerFluid } from "../components/Containers";
import Dialog from "../components/Dialog";
import MusicianCreate from "../components/MusicianCreate";
import MusiciansTable from "../components/MusiciansTable";

export default function Musicians() {
  return (
    <ContainerFluid>
      <MusiciansTable />
      <Dialog title="Add Musician" content={<MusicianCreate />} />
    </ContainerFluid>
  );
}
