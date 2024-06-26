import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './shared/ui/components/main-menu/main-menu.component';
import { UntrackedDiscoverComponent } from './learnings/signals/untracked-discover/untracked-discover.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent, UntrackedDiscoverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'videotheque-sw';
}
