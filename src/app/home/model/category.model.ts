export interface Category {
    name: string;
    icon?: string;
    color?: string;
    tickets?: TicketType[];
}

export interface TicketType {
    name: string;
    price: number;
}
