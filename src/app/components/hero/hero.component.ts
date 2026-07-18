import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  stack: StackItem[] = [
    { key: 'stack.frontend.key', value: 'stack.frontend.value' },
    { key: 'stack.backend.key', value: 'stack.backend.value' },
    { key: 'stack.database.key', value: 'stack.database.value' },
    { key: 'stack.tools.key', value: 'stack.tools.value' },
    { key: 'stack.languages.key', value: 'stack.languages.value' },
    { key: 'stack.location.key', value: 'stack.location.value' },
  ];
}
interface StackItem {
  key: string;
  value: string;
}
