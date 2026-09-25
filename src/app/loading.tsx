const Loading = () => {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <span className="loading loading-spinner loading-lg text-lime-400"></span>

                <p className="text-sm text-gray-400">
                    Data loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;