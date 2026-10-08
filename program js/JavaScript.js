document.getElementById("lanjut").addEventListener("click", Tampilan);
function halaman2() {
  document.getElementById("halaman1").style.display = "none";
  document.getElementById("halaman2").style.display = "block";
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

function halaman3() {
  document.getElementById("halaman2").style.display = "none";
  document.getElementById("halaman3").style.display = "block";
}

function SimpanPilihan() {
    const jumlahPilihan =document.getElementById("Input-3").value;
    arrayPilihan=[];
    for (let i = 0; i < jumlahPilihan; i++) {
      const inputanUser = document.getElementById("Pilihan" + i).value.trim();
      if(inputanUser===""){
          alert("Belum Memasukan Data Pilihan ke "+(i+1));
          input.focus();
          return;
        }
        arrayPilihan.push(inputanUser);

    }
    if(arrayPilihan=""){

    }
    alert("Data Berhasil Di Simpan");
    halaman2();
}
