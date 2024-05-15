import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses'

  constructor(private httpCliente: HttpClient) { }

  list(): Observable<Course[]>  {

    const course = this.httpCliente.get<Course[]>(
      this.API
    )

     return course
  }
}
