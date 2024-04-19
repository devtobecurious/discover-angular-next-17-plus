import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './shared/ui/components/main-menu/main-menu.component';
import { TestUntrackedComponent } from './learnings/untracked/test-untracked/test-untracked.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent, TestUntrackedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'videotheque-sw';
}
