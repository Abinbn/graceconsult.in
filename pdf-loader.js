// PDF metadata - add all your PDFs here
const pdfFiles = [
    {
        title: "Alex Thomas CV.pdf",
        path: "Alex Thomas CV.pdf",
        size: "156 kB",
        pages: "1 Page"
    },
    {
        title: "Latest_Plan.pdf",
        path: "Latest_Plan.pdf",
        size: "174 kB",
        pages: "1 Page"
    },
    {
        title: "3Storey Building Plan.pdf",
        path: "3Storey Building.pdf",
        size: "174 kB",
        pages: "2 Page"
    },
    {
        title: "Advisory board valuation standards.pdf",
        path: "Advisory board valuation standards.pdf",
        size: "27.1 kB",
        pages: "2 Page"
    },
    {
        title: "Structural Damage Assessment Report.pdf",
        path: "Structural Damage Assessment Report.pdf",
        size: "590 kB",
        pages: "2 Page"
    },
    {
        title: "Building-defects-library.pdf",
        path: "Building-defects-library.pdf",
        size: "179 kB",
        pages: "2 Page"
    },
    {
        title: "p1.pdf",
        path: "p1.pdf",
        size: "216 kB",
        pages: "2 Page"
    },
    {
        title: "p2.pdf",
        path: "p2.pdf",
        size: "214 kB",
        pages: "2 Page"
    },
    {
        title: "p3.pdf",
        path: "p3.pdf",
        size: "173 kB",
        pages: "2 Page"
    },
    {
        title: "Certificate of Empanelment.pdf",
        path: "Certificate of Empanelment.pdf",
        size: "99.9 kB",
        pages: "1 Page"
    },
    {
        title: "Arbitrator-Empanelment.pdf",
        path: "Arbitrator-Empanelment.pdf",
        size: "809 kB",
        pages: "1 Page"
    },
    {
        title: "A fascinating integration.pdf",
        path: "A fascinating integration.pdf",
        size: "22.7 kB",
        pages: "2 Page"
    },
    {
        title: "VIJAY ANAND FIRST FLOOR.pdf",
        path: "VIJAY ANAND FIRST FLOOR.pdf",
        size: "205 kB",
        pages: "2 Page"
    },
    {
        title: "VIJAY ANAND SECOND FLOOR.pdf",
        path: "VIJAY ANAND SECOND FLOOR.pdf",
        size: "205 kB",
        pages: "2 Page"
    },
    {
        title: "VIJAY ANAND STILT FLOOR.pdf",
        path: "VIJAY ANAND STILT FLOOR.pdf",
        size: "190 kB",
        pages: "2 Page"
    },
    {
        title: "VIJAY ANAND THIRD FLOOR.pdf",
        path: "VIJAY ANAND THIRD FLOOR.pdf",
        size: "201 kB",
        pages: "2 Page"
    },
];

// Function to create PDF preview elements
function createPdfPreviews() {
    const container = document.getElementById('pdf-container');
    
    // Clear any existing content
    container.innerHTML = '';
    
    // Create and append PDF preview elements
    pdfFiles.forEach(pdf => {
        const pdfPreview = document.createElement('div');
        pdfPreview.className = 'pdf-preview';
        
        pdfPreview.innerHTML = `
            <div class="pdf-thumbnail">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 32 32"><path fill="#909090" d="m24.1 2.072l5.564 5.8v22.056H8.879V30h20.856V7.945z"/><path fill="#f4f4f4" d="M24.031 2H8.808v27.928h20.856V7.873z"/><path fill="#7a7b7c" d="M8.655 3.5h-6.39v6.827h20.1V3.5z"/><path fill="#dd2025" d="M22.472 10.211H2.395V3.379h20.077z"/><path fill="#464648" d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2 2 0 0 0 .647-.117a1.4 1.4 0 0 0 .493-.291a1.2 1.2 0 0 0 .335-.454a2.1 2.1 0 0 0 .105-.908a2.2 2.2 0 0 0-.114-.644a1.17 1.17 0 0 0-.687-.65a2 2 0 0 0-.409-.104a2 2 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.94.94 0 0 1-.524.114m3.671-2.306c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.7 2.7 0 0 0 1.028-.175a1.7 1.7 0 0 0 .68-.491a1.9 1.9 0 0 0 .373-.749a3.7 3.7 0 0 0 .114-.949a4.4 4.4 0 0 0-.087-1.127a1.8 1.8 0 0 0-.4-.733a1.6 1.6 0 0 0-.535-.4a2.4 2.4 0 0 0-.549-.178a1.3 1.3 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.06 1.06 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a3 3 0 0 1-.033.513a1.8 1.8 0 0 1-.169.5a1.1 1.1 0 0 1-.363.36a.67.67 0 0 1-.416.106m5.08-3.915H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"/><path fill="#dd2025" d="M21.781 20.255s3.188-.578 3.188.511s-1.975.646-3.188-.511m-2.357.083a7.5 7.5 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14 14 0 0 0 1.658 2.252a13 13 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.8 10.8 0 0 1-.517 2.434a4.4 4.4 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444c-.003.001-1.576 3.056-2.6 2.444M25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14 14 0 0 0-2.453.173a12.5 12.5 0 0 1-2.012-2.655a11.8 11.8 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.3 9.3 0 0 0 .665 2.338s-.425 1.323-.987 2.639s-.946 2.006-.946 2.006a9.6 9.6 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945c.374.508 1.683.623 2.853-.91a23 23 0 0 0 1.7-2.492s1.784-.489 2.339-.623s1.226-.24 1.226-.24s1.629 1.639 3.2 1.581s1.495-.939 1.485-1.035"/><path fill="#909090" d="M23.954 2.077V7.95h5.633z"/><path fill="#f4f4f4" d="M24.031 2v5.873h5.633z"/><path fill="#fff" d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2 2 0 0 0 .647-.117a1.4 1.4 0 0 0 .493-.291a1.2 1.2 0 0 0 .332-.454a2.1 2.1 0 0 0 .105-.908a2.2 2.2 0 0 0-.114-.644a1.17 1.17 0 0 0-.687-.65a2 2 0 0 0-.411-.105a2 2 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.94.94 0 0 1-.524.114m3.67-2.306c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.7 2.7 0 0 0 1.028-.175a1.7 1.7 0 0 0 .68-.491a1.9 1.9 0 0 0 .373-.749a3.7 3.7 0 0 0 .114-.949a4.4 4.4 0 0 0-.087-1.127a1.8 1.8 0 0 0-.4-.733a1.6 1.6 0 0 0-.535-.4a2.4 2.4 0 0 0-.549-.178a1.3 1.3 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.06 1.06 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a3 3 0 0 1-.033.513a1.8 1.8 0 0 1-.169.5a1.1 1.1 0 0 1-.363.36a.67.67 0 0 1-.416.106m5.077-3.915h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"/></svg>
            </div>
            
            <div class="pdf-details">
                <div class="pdf-title">${pdf.title}</div>
                <div class="pdf-meta">Size: ${pdf.size}</div>
                <div class="pdf-meta">${pdf.pages}</div>
                <a href="${pdf.path}" target="_blank" class="view-button">View PDF</a>
            </div>
        `;
        
        container.appendChild(pdfPreview);
    });
}

// Initialize PDF previews when the DOM is loaded
document.addEventListener('DOMContentLoaded', createPdfPreviews);