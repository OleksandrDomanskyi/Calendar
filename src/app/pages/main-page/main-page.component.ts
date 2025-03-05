import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MainWindowComponent } from '../../components/main-window/main-window.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainWindowComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {

}
