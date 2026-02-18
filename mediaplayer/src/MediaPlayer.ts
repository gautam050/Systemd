import { MediaPlayerState } from "./states/MediaPlayerState";
import { StopState } from "./states/StopState";

export class MediaPlayer {
  private currentState: MediaPlayerState;

  constructor() {
    this.currentState = new StopState(); // Initial state
  }

  setState(state: MediaPlayerState): void {
    this.currentState = state;
  }

  play(): void {
    this.currentState.play(this);
  }

  pause(): void {
    this.currentState.pause(this);
  }

  stop(): void {
    this.currentState.stop(this);
  }
}
