import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-panel',
  imports: [FormsModule],
  templateUrl: './filter-panel.html',
  styleUrl: './filter-panel.scss',
})
export class FilterPanelComponent {
  protected readonly author = signal('');
  protected readonly isMember = signal(false);
  protected readonly inHeaders = signal(false);
  protected readonly strictSearch = signal(false);
  protected readonly onlyTags = signal(false);
  protected readonly onlyRequests = signal(false);
  protected readonly onlyContacts = signal(false);
}
