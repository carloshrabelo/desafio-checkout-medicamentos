function a() {
  site.showLoading();
  setTimeout(function() {
      var doc;
      doc = new jsPDF('p', 'pt', 'a4');
      for (var i = 0; i < this.colHighcharts.length; i++) {
          var svg = this.colHighcharts[i].getSVG();
          if (svg) {
              svg = svg.replace(/\r?\n|\r/g, '').trim();
          }
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);
          canvg(canvas, svg);
          var imgData = canvas.toDataURL('image/png');

          doc.addImage(imgData, 'PNG', 15, 15, 600, 600);
          doc.addPage();
      }
      doc.save('Mapa_Demografico.pdf');
      site.hideLoading();
  }.bind(this), 200);
};