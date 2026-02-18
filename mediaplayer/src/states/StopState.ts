import { MediaPlayerState } from "./MediaPlayerState";
import { MediaPlayer } from "../MediaPlayer";
import { PlayState } from "./PlayState";

export class StopState implements MediaPlayerState {
  play(player: MediaPlayer): void {
    console.log("Playing media from the beginning...");
    player.setState(new PlayState());
  }

  pause(_: MediaPlayer): void {
    console.log("Cannot pause. Media is stopped.");
  }

  stop(_: MediaPlayer): void {
    console.log("Media is already stopped.");
  }
}
