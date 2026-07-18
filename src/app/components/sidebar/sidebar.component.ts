import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private transloco: TranslocoService) {}

  navItems: NavItem[] = [
    {
      label: 'sidebar.nav.about',
      ext: 'about.ts',
      href: '#about',
      active: true,
    },
    {
      label: 'sidebar.nav.projects',
      ext: 'projects.tsx',
      href: '#projects',
      active: false,
    },
    {
      label: 'sidebar.nav.experience',
      ext: 'experience.log',
      href: '#contracts',
      active: false,
    },
    {
      label: 'sidebar.nav.contact',
      ext: 'contact.json',
      href: '#contact',
      active: false,
    },
  ];
  changeLang(lang: string) {
    this.transloco.setActiveLang(lang);
  }
}

interface NavItem {
  label: string;
  ext: string;
  href: string;
  active: boolean;
}
