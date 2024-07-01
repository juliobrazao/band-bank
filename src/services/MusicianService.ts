import axios from "axios";
import { Musician } from "../models/musician";

export class MusicianService {
  static async create(musician: Partial<Musician>) {
    return axios.post(
      `${import.meta.env.VITE_FAKE_API_URL}/musicians`,
      musician
    );
  }
}
