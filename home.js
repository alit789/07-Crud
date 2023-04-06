var nomor = 1;

function tambahNama() {
  var inputNama = document.getElementById("namaInput").value;
  var inputNim = document.getElementById("nimInput").value;
  var inputDate = document.getElementById("dateInput").value;
  if (inputNama && inputNim && inputDate === "") {
    alert("Harap isi Data terlebih dahulu");
    return;
  }

  var table = document.getElementById("namaTable");
  var row = table.insertRow();
  var nomorCell = row.insertCell(0);
  var namaCell = row.insertCell(1);
  var nimCell = row.insertCell(2);
  var dateCell = row.insertCell(3);
  var aksiCell = row.insertCell(4);
  nomorCell.innerHTML = nomor++;
  namaCell.innerHTML = inputNama;
  nimCell.innerHTML = inputNim;
  dateCell.innerHTML = inputDate;
  var deleteBtnSingle = '<button onClick="hapusBaris(this)" className="btnDelete">Delete</button>';
  aksiCell.innerHTML = deleteBtnSingle;
  document.getElementById("namaInput").value = "";
  document.getElementById("nimInput").value = "";
  document.getElementById("dateInput").value = "";
}

function hapusAllBaris() {
  var tableDelete = document.getElementById("namaTable");
  var rowLen = tableDelete.rows.length;
  for (let i = 1; i < rowLen; i++) {
    tableDelete.deleteRow(i);
  }
}

function hapusBaris(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);

  var table = document.getElementById("namaTable");
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML = i;
  }
  nomor--;
}
