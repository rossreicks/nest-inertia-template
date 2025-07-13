import { type ArgumentsHost, Catch, type ExceptionFilter, NotFoundException } from "@nestjs/common";
import type { Response } from "express";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(_exception: NotFoundException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();

        if (res.inertia) {
            void res.inertia.render("not-found");
        } else {
            res.status(404).send("Not Found");
        }
    }
}
