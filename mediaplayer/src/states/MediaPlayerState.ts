import { MediaPlayer } from "../MediaPlayer";

export interface MediaPlayerState {
  play(player: MediaPlayer): void;
  pause(player: MediaPlayer): void;
  stop(player: MediaPlayer): void;
}
