import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

interface ContactItem {
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  items: ContactItem[] = [
    {
      label: 'contact.items.email',
      value: 'begzodpublic@gmail.com',
      href: 'mailto:begzodpublic@gmail.com',
    },
    {
      label: 'contact.items.linkedin',
      value: 'linkedin.com/in/bekhzod-qodirboev',
      href: 'https://www.linkedin.com/in/bekhzod-qodirboev-a38b0a262',
    },
    {
      label: 'contact.items.github',
      value: 'github.com/BegzodDev',
      href: 'https://github.com/BegzodDev',
    },
  ];
}
