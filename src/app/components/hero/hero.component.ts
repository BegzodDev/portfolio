import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  stack = [
    { k: 'Frontend', v: 'Angular, TypeScript' },
    { k: 'Backend', v: 'ASP.NET Core, C#' },
    { k: 'Database', v: 'SQL Server, PostgreSQL' },
    { k: 'Tools', v: 'Git, Docker, Azure' },
    { k: 'Tillar', v: "O'zbek · Русский · 日本語" },
    { k: 'Joylashuv', v: 'Aichi, Japan 🇯🇵' },
  ];
}
