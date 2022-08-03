import { Module } from "@nestjs/common";
import { PrismadbModule } from "src/prismadb/prismadb.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports:[PrismadbModule],
    controllers:[AuthController],
    providers: [AuthService]
})
export class AuthModule{}