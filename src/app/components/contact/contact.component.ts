import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactItem {
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  items: ContactItem[] = [
    {
      label: 'Email',
      value: 'bekhzod.qodirboev@gmail.com',
      href: 'mailto:bekhzod.qodirboev@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/bekhzod-qodirboev',
      href: 'https://www.linkedin.com/in/bekhzod-qodirboev-a38b0a262',
    },
    { label: 'Telegram', value: '@bekhzodq', href: 'https://t.me/bekhzodq' },
  ];
}
