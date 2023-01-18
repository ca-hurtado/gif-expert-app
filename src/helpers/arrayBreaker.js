export const arrayBreak = (old_array, n) => {
    return old_array.reduce(
        (acc, x, i) => {
            const idx = Math.floor(i / n);
            acc[idx] = [...(acc[idx] || []), x];
            return acc;
        }, []
    )
}