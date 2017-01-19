import { Component } from '@angular/core';
import { SeoService } from '../../../../../services/seo';

@Component({
  selector: 'overview-tracking-progress',
  templateUrl: './overview-tracking-progress.template.html'
})
export class OverviewTrackingProgressComponent {

  constructor(private seoService: SeoService) {
    seoService.setTitle('How OMB Will Assess Agency Progress', true);
    seoService.setMetaDescription('Learn how agency progress implementing the Source Code Policy will be tracked and measured.');
    seoService.setMetaRobots('Index, Follow');
  }
}
