<script>
    document.querySelector('.menu-btn').addEventListener('click', () => {
        const menuContent = document.querySelector('.menu-content');
        menuContent.style.display = menuContent.style.display === 'flex' ? 'none' : 'flex';
    });
</script>
