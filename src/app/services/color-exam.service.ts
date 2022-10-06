import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorExamService implements OnInit {
  colors: number[] = [0, 0, 0]
  computerBoxColor = new BehaviorSubject<number[]>(this.colors)
  answer = new BehaviorSubject<boolean | undefined>(undefined)
  guessingColor = new BehaviorSubject<number[]>([0, 0, 0])

  get colors$() {
    return this.computerBoxColor.asObservable()
  }

  get answer$() {
    return this.answer.asObservable()
  }

  get guessingColor$() {
    return this.guessingColor.asObservable()
  }

  constructor() { }

  ngOnInit(): void {

  }

  changeColor(color: number[]) {
    this.colors = color
    this.computerBoxColor.next(color)
  }

  isCorrect(color: number[]) {
    this.guessingColor.next(color)
    if(this.colors[0] === color[0] && this.colors[1] === color[1] && this.colors[2] === color[2]) {
      this.answer.next(true)
    } else {
      this.answer.next(false)    }
  }
}
