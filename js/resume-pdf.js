// Resume PDF Generation Script

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-pdf');
    
    if (!downloadBtn) {
        return;
    }

    downloadBtn.addEventListener('click', function() {
        // Show loading state
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<span class="download-icon">⏳</span> Generating PDF...';
        downloadBtn.disabled = true;

        // Get the resume content element
        const resumeContent = document.getElementById('resume-content');
        
        if (!resumeContent) {
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
            return;
        }

        // Configure PDF options
        const options = {
            margin: [0.5, 0.5, 0.5, 0.5],
            filename: 'Masih-Sadri-Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                logging: false,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'in', 
                format: 'letter', 
                orientation: 'portrait',
                compress: true
            },
            pagebreak: { 
                mode: ['avoid-all', 'css'],
                avoid: ['.resume-section', '.experience-item', '.section-heading', 'img', '.resume-header']
            }
        };

        // Generate PDF
        html2pdf()
            .set(options)
            .from(resumeContent)
            .save()
            .then(function() {
                // Success - restore button
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
            })
            .catch(function(error) {
                // Error - restore button and show error
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
                
                // Show user-friendly error message
                alert('There was an error generating the PDF. Please try again or contact me directly.');
            });
    });
});
