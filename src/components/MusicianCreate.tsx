import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreateMusician } from "../hooks/useMusician";
import { instruments } from "../models/instruments";
import { Floppy2Fill } from "react-bootstrap-icons";

const MusicianSchema = y.object({
  name: y.string().min(5, "Musician name must have at least 5 characters"),
  instrument: y.string().min(1, "Instrument must be set"),
});

export type MusicianType = y.InferType<typeof MusicianSchema>;

export default function MusicianCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MusicianType>({
    resolver: yupResolver(MusicianSchema),
  });

  const { mutateAsync: saveMusician } = useCreateMusician();

  const handleSubmitForm = (musician: MusicianType) => {
    saveMusician(musician);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <label htmlFor="musician_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="musician_name"
            {...register("name")}
            className="form-control"
          />
          {(errors && errors.name?.message) ?? (
            <small className="form-text text-black-50">
              {errors.name?.message}
            </small>
          )}
        </div>

        <div className="mt-3">
          <label htmlFor="musician_instrument" className="form-label">
            Instrument
          </label>
          <select
            className="form-select"
            {...register("instrument")}
            id="musician_instrument"
          >
            <option value="">Select</option>
            {instruments.map((instrument, index) => (
              <option key={index} value={instrument}>{`${instrument
                .charAt(0)
                .toUpperCase()}${instrument.slice(1)}`}</option>
            ))}
          </select>

          {(errors && errors.instrument?.message) ?? (
            <small className="form-text text-black-50">
              {errors.instrument?.message}
            </small>
          )}
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary w-100">
            Save Member &nbsp;
            <Floppy2Fill />
          </button>
        </div>
      </form>
    </>
  );
}
