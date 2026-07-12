import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Commit {
  hash: string; // date range, shown like a commit hash
  msg: string; // role/title
  meta: string; // company
  body: string; // description
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  commits: Commit[] = [
    {
      hash: '2024 — hozirgacha',
      msg: 'Full-Stack Developer',
      meta: '@ Freelance · Yaponiya',
      body: 'Angular va .NET yordamida mijozlar uchun web ilovalar yaratish. Yaponiya B2B bozorida SME vositalari va xizmat platformalarini rivojlantirish.',
    },
    {
      hash: '2022 — 2024',
      msg: 'Software Developer',
      meta: "@ Dasturiy ta'minot kompaniyasi",
      body: "Angular frontend va ASP.NET Core backend yordamida korporativ veb ilovalar yaratish va qo'llab-quvvatlash. Jamoaviy loyihalarda faol ishtirok.",
    },
    {
      hash: '2020 — 2022',
      msg: 'Junior Developer',
      meta: "@ Boshlang'ich karyera",
      body: "C#, SQL va Angular bo'yicha mustahkam asos qo'yish. REST API va web interfeys yaratish bo'yicha amaliy tajriba orttirish.",
    },
  ];
}
