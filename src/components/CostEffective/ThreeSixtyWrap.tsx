'use client'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const ThreeSixtyWrap = () => {
    const [currentImage, setCurrentImage] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const imagesCount = 36;
    const baseUrl = "/image/360/";

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const diff = e.clientX - startX;
        const sensitivity = 5;

        if (Math.abs(diff) > sensitivity) {
            const direction = diff > 0 ? 1 : -1;
            setCurrentImage(prev => {
                let next = prev + direction;
                if (next > imagesCount) next = 1;
                if (next < 1) next = imagesCount;
                return next;
            });
            setStartX(e.clientX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full select-none"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <Image
                width={500}
                height={500}
                src={`${baseUrl}${currentImage}.png`}
                alt="360 view"
                className="w-full h-full object-contain pointer-events-none"
                draggable={false}
            />
        </div>
    );
};

export default ThreeSixtyWrap;