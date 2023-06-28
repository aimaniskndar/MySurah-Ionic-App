import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mp3Files: string[] = [
    'assets/surah/mishary-rashid-alafasy-001-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-002-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-067-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-072-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-073-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-079-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-103-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-104-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-105-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-109-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-112-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-113-muslimcentral.mp3',
    'assets/surah/mishary-rashid-alafasy-114-muslimcentral.mp3',
    // Add more MP3 file paths here
  ];

  currentTrack: any = {};
  isPlaying: boolean = false;
  audioPlayer: HTMLAudioElement | null = null;

  togglePlayback() {
    if (this.isPlaying) {
      if (this.audioPlayer) {
        this.audioPlayer.pause(); // Pause the audio
      }
      this.isPlaying = false;
    } else {
      const randomIndex = Math.floor(Math.random() * this.mp3Files.length); // Generate a random index
      const selectedFilePath = this.mp3Files[randomIndex]; // Get the randomly selected file path
      this.currentTrack.title = this.extractTitle(selectedFilePath); // Set the current track title

      if (this.audioPlayer) {
        this.audioPlayer.pause(); // Pause the previously playing audio
      }
      this.audioPlayer = new Audio(selectedFilePath); // Create a new Audio object with the selected file path
      this.audioPlayer.play(); // Start playing the audio
      this.audioPlayer.addEventListener('ended', () => {
        this.playRandomTrack(); // When the audio ends, play another random track
      });

      this.isPlaying = true;
    }
  }

  playRandomTrack() {
    const randomIndex = Math.floor(Math.random() * this.mp3Files.length); // Generate a random index
    const selectedFilePath = this.mp3Files[randomIndex]; // Get the randomly selected file path
    this.currentTrack.title = this.extractTitle(selectedFilePath); // Set the current track title

    if (this.audioPlayer) {
      this.audioPlayer.pause(); // Pause the previously playing audio
    }
    this.audioPlayer = new Audio(selectedFilePath); // Create a new Audio object with the selected file path
    this.audioPlayer.play(); // Start playing the audio
    this.audioPlayer.addEventListener('ended', () => {
      this.playRandomTrack(); // When the audio ends, play another random track
    });
  }

  extractTitle(filePath: string): string {
    // Extract the title from the file path
    const parts = filePath.split('/');
    const fileName = parts[parts.length - 1];
    const title = fileName.split('.')[0];
    return title;
  }
}
