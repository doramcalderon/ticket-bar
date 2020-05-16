import { ErrorHandler, Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { CategoriesService } from 'src/app/common/services/categories.service';
import * as CategoriesActions from './categories.actions';

@Injectable()
export class CategoriesEffects {
    @Effect()
    loadCategories$ = this.actions$.pipe(
        ofType(CategoriesActions.loadCategories),
        switchMap(() => this.categoriesService.getAllCategories()),
        map((categories) => CategoriesActions.loadCategoriesSuccess({ categories })),
        catchError((error) => of(CategoriesActions.loadCategoriesFailure({ error }))),
    );

    @Effect()
    addUpdateCategory$ = this.actions$.pipe(
        ofType(CategoriesActions.addUpdateCategory),
        map((action) => action.category),
        switchMap((category) => this.categoriesService.addUpdateCategory(category)),
        map((categories) => CategoriesActions.addUpdateCategorySuccess({ categories })),
        catchError((error) => of(CategoriesActions.addUpdateCategoryFailure({ error }))),
    );

    @Effect({ dispatch: false })
    someFail$ = this.actions$.pipe(
        ofType(CategoriesActions.addUpdateCategoryFailure, CategoriesActions.loadCategoriesFailure),
        map((action) => action.error),
        tap((error) => this.errorHandler.handleError(error)),
    );

    constructor(private errorHandler: ErrorHandler, private actions$: Actions, private categoriesService: CategoriesService) {}
}
