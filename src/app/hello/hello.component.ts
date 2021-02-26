import { Component, Input, OnInit } from "@angular/core";
import { SpotifyService } from "../service/spotify/spotify.service";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html"
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}
}