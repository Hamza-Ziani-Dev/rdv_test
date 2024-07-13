import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meetings } from '../meetings.interface';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meetingsUrl = 'assets/meetings.json';

  constructor(private http: HttpClient) { }

  getMeetings(): Observable<Meetings> {
    return this.http.get<Meetings>(this.meetingsUrl);
  }
}
