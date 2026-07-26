import { Component, inject } from '@angular/core';
import { LanguageChangerComponent } from '../language-changer/language-changer.component';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  template: `
    <div class="topbar">
      <div class="top-items">
        <div style="display: flex; align-items: center; gap: 0.5rem">
          <span class="dot"></span>
          <span
            >build passing &middot; portfolio v1.0 &middot; last updated
            2026</span
          >
        </div>
        @if (!isMobile()) {
          <app-language-changer></app-language-changer>
        }
      </div>
    </div>
  `,
  styleUrl: './topbar.component.scss',
  imports: [LanguageChangerComponent],
})
export class TopbarComponent {
  private layoutState = inject(LayoutService);
  isMobile = this.layoutState.isMobile;
}
