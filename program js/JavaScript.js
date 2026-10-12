document.getElementById("lanjut").addEventListener("click", BacaInputAwal);
const arrayPilihan = [];
let jumlahPilihan=0;
let Nama ="";
function halaman2() {
  document.getElementById("halaman1").style.display = "none";
  document.getElementById("halaman2").style.display = "block";
  PilihanRadioDrop();
}

function BacaInputAwal(){
  Nama = document.getElementById("Input-1").value;
  jumlahPilihan = Number(document.getElementById("Input-3").value);
  if(Nama === ""){
    alert("Anda Belum Memasukan Nama");
    document.getElementById("Input-1").focus();
    return;
  }
  if(!Number.isInteger(jumlahPilihan)||jumlahPilihan<1||jumlahPilihan>10){
    alert("Masukan Bilangan Bulat 1-10");
    document.getElementById("Input-3").focus();
    return;
  }
  Tampilan();
}
function Tampilan() {
  document.getElementById("lanjut").remove();
  const Ganti = document.getElementById("tampilkan-Input");
  const jumlahPilihan = Number(document.getElementById("Input-3").value);
  const gantiD = document.getElementById("daftar");
  Ganti.innerHTML = "";
  gantiD.innerHTML = "<b>Membuat Daftar Pilihan</b>";

  for (let i = 0; i < jumlahPilihan; i++) {
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
  const juumlahPilihan = Number(document.getElementById("Input-3").value);
  for (let i = 0; i < juumlahPilihan; i++) {
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

  const opsi = document.createElement("option");
  opsi.value = "";
  opsi.textContent = "-- Pilih pilihan --";
  opsi.selected = true;

  select.appendChild(opsi);
  for (let i = 0; i < arrayPilihan.length; i++) {
    const pilihan = document.createElement("option");
    pilihan.value = arrayPilihan[i];
    pilihan.textContent = arrayPilihan[i];

    select.appendChild(pilihan);
  }
  gantiDrop.appendChild(select);
  document.getElementById("lanjut_2").addEventListener("click", simpanPilihan2);
}
let PilihanPengguna = "";
function simpanPilihan2() {
  const pilihanRadio = document.querySelector('input[name="Pilihan"]:checked');
  const pilihanDrop = document.getElementById("dropPilihan").value;
  if (pilihanRadio !== null && pilihanDrop !== "") {
    alert("Pilihan Berhasil Di Simpan.");
    PilihanPengguna = pilihanRadio.value + " dan " + pilihanDrop;
    halaman3();
  } else if (pilihanRadio !== null || pilihanDrop !== "") {
    if (pilihanRadio !== null) {
      PilihanPengguna = pilihanRadio.value;
    } else {
      PilihanPengguna = pilihanDrop;
    }
    alert("Pilihan Berhasil Di Simpan.");
    halaman3();
    return;
  } else {
    alert("Belum Ada Pilihan.");
  }
}

function halaman3() {
  document.getElementById("halaman2").style.display = "none";
  document.getElementById("halaman3").style.display = "block";
  MasukanEmail();
}

function MasukanEmail() {
  const gantiE = document.getElementById("tampilanEmail");
  gantiE.innerHTML = "";
  const div = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.textContent = "Email Anda : ";
  label.className = "Lb-1";
  input.placeholder = "Masukan Email Anda";
  input.id = "EmailUser";
  input.className = "Input-1";
  input.type = "email";

  div.appendChild(label);
  div.appendChild(input);
  gantiE.appendChild(div);
  document.getElementById("lanjut_3").addEventListener("click", priksaEmail);
}
function priksaEmail() {
  const email = document.getElementById("EmailUser");
  const nilaiEmail = email.value.trim().toLowerCase();

  // Harus berakhiran @gmail.com
  const polaGmail = /^[a-z0-9._%+-]+@gmail\.com$/;
    if (nilaiEmail === "") {
      alert("Anda Belum Memasukan Email");
      email.focus();
      return;
    }

  if (!polaGmail.test(nilaiEmail)) {
    alert("Email tidak valid! Gunakan alamat @gmail.com");
    email.focus();
    return;
  }

  alert("Email Anda valid");
  document.getElementById("lanjut_3").style.display = "none";
  TombolHasilAkhir();
}


function TombolHasilAkhir() {
  const gantiB = document.getElementById("LanjutAkhir");
  gantiB.innerHTML = "";
  const button = document.createElement("button");
  button.textContent = "Lihat Hasil";
  button.className = "Button-1";
  button.onclick = halaman4;
  gantiB.appendChild(button);
}
function halaman4() {
  document.getElementById("halaman3").style.display = "none";
  document.getElementById("halaman4").style.display = "block";
  hasilAkhir();
}
function hasilAkhir() {
  const hasilAkhir = document.getElementById("tampilanHasil");
  hasilAkhir.innerHTML =
    " Hallo, nama saya " +
    Nama +
    ", email (" +
    document.getElementById("EmailUser").value +
    "), saya mempunyai sejumlah " +
    jumlahPilihan +
    " pilihan yaitu " +
    arrayPilihan.join(", ") +
    " dan saya memilih " +
    PilihanPengguna +    ".";
}
