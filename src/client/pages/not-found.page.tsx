import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <div className="space-y-6 max-w-md mx-auto">
                <div className="flex justify-center">
                    <div className="rounded-full bg-muted p-6">
                        <FileQuestion className="h-16 w-16 text-muted-foreground" aria-hidden="true" />
                    </div>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Page not found</h1>

                <p className="text-base text-muted-foreground">
                    Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or
                    perhaps the URL was mistyped.
                </p>

                <div className="flex justify-center">
                    <Button asChild size="lg">
                        <Link href="/">Return to home</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
