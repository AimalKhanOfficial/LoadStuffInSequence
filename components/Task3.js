export default function Task3({ next }) {
    next(); // Call next() to ensure any following tasks can proceed if needed

    // Use an icon from Font Awesome
    return (
        <div>
            <i className="fas fa-coffee"></i> {/* Font Awesome coffee icon */}
            <p>Enjoy a coffee icon loaded from Font Awesome!</p>
        </div>
    );
}