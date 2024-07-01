import { useMutation } from "@tanstack/react-query";
import { MusicianService } from "../services/MusicianService";
import { Musician } from "../models/musician";

export function useMusician() {
  const { mutateAsync } = useMutation({
    mutationKey: ["create-musician"],
    mutationFn: async (musician: Partial<Musician>) => {
      return MusicianService.create(musician);
    },
    onSuccess: () => alert("Musician Created!"),
  });

  return {
    mutateAsync,
  };
}
