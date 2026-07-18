import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../interfaces/project';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'projects.items.projectOne.name',
      demoUrl: '#',
      sourceUrl: '#',
      description: 'projects.items.projectOne.description',
      highlights: [
        'projects.items.projectOne.highlight1',
        'projects.items.projectOne.highlight2',
        'projects.items.projectOne.highlight3',
      ],
      meta: 'projects.items.projectOne.meta',
    },
    {
      name: 'projects.items.smePlatform.name',
      demoUrl: '#',
      sourceUrl: '#',
      description: 'projects.items.smePlatform.description',
      highlights: [
        'projects.items.smePlatform.highlight1',
        'projects.items.smePlatform.highlight2',
      ],
      meta: 'projects.items.smePlatform.meta',
    },
    {
      name: 'projects.items.restaurantPos.name',
      demoUrl: '#',
      sourceUrl: '#',
      description: 'projects.items.restaurantPos.description',
      highlights: [
        'projects.items.restaurantPos.highlight1',
        'projects.items.restaurantPos.highlight2',
      ],
      meta: 'projects.items.restaurantPos.meta',
    },
  ];
}
