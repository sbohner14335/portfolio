export default function Divider() {
    return (
        <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
                <div className="bg-background px-4">
                    <div className="h-2 w-2 rounded-full bg-primary/30"></div>
                </div>
            </div>
        </div>
    )
}