"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChaingptDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chaingpt_dto_1 = require("./create-chaingpt.dto");
class UpdateChaingptDto extends (0, mapped_types_1.PartialType)(create_chaingpt_dto_1.CreateChaingptDto) {
}
exports.UpdateChaingptDto = UpdateChaingptDto;
//# sourceMappingURL=update-chaingpt.dto.js.map