import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy";
import { JwtGuard } from "./guard";

@Module({
    imports: [JwtModule.register({    
    })],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtGuard]
})
export class AuthModule {}