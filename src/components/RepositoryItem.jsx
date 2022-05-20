import React from "react";

const RepositoryItem = ({ repository }) => {
    return (
        <div>
            <li>
                <strong>{repository.name ?? "default"}</strong>
                <p>{repository.description}</p>
                <a href={repository.link}>Access the repository</a>
            </li>
        </div>
    );
};

export default RepositoryItem;
