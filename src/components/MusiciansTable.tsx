import { Pencil, PlusCircleFill, Trash } from "react-bootstrap-icons";
import { useDeleteMusician, useReadMusicians } from "../hooks/useMusician";
import { DialogContext } from "../contexts/DialogContext";
import { useContext } from "react";
import { Capitalize, CapitalizeMultiple } from "../helpers/strings";

export default function MusiciansTable() {
  const { data: musicians } = useReadMusicians();
  const { mutateAsync: deleteMusician } = useDeleteMusician();

  const { handleToggleDialog } = useContext(DialogContext);

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex justify-content-end w-100">
            <button className="btn btn-primary" onClick={handleToggleDialog}>
              {CapitalizeMultiple("new musician")}
              &nbsp;
              <PlusCircleFill />
            </button>
          </div>
        </div>

        <div className="col-sm-12">
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
                {musicians?.map(
                  ({ id, name, instrument }: any, index: number) => (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{Capitalize(instrument)}</td>
                      <td>
                        <button
                          className="btn btn-danger mx-1"
                          onClick={() => deleteMusician(id)}
                        >
                          <Trash />
                        </button>
                        <button className="btn btn-info mx-1">
                          <Pencil />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
