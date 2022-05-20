import React from "react";
import RepositoryItem from "./RepositoryItem";

const repository = {
    name: "LALO",
    description: "Forms do lalo",
    link: "http://lalo.forms",
};

const RepositoryList = () => {
    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
};

export default RepositoryList;
