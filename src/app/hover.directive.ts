import { Directive, ElementRef, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[htlHover]'
})
export class HoverDirective implements OnInit {

  color: string = 'red';

  constructor(private element: ElementRef, @Inject(document) private document: Document) { }


  ngOnInit(): void {

  }

}
