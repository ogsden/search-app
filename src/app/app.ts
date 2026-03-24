import { Component, HostListener, signal } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { HeaderComponent } from './components/header/header';
import { SearchBarComponent } from './components/search-bar/search-bar';
import { FilterPanelComponent } from './components/filter-panel/filter-panel';
import { SearchHistoryComponent } from './components/search-history/search-history';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SearchBarComponent,
    FilterPanelComponent,
    SearchHistoryComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate('250ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('200ms ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class App {
  protected readonly searchActive = signal(false);
  protected readonly filterVisible = signal(false);

  protected onSearchActivated(): void {
    this.searchActive.set(true);
    this.filterVisible.set(true);
  }

  protected onSearchDeactivated(): void {
    this.searchActive.set(false);
    this.filterVisible.set(false);
  }

  protected onSearchFocused(): void {
    this.filterVisible.set(true);
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const isInsideSearch =
      target.closest('.desktop-filter-section') ||
      target.closest('.mobile-search-panel') ||
      target.closest('app-header');

    if (!isInsideSearch && this.filterVisible()) {
      this.filterVisible.set(false);
    }
  }
}
