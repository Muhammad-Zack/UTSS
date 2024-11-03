document.querySelectorAll('.btn-delete').forEach(button => {
    button.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this entry?')) {
            // Implementasi fungsi delete
            alert('Entry deleted');
        }
    });
});

document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', () => {
        // Implementasi fungsi edit
        alert('Edit form will open');
    });
});

document.querySelectorAll('.btn-view').forEach(button => {
    button.addEventListener('click', () => {
        // Implementasi fungsi view
        alert('Viewing details');
    });
});
