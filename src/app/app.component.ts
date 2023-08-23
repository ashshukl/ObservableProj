import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, map, merge, of, tap, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ObservableProj';
  studentList = ['Ashish', 'Jelly', 'Priya', 'Kavita', 'Mahesh']
  studentsO: Observable<string[]> = of(this.studentList);
  stds:string[] = [];
  
  
  ngOnInit(): void {
    // this.students.subscribe((data) => { this.stds = data });
    const subscription = this.studentsO.subscribe({
      next: (data) => {this.stds = data},
      error: () => console.log('error occured')
    }
    )

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }

  btnClick(){
      this.studentList.push('Hanu');    
      console.log(this.studentList);
  }
}
