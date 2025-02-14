document.getElementById('batchSelect').addEventListener('change', function () {
    document.querySelectorAll('.batch').forEach(batch => batch.classList.add('hidden'));
    const selectedBatch = this.value;
    if (selectedBatch) document.getElementById(selectedBatch).classList.remove('hidden');
});