import { Component, Input, OnInit } from "@angular/core";
import { Artist } from "../interfaces/artists";
import { SpotifyService } from "../service/spotify/spotify.service";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html"
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  private artist = "7jy3rLJdDQY21OgRLCZ9sD";
  public source: Artist;

  constructor(private spotifyService: SpotifyService) {
    this.source = {}as Artist;
  }

  ngOnInit() {
    this.spotifyService.getArtists(this.artist).then(data => {
      this.source = data;
    });
  }
}
