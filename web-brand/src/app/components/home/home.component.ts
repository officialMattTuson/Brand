import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typewriter', { static: false }) typewriter!: ElementRef;
  text = 'Hello, my name is';
  speed = 150;

  ngAfterViewInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const element = this.typewriter.nativeElement;
    element.innerHTML = '';

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < this.text.length) {
        element.innerHTML += this.text.charAt(i);

        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, this.speed);
  }
}
