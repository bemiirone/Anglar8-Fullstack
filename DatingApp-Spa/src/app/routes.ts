import { PreventUnsavedGuard } from './guards/prevent-unsaved.guard';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListResolver } from './resolvers/member-list-resolver';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import { AuthGuard } from './guards/auth.guard';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MemberEditResolver } from './resolvers/member-edit.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: ListsComponent },
      {
        path: 'members',
        component: MemberListComponent,
        resolve: { users: MemberListResolver },
      },
      {
        path: 'members/:id',
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver },
      },
      {
        path: 'member/edit',
        component: MemberEditComponent,
        resolve: { user: MemberEditResolver },
        canDeactivate: [PreventUnsavedGuard],
      },
      { path: 'messages', component: MessagesComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
