import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  

  @Input() imageUrl!:string;

  ngOnInit(): void {
    console.log(this.imageUrl)
  }
}
