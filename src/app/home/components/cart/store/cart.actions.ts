import { createAction, props } from '@ngrx/store';

import { TicketType } from 'src/app/common/model/category.model';

export const loadCart = createAction('[Cart] Load Cart');

export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ data: any }>());

export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: any }>());

export const addTicket = createAction('[Cart] Add Ticket', props<{ ticket: TicketType }>());
