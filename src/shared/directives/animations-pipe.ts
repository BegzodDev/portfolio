import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  /** Animatsiya turi: fade-up (default), fade-in, fade-left, fade-right, scale */
  @Input('appScrollReveal') animationType: string = 'fade-up';

  /** Kechikish (ms) — ketma-ket elementlar uchun stagger effekti */
  @Input() revealDelay: number = 0;

  /** Faqat bir marta animatsiya bo'lsinmi (true) yoki har safar scroll qilinganda qaytarilsinmi (false) */
  @Input() revealOnce: boolean = true;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;

    this.renderer.addClass(element, 'reveal-init');
    this.renderer.addClass(element, `reveal-${this.animationType}`);

    if (this.revealDelay) {
      this.renderer.setStyle(
        element,
        'transition-delay',
        `${this.revealDelay}ms`,
      );
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(element, 'reveal-active');
            if (this.revealOnce) {
              this.observer?.unobserve(element);
            }
          } else if (!this.revealOnce) {
            this.renderer.removeClass(element, 'reveal-active');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px', // pastdan biroz erta trigger bo'ladi
      },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
