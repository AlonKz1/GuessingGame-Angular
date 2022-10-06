import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ColorExamService } from 'src/app/services/color-exam.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

  color: number[] | undefined
  $subs: Subscription | undefined
  r: string | undefined
  g: string | undefined
  b: string | undefined
  answer: Observable<boolean | undefined> | undefined

  constructor(private colorExam: ColorExamService) { }

  ngOnInit(): void {
   this.colorExam.computerBoxColor.subscribe(c => this.color = c)
   this.answer = this.colorExam.answer

  }

  ngOnDestroy(): void {
    this.$subs?.unsubscribe()
  }

  randomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const color = [r,g,b]
    this.colorExam.changeColor(color)
  }

  checkColor() {
    const guessingColor = [Number(this.r), Number(this.g), Number(this.b)]
    this.colorExam.isCorrect(guessingColor)
  }
}
