import axios from "axios";
import { Musician } from "../models/musician";

const ENDPOINT = `${import.meta.env.VITE_FAKE_API_URL}/musicians`;

export class MusicianService {
  static async create(musician: Partial<Musician>) {
    return axios.post(ENDPOINT, musician).then((response) => response.data);
  }

  static async read() {
    return axios.get(ENDPOINT).then((response) => response.data);
  }

  static async update(musicianId: string, musician: Partial<Musician>) {
    return axios
      .patch(`${ENDPOINT}/${musicianId}`, musician)
      .then((response) => response.data);
  }

  static async delete(musicianId: string) {
    return axios
      .delete(`${ENDPOINT}/${musicianId}`)
      .then((response) => response.data);
  }
}
