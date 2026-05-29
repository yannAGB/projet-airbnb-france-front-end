import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
    <div
      id="leaflet-map"
      style="height:100%;min-height:420px;border-radius:var(--radius-lg);overflow:hidden;"
    ></div>
  `,
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    /* ChargementLeaflet dynamique pour éviter le SSR */
    import('leaflet').then((L) => {
      const map = L.map('leaflet-map').setView([25.2048, 55.2708], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);

      const priceIcon = (price: number) =>
        L.divIcon({
          html: `<div style="background:var(--orange,#FF5A1F);color:#fff;
                    padding:4px 10px;border-radius:20px;font-size:12px;
                    font-weight:700;box-shadow:0 2px 10px rgba(0,0,0,.2);
                    white-space:nowrap;">${price}€</div>`,
          iconSize: [55, 28],
          className: '',
        });

      const points: [number, number, number][] = [
        [25.21, 55.27, 49],
        [25.19, 55.26, 69],
        [25.23, 55.29, 38],
        [25.205, 55.28, 120],
      ];

      points.forEach(([lat, lng, price]) => {
        L.marker([lat, lng], { icon: priceIcon(price) }).addTo(map);
      });
    });
  }
}
