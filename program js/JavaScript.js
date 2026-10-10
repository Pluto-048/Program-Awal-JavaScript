document.getElementById("lanjut").addEventListener("click", Tampilan);
const arrayPilihan = [];

function halaman2() {
  document.getElementById("halaman1").style.display = "none";
  document.getElementById("halaman2").style.display = "block";
  PilihanRadioDrop();
}
function Tampilan() {
  document.getElementById("lanjut").remove();
  const Nama = document.getElementById("Input-1").value;
  const Ganti = document.getElementById("tampilkan-Input");
  const juumlahPilihan = Number(document.getElementById("Input-3").value);
  const gantiD = document.getElementById("daftar");
  Ganti.innerHTML = "";
  gantiD.innerHTML = "<b>Membuat Daftar Pilihan</b>";
  for (let i = 0; i < juumlahPilihan; i++) {
    const div = document.createElement("div");
    const label = document.createElement("label");

    label.className = "Lb-1";
    label.textContent = "Pilihan " + (i + 1) + " : ";
    const input = document.createElement("input");
    input.className = "Input-1";
    input.type = "text";
    input.id = "Pilihan" + i;

    div.appendChild(label);
    div.appendChild(input);
    Ganti.appendChild(div);
    Ganti.appendChild(document.createElement("br"));
  }
  const btn = document.createElement("button");
  btn.className = "Button-1";
  btn.textContent = "Simpan Pilihan ";
  btn.onclick = SimpanPilihan;
  Ganti.appendChild(btn);
}

function SimpanPilihan() {
  const jumlahPilihan = document.getElementById("Input-3").value;
  for (let i = 0; i < jumlahPilihan; i++) {
    const inputanUser = document.getElementById("Pilihan" + i).value.trim();
    if (inputanUser === "") {
      alert("Belum Memasukan Data Pilihan ke " + (i + 1));
      document.getElementById("Pilihan" + i).focus();
      return;
    }
    arrayPilihan.push(inputanUser);
  }
  alert("Data Berhasil Di Simpan");
  halaman2();
}
function PilihanRadioDrop() {
  const gantiRad = document.getElementById("tampilanRad");
  gantiRad.innerHTML = "";
  for (let i = 0; i < arrayPilihan.length; i++) {
    const div = document.createElement("div");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "Pilihan";
    radio.value = arrayPilihan[i];
    radio.id = "radio" + i;

    const label = document.createElement("label");
    label.htmlFor = "radio" + i;
    label.textContent = arrayPilihan[i];
    div.appendChild(radio);
    div.appendChild(label);

    gantiRad.appendChild(div);
  }
  const gantiDrop = document.getElementById("tampilkanDrop");
  gantiDrop.innerHTML = "";
  const select = document.createElement("select");
  select.id = "dropPilihan";

  const opsiAwal = document.createElement("option");
  opsiAwal.value = "";
  opsiAwal.textContent = "-- Pilih pilihan --";
  opsiAwal.selected = true;

  select.appendChild(opsiAwal);
  for (let i = 0; i < arrayPilihan.length; i++) {
    const pilihan = document.createElement("option");
    pilihan.value = arrayPilihan[i];
    pilihan.textContent = arrayPilihan[i];

    select.appendChild(pilihan);
  }
  gantiDrop.appendChild(select);
  document.getElementById("lanjut_2").addEventListener("click", simpanPilihan2);
}
function simpanPilihan2() {
  const pilihanRadio = document.querySelector('input[name="Pilihan"]:checked');
  const pilihanDrop = document.getElementById("dropPilihan").value;
  if (pilihanRadio !== null || pilihanDrop !== "") {
    alert("Pilihan Berhasil Di Simpan.");
  } else {
    alert("Belum Ada Pilihan.");
  }
  halaman3();
}

function halaman3(){
  document.getElementById("halaman2").style.display="none";
  document.getElementById("halaman3").style.display="block";
  MasukanEmail();
}

function MasukanEmail(){

}
