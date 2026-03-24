import { Component } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.html',
  styleUrl: './search-history.scss',
})
export class SearchHistoryComponent {
  protected readonly historyItems: readonly string[] = [
    'закрепить теги',
    'кнопка',
    'приложение',
    'форма',
    'текстовое поле',
  ];
}
