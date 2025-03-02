import { TransformId } from "src/app/decorator/transform-id.decorator";
import { reservationType } from "../enums/reservation.enum";
import { RoomEntity } from "src/rooms/entities/room.entity";
import { Types } from "mongoose";
import { Room } from "src/rooms/schemas/room.schema";
import { UserEntity } from "src/users/entities/user.entity";
import { User } from "src/users/schemas/user.schema";
import { MongoEntity } from "src/app/common/lib/mongo.entiy";
import { Timeslot } from "src/timeslots/schemas/timeslot.schema";
import { TimeslotEntity } from "src/timeslots/entities/timeslot.entity";

export class ReservationEntity extends MongoEntity {
  @TransformId((v) => new RoomEntity(v))
  room?: Types.ObjectId | Room | null;

  @TransformId((v) => new UserEntity(v))
  user?: Types.ObjectId | User | null;

  type: reservationType;

  dateTime: Date;

  @TransformId((v) => new TimeslotEntity(v))
  timeSlot?: Types.ObjectId | Timeslot | null;

  constructor(partial: Partial<ReservationEntity>) {
    super();
    Object.assign(this, partial);
  }
}
