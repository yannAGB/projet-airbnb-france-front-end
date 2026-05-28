import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  template: `<div
    id="map-container"
    style="height:100%;min-height:400px;border-radius:12px;overflow:hidden;"
  ></div>`,
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = L.map('map-container', { zoomControl: true }).setView([25.2048, 55.2708], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);

    const icon = L.divIcon({
      html: `<div style="background:var(--color-primary, #FF5A1F);color:#fff;padding:4px 8px;border-radius:16px;font-size:12px;font-weight:600;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.2)">49€</div>`,
      iconSize: [50, 28],
      className: '',
    });

    [
      [25.21, 55.27],
      [25.19, 55.26],
      [25.23, 55.29],
    ].forEach(([lat, lng]) => {
      L.marker([lat, lng], { icon }).addTo(map);
    });
  }
}
