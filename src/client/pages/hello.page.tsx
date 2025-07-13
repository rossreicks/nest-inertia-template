import { Globe, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hello({ message }: { message: string }) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 p-4">
            <Card className="max-w-md w-full p-8 shadow-lg">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="rounded-full bg-primary/10 p-4">
                        <Globe className="h-12 w-12 text-primary" aria-hidden="true" />
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{message}</h1>

                    <p className="text-lg text-muted-foreground">
                        Welcome to my Nest Inertia Template application. This is a simple demonstration page.
                    </p>

                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" onClick={() => setLikes(likes + 1)} className="group">
                            <Heart className="h-4 w-4 mr-2 group-hover:text-red-500 transition-colors" />
                            Like {likes > 0 && `(${likes})`}
                        </Button>
                    </div>
                </div>
            </Card>

            <footer className="mt-8 text-center text-sm text-muted-foreground">
                <p>Built with Nestjs, React and Tailwind CSS</p>
            </footer>
        </div>
    );
}
