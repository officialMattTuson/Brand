import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typewriter', { static: false }) typewriter!: ElementRef;
  @ViewChild('cursor', { static: false }) cursor!: ElementRef;
  text = 'Hello, my name is'; // The text to be typed
  speed = 150; // Typing speed in ms

  ngAfterViewInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect() {
    if (!this.typewriter || !this.cursor) {
      console.error('Error: ViewChild not detected.');
      return;
    }

    const element = this.typewriter.nativeElement;
    const cursor = this.cursor.nativeElement;
    element.innerHTML = ''; // Ensure it's empty

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < this.text.length) {
        element.innerHTML += this.text.charAt(i); 

        // Move the cursor
        cursor.style.transform = `translateX(${i * 8}px)`; 
        i++;
      } else {
        clearInterval(typingInterval);

        cursor.style.animation = 'none';
        cursor.style.opacity = '0';
      }
    }, this.speed);
  }
}
