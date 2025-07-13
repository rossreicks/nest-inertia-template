import { InertiaModule } from "@inertify/nest";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [InertiaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
