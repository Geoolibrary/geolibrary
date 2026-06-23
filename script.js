// Inisialisasi peta Lampung

var map = L.map('map').setView([-5.2, 105.3], 8);

// Basemap OpenStreetMap

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap',
    maxZoom:19
}
).addTo(map);


// ============================
// DATA KABUPATEN/KOTA LAMPUNG
// ============================

const wilayahLampung = [

{
nama:"Bandar Lampung",
koordinat:[-5.429,105.261],
potensi:`
<b>Bandar Lampung</b><br>
📍 Peta UMKM<br>
📍 Peta Kepadatan Penduduk<br>
📍 Peta Infrastruktur<br>
📍 Peta Fasilitas Umum
`
},

{
nama:"Metro",
koordinat:[-5.113,105.307],
potensi:`
<b>Metro</b><br>
📍 Peta Pendidikan<br>
📍 Peta UMKM<br>
📍 Peta Kependudukan
`
},

{
nama:"Lampung Selatan",
koordinat:[-5.562,105.547],
potensi:`
<b>Lampung Selatan</b><br>
📍 Peta Wisata<br>
📍 Peta Tsunami<br>
📍 Peta Potensi Desa<br>
📍 Peta Penggunaan Lahan
`
},

{
nama:"Lampung Timur",
koordinat:[-5.111,105.681],
potensi:`
<b>Lampung Timur</b><br>
📍 Peta Pertanian<br>
📍 Peta Tambak<br>
📍 Peta Peternakan<br>
📍 Peta UMKM
`
},

{
nama:"Lampung Tengah",
koordinat:[-4.900,105.200],
potensi:`
<b>Lampung Tengah</b><br>
📍 Peta Pertanian<br>
📍 Peta Irigasi<br>
📍 Peta Potensi Desa
`
},

{
nama:"Lampung Utara",
koordinat:[-4.830,104.900],
potensi:`
<b>Lampung Utara</b><br>
📍 Peta Perkebunan<br>
📍 Peta Pertanian<br>
📍 Peta Penggunaan Lahan
`
},

{
nama:"Lampung Barat",
koordinat:[-5.037,104.076],
potensi:`
<b>Lampung Barat</b><br>
📍 Peta Wisata Alam<br>
📍 Peta Longsor<br>
📍 Peta Perkebunan Kopi
`
},

{
nama:"Way Kanan",
koordinat:[-4.433,104.600],
potensi:`
<b>Way Kanan</b><br>
📍 Peta Pertanian<br>
📍 Peta Perkebunan<br>
📍 Peta Administrasi Desa
`
},

{
nama:"Tulang Bawang",
koordinat:[-4.450,105.250],
potensi:`
<b>Tulang Bawang</b><br>
📍 Peta Pertanian<br>
📍 Peta Tambak<br>
📍 Peta Potensi Desa
`
},

{
nama:"Tulang Bawang Barat",
koordinat:[-4.520,105.090],
potensi:`
<b>Tulang Bawang Barat</b><br>
📍 Peta Pertanian<br>
📍 Peta Infrastruktur Desa
`
},

{
nama:"Mesuji",
koordinat:[-4.000,105.900],
potensi:`
<b>Mesuji</b><br>
📍 Peta Pertanian<br>
📍 Peta Perkebunan<br>
📍 Peta Penggunaan Lahan
`
},

{
nama:"Pesawaran",
koordinat:[-5.493,105.079],
potensi:`
<b>Pesawaran</b><br>
📍 Peta Wisata<br>
📍 Peta Potensi Desa<br>
📍 Peta UMKM<br>
📍 Peta Pesisir
`
},

{
nama:"Pringsewu",
koordinat:[-5.358,104.975],
potensi:`
<b>Pringsewu</b><br>
📍 Peta UMKM<br>
📍 Peta Pertanian<br>
📍 Peta Fasilitas Umum
`
},

{
nama:"Tanggamus",
koordinat:[-5.470,104.650],
potensi:`
<b>Tanggamus</b><br>
📍 Peta Longsor<br>
📍 Peta Wisata Alam<br>
📍 Peta Perkebunan Kopi
`
},

{
nama:"Pesisir Barat",
koordinat:[-5.193,103.939],
potensi:`
<b>Pesisir Barat</b><br>
📍 Peta Tsunami<br>
📍 Peta Wisata Pantai<br>
📍 Peta Pesisir
`
}

];


// Membuat marker otomatis

wilayahLampung.forEach(function(wilayah){

L.marker(wilayah.koordinat)
.addTo(map)
.bindPopup(wilayah.potensi);

});
