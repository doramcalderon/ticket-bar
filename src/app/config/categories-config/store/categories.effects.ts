import { ErrorHandler, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Category, TicketType } from 'src/app/common/model/category.model';
import { CategoriesService } from 'src/app/common/services/categories.service';
import { TicketConfigComponent } from '../../components/ticket-config/ticket-config.component';
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

    @Effect()
    deleteCategory$ = this.actions$.pipe(
        ofType(CategoriesActions.deleteCategory),
        map((action) => action.id),
        switchMap((id) => this.categoriesService.removeCategory(id)),
        map((categories) => CategoriesActions.deleteCategorySuccess({ categories })),
        catchError((error) => of(CategoriesActions.deleteCategoryFailure({ error }))),
    );

    @Effect()
    openTicketConfig$ = this.actions$.pipe(
        ofType(CategoriesActions.openTicketConfig),
        switchMap((action) => this.openTicketConfig(action.category, action.ticket)),
        map((result: { category: Category; newTicket: TicketType; oldTicket: TicketType }) =>
            !!result.oldTicket ? CategoriesActions.updateTicket(result) : CategoriesActions.addTicketToCategory(result),
        ),
        catchError((error) => of(CategoriesActions.updateTicketFailure({ error }))),
    );

    @Effect()
    updateTicket$ = this.actions$.pipe(
        ofType(CategoriesActions.updateTicket),
        switchMap((action) => {
            return this.categoriesService.updateTicketInCategories(action.newTicket, action.oldTicket);
        }),
        map((categories) => CategoriesActions.updateTicketSuccess({ categories })),
        catchError((error) => of(CategoriesActions.updateTicketFailure({ error }))),
    );

    @Effect()
    addTicketToCategory$ = this.actions$.pipe(
        ofType(CategoriesActions.addTicketToCategory),
        switchMap((action) => this.categoriesService.addTicketToCategory(action.category, action.newTicket)),
        map((categories) => CategoriesActions.addTicketToCategorySuccess({ categories })),
        catchError((error) => of(CategoriesActions.addTicketToCategoryFailure({ error }))),
    );

    @Effect({ dispatch: false })
    someFail$ = this.actions$.pipe(
        ofType(
            CategoriesActions.addUpdateCategoryFailure,
            CategoriesActions.loadCategoriesFailure,
            CategoriesActions.updateTicketFailure,
            CategoriesActions.openTicketConfigFailure,
        ),
        map((action) => action.error),
        tap((error) => this.errorHandler.handleError(error)),
    );

    constructor(
        private errorHandler: ErrorHandler,
        private modalCtrl: ModalController,
        private actions$: Actions,
        private categoriesService: CategoriesService,
    ) {}

    private async openTicketConfig(category: Category, ticket: TicketType): Promise<any> {
        const modal = await this.modalCtrl.create({ component: TicketConfigComponent, componentProps: { category, ticket } });
        await modal.present();
        const result = (await modal.onDidDismiss()).data;
        const { newTicket, oldTicket } = result;
        return { category, newTicket, oldTicket };
    }
}
