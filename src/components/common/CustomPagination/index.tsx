"use client";

interface CustomPaginationProps {
    activeIndex: number;
    totalSlides: number;
    onDotClick: (index: number) => void;
}

const CustomPagination = ({
    activeIndex,
    totalSlides,
    onDotClick,
}: CustomPaginationProps) => {

    return (
        <div className="flex items-center gap-4 text-xs font-mono tracking-widest mt-10 justify-center">
            {/* Number Dots */}
            <div className="flex items-center gap-3">
                {Array.from({ length: totalSlides }).map((_, i) => (
                    <span
                        key={i}
                        className={`cursor-pointer transition-all duration-300 hover:scale-110 ${activeIndex === i
                            ? "text-primary font-bold" : "text-secondary font-bold"
                            }`}
                        onClick={() => onDotClick(i)}
                    >
                        {String(i + 1).padStart(2, "0")}.
                    </span>
                ))}
            </div>

            {/* Progress Bar Line */}
            <div className={`w-16 h-0.5 relative overflow-hidden bg-white/20}`}>
                <div
                    className="absolute left-0 top-0 h-full bg-primary transition-all duration-500 ease-out"
                    style={{
                        width: `${((activeIndex + 1) / totalSlides) * 100}%`,
                    }}
                />
            </div>
        </div>
    );
};

export default CustomPagination;