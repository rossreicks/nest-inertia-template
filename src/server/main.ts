import { readManifest } from "@inertify/core";
import { inertia } from "@inertify/express";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter, type NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { NotFoundExceptionFilter } from "./exceptions/not-found.filter";
import { AppModule } from "./modules/app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());

    let publicPath = join(__dirname, "../../../public");
    let manifest: { manifest: any; version: string } | undefined;

    if (process.env.NODE_ENV === "development") {
        publicPath = join(__dirname, "../../public");
    } else {
        console.log("publicPath", publicPath);
        manifest = await readManifest(join(publicPath, ".vite/manifest.json"));
    }

    app.use(inertia(manifest));
    app.useStaticAssets(publicPath);
    app.setBaseViewsDir(join(__dirname, "views"));
    app.setViewEngine("ejs");
    app.useGlobalFilters(new NotFoundExceptionFilter());

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
