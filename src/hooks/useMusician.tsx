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

export function useReadMusician(musicianId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["read-musician"],
    queryFn: () => {
      return MusicianService.readOne(musicianId);
    },
  });

  return {
    data,
    isLoading,
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

export function useUpdateMusicians() {
  const queryClient = useQueryClient();

  const {} = useMutation({
    mutationKey: ["update-musician"],
    mutationFn: async ({
      musicianId,
      musician,
    }: {
      musicianId: string;
      musician: Partial<Musician>;
    }) => {
      return MusicianService.update(musicianId, musician);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["read-musicians"],
      });
    },
  });
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
