import { Document, Schema, Types } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

export default class UserEntity extends Document {
  @ApiProperty({ type: String })
  readonly _id: Types.ObjectId = new Types.ObjectId();

  @ApiProperty({ type: String })
  readonly email: string = '';

  @ApiProperty({ type: String })
  readonly password: string = '';

  @ApiProperty({ type: Boolean })
  readonly verified: boolean = true;
}
