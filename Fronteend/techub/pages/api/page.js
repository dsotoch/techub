
export async function BlogsAll() {
    const url = process.env.API_URL;
    const res = await fetch(url + '/Blog/Blogs_all', {
        next: {
            revalidate: 10
        }
    });
    const posts = await res.json();
    return posts;
}

export async function getBlog({ id }) {
    try {
        const apiUrl = process.env.API_URL + '/Blog/getBlog/' + id.id;

        const response = await fetch(apiUrl, {
            next: {
                revalidate: 10
            }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener datos del blog. Código de estado: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.log(`${process.env.API_URL}/Blog/getBlog/${id}`);
        console.error('Error en la solicitud de datos del blog:', error);
        throw error; // Puedes manejar el error aquí o lanzarlo para que lo manejen en el nivel superior
    }
}

