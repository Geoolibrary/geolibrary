var map = L.map('map').setView(
[-5.35, 105.20],
8
);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'© OpenStreetMap',
maxZoom:19
}
).addTo(map);

L.marker([-5.48,105.08])
.addTo(map)
.bindPopup(
"<b>Pesawaran</b><br>Peta Wisata<br>Peta UMKM<br>Peta Potensi Desa"
);

L.marker([-5.47,104.65])
.addTo(map)
.bindPopup(
"<b>Tanggamus</b><br>Peta Pertanian<br>Peta Longsor<br>Peta Potensi Desa"
);

L.marker([-5.11,105.68])
.addTo(map)
.bindPopup(
"<b>Lampung Timur</b><br>Peta Penggunaan Lahan<br>Peta Pertanian"
);

L.marker([-5.43,105.27])
.addTo(map)
.bindPopup(
"<b>Bandar Lampung</b><br>Peta UMKM<br>Peta Kependudukan"
);

L.marker([-5.56,105.55])
.addTo(map)
.bindPopup(
"<b>Lampung Selatan</b><br>Peta Wisata<br>Peta Tsunami<br>Peta Potensi Desa"
);
