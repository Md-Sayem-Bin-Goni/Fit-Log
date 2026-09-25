import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-[75vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg">

                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-black text-lime-400">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-400">
                    Looks like this page skipped its workout.
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="btn mt-7 bg-lime-400 hover:bg-lime-500 text-black border-none font-semibold"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;