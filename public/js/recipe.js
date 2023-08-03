document
    .getElementById('recipeBtn')
    .addEventListener('click', event => {
        event.preventDefault();
        const recipeId = event.target.dataset.id

        fetch('/recipe/' + recipeId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json()).then(info => {
                alert(info);
            });
        });