export interface Rooms {
    availableRooms?: number;
    bookedRooms?: number;
    totalRooms: number;


}

export interface RoomsList {
    roomNumber?: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
    rating: number;
}