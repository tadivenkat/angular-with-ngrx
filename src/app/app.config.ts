import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './state/bookmarker/reducer/app.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { AppEffects } from './state/bookmarker/effects/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(), 
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService)),
    provideStore({bookmarks: bookmarkReducer}),
    provideEffects([AppEffects])
  ],
};
