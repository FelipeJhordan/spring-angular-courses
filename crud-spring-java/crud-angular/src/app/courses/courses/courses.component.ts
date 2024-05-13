import { Component } from '@angular/core';
import { Course } from '../model/course';
import { MatTableModule } from '@angular/material/table';
import { CoursesService } from '../services/courses.service';
import { Observable, delay, first, tap } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {

  courses$: Observable<Course[]>
  displayedColumns = [ 'name', 'category' ]


  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list().pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    )
  }



}
