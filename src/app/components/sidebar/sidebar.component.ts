import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private transloco: TranslocoService) {}
  navItems = [
    { label: 'about', ext: '.md', href: '#about', active: true },
    { label: 'projects', ext: '/', href: '#projects', active: false },
    { label: 'experience', ext: '.log', href: '#contracts', active: false },
    { label: 'contact', ext: '.json', href: '#contact', active: false },
  ];

  changeLang(lang: string) {
    this.transloco.setActiveLang(lang);
  }
}
