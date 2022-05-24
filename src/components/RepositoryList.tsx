import RepositoryItem from "./RepositoryItem";
import axios from "axios";

import "../styles/repository.scss";
import { useState, useEffect } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

const RepositoryList = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        axios("https://api.github.com/orgs/rocketseat/repos").then((resp) =>
            setRepositories(resp.data)
        );
    }, []);
    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {repositories.map((repo) => {
                    return <RepositoryItem key={repo.name} repository={repo} />;
                })}
            </ul>
        </section>
    );
};

export default RepositoryList;
