import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-changer',
  standalone: true,
  imports: [SelectModule, FormsModule, TranslocoModule],
  templateUrl: './language-changer.component.html',
  styleUrl: './language-changer.component.scss',
})
export class LanguageChangerComponent {
  constructor(private transloco: TranslocoService) {}

  countries: any[] | undefined;

  selectedCountry = { name: 'Rus', code: 'RU' };

  ngOnInit() {
    this.countries = [
      { name: 'US', code: 'US' },
      { name: 'Rus', code: 'RU' },
      { name: 'Jap', code: 'JP' },
      { name: 'Uzb', code: 'UZ' },
    ];
  }

  changeLang(lang: string) {
    this.transloco.setActiveLang(lang);
  }
}
