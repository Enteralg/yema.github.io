        // 可以在此处添加交互功能
        document.querySelectorAll('.article-section').forEach(section => {
            section.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        });
        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', () => {
            const urlParams = new URLSearchParams(window.location.search);
            window.location.href = `/articles?page=${urlParams.get('from_page') || 1}`;
        });
        // 简单的动画效果
        const cards = document.querySelectorAll('.article-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                card.style.transition = 'opacity 0.6s, transform 0.6s';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });