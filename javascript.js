// JavaScript for Roblox Store

// Function to show pages
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Function to toggle mobile menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Function to view item detail
function viewItemDetail(title, description, price, image) {
    document.getElementById('modalTitle').textContent = title;
    // Format description with HTML
    const formattedDescription = description
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/✅/g, '<span class="checkmark">✅</span>');
    document.getElementById('modalDescription').innerHTML = '<p>' + formattedDescription + '</p>';
    document.getElementById('modalPrice').textContent = price.toLocaleString();
    document.getElementById('modalImage').src = image;
    document.getElementById('itemDetailModal').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('itemDetailModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('itemDetailModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code here
});