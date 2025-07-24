import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { PositionDTO } from "../dto";
import { TypeDTO } from "../../common/data";

@ApiExtraModels(PositionDTO, TypeDTO)
export class GetStaticsResponse {
    @ApiProperty({ type: [PositionDTO] })
    positions: PositionDTO[];

    @ApiProperty({ type: [TypeDTO] })
    interests: TypeDTO[];
}