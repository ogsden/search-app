import { Component, output, signal } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  animations: [
    trigger('searchExpand', [
      state('collapsed', style({ width: '0', opacity: 0, padding: '0' })),
      state('expanded', style({ width: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
})
export class HeaderComponent {
  public readonly searchClick = output<void>();
  public readonly backClick = output<void>();

  protected readonly mobileSearchOpen = signal(false);
  protected readonly desktopSearchOpen = signal(false);

  protected readonly navItems: ReadonlyArray<{
    readonly icon: string;
    readonly label: string;
  }> = [
    { icon: 'link', label: 'Ссылки' },
    { icon: 'contacts', label: 'Контакты' },
    { icon: 'tag', label: 'Теги' },
    { icon: 'star', label: 'Избранное' },
    { icon: 'visibility', label: 'Посещение' },
  ];

  protected onMobileSearchToggle(): void {
    const isOpen = !this.mobileSearchOpen();
    this.mobileSearchOpen.set(isOpen);

    if (isOpen) {
      this.searchClick.emit();
    } else {
      this.backClick.emit();
    }
  }

  protected onMobileSearchClose(): void {
    this.mobileSearchOpen.set(false);
    this.backClick.emit();
  }

  protected onDesktopSearchToggle(): void {
    const isOpen = !this.desktopSearchOpen();
    this.desktopSearchOpen.set(isOpen);

    if (isOpen) {
      this.searchClick.emit();
    } else {
      this.backClick.emit();
    }
  }

  protected onDesktopSearchFocus(): void {
    this.searchClick.emit();
  }
}
