interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    };
}

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
    return (
        <div>
            <li>
                <h1>{repository.name}</h1>
                <p>{repository.description}</p>
                <a href={repository.html_url}>Access the repository</a>
            </li>
        </div>
    );
};

export default RepositoryItem;
