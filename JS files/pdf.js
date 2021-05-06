window.onload = function () {
    document.getElementById("download").addEventListener("click", () => {
        var invoice = this.document.getElementById("invoice");
        var opt = {
            margin:       0,
            filename:     'CV.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            enableLinks:  true,
            html2canvas:  { scale: 3, width: 1358, height: 1920 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
          };
        html2pdf().set(opt).from(invoice).save();
    })
}
