import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  ngOnInit(): void {
    this.showSlides();
  }

  public slideIndex = 0;

  public showSlides() {
    let i;
  let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  this.slideIndex++;

  if (this.slideIndex > slides.length) {
    this.slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
  dots[this.slideIndex - 1].className += " active";

  setTimeout(() => this.showSlides(), 5000); // Change image every 2 seconds
  }

  


   
}
