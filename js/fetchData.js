document.addEventListener('DOMContentLoaded', () => {
    const commentsList = document.getElementById('comments-list');
    const preloader = document.getElementById('preloader');
    const errorMessage = document.getElementById('error-message');

    preloader.style.display = 'block';

    setTimeout(() => {
        fetchData();
    }, 1500);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            if (!response.ok) throw new Error('⚠ Что-то пошло не так');

            const data = await response.json();

            const filterId = Math.random() > 0.5 ? 100 : 200;
            const filteredComments = data.filter(comment =>
                filterId === 100 ? comment.id >= 100 : comment.id <= 200
            );

            const limitedComments = filteredComments.slice(0, 5);

            commentsList.innerHTML = '';
            preloader.style.display = 'none';

            limitedComments.forEach(comment => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${comment.name}</strong>: ${comment.body}`;
                commentsList.appendChild(li);
            });
        } catch (error) {
            preloader.style.display = 'none';
            errorMessage.style.display = 'block';
        }
    };
});
