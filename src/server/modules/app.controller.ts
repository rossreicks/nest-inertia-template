import { Render } from "@inertify/nest";
import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    // constructor(private readonly appService: AppService) {}

    @Get()
    @Render("hello")
    getHello() {
        // const hello = this.appService.getHello();
        //return res.inertia.render("hello");

        return {
            name: "John Doe",
        };
    }
}
