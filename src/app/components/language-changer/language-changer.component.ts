import { Component, inject } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-language-changer',
  standalone: true,
  imports: [SelectModule, FormsModule, TranslocoModule],
  templateUrl: './language-changer.component.html',
  styleUrl: './language-changer.component.scss',
})
export class LanguageChangerComponent {
  private transloco = inject(TranslocoService);
  private layoutState = inject(LayoutService);

  isMobile = this.layoutState.isMobile;

  countries: Country[] = [
    { name: 'US', code: 'US' },
    { name: 'Rus', code: 'RU' },
    { name: 'Jap', code: 'JP' },
    { name: 'Uzb', code: 'UZ' },
  ];

  selectedCountry: Country = {
    name: 'Jap',
    code: 'JP',
  };

  changeLang(lang: string): void {
    this.transloco.setActiveLang(lang);
  }
}

interface Country {
  name: string;
  code: string;
}
