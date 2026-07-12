import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  demoUrl?: string;
  sourceUrl?: string;
  description: string;
  highlights: string[]; // rendered as "+ added" lines
  meta?: string; // rendered as a dim context line (e.g. deploy info)
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'project-name-one',
      demoUrl: '#',
      sourceUrl: '#',
      description:
        '[Loyiha haqida 1-2 gap: nima qiladi, qaysi muammoni hal qiladi va kim uchun yaratilgan.]',
      highlights: [
        'React + TailwindCSS frontend',
        'Node.js / Express REST API',
        "PostgreSQL ma'lumotlar bazasi",
      ],
      meta: 'deployed: Vercel + Railway',
    },
    {
      name: 'sme-management-platform',
      demoUrl: '#',
      sourceUrl: '#',
      description:
        'Kichik biznes uchun boshqaruv paneli — inventar, hisob-faktura, mijozlar yozuvlari va hisobotlar bitta interfeysda.',
      highlights: ['Angular + .NET 8 full-stack', 'PostgreSQL + Docker'],
      meta: 'CI/CD: GitHub Actions',
    },
    {
      name: 'restaurant-pos-system',
      demoUrl: '#',
      sourceUrl: '#',
      description:
        'Yaponiya restoranlari uchun POS tizimi — buyurtmalar, stol kuzatuvi va kunlik daromad hisoboti touchscreen interfeysida.',
      highlights: ['Angular + SignalR real-time', 'ASP.NET Core backend'],
      meta: 'platform: Windows Tablet',
    },
  ];
}
