document.addEventListener('DOMContentLoaded', () => {
      renderStudentTable();
      document.getElementById('studentSearch').addEventListener('input', (e) => {
        renderStudentTable(e.target.value.trim());
      });
    });

