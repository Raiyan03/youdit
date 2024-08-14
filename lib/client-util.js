"use client"
export const intoMb = (bytes) => {
    return (bytes / (1024 * 1024)).toFixed(2);
}