import { Injectable } from "@angular/core";
import { HttpHelperService } from "../http/http.service";
import { Artist } from "../../interfaces/artists";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  private BASE_URL =
    "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD";

  constructor(private helperService: HttpHelperService) {}

  getArtists(id: string): Promise<Artist> {
    return new Promise((resolve, reject) => {
      this.helperService.getRequest(this.BASE_URL, resolve, reject);
    });
  }
}
