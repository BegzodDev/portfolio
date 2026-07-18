import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

interface Commit {
  hash: string; // date range, shown like a commit hash
  msg: string; // role/title
  meta: string; // company
  body: string; // description
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  commits: Commit[] = [
    {
      hash: '#a1f9c2e',
      msg: 'experience.items.commitOne.msg',
      meta: 'experience.items.commitOne.meta',
      body: 'experience.items.commitOne.body',
    },
    {
      hash: '#b7d3e91',
      msg: 'experience.items.commitTwo.msg',
      meta: 'experience.items.commitTwo.meta',
      body: 'experience.items.commitTwo.body',
    },
  ];
}
