import { ReservationService } from './reservation.service';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    getReservedTimeByDate(date?: Date): Promise<any>;
    deleteOne(ID: number): Promise<import("typeorm").DeleteResult>;
}