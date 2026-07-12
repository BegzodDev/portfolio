import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  template: `
    <div class="topbar">
      <span class="dot"></span>
      <span
        >build passing &middot; portfolio v1.0 &middot; last updated 2026</span
      >
    </div>
  `,
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {}
