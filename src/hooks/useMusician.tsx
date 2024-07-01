import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MusicianService } from "../services/MusicianService";
import { Musician } from "../models/musician";

export function useCreateMusician() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ["create-musician"],
    mutationFn: async (musician: Partial<Musician>) => {
      return MusicianService.create(musician);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["read-musicians"],
      });
    },
  });

  return {
    mutateAsync,
  };
}

export function useReadMusicians() {
  const { data, isLoading } = useQuery({
    queryKey: ["read-musicians"],
    queryFn: () => MusicianService.read(),
  });

  return {
    data,
    isLoading,
  };
}

export function useDeleteMusician() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationKey: ["delete-musician"],
    mutationFn: async (musicianId: string) => {
      return MusicianService.delete(musicianId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["read-musicians"],
      });
    },
  });

  return {
    mutateAsync,
  };
}
