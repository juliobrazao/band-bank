import { Trash } from "react-bootstrap-icons";
import { useDeleteMusician, useReadMusicians } from "../hooks/useMusician";

export default function MusiciansTable() {
  const { data: musicians } = useReadMusicians();
  const { mutateAsync: deleteMusician } = useDeleteMusician();

  return (
    <>
      <div className="table-responsive w-100">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Instrument</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {musicians?.map(({ id, name, instrument }: any, index: number) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{instrument}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteMusician(id)}
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
