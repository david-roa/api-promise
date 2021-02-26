import { Injectable } from "@angular/core";
import { HttpHelperService } from "../http/http.service";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  private BASE_URL = "https://api.spotify.com/v1/artists/";

  constructor(private helperService: HttpHelperService) {}

  getArtists(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.helperService.getRequest(this.BASE_URL + id, resolve, reject);
    });
  }
}
