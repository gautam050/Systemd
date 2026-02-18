import { MediaPlayerState } from "./MediaPlayerState";
import { MediaPlayer } from "../MediaPlayer";
import { PauseState } from "./PauseState";
import { StopState } from "./StopState";

export class PlayState implements MediaPlayerState {
  play(_: MediaPlayer): void {
    console.log("Media is already playing.");
  }

  pause(player: MediaPlayer): void {
    console.log("Pausing media...");
    player.setState(new PauseState());
  }

  stop(player: MediaPlayer): void {
    console.log("Stopping media...");
    player.setState(new StopState());
  }
}
