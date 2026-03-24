import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBarComponent {
  public readonly focused = output<void>();

  protected onFocus(): void {
    this.focused.emit();
  }
}
