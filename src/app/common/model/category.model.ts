export interface Category {
    id: string;
    name: string;
    icon?: string;
    color?: string;
    tickets?: TicketType[];
}

export interface TicketType {
    name: string;
    price: number;
    /**
     * Base64 image.
     */
    image?: string;
}
