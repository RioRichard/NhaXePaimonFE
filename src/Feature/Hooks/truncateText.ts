export const truncateText = (source: string, size: number) => {
    return source.length > size ? source.slice(0, size - 1) + '…' : source;
};
