import { MediaPlayerState } from "./MediaPlayerState";
import { MediaPlayer } from "../MediaPlayer";
import { PlayState } from "./PlayState";
import { StopState } from "./StopState";

export class PauseState implements MediaPlayerState {
  play(player: MediaPlayer): void {
    console.log("Resuming media...");
    player.setState(new PlayState());
  }

  pause(_: MediaPlayer): void {
    console.log("Media is already paused.");
  }

  stop(player: MediaPlayer): void {
    console.log("Stopping media from pause...");
    player.setState(new StopState());
  }
}
