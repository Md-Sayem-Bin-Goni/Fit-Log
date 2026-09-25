const ExerciseCardSkeleton = () => {
    return (
        <div className="bg-[#15191f] border border-gray-700 rounded-md overflow-hidden">
            
            {/* Image Skeleton */}
            <div className="skeleton w-full h-[180px] rounded-none"></div>

            <div className="p-4">

                {/* Muscle Group Badges */}
                <div className="flex gap-2 mb-4">
                    <div className="skeleton h-5 w-14 rounded-full"></div>
                    <div className="skeleton h-5 w-12 rounded-full"></div>
                </div>

                {/* Exercise Title */}
                <div className="skeleton h-5 w-40 mb-3"></div>

                {/* Equipment */}
                <div className="skeleton h-3 w-24 mb-5"></div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-4"></div>

                {/* Bottom Info */}
                <div className="flex gap-5">
                    <div className="skeleton h-3 w-14"></div>
                    <div className="skeleton h-3 w-14"></div>
                    <div className="skeleton h-3 w-10"></div>
                </div>

            </div>
        </div>
    );
};

export default ExerciseCardSkeleton;