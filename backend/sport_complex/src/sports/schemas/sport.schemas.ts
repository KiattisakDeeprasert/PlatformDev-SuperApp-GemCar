import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SportDocument = HydratedDocument<Sport>;
@Schema()
export class Sport {
  @Prop(
    raw({
      th: { type: String, required: true},
      en: { type: String, required: true},
    }),
  )
  name: { th: string; en: string };
}
export const SportSchema = SchemaFactory.createForClass(Sport);
SportSchema.set('toJSON', { flattenObjectIds: true, versionKey: false });
SportSchema.set('toObject', { flattenObjectIds: true, versionKey: false });