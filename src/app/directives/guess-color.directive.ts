import { Directive, HostBinding, OnInit } from '@angular/core';
import { ColorExamService } from '../services/color-exam.service';

@Directive({
  selector: '[appGuessColor]'
})
export class GuessColorDirective implements OnInit{

  @HostBinding("style.backgroundColor") color = ""
  constructor(private examService:ColorExamService) { }

  ngOnInit(): void {
    this.examService.guessingColor.subscribe(c => {
      this.color = `rgb(${c[0]}, ${c[1]}, ${c[2]})`
    })
  }

}
