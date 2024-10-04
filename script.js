document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Kirim data ke server
    fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Tampilkan pesan sukses
        document.getElementById('formMessage').innerText = data.message;
        // Reset form
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
        document.getElementById('formMessage').innerText = 'Terjadi kesalahan, silakan coba lagi.';
    });
});
