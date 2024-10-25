export default function Task1({ next }) {
    if (typeof window !== 'undefined') {
        window.something_ready = true;
    }
    next(); // Call next to trigger the next task in sequence
    return null; // Render nothing
}