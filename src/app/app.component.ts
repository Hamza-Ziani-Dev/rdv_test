import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedModule } from './shared/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, RouterOutlet,CalendarComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rdv_test';

  meetings = {
    '2024-07-13': ['Dring Coffee', 'Learn React', 'Sleep'],
    '2024-13-07': [' Coffee', 'Learn Angular', 'Sleep'],
  };
}
