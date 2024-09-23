import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateClassroomResponse } from './new.interface';
import { environment } from '@/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewClassroomService {

    constructor(private http: HttpClient) { }

    newClassroom({ name }: { name: string }){
        const url = `${environment.SERVER_URL}/classroom`
        return this.http.post<CreateClassroomResponse>(url, { name })
    }
}
