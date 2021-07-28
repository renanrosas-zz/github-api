import './styles.css'
import axios from 'axios'
import { useState } from 'react';
import ResultCard from 'components/ResultCard';
import Button from 'components/Button';

type FormData = {
    user: string
}

type Information = {
    avatar_url: string,
    html_url: string,
    followers: string,
    location: string,
    name: string
}

const Search = () => {

    const [formData, setFormData] = useState<FormData>({
        user: ''
    })
    const [information, setInformation] = useState<Information>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        axios.get(`https://api.github.com/users/${formData.user}`)
            .then((response) => {
                setInformation(response.data)
            })
            .catch((error) => {
                setInformation(undefined)
            })
    }

    return (
        <div>
            <div className="search-container">
                <h1>Encontre um perfil Github</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="user" value={formData.user} placeholder="Usuário Github" onChange={handleChange} />
                            <Button text="Encontrar" />             
                </form>
            </div>

            {information &&
                <>
                    <div className="search-result">
                        <div className="imagem-search">
                            <img src={information.avatar_url} alt="" />
                        </div>
                        <div className="form-search">
                            <h3>Informaçoes</h3>
                            <ResultCard title="Perfil" description={information.html_url} />
                            <ResultCard title="Seguidores" description={information.followers} />
                            <ResultCard title="Localidade" description={information.location} />
                            <ResultCard title="Nome" description={information.name} />
                        </div>
                    </div>
                </>
            }

        </div>
    );
};

export default Search;