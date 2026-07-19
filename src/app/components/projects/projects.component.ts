import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../interfaces/project';
import { TranslocoModule } from '@jsverse/transloco';
import { ScrollRevealDirective } from '../../../shared/directives/animations-pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'projects.items.uds.name',
      demoUrl: '#',
      sourceUrl: '#',
      description: 'projects.items.uds.description',
      highlights: [
        'projects.items.uds.highlight1',
        'projects.items.uds.highlight2',
        'projects.items.uds.highlight3',
      ],
      meta: 'projects.items.uds.meta',
    },
    {
      name: 'projects.items.medData.name',
      demoUrl: '#',
      sourceUrl: '#',
      description: 'projects.items.medData.description',
      highlights: [
        'projects.items.medData.highlight1',
        'projects.items.medData.highlight2',
        'projects.items.medData.highlight3',
      ],
      meta: 'projects.items.medData.meta',
    },
    {
      name: 'projects.items.dmsTeeth.name',
      demoUrl: '#',
      sourceUrl: '#',
      description: 'projects.items.dmsTeeth.description',
      highlights: [
        'projects.items.dmsTeeth.highlight1',
        'projects.items.dmsTeeth.highlight2',
        'projects.items.dmsTeeth.highlight3',
      ],
      meta: 'projects.items.dmsTeeth.meta',
    },
    {
      name: 'projects.items.mokas.name',
      demoUrl: '#',
      sourceUrl: '#',
      description: 'projects.items.mokas.description',
      highlights: [
        'projects.items.mokas.highlight1',
        'projects.items.mokas.highlight2',
        'projects.items.mokas.highlight3',
      ],
      meta: 'projects.items.mokas.meta',
    },
  ];
}
