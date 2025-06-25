import { ReservationItem } from "./reservationItem";
 
export class ReservationList
{
    constructor(public user: string, private reservationItems:  ReservationItem[] = [])
    {
        // no statements required
    }
 
    get items(): readonly ReservationItem[]
    {
        return this.reservationItems;
    }
 
    addItem(task: string)
    {
        this.reservationItems.push(new ReservationItem(task));
    }
}