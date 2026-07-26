import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { ScrollRevealDirective } from '../../../shared/directives/animations-pipe';

interface Commit {
  hash: string;
  msg: string;
  meta: string;
  body: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslocoModule, ScrollRevealDirective],
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
    {
      hash: '#c83f1d2',
      msg: 'experience.items.commitThree.msg',
      meta: 'experience.items.commitThree.meta',
      body: 'experience.items.commitThree.body',
    },
    {
      hash: '#7ab9e4f',
      msg: 'experience.items.commitFour.msg',
      meta: 'experience.items.commitFour.meta',
      body: 'experience.items.commitFour.body',
    },
    {
      hash: '#d1c8a95',
      msg: 'experience.items.commitFive.msg',
      meta: 'experience.items.commitFive.meta',
      body: 'experience.items.commitFive.body',
    },
  ];
}
