import { TicketType, Category } from '../../common/model/category.model';

export interface Cart {
    tickets: Ticket[];
}

export interface Ticket {
    category: Category;
    type: TicketType;
}
