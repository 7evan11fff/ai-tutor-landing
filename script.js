// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Download button functionality
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadBtnBottom = document.getElementById('downloadBtnBottom');
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    // Function to handle download
    function handleDownload() {
        try {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = './alpha-tutor-extension.zip';
            link.download = 'alpha-tutor-extension.zip';
            link.style.display = 'none';
            
            // Add to DOM, click, then remove
            document.body.appendChild(link);
            link.click();
            
            // Clean up after a short delay
            setTimeout(() => {
                if (link.parentNode) {
                    document.body.removeChild(link);
                }
            }, 100);
            
            // Show success notification
            showNotification('Extension downloaded successfully! Follow the installation instructions in the README.', 'success');
            
        } catch (error) {
            console.error('Download failed:', error);
            showNotification('Download failed. Showing direct download option...', 'error');
            // Show the direct download button as fallback
            const directDownloadBtn = document.getElementById('directDownloadBtn');
            if (directDownloadBtn) {
                directDownloadBtn.style.display = 'inline-flex';
            }
        }
    }

    // Function to show notifications
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        const bgColor = type === 'error' ? '#e74c3c' : type === 'success' ? '#28ca42' : '#667eea';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        `;

        // Add animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
        `;
        document.head.appendChild(style);

        // Add to page
        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
    }

    // Add event listeners
    if (downloadBtn) {
        downloadBtn.addEventListener('click', handleDownload);
        // Add right-click context menu option
        downloadBtn.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = './alpha-tutor-extension.zip';
            link.download = 'alpha-tutor-extension.zip';
            link.click();
        });
    }

    if (downloadBtnBottom) {
        downloadBtnBottom.addEventListener('click', handleDownload);
        // Add right-click context menu option
        downloadBtnBottom.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = './alpha-tutor-extension.zip';
            link.download = 'alpha-tutor-extension.zip';
            link.click();
        });
    }

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            document.querySelector('#features').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('btn-primary') || !this.closest('.cta')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Add loading state to download buttons
    function addLoadingState(button) {
        const originalText = button.innerHTML;
        button.innerHTML = `
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
            </svg>
            Downloading...
        `;
        button.disabled = true;
        
        // Reset after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 3000);
    }

    // Update download buttons to show loading state
    [downloadBtn, downloadBtnBottom].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function() {
                addLoadingState(this);
            });
        }
    });
});

// Function to update download link when zip file is provided
function updateDownloadLink(zipFilePath) {
    const downloadButtons = document.querySelectorAll('#downloadBtn, #downloadBtnBottom');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create download link
            const link = document.createElement('a');
            link.href = zipFilePath;
            link.download = 'alpha-tutor-extension.zip';
            link.click();
            
            // Show success notification
            showNotification('Extension downloaded successfully! Follow the installation instructions in the README.', 'success');
        });
    });
}

// Export function for external use
window.updateDownloadLink = updateDownloadLink;
