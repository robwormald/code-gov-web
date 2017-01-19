import { Routes, RouterModule } from '@angular/router';
import {
  CapacityComponent,
  CapacityBasicsComponent,
  CapacityCollaborationComponent,
  CapacityInteragencySharingComponent,
  CapacityIntroductionComponent,
  CapacityResourcesComponent,
  CapacitySecurityComponent,
  ComplianceComponent,
  ComplianceAcquiringCodeComponent,
  ComplianceInventoryCodeComponent,
  ComplianceLicensingComponent,
  ComplianceMeasuringCodeComponent,
  ComplianceWhatsRequiredComponent,
  DocsComponent,
  IntroductionComponent,
  OverviewComponent,
  OverviewInventoryComponent,
  OverviewPilotComponent,
  OverviewTrackingProgressComponent,
  PolicyGuideComponent
} from '../../utils/app-components';
import { DataResolver } from '../../app.resolver';


export const POLICY_GUIDE_ROUTES: Routes = [
  {
    path: 'policy-guide',
    component: PolicyGuideComponent,
    children: [
      { path: '', redirectTo: 'docs/overview/introduction', pathMatch: 'full'},
      {
        path: 'docs',
        component: DocsComponent,
        children: [
          { path: '', redirectTo: 'overview/introduction', pathMatch: 'full'},
          {
            path: 'compliance',
            component: ComplianceComponent,
            children: [
              { path: '', redirectTo: 'whats-required', pathMatch: 'full'},
              {
                path: 'acquiring-code',
                component: ComplianceAcquiringCodeComponent
              },
              {
                path: 'inventory-code',
                component: ComplianceInventoryCodeComponent
              },
              {
                path: 'licensing',
                component: ComplianceLicensingComponent
              },
              {
                path: 'measuring-code',
                component: ComplianceMeasuringCodeComponent
              },
              {
                path: 'whats-required',
                component: ComplianceWhatsRequiredComponent
              }
            ]
          },
          {
            path: 'open-source',
            component: CapacityComponent,
            children: [
              { path: '', redirectTo: 'introduction', pathMatch: 'full' },
              { path: 'basics', component: CapacityBasicsComponent },
              {
                path: 'collaboration',
                component: CapacityCollaborationComponent
              },
              {
                path: 'interagency-sharing',
                component: CapacityInteragencySharingComponent
              },
              {
                path: 'introduction',
                component: CapacityIntroductionComponent
              },
              { path: 'resources', component: CapacityResourcesComponent },
              { path: 'security', component: CapacitySecurityComponent }
            ]
          },
          {
            path: 'overview',
            component: OverviewComponent,
            children: [
              { path: '', redirectTo: 'introduction', pathMatch: 'full'},
              { path: 'introduction', component: IntroductionComponent },
              { path: 'inventory', component: OverviewInventoryComponent },
              { path: 'pilot', component: OverviewPilotComponent },
              {
                path: 'tracking-progress',
                component: OverviewTrackingProgressComponent
              }
            ]
          }
        ]
     }
    ]
  }
];
