import { ErrorHandler, Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { CategoriesService } from 'src/app/common/services/categories.service';
import * as CategoriesActions from './categories.actions';

@Injectable()
export class CategoriesEffects {
    @Effect()
    addCategory$ = this.actions$.pipe(
        ofType(CategoriesActions.addCategory),
        map((action) => action.category),
        switchMap((category) => this.categoriesService.addCategory(category)),
        map((categories) => CategoriesActions.addCategorySuccess({ categories })),
        catchError((error) => of(CategoriesActions.addCategoryFailure({ error }))),
    );

    @Effect({ dispatch: false })
    addCategoryFailure$ = this.actions$.pipe(
        ofType(CategoriesActions.addCategoryFailure),
        map((action) => action.error),
        tap((error) => this.errorHandler.handleError(error)),
    );

    constructor(private errorHandler: ErrorHandler, private actions$: Actions, private categoriesService: CategoriesService) {}
}
